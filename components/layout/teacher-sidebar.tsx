"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LayoutDashboard, Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/teacher",
  },
  {
    label: "Classes",
    icon: Building2,
    href: "/teacher/classes",
  },
  {
    label: "Attendance",
    icon: Building2,
    href: "/teacher/attendance",
  },
  {
    label: "Students",
    icon: Building2,
    href: "/teacher/students",
  },
  {
    label: "Gradebook",
    icon: Building2,
    href: "/teacher/gradebook",
  },
  {
    label: "Lesson Plan",
    icon: Building2,
    href: "/teacher/lesson-plan",
  },
  {
    label: "Assignment",
    icon: Building2,
    href: "/teacher/assignment",
  },
];

function TeacherSidebar() {
  const pathname = usePathname();

  return (
    <div className="py-4 flex flex-col h-full bg-secondary/10 mt-16">
      <div className="px-3 py-2 flex-1">
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-1">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={pathname === route.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname === route.href && "bg-secondary"
                )}
                asChild
              >
                <Link href={route.href}>
                  <route.icon className="h-5 w-5 mr-3" />
                  {route.label}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default TeacherSidebar;
