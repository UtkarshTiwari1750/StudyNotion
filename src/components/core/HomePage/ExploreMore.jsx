import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore';
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
];

const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter( (course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }

    return (
    <div>
        <div className='text-4xl font-semibold text-center'>
            Unlock the 
            <HighlightText text={"Power of code"}/>
        </div>

        <p className='text-center text-richblack-300 text-lg font-semibold mt-3'>
            Learn to build anything you imagine
        </p>

        <div className='flex gap-3 items-center bg-richblack-800 rounded-full my-5 p-2 '>
            {
                tabsName.map( (tab, index) => {
                    return (
                        <div 
                        key={index} 
                        className={`text-lg flex flex-row items-center gap-2 
                        ${currentTab === tab ? "bg-richblack-900 text-richblack-5 font-medium" : " text-richblack-200"} 
                        rounded-full transition-all duration-200 
                        cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2
                        `}
                        onClick={() => setMyCards(tab)}
                        >
                            {tab}
                        </div>
                    )
                })
            }
        </div>

        <div className='lg:h-[250px]'></div>

        {/* Course card group */}
        <div className='absolute flex lg:flex-row flex-col gap-8 w-full translate-x-[30%]  lg:-translate-y-56 lg:-translate-x-28'>
            
            {
                courses.map( (element, index)  => {
                    return (
                        <CourseCard 
                            key={index}
                            cardData = {element}
                            currentCard = {currentCard}
                            setCurrentCard = {setCurrentCard}
                        />
                    )
                })
            }
        </div>

    </div>
  )
}

export default ExploreMore