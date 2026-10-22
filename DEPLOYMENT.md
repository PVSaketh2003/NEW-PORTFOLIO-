# End-to-End Deployment Guide

Step-by-step instructions for deploying the React + Django portfolio to AWS EC2 using Kubernetes (k3s), Docker Hub, GitHub Actions, and GoDaddy DNS.

---

## 1. AWS EC2 Infrastructure Verification

- **Instance ID:** `i-0af02897b5acaa877`
- **Instance Name:** `New Portfolio`
- **Instance Type:** `m7i-flex.large` (2 vCPUs, 8 GB RAM)
- **Region:** `ap-southeast-2` (Sydney)
- **Public IP:** `3.25.73.147` (Associate as an AWS Elastic IP for persistence across reboots)
- **SSH Private Key:** `/Users/pvsairamsaketh/Downloads/new portfolio.pem`

### Security Group Inbound Rules
Ensure your AWS Security Group has the following inbound rules:
| Port | Protocol | Source | Purpose |
|---|---|---|---|
| 22 | TCP | Your trusted IP (or `0.0.0.0/0` during initial setup) | SSH administration |
| 80 | TCP | `0.0.0.0/0` | HTTP traffic & Let's Encrypt ACME challenge |
| 443 | TCP | `0.0.0.0/0` | HTTPS secure web traffic |

*Internal ports (5432 for Postgres, 6443 for Kubernetes API, 8000 for Django) must NOT be open to `0.0.0.0/0`.*

---

## 2. Server Initialization (k3s & cert-manager)

From your local machine, execute the automated setup script on the EC2 host:

```bash
# Copy setup script to EC2
scp -i "/Users/pvsairamsaketh/Downloads/new portfolio.pem" deploy/scripts/setup-ec2.sh ubuntu@3.25.73.147:~/setup-ec2.sh

# Run setup
ssh -i "/Users/pvsairamsaketh/Downloads/new portfolio.pem" ubuntu@3.25.73.147 "chmod +x ~/setup-ec2.sh && ~/setup-ec2.sh"
```

This installs:
1. `k3s` single-node Kubernetes cluster.
2. `cert-manager` for automatic SSL/TLS certificate issuing from Let's Encrypt.
3. Sets up `portfolio` namespace and `letsencrypt-prod` ClusterIssuer.

---

## 3. GoDaddy DNS Configuration

You own `pvsairamsaketh.in` on GoDaddy. Configure the subdomain record:

1. Log in to [GoDaddy Domain Portfolio](https://dcc.godaddy.com/manage).
2. Select domain **`pvsairamsaketh.in`** and click **DNS** / **Manage DNS**.
3. Under **DNS Records**, check if a record for `portfolio` already exists. If yes, edit it; if not, click **Add New Record**:
   - **Type:** `A`
   - **Name:** `portfolio`
   - **Data (Points to):** `3.25.73.147` (your EC2 Elastic IP)
   - **TTL:** `1/2 Hour` (or Default 1 Hour)
4. Save the record.

> [!IMPORTANT]
> Do NOT modify the root `@` record (which currently points to your Azure IP `52.255.141.13`) or the `www` record. This guarantees that your existing website remains completely untouched and only `portfolio.pvsairamsaketh.in` routes to the new AWS EC2 Kubernetes cluster.

### Verification Command
Run locally:
```bash
dig +short portfolio.pvsairamsaketh.in
# Should output: 3.25.73.147
```

---

## 4. GitHub Actions Secrets Configuration

In your GitHub repository (`https://github.com/PVSaketh2003/NEW-PORTFOLIO-`):
Navigate to **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.

Add the following **Secrets**:

| Secret Name | Value | Description |
|---|---|---|
| `DOCKERHUB_USERNAME` | Your Docker Hub username (e.g. `pvsaketh`) | For image publishing |
| `DOCKERHUB_TOKEN` | Docker Hub Personal Access Token (Read/Write) | Min-privilege token |
| `AWS_DEPLOY_HOST` | `3.25.73.147` | Public Elastic IP of EC2 |
| `AWS_DEPLOY_USER` | `ubuntu` | Default SSH user |
| `AWS_DEPLOY_SSH_KEY` | Contents of `new portfolio.pem` | Full private key file content |

*(Optional Variables under "Variables" tab)*:
- `DOCKERHUB_FRONTEND_REPOSITORY`: `<username>/portfolio-frontend`
- `DOCKERHUB_BACKEND_REPOSITORY`: `<username>/portfolio-backend`
- `PORTFOLIO_DOMAIN`: `portfolio.pvsairamsaketh.in`

---

## 5. Automated CI/CD Trigger

Once secrets are set, push code to `main`:
```bash
git add .
git commit -m "feat: complete React + Django portfolio with Kubernetes k3s deployment"
git push origin main
```

1. GitHub Actions runs `.github/workflows/ci.yml` (linting, tests, build checks).
2. GitHub Actions runs `.github/workflows/deploy.yml`:
   - Builds Docker images with commit SHA tag.
   - Pushes to Docker Hub.
   - Connects to AWS EC2 via SSH.
   - Updates Kubernetes Deployments in namespace `portfolio`.
   - Runs database migrations & seed command.
   - Waits for rollout completion.
   - Executes smoke tests.

---

## 6. Live Verification

Run the smoke test script:
```bash
./deploy/scripts/smoke-test.sh portfolio.pvsairamsaketh.in 3.25.73.147
```
Check in browser:
- Website: `https://portfolio.pvsairamsaketh.in`
- Health check: `https://portfolio.pvsairamsaketh.in/api/health/`
