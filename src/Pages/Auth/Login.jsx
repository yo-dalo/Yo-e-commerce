import React from 'react'
import AuthInput from '../../Part/Auth/AuthInput'
const Login = () => {
  return (
          <form>
            <div className="centre px-7 py-10 flex-col gap-5">
            <AuthInput  placeholder="Enter your email" />
            <AuthInput placeholder="Enter your Password " />
            
            <div className="text-xs w-full text-right">Forgot password ?</div>
            
            <div className="w-full centre text-xl text-white h-12 bg-gray-900">
              Login 
            </div>
            
            </div>
          </form>
  )
}

export default Login