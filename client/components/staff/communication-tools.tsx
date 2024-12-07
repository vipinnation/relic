'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function CommunicationTools() {
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    // Handle sending message (e.g., API call to send message)
    console.log('Sending message:', message)
    setMessage('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Communication Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={handleSendMessage} disabled={!message.trim()}>
            Send Message
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

