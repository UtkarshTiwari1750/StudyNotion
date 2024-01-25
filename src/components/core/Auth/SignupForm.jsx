import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"


import Tab from '../../common/Tab';
import {setSignupData} from "../../../slices/authSlice"
import {sendOtp} from "../../../services/operations/authAPI"
import { ACCOUNT_TYPE } from '../../../utils/constants';
import toast from 'react-hot-toast';

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Student or Instructor
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {firstName, lastName, email, password, confirmPassword} = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData( (prevData) => (
      {
        ...prevData,
        [e.target.name]: e.target.value,
      } 
    ))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      toast.error("Password Do Not Match");
      return;
    }

    const signupData = {
      ...formData,
      accountType
    }

    // setting signup data and state
    // To be used after otp verification
    dispatch(setSignupData(signupData));

    // Send OTP to user for Verification
    dispatch(sendOtp(formData.email, navigate));

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.STUDENT);
  }

  // Data to pass to tab component
  const tabData = [
    {
      id:1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id:2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ]

  return (
    <div>
      {/* Tab */}
      <Tab tabData={tabData} field={accountType} setField={setAccountType}/>

      {/* Form */}
      <form onSubmit={handleOnSubmit} className='flex flex-col w-full gap-y-4'> 
        <div className='flex gap-x-4'>
          <label>
            <p className='mb-1 text-sm text-richblack-5'>
              First Name <sup className='text-pink-200'>*</sup>
            </p>

            <input 
            required
            type="text"
            name='firstName'
            value={firstName}
            onChange={handleOnChange}
            placeholder='Enter first name'
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className='w-full rounded-lg bg-richblack-800 p-3 text-richblack-5'
            />
          </label>
          
          <label>
            <p className='mb-1 text-sm text-richblack-5'>
              Last Name <sup className='text-pink-200'>*</sup>
            </p>

            <input 
            required
            type="text"
            name='lastName'
            value={lastName}
            onChange={handleOnChange}
            placeholder='Enter last name'
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className='w-full rounded-lg bg-richblack-800 p-3 text-richblack-5'
            />
          </label>
          
        </div>

        <label>
            <p className='mb-1 text-sm text-richblack-5'>
              Email Address <sup className='text-pink-200'>*</sup>
            </p>

            <input 
            required
            type="text"
            name='email'
            value={email}
            onChange={handleOnChange}
            placeholder='Enter email address'
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className='w-full rounded-lg bg-richblack-800 p-3 text-richblack-5'
            />
          </label>

          <div className='flex gap-x-4'>
            <label className='relative'>
              <p className='mb-1 text-sm text-richblack-5'>
                Create Password <sup className='text-pink-200'>*</sup>
              </p>

              <input 
              required
              type={`${showPassword ? "text" : "password"}`}
              name='password'
              value={password}
              onChange={handleOnChange}
              placeholder='Enter Password'
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className='w-full rounded-lg bg-richblack-800 p-3 text-richblack-5'
              />

              <span 
              onClick={() => setShowPassword((prev) => !prev)}
              className='text-2xl text-richblack-200 absolute right-3 top-[36px] z-[10] cursor-pointer'>
                {
                  showPassword 
                  ? (<AiOutlineEyeInvisible />)
                  : (<AiOutlineEye />)
                }
              </span>
            </label>
          
            <label className='relative'>
              <p className='mb-1 text-sm text-richblack-5'>
                Confirm Password <sup className='text-pink-200'>*</sup>
              </p>

              <input 
              required
              type={`${showConfirmPassword ? "text" : "password"}`}
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder='Confirm Password'
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className='w-full rounded-lg bg-richblack-800 p-3 text-richblack-5'
              />

              <span 
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className='text-2xl text-richblack-200 absolute right-3 top-[36px] z-[10] cursor-pointer'>
                {
                  showConfirmPassword 
                  ? (<AiOutlineEyeInvisible />)
                  : (<AiOutlineEye />)
                }
              </span>
            </label>
        </div>
        
        <button
          type='submit'
          className='mt-2 rounded-lg bg-yellow-50 py-2 px-3 font-medium text-richblack-900'
        >
          Create Account
        </button>

      </form>
    
    </div>
  )
}

export default SignupForm