const Course = require("../models/Course");
const { default: mongoose } = require("mongoose");
const RatingAndReview = require("../models/RatingAndRaview")
// Create Rating and Review
exports.createRating = async(req, res) => {
    try{
        // Fetch Data
        const {rating, review, courseId} = req.body;
        const userId = req.user.id;
        // Validation
        if(!userId || !rating || !review || !courseId){
            return res.status(400).json({
                success: false,
                message: "All fields are require",
            });
        }
        // Check if user is enrolled or not
        const courseDetails = await Course.findOne({
                                    _id:courseId,
                                    studentsEnrolled: {$elemMatch: {$eq: userId}}
                                })
        if(!courseDetails){
            return res.status(404).json({
                success:false,
                message: 'Student is not enrolled in the course',
            });
        }
        
        /*
            // *************************************************
            // *************************************************
            // ** My logic to find if user is enrolled or not **
            // *************************************************
            // *************************************************
            const enrolled = false;
            const courseDetail = await Course.findById(courseId);
            const allStudents = courseDetail.studentsEnrolled;
            allStudents.forEach((id) => {
                if(id === userId){
                    enrolled = true;
                }
            })
            if(!enrolled){
                return res.status(400).json({
                    success:false,
                    message: 'Student is not enrolled',
                });
            }
        */

        // Check if user already reviewed the course
        const alreadyReviewed = await RatingAndReview.findOne({
                                            user:userId,
                                            course: courseId,
                                        });
        if(alreadyReviewed) {
            return res.status(403).json({
                success: false,
                message: 'Course is already reviewed by the user',
            });
        }

        // Create a rating
        const ratingReview = await RatingAndReview.create({
            rating,
            review,
            user: userId,
            course: courseId,
        });

        // update course with  rating and review
        const updatedCourseDetails = await Course.findByIdAndUpdate(
                                    courseId,
                                    {
                                        $push:{
                                            ratingAndReviews: ratingReview._id,
                                        } 
                                    },
                                    {new: true});
        console.log(updatedCourseDetails);
        // return response
        return res.status(200).json({
            success: true,
            message: "Rating and Review Created",
            ratingReview,
        });
    }catch(error){
        return res.status(400).json({
            success: false,
            message: 'Error in Creating rating and review',
            error: error.message,
        })
    }
}


// getAverageRating
exports.getAverageRating = async(req, res) => {
    try{
        // Fetch courseid
        const courseId = req.body.courseId;
        // calculate avg rating
        const result = await RatingAndReview.aggregate([
            {
                $match: {
                    course: new mongoose.Types.ObjectId(courseId),
                },
            },
            {
                $group: {
                    _id:null,
                    avergeRating: { $avg: '$rating'},
                }
            }
        ])

        // return rating
        if(result.length > 0){

            return res.status(200).json({
                success: true,
                message:"Average rating is calcualted successfully",
                avergeRating: result[0].avergeRating,
            })

        }

        // if no rating/review exist
        return res.status(200).json({
            success: true,
            message: 'Average Rating is 0, no ratings given till now',
            avergeRating: 0,
        })


    }catch(error){
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Error in average rating and review",
            error: error.message,
        })
    }
}


// getAllRatingAndReviews
exports.getAllRating = async(req, res) => {
    try{
        const allReviews = await RatingAndReview.find({})
                                .sort({rating: "desc"})
                                .populate({
                                    path:"user",
                                    select:"firstName lastName email image"
                                })
                                .populate({
                                    path: "course",
                                    select: "courseName"
                                });
        return res.status(200).json({
            success: true,
            message: "All reviews fetched successfully",
            data: allReviews
        })

    }catch(error){
        return res.status(400).json({
            success: false,
            message: 'Error in getAllRating',
            error: error.message,
        })
    }
}




