"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for demonstration
const mockClassDetails = {
  id: 1,
  name: "Grade 6 - A",
  schedule: [
    { day: "Monday", time: "8:00 AM - 3:00 PM" },
    { day: "Tuesday", time: "8:00 AM - 3:00 PM" },
    { day: "Wednesday", time: "8:00 AM - 3:00 PM" },
    { day: "Thursday", time: "8:00 AM - 3:00 PM" },
    { day: "Friday", time: "8:00 AM - 2:00 PM" },
  ],
  subjects: [
    { name: "Mathematics", teacher: "John Doe" },
    { name: "Science", teacher: "Jane Smith" },
    { name: "English", teacher: "Alice Johnson" },
  ],
  students: [
    { id: 1, name: "Student 1", attendance: 95 },
    { id: 2, name: "Student 2", attendance: 88 },
    { id: 3, name: "Student 3", attendance: 92 },
  ],
};

export default function ClassDetails() {
  const [selectedClass, setSelectedClass] = useState(mockClassDetails);

  return (
    <div>
      <Select onValueChange={(value) => setSelectedClass(mockClassDetails)}>
        <SelectTrigger className="w-[280px] mb-4">
          <SelectValue placeholder="Select Class" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Grade 6 - A</SelectItem>
          <SelectItem value="2">Grade 7 - B</SelectItem>
          <SelectItem value="3">Grade 8 - C</SelectItem>
        </SelectContent>
      </Select>

      {selectedClass && (
        <Tabs defaultValue="schedule">
          <TabsList>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
          </TabsList>
          <TabsContent value="schedule">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Day</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedClass.schedule.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.day}</TableCell>
                    <TableCell>{item.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="subjects">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Teacher</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedClass.subjects.map((subject, index) => (
                  <TableRow key={index}>
                    <TableCell>{subject.name}</TableCell>
                    <TableCell>{subject.teacher}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="students">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Attendance (%)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedClass.students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.attendance}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
