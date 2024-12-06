"use client";

import { WeekSchedule, TimeSlot } from "@/types/timetable.types";
import { useState } from "react";

interface TimetableGridProps {
  weekSchedule: WeekSchedule;
}

export default function TimetableGrid({ weekSchedule }: TimetableGridProps) {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedClass, setSelectedClass] = useState("9A");

  const days = Object.keys(weekSchedule);
  const classes = Object.keys(weekSchedule[selectedDay]);

  const renderTimeSlot = (slot: TimeSlot) => (
    <div key={slot.id} className="bg-white p-2 rounded shadow">
      <p className="font-bold">{slot.subject}</p>
      <p className="text-sm">{slot.teacher}</p>
      <p className="text-sm">Room: {slot.room}</p>
      <p className="text-xs text-gray-500">{`${slot.startTime} - ${slot.endTime}`}</p>
    </div>
  );

  return (
    <div>
      <div className="mb-4 flex space-x-4">
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className="border rounded p-2"
        >
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="border rounded p-2"
        >
          {classes.map((className) => (
            <option key={className} value={className}>
              {className}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {weekSchedule[selectedDay][selectedClass].map(renderTimeSlot)}
      </div>
    </div>
  );
}
