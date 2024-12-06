import SchoolLayout from "@/components/layout/school.layout";
import AlertsAndInsights from "@/components/reports/alert-insights.component";
import CustomReportGenerator from "@/components/reports/customreport-genertor.component";
import ReportCategories from "@/components/reports/report-categories.component";
import ReportsDashboard from "@/components/reports/reports-dashboard.component";

export default function ReportsPage() {
  return (
    <SchoolLayout>
      {" "}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">School Reports</h1>
        <ReportsDashboard />
        <ReportCategories />
        <CustomReportGenerator />
        <AlertsAndInsights />
      </div>
    </SchoolLayout>
  );
}
