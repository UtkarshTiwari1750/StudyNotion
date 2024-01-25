const SubSection = require("../models/SubSection");
const CourseProgress = require("../models/CourseProgress");
exports.updateCourseProgress = async(req, res) => {
    const {courseId, subSectionId} = req.body;
    const userId = req.user.id;

    try{
        // Check if the subSection is valid or not
        const subSection = await SubSection.findById(subSectionId); 

        if(!subSection) {
            return res.status(404).json({error: "Invalid Sub-Section"});
        }

        // Check for old entry
        let courseProgress =  await CourseProgress.findOne({
            courseID: courseId,
            userId: userId
        })

        if(!courseProgress){
            return res.status(404).json({
                success: false,
                message: "Course Progress does not exist"
            });
        }
        else {
            // Check for re-completing video/subSection
            if(courseProgress.completedVideos.includes(subSectionId)){
                return res.status(400).json({
                    error:"Subsection already completed",
                })
            }

            // Push into completed Video
            courseProgress.completedVideos.push(subSectionId);
        }
        
        await courseProgress.save();

        return res.status(200).json({
            success:true,
            message: "Lecture Completed Successfully",
        })

    } catch(error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }
}   