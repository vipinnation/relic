import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { formatDistanceToNow } from "date-fns";

export default function MessageThread({ message, isSent = false }: any) {
  const [reply, setReply] = useState("");

  const handleReply = (e: any) => {
    e.preventDefault();
    // Here you would typically send the reply to your API
    console.log("Reply sent:", reply);
    setReply("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{message.subject}</h2>
      <div className="space-y-4">
        {message.thread.map((msg: any, index: any) => (
          <div key={index} className="bg-gray-100 p-4 rounded">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium">{msg.sender.name}</span>
              <span className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(msg.timestamp), {
                  addSuffix: true,
                })}
              </span>
            </div>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      {!isSent && (
        <form onSubmit={handleReply} className="mt-4">
          <Textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Type your reply here..."
            className="mb-2"
          />
          <Button type="submit">Send Reply</Button>
        </form>
      )}
    </div>
  );
}
