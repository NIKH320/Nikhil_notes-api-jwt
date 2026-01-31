const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;


const auth = async(req , res , next) =>{

    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {

        const decoded = jwt.verify(token,SECRET)
        req.userId = decoded.userId;
        next();
        
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }


};

module.exports = auth;