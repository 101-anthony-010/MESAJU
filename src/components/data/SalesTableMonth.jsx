import axios from 'axios';
import { Chart } from 'chart.js/auto';
import React, { useEffect, useRef, useState } from 'react';

const SalesTable = () => {
  const chartRef = useRef(null);

  const [sales, setSales] = useState([]);
  const [countMountDate, setCountMountDate] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/sales")
      .then(res => {
        setSales(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const daysDate = {};
    const handleElement = elements => {
      const date = new Date(elements.date_sale);
      const day = date.toLocaleString('default', { day: 'numeric' });
      if (!daysDate[day]) {
        daysDate[day] = 1;
      } else {
        daysDate[day]++;
      }
    };
    sales.forEach(handleElement);
    setCountMountDate(
      Object.entries(daysDate).map(([day, count]) => ({
        day,
        count
      }))
    );
  }, [sales]);

  useEffect(() => {
    if (sales.length >= 1) {
      const ctx = chartRef.current.getContext("2d");

      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: countMountDate.map(entry => entry.day),
          datasets: [
            {
              data: countMountDate.map(entry => entry.count),
              lineTension: 0.4,
              label: 'Cantidad de ventas'
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Ventas por día',
              font: {
                size: 35,
                weight: '600'
              }
            }
          },
          layout: {
            padding: {
              left: 20,
              right: 20
            }
          },
          scales: {
            y: {
              display: true,
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [sales, countMountDate]);

  return (
    <div className='p-10 w-full h-full'>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default SalesTable;
