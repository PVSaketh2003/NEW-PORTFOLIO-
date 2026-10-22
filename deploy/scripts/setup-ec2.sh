#!/usr/bin/env bash
# ==============================================================================
# Setup k3s Kubernetes, cert-manager, and prerequisites on AWS EC2 Ubuntu instance
# Target Host: 3.25.73.147 (ap-southeast-2)
# ==============================================================================
set -euo pipefail

echo ">>> [1/5] Updating system packages and installing prerequisites..."
sudo apt-get update
sudo apt-get install -y --no-install-recommends \
  curl \
  wget \
  git \
  apt-transport-https \
  ca-certificates \
  gnupg \
  lsb-release \
  dnsutils \
  netcat-openbsd

echo ">>> [2/5] Installing k3s lightweight Kubernetes..."
# Disable Traefik default if we want custom or let k3s install bundled Traefik
curl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644

# Setup kubeconfig for current user
mkdir -p "$HOME/.kube"
sudo cp /etc/rancher/k3s/k3s.yaml "$HOME/.kube/config"
sudo chown -R "$(id -u):$(id -g)" "$HOME/.kube"
export KUBECONFIG="$HOME/.kube/config"

echo "Waiting for k3s node to become ready..."
until sudo kubectl get nodes | grep -w "Ready" >/dev/null 2>&1; do
  echo "Node not ready yet... sleeping 3s"
  sleep 3
done
sudo kubectl get nodes -o wide

echo ">>> [3/5] Installing cert-manager for automated Let's Encrypt TLS..."
sudo kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.16.2/cert-manager.yaml

echo "Waiting for cert-manager pods to become ready..."
sudo kubectl rollout status deployment/cert-manager -n cert-manager --timeout=180s
sudo kubectl rollout status deployment/cert-manager-webhook -n cert-manager --timeout=180s
sudo kubectl rollout status deployment/cert-manager-cainjector -n cert-manager --timeout=180s

echo ">>> [4/5] Creating portfolio namespace and applying ClusterIssuer..."
sudo kubectl create namespace portfolio --dry-run=client -o yaml | sudo kubectl apply -f -

cat << 'EOF' | sudo kubectl apply -f -
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: pvsairamsaketh@gmail.com
    privateKeySecretRef:
      name: letsencrypt-prod-key
    solvers:
      - http01:
          ingress:
            class: traefik
EOF

echo ">>> [5/5] Checking Kubernetes cluster health..."
sudo kubectl get nodes,pods -A

echo "=========================================================================="
echo ">>> EC2 Kubernetes Host Setup Complete!"
echo ">>> Next step: deploy the portfolio stack via GitHub Actions or deploy-k8s.sh"
echo "=========================================================================="
