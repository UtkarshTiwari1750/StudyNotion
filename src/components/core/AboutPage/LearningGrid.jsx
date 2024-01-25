import React from 'react'
import HighlightText from '../HomePage/HighlightText'
import CTAButton from "../HomePage/Button"

const LearningGridArray = [
    {
        order: -1,
        heading: "World-Class Learning for",
        highlightText: "Anyone, Anywhere",
        description: 
            "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
        BtnText: "Learn More",
        BtnLink: "/",
    },
    {
        order: 1,
        heading: "Curriculum Based on Industry Needs",
        description: "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."
    },
    {
        order: 2,
        heading: "Our Learning Methods",
        description: "The learning process uses the namely online and offline."
    },
    {
        order: 3,
        heading: "Certification",
        description: "You will get a certificate that can be used as a certification during job hunting."
    },
    {
        order: 4,
        heading: 'Rating "Auto-grading"',
        description: "You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor."
    },
    {
        order: 5,
        heading: "Ready to Work",
        description: "Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program."
    },
]



const LearningGrid = () => {
  return (
    <div className='grid mx-auto grid-cols-1 lg:grid-cols-4 w-11/12'>
        {
            LearningGridArray.map( (card, index) => (
                <div
                key={index}
                className={`${index === 0 && "lg:col-span-2 bg-transparent"}
                ${card.order%2 === 1 ? "bg-richblack-700" : "bg-richblack-800"}
                ${card.order === 3 && "lg:col-start-2"}
                lg:h-[280px]`}>
                    {
                        card.order < 0 
                        ? (
                            <div className='lg:w-[90%] flex flex-col pb-5 p-4 gap-3'>
                                <h2 className='text-4xl font-semibold font-inter'>
                                    {card.heading}
                                    <HighlightText text={card.highlightText}/>
                                </h2>

                                <p className='text-lg font-inter text-richblack-300'>
                                    {card.description}
                                </p>

                                <div className='w-fit mt-6'>
                                    <CTAButton active={true} linkto={card.BtnLink}>
                                        {card.BtnText}
                                    </CTAButton> 
                                </div>
                            </div>
                        )
                        : (
                            <div className='flex flex-col gap-8 p-7'>
                                <h2 className='text-richblack-5 text-lg font-semibold w-[70%]'>
                                    {card.heading}
                                </h2>

                                <p className='text-richblack-100 font-medium '>
                                    {card.description}
                                </p>
                            </div>
                        )
                    }
                </div>
            ))
        }
    
    </div>
  )
}

export default LearningGrid