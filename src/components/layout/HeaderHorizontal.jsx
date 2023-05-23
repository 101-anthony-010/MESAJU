import React from 'react'

const HeaderHorizontal = () => {
  return (
    <section className='bg-slate-900 flex justify-end w-full h-[60px] items-center gap-6 rounded-lg my-1 pr-5'>
      <div className=''>
        <i className='cursor-pointer text-3xl bx bx-bell'></i>
      </div>
      <div className='w-[40px] h-[40px] rounded-full cursor-pointer'>
        <img src="/public/images/perfil.jpg" className='rounded-full w-full h-full object-contain' alt="" />
      </div>
    </section>
  )
}

export default HeaderHorizontal
