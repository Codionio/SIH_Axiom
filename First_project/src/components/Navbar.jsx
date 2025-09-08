import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BsSun, BsMoonFill } from 'react-icons/bs';
import { useTheme } from '../contexts/ThemeContext';
import Light_Dark from './ui/Light_Dark';

const Navbar = (props) => {
  
  let alpha = ()=>{
    if(props.islogin === true){
        props.setlogin(false);
    }
    else{
        props.setlogin(true);
    }
  }

  return (
    <nav className="sticky top-0 z-50  backdrop-blur-lg border-b border-slate-200 dark:bg-red-400 transition-colors duration-300">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className='flex items-center '>
          <img src="public/logo.png" alt="" className='h-10' />
        <a href="/" className="text-2xl font-extrabold text-black ">
          saarthi
        </a>
        </div>

        
        { props.islogin?(
          <div className="hidden md:flex items-center space-x-6 text-black ">
            <button>
                 <a href="#dashboard" className="nav-link text-black hover:text-white hover:bg-black py-4 px-6 duration-200 rounded-2xl active:scale-90">Dashboard</a>
            </button>
            <button>
                <a href="#assessment" className="nav-link text-black hover:text-white hover:bg-black py-4 px-6 duration-200 rounded-2xl ">Assessment</a>
            </button>
            <button>
                <a href="#chat" className="nav-link text-black hover:text-white hover:bg-black py-4 px-6 duration-200 rounded-2xl ">Chat</a>
            </button>
            <button>
                <a href="#appointment" className="nav-link text-black hover:text-white hover:bg-black py-4 px-6 duration-200 rounded-2xl ">Appointment</a>
            </button>
          </div>
        ) : null}

        
        <div className="flex items-center space-x-4">
          {props.islogin?(
            <a href="#profile" className="icon-button text-black hover:bg-white">
              <FaUserCircle size={22} />
            </a>
          ):null}
        
        {props.islogin?null:(
            <div className="hidden md:flex items-center space-x-2">
              <button onClick={alpha} className="secondary-button text-white hover:text-black px-6 py-3 rounded-2xl active:scale-90 cursor-pointer text-xl bg-black hover:bg-gray-200">Login</button>
              <button className="primary-button px-8 py-3 rounded-2xl bg-blue-400 active:scale-90 cursor-pointer text-xl text-white">Register</button>
            </div>
        )}
        
         <Light_Dark toggle = {props.toggle} setToggle = {props.setToggle}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;