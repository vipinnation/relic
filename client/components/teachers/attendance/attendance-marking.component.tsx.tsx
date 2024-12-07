"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AttendanceRecord,
  Class,
  useAttendanceData,
} from "@/utils/attendanceData";

export default function AttendanceMarking() {
  const { classes, saveAttendance } = useAttendanceData();
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [attendance, setAttendance] = useState<{ [key: string]: boolean }>({});

  const handleClassChange = (classId: string) => {
    const selected = classes.find((c) => c.id === classId) || null;
    setSelectedClass(selected);
    setAttendance({});
  };

  const handleAttendanceChange = (studentId: string, present: boolean) => {
    setAttendance((prev) => ({ ...prev, [studentId]: present }));
  };

  const handleSubmit = () => {
    if (!selectedClass) return;

    const date = new Date().toISOString().split("T")[0];
    const records: AttendanceRecord[] = Object.entries(attendance).map(
      ([studentId, present]) => ({
        date,
        studentId,
        present,
      })
    );

    saveAttendance(records);
    setAttendance({});
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mark Daily Attendance</CardTitle>
      </CardHeader>
      <CardContent>
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
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Students:</h3>
            <ul>
              {selectedClass.students.map((student: any) => (
                <li
                  key={student.id}
                  className="flex items-center space-x-2 mb-2"
                >
                  <Checkbox
                    id={`student-${student.id}`}
                    checked={attendance[student.id] || false}
                    onCheckedChange={(checked) =>
                      handleAttendanceChange(student.id, checked as boolean)
                    }
                  />
                  <label htmlFor={`student-${student.id}`}>
                    {student.name}
                  </label>
                </li>
              ))}
            </ul>
            <Button onClick={handleSubmit} className="mt-4">
              Submit Attendance
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
