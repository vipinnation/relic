"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddEditClassForm() {
  const [classData, setClassData] = useState({
    name: "",
    branch: "",
    teacher: "",
    schedule: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Class data submitted:", classData);
    // Here you would typically send this data to your backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Class Name</Label>
        <Input
          id="name"
          value={classData.name}
          onChange={(e) => setClassData({ ...classData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="branch">Branch</Label>
        <Select
          onValueChange={(value) =>
            setClassData({ ...classData, branch: value })
          }
        >
          <SelectTrigger id="branch">
            <SelectValue placeholder="Select Branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Main Campus">Main Campus</SelectItem>
            <SelectItem value="North Campus">North Campus</SelectItem>
            <SelectItem value="South Campus">South Campus</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="teacher">Main Teacher</Label>
        <Input
          id="teacher"
          value={classData.teacher}
          onChange={(e) =>
            setClassData({ ...classData, teacher: e.target.value })
          }
          required
        />
      </div>
      <div>
        <Label htmlFor="schedule">Schedule</Label>
        <Input
          id="schedule"
          value={classData.schedule}
          onChange={(e) =>
            setClassData({ ...classData, schedule: e.target.value })
          }
          placeholder="e.g., Mon-Fri 8:00 AM - 3:00 PM"
          required
        />
      </div>
      <Button type="submit">Save Class</Button>
    </form>
  );
}
