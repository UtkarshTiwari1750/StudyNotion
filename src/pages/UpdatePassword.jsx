import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../services/operations/authAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const UpdatePassword = () => {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    })
    const navigate = useNavigate();
    const loading = useSelector((state) => state.auth);
    const [ showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {password, confirmPassword} = formData;
    const dispatch = useDispatch();
    const location = useLocation();

    const handleOnChange = (e) => {
        setFormData( (prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token, navigate))
    }
  return (
    <div className='text-richblack-5 w-11/12 mx-auto h-[550px] items-center justify-center flex overflow-hidden'>
        {
            loading === true ? 
            (
                <div className='spinner'></div>
            )
            : 
            (
                <div className=' w-[580px] mx-auto p-8 '>
                    <h2 className='text-3xl font-semibold font-inter '>
                        Choose New Password
                    </h2>

                    <p className='mt-3 text-lg text-richblack-100 font-light font-inter'>
                        Almost done. Enter your new password and youre all set.
                    </p>

                    <form onSubmit={handleOnSubmit}
                    className='flex flex-col'
                    >
                        <label className='flex flex-col gap-2 mt-7 relative'>
                            <p className='text-sm font-light font-inter'>
                                New Password <sup className='text-pink-100'>*</sup>
                            </p>

                            <input 
                            required
                            type={showPassword ? "text" : "password"} 
                            name='password'
                            value={password}
                            onChange={handleOnChange}
                            placeholder='Enter New Password'
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className='w-full rounded-lg bg-richblack-800 p-3 pr-12 text-richblack-5'
                             />

                            <span onClick={() => setShowPassword((prev) => !prev)}
                            className='text-2xl text-richblack-200 absolute right-3 top-[40px] z-[10] cursor-pointer'
                            >
                            {
                                showPassword ? <AiOutlineEyeInvisible /> :<AiOutlineEye /> 
                            }
                            </span>
                        </label>

                        <label className='flex flex-col gap-2 mt-5 mb-8 relative'>
                            <p className='text-sm font-light font-inter'>
                               Confirm New Password <sup className='text-pink-100'>*</sup>
                            </p>

                            <input 
                            required
                            type={showConfirmPassword ? "text" : "password"} 
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={handleOnChange}
                            placeholder='Confirm New Password'
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className='w-full rounded-lg bg-richblack-800 p-3 pr-12 text-richblack-5'
                            />

                            <span onClick={() => setShowConfirmPassword((prev) => !prev)}
                            className='text-2xl text-richblack-200 absolute right-3 top-[40px] z-[10] cursor-pointer'
                            >
                            {
                                showConfirmPassword ? <AiOutlineEyeInvisible /> :<AiOutlineEye /> 
                            }
                            </span>
                        </label>
                        
                        <button type='submit'
                        className='p-3 text-center bg-yellow-50 rounded-lg text-[16px] font-bold font-inter text-richblack-900'
                        >
                            Reset Password
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

export default UpdatePassword