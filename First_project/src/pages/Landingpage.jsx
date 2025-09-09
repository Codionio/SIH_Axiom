import React from 'react';
import { FaUserCheck, FaBrain, FaRegComments, FaRegCalendarCheck } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// In a real app, these props would likely come from a higher-level state management
const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    
    <div className={isDarkMode ? 'dark' : ''}>

        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 md:py-32">
            <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
              <div className="z-10 text-center md:text-left">
                <h1 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
                  A Clearer Path to Student Mental Wellness
                </h1>
                <p className="mb-8 text-lg text-slate-600 dark:text-slate-300 md:text-xl">
                  Saarthi provides confidential, on-demand mental health resources to help you navigate college life with confidence.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
                  <a href="#register" className="w-full rounded-full bg-indigo-600 px-8 py-3.5 text-center font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:bg-indigo-500 sm:w-auto">
                    Access Your Dashboard
                  </a>
                  <a href="#features" className="w-full rounded-full bg-slate-100 px-8 py-3.5 text-center font-semibold text-slate-700 transition-transform hover:scale-105 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:w-auto">
                    Explore Features
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-indigo-200/50 blur-3xl dark:bg-indigo-900/40"></div>
                <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-900/40"></div>
                <img
                  src="/hero-mockup.png" // Your app mockup image
                  alt="Saarthi App Dashboard"
                  className="relative z-10 mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </section>

          {/* Trust Badges / Social Proof */}
          <section className="py-12 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-6 text-center">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Trusted by Leading Universities
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
                <img src="/university-logo-1.png" alt="University Logo" className="h-8 opacity-60 dark:opacity-40" />
                <img src="/university-logo-2.png" alt="University Logo" className="h-8 opacity-60 dark:opacity-40" />
                <img src="/university-logo-3.png" alt="University Logo" className="h-8 opacity-60 dark:opacity-40" />
                <img src="/university-logo-4.png" alt="University Logo" className="h-8 opacity-60 dark:opacity-40" />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 md:py-28">
            <div className="container mx-auto px-6">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">Your Personal Wellness Toolkit</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                  Everything you need to support your mental health, right at your fingertips.
                </p>
              </div>

              <div className="grid grid-cols-1 items-center gap-16">
                {/* Feature 1: Assessment */}
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                  <div>
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                      <FaBrain className="text-2xl" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold">Confidential Assessments</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Start with a private, AI-driven assessment to understand your unique needs and get personalized recommendations for care and resources.
                    </p>
                  </div>
                  <img src="/feature-assessment.png" alt="Assessment UI" className="rounded-xl shadow-xl" />
                </div>
                
                {/* Feature 2: Chat & Appointments */}
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                  <div className="md:order-2">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                      <FaRegComments className="text-2xl" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold">On-Demand Support</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Instantly connect with trained support staff via live chat or easily schedule a confidential appointment with a licensed therapist.
                    </p>
                  </div>
                  <img src="/feature-chat.png" alt="Chat UI" className="rounded-xl shadow-xl md:order-1" />
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
                Take the First Step Today
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                Your well-being is a priority. Create your free, confidential account and access the support you deserve.
              </p>
              <a href="#register" className="mt-8 inline-block rounded-full bg-indigo-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:bg-indigo-500">
                Create My Account
              </a>
            </div>
          </section>
        </main>

    </div>
  );
};

export default LandingPage;