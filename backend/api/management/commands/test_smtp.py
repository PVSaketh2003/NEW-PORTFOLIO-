import sys
from django.core.management.base import BaseCommand
from django.conf import settings
from django.core.mail import EmailMessage

class Command(BaseCommand):
    help = 'Safely verifies SMTP connectivity and sends a test email to the configured or specified recipient.'

    def add_arguments(self, parser):
        parser.add_argument(
            '--to',
            type=str,
            default=settings.CONTACT_RECEIVER_EMAIL,
            help='Recipient email address to test delivery'
        )

    def handle(self, *args, **options):
        recipient = options['to']
        self.stdout.write(self.style.NOTICE("=== SMTP Configuration Diagnostic ==="))
        self.stdout.write(f"EMAIL_BACKEND: {settings.EMAIL_BACKEND}")
        self.stdout.write(f"EMAIL_HOST: {settings.EMAIL_HOST}")
        self.stdout.write(f"EMAIL_PORT: {settings.EMAIL_PORT}")
        self.stdout.write(f"EMAIL_USE_TLS: {settings.EMAIL_USE_TLS}")
        self.stdout.write(f"EMAIL_USE_SSL: {settings.EMAIL_USE_SSL}")
        self.stdout.write(f"EMAIL_HOST_USER configured: {'Yes' if bool(settings.EMAIL_HOST_USER) else 'No'}")
        self.stdout.write(f"EMAIL_HOST_PASSWORD configured: {'Yes (redacted)' if bool(settings.EMAIL_HOST_PASSWORD) else 'No'}")
        self.stdout.write(f"DEFAULT_FROM_EMAIL: {settings.DEFAULT_FROM_EMAIL}")
        self.stdout.write(f"TARGET RECIPIENT: {recipient}")
        self.stdout.write("---------------------------------------")

        if not settings.EMAIL_HOST_USER or not settings.EMAIL_HOST_PASSWORD:
            self.stdout.write(self.style.WARNING(
                "WARNING: EMAIL_HOST_USER or EMAIL_HOST_PASSWORD is missing in your environment.\n"
                "To deliver real emails via Gmail SMTP, you must configure:\n"
                "  EMAIL_HOST=smtp.gmail.com\n"
                "  EMAIL_PORT=587\n"
                "  EMAIL_USE_TLS=True\n"
                "  EMAIL_HOST_USER=your-email@gmail.com\n"
                "  EMAIL_HOST_PASSWORD=your-16-character-google-app-password\n"
                "  CONTACT_RECEIVER_EMAIL=your-destination-email@gmail.com\n"
            ))

        self.stdout.write("Attempting SMTP handshake and message dispatch...")
        try:
            email = EmailMessage(
                subject="[Test Verification] Portfolio SMTP Diagnostic",
                body=(
                    f"Hello PV Sairam Saketh,\n\n"
                    f"This is a verified test email sent from your portfolio backend on {settings.EMAIL_HOST}:{settings.EMAIL_PORT}.\n"
                    f"If you are reading this in your inbox, your SMTP configuration is 100% operational!\n"
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[recipient],
            )
            email.send(fail_silently=False)
            self.stdout.write(self.style.SUCCESS(f"SUCCESS: Test email was successfully dispatched to {recipient}!"))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f"FAILURE: SMTP delivery failed with error:\n{type(e).__name__}: {str(e)}"))
            sys.exit(1)
