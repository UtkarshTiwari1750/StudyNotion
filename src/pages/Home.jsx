import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from '../components/core/HomePage/ExploreMore';
import Footer from "../components/common/Footer"
import { useDispatch } from 'react-redux';
import { setToken } from '../slices/authSlice';
import ReviewSlider from '../components/common/ReviewSlider';

const Home = () => {
    
  return (
    <div>
        {/* Section 1 */}
        <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between 
        '>

            <Link to={"/signup"}>
                
                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 
                transition-all duration-200 hover:scale-95 shadow-sm shadow-richblack-200'>
                    <div className='flex items-center gap-3 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                        <p>Becom an Instructor</p>
                        <FaArrowRight />
                    </div>
                </div>

            </Link>
            
            <div className='text-richblack-5 tracking-tight text-center text-4xl font-semibold mt-6 '>
                Empower Your Future with  
                <HighlightText text={"Coding Skills"} />
            </div>

            <div className='w-[90%] mt-4 text-center font-inter text-lg font-bold text-richblack-300'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className='flex flex-row gap-7 mt-8 '>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
                    
                <CTAButton active={false} linkto={"/signup"}>
                    Book a Demo
                </CTAButton>
            </div>

            <div className='relative shadow-video mx-3 my-12 '>
                <video 
                muted
                loop
                autoPlay
                className='z-10'
                >
                    <source src={Banner} type='video/mp4' className='z-10'/>
                </video>
                
                {/* ********************************** */}
                {/* ********************************** */}
                {/* Pending :- Glow effect behind video*/}
                {/* ********************************** */}
                {/* ********************************** */}
                <div className='w-48 h-48 right-0 -top-4 z-[-1] rounded-full absolute bg-white shadow-round'></div>

            </div>

            {/* Code Section 1 */}
            <div>
                <CodeBlocks 
                    position={"lg:flex-row"}
                    heading={
                        <div className='text-4xl w-[100%] font-semibold font-inter'>
                            Unlock Your 
                            <HighlightText text={"coding potential"}/>
                            with our online courses.
                        </div>
                    }
                    subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                    ctabtn1={
                        {
                            btnText: "Try it Yourself",
                            linkto: "/signup",
                            active: true
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "Learn More",
                            linkto: "/login",
                            active: false
                        }
                    }

                    codeblock={`<!DOCTYPE html> \n <html> \n <head> <title>Example</title>  <link rel="stylesheet"href="styles.css"> \n /head> \n body> \n h1><ahref="/">Header</a>  /h1> \n nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a> \n /nav>`}
                    codeColor={"text-yellow-25"}
                    backgroundGradient={<div className='codeblock1 absolute'></div>}
                />
            </div>

            {/* Code Section 2 */}
            <div>
                <CodeBlocks 
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className='text-4xl w-[40%] font-semibold'>
                            Start 
                            <HighlightText text={"coding"}/>
                            <br />
                            <HighlightText text={"in seconds"}/>

                        </div>
                    }
                    subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                    ctabtn1={
                        {
                            btnText: "Continue Lesson",
                            linkto: "/signup",
                            active: true
                        }
                    }
                    ctabtn2={
                        {
                            btnText: "Learn More",
                            linkto: "/login",
                            active: false
                        }
                    }

                    codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } \n from "react-icons/fa";\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                    codeColor={"text-white"}
                    backgroundGradient={<div className='codeblock2 absolute'></div>}
                />
            </div>

            <ExploreMore />
        </div>
    
        {/* Section 2 */}
        <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[310px]'> 

                <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                    <div className='h-[150px]'></div>
                    <div className='flex gap-7 text-white '>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3'>
                                Explore Full Catalog
                                <FaArrowRight />
                            </div>
                        </CTAButton>

                        <CTAButton active={false} linkto={'/signup'}>
                            Learn More
                        </CTAButton>
                    </div>

                </div>
            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the Skills you need for a
                        <HighlightText text={"Job that is in demand"} />
                    </div>

                    <div className='w-[40%] flex flex-col gap-10 items-start'>
                        <p className='text-lg'>
                            The modern StudyNotion is the dictates its own terms. 
                            Today, to be a competitive specialist requires more than professional skills.
                        </p>

                        <CTAButton active={true} linkto={"/signup"}>
                            Learn More
                        </CTAButton>

                    </div>

                </div>

                <TimelineSection />

                <LearningLanguageSection />

            </div>

        </div>
        
        {/* Section 3 */}
        <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8
        bg-richblack-900 text-white'>
            <InstructorSection />
            
            <h2 className='text-center text-4xl font-semibold mt-10 '>Review from Other Learners</h2>
            {/* Review Slider Here */}
            <ReviewSlider />
        </div>


    
        {/* Footer */}
        <Footer />
    
    
    
    </div>
  )
}

export default Home