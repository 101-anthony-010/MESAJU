import React from 'react'

import HeaderHorizontal from '../layout/HeaderHorizontal'
import HeaderVertical from '../layout/HeaderVertical'
import ProductGrafic from '../data/ProductGrafic'

const Home = () => {
  return (
    <main className='grid grid-cols-[auto_1fr] gap-0 w-[100%]'>
      <HeaderVertical/>
      <div>
        <HeaderHorizontal/>
        <div className='flex flex-wrap gap-5 justify-center mt-5 relative'>
          {/* <ProductGrafic/> */}
          <section className='grid grid-cols-3 gap-10 w-full px-10'>
            <div className='grid bg-slate-900 px-5 py-4 rounded-md'>
              <h2 className='text-3xl font-semibold'>Enviados</h2>
              <span className='text-2xl text-right'>50</span>
            </div>
            <div className='grid bg-slate-900 px-5 py-4 rounded-md'>
              <h2 className='text-3xl font-semibold'>Pendientes</h2>
              <span className='text-2xl text-right'>10</span>
            </div>
            <div className='grid bg-slate-900 px-5 py-4 rounded-md'>
              <h2 className='text-3xl font-semibold'>Nuevas ordenes</h2>
              <span className='text-2xl text-right'>40</span>
            </div>
          </section>
          <section className='grid gap-8 grid-cols-2 items-center justify-center'>
            <div className='w-[420px] rounded-md h-[450px] bg-slate-900'>grafit</div>
            <div className='w-[420px] rounded-md h-[450px] bg-slate-900'>grafit</div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Home