FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install only production dependencies
RUN npm ci --omit=dev

# Use a minimal base image for runtime
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy built files and dependencies from builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port (default SvelteKit port is 3000)
EXPOSE 3000

# Command to run the application
CMD ["node", "build"]
