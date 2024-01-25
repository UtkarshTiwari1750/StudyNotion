const Course = require("../models/Course");
const Category = require("../models/Category");
const User = require("../models/User");
const CourseProgess = require("../models/CourseProgress");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const Section = require("../models/Section");
const SubSection = require("../models/SubSection");
const { convertSecondsToDuration } = require("../utils/secToDuration");
// Function to create a new course
exports.createCourse = async (req, res) => {
	try {
		// Get user ID from request object
		const userId = req.user.id;

		// Get all required fields from request body
		let {
			courseName,
			courseDescription,
			whatYouWillLearn,
			price,
			tag,
			category,
			status,
			instructions,
		} = req.body;
		

		// Get thumbnail image from request files
		const thumbnail = req.files.thumbnailImage;

		// Check if any of the required fields are missing
		if (
			!courseName ||
			!courseDescription ||
			!whatYouWillLearn ||
			!price ||
			!tag ||
			!thumbnail ||
			!category
		) {
			return res.status(400).json({
				success: false,
				message: "All Fields are Mandatory",
			});
		}
		if (!status || status === undefined) {
			status = "Draft";
		}
		// Check if the user is an instructor
		const instructorDetails = await User.findById(userId, {
			accountType: "Instructor",
		});

		if (!instructorDetails) {
			return res.status(404).json({
				success: false,
				message: "Instructor Details Not Found",
			});
		}

		// Check if the tag given is valid
		const categoryDetails = await Category.findById(category);
		if (!categoryDetails) {
			return res.status(404).json({
				success: false,
				message: "Category Details Not Found",
			});
		}
		// Upload the Thumbnail to Cloudinary
		const thumbnailImage = await uploadImageToCloudinary(
			thumbnail,
			process.env.FOLDER_NAME
		);
		console.log(thumbnailImage);
		// Create a new course with the given details
		const newCourse = await Course.create({
			courseName,
			courseDescription,
			instructor: instructorDetails._id,
			whatYouWillLearn: whatYouWillLearn,
			price,
			tag: tag,
			category: categoryDetails._id,
			thumbnail: thumbnailImage.secure_url,
			status: status,
			instructions: instructions,
		});

		// Add the new course to the User Schema of the Instructor
		await User.findByIdAndUpdate(
			{
				_id: instructorDetails._id,
			},
			{
				$push: {
					courses: newCourse._id,
				},
			},
			{ new: true }
		);
		// Add the new course to the Categories
		await Category.findByIdAndUpdate(
			{ _id: category },
			{
				$push: {
					courses: newCourse._id,
				},
			},
			{ new: true }
		);
		// Return the new course and a success message
		res.status(200).json({
			success: true,
			data: newCourse,
			message: "Course Created Successfully",
		});
	} catch (error) {
		// Handle any errors that occur during the creation of the course
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Failed to create course",
			error: error.message,
		});
	}
};

exports.editCourse = async (req, res) => {
	try{	
		const {courseId} = req.body;
		const updates = req.body;
		const course = await Course.findById(courseId);

		if(!course) {
			return res.status(404).json({error: "Course not found"});
		}

		// If Thumbnail Image is found, udpate it
		if(req.files){
			console.log("thumbnail update");
			const thumbnail = req.files.thumbnailImage;
			const thumbnailImage = await uploadImageToCloudinary(
				thumbnail,
				process.env.FOLDER_NAME
			)
			course.thumbnail = thumbnailImage.secure_url;
		}

		// Update only the fields that are present in the request body
		for(const key in updates){
			if(updates.hasOwnProperty(key)){
				if(key === "tag" || key === "instructions") {
					course[key] = JSON.parse(updates[key]);
				}else{
					course[key] = updates[key]
				}
			}
		}

		await course.save();

		const updatedCourse = await Course.findOne({
			_id: courseId,
		})
		.populate({
			path:"instructor",
			populate: {
				path: "additionalDetails",
			},
		})
		.populate("category")
		.populate("ratingAndReviews")
		.populate({
			path:"courseContent",
			populate: {
				path: "subSection",
			},
		})
		.exec();
		return res.status(200).json({
			success: true,
			message: "Course updated Successfully",
			data: updatedCourse
		})

	}catch(error){
		console.log(error);
		return res.status(500).json({
			success: false,
			message:"Error in edit Course",
			error: error.message,

		})
	}
}

exports.getAllCourses = async (req, res) => {
	try {
		const allCourses = await Course.find(
			{status: "Published"},
			{
				courseName: true,
				price: true,
				thumbnail: true,
				instructor: true,
				ratingAndReviews: true,
				studentsEnroled: true,
			}
		)
			.populate("instructor")
			.exec();
		return res.status(200).json({
			success: true,
			data: allCourses,
		});
	} catch (error) {
		console.log(error);
		return res.status(404).json({
			success: false,
			message: `Can't Fetch Course Data`,
			error: error.message,
		});
	}
};

//getCourseDetails
exports.getCourseDetails = async(req, res) => {
	try{
		// Get id
		const {courseId} = req.body;
		// Find Course details
		const courseDetails = await Course.findById(courseId)
		.populate(
			{
				path:'instructor',
				populate:{
						path:'additionalDetails',
					},		
			}
		)
		.populate('category')
		.populate('ratingAndReviews')
		.populate(
			{
				path:'courseContent',
				populate:{
					path:'subSection',
					select: "-videoUrl",
				},
			}
		)
		.exec();

	// Validation
	if(!courseDetails){
		return res.status(404).json({
			success:false,
			message: "Course details not found",
		});
	}

	let totalDurationInSeconds = 0;
	courseDetails.courseContent.forEach((content) => {
		content.subSection.forEach((subSection) => {
			const timeDurationInSections = parseInt(subSection.timeDuration);
			totalDurationInSeconds += timeDurationInSections;
		})
	})

	const totalDuration = convertSecondsToDuration(totalDurationInSeconds);
	// return response
	return res.status(200).json({
		success: true,
		message: 'Course Details fetched Successfully',
		data: {
			courseDetails,
			totalDuration,
		},
	});
	}catch(error){
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error in Fetching course details",
			error: error.message
		})
	}
}


exports.getFullCourseDetails = async (req, res) => {
	try{
		const { courseId } = req.body;
		const userId = req.user.id;
		const courseDetails = await Course.findOne({
			_id: courseId,
		})
		.populate({
			path: "instructor",
			populate: {
				path: "additionalDetails",
			},
		})
		.populate("category")
		.populate("ratingAndReviews")
		.populate({
			path: "courseContent",
			populate: {
				path: "subSection",
			},
		})
		.exec()

		let courseProgressCount = await CourseProgess.findOne({
			courseID: courseId,
			userId: userId,
		});

		console.log("courseProgressCount : ", courseProgressCount);

		if(!courseDetails){
			return res.status(404).json({
				success: false,
				message: `Could not find course with id: ${courseId}`,
			})
		}

		let totalDurationInSeconds = 0;
		courseDetails.courseContent.forEach((content) => {
			content.subSection.forEach((subSection) => {
				const timeDurationInSections = parseInt(subSection.timeDuration);
				totalDurationInSeconds += timeDurationInSections;
			})
		})

		const totalDuration = convertSecondsToDuration(totalDurationInSeconds)
		return res.status(200).json({
			success: true,
			data: {
				courseDetails,
				totalDuration,
				completedVideos: courseProgressCount?.completedVideos
					? courseProgressCount?.completedVideos
					: [],
			},
		})
	}catch(error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		})
	}
}


// Get a list of Course for a given Instructor
exports.getInstructorCourses = async(req, res) => {
	try{
		const instructorId = req.user.id;

		const instructorCourses = await Course.find({
			instructor: instructorId,
		}).sort({createdAt: -1});

		return res.status(200).json({
			success: true,
			data: instructorCourses,
		})
	}catch(error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Failed to retrieve instructor courses",
			eorror: error.message
		})
	}
}

// Delete the Course
exports.deleteCourse = async(req, res) => {
	try{
		const {courseId} = req.body;

		// Find the course
		const course = await Course.findById(courseId);
		if(!course){
			return res.status(404).json({message : "Course not found"});
		}

		// Unenroll Student from the course
		const studentsEnrolled = course.studentsEnrolled;
		for(const studentId of studentsEnrolled) {
			await User.findByIdAndUpdate(studentId, {
				$pull: {courses: courseId},
			})
		}

		// Delete From Category
		const categoryId = course.category;
		await Category.findByIdAndUpdate(categoryId, {
			$pull: {courses: courseId}
		})

		// Delete sections and sub-Sections
		const courseSections = course.courseContent;
		for(const sectionId of courseSections) {
			// Delete sub-sections of the section
			const section = await Section.findById(sectionId);
			if(section){
				const subSections = section.subSection;
				for(const subSectionId of subSections){
					await SubSection.findByIdAndDelete(subSectionId);
				}
			}
			// Delete the section
			await Section.findByIdAndDelete(sectionId);
		}

		// Delete the course
		await Course.findByIdAndDelete(courseId);

		return res.status(200).json({
			success: true,
			message: "Course deleted successfully",
		})
	}catch(error){
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Server error",
			error: error.message,
		})
	}
}

