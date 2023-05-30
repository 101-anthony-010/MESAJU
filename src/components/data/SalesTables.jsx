import axios from 'axios';
import { Chart, elements } from 'chart.js/auto'; // es chart.js/auto
import React, { useEffect, useRef, useState } from 'react';


const SalesTable = () => {
  const chartRef = useRef(null);
  
  const [sales, setSales] = useState([])
  const [invoice, setInvoice] = useState([])
  const [countMountDate, setCountMountDate] = useState([])
  const [dateMonthSales, setDateMonthSales] = useState([]) // Fechas de los meses
  
  useEffect(() => {
    axios.get("http://localhost:3000/invoices")
    .then(res => setInvoice(res.data))
    .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/sales")
      .then(res => {
        const months = sales.map(sale => {
          const dateObj = new Date(sale.date_sale)
          return dateObj.getMonth() + 1 
        })
        setDateMonthSales([...new Set(months)]) // Meses actuales en la data [1,2,3,4,5,...]     
        setSales(res.data)
      })
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    const monthsDate = {}
    const handleElement = (elements) => {
      const month = new Date(elements.date_sale).getMonth() + 1
      if (!monthsDate[month]) {
        monthsDate[month] = 1
      } else {
        monthsDate[month]++
      }
    }
    sales.forEach(handleElement)
    setCountMountDate(Object.entries(monthsDate).map(([key,value]) => ({ "month": value }))) // formato [{month: 73}, {month: 100} ...]
  }, [sales])
  useEffect(() => {
    if (sales.length >= 1) {
      const ctx = chartRef.current.getContext("2d");

      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dateMonthSales.map(date => date),
          datasets: [
            {
              data: countMountDate.map(count => count.month),
              lineTension: 0.2
            },
          ],
        },
        options: {
          cutout: '35%',
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Ventas del año',
              font: {
                size: 35,
                weight: '600',
              },
            }
          },
          layout: {
            padding: {
              left: 20,
              right: 20,
            },
          },
          scales: {
            y: {
              display: true, // Oculta el eje y y los valores
              beginAtZero: true // Comienza el contador del eje y desde cero
            }
          }
        },
      });
    }
  }, [sales, countMountDate,dateMonthSales]);

  return (
    <div  className=''>
      <canvas className='w-full h-full' ref={chartRef}></canvas>
    </div>
  );
};

export default SalesTable;