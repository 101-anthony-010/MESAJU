import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartClient from '../homePage/CartClient'

const ClientsTable = () => {
  const [clients, setClients] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const paginationLogic = () => {
    const CLIENTS_PER_PAGE = 8

    const sliceStart = (currentPage - 1) * CLIENTS_PER_PAGE
    const sliceEnd = (sliceStart + CLIENTS_PER_PAGE)
    const clientsInPage = clients.slice(sliceStart, sliceEnd)

    const lastPage = Math.ceil(clients.length / CLIENTS_PER_PAGE) || 1
    //arreglar contador apartir del 22 ya no se deben mostrar
    const PAGES_PER_BLOCK = 5
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)

    const pagesInBLock = []
    const minPage = (actualBlock - 1) * PAGES_PER_BLOCK + 1
    const maxPage = actualBlock * PAGES_PER_BLOCK
    for (let i = minPage; i <= maxPage; i++) {
      pagesInBLock.push(i)
    }
    return {clientsInPage, lastPage, pagesInBLock}
  }

  const {clientsInPage, lastPage, pagesInBLock} = paginationLogic()

  const handleClickPreviusPage = () => {
    const newCurrentPage = currentPage - 1
    if (newCurrentPage >= 1) {
      setCurrentPage(newCurrentPage)
    }
  }

  const handleClickNextPage = () => {
    const newCurrentPage = currentPage + 1
    if (newCurrentPage <= lastPage) {
      setCurrentPage(newCurrentPage)
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3000/clients')
      .then((res) => setClients(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
   <>
     <section className='text-black max-w-xl grid gap-2 justify-center items-center m-2 mx-auto'>
      {
        clientsInPage.map((client) => <CartClient key={client.id_client} client={client}/>)
      }
    </section>
    <section className='flex justify-center items-center text-center'>
      <ul className='text-black flex gap-2'>
        <li className='rounded-md px-3 py-1 bg-blue-600 text-white cursor-pointer' onClick={() => setCurrentPage(1)}>{"<<"}</li>
        <li className='rounded-md px-3 py-1 bg-blue-600 text-white cursor-pointer' onClick={handleClickPreviusPage}>{"<"}</li>
        {
          pagesInBLock.map((page) => (<li className={`${page === currentPage ? 'bg-blue-400': 'bg-blue-600'} rounded-md px-3 py-1 text-white cursor-pointer`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>))
        }
        <li className='rounded-md px-3 py-1 bg-blue-600 text-white cursor-pointer' onClick={handleClickNextPage}>{">"}</li>
        <li className='rounded-md px-3 py-1 bg-blue-600 text-white cursor-pointer' onClick={() => setCurrentPage(lastPage)}>{">>"}</li>
      </ul>
    </section>
   </>
  )
}

export default ClientsTable