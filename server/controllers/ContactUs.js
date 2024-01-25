const mailSender = require("../utils/mailSender");
exports.contactUs = async(req, res) => {
    try{
        console.log("HEllo Contactus");
        const {email, body} = req.body;
        if(!email){
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }      

        await mailSender("utkarshtiwari1750@gmail.com", "Feedback", body);
        await mailSender(email, "Feedback Submited Successfully", "Your feedback is submitted successfully to codehelp");

        return res.status(200).json({
            success: true,
            message: "Feedback submitted successfully"
        })

    }catch(error){
        console.log("Error in contact us form",error);
        return res.status(400).json({
            
            success: false,
            message: "Error in submiting feedback",
            error: error.message
        });
    }
}








