import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const classData = [
  { id: 1, name: "Math 101", studentCount: 25, subjects: ["Algebra", "Geometry"], attendanceRate: 95 },
  { id: 2, name: "Science 202", studentCount: 30, subjects: ["Biology", "Chemistry"], attendanceRate: 92 },
  { id: 3, name: "History 301", studentCount: 22, subjects: ["World History", "Geography"], attendanceRate: 88 },
]

export function ClassList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Assigned Classes</CardTitle>
        <CardDescription>View and manage your assigned classes</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Class Name</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Subjects</TableHead>
              <TableHead>Attendance Rate</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classData.map((classItem) => (
              <TableRow key={classItem.id}>
                <TableCell className="font-medium">{classItem.name}</TableCell>
                <TableCell>{classItem.studentCount}</TableCell>
                <TableCell>
                  {classItem.subjects.map((subject) => (
                    <Badge key={subject} variant="secondary" className="mr-1">
                      {subject}
                    </Badge>
                  ))}
                </TableCell>
                <TableCell>{classItem.attendanceRate}%</TableCell>
                <TableCell>
                  <Button asChild variant="ghost">
                    <Link href={`/dashboard/classes/${classItem.id}`}>
                      Manage
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

