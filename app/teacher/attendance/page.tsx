import TeachersLayout from "@/components/layout/teachers.layout";
import AttendanceExport from "@/components/teachers/attendance/attendance-export.component.tsx";
import AttendanceHistory from "@/components/teachers/attendance/attendance-history.component.tsx";
import AttendanceMarking from "@/components/teachers/attendance/attendance-marking.component.tsx";
import { Suspense } from "react";

export default function Dashboard() {
  return (
    <TeachersLayout>
      {" "}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Attendance Tracking Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Suspense fallback={<div>Loading...</div>}>
            <AttendanceMarking />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <AttendanceHistory />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <AttendanceExport />
          </Suspense>
        </div>
      </div>
    </TeachersLayout>
  );
}
