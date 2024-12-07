import TeachersLayout from "@/components/layout/teachers.layout";
import LessonPlanForm from "@/components/teachers/lesson-plan/lesson-plan-form.component.tsx";
import LessonPlanList from "@/components/teachers/lesson-plan/lesson-plan-list.component.tsx";
import { Suspense } from "react";

export default function Dashboard() {
  return (
    <TeachersLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Lesson Plan Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Suspense fallback={<div>Loading...</div>}>
            <LessonPlanList />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <LessonPlanForm />
          </Suspense>
        </div>
      </div>
    </TeachersLayout>
  );
}
