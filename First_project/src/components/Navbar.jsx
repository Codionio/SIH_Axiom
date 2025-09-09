import React, { useState } from 'react';
import Light_Dark from './ui/Light_Dark.jsx'
// Import all necessary icons
import { FaUserCircle } from 'react-icons/fa';
import { BsBarChartLineFill, BsPerson, BsChatDots, BsCalendarEvent, BsBook } from 'react-icons/bs';

// --- Placeholder for your Light/Dark mode toggle component ---
// const Light_Dark = ({ toggle, setToggle }) => {
//   return (
//     <button
//       onClick={() => setToggle(!toggle)}
//       className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-800 transition-colors dark:bg-slate-800 dark:text-slate-200"
//     >
//       {toggle ? '🌙' : '☀️'}
//     </button>
//   );
// };

// --- Integrated Navigation Component (for logged-in users) ---
const navItems = [
  { name: 'Dashboard', icon: <BsBarChartLineFill /> },
  { name: 'Assessment', icon: <BsPerson /> },
  { name: 'Chat', icon: <BsChatDots /> },
  { name: 'Appointments', icon: <BsCalendarEvent /> },
  { name: 'Resources', icon: <BsBook /> },
];

const DashboardNav = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    // The outer container is now just a flexbox, with no background or border.
    <div className="flex items-center gap-2">
      {navItems.map((item) => (
        <a
          href={`#${item.name.toLowerCase()}`}
          key={item.name}
          onClick={() => setActiveItem(item.name)}
          className={`
            flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium
            transition-colors duration-200 ease-in-out
            ${
              activeItem === item.name
                ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300' // Active state styles
                : 'text-slate-600 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:bg-slate-800' // Inactive state styles
            }
          `}
        >
          <span className="text-base">{item.icon}</span>
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  );
};

// --- Your Main Navbar Component (Updated) ---
const Navbar = (props) => {
  
  const toggleLogin = () => {
    props.setlogin(!props.islogin);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/80">
      <div className="container mx-auto flex items-center justify-between px-6 py-2.5">
        {/* Left Side: Logo and Brand */}
        <div className='flex items-center gap-2'>
          <img src="/logo.png" alt="Saarthi Logo" className='h-9' />
          <a href="/" className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            saarthi
          </a>
        </div>

        {/* Middle: Navigation Links (only when logged in) */}
        { props.islogin && (
          <div className="hidden md:flex">
            <DashboardNav />
          </div>
        )}

        {/* Right Side: Actions and Toggles */}
        <div className="flex items-center space-x-4">
          {props.islogin ? (
            // Show profile icon if logged in
            <a href="#profile" className="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
              <FaUserCircle size={24} />
            </a>
          ) : (
            // Show Login/Register buttons if not logged in
            <div className="hidden items-center space-x-2 md:flex">
              <button
                onClick={toggleLogin}
                className="rounded-lg px-5 py-2 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-200/60 active:scale-95 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Login
              </button>
              <button className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500 active:scale-95 dark:bg-indigo-500 dark:hover:bg-indigo-400">
                Register
              </button>
            </div>
          )}
          
          {/* Light/Dark Mode Toggle */}
          <Light_Dark toggle={props.toggle} setToggle={props.setToggle}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;