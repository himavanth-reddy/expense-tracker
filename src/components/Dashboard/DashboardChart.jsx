import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  animation: true,
  responsive: true,
  maintainAspectRatio: false,
  Plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart of expenses and revenue",
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(0,0,0,0)",
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0,0,0,0)",
      },
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(183,220,231,1)",
    },
    {
      label: "Expenses",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(7,7,7,1)",
    },
  ],
};

const DashboardChart = () => {
  return <Bar options={options} data={data} />;
};

export default DashboardChart;
