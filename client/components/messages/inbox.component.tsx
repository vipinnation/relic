import { getInboxMessages } from "@/utils/messageUtils";
import { useState, useEffect } from "react";
import MessageThread from "./message-thread.component";
import MessageItem from "./messageitem.component";

export default function Inbox({ searchTerm, filter }: any) {
  const [messages, setMessages] = useState<any>([]);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  useEffect(() => {
    setMessages([]);
  }, []);

  const filteredMessages = messages.filter(
    (message: any) =>
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.sender.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 border-r">
        {filteredMessages.map((message: any) => (
          <MessageItem
            key={message.id}
            message={message}
            onClick={() => setSelectedMessage(message)}
          />
        ))}
      </div>
      <div className="col-span-2">
        {selectedMessage ? (
          <MessageThread message={selectedMessage} />
        ) : (
          <p className="text-center text-gray-500 mt-4">
            Select a message to view
          </p>
        )}
      </div>
    </div>
  );
}
