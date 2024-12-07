"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "@/components/dashboard/overview";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { Users, GraduationCap, Building2, BookOpen } from "lucide-react";
import AttendanceLineChart from "@/components/school/attendance.chart";
import RevenueLineChart from "@/components/school/revenue.chart";
import ExpenseBarChart from "@/components/school/expense.chart";
import NetProfitLossChart from "@/components/school/net-profile.chart";
import OutstandingPaymentsChart from "@/components/school/outstanding.chart";
import SchoolLayout from "@/components/layout/school.layout";

export default function DashboardPage() {
  return (
    <SchoolLayout>
      <div className="p-8 bg-background h-full">
        <h1 className="text-3xl font-bold mb-6">
          School Administration Dashboard
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[...new Array(4)].map((_, index) => (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Students
                </CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="w-full h-full my-2 mt-6">
          <h2 className="text-lg font-medium mb-2">Attendance Chart</h2>
          <AttendanceLineChart />
        </div>

        <div className="w-full h-full my-2">
          <h2 className="text-lg font-medium mb-2">Revenue Chart</h2>
          <RevenueLineChart />
        </div>

        <div className="w-full h-full my-2">
          <h2 className="text-lg font-medium mb-2">Expense Chart</h2>
          <ExpenseBarChart />
        </div>

        <div className="w-full h-full my-2">
          <h2 className="text-lg font-medium mb-2">Net Profit</h2>
          <NetProfitLossChart />
        </div>

        <div className="w-full h-full my-2">
          <h2 className="text-lg font-medium mb-2">Outstanding Payment</h2>
          <OutstandingPaymentsChart />
        </div>

        {/* <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer
              config={{
                revenue: {
                  label: 'Revenue',
                  color: 'hsl(var(--chart-3))'
                }
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="revenue" fill="var(--color-revenue)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>School events in the near future</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <li key={index} className="flex items-center">
                  <CalendarDays className="h-5 w-5 text-muted-foreground mr-2" />
                  <span className="text-sm font-medium mr-2">{event.date}:</span>
                  <span className="text-sm text-muted-foreground">{event.event}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div> */}
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentActivity />
            </CardContent>
          </Card>
        </div>
      </div>
    </SchoolLayout>
  );
}
