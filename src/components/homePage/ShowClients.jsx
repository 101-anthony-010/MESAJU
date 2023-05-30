import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Slices
import { changeIsShowClients } from '../../store/slices/showTable.slice'

// Components
import ClientsTable from '../data/ClientsTable'

const ShowClients = () => {
  const {isShowClients} = useSelector(store => store.showTableSlice)

  const dispatch = useDispatch()

  const handleClickChangeShowClients = () => {
      dispatch(changeIsShowClients())
  }   

return (
  <>
      <div onClick={handleClickChangeShowClients} className={`transition-all duration-500 fixed bg-black/25 w-[100%] h-[100%] ${isShowClients ? "left-0" : "-left-[200%]"}`}></div>
      <section className={`${isShowClients ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : "-left-[200%]"} transition-all duration-500 fixed w-[95%] bg-white py-5 rounded-md`}>
        <i onClick={handleClickChangeShowClients} className='hover:text-red-500 cursor-pointer absolute -top-1 right-0 text-black text-2xl m-1 bx bx-x'></i>
        <ClientsTable/>
      </section>
  </>
)
}

export default ShowClients