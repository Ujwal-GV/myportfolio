const mongoose = require("mongoose");

const recruiterSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Recruiter = mongoose.model("recruiter", recruiterSchema);

module.exports = Recruiter;