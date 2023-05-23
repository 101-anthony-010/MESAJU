import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='bg-slate-950 h-screen w-full flex justify-center items-center'>
      <form className='shadow-md grid gap-5 bg-slate-900 p-7 w-[300px] rounded-md'>
        <div className='text-center py-2'>
          <span className="material-symbols-outlined text-9xl">home</span>
        </div>
        <div className='grid gap-2'>
          <label className='text-lg font-semibold' htmlFor="">User</label>
          <input className='bg-slate-800 rounded-md px-4 py-2' type="text" />
        </div>
        <div className='grid gap-2'>
          <label className='text-lg font-semibold' htmlFor="">Password</label>
          <input className='bg-slate-800 rounded-md px-4 py-2' type="password" />
        </div>
        <Link to='/'>
          <button className='bg-blue-500 py-2 rounded-md text-white font-semibold mt-5 w-full'>Login</button>
        </Link>
      </form>
    </section>
  )
}

export default Login