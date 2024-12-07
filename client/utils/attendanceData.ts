import { useState, useEffect } from 'react';

export interface Student {
  id: string;
  name: string;
}

export interface AttendanceRecord {
  date: string;
  studentId: string;
  present: boolean;
}

export interface Class {
  id: string;
  name: string;
  students: Student[];
}

// Simulated classes and students data
const initialClasses: Class[] = [
  {
    id: '1',
    name: 'Math 101',
    students: [
      { id: '1', name: 'Alice Johnson' },
      { id: '2', name: 'Bob Smith' },
      { id: '3', name: 'Charlie Brown' },
    ],
  },
  {
    id: '2',
    name: 'History 202',
    students: [
      { id: '4', name: 'David Lee' },
      { id: '5', name: 'Eva Martinez' },
      { id: '6', name: 'Frank Wilson' },
    ],
  },
];

export function useAttendanceData() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);

  useEffect(() => {
    const storedClasses = localStorage.getItem('classes');
    const storedAttendance = localStorage.getItem('attendanceRecords');

    if (storedClasses) {
      setClasses(JSON.parse(storedClasses));
    } else {
      setClasses(initialClasses);
      localStorage.setItem('classes', JSON.stringify(initialClasses));
    }

    if (storedAttendance) {
      setAttendanceRecords(JSON.parse(storedAttendance));
    }
  }, []);

  const saveAttendance = (newRecords: AttendanceRecord[]) => {
    const updatedRecords = [...attendanceRecords, ...newRecords];
    setAttendanceRecords(updatedRecords);
    localStorage.setItem('attendanceRecords', JSON.stringify(updatedRecords));
  };

  const getAttendanceForClass = (classId: string, startDate: string, endDate: string) => {
    return attendanceRecords.filter(
      (record) =>
        classes.find((c) => c.id === classId)?.students.some((s) => s.id === record.studentId) &&
        record.date >= startDate &&
        record.date <= endDate
    );
  };

  const getAttendanceForStudent = (studentId: string, startDate: string, endDate: string) => {
    return attendanceRecords.filter(
      (record) => record.studentId === studentId && record.date >= startDate && record.date <= endDate
    );
  };

  return {
    classes,
    attendanceRecords,
    saveAttendance,
    getAttendanceForClass,
    getAttendanceForStudent,
  };
}

