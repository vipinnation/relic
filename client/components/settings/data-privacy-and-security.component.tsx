"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DataPrivacyAndSecurity() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Data Privacy and Security</h2>
      <div className="space-y-4">
        <Button variant="outline">Download Account Data</Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">Delete Account</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button variant="destructive">Delete Account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Legal Documents</h3>
        <div className="space-x-2">
          <Button variant="link">Privacy Policy</Button>
          <Button variant="link">Terms of Service</Button>
        </div>
      </div>
    </div>
  )
}

