'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const staffMembers = [
  { id: 1, name: 'John Doe', role: 'Teacher', branch: 'Main Campus', photo: '/placeholder.svg?height=40&width=40' },
  { id: 2, name: 'Jane Smith', role: 'Admin', branch: 'East Branch', photo: '/placeholder.svg?height=40&width=40' },
  { id: 3, name: 'Bob Johnson', role: 'Support Staff', branch: 'West Branch', photo: '/placeholder.svg?height=40&width=40' },
]

export default function StaffDirectory() {
  const [roleFilter, setRoleFilter] = useState('All')
  const [branchFilter, setBranchFilter] = useState('All')

  const filteredStaff = staffMembers.filter(staff => 
    (roleFilter === 'All' || staff.role === roleFilter) &&
    (branchFilter === 'All' || staff.branch === branchFilter)
  )

  return (
    <Card>
      <CardContent>
        <h2 className="text-2xl font-semibold mb-4">Staff Directory</h2>
        <div className="flex gap-4 mb-4">
          <Select onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Roles</SelectItem>
              <SelectItem value="Teacher">Teacher</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Support Staff">Support Staff</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setBranchFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Branches</SelectItem>
              <SelectItem value="Main Campus">Main Campus</SelectItem>
              <SelectItem value="East Branch">East Branch</SelectItem>
              <SelectItem value="West Branch">West Branch</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ul className="space-y-4">
          {filteredStaff.map(staff => (
            <li key={staff.id} className="flex items-center gap-4 p-4 border rounded-lg">
              <Avatar>
                <AvatarImage src={staff.photo} alt={staff.name} />
                <AvatarFallback>{staff.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{staff.name}</h3>
                <p className="text-sm text-gray-500">{staff.branch}</p>
              </div>
              <Badge>{staff.role}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

