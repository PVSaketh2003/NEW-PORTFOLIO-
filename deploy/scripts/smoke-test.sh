#!/usr/bin/env bash
# ==============================================================================
# End-to-End Live Application Smoke Test
# ==============================================================================
set -euo pipefail

TARGET_DOMAIN="${1:-portfolio.pvsairamsaketh.in}"
TARGET_IP="${2:-3.25.73.147}"

echo "=========================================================================="
echo "RUNNING COMPREHENSIVE SMOKE TESTS"
echo "Target Domain: $TARGET_DOMAIN"
echo "Target IP:     $TARGET_IP"
echo "=========================================================================="

echo -n "1. Testing DNS resolution for $TARGET_DOMAIN... "
RESOLVED_IP=$(dig +short "$TARGET_DOMAIN" | tail -n1 || true)
if [ -n "$RESOLVED_IP" ]; then
  echo "RESOLVED: $RESOLVED_IP"
  if [ "$RESOLVED_IP" == "$TARGET_IP" ]; then
    echo "   [PASS] Subdomain correctly points to EC2 Elastic IP ($TARGET_IP)"
  else
    echo "   [NOTE] Subdomain resolves to $RESOLVED_IP (Ensure GoDaddy A record is updated to $TARGET_IP)"
  fi
else
  echo "   [PENDING] DNS record not yet propagated or configured in GoDaddy"
fi

echo ""
echo "2. Testing Direct Host Ingress (HTTP port 80 with Host header)..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" -H "Host: $TARGET_DOMAIN" "http://$TARGET_IP/" || echo "ERR")
echo "   Root Path '/' Response Code: $HTTP_STATUS"

echo ""
echo "3. Testing Backend Health Check API via Host header..."
HEALTH_RESP=$(curl -s -H "Host: $TARGET_DOMAIN" "http://$TARGET_IP/api/health/" || echo "{}")
echo "   API Response: $HEALTH_RESP"

echo ""
echo "4. Testing HTTPS Endpoint (if certificate issued)..."
HTTPS_STATUS=$(curl -sk -o /dev/null -w "%{http_code}" "https://$TARGET_DOMAIN/" || echo "ERR")
echo "   HTTPS Root Response Code: $HTTPS_STATUS"

echo ""
echo "5. Testing Kubernetes Pod & Service Readiness on EC2..."
if command -v kubectl >/dev/null 2>&1; then
  echo "   Pods in 'portfolio' namespace:"
  kubectl get pods -n portfolio -o wide
  echo ""
  echo "   Ingress in 'portfolio' namespace:"
  kubectl get ingress -n portfolio
else
  echo "   [NOTE] Run on EC2 host to inspect local cluster pods directly"
fi

echo "=========================================================================="
echo "SMOKE TEST EXECUTION COMPLETED"
echo "=========================================================================="
