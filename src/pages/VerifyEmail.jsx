import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { sendOtp, signUp } from '../services/operations/authAPI';
import { FaArrowLeftLong } from "react-icons/fa6";
import { GiBackwardTime } from "react-icons/gi";

const VerifyEmail = () => {
    const {signupData ,loading} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const dispatch = useDispatch();

    const {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    } = signupData;

    useEffect(() => {
        if(!signupData){
            navigate("/signup");
        }
    })

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate));

    }
  return (
    <div className='text-richblack-5 w-11/12 mx-auto h-[550px] items-center justify-center flex overflow-hidden'>
        {
            loading ?
            (
                <div className='spinner'></div>
            ):
            (
                <div className=' w-[480px] mx-auto p-8'>
                    <h2 className='text-3xl font-semibold font-inter '>
                        Verify Email
                    </h2>

                    <p className='mt-3 text-lg text-richblack-100 font-light font-inter'>
                        A verification code has been sent to you. Enter the code below 
                    </p>

                    <form onSubmit={handleOnSubmit}
                    className='mt-6 w-full'
                    >
                        <OTPInput 
                            value= {otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span>-</span>}
                            renderInput={
                                (prop) => <input {...prop} 
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className='w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 text-center mx-2'
                                    />
                            }
                        />

                        <button type='submit'
                        className='p-3 w-full text-center bg-yellow-50 rounded-lg text-[16px] font-bold font-inter text-richblack-900 mt-6'
                        >
                            Verify Email
                        </button>
                    </form>

                    <div className='flex w-full justify-between p-4 mt-4'>
                        <div>
                            <Link to="/login" className='flex items-center gap-2'>
                                <FaArrowLeftLong />
                                <p>Back to Login</p>
                            </Link>
                        </div>

                        <button 
                        className='flex items-center gap-1 text-blue-100'
                        onClick={() => dispatch(sendOtp(signupData.email, navigate))}>
                            <GiBackwardTime size={"24px"}/>
                            <p>Resend it</p>
                        </button>
                    </div>
                </div>
            )

        }

    </div>
  )
}

export default VerifyEmail