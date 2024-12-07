"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddEditStaffForm() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    branch: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission (e.g., API call to add/edit staff)
    console.log("Form submitted:", formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add/Edit Staff</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Select
            name="role"
            onValueChange={(value) => setFormData({ ...formData, role: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Teacher">Teacher</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Support Staff">Support Staff</SelectItem>
            </SelectContent>
          </Select>
          <Select
            name="branch"
            onValueChange={(value) =>
              setFormData({ ...formData, branch: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Main Campus">Main Campus</SelectItem>
              <SelectItem value="East Branch">East Branch</SelectItem>
              <SelectItem value="West Branch">West Branch</SelectItem>
            </SelectContent>
          </Select>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Button type="submit">Save Staff</Button>
        </form>
      </CardContent>
    </Card>
  );
}
