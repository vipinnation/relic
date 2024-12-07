"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const performanceData = [
  { class: "Math 101", averageGrade: 85, attendanceRate: 95 },
  { class: "Science 202", averageGrade: 78, attendanceRate: 92 },
  { class: "History 301", averageGrade: 82, attendanceRate: 88 },
]

export function ClassPerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Class Performance Overview</CardTitle>
        <CardDescription>Average grades and attendance rates for your classes</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={performanceData}>
            <XAxis dataKey="class" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Bar yAxisId="left" dataKey="averageGrade" fill="#8884d8" name="Average Grade" />
            <Bar yAxisId="right" dataKey="attendanceRate" fill="#82ca9d" name="Attendance Rate" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

