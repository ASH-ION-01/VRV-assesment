﻿# VRV-assesment
Role-Based Access Control (RBAC) API
This project demonstrates Authentication, Authorization, and Role-Based Access Control (RBAC) in a backend system built with Node.js, Express.js, and MongoDB.

Features
User Registration and Login (with secure password hashing using bcrypt).
Token-based authentication with JWT.
Role-based authorization to restrict access to resources (e.g., Admin, User, Moderator roles).
CRUD operations for users (Admin-only for specific operations).
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
Authorization: Role-Based Access Control (RBAC)
Installation
1. Prerequisites
Node.js installed. Download here.
MongoDB instance running (local or cloud using MongoDB Atlas).
Postman or any API testing tool for testing endpoints.
2. Clone the Repository
bash
Copy code
git clone <repository-url>
cd <repository-folder>
3. Install Dependencies
bash
Copy code
npm install
4. Set Up Environment Variables
Create a .env file in the root directory and configure the following variables:

env
Copy code
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
Replace:

<your-mongodb-connection-string> with your MongoDB URI.
<your-secret-key> with a secure random key for JWT token signing.
5. Run the Server
Start the application:
bash
Copy code
npm start
For development mode (with live reload):
bash
Copy code
npm run dev
The server will run on http://localhost:5000.

API Documentation
Base URL:
http://localhost:5000/api

1. User Authentication
Register a New User
URL: /auth/register
Method: POST
Headers: Content-Type: application/json
Body:
json
Copy code
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
Login
URL: /auth/login

Method: POST

Headers: Content-Type: application/json

Body:

json
Copy code
{
  "email": "johndoe@example.com",
  "password": "password123"
}
Response:

json
Copy code
{
  "token": "your-jwt-token"
}
Use the token for authorized requests.

2. User Management
Get All Users (Admin Only)
URL: /users
Method: GET
Headers:
json
Copy code
{
  "Authorization": "Bearer <admin-token>"
}
Get User by ID (Admin or Self)
URL: /users/:id
Method: GET
Headers:
json
Copy code
{
  "Authorization": "Bearer <user-or-admin-token>"
}
Update User Role (Admin Only)
URL: /users/:id/role
Method: PATCH
Headers:
json
Copy code
{
  "Authorization": "Bearer <admin-token>",
  "Content-Type": "application/json"
}
Body:
json
Copy code
{
  "role": "Moderator"
}
Delete User (Admin Only)
URL: /users/:id
Method: DELETE
Headers:
json
Copy code
{
  "Authorization": "Bearer <admin-token>"
}
Testing with Postman
Import the above API documentation in Postman or manually set up requests.
Test each endpoint:
Register a new user.
Log in to obtain the token.
Use the token in the Authorization header for protected routes.
Project Structure
plaintext
Copy code
project-folder/
│
├── controllers/
│   ├── authController.js        # Handles user authentication
│   ├── userController.js        # Handles user management (CRUD)
│
├── middlewares/
│   ├── authMiddleware.js        # JWT authentication middleware
│   ├── roleMiddleware.js        # RBAC role authorization middleware
│
├── models/
│   ├── User.js                  # Mongoose schema for user
│
├── routes/
│   ├── authRoutes.js            # Authentication routes
│   ├── userRoutes.js            # User management routes
│
├── .env                         # Environment variables
├── package.json                 # Dependencies and scripts
├── server.js                    # Main server file
└── README.md                    # Project documentation
