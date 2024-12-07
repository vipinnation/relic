"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PlusCircle, X } from "lucide-react";
import { useAssignmentData, Resource } from "@/utils/assignmentData";
import { Assignment } from "@/utils/gradebookData";

export default function AssignmentForm() {
  const { saveAssignment } = useAssignmentData();
  const [title, setTitle] = useState("");
  const [type, setType] = useState<"homework" | "quiz" | "project">("homework");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [resources, setResources] = useState<Resource[]>([]);

  const handleAddResource = () => {
    setResources([
      ...resources,
      { id: Date.now().toString(), name: "", url: "" },
    ]);
  };

  const handleRemoveResource = (id: string) => {
    setResources(resources.filter((r) => r.id !== id));
  };

  const handleResourceChange = (
    id: string,
    field: keyof Resource,
    value: string
  ) => {
    setResources(
      resources.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAssignment: Assignment | any = {
      id: Date.now().toString(),
      title,
      type,
      description,
      dueDate,
      resources,
    };
    saveAssignment(newAssignment as any);
    // Reset form
    setTitle("");
    setType("homework");
    setDescription("");
    setDueDate("");
    setResources([]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Assignment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="type">Type</Label>
            <Select
              value={type}
              onValueChange={(value) =>
                setType(value as "homework" | "quiz" | "project")
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="homework">Homework</SelectItem>
                <SelectItem value="quiz">Quiz</SelectItem>
                <SelectItem value="project">Project</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <div>
            <Label>Resources</Label>
            {resources.map((resource, index) => (
              <div
                key={resource.id}
                className="flex items-center space-x-2 mt-2"
              >
                <Input
                  placeholder="Resource name"
                  value={resource.name}
                  onChange={(e) =>
                    handleResourceChange(resource.id, "name", e.target.value)
                  }
                  required
                />
                <Input
                  placeholder="URL"
                  value={resource.url}
                  onChange={(e) =>
                    handleResourceChange(resource.id, "url", e.target.value)
                  }
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveResource(resource.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleAddResource}
              className="mt-2"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Resource
            </Button>
          </div>
          <Button type="submit">Create Assignment</Button>
        </form>
      </CardContent>
    </Card>
  );
}
