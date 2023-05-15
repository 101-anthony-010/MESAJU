import React from 'react'

import HeaderHorizontal from '../layout/HeaderHorizontal'
import HeaderVertical from '../layout/HeaderVertical'
import ProductGrafic from '../data/ProductGrafic'

const Home = () => {
  return (
    <main className='grid grid-cols-[auto_1fr] gap-0'>
      <HeaderVertical/>
      <div>
        <HeaderHorizontal/>
        <div className='flex flex-wrap gap-5 justify-center mt-5 relative'>
          <ProductGrafic/>
        </div>
      </div>
    </main>
  )
}

export default Home