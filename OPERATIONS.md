# Operations, Monitoring & Disaster Recovery

Operational procedures, monitoring commands, database backup/restore workflows, and cost breakdowns for the portfolio infrastructure.

---

## 1. Daily Operations & Cluster Inspection

Run from the EC2 host (or via SSH):

```bash
# Check all resources in the portfolio namespace
sudo kubectl get all,pvc,ingress -n portfolio

# Inspect Pod status and node placement
sudo kubectl get pods -n portfolio -o wide

# Check live pod logs
sudo kubectl logs -f -l app=portfolio-backend -n portfolio
sudo kubectl logs -f -l app=portfolio-frontend -n portfolio
sudo kubectl logs -f -l app=portfolio-postgres -n portfolio

# Check Traefik ingress logs
sudo kubectl logs -n kube-system -l app.kubernetes.io/name=traefik -f

# Inspect Kubernetes cluster events
sudo kubectl get events -n portfolio --sort-by='.lastTimestamp'
```

---

## 2. Database Backup & Restoration

PostgreSQL stores persistent data in `/var/lib/rancher/k3s/storage` via the k3s `local-path` provisioner.

### Scheduled / On-Demand Backup
Run an on-demand SQL dump from the running postgres pod:

```bash
POSTGRES_POD=$(sudo kubectl get pods -n portfolio -l app=portfolio-postgres -o jsonpath='{.items[0].metadata.name}')
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="portfolio_backup_${TIMESTAMP}.sql.gz"

sudo kubectl exec -n portfolio "$POSTGRES_POD" -- pg_dump -U portfolio_user -d portfolio_db | gzip > "/home/ubuntu/$BACKUP_FILE"

echo "Backup created at /home/ubuntu/$BACKUP_FILE"
```

### Database Restoration
To restore a database dump into PostgreSQL:

```bash
POSTGRES_POD=$(sudo kubectl get pods -n portfolio -l app=portfolio-postgres -o jsonpath='{.items[0].metadata.name}')
zcat "/home/ubuntu/portfolio_backup_YYYYMMDD_HHMMSS.sql.gz" | sudo kubectl exec -i -n portfolio "$POSTGRES_POD" -- psql -U portfolio_user -d portfolio_db
```

---

## 3. Rollback Procedure

If a faulty deployment occurs:

### Option A: Automated Rollback Script
```bash
./deploy/scripts/rollback.sh
```

### Option B: Manual Rollout Undo
```bash
# Rollback backend
sudo kubectl rollout undo deployment/portfolio-backend -n portfolio
sudo kubectl rollout status deployment/portfolio-backend -n portfolio

# Rollback frontend
sudo kubectl rollout undo deployment/portfolio-frontend -n portfolio
sudo kubectl rollout status deployment/portfolio-frontend -n portfolio
```

---

## 4. Troubleshooting Guide

### A. Pod in `ImagePullBackOff` or `ErrImagePull`
- **Cause:** Docker Hub repository is private, credentials are missing, or tag does not exist.
- **Diagnosis:** `sudo kubectl describe pod <pod-name> -n portfolio`
- **Fix:** If the Docker Hub repo is private, create a Docker registry secret:
  ```bash
  sudo kubectl create secret docker-registry dockerhub-secret \
    --docker-server=https://index.docker.io/v1/ \
    --docker-username=<USER> \
    --docker-password=<TOKEN> \
    -n portfolio
  ```

### B. Pod in `CrashLoopBackOff`
- **Diagnosis:** `sudo kubectl logs <pod-name> -n portfolio --previous`
- **Common causes:** Database connection failure (ensure postgres is running), missing secret key, or unapplied migration.

### C. TLS Certificate Not Issued / Expired
- **Diagnosis:**
  ```bash
  sudo kubectl get certificate -n portfolio
  sudo kubectl describe certificate portfolio-tls -n portfolio
  sudo kubectl get challenges -A
  ```
- **Requirements for Let's Encrypt:**
  1. Port 80 and 443 MUST be reachable from the internet.
  2. Subdomain `portfolio.pvsairamsaketh.in` MUST resolve to the EC2 Elastic IP `3.25.73.147`.

### D. Server Reboot Recovery
k3s is installed as a systemd service (`k3s.service`). When the EC2 instance reboots:
- k3s automatically starts.
- Traefik ingress controller resumes.
- PostgreSQL pod reconnects to the persistent volume automatically.
- Frontend and backend pods start automatically and reconnect to PostgreSQL.

---

## 5. Estimated Recurring Infrastructure Costs

Designed for cost efficiency for a personal portfolio and engineering showcase:

| Component | Specification | Estimated Monthly Cost (USD) | Notes |
|---|---|---|---|
| **AWS EC2 Instance** | `m7i-flex.large` (2 vCPU, 8 GB RAM) | ~$52.00 / month | *Or downgrade to `t3.medium` (~$29/mo) or `t4g.small` (~$12/mo) if optimizing budget further* |
| **AWS EBS Storage** | General Purpose SSD (gp3) 30 GB | ~$2.40 / month | OS, k3s binaries, container images, PostgreSQL data |
| **AWS Elastic IP** | 1 Allocated Static IPv4 address | $0.00 / month | Free when attached to a running EC2 instance ($0.005/hr only if instance stopped) |
| **Data Transfer** | Outbound Web Traffic (< 100 GB) | $0.00 / month | AWS Free Tier includes 100 GB/month outbound transfer |
| **Docker Hub** | Personal / Public Repository | $0.00 | Free unlimited public repositories |
| **SSL/TLS Certificates**| Let's Encrypt via cert-manager | $0.00 | Free automated renewals |
| **GoDaddy DNS** | Existing domain `pvsairamsaketh.in` | Existing renewal | A record creation is included with existing domain |
| **Total Estimated Cost**| | **~$30 - $55 / month** | |
