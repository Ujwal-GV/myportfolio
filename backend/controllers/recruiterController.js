const Recruiter = require("../models/Recruiter");

async function addcompany(req, res){
    const { companyName } = req.body;
    try{
        const recruiter = new Recruiter({ companyName });
        await recruiter.save();
        res.status(201).json({ message: "Company added" });
    }catch(error){
        res.status(500).json({ message: "Error in adding company" });
    }
}

module.exports = { addcompany };