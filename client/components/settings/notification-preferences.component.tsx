"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function NotificationPreferences() {
  const [emailNotifications, setEmailNotifications] = useState({
    newMessages: true,
    announcements: true,
  })
  const [inAppNotifications, setInAppNotifications] = useState({
    attendanceAlerts: true,
    performanceAlerts: false,
  })

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Notification Preferences</h2>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Email Notifications</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Switch
              id="new-messages"
              checked={emailNotifications.newMessages}
              onCheckedChange={(checked) =>
                setEmailNotifications((prev) => ({
                  ...prev,
                  newMessages: checked,
                }))
              }
            />
            <Label htmlFor="new-messages">New Messages</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="announcements"
              checked={emailNotifications.announcements}
              onCheckedChange={(checked) =>
                setEmailNotifications((prev) => ({
                  ...prev,
                  announcements: checked,
                }))
              }
            />
            <Label htmlFor="announcements">Announcements</Label>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">In-App Notifications</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Switch
              id="attendance-alerts"
              checked={inAppNotifications.attendanceAlerts}
              onCheckedChange={(checked) =>
                setInAppNotifications((prev) => ({
                  ...prev,
                  attendanceAlerts: checked,
                }))
              }
            />
            <Label htmlFor="attendance-alerts">Attendance Alerts</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="performance-alerts"
              checked={inAppNotifications.performanceAlerts}
              onCheckedChange={(checked) =>
                setInAppNotifications((prev) => ({
                  ...prev,
                  performanceAlerts: checked,
                }))
              }
            />
            <Label htmlFor="performance-alerts">Performance Alerts</Label>
          </div>
        </div>
      </div>
      <Button>Save Preferences</Button>
    </div>
  )
}

