import React from 'react'
import AuthInput from '../../Part/Auth/AuthInput'
const SignUp = () => {
  return (
    
          <form>
            <div className="centre px-7 py-10 flex-col gap-5">
              
             <AuthInput placeholder="Enter your Name " />
             <AuthInput  placeholder="Enter your Email" />
             <AuthInput  placeholder="Enter your Phone" />
            
            
            
            <div className="w-full mt-5 centre text-xl text-white h-12 bg-gray-900">
              Sign Up
            </div>
            </div>
          </form>
  )
}

export default SignUp