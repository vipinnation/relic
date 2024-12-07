import { useState, useEffect } from "react";

export interface Assignment {
  id: string;
  title: string;
  type: "homework" | "quiz" | "project";
  description: string;
  dueDate: string;
  resources: Resource[];
}

export interface Resource {
  id: string;
  name: string;
  url: string;
}

export interface Submission {
  id: string;
  assignmentId: string;
  studentId: string;
  studentName: string;
  submissionDate: string;
  content: string;
  grade?: number;
  feedback?: string;
}

// Simulated assignment data
const initialAssignments: Assignment[] = [
  {
    id: "1",
    title: "Math Homework 1",
    type: "homework",
    description: "Complete exercises 1-10 on page 25 of the textbook.",
    dueDate: "2023-09-15",
    resources: [
      {
        id: "1",
        name: "Textbook Chapter 2",
        url: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  {
    id: "2",
    title: "History Quiz: American Revolution",
    type: "quiz",
    description: "Multiple choice quiz covering the American Revolution.",
    dueDate: "2023-09-20",
    resources: [
      {
        id: "2",
        name: "Study Guide",
        url: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
];

// Simulated submission data
const initialSubmissions: Submission[] = [
  {
    id: "1",
    assignmentId: "1",
    studentId: "1",
    studentName: "Alice Johnson",
    submissionDate: "2023-09-14",
    content: "Completed exercises: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
  },
  {
    id: "2",
    assignmentId: "1",
    studentId: "2",
    studentName: "Bob Smith",
    submissionDate: "2023-09-15",
    content: "Completed exercises: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
  },
];

export function useAssignmentData() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    const storedAssignments = localStorage.getItem("assignments");
    const storedSubmissions = localStorage.getItem("submissions");

    if (storedAssignments) {
      setAssignments(JSON.parse(storedAssignments));
    } else {
      setAssignments(initialAssignments);
      localStorage.setItem("assignments", JSON.stringify(initialAssignments));
    }

    if (storedSubmissions) {
      setSubmissions(JSON.parse(storedSubmissions));
    } else {
      setSubmissions(initialSubmissions);
      localStorage.setItem("submissions", JSON.stringify(initialSubmissions));
    }
  }, []);

  const saveAssignment = (newAssignment: Assignment) => {
    const updatedAssignments = [...assignments, newAssignment];
    setAssignments(updatedAssignments);
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
  };

  const updateAssignment = (updatedAssignment: Assignment) => {
    const updatedAssignments = assignments.map((a) =>
      a.id === updatedAssignment.id ? updatedAssignment : a
    );
    setAssignments(updatedAssignments);
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
  };

  const deleteAssignment = (id: string) => {
    const updatedAssignments = assignments.filter((a) => a.id !== id);
    setAssignments(updatedAssignments);
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
  };

  const saveSubmission = (newSubmission: Submission) => {
    const updatedSubmissions = [...submissions, newSubmission];
    setSubmissions(updatedSubmissions);
    localStorage.setItem("submissions", JSON.stringify(updatedSubmissions));
  };

  const updateSubmission = (updatedSubmission: Submission) => {
    const updatedSubmissions = submissions.map((s) =>
      s.id === updatedSubmission.id ? updatedSubmission : s
    );
    setSubmissions(updatedSubmissions);
    localStorage.setItem("submissions", JSON.stringify(updatedSubmissions));
  };

  return {
    assignments,
    submissions,
    saveAssignment,
    updateAssignment,
    deleteAssignment,
    saveSubmission,
    updateSubmission,
  };
}
