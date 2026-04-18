# Stage 1: Build the application
FROM node:24-alpine AS builder

# Enable corepack for pnpm
RUN corepack enable pnpm

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the application (Next.js static export)
RUN pnpm build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the static export from the builder stage
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80 (Internal to Docker network)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
