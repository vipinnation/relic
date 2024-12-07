"use client"

import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function SystemPreferences() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">System Preferences</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Label htmlFor="language">Default Language</Label>
          <Select defaultValue="en">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="timezone">Time Zone</Label>
          <Select defaultValue="utc">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc">UTC</SelectItem>
              <SelectItem value="est">Eastern Time</SelectItem>
              <SelectItem value="pst">Pacific Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="dark-mode"
            checked={darkMode}
            onCheckedChange={setDarkMode}
          />
          <Label htmlFor="dark-mode">Dark Mode</Label>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Data Management</h3>
        <div className="space-x-2">
          <Button variant="outline">Export Data</Button>
          <Button variant="outline">Import Data</Button>
        </div>
      </div>
      <Button>Save Preferences</Button>
    </div>
  )
}

