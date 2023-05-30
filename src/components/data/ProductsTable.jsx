import axios from 'axios';
import { Chart } from 'chart.js/auto'; // es chart.js/auto
import React, { useEffect, useRef, useState } from 'react';

const ProductTable = () => {
  const chartRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (products.length >= 1) {
      const ctx = chartRef.current.getContext("2d");

      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: products.map(product => product.name_product),
          datasets: [
            {
              data: products.map(product => product.stock),
              backgroundColor: [
                '#F4E8E9',
                '#DAE9D9',
                '#FEF4E2',
                '#DCE3F2',
                '#E8E2ED',
                '#F6F6F6',
                '#FFEDE7',
              ],
              borderColor: '#888888',
              borderWidth: 1.5,
            },
          ],
        },
        options: {
          cutout: '35%',
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Productos',
              font: {
                size: 35,
                weight: '600',
                color: 'blue'
              },
            },
            legend: {
              position: 'right',
              labels: {
                font: { size: 12 },
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
  }, [products]);

  return (
    <div className={`w-[400px]`}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ProductTable;