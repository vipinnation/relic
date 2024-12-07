"use client";

import { useState } from "react";
import { useAttendanceData, Class, Student } from "@/utils/attendanceData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AttendanceHistory() {
  const { classes, getAttendanceForClass, getAttendanceForStudent } =
    useAttendanceData();
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [attendanceData, setAttendanceData] = useState<any[]>([]);

  const handleClassChange = (classId: string) => {
    const selected = classes.find((c) => c.id === classId) || null;
    setSelectedClass(selected);
    setSelectedStudent(null);
    updateAttendanceData(selected, null);
  };

  const handleStudentChange = (studentId: string) => {
    const selected =
      selectedClass?.students.find((s) => s.id === studentId) || null;
    setSelectedStudent(selected);
    updateAttendanceData(selectedClass, selected);
  };

  const updateAttendanceData = (
    selectedClass: Class | null,
    selectedStudent: Student | null
  ) => {
    if (!startDate || !endDate) return;

    const start = startDate.toISOString().split("T")[0];
    const end = endDate.toISOString().split("T")[0];

    if (selectedClass && !selectedStudent) {
      const classAttendance = getAttendanceForClass(
        selectedClass.id,
        start,
        end
      );
      setAttendanceData(classAttendance);
    } else if (selectedStudent) {
      const studentAttendance = getAttendanceForStudent(
        selectedStudent.id,
        start,
        end
      );
      setAttendanceData(studentAttendance);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance History</CardTitle>
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
          {selectedClass && (
            <Select onValueChange={handleStudentChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a student (optional)" />
              </SelectTrigger>
              <SelectContent>
                {selectedClass.students.map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <div className="flex space-x-4">
            {/* <DatePicker selected={startDate} onSelect={setStartDate} />
            <DatePicker selected={endDate} onSelect={setEndDate} /> */}
          </div>
          {attendanceData.length > 0 && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Present</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceData.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>
                      {
                        selectedClass?.students.find(
                          (s) => s.id === record.studentId
                        )?.name
                      }
                    </TableCell>
                    <TableCell>{record.present ? "Yes" : "No"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
