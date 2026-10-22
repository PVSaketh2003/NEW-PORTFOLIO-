#!/usr/bin/env bash
# ==============================================================================
# Deploy or Update Portfolio Kubernetes Stack
# ==============================================================================
set -euo pipefail

NAMESPACE="portfolio"
FRONTEND_IMAGE="${1:-pvsaketh/portfolio-frontend:latest}"
BACKEND_IMAGE="${2:-pvsaketh/portfolio-backend:latest}"
MANIFEST_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../kubernetes" && pwd)"

echo ">>> Deploying Portfolio to namespace '$NAMESPACE'..."
echo "    Frontend Image: $FRONTEND_IMAGE"
echo "    Backend Image:  $BACKEND_IMAGE"

# 1. Namespace & ConfigMap
sudo kubectl apply -f "$MANIFEST_DIR/01-namespace.yaml"
sudo kubectl apply -f "$MANIFEST_DIR/02-configmap.yaml"

# 2. Secret check
if ! sudo kubectl get secret portfolio-secrets -n "$NAMESPACE" >/dev/null 2>&1; then
  echo ">>> Creating default portfolio-secrets..."
  sudo kubectl apply -f "$MANIFEST_DIR/03-secrets-template.yaml"
fi

# 3. PostgreSQL Database
echo ">>> Applying PostgreSQL manifests..."
sudo kubectl apply -f "$MANIFEST_DIR/04-postgres.yaml"
echo ">>> Waiting for PostgreSQL to be ready..."
sudo kubectl rollout status deployment/portfolio-postgres -n "$NAMESPACE" --timeout=120s

# 4. Backend Deployment
echo ">>> Applying Backend with image $BACKEND_IMAGE..."
sed "s|DOCKERHUB_BACKEND_IMAGE_PLACEHOLDER|$BACKEND_IMAGE|g" "$MANIFEST_DIR/05-backend.yaml" | sudo kubectl apply -f -
echo ">>> Waiting for Backend rollout..."
sudo kubectl rollout status deployment/portfolio-backend -n "$NAMESPACE" --timeout=180s

# 5. Database Migrations & Seeding
echo ">>> Running database migrations..."
BACKEND_POD=$(sudo kubectl get pods -n "$NAMESPACE" -l app=portfolio-backend -o jsonpath='{.items[0].metadata.name}')
sudo kubectl exec -n "$NAMESPACE" "$BACKEND_POD" -- python manage.py migrate --noinput
sudo kubectl exec -n "$NAMESPACE" "$BACKEND_POD" -- python manage.py seed_portfolio

# 6. Frontend Deployment
echo ">>> Applying Frontend with image $FRONTEND_IMAGE..."
sed "s|DOCKERHUB_FRONTEND_IMAGE_PLACEHOLDER|$FRONTEND_IMAGE|g" "$MANIFEST_DIR/06-frontend.yaml" | sudo kubectl apply -f -
echo ">>> Waiting for Frontend rollout..."
sudo kubectl rollout status deployment/portfolio-frontend -n "$NAMESPACE" --timeout=120s

# 7. Ingress
echo ">>> Applying Ingress configuration..."
sudo kubectl apply -f "$MANIFEST_DIR/07-ingress.yaml"

echo ">>> Deployment successfully verified!"
sudo kubectl get pods,services,ingress -n "$NAMESPACE"
