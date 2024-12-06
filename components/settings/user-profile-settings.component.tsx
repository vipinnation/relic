"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserProfileSettings() {
  const [twoFAEnabled, setTwoFAEnabled] = useState(false)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">User Profile Settings</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Profile picture" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <Button>Change Picture</Button>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="John Doe" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="john.doe@example.com" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input type="tel" id="phone" placeholder="+1 (555) 123-4567" />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="two-fa"
            checked={twoFAEnabled}
            onCheckedChange={setTwoFAEnabled}
          />
          <Label htmlFor="two-fa">Enable Two-Factor Authentication</Label>
        </div>
      </div>
      <Button>Save Changes</Button>
    </div>
  )
}

