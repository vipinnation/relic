"use client";

import { useState } from "react";
import {
  useGradebookData,
  Class,
  Student,
  Assignment,
} from "@/utils/gradebookData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function GradeInput() {
  const { classes, saveGrade } = useGradebookData();
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [selectedAssignment, setSelectedAssignment] =
    useState<Assignment | null>(null);
  const [score, setScore] = useState<string>("");

  const handleClassChange = (classId: string) => {
    const selected = classes.find((c) => c.id === classId) || null;
    setSelectedClass(selected);
    setSelectedStudent(null);
    setSelectedAssignment(null);
    setScore("");
  };

  const handleStudentChange = (studentId: string) => {
    const selected =
      selectedClass?.students.find((s) => s.id === studentId) || null;
    setSelectedStudent(selected);
  };

  const handleAssignmentChange = (assignmentId: string) => {
    const selected =
      selectedClass?.assignments.find((a) => a.id === assignmentId) || null;
    setSelectedAssignment(selected);
  };

  const handleSubmit = () => {
    if (!selectedClass || !selectedStudent || !selectedAssignment || !score)
      return;

    const numericScore = parseFloat(score);
    if (
      isNaN(numericScore) ||
      numericScore < 0 ||
      numericScore > selectedAssignment.maxScore
    ) {
      alert(
        `Please enter a valid score between 0 and ${selectedAssignment.maxScore}`
      );
      return;
    }

    saveGrade({
      studentId: selectedStudent.id,
      assignmentId: selectedAssignment.id,
      score: numericScore,
    });

    setScore("");
    alert("Grade saved successfully!");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Input Grades</CardTitle>
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
            <>
              <Select onValueChange={handleStudentChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a student" />
                </SelectTrigger>
                <SelectContent>
                  {selectedClass.students.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={handleAssignmentChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an assignment" />
                </SelectTrigger>
                <SelectContent>
                  {selectedClass.assignments.map((a) => (
                    <SelectItem key={a.id} value={a.id}>
                      {a.name} (Max: {a.maxScore})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </>
          )}
          {selectedAssignment && (
            <Input
              type="number"
              placeholder={`Enter score (0-${selectedAssignment.maxScore})`}
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          )}
          <Button
            onClick={handleSubmit}
            disabled={
              !selectedClass ||
              !selectedStudent ||
              !selectedAssignment ||
              !score
            }
          >
            Save Grade
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
