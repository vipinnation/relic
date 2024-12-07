import { useState, useEffect } from "react";

export interface LessonPlan {
  id: string;
  title: string;
  subject: string;
  description: string;
  date: string;
  materials: Material[];
  sharedWith: string[];
}

export interface Material {
  id: string;
  name: string;
  type: "pdf" | "presentation" | "video";
  url: string;
}

// Simulated lesson plan data
const initialLessonPlans: LessonPlan[] = [
  {
    id: "1",
    title: "Introduction to Algebra",
    subject: "Math",
    description:
      "Basic concepts of algebra, including variables and equations.",
    date: "2023-09-01",
    materials: [
      {
        id: "1",
        name: "Algebra Basics.pdf",
        type: "pdf",
        url: "/placeholder.svg?height=100&width=100",
      },
      {
        id: "2",
        name: "Intro to Algebra.pptx",
        type: "presentation",
        url: "/placeholder.svg?height=100&width=100",
      },
    ],
    sharedWith: ["students", "administrators"],
  },
  {
    id: "2",
    title: "The American Revolution",
    subject: "History",
    description:
      "Overview of the causes and major events of the American Revolution.",
    date: "2023-09-05",
    materials: [
      {
        id: "3",
        name: "American Revolution Timeline.pdf",
        type: "pdf",
        url: "/placeholder.svg?height=100&width=100",
      },
      {
        id: "4",
        name: "Revolutionary War.mp4",
        type: "video",
        url: "/placeholder.svg?height=100&width=100",
      },
    ],
    sharedWith: ["students"],
  },
];

export function useLessonPlanData() {
  const [lessonPlans, setLessonPlans] = useState<LessonPlan[]>([]);

  useEffect(() => {
    const storedLessonPlans = localStorage.getItem("lessonPlans");
    if (storedLessonPlans) {
      setLessonPlans(JSON.parse(storedLessonPlans));
    } else {
      setLessonPlans(initialLessonPlans);
      localStorage.setItem("lessonPlans", JSON.stringify(initialLessonPlans));
    }
  }, []);

  const saveLessonPlan = (newLessonPlan: LessonPlan) => {
    const updatedLessonPlans = [...lessonPlans, newLessonPlan];
    setLessonPlans(updatedLessonPlans);
    localStorage.setItem("lessonPlans", JSON.stringify(updatedLessonPlans));
  };

  const updateLessonPlan = (updatedLessonPlan: LessonPlan) => {
    const updatedLessonPlans = lessonPlans.map((lp) =>
      lp.id === updatedLessonPlan.id ? updatedLessonPlan : lp
    );
    setLessonPlans(updatedLessonPlans);
    localStorage.setItem("lessonPlans", JSON.stringify(updatedLessonPlans));
  };

  const deleteLessonPlan = (id: string) => {
    const updatedLessonPlans = lessonPlans.filter((lp) => lp.id !== id);
    setLessonPlans(updatedLessonPlans);
    localStorage.setItem("lessonPlans", JSON.stringify(updatedLessonPlans));
  };

  return {
    lessonPlans,
    saveLessonPlan,
    updateLessonPlan,
    deleteLessonPlan,
  };
}
