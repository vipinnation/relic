"use client";

import { useState } from "react";
import { useAttendanceData, Class } from "@/utils/attendanceData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";

export default function AttendanceExport() {
  const { classes, getAttendanceForClass } = useAttendanceData();
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());

  const handleClassChange = (classId: string) => {
    const selected = classes.find((c) => c.id === classId) || null;
    setSelectedClass(selected);
  };

  const handleExport = () => {
    if (!selectedClass || !startDate || !endDate) return;

    const start = startDate.toISOString().split("T")[0];
    const end = endDate.toISOString().split("T")[0];
    const attendanceData = getAttendanceForClass(selectedClass.id, start, end);

    const csvContent = [
      ["Date", "Student", "Present"],
      ...attendanceData.map((record) => [
        record.date,
        selectedClass.students.find((s) => s.id === record.studentId)?.name,
        record.present ? "Yes" : "No",
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `attendance_${selectedClass.name}_${start}_${end}.csv`
      );
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Export Attendance Report</CardTitle>
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
          <div className="flex space-x-4">
            {/* <DatePicker selected={startDate} onSelect={setStartDate} />
            <DatePicker selected={endDate} onSelect={setEndDate} /> */}
          </div>
          <Button
            onClick={handleExport}
            disabled={!selectedClass || !startDate || !endDate}
          >
            Export Attendance Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
