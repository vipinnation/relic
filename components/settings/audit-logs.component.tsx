"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function AuditLogs() {
  const [logs] = useState([
    { id: 1, action: "User Login", user: "john.doe", timestamp: "2023-05-15 10:30:00" },
    { id: 2, action: "Password Change", user: "jane.smith", timestamp: "2023-05-15 11:45:00" },
    { id: 3, action: "Role Update", user: "admin", timestamp: "2023-05-14 15:20:00" },
  ])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Audit Logs</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Action</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Timestamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log) => (
            <TableRow key={log.id}>
              <TableCell>{log.action}</TableCell>
              <TableCell>{log.user}</TableCell>
              <TableCell>{log.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

