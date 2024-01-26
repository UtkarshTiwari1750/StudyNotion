const Category = require("../models/Category");

function getRandomInt(max){
	return Math.floor(Math.random() * max);
}

exports.createCategory = async (req, res) => {
	try {
		const { name, description } = req.body;
		if (!name) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}
		const CategorysDetails = await Category.create({
			name: name,
			description: description,
		});
		console.log(CategorysDetails);
		return res.status(200).json({
			success: true,
			message: "Categorys Created Successfully",
		});
	} catch (error) {
		return res.status(500).json({
			success: true,
			message: error.message,
		});
	}
};

exports.showAllCategories = async (req, res) => {
	try {
		const allCategorys = await Category.find();
		res.status(200).json({
			success: true,
			data: allCategorys,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

// categoryPageDetails
exports.categoryPageDetails = async(req, res) => {
	try{
		// Get categoryId
		const { categoryId } = req.body;
		console.log("PRINTING CATEGORY ID: ", categoryId)
		// Get courses for specified categoryId
		const selectedCategory = await Category.findById(categoryId)
												.populate({
													path: "courses",
													match: {status: "Published"},
													populate: "ratingAndReviews"
												})
												.exec();
		
							
		// Validation
		if(!selectedCategory){
			return res.status(404).json({
				success: false,
				message: 'Data not found'
			});
		}

		if(selectedCategory.courses.length === 0){
			return res.status(404).json({
				success: false,
				message: "No Courses found for the selected category"
			})
		}
		// get coursesfor different categories
		const categoriesExceptSelected = await Category.find({
									_id: {$ne: categoryId},
									})
		const categoryWithCourses = categoriesExceptSelected.filter((category) => category.courses.length > 0);
		
		console.log("CATEGORIES WITH COURSES ....", categoryWithCourses)
		let differentCategory = await Category.findOne(
			categoryWithCourses[getRandomInt(categoryWithCourses.length)]
			._id
		)
		.populate({
			path: "courses",	
			match: {status: "Published"},
		})
		.exec();
		
		const allCategories = await Category.find()
			.populate({
				path: "courses",
				match: {status: "Published"},
				populate: {
					path: "instructor",
				}
			})
			.exec()
		
		const allCourses = allCategories.flatMap((category) => category.courses);
		const mostSellingCourses = allCourses
			.sort((a, b) => b.sold - a.sold)
			.slice(0, 10)

		// return response
		return res.status(200).json({
			success: true,
			message: 'Category Page Details',
			data: {
				selectedCategory,
				differentCategory,
				mostSellingCourses
			},
		});

	}catch(error){
		console.log(error);
		return res.status(500).json({
			success:false,
			message:'Error in categoryPageDetail',
			error: error.message,
		});
	}
}

