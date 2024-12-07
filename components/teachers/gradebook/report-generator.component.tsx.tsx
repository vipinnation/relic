"use client";

import { useState } from "react";
import { useGradebookData, Class, Student } from "@/utils/gradebookData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ReportGenerator() {
  const { classes, getGradesForClass, getGradesForStudent } =
    useGradebookData();
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleClassChange = (classId: string) => {
    const selected = classes.find((c) => c.id === classId) || null;
    setSelectedClass(selected);
    setSelectedStudent(null);
  };

  const handleStudentChange = (studentId: string) => {
    const selected =
      selectedClass?.students.find((s) => s.id === studentId) || null;
    setSelectedStudent(selected);
  };

  const generateReport = () => {
    if (!selectedClass) return;

    let reportData: any[];
    let fileName: string;

    if (selectedStudent) {
      const studentGrades = getGradesForStudent(selectedStudent.id);
      reportData = [
        ["Assignment", "Score", "Max Score"],
        ...studentGrades.map((grade) => {
          const assignment = selectedClass.assignments.find(
            (a) => a.id === grade.assignmentId
          );
          return [
            assignment?.name || "",
            grade.score,
            assignment?.maxScore || "",
          ];
        }),
      ];
      fileName = `${selectedStudent.name}_grades_${selectedClass.name}.csv`;
    } else {
      const classGrades = getGradesForClass(selectedClass.id);
      reportData = [
        ["Student", "Average Grade"],
        ...classGrades.map((studentGrade) => [
          studentGrade.studentName,
          studentGrade.averagePercentage,
        ]),
      ];
      fileName = `${selectedClass.name}_class_report.csv`;
    }

    const csvContent = reportData.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", fileName);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Report</CardTitle>
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
          <Button onClick={generateReport} disabled={!selectedClass}>
            Generate Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
