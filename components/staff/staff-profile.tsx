import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function StaffProfile({ staff }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Staff Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={staff.photo} alt={staff.name} />
            <AvatarFallback>
              {staff.name
                .split(" ")
                .map((n:any) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">{staff.name}</h3>
            <p className="text-gray-500">{staff.role}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Personal Information</h4>
            <p>Date of Birth: {staff.dob}</p>
            <p>Contact: {staff.contact}</p>
          </div>
          <div>
            <h4 className="font-semibold">Employment Details</h4>
            <p>Department: {staff.department}</p>
            <p>Branch: {staff.branch}</p>
            <p>Joining Date: {staff.joiningDate}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
