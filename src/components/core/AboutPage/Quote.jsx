import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <q className='text-4xl text-richblack-5 font-inter font-semibold'>
        We are passionate about revolutionizing the way we learn. Our innovative platform
        <HighlightText text={"combines technology"}/>
        ,
        <span className='bg-gradient-to-r from-[#FF512F] to-[#F09819] bg-clip-text text-transparent'>
            {" "}
            expertise
        </span>

        , and community to create an
        <span className='bg-gradient-to-br from-[#FF512F] to-[#F09819] bg-clip-text text-transparent'>
            {" "}
            unparalleled educational experience.
        </span>
    </q>
  )
}

export default Quote