import { WeekSchedule } from "@/types/timetable.types";

export const generateMockData = (): WeekSchedule => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const subjects = [
    "Math",
    "Science",
    "English",
    "History",
    "Art",
    "Physical Education",
  ];
  const teachers = [
    "Mr. Smith",
    "Ms. Johnson",
    "Mrs. Williams",
    "Mr. Brown",
    "Ms. Davis",
    "Mr. Wilson",
  ];
  const rooms = ["101", "102", "103", "104", "105", "106"];

  const weekSchedule: WeekSchedule = {};

  days.forEach((day) => {
    weekSchedule[day] = {};
    ["9A", "9B", "10A", "10B"].forEach((className) => {
      weekSchedule[day][className] = Array(6)
        .fill(null)
        .map((_, index) => ({
          id: `${day}-${className}-${index}`,
          subject: subjects[Math.floor(Math.random() * subjects.length)],
          teacher: teachers[Math.floor(Math.random() * teachers.length)],
          room: rooms[Math.floor(Math.random() * rooms.length)],
          startTime: `${8 + index}:00`,
          endTime: `${9 + index}:00`,
        }));
    });
  });

  return weekSchedule;
};
