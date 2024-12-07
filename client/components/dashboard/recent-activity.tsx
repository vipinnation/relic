"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const activities = [
  {
    user: "John Smith",
    action: "added new student",
    target: "Sarah Johnson",
    time: "2 minutes ago",
    avatar: "/avatars/01.png",
  },
  {
    user: "Emily Davis",
    action: "updated class schedule",
    target: "Grade 10-A",
    time: "1 hour ago",
    avatar: "/avatars/02.png",
  },
  {
    user: "Michael Brown",
    action: "submitted grades",
    target: "Mathematics Test",
    time: "3 hours ago",
    avatar: "/avatars/03.png",
  },
  {
    user: "Lisa Wilson",
    action: "marked attendance",
    target: "Grade 8-B",
    time: "5 hours ago",
    avatar: "/avatars/04.png",
  },
];

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.avatar} alt="Avatar" />
            <AvatarFallback>
              {activity.user.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user}{" "}
              <span className="text-muted-foreground">{activity.action}</span>{" "}
              {activity.target}
            </p>
            <p className="text-sm text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}