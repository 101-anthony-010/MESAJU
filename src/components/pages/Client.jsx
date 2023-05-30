import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Slices
import CartSale from '../clientPage/cartSale'

// Components
import HeaderHorizontal from '../layout/HeaderHorizontal'

const Client = () => {
    const {id} = useParams()
    const [saleClients, setSaleClients] = useState([])
    const [infoClient, setInfoClient] = useState([])
    const [invoicesClient, setInvoicesClient] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/sales")
          .then((res) => setSaleClients(res.data))
          .catch((err) => console.log(err))
    }, [])
    useEffect(() => {
        axios.get("http://localhost:3000/invoices")
          .then((res) => setInvoicesClient(res.data))
          .catch((err) => console.log(err))
    }, [])
    useEffect(() => {
        axios.get("http://localhost:3000/clients")
          .then((res) => setInfoClient(res.data))
          .catch((err) => console.log(err))
      }, [])

    const filterClient = saleClients.filter((client) => client.id_client === parseInt(id))
    const idFilterClient = filterClient.map(client => client.id_sale)
    const filterInvoicesClient = invoicesClient.filter(invoice => idFilterClient.includes(invoice.id_sale))
  return (
      <>
          <HeaderHorizontal/>
            <h2 className='text-black text-3xl m-4 font-bold'>Compras de {infoClient[id-1]?.name_client}</h2>
            <Link className='absolute top-14 right-0' to={"/"}><i className='hover:text-red-500 text-3xl m-3 bx bx-left-arrow-circle'></i></Link>
            <section className='px-2 grid gap-5 p-4 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] max-w-[1000px] mx-auto'>
            {
                filterInvoicesClient?.map(invoice => <CartSale key={invoice.id_invoice} invoice={invoice}/>)
            }
            </section>
      </>
  )
}

export default Client