export interface TimeSlot {
  id: string;
  subject: string;
  teacher: string;
  room: string;
  startTime: string;
  endTime: string;
}

export interface DaySchedule {
  [key: string]: TimeSlot[];
}

export interface WeekSchedule {
  [key: string]: DaySchedule;
}
