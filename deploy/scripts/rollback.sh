#!/usr/bin/env bash
# ==============================================================================
# Fast Rollback Script for Kubernetes Workloads
# ==============================================================================
set -euo pipefail

NAMESPACE="portfolio"

echo "=========================================================================="
echo "INITIATING EMERGENCY WORKLOAD ROLLBACK"
echo "Namespace: $NAMESPACE"
echo "=========================================================================="

echo ">>> Current Rollout History for Backend:"
sudo kubectl rollout history deployment/portfolio-backend -n "$NAMESPACE"

echo ">>> Current Rollout History for Frontend:"
sudo kubectl rollout history deployment/portfolio-frontend -n "$NAMESPACE"

echo ">>> Rolling back Backend to previous revision..."
sudo kubectl rollout undo deployment/portfolio-backend -n "$NAMESPACE"
sudo kubectl rollout status deployment/portfolio-backend -n "$NAMESPACE" --timeout=120s

echo ">>> Rolling back Frontend to previous revision..."
sudo kubectl rollout undo deployment/portfolio-frontend -n "$NAMESPACE"
sudo kubectl rollout status deployment/portfolio-frontend -n "$NAMESPACE" --timeout=120s

echo ">>> Verification after rollback:"
sudo kubectl get pods -n "$NAMESPACE"
echo ">>> Rollback completed successfully!"
