import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import IconBtn from '../../../../common/IconBtn';
import { RiAddCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { MdNavigateNext } from "react-icons/md";
import { setCourse, setEditCourse, setStep } from '../../../../../slices/courseSlice';
import toast from 'react-hot-toast';
import NestedView from './NestedView';
import { createSection, updateSection } from '../../../../../services/operations/courseDetailsAPI';
const CourseBuilderForm = () => {

  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors}
  } = useForm();

  const [editSectionName, setEditSectionName] = useState(null);
  const {course} = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {token} = useSelector((state) => state.auth);
  const onSubmit = async(data) => {
    setLoading(true);
    let result;

    if(editSectionName){
      result = await updateSection(
        {
          sectionName: data.sectionName,
          sectionId: editSectionName,
          courseId: course._id,
        }, token
      )
    }
    else{
      result = await createSection({
        sectionName: data.sectionName,
        courseId: course._id,
      }, token)
    }

    // Update Values
    if(result) {
      dispatch(setCourse(result));
      setEditSectionName(null);
      setValue("sectionName", "");
    }

    // Loading
    setLoading(false);
  }

  const cancelEdit = () => {
    setEditSectionName(null);
    setValue("sectionName", "");
  }

  const goBack = () => {
    dispatch(setStep(1));
    dispatch(setEditCourse(true));
  }

  const goToNext = () => {
    if(course.courseContent.length === 0){
      toast.error("Please add atleast one Section");
      return;
    }
    if(course.courseContent.some((section) => section.subSection.length === 0)){
      toast.error("Please add atleast one lecture in each section");
      return;
    }

    // If everything is good
    dispatch(setStep(3));

  }

  const handleChangeEditSectionName = (sectionId, sectionName) => {
    if(editSectionName === sectionId) {
      cancelEdit();
      return;
    }

    setEditSectionName(sectionId);
    setValue("sectionName", sectionName)
  }
  
  return (
    <div className='space-y-8 roounded-md border border-richblack-700 bg-richblack-800 p-6'>
        <p className='text-2xl font-semibold text-richblack-5'>
          Course Builder
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="sectionName" className='text-sm text-richblack-5'>
              Section name <sup className='text-pink-200'>*</sup>
            </label>

            <input 
            id='sectionName'
            type="text"
            placeholder='Add Section Name'
            {...register("sectionName", {required: true})}
            className='form-style w-full'
            />
            {
              errors.sectionName && (
                <span className='ml-2 text-xs tracking-wide text-pink-200'>
                  Section Name is required
                </span>
              )
            }
          </div>

          <div className='flex items-end gap-x-4'>
            <IconBtn
            type={"submit"}
            text={editSectionName ? "Edit Section Name" : "Create Section"}
            outline={true}
            disabled={loading}
            >
              <RiAddCircleLine size={20} className='text-yellow-50'/>
            </IconBtn>
            
            {editSectionName && (
              <button
              type='button'
              onClick={cancelEdit}
              className='text-sm text-richblack-300 underline'
              >
                Cancel Edit
              </button>

            )}
          </div>
        </form>
        
        {course.courseContent.length > 0 && (
          <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />          
        )}

        <div className='flex justify-end gap-x-3'>
          <button
            onClick={goBack}
            className='rounded-md cursor-pointer flex items-center gap-x-2 bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900'
          >
            Back
          </button>

          <IconBtn
            disabled={loading}
            text="Next"
            onClick={goToNext} 
          >
            <MdNavigateNext />
          </IconBtn>
        </div>
        
    </div>
  )
}

export default CourseBuilderForm