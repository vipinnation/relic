import SchoolLayout from "@/components/layout/school.layout";
import { AccountSettings } from "@/components/settings/account-settings.component";
import { AuditLogs } from "@/components/settings/audit-logs.component";
import { BranchConfiguration } from "@/components/settings/branch-configuration.component";
import { CommunicationSettings } from "@/components/settings/communication-settings.component";
import { DataPrivacyAndSecurity } from "@/components/settings/data-privacy-and-security.component";
import { NotificationPreferences } from "@/components/settings/notification-preferences.component";
import { PermissionsAndRoles } from "@/components/settings/permissions-and-roles.component.component";
import { SystemPreferences } from "@/components/settings/system-preferences.component";
import { UserProfileSettings } from "@/components/settings/user-profile-settings.component";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <SchoolLayout>
      {" "}
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="branch">Branch</TabsTrigger>
            <TabsTrigger value="permissions">Permissions</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="audit">Audit Logs</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <UserProfileSettings />
          </TabsContent>
          <TabsContent value="account">
            <AccountSettings />
          </TabsContent>
          <TabsContent value="notifications">
            <NotificationPreferences />
          </TabsContent>
          <TabsContent value="branch">
            <BranchConfiguration />
          </TabsContent>
          <TabsContent value="permissions">
            <PermissionsAndRoles />
          </TabsContent>
          <TabsContent value="system">
            <SystemPreferences />
          </TabsContent>
          <TabsContent value="communication">
            <CommunicationSettings />
          </TabsContent>
          <TabsContent value="privacy">
            <DataPrivacyAndSecurity />
          </TabsContent>
          <TabsContent value="audit">
            <AuditLogs />
          </TabsContent>
        </Tabs>
      </div>
    </SchoolLayout>
  );
}
