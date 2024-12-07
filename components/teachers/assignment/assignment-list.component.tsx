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
import { useAssignmentData } from "@/utils/assignmentData";
import { Assignment } from "@/utils/gradebookData";

export default function AssignmentList() {
  const { assignments, deleteAssignment } = useAssignmentData();
  const [selectedAssignment, setSelectedAssignment] =
    useState<Assignment | null>(null);

  const handleEdit = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    // You would typically update the AssignmentForm component here
    // For this example, we'll just log to the console
    console.log("Edit assignment:", assignment);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      deleteAssignment(id);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assignments</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {assignments.map((assignment) => (
            <AccordionItem key={assignment.id} value={assignment.id}>
              <AccordionTrigger>{assignment.title}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>
                    <strong>Type:</strong> <Badge>{assignment.type}</Badge>
                  </p>
                  <p>
                    <strong>Due Date:</strong> {assignment.dueDate}
                  </p>
                  <p>
                    <strong>Description:</strong> {assignment.description}
                  </p>
                  <div>
                    <strong>Resources:</strong>
                    <ul className="list-disc list-inside">
                      {assignment.resources.map((resource) => (
                        <li key={resource.id}>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {resource.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(assignment as any)}
                    >
                      <Pencil className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(assignment.id)}
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
