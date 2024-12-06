import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'January',
    salaries: 12000,
    utilities: 2000,
    maintenance: 1500,
    supplies: 1000
  },
  {
    month: 'February',
    salaries: 12000,
    utilities: 1800,
    maintenance: 1600,
    supplies: 1100
  },
  {
    month: 'March',
    salaries: 12500,
    utilities: 2100,
    maintenance: 1400,
    supplies: 1200
  },
  {
    month: 'April',
    salaries: 13000,
    utilities: 1900,
    maintenance: 1700,
    supplies: 1050
  },
  {
    month: 'May',
    salaries: 12500,
    utilities: 2000,
    maintenance: 1500,
    supplies: 1150
  },
  {
    month: 'June',
    salaries: 12800,
    utilities: 1950,
    maintenance: 1650,
    supplies: 1300
  }
];

const ExpenseBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottomRight', offset: -5 }} />
        <YAxis label={{ value: 'Expenses ($)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="salaries" stackId="a" fill="#8884d8" name="Staff Salaries" />
        <Bar dataKey="utilities" stackId="a" fill="#82ca9d" name="Utilities" />
        <Bar dataKey="maintenance" stackId="a" fill="#ffc658" name="Maintenance" />
        <Bar dataKey="supplies" stackId="a" fill="#d0ed57" name="Supplies" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpenseBarChart;
