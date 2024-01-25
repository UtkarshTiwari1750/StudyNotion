import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartCourses from './RenderCartCourses';
import RenderTotalAmount from './RenderTotalAmount';

const Cart = () => {
    const {total, totalItems} = useSelector((state) => state.cart);

  return (
    <div className='text-richblack-5 w-full'>
        <h2 className='text-3xl text-richblack-5 font-medium font-inter'>
            Your Cart
        </h2>
        
        <p className='my-6 text-justify text-richblack-400 font-semibold '>
            {totalItems} Courses in Cart
        </p>

        {
            total > 0
            ? (<div className='flex gap-2 w-full items-start'>
                <RenderCartCourses />
                <RenderTotalAmount />
            </div>)
            : (<p>Your Cart is Empty</p>)
        }
    
    </div>
  )
}

export default Cart