import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/core/Dashboard/Sidebar';

const Dashboard = () => {
    const {loading: authLoading} = useSelector( (state) => state.auth);
    const {loading: profileLoading} = useSelector( (state) => state.profile)

    if(profileLoading || authLoading) {
        return (
            <div className='grid h-[calc(100vh-3.5rem)] min-w-[220px] place-items-center border-r-[1px] border-r-richblack-700 bg-richblack-800'>
                <div className='spinner'></div>
            </div>
        )
    };

  return ( 
    <div className='relative flex min-h-[calc(100vh - 3.5rem)] w-screen'>
        <Sidebar /> 
        <div className='h-[calc(100vh - 3.5rem)] overflow-auto w-full'>
            <div className='mx-auto w-11/12 py-10'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Dashboard