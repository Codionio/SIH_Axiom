import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import Layout and Page Components
import Layout from './components/Layout';
import LandingPage from './pages/Landingpage';
import Login from './pages/Login';
import Newuser from './pages/Newuser';
import Dashboard from './pages/Dashboard';
// import RegisterPage from './pages/RegisterPage'; // If you have one
// import ProfilePage from './pages/ProfilePage';   // If you have one

function App() {
  // User state: null (logged out) or true (logged in)
  const [user, setUser] = useState(true);

  // Function to be called from the LoginPage on successful login
  const handleLogin = () => {
    setUser(true);
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
              />
            }
          >
            {/* Public Routes: Accessible to everyone */}
            <Route index element={<LandingPage />} />
            <Route path="login" element={<Login onLogin={handleLogin} />} />
            <Route path="newuser" element={<Newuser />} />
            {/* <Route path="register" element={<RegisterPage />} /> */}

            {/* Protected Routes: Accessible only when logged in */}
            <Route
              path="dashboard"
              element={user ? <Dashboard user={user} /> : <Navigate to="/login" />}
              // path="/register" element={<Newuser />}
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
