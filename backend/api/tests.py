from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from api.models import Profile, Experience, Project, ContactMessage

class PortfolioApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.profile = Profile.objects.create(
            name="P V SAIRAM SAKETH",
            title="Computer Vision Engineer",
            email="pvsairamsaketh@gmail.com",
            phone="+91 9359587816",
            linkedin="https://linkedin.com/in/pvsaketh",
            github="https://github.com/PVSaketh2003",
            portfolio="https://portfolio.pvsairamsaketh.in",
            summary="Computer Vision & Edge AI Engineer."
        )
        self.project = Project.objects.create(
            title="CALM UAV Project",
            category="UAV Defense",
            tagline="Loiter Munition AI",
            description=["Autonomous target recognition"],
            metrics="Sub-15ms latency",
            technologies=["NVIDIA Jetson", "TensorRT"],
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
        self.assertEqual(response.data['name'], 'P V SAIRAM SAKETH')

    def test_projects_endpoint(self):
        url = reverse('api-projects')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['title'], 'CALM UAV Project')

    def test_contact_submission(self):
        url = reverse('api-contact')
        payload = {
            "name": "Defense Recruiter",
            "email": "recruiter@aerospace.com",
            "subject": "Interview for Senior Edge AI Engineer",
            "message": "We reviewed your CALM loiter munition and Jetson Orin Nano work and want to speak."
        }
        response = self.client.post(url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(response.data['success'])
        self.assertEqual(ContactMessage.objects.count(), 1)
        self.assertEqual(ContactMessage.objects.first().name, 'Defense Recruiter')

    def test_contact_submission_invalid(self):
        url = reverse('api-contact')
        payload = {
            "name": "",
            "email": "not-an-email"
        }
        response = self.client.post(url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
