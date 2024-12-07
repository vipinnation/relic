import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const netProfitLossData = [
  { month: 'January', income: 20000, expenses: 15000 },
  { month: 'February', income: 21000, expenses: 16000 },
  { month: 'March', income: 19000, expenses: 17000 },
  { month: 'April', income: 22000, expenses: 16500 },
  { month: 'May', income: 23000, expenses: 18000 },
  { month: 'June', income: 25000, expenses: 19000 }
];

const NetProfitLossChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={netProfitLossData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottomRight', offset: -5 }} />
        <YAxis label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="income" stroke="#4caf50" name="Total Income" />
        <Line type="monotone" dataKey="expenses" stroke="#f44336" name="Total Expenses" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default NetProfitLossChart;
