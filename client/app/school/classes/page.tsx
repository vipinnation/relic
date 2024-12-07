import AddEditClassForm from "@/components/classes/add-edit-class.component";
import ClassDetails from "@/components/classes/class-details.component";
import ClassesOverview from "@/components/classes/classes-overview.component";
import SchoolLayout from "@/components/layout/school.layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ClassesManagementPage() {
  return (
    <SchoolLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Classes Management</h1>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Classes Overview</TabsTrigger>
            <TabsTrigger value="details">Class Details</TabsTrigger>
            <TabsTrigger value="add">Add/Edit Class</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <ClassesOverview />
          </TabsContent>
          <TabsContent value="details">
            <ClassDetails />
          </TabsContent>
          <TabsContent value="add">
            <AddEditClassForm />
          </TabsContent>
        </Tabs>
      </div>
    </SchoolLayout>
  );
}
