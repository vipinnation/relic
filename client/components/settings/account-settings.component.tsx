"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function AccountSettings() {
  const [connectedDevices] = useState([
    { id: 1, name: "iPhone 12", lastActive: "2023-05-15 10:30 AM" },
    { id: 2, name: "MacBook Pro", lastActive: "2023-05-15 11:45 AM" },
    { id: 3, name: "iPad Air", lastActive: "2023-05-14 03:20 PM" },
  ])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Account Settings</h2>
      <div className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="current-password">Current Password</Label>
          <Input type="password" id="current-password" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="new-password">New Password</Label>
          <Input type="password" id="new-password" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="confirm-password">Confirm New Password</Label>
          <Input type="password" id="confirm-password" />
        </div>
        <Button>Change Password</Button>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Connected Devices</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Device</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {connectedDevices.map((device) => (
              <TableRow key={device.id}>
                <TableCell>{device.name}</TableCell>
                <TableCell>{device.lastActive}</TableCell>
                <TableCell>
                  <Button variant="destructive" size="sm">
                    Sign Out
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

