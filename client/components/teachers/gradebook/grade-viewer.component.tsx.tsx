'use client'

import { useState } from 'react'
import { useGradebookData, Class } from '@/utils/gradebookData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function GradeViewer() {
  const { classes, getGradesForClass } = useGradebookData()
  const [selectedClass, setSelectedClass] = useState<Class | null>(null)
  const [gradeData, setGradeData] = useState<any[]>([])

  const handleClassChange = (classId: string) => {
    const selected = classes.find((c) => c.id === classId) || null
    setSelectedClass(selected)
    if (selected) {
      const grades = getGradesForClass(selected.id)
      setGradeData(grades)
    } else {
      setGradeData([])
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>View Grades</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select onValueChange={handleClassChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a class" />
            </SelectTrigger>
            <SelectContent>
              {classes.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {gradeData.length > 0 && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Average Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gradeData.map((studentGrade) => (
                  <TableRow key={studentGrade.studentId}>
                    <TableCell>{studentGrade.studentName}</TableCell>
                    <TableCell>{studentGrade.averagePercentage}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

