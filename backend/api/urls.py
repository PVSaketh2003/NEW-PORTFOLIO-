from django.urls import path
from .views import (
    HealthCheckView, ProfileView, ExperienceListView, 
    ProjectListView, SkillListView, ContactView
)

urlpatterns = [
    path('health/', HealthCheckView.as_view(), name='api-health'),
    path('profile/', ProfileView.as_view(), name='api-profile'),
    path('experiences/', ExperienceListView.as_view(), name='api-experiences'),
    path('projects/', ProjectListView.as_view(), name='api-projects'),
    path('skills/', SkillListView.as_view(), name='api-skills'),
    path('contact/', ContactView.as_view(), name='api-contact'),
]
