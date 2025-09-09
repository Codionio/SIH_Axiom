import  { useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Firebase"
import { Link } from "react-router-dom";


const Newuser = () => {

      const [email,setEmail] = useState('')
      const [password,setPassword] =useState('')

      const googleProvider = new GoogleAuthProvider()

      const HandleSignUp = async(e)=>{
              try{
                  await createUserWithEmailAndPassword(auth,email,password)
                  console.log("SignUp Done")
              }catch(error){
                  console.log(error)
              }
      }

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
              💙
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Join Saarthi
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Create your account to access mental health support
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={HandleSignUp}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Display Name
            </label>
            <input
              type="text"
              placeholder="How should we address you?"
              className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input onChange={(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="your.email@university.edu"
              className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input onChange={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="Create a secure password"
              className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4 text-blue-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I agree to the{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400 underline">
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Create Account Button */}
          <button onClick={()=>HandleSignUp()}
            type="submit"
            className="w-full bg-gray-600 dark:bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="px-2 text-sm text-gray-500 dark:text-gray-400">OR CONTINUE WITH</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>

        {/* Continue Anonymously
        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition">
          <span className="text-xl">👤</span> Continue Anonymously
        </button> */}

        {/* Footer */}
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
            Sign in
          </Link>
        </p>

        {/* Privacy Note */}
        {/* <p className="mt-6 text-xs text-center text-gray-500">
          <strong>Your Privacy Matters:</strong> All data is encrypted and HIPAA
          compliant. Choose anonymous access for complete privacy protection.
        </p> */}
      </div>
    </div>

    </div>
  )
}

export default Newuser
