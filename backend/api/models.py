from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=150)
    title = models.CharField(max_length=250)
    subtitle = models.CharField(max_length=250, blank=True)
    location = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    linkedin = models.URLField(max_length=250)
    github = models.URLField(max_length=250)
    portfolio = models.URLField(max_length=250)
    summary = models.TextField()

    def __str__(self):
        return self.name

class Experience(models.Model):
    role = models.CharField(max_length=150)
    company = models.CharField(max_length=150)
    location = models.CharField(max_length=150)
    duration = models.CharField(max_length=100)
    division = models.CharField(max_length=150, blank=True)
    highlights = models.JSONField(default=list)
    technologies = models.JSONField(default=list)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.role} @ {self.company}"

class Project(models.Model):
    CATEGORY_CHOICES = [
        ('UAV Defense', 'UAV Defense'),
        ('Computer Vision', 'Computer Vision'),
        ('Edge AI', 'Edge AI'),
        ('Full Stack', 'Full Stack'),
        ('Research', 'Research'),
    ]

    title = models.CharField(max_length=200)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    tagline = models.CharField(max_length=250)
    description = models.JSONField(default=list)
    metrics = models.CharField(max_length=250, blank=True)
    technologies = models.JSONField(default=list)
    live_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title

class SkillCategory(models.Model):
    category = models.CharField(max_length=100)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.category

class SkillItem(models.Model):
    category = models.ForeignKey(SkillCategory, related_name='skills', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    level = models.PositiveIntegerField(default=85)
    highlight = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} ({self.category.category})"

class ContactMessage(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    subject = models.CharField(max_length=250, blank=True)
    message = models.TextField()
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    email_sent = models.BooleanField(default=False)
    delivery_error = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        status_label = "DELIVERED" if self.email_sent else "PENDING/FAILED"
        return f"[{status_label}] Message from {self.name} <{self.email}> at {self.created_at}"
