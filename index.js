//env
require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db"); //MongodB conection
const mongoose = require("mongoose");
const noteRoutes = require("./routes/noteRoutes");
const authRoutes = require("./routes/authRoutes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const port = 3000;

connectDB();

//CORS issue
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    
    // Handling preflight request
    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }
    
    next();
});

//To read JSON - middleware
app.use(express.json());
app.use(logger);


//Auth - token  Routes
app.use(authRoutes);
app.use(noteRoutes);

//Errorhandler
app.use(errorHandler);







//Database 
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log("MongoDB connected"))
//     .catch(err => console.log(err));



//Starting server
app.listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT}`);
});

