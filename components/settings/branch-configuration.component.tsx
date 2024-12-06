"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea" 
import { DatePicker } from "../ui/date-picker"

export function BranchConfiguration() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Branch Configuration</h2>
      <div className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="branch-name">Branch Name</Label>
          <Input type="text" id="branch-name" placeholder="Main Branch" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="branch-contact">Contact Details</Label>
          <Input
            type="tel"
            id="branch-contact"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="branch-address">Address</Label>
          <Textarea
            id="branch-address"
            placeholder="123 Education St, School City, ST 12345"
          />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Academic Year Setup</h3>
        <div className="flex space-x-4">
          <div>
            <Label>Start Date</Label>
            {/* <DatePicker date={startDate} setDate={setStartDate} /> */}
          </div>
          <div>
            <Label>End Date</Label>
            {/* <DatePicker date={endDate} setDate={setEndDate} /> */}
          </div>
        </div>
      </div>
      <Button>Save Configuration</Button>
    </div>
  )
}

