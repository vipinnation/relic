import { Bell } from "lucide-react";

const notificationData = [
  { message: "New message from parent", time: "5 minutes ago" },
  { message: "Attendance update for Math 101", time: "1 hour ago" },
  { message: "Reminder: Submit grades by Friday", time: "2 hours ago" },
];

export function Notifications() {
  return (
    <div className="space-y-8">
      {notificationData.map((item, index) => (
        <div key={index} className="flex items-center">
          <Bell className="mr-4 h-4 w-4 text-muted-foreground" />
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.message}</p>
            <p className="text-sm text-muted-foreground">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
