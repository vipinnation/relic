"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BranchList } from "@/components/branches/branch-list";
import { AddBranchDialog } from "@/components/branches/add-branch-dialog";
import MainLayout from "@/components/layout/main.layout";
import SchoolLayout from "@/components/layout/school.layout";

export default function BranchesPage() {
  const [open, setOpen] = useState(false);

  return (
    <SchoolLayout>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Branches</h2>
          <div className="flex items-center space-x-2">
            <Button onClick={() => setOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Branch
            </Button>
          </div>
        </div>
        <BranchList />
        <AddBranchDialog open={open} onOpenChange={setOpen} />
      </div>
    </SchoolLayout>
  );
}
