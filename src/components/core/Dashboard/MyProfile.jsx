import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import IconBtn from '../../common/IconBtn';
import { FiEdit } from "react-icons/fi";


const MyProfile = () => {
    const {user} = useSelector((state) => state.profile);
    const navigate = useNavigate();
  return (
    <div className='text-richblack-5 pr-28 w-8/12 mx-auto'>
        <h2 className='text-3xl font-inter font-medium text-richblack-5'>
            My Profile
        </h2>

        {/* Section 1 */}
        <div className='mt-4 p-6 flex justify-between items-center gap-5 bg-richblack-800 rounded-lg border border-richblack-700'>
            <div className='flex items-center gap-2'>
                <img 
                src={user?.image} 
                alt={`Profile-${user?.firstName}`}
                className='aspect-square w-[78px] rounded-full object-cover'
                />

                <div>
                    <p className='font-inter text-lg font-semibold text-richblack-5'>{user?.firstName + " " + user?.lastName}</p>
                    <p className='font-inter'>{user?.email}</p>
                </div>
            </div>

            <IconBtn 

                onClick={() => {
                    navigate("/dashboard/settings")
                }}
            >
                <div className='flex items-center gap-1 text-lg font-medium font-inter'>
                    <FiEdit />
                    <p>Edit</p>
                </div>
            </IconBtn>
        </div>

        {/* Section 2 */}
        <div className='mt-4 p-6 flex flex-col  gap-5 bg-richblack-800 rounded-lg border border-richblack-700'>
            <div className='flex justify-between items-center gap-2'>
                <p className='text-xl font-semibold'>About</p>
                <IconBtn 
                onClick={() => {
                    navigate("/dashboard/settings")
                }}
                >
                    <div className='flex items-center gap-1 text-lg font-medium font-inter'>
                        <FiEdit />
                        <p>Edit</p>
                    </div>
                </IconBtn>
            </div>
            <p>{user?.additionalDetails?.about ?? "Write Something about Yourself"}</p>
        </div>

        {/* Section 3 */}
        <div className='mt-4 p-6 flex flex-col  gap-5 bg-richblack-800 rounded-lg border border-richblack-700'>
            <div className='flex justify-between items-center gap-2'>
                <p>Personal Details</p>
                <IconBtn 

                onClick={() => {
                    navigate("/dashboard/settings")
                }}
                >
                    <div className='flex items-center gap-1 text-lg font-medium font-inter'>
                        <FiEdit />
                        <p>Edit</p>
                    </div>
                </IconBtn>
            </div>

            <div className='mt-4 grid grid-cols-2 gap-y-4'>
                <div className='flex flex-col gap-2'>
                    <p className='text-richblack-400'>First Name</p>
                    <p className='font-semibold'>{user?.firstName}</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='text-richblack-400'>Email</p>
                    <p className='font-semibold'>{user?.email}</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='text-richblack-400'>Gender</p>
                    <p className='font-semibold'>{user?.additionalDetails?.gender ?? "Add gender"}</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='text-richblack-400'>Last Name</p>
                    <p className='font-semibold'>{user?.lastName}</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='text-richblack-400'>Phone Number</p>
                    <p className='font-semibold'>{user?.additionalDetails?.contactNumber ?? "Add contact number"}</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='text-richblack-400'>Date of Birth</p>
                    <p className='font-semibold'>{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile