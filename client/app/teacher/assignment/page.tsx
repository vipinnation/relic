import TeachersLayout from "@/components/layout/teachers.layout";
import AssignmentForm from "@/components/teachers/assignment/assignment-form.component";
import AssignmentList from "@/components/teachers/assignment/assignment-list.component";
import SubmissionList from "@/components/teachers/assignment/submission-list.component";
import { Suspense } from "react";

export default function Dashboard() {
  return (
    <TeachersLayout>
      {" "}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Assignments and Assessments Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Suspense fallback={<div>Loading...</div>}>
            <AssignmentList />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <AssignmentForm />
          </Suspense>
        </div>
        <div className="mt-8">
          <Suspense fallback={<div>Loading...</div>}>
            <SubmissionList />
          </Suspense>
        </div>
      </div>
    </TeachersLayout>
  );
}
