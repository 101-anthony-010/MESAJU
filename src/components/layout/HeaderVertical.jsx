import React from 'react'
import { Link } from 'react-router-dom'

const HeaderVertical = () => {
  return (
    <section className='grid items-center justify-center text-3xl h-screen w-[100px] bg-black text-white'>
      <div className='border-b border-black pb-8 px-2'>
        <img src="/public/images/mesaju.png" alt="" />
      </div>
      <div className='mx-auto'>
        <Link to='/'><span className="material-symbols-outlined text-4xl cursor-pointer">home</span></Link>
      </div>
      <div className='mx-auto'>
        <Link to='/predictive'><i className='bx bx-timer cursor-pointer'></i></Link>
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
