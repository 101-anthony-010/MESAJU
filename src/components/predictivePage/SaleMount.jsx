import React from 'react'

const SaleMount = () => {
  return (
    <section>
        <div className='bg-gray-400/30 rounded-lg p-3 m-5 grid gap-2'>
            <div className='bg-black text-white p-3 rounded-md'>
                <h3>Ventas del mes pasado</h3>
                <p className='text-blue-500 font-bold text-lg'>938,123</p>
                <h5>Prediccion de venta</h5>
                <p className='text-blue-500 font-bold text-lg'>1,036,021</p>
                <h6 className='text-gray-500 text-xs'>Julio</h6>
            </div>
            <div className='bg-black text-white p-3 rounded-md'>
                <h3>Ventas del mes pasado</h3>
                <p className='text-blue-500 font-bold text-lg'>938,123</p>
                <h5>Prediccion de venta</h5>
                <p className='text-blue-500 font-bold text-lg'>1,036,021</p>
                <h6 className='text-gray-500 text-xs'>Agosto</h6>
            </div>
        </div>
        <div className='bg-gray-400/30 rounded-lg p-3 m-5'>
            <div className='bg-black text-white p-3 rounded-md'>
                <h3>Perdida/Ganancia estimada</h3>
                <p className='text-blue-500 font-bold text-lg'>20,000</p>
            </div>
        </div>
    </section>
  )
}

export default SaleMount