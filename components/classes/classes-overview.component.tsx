"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for demonstration
const mockClasses = [
  {
    id: 1,
    name: "Grade 6 - A",
    teachers: ["John Doe", "Jane Smith"],
    students: 25,
    branch: "Main Campus",
  },
  {
    id: 2,
    name: "Grade 7 - B",
    teachers: ["Alice Johnson"],
    students: 22,
    branch: "North Campus",
  },
  {
    id: 3,
    name: "Grade 8 - C",
    teachers: ["Bob Wilson", "Carol Brown"],
    students: 28,
    branch: "South Campus",
  },
];

export default function ClassesOverview() {
  const [filter, setFilter] = useState({ branch: "", grade: "", teacher: "" });
  const [search, setSearch] = useState("");

  const filteredClasses = mockClasses.filter(
    (cls) =>
      (filter.branch === "" || cls.branch === filter.branch) &&
      (filter.grade === "" || cls.name.includes(filter.grade)) &&
      (filter.teacher === "" || cls.teachers.includes(filter.teacher)) &&
      (search === "" || cls.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <Input
          placeholder="Search classes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Select
          value=""
          onValueChange={(value) => setFilter({ ...filter, branch: value })}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">All Branches</SelectItem>
            <SelectItem value="Main Campus">Main Campus</SelectItem>
            <SelectItem value="North Campus">North Campus</SelectItem>
            <SelectItem value="South Campus">South Campus</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value=""
          onValueChange={(value) => setFilter({ ...filter, grade: value })}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Grade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">All Grades</SelectItem>
            <SelectItem value="Grade 6">Grade 6</SelectItem>
            <SelectItem value="Grade 7">Grade 7</SelectItem>
            <SelectItem value="Grade 8">Grade 8</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Class Name</TableHead>
            <TableHead>Teachers</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Branch</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredClasses.map((cls) => (
            <TableRow key={cls.id}>
              <TableCell>{cls.name}</TableCell>
              <TableCell>{cls.teachers.join(", ")}</TableCell>
              <TableCell>{cls.students}</TableCell>
              <TableCell>{cls.branch}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
