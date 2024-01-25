import React from 'react'
import ContactUsForm from "../ContactUsPage/ContactUsForm"

const ContactFormSection = () => {
  return (
    <div className='mt-32'>
        <h2 className='text-4xl font-semibold text-richblack-5 font-inter text-center '>
            Get in Touch
        </h2>

        <p className='font-medium text-richblack-300 text-center font-inter mt-4'>
            We’d love to here for you, Please fill out this form.
        </p>

        <div className='mt-8'>
            <ContactUsForm />
        </div>
    
    </div>
  )
}

export default ContactFormSection