import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ClassInfo {
  id: string
  name: string
  studentCount: number
  subjects: string[]
  attendanceRate: number
}

export function ClassDetails({ classInfo }: { classInfo: ClassInfo }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Class Details</CardTitle>
        <CardDescription>Overview of {classInfo.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium">Total Students</p>
            <p className="text-2xl font-bold">{classInfo.studentCount}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Attendance Rate</p>
            <p className="text-2xl font-bold">{classInfo.attendanceRate}%</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-medium">Subjects</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {classInfo.subjects.map((subject) => (
                <Badge key={subject} variant="secondary">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

