import React from 'react'
import { Link } from 'react-router-dom'

const HeaderVertical = () => {
  return (
    <section className='grid items-center justify-center text-3xl h-screen w-[65px] bg-slate-900 mx-1 rounded-lg'>
      <div className='border-b border-black pb-8 px-2'>
        <i className='cursor-pointer bx bxs-castle'></i>
      </div>
      <div className='mx-auto'>
        <Link to='/'><span className="material-symbols-outlined text-4xl cursor-pointer">home</span></Link>
      </div>
      <div className='mx-auto'>
        <i className='cursor-pointer bx bx-loader-circle'></i>
      </div>
      <div className='mx-auto'>
        <i className='cursor-pointer bx bx-loader-circle'></i>
      </div>
      <div className='mx-auto'>
        <Link to='/sales'><i className='cursor-pointer bx bx-credit-card'></i></Link>
      </div>
      <div className='mx-auto'>
        <Link to='/login'><i className='bx bx-log-out-circle cursor-pointer' ></i></Link>
      </div>
    </section>
  )
}

export default HeaderVertical
