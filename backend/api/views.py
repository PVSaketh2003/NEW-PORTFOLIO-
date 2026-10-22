from datetime import datetime, timezone
from django.db import connection
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle

from .models import Profile, Experience, Project, SkillCategory, ContactMessage
from .serializers import (
    ProfileSerializer, ExperienceSerializer, ProjectSerializer, 
    SkillCategorySerializer, ContactMessageSerializer
)

class ContactThrottle(AnonRateThrottle):
    rate = '15/hour'

class HealthCheckView(APIView):
    """
    Health check endpoint returning service status and database connectivity.
    """
    throttle_classes = []

    def get(self, request):
        db_status = "connected"
        http_status = status.HTTP_200_OK
        try:
            connection.ensure_connection()
        except Exception as e:
            db_status = f"unhealthy: {str(e)}"
            http_status = status.HTTP_503_SERVICE_UNAVAILABLE

        return Response({
            "status": "healthy" if http_status == 200 else "degraded",
            "service": "portfolio-backend",
            "version": "1.0.0",
            "database": db_status,
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }, status=http_status)

class ProfileView(APIView):
    """
    Fetch the public developer profile.
    """
    def get(self, request):
        profile = Profile.objects.first()
        if not profile:
            return Response({}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

class ExperienceListView(APIView):
    """
    List professional work history and internships.
    """
    def get(self, request):
        experiences = Experience.objects.all().order_by('order', '-id')
        serializer = ExperienceSerializer(experiences, many=True)
        return Response(serializer.data)

class ProjectListView(APIView):
    """
    List portfolio projects.
    """
    def get(self, request):
        projects = Project.objects.all().order_by('order', '-id')
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

class SkillListView(APIView):
    """
    List skills organized by domain category.
    """
    def get(self, request):
        categories = SkillCategory.objects.prefetch_related('skills').all().order_by('order')
        serializer = SkillCategorySerializer(categories, many=True)
        return Response(serializer.data)

import logging
import smtplib
import socket
from django.conf import settings
from django.core.mail import EmailMessage

logger = logging.getLogger(__name__)

class ContactView(APIView):
    """
    Submit a contact inquiry and dispatch notification via SMTP email.
    """
    throttle_classes = [ContactThrottle]

    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Anti-spam honeypot detection: bots filling hidden honeypot are dropped silently
        honeypot = serializer.validated_data.pop('honeypot', '')
        if honeypot:
            logger.warning(f"Honeypot triggered from IP: {request.META.get('REMOTE_ADDR')}")
            return Response({
                "success": True,
                "message": "Your message has been received."
            }, status=status.HTTP_200_OK)

        # Extract client IP safely
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0].strip()
        else:
            ip = request.META.get('REMOTE_ADDR')

        # Persist submission to database
        contact_msg = serializer.save(ip_address=ip)

        # Prepare verified SMTP notification email
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient = settings.CONTACT_RECEIVER_EMAIL
        subject_line = f"[Portfolio Contact] {contact_msg.subject or 'New Inquiry'} from {contact_msg.name}"
        timestamp_str = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')

        body_content = (
            f"You received a new inquiry from your personal portfolio website:\n\n"
            f"Name: {contact_msg.name}\n"
            f"Email: {contact_msg.email}\n"
            f"Subject: {contact_msg.subject or '(No subject provided)'}\n"
            f"Timestamp: {timestamp_str}\n"
            f"IP Address: {ip or 'Unknown'}\n\n"
            f"Message Body:\n"
            f"------------------------------------------------------------\n"
            f"{contact_msg.message}\n"
            f"------------------------------------------------------------\n\n"
            f"Reply Note: You can reply directly to this email to contact {contact_msg.email}."
        )

        email = EmailMessage(
            subject=subject_line,
            body=body_content,
            from_email=from_email,
            to=[recipient],
            reply_to=[contact_msg.email],
        )

        # Determine delivery capability
        is_test_or_console = (
            settings.EMAIL_BACKEND.endswith('locmem.EmailBackend') or
            settings.EMAIL_BACKEND.endswith('console.EmailBackend')
        )
        has_smtp_credentials = bool(settings.EMAIL_HOST_USER and settings.EMAIL_HOST_PASSWORD)

        if not has_smtp_credentials and not is_test_or_console:
            err_msg = "SMTP credentials (EMAIL_HOST_USER, EMAIL_HOST_PASSWORD) are not configured on the server."
            logger.warning(err_msg)
            contact_msg.email_sent = False
            contact_msg.delivery_error = err_msg
            contact_msg.save(update_fields=['email_sent', 'delivery_error'])
            return Response({
                "detail": "Email dispatch service is currently awaiting SMTP configuration. Your message has been securely recorded in our database, or you can email pvsairamsaketh@gmail.com directly."
            }, status=status.HTTP_503_SERVICE_UNAVAILABLE)

        try:
            email.send(fail_silently=False)
            contact_msg.email_sent = True
            contact_msg.delivery_error = None
            contact_msg.save(update_fields=['email_sent', 'delivery_error'])
            logger.info(f"Contact email successfully delivered for {contact_msg.email}")
            return Response({
                "success": True,
                "message": "Your message has been sent successfully! I will get back to you shortly."
            }, status=status.HTTP_201_CREATED)
        except (smtplib.SMTPException, socket.error, Exception) as exc:
            exc_name = type(exc).__name__
            logger.error(f"SMTP delivery failed ({exc_name}): {str(exc)}")
            contact_msg.email_sent = False
            contact_msg.delivery_error = f"{exc_name}: {str(exc)}"
            contact_msg.save(update_fields=['email_sent', 'delivery_error'])
            return Response({
                "detail": f"SMTP delivery could not complete at this time ({exc_name}). Your message was saved in our database. Please email pvsairamsaketh@gmail.com directly."
            }, status=status.HTTP_503_SERVICE_UNAVAILABLE)

