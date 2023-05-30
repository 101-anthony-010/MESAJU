import React from 'react'
import ProductsTable from '../data/ProductsTable'
import { useDispatch, useSelector } from 'react-redux'

import { changeIsShowProducts } from '../../store/slices/showTable.slice'


const ShowProduct = () => {
    const {isShowProducts} = useSelector(store => store.showTableSlice)

    const dispatch = useDispatch()

    const handleClickChangeShowProducts = () => {
        dispatch(changeIsShowProducts())
    }   

  return (
    <>
        <div onClick={handleClickChangeShowProducts} className={`transition-all duration-500 fixed bg-black/25 w-[100%] h-[100%] ${isShowProducts ? "left-0" : "-left-full"}`}></div>
        <section className={`${isShowProducts ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : "-left-[200%]"} transition-all duration-500 fixed w-[95%] bg-white h-[80%]  rounded-md`}>
          <i onClick={handleClickChangeShowProducts} className='cursor-pointer absolute top-0 right-0 text-black text-2xl m-2 bx bx-x'></i>
          <ProductsTable/>
        </section>
    </>
  )
}

export default ShowProduct