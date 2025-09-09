import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ user, onLogout, toggle, setToggle }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      <Navbar
        user={user}
        onLogout={onLogout}
        toggle={toggle}
        setToggle={setToggle}
      />
      <main className="flex-grow">
        {/* The Outlet renders the current route's component (e.g., LandingPage, Dashboard) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;