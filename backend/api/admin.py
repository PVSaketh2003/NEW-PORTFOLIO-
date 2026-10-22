from django.contrib import admin
from .models import Profile, Experience, Project, SkillCategory, SkillItem, ContactMessage

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'email', 'phone')

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('role', 'company', 'duration', 'order')
    list_editable = ('order',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'is_featured', 'order')
    list_filter = ('category', 'is_featured')
    list_editable = ('order', 'is_featured')

class SkillItemInline(admin.TabularInline):
    model = SkillItem
    extra = 1

@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    list_display = ('category', 'order')
    inlines = [SkillItemInline]

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'ip_address', 'created_at')
    readonly_fields = ('name', 'email', 'subject', 'message', 'ip_address', 'created_at')
