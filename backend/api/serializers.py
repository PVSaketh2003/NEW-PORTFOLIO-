from rest_framework import serializers
from .models import Profile, Experience, Project, SkillCategory, SkillItem, ContactMessage

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    liveUrl = serializers.CharField(source='live_url', required=False, allow_null=True)
    githubUrl = serializers.CharField(source='github_url', required=False, allow_null=True)
    isFeatured = serializers.BooleanField(source='is_featured', required=False)

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'category', 'tagline', 'description', 
            'metrics', 'technologies', 'liveUrl', 'githubUrl', 'isFeatured', 'order'
        ]

class SkillItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillItem
        fields = ['name', 'level', 'highlight']

class SkillCategorySerializer(serializers.ModelSerializer):
    skills = SkillItemSerializer(many=True, read_only=True)

    class Meta:
        model = SkillCategory
        fields = ['category', 'skills']

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']
