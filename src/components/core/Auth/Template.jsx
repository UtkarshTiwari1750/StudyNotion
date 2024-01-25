import React from 'react'
import { useSelector } from 'react-redux';
import frameImg from "../../../assets/Images/frame.png";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
const Template = ({title, description1, description2, image, formType}) => {
    const {loading} = useSelector((state) => state.auth)

    return (
    <div className='grid min-h-[calc(100vh - 3.5rem)] place-items-center'>
        {
            loading ?
            (<div className='spinner'></div>) :
            (
                <div className='w-11/12 max-w-maxContent flex justify-between items-center gap-12 md:gap-y-0 mt-6 mx-auto p-12 text-richblack-5'>
                    {/* Left */}
                    <div className='max-w-[450px] w-11/12 mx-auto md:mx-0'>
                        <h2 className='font-inter text-3xl font-semibold '>
                            {title}
                        </h2>
                        <p className='mt-1 font-inter font-light text-richblack-100'>
                            {description1} 
                            <span className='text-blue-100 text-[0.88rem] font-edu-sa font-bold italic'>
                                {" "}{description2}
                            </span>
                        </p>

                        {formType === 'signup' ? (<SignupForm />) :(<LoginForm />)}

                    </div>

                    {/* Right */}
                    <div className='relative mx-auto w-11/12 max-w-[450px] md:mx-0'>
                        <img src={frameImg} alt="frameImg" loading='lazy'/>
                        <img src={image} alt="image" loading='lazy' 
                            className='z-10 absolute -top-4 right-4'
                        />
                    </div>
                </div>
            )

        }
        
    </div>
  )
}

export default Template