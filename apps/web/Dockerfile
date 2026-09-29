# --- Stage 1: Build Stage ---
FROM node:22-alpine AS builder
WORKDIR /app

# 1. Copy root workspace manifests AND the root tsconfig.json
COPY package*.json ./
COPY tsconfig*.json ./

# 2. Copy web package manifest
COPY apps/web/package*.json ./apps/web/

# 3. Install workspace dependencies
RUN npm ci

# 4. Copy web app source code and local tsconfigs
COPY apps/web ./apps/web

# 5. Build static assets
WORKDIR /app/apps/web
RUN npm run build

# --- Stage 2: Production Nginx Stage ---
FROM nginx:alpine AS runner

# Copy custom Nginx SPA configuration
COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]