import React from 'react'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// slice
import { changeIsShowClients } from '../../store/slices/showTable.slice'

const CartClient = ({client}) => {
    const dispatch = useDispatch()

    const handleClickChangeShowClients = () => {
        dispatch(changeIsShowClients())
    }

    return (
    <Link onClick={handleClickChangeShowClients} to={`/client/${client.id_client}`} className='cursor-pointer px-2 py-1 grid grid-cols-[auto_1fr_auto_1fr] gap-2 items-center bg-gray-100 hover:bg-blue-500/20 hover:py-2 transition-all duration-500 rounded-lg'>
        <div className='w-[40px] h-[40px]'>
          <img className='object-contain w-full h-full rounded-full' src="/public/images/perfil.jpg" alt="" />
        </div>
        <h4>{client.name_client}</h4>
        <span>{client.phone}</span>
        <span>{client.email}</span>
      </Link>
  )
}

export default CartClient