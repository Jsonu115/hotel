const express = require("express");
const router = express.Router();

const ContactMailController = require("../controllers/ContactMail");

router.post("/", ContactMailController.sendContactMail);

module.exports = router; 
