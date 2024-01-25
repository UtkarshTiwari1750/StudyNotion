// Import required modules
const express = require("express");
const router = express.Router();

// Import Contollers
const {signup, login, sendotp, changePassword, } = require("../controllers/Auth");
const {resetPassword, resetPasswordToken} = require("../controllers/ResetPassword");
const {auth, isStudent, isInstructor, isAdmin} = require("../middlewares/auth");

// Routers
router.post("/signup", signup);
router.post("/login", login);
router.post("/sendOtp", sendotp);
router.post("/changepassword", auth, changePassword);

router.post("/reset-password", resetPassword);
router.post("/reset-password-token", resetPasswordToken);

module.exports = router;
