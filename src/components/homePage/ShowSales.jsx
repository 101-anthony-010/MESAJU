import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Slices
import { changeIsShowSales } from '../../store/slices/showTable.slice'
import SalesTableMonth from '../data/SalesTableMonth'

// Components

const ShowClients = () => {
  const {isShowSales} = useSelector(store => store.showTableSlice)

  const dispatch = useDispatch()

  const handleClickChangeShowSales = () => {
      dispatch(changeIsShowSales())
  }   

return (
  <>
      <div onClick={handleClickChangeShowSales} className={`transition-all duration-500 fixed bg-black/25 w-[100%] h-[100%] ${isShowSales ? "left-0" : "-left-full"}`}></div>
      <section className={`${isShowSales ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : "-left-full"} transition-all duration-500 fixed w-[95%] bg-white h-[70%] rounded-md`}>
        <i onClick={handleClickChangeShowSales} className='cursor-pointer absolute top-0 right-0 text-black text-2xl m-2 bx bx-x hover:text-red-500'></i>
        <SalesTableMonth/>
      </section>
  </>
)
}

export default ShowClients