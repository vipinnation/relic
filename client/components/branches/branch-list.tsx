"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import type { Branch } from "@/types";

const branches: Branch[] = [
  {
    id: "1",
    name: "Main Campus",
    address: "123 Education St, City",
    phone: "+1 234-567-8900",
    email: "main@school.com",
    adminId: "admin1",
  },
  {
    id: "2",
    name: "North Branch",
    address: "456 Learning Ave, Town",
    phone: "+1 234-567-8901",
    email: "north@school.com",
    adminId: "admin2",
  },
];

export function BranchList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {branches.map((branch) => (
            <TableRow key={branch.id}>
              <TableCell className="font-medium">{branch.name}</TableCell>
              <TableCell>{branch.address}</TableCell>
              <TableCell>{branch.phone}</TableCell>
              <TableCell>{branch.email}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}