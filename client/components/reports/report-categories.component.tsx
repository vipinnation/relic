"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const studentData = [
  { id: 1, name: "John Doe", grade: "A", attendance: "95%", feeStatus: "Paid" },
  {
    id: 2,
    name: "Jane Smith",
    grade: "B",
    attendance: "92%",
    feeStatus: "Pending",
  },
  // Add more student data...
];

const classData = [
  {
    id: 1,
    name: "Class 10A",
    averageGrade: "B+",
    attendance: "93%",
    topSubject: "Mathematics",
  },
  {
    id: 2,
    name: "Class 9B",
    averageGrade: "A-",
    attendance: "95%",
    topSubject: "Science",
  },
  // Add more class data...
];

const staffData = [
  {
    id: 1,
    name: "Mr. Johnson",
    attendance: "98%",
    performance: "Excellent",
    payrollStatus: "Processed",
  },
  {
    id: 2,
    name: "Ms. Williams",
    attendance: "96%",
    performance: "Good",
    payrollStatus: "Pending",
  },
  // Add more staff data...
];

const branchData = [
  {
    id: 1,
    name: "Main Branch",
    performance: "Excellent",
    enrollment: 1200,
    revenue: "$1,200,000",
  },
  {
    id: 2,
    name: "North Branch",
    performance: "Good",
    enrollment: 800,
    revenue: "$800,000",
  },
  // Add more branch data...
];

export default function ReportCategories() {
  const [activeTab, setActiveTab] = useState("students");

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Report Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
            <TabsTrigger value="branches">Branches</TabsTrigger>
          </TabsList>
          <TabsContent value="students">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Fee Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentData.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.grade}</TableCell>
                    <TableCell>{student.attendance}</TableCell>
                    <TableCell>{student.feeStatus}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="classes">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Class Name</TableHead>
                  <TableHead>Average Grade</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Top Subject</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classData.map((classItem) => (
                  <TableRow key={classItem.id}>
                    <TableCell>{classItem.name}</TableCell>
                    <TableCell>{classItem.averageGrade}</TableCell>
                    <TableCell>{classItem.attendance}</TableCell>
                    <TableCell>{classItem.topSubject}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="staff">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Payroll Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staffData.map((staff) => (
                  <TableRow key={staff.id}>
                    <TableCell>{staff.name}</TableCell>
                    <TableCell>{staff.attendance}</TableCell>
                    <TableCell>{staff.performance}</TableCell>
                    <TableCell>{staff.payrollStatus}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="branches">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Branch Name</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Enrollment</TableHead>
                  <TableHead>Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {branchData.map((branch) => (
                  <TableRow key={branch.id}>
                    <TableCell>{branch.name}</TableCell>
                    <TableCell>{branch.performance}</TableCell>
                    <TableCell>{branch.enrollment}</TableCell>
                    <TableCell>{branch.revenue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
