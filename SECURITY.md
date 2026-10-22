# Security Policy & Architecture

## Security Architecture Overview

This portfolio system implements defense-in-depth principles across the cloud, container, network, and application layers.

### 1. Network Hardening (Least Privilege)
- **Publicly Accessible Ports:** Only TCP 80 (HTTP) and TCP 443 (HTTPS) are open to `0.0.0.0/0`.
- **SSH Port 22:** Restricted to trusted developer IP addresses or secured via SSH key authentication. Password authentication is disabled.
- **Internal Only:** 
  - PostgreSQL port `5432` is strictly internal within the Kubernetes cluster (`postgres-service.portfolio.svc.cluster.local`) and is never bound to public interfaces.
  - Kubernetes API server port `6443` is bound to local interface or restricted security group.
  - Django Gunicorn port `8000` is strictly accessed via Ingress routing and internal service discovery.

### 2. Container Security
- **Non-Root Execution:** Backend Docker container runs as non-root `appuser` (UID 1000).
- **Minimal Base Images:** Built using `python:3.11-slim` and `nginx:1.27-alpine-slim` to minimize the attack surface and eliminate unnecessary development utilities.
- **Multi-Stage Builds:** Development toolchains (compilers, npm cache, build tools) are discarded after compilation; only final static assets and Python wheels are copied into runtime images.
- **Read-Only / Isolation:** No host paths mounted into container runtime except the dedicated PersistentVolume for PostgreSQL data.

### 3. Application Security & Throttling
- **Contact Form Rate Limiting:** Django REST Framework throttles contact submissions to 15 requests/hour per IP address (`ContactThrottle`), mitigating denial-of-service and contact spam.
- **CSRF & CORS:** Strict `CSRF_TRUSTED_ORIGINS` configured for `https://portfolio.pvsairamsaketh.in`. CORS permits frontend communications without exposing internal infrastructure details.
- **Security Headers:**
  - `X-Frame-Options: SAMEORIGIN` (Clickjacking defense)
  - `X-Content-Type-Options: nosniff` (MIME sniffing defense)
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')`

### 4. Secret & Supply Chain Management
- **Zero Committed Secrets:** All database passwords, Django secret keys, SSH private keys, and Docker Hub credentials are kept out of source code and version control.
- **Runtime Secrets:** Stored in Kubernetes Secrets (`portfolio-secrets`).
- **Immutable Image Tags:** Deployments reference unique Git commit SHA tags (e.g. `pvsaketh/portfolio-frontend:a1b2c3d`) rather than mutable `latest` tags.
- **GitHub Actions Security:** Pull requests from untrusted forks do not have access to production deployment secrets.

### 5. Vulnerability Scanning & Updates
- Dependabot alerts enabled on GitHub.
- Periodic base image updates via automated rebuilds.
