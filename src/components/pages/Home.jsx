import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useDispatch } from 'react-redux'

// Slices 
import { changeIsShowProducts, changeIsShowClients, changeIsShowSales } from '../../store/slices/showTable.slice.js'

// Components
import HeaderHorizontal from '../layout/HeaderHorizontal.jsx'
import HeaderVertical from '../layout/HeaderVertical.jsx'
import SalesTables from '../data/SalesTables.jsx' 
import SalesTable from '../data/SalesTables.jsx'
import ProductTable from '../data/ProductsTable.jsx'

const Home = () => {
const [clients, setClients] = useState([])
const [sales, setSales] = useState([])
const [products, setProducts] = useState([])

const dispatch = useDispatch()

const handleClickShowProducts = () => {
  dispatch(changeIsShowProducts())
}
const handleClickShowClients = () => {
  dispatch(changeIsShowClients())
}
const handleClickChangeShowSales = () => {
  dispatch(changeIsShowSales())
}

useEffect(() => {
  axios.get("http://localhost:3000/clients")
    .then((res) => setClients(res.data))
    .catch((err) => console.error(err))
}, [])
useEffect(() => {
  axios.get("http://localhost:3000/sales")
    .then((res) => setSales(res.data))
    .catch((err) => console.error(err))
}, [])
useEffect(() => {
  axios.get("http://localhost:3000/products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err))
}, [])


return (
  <>
      <div className=''>
          <HeaderHorizontal/>
        <div className='flex'>
          <HeaderVertical/>
        
          <section className='grid grid-cols-2 w-[85%] justify-center gap-5 m-2'>
            <section className=''>
              <SalesTable/>
            </section>
            <section className='grid gap-2'>
              <article onClick={handleClickChangeShowSales} className='hover:bg-blue-500/40 transition-all duration-300 hover:shadow-2xl cursor-pointer font-semibold text-3xl grid grid-cols-2 justify-center items-center text-center text-black rounded-md bg-gray-200'>
                <h3 className='col-span-2'>Ventas del mes</h3>
                <span></span>
                <span className='font-bold text-2xl'>{sales.length}</span>
              </article>
              <article onClick={handleClickShowClients} className='hover:bg-blue-500/40 transition-all duration-300 hover:shadow-2xl cursor-pointer font-semibold text-3xl grid grid-cols-2 justify-center items-center text-center text-black rounded-md bg-gray-200'>
                <h3 className='col-span-2'>Clientes</h3>
                <span></span>
                <span className='font-bold text-2xl'>{clients.length}</span>
              </article>
            </section>
            <section className='col-span-2 mx-auto'>
              <ProductTable/>
            </section>
          </section>

          
        </div>
      </div>
      {/* <SalesTables/>
    <section className='justify-center mt-6 bg-white flex flex-wrap gap-6 mx-1'>
      <article onClick={handleClickShowProducts} className='hover:bg-blue-500/40 transition-all duration-300 hover:shadow-2xl cursor-pointer font-semibold text-3xl grid grid-cols-2 justify-center items-center text-center text-black w-[280px] h-[140px] rounded-md bg-gray-200'>
        <h3 className='col-span-2'>Productos</h3>
        <span></span>
        <span className='font-bold text-2xl'>{products.length}</span>
      </article>
      <article onClick={handleClickShowClients} className='hover:bg-blue-500/40 transition-all duration-300 hover:shadow-2xl cursor-pointer font-semibold text-3xl grid grid-cols-2 justify-center items-center text-center text-black w-[280px] h-[140px] rounded-md bg-gray-200'>
        <h3 className='col-span-2'>Clientes</h3>
        <span></span>
        <span className='font-bold text-2xl'>{clients.length}</span>
      </article>
      <article onClick={handleClickChangeShowSales} className='hover:bg-blue-500/40 transition-all duration-300 hover:shadow-2xl cursor-pointer font-semibold text-3xl grid grid-cols-2 justify-center items-center text-center text-black w-[280px] h-[140px] rounded-md bg-gray-200'>
        <h3 className='col-span-2'>Ventas</h3>
        <span></span>
        <span className='font-bold text-2xl'>{sales.length}</span>
      </article>
    </section> */}
  </>
  )
}

export default Home