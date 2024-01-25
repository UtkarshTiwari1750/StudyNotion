import React from 'react'

const stats = [
  {count: "5K", label: "Active Students"},
  {count: "10+", label: "Mentors"},
  {count: "200+", label: "Courses"},
  {count: "50+", label: "Awards"},
]

const StatsComponent = () => {
  return (
    <section className='w-full mt-20 bg-richblack-800'>
      <div className='w-11/12 mx-auto px-32 py-24 '>
        <div className='flex gap-x-5 justify-between'>
          {
            stats.map( (data, index) => (
              <div key={index} className='px-5 text-center'>
                <h2 className='text-3xl font-bold font-inter text-richblack-5'>
                  {data.count}
                </h2>

                <p className='font-semibold font-inter text-richblack-500 mt-2'>
                  {data.label}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default StatsComponent