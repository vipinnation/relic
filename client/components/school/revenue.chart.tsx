import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    tuitionFees: 15000,
    donations: 5000
  },
  {
    name: 'February',
    tuitionFees: 16000,
    donations: 7000
  },
  {
    name: 'March',
    tuitionFees: 15500,
    donations: 6500
  },
  {
    name: 'April',
    tuitionFees: 17000,
    donations: 8000
  },
  {
    name: 'May',
    tuitionFees: 16500,
    donations: 7500
  },
  {
    name: 'June',
    tuitionFees: 17500,
    donations: 6000
  }
];

const RevenueLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" label={{ value: 'Months', position: 'insideBottomRight', offset: -5 }} />
        <YAxis label={{ value: 'Revenue ($)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="tuitionFees" stroke="#8884d8" activeDot={{ r: 8 }} name="Tuition Fees" />
        <Line type="monotone" dataKey="donations" stroke="#82ca9d" name="Donations" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueLineChart;
