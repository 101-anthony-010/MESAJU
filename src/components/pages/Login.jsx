import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className='absolute w-[100%] h-[100%] z-10'>
        <img className='w-full h-full object-cover opacity-25' src="/public/images/bg-mesaju.jpg" alt="" />
      </div>
      <form className='z-40 shadow-xl border-[1px] grid gap-5 bg-slate-100 p-7 w-[300px] rounded-md'>
        <div className='text-center py-2 mx-auto w-[200px] h-[300px]'>
          <img className='mx-auto w-full h-full object-contain' src="/public/images/mesaju.png" alt="" />
        </div>
        <div className='grid gap-2'>
          <label className='text-lg font-semibold' htmlFor="">User</label>
          <input className='rounded-md px-4 py-2' type="text" />
        </div>
        <div className='grid gap-2'>
          <label className='text-lg font-semibold' htmlFor="">Password</label>
          <input className='rounded-md px-4 py-2' type="password" />
        </div>
        <Link to='/'>
          <button className='bg-blue-500 py-2 rounded-md text-white font-semibold mt-5 w-full'>Login</button>
        </Link>
      </form>
    </section>
  )
}

export default Login