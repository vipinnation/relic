import SchoolLayout from "@/components/layout/school.layout";
import AddEditStaffForm from "@/components/staff/add-edit-staff";
import AttendanceTracker from "@/components/staff/attendance-tracker";
import CommunicationTools from "@/components/staff/communication-tools";
import RoleManager from "@/components/staff/role-manager";
import SearchFilter from "@/components/staff/search-filter";
import StaffDirectory from "@/components/staff/staff-directory";

export default function StaffManagementPage() {
  return (
    <SchoolLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Staff Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <SearchFilter />
            <StaffDirectory />
          </div>
          <div>
            <AddEditStaffForm />
            <AttendanceTracker />
            <RoleManager />
            <CommunicationTools />
          </div>
        </div>
      </div>
    </SchoolLayout>
  );
}
