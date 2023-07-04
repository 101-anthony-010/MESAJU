import axios from 'axios';
import { Chart } from 'chart.js/auto';
import React, { useEffect, useRef, useState } from 'react';

const PredictiveTable = () => {
  const chartRef = useRef(null);

  const [sales, setSales] = useState([]);
  const [monthMoneyData, setMonthMoneyData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [previousMonthSales, setPreviousMonthSales] = useState(0);
  const [currentMonthSales, setCurrentMonthSales] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/prediction")
      .then(res => {
        setSales(res.data.prediction);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const monthsData = {};
    sales.forEach(element => {
      const date = new Date(element.date);
      const month = date.toLocaleString('default', { month: 'long' });
      if (!monthsData[month]) {
        monthsData[month] = [element.money];
      } else {
        monthsData[month].push(element.money);
      }
    });
    setMonthMoneyData(
      Object.entries(monthsData).map(([month, moneyArray]) => ({
        month,
        money: moneyArray.reduce((acc, curr) => acc + curr, 0) / moneyArray.length
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
          labels: monthMoneyData
            .slice(0, currentMonth + 1)
            .map(entry => entry.month),
          datasets: [
            {
              data: monthMoneyData
                .slice(0, currentMonth + 1)
                .map(entry => entry.money),
              lineTension: 0.2,
              label: 'Predicción'
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Predicción del siguiente mes',
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
              beginAtZero: true,
              ticks: {
                callback: value => `S/ ${value}` // Cambio del símbolo de dólar a soles
              }
            }
          }
        }
      });
    }
  }, [sales, monthMoneyData, currentMonth]);

  useEffect(() => {
    if (monthMoneyData.length > 0) {
      const previousMonthData = monthMoneyData[currentMonth - 1];
      setPreviousMonthSales(previousMonthData ? previousMonthData.money : 0);
      setCurrentMonthSales(monthMoneyData[currentMonth].money);
    }
  }, [currentMonth, monthMoneyData]);

  const handlePrevMonth = () => {
    setCurrentMonth(prevMonth => Math.max(prevMonth - 1, 0));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prevMonth =>
      Math.min(prevMonth + 1, monthMoneyData.length - 1)
    );
  };

  return (
    <>
      <div className='w-[600px] h-full'>
        <canvas ref={chartRef}></canvas>
        <div className='flex justify-between mt-4'>
          <button
            onClick={handlePrevMonth}
            disabled={currentMonth === 0}
            className='px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400'
          >
            Mes Anterior
          </button>
          <button
            onClick={handleNextMonth}
            disabled={currentMonth === monthMoneyData.length - 1}
            className='px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400'
          >
            Mes Siguiente
          </button>
        </div>
      </div>
      <section>
        {monthMoneyData.length > 0 && (
          <>
            <div className='bg-gray-400/30 rounded-lg p-3 m-5 grid gap-2'>
              <div className='bg-black text-white p-3 rounded-md'>
                <h3>Ventas del mes pasado</h3>
                <p className='text-blue-500 font-bold text-lg'>
                  {previousMonthSales.toLocaleString()}
                </p>
                <h5>Predicción de venta</h5>
                <p className='text-blue-500 font-bold text-lg'>
                  {currentMonthSales.toLocaleString()}
                </p>
                <h6 className='text-gray-500 text-xs'>
                  {monthMoneyData[currentMonth].month}
                </h6>
              </div>
            </div>
            <div className='bg-gray-400/30 rounded-lg p-3 m-5 grid gap-2'>
              <div className='bg-black text-white p-3 rounded-md'>
                <h3>Ventas del mes</h3>
                <p className='text-blue-500 font-bold text-lg'>
                  {currentMonthSales.toLocaleString()}
                </p>
                <h5>Predicción del mes</h5>
                <p className='text-blue-500 font-bold text-lg'>
                  {currentMonthSales.toLocaleString()}
                </p>
                <h6 className='text-gray-500 text-xs'>
                  {monthMoneyData[currentMonth].month}
                </h6>
              </div>
            </div>
            <div className='bg-gray-400/30 rounded-lg p-3 m-5'>
              <div className='bg-black text-white p-3 rounded-md'>
                <h3>Perdida/Ganancia estimada</h3>
                <p className='text-blue-500 font-bold text-lg'>
                  {(currentMonthSales - previousMonthSales).toLocaleString()}
                </p>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default PredictiveTable;
