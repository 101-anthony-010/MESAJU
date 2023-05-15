import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import Papa from 'papaparse';

const ProductGrafic = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/public/csv/ProductsMesaju.csv');
      const text = await response.text();
      const result = Papa.parse(text, { header: true }).data;
      result.pop();
      setData(result);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 1) {
      console.log(data);
      const ctx = chartRef.current.getContext('2d');

      // Destruir el gráfico existente si ya existe
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: data.map((product) => product.PRODUCTOS),
          datasets: [
            {
              data: data.map((product) => product.SALIDA),
              backgroundColor: ['red', 'blue', 'green', 'yellow', 'pink', 'gray', 'white'],
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          cutout: '40%',
          plugins: {
            legend: {
              position: 'right',
              labels: {
                font: { size: 10 },
              },
            },
          },
          layout: {
            padding: {
              left: 20,
              right: 20,
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <section className='w-[600px] h-[400px] absolute left-4 -top-24 rounded-md'>
        <h2 className='absolute top-24 left-1/2 -translate-x-1/2 text-3xl font-bold'>Produtcs</h2>
      <canvas ref={chartRef} className='bg-sky400'></canvas>
    </section>
  );
};

export default ProductGrafic;
