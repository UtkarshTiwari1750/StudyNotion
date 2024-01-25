import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconBtn from '../../../common/IconBtn'
import { buyCourse } from '../../../../services/operations/studentFeaturesAPI';
import { useNavigate } from 'react-router-dom';

const RenderTotalAmount = () => {
    const {total, cart} = useSelector((state) => state.cart);
    const {token} = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleBuyCourse = () => {
        const courses = cart.map( (course) => course._id);
        console.log("Bought these course:", courses);
        buyCourse(token, courses, user, navigate, dispatch);
    }
  return (
    <div className='ml-4 bg-richblack-800 p-6 rounded-lg w-[20%] flex flex-col'>
        <p className='font-semibold text-richblack-200 text-sm'>Total:</p>
        <p className='text-2xl text-yellow-50 font-semibold font-inter mt-2 mb-6'>Rs {total}</p>
        
        <IconBtn 
            text="Buy Now"
            onClick={handleBuyCourse}

        />
    </div>
  )
}

export default RenderTotalAmount