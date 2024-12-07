'use client'

import { useState } from 'react'
import { useStudentData } from '@/utils/studentData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function StudentList() {
  const { students } = useStudentData()
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null)

  const handleSelectStudent = (studentId: string) => {
    setSelectedStudentId(studentId)
    // In a real application, you would update the StudentProfile component here
    console.log('Selected student:', studentId)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Students</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {students.map((student) => (
            <li key={student.id}>
              <Button
                variant={selectedStudentId === student.id ? 'default' : 'outline'}
                className="w-full justify-start"
                onClick={() => handleSelectStudent(student.id)}
              >
                {student.name} - Grade {student.grade}
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
