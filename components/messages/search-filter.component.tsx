import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchFilter({ onSearch, onFilter }: any) {
  return (
    <div className="flex space-x-2">
      <Input
        placeholder="Search messages..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-64"
      />
      <Select onValueChange={(value) => onFilter({ senderType: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by sender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="teacher">Teachers</SelectItem>
          <SelectItem value="parent">Parents</SelectItem>
          <SelectItem value="student">Students</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => onFilter({ messageType: value })}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="read">Read</SelectItem>
          <SelectItem value="unread">Unread</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
