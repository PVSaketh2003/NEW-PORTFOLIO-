# ==========================================
# Stage 1: Build the React Application
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies using lockfile
COPY package*.json ./
RUN npm ci

# Copy application source and assets
COPY . .

# Build production assets
RUN npm run build

# ==========================================
# Stage 2: Serve with Production Nginx Alpine
# ==========================================
FROM nginx:1.27-alpine-slim

# Remove default nginx config and copy custom reverse-proxy config
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled artifacts from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
