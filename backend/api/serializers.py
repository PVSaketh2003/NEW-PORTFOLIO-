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
    honeypot = serializers.CharField(required=False, write_only=True, allow_blank=True, default='')

    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'subject', 'message', 'honeypot', 'email_sent', 'created_at']
        read_only_fields = ['id', 'email_sent', 'created_at']

    def validate_name(self, value):
        cleaned = value.strip()
        if len(cleaned) < 2:
            raise serializers.ValidationError("Name must be at least 2 characters long.")
        if len(cleaned) > 150:
            raise serializers.ValidationError("Name cannot exceed 150 characters.")
        return cleaned

    def validate_message(self, value):
        cleaned = value.strip()
        if len(cleaned) < 5:
            raise serializers.ValidationError("Message must be at least 5 characters long.")
        if len(cleaned) > 5000:
            raise serializers.ValidationError("Message cannot exceed 5000 characters.")
        return cleaned

    def validate_subject(self, value):
        cleaned = value.strip()
        if len(cleaned) > 250:
            raise serializers.ValidationError("Subject cannot exceed 250 characters.")
        return cleaned

