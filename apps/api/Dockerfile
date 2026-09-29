# We do a docker multi-stage process to separate the build image from the production runtime
# This shrinks the final container image and improves security by keeping only what's needed
# for production in the final image

# --- Build Stage ---
FROM node:22-alpine AS builder
WORKDIR /app

# 1. Copy root package files + workspace package definition
COPY package*.json ./
COPY apps/api/package*.json ./apps/api/

# 2. Install dependencies for the workspace
RUN npm ci

# 3. Copy source code and build the API
COPY apps/api ./apps/api
WORKDIR /app/apps/api
RUN npm run build

# --- Production Stage ---
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy root package files + API package definition
COPY package*.json ./
COPY apps/api/package*.json ./apps/api/

# Install only production dependencies for the api workspace
RUN npm ci --omit=dev -w apps/api

# Copy compiled JavaScript output from builder
COPY --from=builder /app/apps/api/dist ./apps/api/dist

WORKDIR /app/apps/api
EXPOSE 3000
CMD ["node", "dist/main.js"]