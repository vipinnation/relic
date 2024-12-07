'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const staffMembers = [
  { id: 1, name: 'John Doe', role: 'Teacher' },
  { id: 2, name: 'Jane Smith', role: 'Admin' },
  { id: 3, name: 'Bob Johnson', role: 'Support Staff' },
]

export default function RoleManager() {
  const [selectedStaff, setSelectedStaff] = useState('')
  const [selectedRole, setSelectedRole] = useState('')

  const handleAssignRole = () => {
    // Handle role assignment (e.g., API call to update role)
    console.log(`Assigning role ${selectedRole} to staff ${selectedStaff}`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Role Manager</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select onValueChange={setSelectedStaff}>
            <SelectTrigger>
              <SelectValue placeholder="Select Staff Member" />
            </SelectTrigger>
            <SelectContent>
              {staffMembers.map(staff => (
                <SelectItem key={staff.id} value={staff.id.toString()}>{staff.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={setSelectedRole}>
            <SelectTrigger>
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Teacher">Teacher</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Support Staff">Support Staff</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleAssignRole} disabled={!selectedStaff || !selectedRole}>
            Assign Role
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

