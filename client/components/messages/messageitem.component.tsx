import { formatDistanceToNow } from "date-fns";

export default function MessageItem({ message, isSent = false, onClick }: any) {
  return (
    <div
      className={`p-4 border-b cursor-pointer hover:bg-gray-100 ${
        message.unread ? "font-bold" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <span className="text-sm font-medium">
          {isSent ? message.recipient.name : message.sender.name}
        </span>
        <span className="text-xs text-gray-500">
          {formatDistanceToNow(new Date(message.timestamp), {
            addSuffix: true,
          })}
        </span>
      </div>
      <div className="text-sm truncate">{message.subject}</div>
    </div>
  );
}
