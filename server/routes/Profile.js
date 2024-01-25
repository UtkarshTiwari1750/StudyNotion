// Import required modules
const express = require("express");
const router = express.Router();

// Import required Controllers 
const {updateProfile, deleteAccount, getAllUserDetails, updateDisplayPicture, getEnrolledCourses, instructorDashboard} = require("../controllers/Profile");
const {auth, isAdmin, isInstructor, isStudent} = require("../middlewares/auth")


router.put('/updateProfile', auth, updateProfile);
router.delete('/deleteProfile', auth, deleteAccount);
router.get("/getUserDetails", auth, getAllUserDetails);
router.put("/updateDisplayPicture", auth, updateDisplayPicture);
router.get("/getEnrolledCourses", auth, getEnrolledCourses);
router.get("/instructorDashboard", auth , isInstructor, instructorDashboard)

module.exports = router;
