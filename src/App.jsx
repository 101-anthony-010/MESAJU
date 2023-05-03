import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import Papa from 'papaparse';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/public/prueba.csv');
      const reader = response.body.getReader();
      const result = await reader.read();
      const csv = new TextDecoder().decode(result.value);
      const parsed = Papa.parse(csv, { header: true });
      setData(parsed.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const labels = data.map(({ Alumno }) => Alumno);
      const values = data.map(({ Nota }) => parseFloat(Nota));
      const ctx = document.getElementById('chart').getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Notas',
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [data]);

  return (
    <div>
      <h1>Dashboard</h1>
      <canvas id="chart" width="400" height="200"></canvas>
    </div>
  );
}

export default Dashboard;
