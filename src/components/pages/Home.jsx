import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { changeIsShowClients, changeIsShowSales } from '../../store/slices/showTable.slice.js';
import HeaderHorizontal from '../layout/HeaderHorizontal.jsx';
import HeaderVertical from '../layout/HeaderVertical.jsx';
import SalesTable from '../data/SalesTables.jsx';
import ProductTable from '../data/ProductsTable.jsx';

const Home = () => {
  const [clients, setClients] = useState([]);
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const handleClickShowClients = () => {
    dispatch(changeIsShowClients());
  };

  const handleClickChangeShowSales = () => {
    dispatch(changeIsShowSales());
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/clients')
      .then((res) => setClients(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3000/sales')
      .then((res) => setSales(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3000/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Filtra las ventas por el mes de mayo
  const filteredSales = sales.filter((sale) => {
    const saleMonth = new Date(sale.date_sale).getMonth();
    return saleMonth === 4; // 4 representa mayo (enero es 0, febrero es 1, etc.)
  });

  return (
    <>
      <div className="">
        <HeaderHorizontal />
        <div className="flex">
          <HeaderVertical />

          <section className="flex flex-wrap w-[85%] justify-center gap-5 m-2">
            <section className="">
              <SalesTable sales={filteredSales} />
            </section>
            <section className="grid gap-2">
              <article
                onClick={handleClickChangeShowSales}
                className="w-[300px] hover:bg-blue-500/40 transition-all duration-300 hover:shadow-2xl cursor-pointer font-semibold text-3xl grid grid-cols-2 justify-center items-center text-center text-[#69666A] rounded-md bg-gray-200"
              >
                <h3 className="col-span-2 font-bold text-[#69666A]">Ventas del mes</h3>
                <span className='text-xl font-bold text-[#69666A]'>
                  {new Date().toLocaleString('default', { month: 'long' }).replace(/^\w/, c => c.toUpperCase())}
                </span>
                <span className="font-bold text-2xl">{filteredSales.length}</span>
              </article>
              <article
                onClick={handleClickShowClients}
                className="w-[300px] hover:bg-blue-500/40 transition-all duration-300 hover:shadow-2xl cursor-pointer font-semibold text-3xl grid grid-cols-2 justify-center items-center text-center text-[#69666A] rounded-md bg-gray-200"
              >
                <h3 className="col-span-2 font-bold">Clientes</h3>
                <span></span>
                <span className="font-bold text-2xl">{clients.length}</span>
              </article>
            </section>
            <section className="">
              <ProductTable />
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
