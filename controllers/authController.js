const User = require("../models/User");

const bcrypt =  require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET; // later move to .env


const { successResponse, errorResponse } = require("../utils/apiResponse");



//SignUp(Account creation)
exports.signup = async(req , res, next) =>{
    try{
        const {email,password} = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }
        
        //Existing email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            email,
            password:hashedPassword

        });

        return successResponse(res, null, "User created");

    } catch(err){
         next(err);
    }
};


//Login(Existing user)
exports.login = async(req , res ,next) =>{
    
    try {

        const {email,password} = req.body;

        const user = await User.findOne({email});
         if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }


        const token = jwt.sign(
            {userId: user._id},
            SECRET,
            {expiresIn: "1h"}
        );

        return successResponse(res, {token} , "Login successful");


    } catch (error) {
        next(error);
    }
}