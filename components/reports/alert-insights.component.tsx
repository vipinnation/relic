import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, TrendingDown, TrendingUp } from "lucide-react";

export default function AlertsAndInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alerts and Insights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Low Attendance Alert</AlertTitle>
          <AlertDescription>
            Class 9B has shown a 15% decrease in attendance over the last month.
          </AlertDescription>
        </Alert>
        <Alert>
          <TrendingUp className="h-4 w-4" />
          <AlertTitle>Performance Improvement</AlertTitle>
          <AlertDescription>
            The Science department has shown a 10% increase in overall grades
            this quarter.
          </AlertDescription>
        </Alert>
        <Alert>
          <TrendingDown className="h-4 w-4" />
          <AlertTitle>Fee Collection Reminder</AlertTitle>
          <AlertDescription>
            25% of students have overdue fees. Consider sending reminders to
            parents.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
