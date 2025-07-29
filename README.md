# Mono Repo MERN App Deployment Guide

### Overview
This guide explains how to deploy a monolithic MERN application on Render.com.

 - See live example here: <a target="_blank" href="https://simple-mern-vvd6.onrender.com">Live Site</a> (app needs to wake-up)
 

Prerequisites
 - Node.js installed (dev environment)
 - Git
 - GitHub account
 - Render.com account
 - MongoDB Atlas account

### Deployment Steps

1. MongoDB Atlas Setup
    1 - Create a free cluster on MongoDB Atlas
    2 - Create a database user and get your connection string
    3 - Add your IP address to the network access list (or allow all IPs)
    4 - Update the database name in the connection string

2. Prepare Your Application
Make sure your environment variables are set up:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

3. Deploy on Render
 1 - Log in to Render Dashboard

 2 - Click "New +" and select "Web Service"

 3 - Connect your GitHub repository

 4 - Configure the service:

    Name: mono-repo-mern-app
    Environment: Node
    Build Command: npm install && npm run build
    Start Command: npm start
    Plan: Free
    Add Environment Variables:

    MONGODB_URI: Your MongoDB connection string
    JWT_SECRET: Your JWT secret key

5. Optional Settings & debugging tips:

     - Wait for the initial deploy to complete
     - Click on the generated domain URL
     - Test all features of your application
    
    ### Troubleshooting
     - Check Render logs for deployment errors
     - Ensure all environment variables are set correctly
     - Verify MongoDB connection string is correct
     - Check if the build process completes successfully
    
    ### Additional Notes
     - Free tier may sleep after 15 minutes of inactivity
     - Configure health check endpoint if needed
     - CORS settings should include Render domain
     - Keep sensitive data in environment variables

### Local Development
```
npm install
npm run dev
```
For more details, visit Render's Documentation