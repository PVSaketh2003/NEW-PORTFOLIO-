from django.test import TestCase, override_settings
from django.urls import reverse
from django.core import mail
from rest_framework.test import APIClient
from rest_framework import status
from unittest.mock import patch
import smtplib
from api.models import Profile, Experience, Project, ContactMessage

@override_settings(
    EMAIL_BACKEND='django.core.mail.backends.locmem.EmailBackend',
    DEFAULT_FROM_EMAIL='noreply@pvsairamsaketh.in',
    CONTACT_RECEIVER_EMAIL='pvsairamsaketh@gmail.com'
)
class PortfolioApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        mail.outbox = []
        self.profile = Profile.objects.create(
            name="PV Sairam Saketh",
            title="Computer Vision Engineer | Edge AI",
            email="pvsairamsaketh@gmail.com",
            phone="+91 9359587816",
            linkedin="https://linkedin.com/in/pvsaketh",
            github="https://github.com/PVSaketh2003",
            portfolio="https://portfolio.pvsairamsaketh.in",
            summary="Computer Vision & Edge AI Engineer."
        )
        self.project = Project.objects.create(
            title="VisionEye",
            category="Edge AI",
            tagline="Real-Time Foot-Traffic Analytics",
            description=["Autonomous foot-traffic monitoring"],
            metrics="Sub-15ms latency",
            technologies=["NVIDIA Jetson", "TensorRT", "YOLO"],
            is_featured=True
        )

    def test_health_check_endpoint(self):
        url = reverse('api-health')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['status'], 'healthy')
        self.assertEqual(response.data['service'], 'portfolio-backend')
        self.assertIn('database', response.data)
        self.assertIn('timestamp', response.data)

    def test_profile_endpoint(self):
        url = reverse('api-profile')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], 'PV Sairam Saketh')

    def test_projects_endpoint(self):
        url = reverse('api-projects')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['title'], 'VisionEye')

    def test_contact_submission_success_sends_email(self):
        url = reverse('api-contact')
        payload = {
            "name": "Alex Mercer",
            "email": "alex@visionlabs.ai",
            "subject": "Interview for Edge AI Role",
            "message": "We reviewed your VisionEye pipeline and want to connect regarding our edge vision team."
        }
        response = self.client.post(url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(response.data['success'])
        
        # Verify database record
        self.assertEqual(ContactMessage.objects.count(), 1)
        record = ContactMessage.objects.first()
        self.assertEqual(record.name, 'Alex Mercer')
        self.assertEqual(record.email, 'alex@visionlabs.ai')
        self.assertTrue(record.email_sent)
        self.assertIsNone(record.delivery_error)

        # Verify email was dispatched to in-memory mailbox
        self.assertEqual(len(mail.outbox), 1)
        sent_email = mail.outbox[0]
        self.assertIn('[Portfolio Contact]', sent_email.subject)
        self.assertIn('Alex Mercer', sent_email.subject)
        self.assertEqual(sent_email.to, ['pvsairamsaketh@gmail.com'])
        self.assertEqual(sent_email.from_email, 'noreply@pvsairamsaketh.in')
        self.assertEqual(sent_email.reply_to, ['alex@visionlabs.ai'])
        self.assertIn('We reviewed your VisionEye pipeline', sent_email.body)

    def test_contact_submission_honeypot_silently_dropped(self):
        url = reverse('api-contact')
        payload = {
            "name": "Spam Bot",
            "email": "bot@spam.com",
            "subject": "Crypto Offer",
            "message": "Visit our casino link now!",
            "honeypot": "I am a malicious bot filling all fields"
        }
        response = self.client.post(url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Should not create database record or send email
        self.assertEqual(ContactMessage.objects.count(), 0)
        self.assertEqual(len(mail.outbox), 0)

    def test_contact_submission_invalid_fields(self):
        url = reverse('api-contact')
        payload = {
            "name": "",
            "email": "not-an-email",
            "message": "hi"  # Too short (< 5 chars)
        }
        response = self.client.post(url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('name', response.data)
        self.assertIn('email', response.data)
        self.assertIn('message', response.data)

    def test_contact_submission_oversized_message(self):
        url = reverse('api-contact')
        payload = {
            "name": "Test User",
            "email": "test@user.com",
            "subject": "Test Subject",
            "message": "a" * 5001  # Exceeds max 5000 limit
        }
        response = self.client.post(url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('message', response.data)

    @patch('django.core.mail.EmailMessage.send')
    def test_contact_submission_smtp_failure_returns_503(self, mock_send):
        mock_send.side_effect = smtplib.SMTPConnectError(421, b"Connection refused by mail server")
        url = reverse('api-contact')
        payload = {
            "name": "Sarah Connor",
            "email": "sarah@resistance.org",
            "subject": "Mission Briefing",
            "message": "Autonomous detection systems required on edge nodes."
        }
        response = self.client.post(url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_503_SERVICE_UNAVAILABLE)
        self.assertIn('SMTP delivery could not complete', response.data['detail'])

        # Message is saved in DB, but email_sent is False
        self.assertEqual(ContactMessage.objects.count(), 1)
        record = ContactMessage.objects.first()
        self.assertFalse(record.email_sent)
        self.assertIn('SMTPConnectError', record.delivery_error)

