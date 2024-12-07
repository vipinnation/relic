"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function CommunicationSettings() {
  const [autoResponder, setAutoResponder] = useState(false)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Communication Settings</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="default-template">Default Message Template</Label>
          <Textarea
            id="default-template"
            placeholder="Enter your default message template here..."
            className="min-h-[100px]"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="auto-responder"
            checked={autoResponder}
            onCheckedChange={setAutoResponder}
          />
          <Label htmlFor="auto-responder">Enable Auto-Responder</Label>
        </div>
        {autoResponder && (
          <div className="space-y-2">
            <Label htmlFor="auto-response">Auto-Response Message</Label>
            <Textarea
              id="auto-response"
              placeholder="Enter your auto-response message here..."
              className="min-h-[100px]"
            />
          </div>
        )}
      </div>
      <Button>Save Communication Settings</Button>
    </div>
  )
}

