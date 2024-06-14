const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt  =require("jsonwebtoken");

async function signup(req, res){
    const { userName, email, password } = req.body;
    try{
        const userEmail = await User.findOne({ email });
        if(userEmail){
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ userName, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: "User created" });
    }
    catch(error){
        res.status(500).json({ message: "Error in creating user" });
    }
}

async function login(req, res){
    const { email, password } = req.body;
    try {
        const userEmail = await User.findOne({ email });
        if(!userEmail){
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, userEmail.password);
        if(!isMatch){
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: userEmail._id }, process.env.SECRET, { expiresIn: "1h" });
        //Below can be deleted
        const name = jwt.sign({ name: userEmail.userName }, process.env.SECRET, { expiresIn: "1h" });
        res.json({ token, name });
    } catch (error) {
        return res.status(500).json({ message: "Error in logging" });
    }
}

module.exports = { signup, login };