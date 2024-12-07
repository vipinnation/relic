'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const attendanceData = [
  { id: 1, name: 'John Doe', status: 'Present', date: '2023-05-01' },
  { id: 2, name: 'Jane Smith', status: 'Absent', date: '2023-05-01' },
  { id: 3, name: 'Bob Johnson', status: 'Present', date: '2023-05-01' },
]

export default function AttendanceTracker() {
  const [viewType, setViewType] = useState('daily')

  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <Select onValueChange={setViewType}>
          <SelectTrigger>
            <SelectValue placeholder="Select view type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendanceData.map(record => (
              <TableRow key={record.id}>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.status}</TableCell>
                <TableCell>{record.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

