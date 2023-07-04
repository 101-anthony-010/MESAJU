import React from 'react'
import HeaderVertical from '../layout/HeaderVertical'
import HeaderHorizontal from '../layout/HeaderHorizontal'
import SaleMount from '../predictivePage/saleMount'
import PredictiveTable from '../data/PredictiveTable'

const Predictive = () => {
    return (
        <main className="">
        <HeaderHorizontal />
        <div className="flex">
          <HeaderVertical />

          <PredictiveTable/>
        </div>
    </main>
      )
}

export default Predictive