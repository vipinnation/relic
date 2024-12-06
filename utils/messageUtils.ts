const mockMessages = [
  {
    id: 1,
    subject: 'Parent-Teacher Conference',
    sender: { id: 101, name: 'John Doe', role: 'teacher' },
    recipient: { id: 201, name: 'Jane Smith', role: 'parent' },
    timestamp: '2023-06-01T10:00:00Z',
    unread: true,
    thread: [
      {
        sender: { id: 101, name: 'John Doe', role: 'teacher' },
        timestamp: '2023-06-01T10:00:00Z',
        content: 'Dear Parent, I would like to schedule a parent-teacher conference to discuss your child\'s progress.'
      }
    ]
  },
  {
    id: 2,
    subject: 'Field Trip Permission',
    sender: { id: 102, name: 'Alice Johnson', role: 'teacher' },
    recipient: { id: 202, name: 'Bob Brown', role: 'parent' },
    timestamp: '2023-06-02T09:30:00Z',
    unread: false,
    thread: [
      {
        sender: { id: 102, name: 'Alice Johnson', role: 'teacher' },
        timestamp: '2023-06-02T09:30:00Z',
        content: 'Please sign and return the attached permission slip for the upcoming field trip.'
      }
    ]
  },
  // Add more mock messages as needed
]

export function getInboxMessages() {
  return mockMessages
}

export function getSentMessages() {
  return mockMessages.map(msg => ({
    ...msg,
    sender: msg.recipient,
    recipient: msg.sender
  }))
}

