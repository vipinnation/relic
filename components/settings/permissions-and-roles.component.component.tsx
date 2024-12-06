"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PermissionsAndRoles() {
  const [roles] = useState([
    { id: 1, name: "Administrator", accessLevel: "Full" },
    { id: 2, name: "Teacher", accessLevel: "Limited" },
    { id: 3, name: "Student", accessLevel: "Basic" },
    { id: 4, name: "Parent", accessLevel: "Basic" },
  ])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Permissions and Roles</h2>
      <div className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Role</TableHead>
              <TableHead>Access Level</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.name}</TableCell>
                <TableCell>
                  <Select defaultValue={role.accessLevel}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select access level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full">Full</SelectItem>
                      <SelectItem value="Limited">Limited</SelectItem>
                      <SelectItem value="Basic">Basic</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Button>Add New Role</Button>
    </div>
  )
}

