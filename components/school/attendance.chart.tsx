import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Week 1',
    teacher: 90,
    student: 75
  },
  {
    name: 'Week 2',
    teacher: 85,
    student: 70
  },
  {
    name: 'Week 3',
    teacher: 88,
    student: 80
  },
  {
    name: 'Week 4',
    teacher: 92,
    student: 78
  },
  {
    name: 'Week 5',
    teacher: 89,
    student: 82
  },
  {
    name: 'Week 6',
    teacher: 87,
    student: 76
  },
  {
    name: 'Week 7',
    teacher: 91,
    student: 79
  }
];

const AttendanceLineChart = () => {
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
        <XAxis dataKey="name" label={{ value: 'Weeks', position: 'insideBottomRight', offset: -5 }} />
        <YAxis label={{ value: 'Attendance (%)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="teacher" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="student" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AttendanceLineChart;
