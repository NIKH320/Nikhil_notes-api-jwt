#  Notes API – Secure Full Stack Backend Project

A Very simple full-stack Notes application built using **React**, **Node.js**, **Express**, and **MongoDB**, with **JWT-based authentication**.
 
I learned real-world backend concepts such as authentication, authorization, MVC architecture, and clean API design with this project.

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

### Frontend
- React (Vite)
- Vanilla CSS
- Fetch API
- 
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT (JSON Web Tokens)  
- **Security:** bcrypt
  


##  Authentication Flow:

1. User signs up with email & password
2. Password is hashed using bcrypt
3. User logs in and receives a JWT token
4. Token is stored in `localStorage`
5. Token is sent in `Authorization` header for protected routes
6. Auth middleware verifies token and attaches `userId` to request


## API Endpoints

### Auth
- `POST /signup` – Register new user
- `POST /login` – Login user

### Notes (Protected)
- `GET /notes` – Fetch user notes
- `POST /notes` – Create note
- `DELETE /notes/:id` – Delete note


How to Run Locally:

### Backend
1.npm install
2.Open MongodB(bin) on terminal - PS C:\Program Files\MongoDB\Server\8.2\bin> .\mongod.exe
3.Create .env file -poert, db URL, secret key
4.node index.js

### Frontend
1.npm install
2.npm run dev


## Deployment Note
The frontend is deployed using GitHub Pages.
The backend is currently configured to run locally on `http://localhost:3000`.





## Author - Nikhil 

