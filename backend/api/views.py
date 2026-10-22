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

class ContactView(APIView):
    """
    Submit a contact inquiry.
    """
    throttle_classes = [ContactThrottle]

    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            # Extract client IP
            x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
            if x_forwarded_for:
                ip = x_forwarded_for.split(',')[0].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')

            serializer.save(ip_address=ip)
            return Response({
                "success": True,
                "message": "Message transmitted successfully! Thank you for reaching out."
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
