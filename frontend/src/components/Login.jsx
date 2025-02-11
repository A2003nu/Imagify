import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Login = () => {
    const [state,setState]=useState('Login')
    const {setShowLogin}=useContext(AppContext)

    useEffect(()=>{
        document.body.style.overflow='hidden';
        return()=>{
            document.body.style.overflow='unset';
        }
    },[])
  return (
   <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
    <form className='relative bg-white p-10 rounded-xl text-slate-500'>
        <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        {state !== 'Login' &&
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.profile_icon} alt="" width={20} />
            <input type="text" className="outline-none text-sm" placeholder='Full Name' required />
        </div>
}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.email_icon} alt=""  />
            <input type="email" className="outline-none text-sm" placeholder='Email id' required />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.lock_icon} alt=""  />
            <input type="password" className="outline-none text-sm" placeholder='Password' required />
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">Forget password?</p>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
            {state === 'Login' ? 'Login' : 'Create account'}
        </button>
       {state === 'Login' ? <p className="mt-5 text-center">Dont have an account?
            <span className="text-blue-600 cursor-pointer" onClick={()=>setState('Sign Up')}>Sign Up</span></p>
            :
            <p className="mt-5 text-center">Already have an account?
            <span className="text-blue-600 cursor-pointer" onClick={()=>setState('Login')}>Login</span></p> }

            <img src={assets.cross_icon} alt="" onClick={()=>setShowLogin(false)} className="absolute top-5 right-5 cursor-pointer" />
    </form>
   </div>
  )
}

export default Login