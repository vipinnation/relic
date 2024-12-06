import TimetableGrid from "@/components/school/timetable.grid";
import { generateMockData } from "@/utils/mockData";
import { Suspense } from "react";

export default function TimetablePage() {
  const weekSchedule = generateMockData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">School Timetable</h1>
      <Suspense fallback={<div>Loading timetable...</div>}>
        <TimetableGrid weekSchedule={weekSchedule} />
      </Suspense>
    </div>
  );
}
