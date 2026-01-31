#  Notes API – Secure Full Stack Backend Project

A secure, user-based Notes application built using Node.js, Express, MongoDB, and JWT authentication.  
This project demonstrates real-world backend concepts such as authentication, authorization, MVC architecture, and clean API design.

# Features

- User Signup & Login (JWT Authentication)
- Password Hashing using bcrypt
- Create, Read, Delete Notes
- Notes are private to each user
- Protected routes using Auth Middleware
- Clean MVC Architecture
- Centralized Error Handling
- Environment-based configuration
- Simple HTML + CSS frontend for testing


# Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT (JSON Web Tokens)  
- **Security:** bcrypt
- **Frontend:** HTML, CSS, Vanilla JavaScript  


##  Project Structure

notes-API/
│
├── config/
│ └── db.js
│
├── models/
│ ├── User.js
│ └── Note.js
│
├── controllers/
│ ├── authController.js
│ └── noteController.js
│
├── routes/
│ ├── authRoutes.js
│ └── noteRoutes.js
│
├── middlewares/
│ ├── auth.js
│ ├── logger.js
│ └── errorHandler.js
│
├── utils/
│ └── apiResponse.js
│
├── auth.html
├── index.html
├── styles.css
├── .env
├── index.js
└── README.md


##  Authentication Flow:

1. User signs up with email & password
2. Password is hashed using bcrypt
3. User logs in and receives a JWT token
4. Token is stored in `localStorage`
5. Token is sent in `Authorization` header for protected routes
6. Auth middleware verifies token and attaches `userId` to request


How to Run Locally:
1.npm install
2.Open MongodB(bin) on terminal - PS C:\Program Files\MongoDB\Server\8.2\bin> .\mongod.exe
3.Create .env file -poert, db URL, secret key
4.node index.js

## Author - Nikhil 

