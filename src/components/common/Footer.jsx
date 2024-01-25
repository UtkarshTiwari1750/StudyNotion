import React from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from 'react-icons/fa';
import {FooterLink2} from "../../data/footer-links";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
    "Articles",
    "Blog",
    "Chart Sheet",
    "Code challenges",
    "Docs",
    "Projects",
    "Videos",
    "Workspaces",
  ];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];


const Footer = () => {
  return (
    <div className='mt-10 bg-richblack-800'>
        <div className='w-11/12 mx-auto flex flex-col gap-4 text-richblack-300'>
            {/* Upper */}
            <div className='py-12 border-b w-full flex border-richblack-700'>
                {/* Section 1 */}
                <div className='w-[50%] flex flex-wrap justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3'>
                    
                    <div className='w-[30%] flex flex-col gap-3 mb-7 lg:pl-0'>
                        <img src={logo} alt="logo" className='object-contain' />

                        <h2 className='text-richblack-50 font-semibold'>
                            Company
                        </h2>

                        <div className='flex flex-col gap-2'>
                            {
                                ["About", "Carrers", "Affiliates"].map( (ele, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className='text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200'
                                        >
                                            <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                                                {ele}
                                            </Link>
                                        </div>
                                    );
                                })
                            }
                        </div>

                        <div className='flex gap-3 text-lg'>
                            <FaFacebook />
                            <FaGoogle />
                            <FaTwitter />
                            <FaYoutube />
                        </div>
                    </div>
                    
                    <div className='w-[48%] lg:w-[30%] mb-7 lg:pl-0'>
                        <h2 className='text-richblack-50 font-semibold'>
                            Resources
                        </h2>
                        
                        <div className='flex flex-col gap-2 mt-2'>
                            {
                                Resources.map( (ele, i) => {
                                    return (
                                        <div
                                        key={i}
                                        className='text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200'
                                        >
                                            <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                                                {ele}
                                            </Link>
                                        </div>
                                    )
                                })

                            }
                        </div>

                        <h2 className='text-richblack-50 font-semibold mt-7'>
                            Support
                        </h2>
                        <div className='text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2'>
                            <Link to={"/help-center"}>
                                Help Center
                            </Link>
                        </div>
                    </div>

                    <div className='w-[48%] lg:w-[30%] mb-7 lg:pl-0'>
                        <h2 className='text-richblack-50 font-semibold'>
                            Plans
                        </h2>
                        
                        <div className='flex flex-col gap-2 mt-2'>
                            {
                                Plans.map( (ele, i) => {
                                    return (
                                        <div
                                        key={i}
                                        className='text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200'
                                        >
                                            <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                                                {ele}
                                            </Link>
                                        </div>
                                    )
                                })

                            }
                        </div>

                        <h2 className='text-richblack-50 font-semibold mt-7'>
                            Community
                        </h2>
                        <div className='flex flex-col gap-2 mt-2'>
                            {
                                Community.map( (ele, i) => {
                                    return (
                                        <div
                                        key={i}
                                        className='text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200'
                                        >
                                            <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                                                {ele}
                                            </Link>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>

                </div>

                {/* Section 2 */}
                <div className='lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3'>
                    {
                        FooterLink2.map( (ele, i) => {
                        return (
                            <div key={i} className='w-[48%] lg:w-[30%] mb-7 lg:pl-0'>
                                <h2 className='text-richblack-50 font-semibold'>
                                    {ele.title}
                                </h2>

                                <div className='flex flex-col gap-2 mt-2'>
                                    {
                                        ele.links.map( (link, index) => {
                                            return (
                                                <div
                                                key={index}
                                                className='text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200'
                                                >
                                                    <Link to={link.link}>{link.title}</Link>   
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                       }) 
                    }
                </div>

            </div>

            {/* Lower  */}
            <div className='flex justify-between items-center w-full pb-10 text-sm'>
                <div className='flex flex-row'>
                    {
                        BottomFooter.map( (ele, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`${
                                        BottomFooter.length - 1 === index
                                        ? ""
                                        : "border-r border-richblack-700"
                                    } cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3`}
                                >
                                    <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                                        {ele}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>


                <p className='font-inter font-semibold text-sm '>Made with ❤️ CodeHelp © 2023 Studynotion</p>
                
            </div>


        </div>
    </div>
  )
}

export default Footer