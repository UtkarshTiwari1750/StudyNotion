import React, { useState } from 'react'

import IconBtn from '../../../common/IconBtn'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { changePassword } from '../../../../services/operations/SettingsAPI'
import { useSelector } from 'react-redux'


const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

const UpdatePassword = () => {
  const navigate = useNavigate();
  const {token} = useSelector((state) => state.auth)
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const submitPasswordForm = async(data) => {
    try{
      await changePassword(token, data);
    }catch(error){
      console.log("ERROR MESSAGE - ", error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(submitPasswordForm)}>
        {/* Profile Information */}
        <div className='my-10 flex flex-col gap-y-6 rounded-md border border-richblack-700 bg-richblack-800 p-8 px-12'>
          <h2 className='text-lg font-semibold text-richblack-5'>
            Password
          </h2>
          
          <div className='flex flex-col gap-5 lg:flex-row'>
            <div className='relative flex flex-col gap-2 lg:w-[48%]'>
              <label htmlFor="currentPassword" className='label-style'>
                Current Password
              </label>

              <input 
              type={showOldPassword ? "text" : "password"} 
              name='currentPassword'
              id='currentPassword'
              placeholder='Enter Current Password'
              {...register("oldPassword", {required: true})}
              className='form-style'
              />
              <span 
              onClick={() => setShowOldPassword((prev) => !prev)}
              className='text-2xl text-richblack-200 absolute right-3 top-[36px] z-[10] cursor-pointer'>
                {
                  showOldPassword 
                  ? (<AiOutlineEyeInvisible />)
                  : (<AiOutlineEye />)
                }
              </span>
              {
                errors.oldPassword && (
                  <span className='-mt-1 text-[12px] text-yellow-100'>
                    Please enter your Current Password.
                  </span>
                )
              }
            </div>

            <div className='relative flex flex-col gap-2 lg:w-[48%]'>
              <label htmlFor="newPassword" className='label-style'>
                New Password
              </label>

              <input 
              type={showNewPassword ? "text" : "password"} 
              name='newPassword'
              id='newPassword'
              placeholder='Enter New Password'
              {...register("newPassword", {required: true})}
              className='form-style'
              />
              <span 
              onClick={() => setShowNewPassword((prev) => !prev)}
              className='text-2xl text-richblack-200 absolute right-3 top-[36px] z-[10] cursor-pointer'>
                {
                  showNewPassword 
                  ? (<AiOutlineEyeInvisible />)
                  : (<AiOutlineEye />)
                }
              </span>
              {
                errors.newPassword && (
                  <span className='-mt-1 text-[12px] text-yellow-100'>
                    Please enter your New Password.
                  </span>
                )
              }
            </div><div className='relative flex flex-col gap-2 lg:w-[48%]'>
              <label htmlFor="confirmNewPassword" className='label-style'>
                Confirm New Password
              </label>

              <input 
              type={showConfirmNewPassword ? "text" : "password"} 
              name='confirmNewPassword'
              id='confirmNewPassword'
              placeholder='Enter Confirm New Password'
              {...register("confirmNewPassword", {required: true})}
              className='form-style'
              />
              <span 
              onClick={() => setShowConfirmNewPassword((prev) => !prev)}
              className='text-2xl text-richblack-200 absolute right-3 top-[36px] z-[10] cursor-pointer'>
                {
                  showConfirmNewPassword 
                  ? (<AiOutlineEyeInvisible />)
                  : (<AiOutlineEye />)
                }
              </span>
              {
                errors.confirmNewPassword && (
                  <span className='-mt-1 text-[12px] text-yellow-100'>
                    Please enter your Confirm New Password.
                  </span>
                )
              }
            </div>

          </div>

          <div className='flex justify-end gap-2'>
            <button
            onClick={() => {navigate("/dashboard/my-profile")}}
            className='cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50'
            >
              Cancel
            </button>
            <IconBtn type="submit" text="Update" />
          </div>
        </div>
    </form>
  )
}

export default UpdatePassword