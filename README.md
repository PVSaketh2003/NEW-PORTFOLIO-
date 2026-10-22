# P V Sairam Saketh — Personal Portfolio

Production-grade, cloud-native personal portfolio showcasing real-time Computer Vision pipelines, Edge AI, Defense UAV systems (CALM Loiter Munition), and full-stack engineering.

- **Public Endpoint:** [https://portfolio.pvsairamsaketh.in](https://portfolio.pvsairamsaketh.in)
- **Primary Domain:** `pvsairamsaketh.in` (GoDaddy DNS)
- **Deployment Host:** AWS EC2 (`m7i-flex.large`, Ubuntu 26.04 LTS, Region: `ap-southeast-2`)
- **Orchestration:** Kubernetes (`k3s`) with Traefik Ingress & Let's Encrypt TLS
- **CI/CD Pipeline:** GitHub Actions + Docker Hub automated image publishing

---

## Architecture Overview

```
Developer (git push main)
    │
    ▼
GitHub Actions CI/CD
    ├── 1. Frontend: TypeScript compile, lint, unit tests & production build
    ├── 2. Backend: Django check, unit test suite (health, contact, profile)
    ├── 3. Docker Buildx: Multi-stage build of Frontend & Backend images
    ├── 4. Docker Hub: Push with immutable Git commit SHA + latest tags
    └── 5. Deployment: SSH connection to AWS EC2 host
            ├── Apply Kubernetes Manifests (Namespace, ConfigMap, Secrets, PVC)
            ├── Rollout PostgreSQL 16
            ├── Update Backend Deployment & execute migrations + seed
            ├── Update Frontend Deployment
            ├── Ingress & cert-manager Let's Encrypt TLS handshake
            └── Automated smoke tests against https://portfolio.pvsairamsaketh.in
```

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, Lucide Icons, Axios |
| **Backend** | Python 3.11, Django 5, Django REST Framework, Gunicorn, Whitenoise |
| **Database** | PostgreSQL 16 (Kubernetes PVC with `local-path` provisioner) |
| **Containerization** | Docker, Multi-stage builds, Non-root `appuser`, Nginx Alpine |
| **Orchestration** | Kubernetes (`k3s`), Traefik Ingress Controller, cert-manager |
| **Cloud Infrastructure** | AWS EC2 (`m7i-flex.large`, 8GB RAM), Elastic IP, Security Groups |
| **DNS & TLS** | GoDaddy DNS (A record for `portfolio`), Let's Encrypt automated TLS |

---

## Repository Structure

```
NEW-PORTFOLIO-/
├── .github/
│   └── workflows/
│       ├── ci.yml               # Lint, test, check & build validation
│       └── deploy.yml           # Build, push to Docker Hub & k3s EC2 rollout
├── backend/
│   ├── api/                     # DRF API app (models, serializers, views, tests)
│   │   ├── management/commands/seed_portfolio.py # Resume auto-seed command
│   ├── core/                    # Django project settings, WSGI, URLs
│   ├── Dockerfile               # Multi-stage production Python container
│   ├── requirements.txt         # Pinned backend dependencies
│   └── manage.py
├── frontend/
│   ├── public/                  # Assets (profile.jpg, resume.pdf)
│   ├── src/                     # React components, theme, CV simulator
│   │   ├── components/          # Hero, DefenseUAV, Projects, CVDemo, Contact
│   │   ├── services/api.ts      # Axios API client with resilient fallbacks
│   │   └── data/fallbackData.ts # Instant hydrated portfolio data
│   ├── Dockerfile               # Multi-stage React + Nginx container
│   ├── nginx.conf               # SPA routing & reverse-proxy configuration
│   └── package.json
├── deploy/
│   ├── kubernetes/              # K8s manifests (01 to 08)
│   │   ├── 01-namespace.yaml
│   │   ├── 02-configmap.yaml
│   │   ├── 03-secrets-template.yaml
│   │   ├── 04-postgres.yaml
│   │   ├── 05-backend.yaml
│   │   ├── 06-frontend.yaml
│   │   ├── 07-ingress.yaml
│   │   └── 08-cluster-issuer.yaml
│   └── scripts/
│       ├── setup-ec2.sh         # Installs k3s, cert-manager, prerequisites
│       ├── deploy-k8s.sh        # Applies manifests, migrations, verifies rollout
│       ├── smoke-test.sh        # Verifies DNS, HTTP/HTTPS, API health, Pods
│       └── rollback.sh          # Instant revision rollback
├── docker-compose.yml           # Full local development stack
├── .env.example                 # Environment variables template
├── DEPLOYMENT.md                # Comprehensive deployment guide
├── SECURITY.md                  # Security controls & supply chain policy
└── OPERATIONS.md                # Maintenance, monitoring, backups, troubleshooting
```

---

## Local Development Quickstart

### Prerequisites
- Node.js 20+ and npm
- Python 3.11+
- (Optional) Docker & Docker Compose

### 1. Run with Docker Compose
```bash
docker compose up --build
```
- Frontend: `http://localhost`
- Backend API: `http://localhost:8000/api/health/`

### 2. Run Manually

**Backend:**
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py seed_portfolio
python manage.py runserver 0.0.0.0:8000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```
Visit `http://localhost:3000`.

---

## Continuous Integration & Deployment

Every push to `main` executes:
1. `.github/workflows/ci.yml`: Runs tests, builds frontend artifacts, and tests Django check & DRF endpoints.
2. `.github/workflows/deploy.yml`: Pushes container images with Git SHA tag to Docker Hub, connects via SSH to the AWS EC2 instance, applies the new image tag to Kubernetes, migrates the database, and verifies rollout health.
