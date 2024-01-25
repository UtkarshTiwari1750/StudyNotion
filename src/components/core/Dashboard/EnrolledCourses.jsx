import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserEnrolledCourses } from '../../../services/operations/profileAPI';
import ProgressBar from '@ramonak/react-progress-bar';
import { IoMdMore } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


// const tabData = [
//   {
//     tabName: "All",
//   },
//   {
//     tabName: "Pending",
//   },
//   {
//     tabName: "Completed",
//   },
// ]

const EnrolledCourses = () => {

    const {token} = useSelector((state) => state.auth);
    const [enrolledCourses, setEnrolledCourses] = useState(null);
    const navigate = useNavigate();
    
    useEffect( () => {
      const getEnrolledCourses = async () =>{
        try{
          const response = await getUserEnrolledCourses(token);
          setEnrolledCourses(response);
  
        }catch(error){
          console.log("Unable to fetch enrolled courses")
        }
      }
      getEnrolledCourses();
    }, [])
    console.log("RESPOSE.....", enrolledCourses);


  return (
    <div className='flex flex-col '>
        <div className='text-3xl text-richblack-5 font-medium font-inter'>
            Enrolled Courses
        </div>


        {
          !enrolledCourses ? (
            <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
              <div className="spinner"></div>
            </div>
          ): (
            !enrolledCourses.length ? (
            <p className="grid h-[10vh] w-full place-content-center text-richblack-5">
              You have not enrolled in any course yet.
              {/* TODO: Modify this Empty State */}
            </p>
          ) : ( 
              <div className=' text-richblack-5 w-full border border-richblack-700 rounded-lg mt-8'>
                <div className='flex gap-4 w-full bg-richblack-700 text-richblack-50 p-4 rounded-t-lg '>
                  <p className='w-5/12'>Course Name</p>
                  <p className='mx-[4.5rem]'>Duration</p>
                  <p className='mx-[4.5rem]'>Progress</p>
                </div>
 
                {/* Card */}
                {
                  enrolledCourses.map( (course, index, arr) => (
                    <div 
                      className={`flex items-center border border-richblack-700
                      ${index === arr.length - 1 ? "rounded-b-lg" : "rounded-none"}`}
                      key={index}
                    >
                      <div 
                        className='flex w-[45%] cursor-pointer items-center gap-4 px-5 py-3'
                        onClick={() => {
                          navigate(`/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`)
                        }}
                      >
                        
                          <img 
                          src={course?.thumbnail} 
                          alt="course-thumbnail" 
                          className='aspect-square w-12 h-12 rounded-lg'
                          />
                          
                          <div className='text-start w-full '>
                            <p className='font-medium text-richblack-5 font-inter'>{course.courseName}</p>
                            <p className='font-normal font-inter text-richblack-300'>{course.courseDescription.split(" ").slice(0,3).join(" ")}</p>
                          </div>
                      </div>
                        

                        <div className='mx-16 text-richblack-50 font-medium font-inter'>
                          {`${course?.totalDuration}`}
                        </div>

                        <div className='mx-16 w-2/12 flex flex-col gap-2'>
                          <p className='text-sm font-semibold text-richblack-50'>Progress: {course.progressPercentage || 0}%</p>
                          <ProgressBar 
                            completed={course.progressPercentage || 0}
                            height='8px'
                            isLabelVisible={false}
                            baseBgColor='#2C333F'
                            bgColor={course.progressPercentage == 100 ? "#06D6A0" : "#47A5C5"}
                          />
                        </div>
                    </div>
                  ))
                }
              </div>
            )
          )
            
        }
    
    </div>
  )
}

export default EnrolledCourses