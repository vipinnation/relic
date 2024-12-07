"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2 } from "lucide-react";
import { useLessonPlanData, LessonPlan } from "@/utils/lessonPlanData";

export default function LessonPlanList() {
  const { lessonPlans, deleteLessonPlan } = useLessonPlanData();
  const [selectedPlan, setSelectedPlan] = useState<LessonPlan | null>(null);

  const handleEdit = (plan: LessonPlan) => {
    setSelectedPlan(plan);
    // You would typically update the LessonPlanForm component here
    // For this example, we'll just log to the console
    console.log("Edit plan:", plan);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this lesson plan?")) {
      deleteLessonPlan(id);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lesson Plans</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {lessonPlans.map((plan) => (
            <AccordionItem key={plan.id} value={plan.id}>
              <AccordionTrigger>{plan.title}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    <strong>Subject:</strong> {plan.subject}
                  </p>
                  <p>
                    <strong>Date:</strong> {plan.date}
                  </p>
                  <p>
                    <strong>Description:</strong> {plan.description}
                  </p>
                  <div>
                    <strong>Materials:</strong>
                    <ul className="list-disc list-inside">
                      {plan.materials.map((material) => (
                        <li key={material.id}>
                          {material.name} ({material.type})
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>Shared with:</strong>
                    {plan.sharedWith.map((group) => (
                      <Badge key={group} variant="secondary" className="ml-2">
                        {group}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(plan)}
                    >
                      <Pencil className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(plan.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
