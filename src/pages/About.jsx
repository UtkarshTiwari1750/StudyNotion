import React from 'react'
import HighlightText from '../components/core/HomePage/HighlightText'
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../components/core/AboutPage/StatsComponent'
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import Footer from '../components/common/Footer'
import ReviewSlider from '../components/common/ReviewSlider'

const About = () => {
  return (
    <div className='text-richblack-5'>
        {/* Section 1 */}
        <section className='bg-richblack-800'>
            <div className='w-11/12 mx-auto p-8 flex flex-col items-center relative'>
                <p className='mt-9 font-inter text-richblack-200'>
                    About us
                </p>
                
                <header className='text-richblack-5 font-inter text-4xl font-semibold mt-5 w-[60%] text-center '>
                    Driving Innovation in Online Education for a
                    <HighlightText text={"Brighter Future"} />
                </header>

                <p className='font-inter text-richblack-300 text-center w-[60%] mt-4 mb-60'>
                    Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community. 
                </p>

                <div className='flex gap-x-6 absolute -bottom-20'>
                    <img src={BannerImage1}  />
                    <img src={BannerImage2}  />
                    <img src={BannerImage3}  />
                </div>
            </div>
        </section>

        {/* Section 2 */}
        <section className='mt-36 w-11/12 mx-auto'>
            <div className='w-11/12 mx-auto p-8 text-center '>
                <Quote />
            </div>
        </section>

        {/* Section 3 */}
        <section className='w-full mt-6'>
            <div className='flex flex-col gap-8 w-11/12 mx-auto p-8 '>
                {/* Founding Story */}
                <div className='flex w-11/12 mx-auto justify-between items-center gap-4 mt-32'>
                    {/* Founding story left box */}
                    <div className='w-[45%] '>
                        <h2 className='text-4xl font-semibold font-inter bg-gradient-to-t from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-transparent'>
                            Our Founding Story
                        </h2>

                        <p className='mt-6 text-richblack-300'>
                            Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                        </p>

                        <p className='mt-4 text-richblack-300'>
                            As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                        </p>
                    </div>
                    {/* Founding story right box */}
                    <div className=''>
                        <img src={FoundingStory} alt="FoundingStory" />
                    </div>
                </div>

                {/* Vision and Mission */}
                <div className='flex w-11/12 mx-auto justify-between items-center gap-10 mt-32'>
                    {/* Left */}
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-4xl font-semibold font-inter bg-gradient-to-t from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-transparent'>
                            Our Vision
                        </h2>

                        <p className='mt-4 text-richblack-300 w-[80%]'>
                            With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                        </p>
                    </div>

                    {/* Right */}
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-4xl font-semibold font-inter'>
                            <HighlightText text={"Our Mission"} />
                        </h2>
                        <p className='mt-4 text-richblack-300 w-[80%]'>
                            our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 4 */}
        <StatsComponent />

        {/* Section 5 */}
        <section className='mx-auto w-11/12 mt-32 flex flex-col items-center justify-between gap-10 mb-[140px]'>
            <LearningGrid />
            <ContactFormSection />
        </section>

        <div className='relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
            <p className='text-center text-4xl font-semibold mt-8'>
                Reviews from other learners
            </p>
            {/* <ReviewSlider /> */}
            <ReviewSlider />
        </div>

        <Footer/>



    </div>
  )
}

export default About