import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import Layout and Page Components
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
// import RegisterPage from './pages/RegisterPage'; // If you have one
// import ProfilePage from './pages/ProfilePage';   // If you have one

function App() {
  // User state: null (logged out) or an object (logged in)
  const [user, setUser] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // Function to be called from the LoginPage on successful login
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // Function to be called from the Navbar to log out
  const handleLogout = () => {
    setUser(null);
  };

  return (
      <BrowserRouter>
        <Routes>
          {/* All pages will share the same Layout (Navbar and Footer) */}
          <Route
            path="/"
            element={
              <Layout
                user={user}
                onLogout={handleLogout}
                toggle={isDark}
                setToggle={setIsDark}
              />
            }
          >
            {/* Public Routes: Accessible to everyone */}
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage onLogin={handleLogin} />} />
            {/* <Route path="register" element={<RegisterPage />} /> */}

            {/* Protected Routes: Accessible only when logged in */}
            <Route
              path="dashboard"
              element={user ? <Dashboard user={user} /> : <Navigate to="/login" />}
            />
            {/* <Route
              path="profile"
              element={user ? <ProfilePage user={user} /> : <Navigate to="/login" />}
            /> */}

          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;


{/* <Light_Dark toggle={toggle} setToggle={setToggle} /> */}
// import Light_Dark from './ui/Light_Dark';
