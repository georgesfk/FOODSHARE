# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your server will run on
EXPOSE 8080

# Set the environment variables
ENV PORT=8080
ENV MONGODB_URI=mongodb://mongo:27017/foodeshare

# Start the application
CMD ["npm", "run", "dev"]
