import { CalendarDays } from "lucide-react";

const scheduleData = [
  { time: "09:00 AM", class: "Math 101", room: "Room 201" },
  { time: "11:00 AM", class: "Science 202", room: "Lab 101" },
  { time: "02:00 PM", class: "History 301", room: "Room 305" },
];

export function ClassSchedule() {
  return (
    <div className="space-y-8">
      {scheduleData.map((item, index) => (
        <div key={index} className="flex items-center">
          <CalendarDays className="mr-4 h-4 w-4 text-muted-foreground" />
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.class}</p>
            <p className="text-sm text-muted-foreground">
              {item.time} - {item.room}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
