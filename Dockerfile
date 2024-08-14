FROM node:20-alpine3.19

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Set environment variable for production
ENV NODE_ENV=production

# Start the Nuxt.js app
CMD ["npm", "run", "start"]