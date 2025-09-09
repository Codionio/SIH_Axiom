import React from 'react'
import {  Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";


const LandingPage = () => {
  return (
    <div className='flex flex-col justify-between align-middle h-auto p-50 text-center bg-gradient-to-b from-blue-50 to-blue-100'>
      <h1 className='font-bold text-6xl text-blue-700 mb-4'>MindCare Campus</h1>
      <p className='text-gray-600 mb-4'>Mental Health Support Platform For Students</p>
      <div className=' flex justify-center gap-2 m-4 '>
        <div className='flex flex-col bg-white border-2 border-gray-300 w-115 text-left p-5 rounded-2xl'>
          <h2 className='font-bold text-4xl'>Features</h2>
          <p className='text-gray-500 mb-1.5'>Comprehensive meantal health support tools</p>

          <h3 className='font-bold text-xl'><FaSearch className="text-gray-500 flex inline-block mr-1" />Menatal Health Assessments</h3>
          <p className='text-gray-500 mb-1.5'>PHQ-9 and GAD-7 screening tools</p>

          <h3 className='font-bold text-xl'><FaRegCommentDots className="text-blue-500 inline-block mr-1" />Counselor Chat</h3>
          <p className='text-gray-500 mb-1.5'>Real-time messaging with menatl health professionals</p>

          <h3 className='font-bold text-xl'><FaCalendarCheck className="text-green-600 inline-block mr-1" size={24} />Appointments Booking</h3>
          <p className='text-gray-500 mb-1.5'>Schedule sessions with counselors</p>

          <h3 className='font-bold text-xl'><GiBookshelf className="text-purple-600 inline-block mr-1" size={22} />Educational Resources</h3>
          <p className='text-gray-500 mb-1.5'>Acess to mental health information and tools</p>
        </div>
        <div className='flex flex-col bg-white border-2 border-gray-300 w-115 text-left p-5 rounded-2xl'>

        </div>
      </div>
      <div className='m-2'>
        <Link to="/login"><button className='bg-white border-2 border-gray-300 hover:bg-black hover:text-white p-4 m-2 rounded-2xl cursor-pointer font-bold'>Login</button></Link>
        <Link to="/register"><button className='bg-white border-2 border-gray-300 hover:bg-black hover:text-white p-4 m-2 rounded-2xl cursor-pointer font-bold'>Register</button></Link>
        <Link to="/"><button className='bg-white border-2 border-gray-300 hover:bg-black hover:text-white p-4 m-2 rounded-2xl cursor-pointer font-bold '>Dashboard</button></Link>
      </div>
      {/* <p className='text-gray-600'>Devlopment Mode: Using mock authentiation Configure Firebase for production authentiation </p> */}
    </div>
  )
}

export default LandingPage
