import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import IconBtn from '../../common/IconBtn';
import { IoMdAdd } from "react-icons/io";
import CoursesTable from './InstructorCourses/CoursesTable';
import { fetchInstructorCourses } from '../../../services/operations/courseDetailsAPI';

const MyCourses = () => {
    const {token} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchCourses = async() => {
            const result = await fetchInstructorCourses(token, dispatch);
            if(result) {
                setCourses(result);
            }
        }
        fetchCourses();
    },[]);


  return (
    <div>
        <div className='mb-14 flex items-center justify-between'>
            <h1 className='text-3xl font-medium text-richblack-5 '>My Courses</h1>
            <IconBtn 
                text="Add Course"
                onClick={() => navigate("/dashboard/add-course")}
            >
                <IoMdAdd />
            </IconBtn>
        </div>

        {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}

export default MyCourses