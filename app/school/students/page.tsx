"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { StudentList } from "@/components/students/student-list";
import { AddStudentDialog } from "@/components/students/add-student-dialog";
import SchoolLayout from "@/components/layout/school.layout";

export default function StudentsPage() {
  const [open, setOpen] = useState(false);

  return (
    <SchoolLayout>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Students</h2>
          <div className="flex items-center space-x-2">
            <Button onClick={() => setOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Student
            </Button>
          </div>
        </div>
        <StudentList />
        <AddStudentDialog open={open} onOpenChange={setOpen} />
      </div>
    </SchoolLayout>
  );
}
