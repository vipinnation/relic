import { useState, useEffect } from 'react';

export interface Student {
  id: string;
  name: string;
}

export interface Assignment {
  id: string;
  name: string;
  maxScore: number;
  title?: string;
}

export interface Grade {
  studentId: string;
  assignmentId: string;
  score: number;
}

export interface Class {
  id: string;
  name: string;
  students: Student[];
  assignments: Assignment[];
}

// Simulated classes data
const initialClasses: Class[] = [
  {
    id: '1',
    name: 'Math 101',
    students: [
      { id: '1', name: 'Alice Johnson' },
      { id: '2', name: 'Bob Smith' },
      { id: '3', name: 'Charlie Brown' },
    ],
    assignments: [
      { id: '1', name: 'Homework 1', maxScore: 100 },
      { id: '2', name: 'Quiz 1', maxScore: 50 },
      { id: '3', name: 'Midterm Exam', maxScore: 200 },
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
    assignments: [
      { id: '4', name: 'Essay 1', maxScore: 100 },
      { id: '5', name: 'Presentation', maxScore: 50 },
      { id: '6', name: 'Final Paper', maxScore: 150 },
    ],
  },
];

export function useGradebookData() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [grades, setGrades] = useState<Grade[]>([]);

  useEffect(() => {
    const storedClasses = localStorage.getItem('gradebookClasses');
    const storedGrades = localStorage.getItem('gradebookGrades');

    if (storedClasses) {
      setClasses(JSON.parse(storedClasses));
    } else {
      setClasses(initialClasses);
      localStorage.setItem('gradebookClasses', JSON.stringify(initialClasses));
    }

    if (storedGrades) {
      setGrades(JSON.parse(storedGrades));
    }
  }, []);

  const saveGrade = (newGrade: Grade) => {
    const updatedGrades = [...grades.filter(g => g.studentId !== newGrade.studentId || g.assignmentId !== newGrade.assignmentId), newGrade];
    setGrades(updatedGrades);
    localStorage.setItem('gradebookGrades', JSON.stringify(updatedGrades));
  };

  const getGradesForClass = (classId: string) => {
    const classData = classes.find(c => c.id === classId);
    if (!classData) return [];

    return classData.students.map(student => {
      const studentGrades = grades.filter(g => g.studentId === student.id);
      const totalScore = studentGrades.reduce((sum, grade) => sum + grade.score, 0);
      const maxPossibleScore = classData.assignments.reduce((sum, assignment) => sum + assignment.maxScore, 0);
      const averagePercentage = (totalScore / maxPossibleScore) * 100;

      return {
        studentId: student.id,
        studentName: student.name,
        grades: studentGrades,
        averagePercentage: averagePercentage.toFixed(2),
      };
    });
  };

  const getGradesForStudent = (studentId: string) => {
    return grades.filter(g => g.studentId === studentId);
  };

  return {
    classes,
    grades,
    saveGrade,
    getGradesForClass,
    getGradesForStudent,
  };
}

