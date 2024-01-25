import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from 'react-stars';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromCart } from '../../../../slices/cartSlice';
import { ratingsEndpoints } from '../../../../services/apis';

// const cart = [
//     {
//       thumbnail:"https://images.unsplash.com/photo-1700226034029-5e674d66feb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
//       courseName: "The Complete Python Bootcamp From Zero to Hero in Python  Python Bootcamp From Zero to Hero in Python",
//       category: {
//         name:"Python"
//       },
//       totalDuration: "2:30:45",
//       progressPercentage: "65" 
//     },
//     {
//       thumbnail:"https://images.unsplash.com/photo-1700226034029-5e674d66feb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
//       courseName: "The Complete Python",
//       category: {
//         name:"Python"
//       },      totalDuration: "2:30:45",
//       progressPercentage: "100" 
//     },
//     {
//       thumbnail:"https://images.unsplash.com/photo-1700226034029-5e674d66feb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
//       courseName: "The Python",
//       category: {
//         name:"Python"
//       },      totalDuration: "2:30:45",
//       progressPercentage: "45" 
//     },
//   ]

const RenderCartCourses = () => {
    const {cart} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    
  return (
    <div className='w-8/12 pr-4'>
        {
            cart.map( (course, index) => (
                <div className='flex justify-between gap-6 py-6 border-b border-richblack-700 w-full'>
                    <div className='flex gap-5 '>
                        <img 
                        src={course.thumbnail} 
                        alt="course-thumbnail" 
                        className='aspect-square w-48 h-48 rounded-lg '
                        />
                        <div className='w-full'>
                            <p className='text-lg font-medium font-inter text-richblack-5 '>
                                {course?.courseName}
                            </p>
                            <p className='font-normal text-richblack-300 mt-2'>
                                {course?.category?.name}
                            </p>
                            <div className='flex mt-4 items-center gap-2'>
                                {/* HW:- Average Rating */}
                                <span className='font-semibold font-inter text-yellow-100'>4.8</span>
                                <ReactStars 
                                    count={5}
                                    size={20}
                                    edit={false}
                                    // value={}
                                    color1="#2C333F"
                                    color2="#ffd700"
                                    half={true}
                                    emptyIcons={<FaRegStar />}
                                    fullIcon={<FaRegStar />}
                                />

                                <span className='font-normal text-richblack-400'>({course?.ratingAndReview?.length} Ratings)</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                        className='p-3 rounded-lg bg-richblack-800 border border-richblack-700 flex gap-2 items-center text-pink-200 font-medium'
                        onClick={() => dispatch(removeFromCart(course._id))}
                        >
                            <RiDeleteBin6Line />
                            <span>Remove</span>
                        </button>
                        
                        <p className='mt-4 text-2xl font-semibold text-yellow-50'>
                            Rs {course?.price}
                        </p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default RenderCartCourses