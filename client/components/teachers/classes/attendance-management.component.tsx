"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const studentData = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Brown" },
  { id: 4, name: "Diana Ross" },
];

export function AttendanceManagement({ classId }: { classId: string }) {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [attendance, setAttendance] = useState<Record<number, boolean>>(
    Object.fromEntries(studentData.map((student) => [student.id, true]))
  );

  const handleAttendanceChange = (studentId: number, isPresent: boolean) => {
    setAttendance((prev) => ({ ...prev, [studentId]: isPresent }));
  };

  const handleSubmit = () => {
    console.log("Submitting attendance for", date, attendance);
    // Here you would typically send this data to your backend
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Management</CardTitle>
        <CardDescription>Mark attendance for {date}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Select value={date} onValueChange={setDate}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date" />
            </SelectTrigger>
            <SelectContent>
              {[0, 1, 2, 3, 4].map((dayOffset) => {
                const d = new Date();
                d.setDate(d.getDate() - dayOffset);
                const dateString = d.toISOString().split("T")[0];
                return (
                  <SelectItem key={dateString} value={dateString}>
                    {dateString}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <Button onClick={handleSubmit}>Submit Attendance</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Present</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studentData.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={attendance[student.id]}
                    onCheckedChange={(checked) =>
                      handleAttendanceChange(student.id, checked as boolean)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
