import React from 'react'

const CartSale = ({invoice}) => {
    return (
    <article className='grid justify-center items-center bg-slate-200 shadow-xl w-[280px] h-[350px] rounded-md mb-2 mx-auto'>
        <section className='grid justify-center text-center'>
            <div className='w-[70px] h-[70px] mx-auto'>
                <img className='w-full h-full object-contain' src="/public/images/paper.png" alt="" />
            </div>
            <h5 className='text-3xl'>Total: <span className='font-semibold'>{invoice.total}</span></h5>
            <h2 className='text-sm'>Factura Pagada</h2>
        </section>
        <section className='grid grid-cols-2 mx-3 gap-2'>
            <h5>N° RUC: </h5><span>{invoice.number_ruc}</span>
            <h5>Fecha: </h5><span>{invoice.date}</span>
            <h5>Tipo de pago: </h5><span>{invoice.payment_type}</span>
        </section>
    </article>
  )
}

export default CartSale