import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { contactusEndpoint } from '../../../services/apis';
import CountryCode from "../../../data/countrycode.json";
import { apiConnector } from '../../../services/apiconnector';
import toast from 'react-hot-toast';

const ContactUsForm = () => {

    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm();

    const submitContactForm = async(data) => {
        console.log("Logging  Data", data);
        const body = data.message;
        const toastId = toast.loading("Sending Message");

        try{    
            setLoading(true);

            const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, {data, body});
            // const response = {state: "OK"};
            console.log("LOGGING RESPONSE....", response);
            setLoading(false);
            toast.success("Message Sent")
        }catch(error){
            console.log("Error..................", error.message);
            setLoading(false);
            toast.error("Error in Sending Message");
        }
        toast.dismiss(toastId);
    }

    useEffect( () => {
        if(isSubmitSuccessful){
            reset({
                email: "",
                firstName: "",
                lastName: "",
                message: "",
                phoneNo: "",
            })
        }
    },[isSubmitSuccessful, reset])



  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
        <div className='w-full flex flex-col gap-5 text-richblack-5'>
            <div className='w-full flex gap-x-4 justify-between'>
                {/* FirstName */}
                <div className='w-full flex flex-col'>
                    <label htmlFor="firstname" className='mb-1 text-sm text-richblack-5'>
                        First Name <sup className='text-pink-300'>*</sup>
                    </label>
                    <input 
                    type="text" 
                    name="firstname"
                    id="firstname"
                    placeholder='Enter first name'
                    {...register("firstname", {required:true})}
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className='w-full rounded-lg bg-richblack-800 p-3 text-richblack-5'
                    />
                    {
                        errors.firstname && (
                            <span>
                                Please enter Tour Name
                            </span>
                        )
                    }
                </div>
                
                {/* Last Name */}
                <div className='w-full flex flex-col'>
                    <label htmlFor="lastname" className='mb-1 text-sm text-richblack-5'>
                        Last Name 
                    </label>
                    
                    <input 
                    type="text" 
                    name="lastname"
                    id="lastname"
                    placeholder='Enter last name'
                    {...register("lastname")}
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className='w-full rounded-lg bg-richblack-800 p-3 text-richblack-5'

                    />
                    {
                        errors.lastname && (
                            <span>
                                Please enter Tour Name
                            </span>
                        )
                    }
                </div>
            </div>

            {/* Email */}
            <div className='flex flex-col '>
                <label htmlFor='email' className='mb-1 text-sm text-richblack-5'>
                    Email Address <sup className='text-pink-200'>*</sup>
                </label>
                <input 
                type="email" 
                name='email'
                id='email'
                placeholder='Enter Email Address'
                {...register("email", {required: true})}
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className='w-full rounded-lg bg-richblack-800 p-3 text-richblack-5'

                />
                {
                    errors.email && (
                        <span>
                            Please enter your email address
                        </span>
                    )
                }

            </div>
            
            {/* Phone No */}
            <div className='flex flex-col gap-1'>
                <label htmlFor="phonenumber" className='mb-1 text-sm text-richblack-5'>
                    Phone Number <sup className='text-pink-300'>*</sup>
                </label>
                
                <div className='flex flex-row gap-2 items-center'>
                    {/* Drop Down */}
                    <div>
                        <select 
                        name="dropdown" 
                        id="dropdown"
                        {...register("countrycode", {required: true})}
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                        className='w-24 rounded-lg bg-richblack-800 p-[0.9rem] text-richblack-5'

                        >
                            {   
                                CountryCode.map((element, index) => (
                                    <option key={index} value={element.code}>
                                        {element.code} - {" "}
                                        {element.country}
                                    </option>
                                ))

                            }
                        </select>
                    </div>

                    <div className='w-full'>
                        <input 
                        type="number"
                        name='phonenumber'
                        id='phonenumber'
                        placeholder='12345 67890'
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                        className='w-full rounded-lg bg-richblack-800 p-3 text-richblack-5'

                        {...register("phoneNo", 
                        {
                            required:{value:true, message: "Please Enter Phone Number"}, 
                            maxLength:{value:10, message:"Invalid Phone Number"},
                            minLength:{value:8, message:"Invalid Phone Number"}
                        })
                        }
                        />
                    </div>
                </div>
                {
                    errors.phoneNo && (
                        <span>
                            {errors.phoneNo.message}
                        </span>
                    )
                }
            </div>

            {/* Message */}
            <div className='flex flex-col'>
                <label htmlFor="message" className='mb-1 text-sm text-richblack-5'>
                    Message <sup className='text-pink-300'>*</sup>
                </label>
                
                <textarea 
                name="message" 
                id="message" 
                cols="30" 
                rows="5" 
                placeholder='Enter Your Message Here'
                {...register("message", {required: true})}
                style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className='w-full rounded-lg bg-richblack-800 p-3 text-richblack-5'

                />
                {
                    errors.message && (
                        <span> 
                            Please enter your message.
                        </span>
                    )
                }
                
            </div>

            {/* Button */}
            <button
            type='submit'
            className='w-full bg-yellow-50 rounded-md text-center p-4 text-richblack-900'
            >
                Send Message
            </button>
        </div>
    
    </form>
  )
}

export default ContactUsForm