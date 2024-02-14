# Dockerfile

# Use the official Node.js image as our base image
FROM node:21-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Start the application
CMD ["npm", "run", "start:dev"]