# Use Node.js as the base image
FROM node:lts-slim
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port for the server
EXPOSE 4000

# Start the server
CMD [ "npm", "start" ]
