import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import Footer from './components/Footer';

function App() {
  const [login, setlogin] = useState(false)
  const [ isDark, setIsDark ] = useState(true);
  return (
    <>
    <main className=' w-full h-[100vh]'>
      <Navbar islogin = {login} setlogin = {setlogin} toggle = {isDark} setToggle = {setIsDark}/>
      <Footer/>
    </main>
    </>
    
  );
}

export default App;