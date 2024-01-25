import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';
import { FaArrowLeftLong } from "react-icons/fa6";

const ForgotPassword = () => {

    const {loading} = useSelector((state) => state.auth);
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();


    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
    }

  return (
    <div className='text-richblack-5 w-11/12 mx-auto h-[550px] items-center  flex overflow-hidden'>
        {
            loading ? 
            (
                <div className='spinner'></div>
            )
            :
            (
                <div className=' w-[580px] mx-auto p-8 '>
                    <h2 className='text-3xl font-semibold font-inter '>
                        {
                            !emailSent ? "Reset Your Password" : "Check Your Email"
                        }    
                    </h2>

                    <p className='mt-3 text-lg text-richblack-100 font-light font-inter'>
                        {
                            !emailSent ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery" 
                            : `We have sent the reset email to ${email}`
                        }
                    </p>

                    <form onSubmit={handleOnSubmit}
                    className='flex flex-col'>
                        {
                            !emailSent && (
                                <label className='flex flex-col gap-2 my-9'>
                                    <p className='text-sm font-light font-inter'>
                                        Email Address <span className='text-pink-100'>*</span>
                                    </p>
                                    <input 
                                    required
                                    type="email" 
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter Your Email Address'
                                    style={{
                                        boxShadow:"0px -1px 0px 0px rgba(255, 255, 255, 0.18) inset"
                                    }}
                                    className='text-richblack-5 p-3 rounded-lg bg-richblack-800'
                                    />
                                </label>
                            )
                        }
                        <button type='submit'
                        className='p-3 text-center bg-yellow-50 rounded-lg text-[16px] font-bold font-inter text-richblack-900'
                        >
                            {
                                !emailSent ? "Reset Password" : "Resend Email"
                            }
                        </button>

                    </form>
                    <div className='mt-5 '>
                        <Link to="/login" className='flex items-center gap-2'>
                            <FaArrowLeftLong />
                            <p>Back to Login</p>
                        </Link>
                    </div>
                </div>
            )
        }
    
    </div>
  )
}

export default ForgotPassword