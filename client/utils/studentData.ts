import { useState, useEffect } from 'react';

export interface Student {
  id: string;
  name: string;
  grade: number;
  classId: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  date: string;
  status: 'present' | 'absent' | 'tardy';
}

export interface AcademicRecord {
  id: string;
  studentId: string;
  subject: string;
  grade: number;
  date: string;
}

export interface BehaviorNote {
  id: string;
  studentId: string;
  date: string;
  note: string;
  type: 'positive' | 'negative' | 'neutral';
}

export interface Feedback {
  id: string;
  studentId: string;
  date: string;
  content: string;
}

// Simulated student data
const initialStudents: Student[] = [
  { id: '1', name: 'Alice Johnson', grade: 9, classId: '1' },
  { id: '2', name: 'Bob Smith', grade: 9, classId: '1' },
  { id: '3', name: 'Charlie Brown', grade: 10, classId: '2' },
];

const initialAttendance: AttendanceRecord[] = [
  { id: '1', studentId: '1', date: '2023-09-01', status: 'present' },
  { id: '2', studentId: '1', date: '2023-09-02', status: 'present' },
  { id: '3', studentId: '2', date: '2023-09-01', status: 'absent' },
  { id: '4', studentId: '2', date: '2023-09-02', status: 'present' },
];

const initialAcademicRecords: AcademicRecord[] = [
  { id: '1', studentId: '1', subject: 'Math', grade: 85, date: '2023-09-15' },
  { id: '2', studentId: '1', subject: 'English', grade: 92, date: '2023-09-16' },
  { id: '3', studentId: '2', subject: 'Math', grade: 78, date: '2023-09-15' },
  { id: '4', studentId: '2', subject: 'English', grade: 88, date: '2023-09-16' },
];

const initialBehaviorNotes: BehaviorNote[] = [
  { id: '1', studentId: '1', date: '2023-09-10', note: 'Helped a classmate with homework', type: 'positive' },
  { id: '2', studentId: '2', date: '2023-09-12', note: 'Disruptive in class', type: 'negative' },
];

const initialFeedback: Feedback[] = [
  { id: '1', studentId: '1', date: '2023-09-20', content: 'Great improvement in math. Keep up the good work!' },
  { id: '2', studentId: '2', date: '2023-09-21', content: 'Needs to focus more during English lessons.' },
];

export function useStudentData() {
  const [students, setStudents] = useState<Student[]>([]);
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
  const [academicRecords, setAcademicRecords] = useState<AcademicRecord[]>([]);
  const [behaviorNotes, setBehaviorNotes] = useState<BehaviorNote[]>([]);
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  useEffect(() => {
    const storedStudents = localStorage.getItem('students');
    const storedAttendance = localStorage.getItem('attendance');
    const storedAcademicRecords = localStorage.getItem('academicRecords');
    const storedBehaviorNotes = localStorage.getItem('behaviorNotes');
    const storedFeedback = localStorage.getItem('feedback');

    setStudents(storedStudents ? JSON.parse(storedStudents) : initialStudents);
    setAttendance(storedAttendance ? JSON.parse(storedAttendance) : initialAttendance);
    setAcademicRecords(storedAcademicRecords ? JSON.parse(storedAcademicRecords) : initialAcademicRecords);
    setBehaviorNotes(storedBehaviorNotes ? JSON.parse(storedBehaviorNotes) : initialBehaviorNotes);
    setFeedback(storedFeedback ? JSON.parse(storedFeedback) : initialFeedback);
  }, []);

  const saveData = () => {
    localStorage.setItem('students', JSON.stringify(students));
    localStorage.setItem('attendance', JSON.stringify(attendance));
    localStorage.setItem('academicRecords', JSON.stringify(academicRecords));
    localStorage.setItem('behaviorNotes', JSON.stringify(behaviorNotes));
    localStorage.setItem('feedback', JSON.stringify(feedback));
  };

  const addBehaviorNote = (note: BehaviorNote) => {
    setBehaviorNotes([...behaviorNotes, note]);
    saveData();
  };

  const addFeedback = (newFeedback: Feedback) => {
    setFeedback([...feedback, newFeedback]);
    saveData();
  };

  return {
    students,
    attendance,
    academicRecords,
    behaviorNotes,
    feedback,
    addBehaviorNote,
    addFeedback,
  };
}
