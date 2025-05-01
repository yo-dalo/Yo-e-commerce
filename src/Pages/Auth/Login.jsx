import React from 'react'
import AuthInput from '../../Part/Auth/AuthInput'
import Input from '../../Part/Utility/Input/Input'
const Login = () => {
  return (
          <form>
            <div className="centre  py-10 flex-col gap-3">
            <Input  placeholder="Enter your email" />
            <Input placeholder="Enter your Password " />
            
            <div className="text-xs w-full py-2 text-right">Forgot password ?</div>
            
            <div className="w-full centre text-xl text-white h-12 bg-gray-900">
              Login 
            </div>
            
            </div>
          </form>
  )
}

export default Login