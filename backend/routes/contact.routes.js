const express = require("express");
const { submitContactMessage, getContactMessages } = require("../controllers/contact.controller");
const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", submitContactMessage);
router.get("/", protect, getContactMessages);

module.exports = router;
