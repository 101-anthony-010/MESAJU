import React from 'react'
import { useSelector } from 'react-redux'

const HeaderHorizontal = () => {
  const {user} = useSelector(store => store.loginUserSlice)

  return (
    <section className='bg-[#D6BB75] shadow-md text-black flex justify-between w-full h-[60px] items-center gap-6 pr-5'>
      <h1 className='ml-10 font-bold text-xl'>Mesaju Dashboard</h1>
      <section className='flex justify-end gap-5 text-center items-center'>
        <div className='w-[40px] h-[40px] rounded-full cursor-pointer'>
          <img src="/public/images/perfil.jpg" className='rounded-full w-full h-full object-contain' alt="" />
        </div>
        <h2 className='font-semibold text-xl'>{user}</h2>
        <div className=''>
          <i className='cursor-pointer text-3xl bx bx-bell'></i>
        </div>
      </section>
    </section>
  )
}

export default HeaderHorizontal
