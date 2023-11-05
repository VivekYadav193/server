const express = require("express");
const router = express.Router();

const { auth, isInstructor } = require("../middleware/auth");

const { addProfile, getProfile } = require("../controllers/profile");

router.post("/addProfile", auth, isInstructor, addProfile);

router.get("/getProfile", auth, isInstructor, getProfile);

module.exports = router;
