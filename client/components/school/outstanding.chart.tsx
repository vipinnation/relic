import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const outstandingPaymentsData = [
  { month: 'January', unpaidFees: 5000 },
  { month: 'February', unpaidFees: 6000 },
  { month: 'March', unpaidFees: 5500 },
  { month: 'April', unpaidFees: 7000 },
  { month: 'May', unpaidFees: 7500 },
  { month: 'June', unpaidFees: 8000 }
];

const OutstandingPaymentsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={outstandingPaymentsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottomRight', offset: -5 }} />
        <YAxis label={{ value: 'Outstanding Payments ($)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="unpaidFees" fill="#ff9800" name="Unpaid Tuition Fees" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default OutstandingPaymentsChart;
