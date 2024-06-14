const express = require("express");
const mongoose = require("mongoose");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const recruiterRoutes = require("./routes/recruiterRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/.netlify/functions/api/auth", authRoutes);
app.use("/.netlify/functions/api/recruiter", recruiterRoutes);

module.exports.handler = serverless(app);