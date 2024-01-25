import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../../services/operations/authAPI';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
const LoginForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  })
  const [showPassword, setShowPassword] = useState(false);

  const {email, password} = formData;
  const handleOnChange = (e) => {
    setFormData( (prevData) => (
      {
        ...prevData,
        [e.target.name]: e.target.value,
      }
    ))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  }


  return (
    <div>
      <form
        onSubmit={handleOnSubmit}
        className='mt-6 flex w-full flex-col gap-y-4'      
      >
        <label className='w-full'>
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
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)"
            }}
            className='w-full rounded-lg bg-richblack-800 p-3 text-richblack-5'
          />
        </label>
        
        <label className='relative '>
          <p className="mb-1 text-sm text-richblack-5">
            Password <sup className='text-pink-200'>*</sup>
          </p>
          <input 
            required
            type={showPassword ? "text" : "password"} 
            name='password'
            value={password}
            onChange={handleOnChange}
            placeholder='Enter Password'
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
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

          <Link to="/forgot-password">
            <p className='mt-1 ml-auto max-w-max text-xs text-blue-100'>
              Forgot Password
            </p>
          </Link>
        </label>

          <button
            type='submit'
            className='mt-4 rounded-lg bg-yellow-50 py-2 px-3 font-medium text-richblack-900'
          >
            Sign In
          </button>
      </form>
    </div>
  )
}

export default LoginForm








