'use client'

import { useState } from 'react'
import { useStudentData, Student, AttendanceRecord, AcademicRecord, BehaviorNote, Feedback } from '@/utils/studentData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function StudentProfile() {
  const { students, attendance, academicRecords, behaviorNotes, feedback, addBehaviorNote, addFeedback } = useStudentData()
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [newNote, setNewNote] = useState('')
  const [noteType, setNoteType] = useState<'positive' | 'negative' | 'neutral'>('neutral')
  const [newFeedback, setNewFeedback] = useState('')

  // In a real application, you would get the selected student from a parent component or URL parameter
  const handleSelectStudent = (studentId: string) => {
    const student = students.find(s => s.id === studentId)
    setSelectedStudent(student || null)
  }

  const handleAddNote = () => {
    if (selectedStudent && newNote) {
      const note: BehaviorNote = {
        id: Date.now().toString(),
        studentId: selectedStudent.id,
        date: new Date().toISOString().split('T')[0],
        note: newNote,
        type: noteType,
      }
      addBehaviorNote(note)
      setNewNote('')
    }
  }

  const handleAddFeedback = () => {
    if (selectedStudent && newFeedback) {
      const feedbackItem: Feedback = {
        id: Date.now().toString(),
        studentId: selectedStudent.id,
        date: new Date().toISOString().split('T')[0],
        content: newFeedback,
      }
      addFeedback(feedbackItem)
      setNewFeedback('')
    }
  }

  if (!selectedStudent) {
    return <div>Please select a student</div>
  }

  const studentAttendance = attendance.filter(a => a.studentId === selectedStudent.id)
  const studentAcademicRecords = academicRecords.filter(r => r.studentId === selectedStudent.id)
  const studentBehaviorNotes = behaviorNotes.filter(n => n.studentId === selectedStudent.id)
  const studentFeedback = feedback.filter(f => f.studentId === selectedStudent.id)

  return (
    <Card>
      <CardHeader>
        <CardTitle>{selectedStudent.name} - Grade {selectedStudent.grade}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="attendance">
          <TabsList>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="academic">Academic Performance</TabsTrigger>
            <TabsTrigger value="behavior">Behavior Notes</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>
          <TabsContent value="attendance">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentAttendance.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="academic">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentAcademicRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.subject}</TableCell>
                    <TableCell>{record.grade}</TableCell>
                    <TableCell>{record.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="behavior">
            <div className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Note</TableHead>
                    <TableHead>Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {studentBehaviorNotes.map((note) => (
                    <TableRow key={note.id}>
                      <TableCell>{note.date}</TableCell>
                      <TableCell>{note.note}</TableCell>
                      <TableCell>{note.type}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex space-x-2">
                <Textarea
                  placeholder="Add a new behavior note"
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                />
                <Select value={noteType} onValueChange={(value) => setNoteType(value as 'positive' | 'negative' | 'neutral')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="positive">Positive</SelectItem>
                    <SelectItem value="negative">Negative</SelectItem>
                    <SelectItem value="neutral">Neutral</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={handleAddNote}>Add Note</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="feedback">
            <div className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Feedback</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {studentFeedback.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.content}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex space-x-2">
                <Textarea
                  placeholder="Add new feedback"
                  value={newFeedback}
                  onChange={(e) => setNewFeedback(e.target.value)}
                />
                <Button onClick={handleAddFeedback}>Add Feedback</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

