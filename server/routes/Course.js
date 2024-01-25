// Import the required modules
const express = require("express");
const router = express.Router();

// Import the Controllers

// Course controllers import
const {getAllCourses, getCourseDetails, editCourse, createCourse, getFullCourseDetails, getInstructorCourses, deleteCourse} = require("../controllers/Course");

// Categories controller import
const {createCategory, showAllCategories, categoryPageDetails} = require("../controllers/Category");

// Section controller import
const {createSection, updateSection, deleteSection} = require("../controllers/Section");

// Sub-Section Contoller import
const {createSubSection, updateSubSection, deleteSubsection} = require("../controllers/Subsection");

// Rating and review controller import
const {createRating, getAverageRating, getAllRating} = require("../controllers/RatingAndReview");

// Middlewares import
const {auth, isStudent, isInstructor, isAdmin} = require("../middlewares/auth");

// Course Progress
const {updateCourseProgress} = require("../controllers/CourseProgress");

// ******************************************************************************************
//                           Course Routes
// ******************************************************************************************

// Course Creation Route
router.post("/createCourse", auth, isInstructor, createCourse);
// Section Creation route
router.post("/addSection", auth, isInstructor, createSection);
// Sub-Section Creation route
router.post("/addSubSection", auth, isInstructor, createSubSection);
// Update section
router.post("/updateSection", auth, isInstructor, updateSection);
// Delete Section
router.post("/deleteSection", auth, isInstructor, deleteSection);
// Update Sub-Section
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
// Delete Sub-Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubsection);
// Get All courses
router.get("/getAllCourses", getAllCourses);
// Get Course Details
router.post("/getCourseDetails", getCourseDetails);
// Get Details for a Specific Courses
router.post("/getFullCourseDetails", auth, getFullCourseDetails);
// Edit Course routes
router.post("/editCourse",auth, isInstructor, editCourse);
// Get all Courses Under a Specific Instructor
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses);
// Delete a Course
router.delete("/deleteCourse", deleteCourse);
// Update Course Progress
router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);
// ******************************************************************************************
//                           Category Routes (Only by Admin)
// ******************************************************************************************
router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategories);
router.post("/getCategoryPageDetails", categoryPageDetails);


// ******************************************************************************************
//                           Rating and Review
// ******************************************************************************************
router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRating);

module.exports = router;


