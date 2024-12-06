"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import ComposeMessage from "@/components/messages/compose-message.component";
import SentMessages from "@/components/messages/sent-message.component";
import SearchFilter from "@/components/messages/search-filter.component";
import Inbox from "@/components/messages/inbox.component";
import SchoolLayout from "@/components/layout/school.layout";
export default function MessagesPage() {
  const [showCompose, setShowCompose] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({
    dateRange: null,
    senderType: null,
    messageType: null,
  });

  return (
    <SchoolLayout>
      {" "}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Messages</h1>
        <div className="flex justify-between items-center mb-4">
          <SearchFilter onSearch={setSearchTerm} onFilter={setFilter} />
          <Button onClick={() => setShowCompose(true)}>
            <PlusCircle className="mr-2 h-4 w-4" /> Compose
          </Button>
        </div>
        <Tabs defaultValue="inbox" className="w-full">
          <TabsList>
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="sent">Sent</TabsTrigger>
          </TabsList>
          <TabsContent value="inbox">
            <Inbox searchTerm={searchTerm} filter={filter} />
          </TabsContent>
          <TabsContent value="sent">
            <SentMessages searchTerm={searchTerm} filter={filter} />
          </TabsContent>
        </Tabs>
        {showCompose && (
          <ComposeMessage onClose={() => setShowCompose(false)} />
        )}
      </div>
    </SchoolLayout>
  );
}
