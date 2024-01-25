import React from 'react'
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiMiniGlobeEuropeAfrica } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import ContactUsForm from '../components/core/ContactUsPage/ContactUsForm';
import Footer from '../components/common/Footer';
import ReviewSlider from '../components/common/ReviewSlider';

const data = [
    {
        icon:<HiChatBubbleLeftRight />,
        heading: "Chat on us",
        subheading1: "Our friendly team is here to help.",
        subheading2: "@mail address",
    },
    {
        icon:<HiMiniGlobeEuropeAfrica />,
        heading: "Visit us",
        subheading1: "Come and say hello at our office HQ.",
        subheading2: "Here is the location/ address",
    },
    {
        icon:<FaPhoneAlt />,
        heading: "Call us",
        subheading1: "Mon - Fri From 8am to 5pm",
        subheading2: "+123 456 7890",
    },
]

const ContactUs = () => {
  return (
    <div>
        <div className='text-richblack-5 mt-8 w-11/12 mx-auto '>
            <div className='w-[90%] mx-auto flex gap-16 p-8 items-start justify-between'>
                {/* Left */}
                <div className='rounded-xl bg-richblack-800 p-6 flex flex-col gap-8'>
                    {
                        data.map( (element, index) => (
                            <div className='flex items-start gap-2 pr-12'>
                                <div className='text-2xl'>
                                    {element.icon}
                                </div>
                                <div className='flex flex-col justify-between '>
                                    <h2 className='text-lg font-semibold text-richblack-5'>
                                        {element.heading}
                                    </h2>
                                    
                                    <p className='font-medium font-inter text-richblack-200'>
                                        {element.subheading1}
                                    </p>

                                    <p className='font-semibold text-richblack-200 font-inter'>
                                        {element.subheading2}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Right */}
                <div className='p-12 border border-richblack-600 rounded-xl w-[55%] '>
                    <h2 className='text-4xl font-semibold font-inter text-richblack-5'>
                        Got a Idea? We’ve got the skills. Let’s team up
                    </h2>

                    <p className='font-medium font-inter text-richblack-300 mt-2 mb-6'>
                        Tell us more about yourself and what you’re got in mind.
                    </p>

                    <ContactUsForm />

                </div>

            </div>    

            <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
                <h1 className="text-center text-4xl font-semibold mt-8">
                    Reviews from other learners
                </h1>
                <ReviewSlider />
                
            </div>

        </div>
        <Footer />

    </div>
  )
}

export default ContactUs