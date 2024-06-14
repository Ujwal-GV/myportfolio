const express = require("express");
const { addcompany } = require("../controllers/recruiterController");

const router = express.Router();

router.post("/addCompany", addcompany);

module.exports = router;