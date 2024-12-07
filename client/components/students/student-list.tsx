"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Student } from "@/types";

const students = [
  {
    id: "1",
    userId: "user1",
    name: "John Doe",
    grade: "10",
    section: "A",
    admissionNumber: "2023001",
    parentId: "parent1",
    branchId: "1",
    email: "john.doe@school.com",
    attendance: "95%",
    status: "Active",
  },
  {
    id: "2",
    userId: "user2",
    name: "Jane Smith",
    grade: "9",
    section: "B",
    admissionNumber: "2023002",
    parentId: "parent2",
    branchId: "1",
    email: "jane.smith@school.com",
    attendance: "92%",
    status: "Active",
  },
];

export function StudentList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Admission No.</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Attendance</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell className="font-medium">{student.name}</TableCell>
              <TableCell>{`${student.grade}-${student.section}`}</TableCell>
              <TableCell>{student.admissionNumber}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.attendance}</TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  {student.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}