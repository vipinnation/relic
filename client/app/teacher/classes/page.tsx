import TeachersLayout from "@/components/layout/teachers.layout";
import { AttendanceManagement } from "@/components/teachers/classes/attendance-management.component";
import { ClassDetails } from "@/components/teachers/classes/class-details.component";
import { StudentList } from "@/components/teachers/classes/student-list.component";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Class Details",
  description: "View and manage details for a specific class.",
};

const classData = [
  {
    id: "1",
    name: "Math 101",
    studentCount: 25,
    subjects: ["Algebra", "Geometry"],
    attendanceRate: 95,
  },
  {
    id: "2",
    name: "Science 202",
    studentCount: 30,
    subjects: ["Biology", "Chemistry"],
    attendanceRate: 92,
  },
  {
    id: "3",
    name: "History 301",
    studentCount: 22,
    subjects: ["World History", "Geography"],
    attendanceRate: 88,
  },
];

export default function ClassDetailsPage() {
  const classInfo = classData.find((c) => c.id == "1");

  if (!classInfo) {
    notFound();
  }

  return (
    <TeachersLayout>
      <div className="flex flex-col space-y-8 p-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            {classInfo.name}
          </h2>
        </div>
        <ClassDetails classInfo={classInfo} />
        <StudentList classId={classInfo.id} />
        <AttendanceManagement classId={classInfo.id} />
      </div>
    </TeachersLayout>
  );
}
