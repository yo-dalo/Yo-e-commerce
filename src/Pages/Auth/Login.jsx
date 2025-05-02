
import AuthInput from '../../Part/Auth/AuthInput'
import Input from '../../Part/Utility/Input/Input'
import {useAuth} from "../../Context/AuthContext"
import React, { useState,useEffect } from "react";

const Login = () => {
  const {login,user} = useAuth()
  const [data, setData] = useState({
    phoneOrEmail:"",
    password:""
  });

  
  const hendleInput = (key,value)=>{
    
    setData({...data,[key]:value})
  }
  
  
  
  return (
          <form>
            <div className="centre  py-10 flex-col gap-3">
            <Input onChange={(e)=>hendleInput("phoneOrEmail",e.target.value)} placeholder="Enter your email" />
            <Input onChange={(e)=>hendleInput("password",e.target.value)}  placeholder="Enter your Password " />
            
            <div className="text-xs w-full py-2 text-right">Forgot password ?</div>
            
            <div onClick={()=>login(data)} className="w-full centre text-xl text-white h-12 bg-gray-900">
              Login 
            </div>
            
            </div>
          </form>
  )
}

export default Login