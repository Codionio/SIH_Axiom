import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ThemeProvider>
      
      <div className="min-h-screen bg-gray-100">
        <Navbar isLoggedIn={isLoggedIn} />

        <main className="container mx-auto p-8">
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="mt-8 px-5 py-2.5 text-sm font-medium text-white bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors"
            >
              {isLoggedIn ? 'Log Out (Demo)' : 'Log In (Demo)'}
            </button>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;