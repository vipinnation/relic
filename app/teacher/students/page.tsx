import TeachersLayout from "@/components/layout/teachers.layout";
import StudentList from "@/components/teachers/students/student-list.component";
import StudentProfile from "@/components/teachers/students/student-profile.component";
import { Suspense } from "react";

export default function Dashboard() {
  return (
    <TeachersLayout>
      {" "}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Student Profiles Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Suspense fallback={<div>Loading...</div>}>
            <StudentList />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="md:col-span-2">
              <StudentProfile />
            </div>
          </Suspense>
        </div>
      </div>
    </TeachersLayout>
  );
}
