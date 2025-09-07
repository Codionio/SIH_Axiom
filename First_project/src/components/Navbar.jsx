import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BsSun, BsMoonFill } from 'react-icons/bs';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = ({ isLoggedIn }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50  backdrop-blur-lg border-b border-slate-200  transition-colors duration-300">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        <a href="/" className="text-2xl font-extrabold text-black ">
          saarthi
        </a>

        
        {isLoggedIn && (
          <div className="hidden md:flex items-center space-x-2 text-black ">
            <a href="#dashboard" className="nav-link text-black hover:text-white">Dashboard</a>
            <a href="#assessment" className="nav-link text-black hover:text-white">Assessment</a>
            <a href="#chat" className="nav-link text-black hover:text-white">Chat</a>
            <a href="#appointment" className="nav-link text-black hover:text-white">Appointment</a>
          </div>
        )}

        
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <a href="#profile" className="icon-button text-black">
              <FaUserCircle size={22} />
            </a>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <button className="secondary-button text-black">Login</button>
              <button className="primary-button">Register</button>
            </div>
          )}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-200 "
            aria-label="Toggle theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;