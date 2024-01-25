import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
import { ImTree } from "react-icons/im";


const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div 
    className={`w-[28%] h-full ${currentCard === cardData.heading ? "bg-white text-richblack-800" : "bg-richblack-800 text-richblack-25"}
              ${currentCard === cardData.heading ? "shadow-card shadow-yellow-50" : ""} transition-all duration-300`}
    onClick={() => setCurrentCard(cardData.heading)}>
        <div className={`w-full h-[250px] text-richblack-400 pt-8 px-6`}>
            <h2 className={`font-inter text-xl font-semibold ${currentCard === cardData.heading ? "text-richblack-800" : "text-richblack-25"}`}>
                {cardData.heading}
            </h2>
            <p className={`font-inter font-normal mt-4`}>
                {cardData.description}
            </p>
        </div>
        <div className=' w-full justify-between font-inter py-5 border-dashed border-richblack-500 border-t-2 '>
          <div className='w-full px-6 flex justify-between'>
            <div className='flex gap-2 items-center'>
              <FaUserGroup />
              <p>{cardData.level}</p>
            </div>

            <div className='flex gap-2 items-center'>
              <ImTree />
              <p>{cardData.lessionNumber} Lessons</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CourseCard