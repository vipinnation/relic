import { Suspense } from "react";
import TeachersLayout from "@/components/layout/teachers.layout";
import GradeInput from "@/components/teachers/gradebook/grade-input.component.tsx";
import GradeViewer from "@/components/teachers/gradebook/grade-viewer.component.tsx";
import ReportGenerator from "@/components/teachers/gradebook/report-generator.component.tsx";

export default function Dashboard() {
  return (
    <TeachersLayout>
      {" "}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Gradebook Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Suspense fallback={<div>Loading...</div>}>
            <GradeInput />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <GradeViewer />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <ReportGenerator />
          </Suspense>
        </div>
      </div>
    </TeachersLayout>
  );
}
