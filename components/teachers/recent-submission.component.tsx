import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const submissionsData = [
  {
    student: "Alice Johnson",
    class: "Math 101",
    assignment: "Homework 3",
    submittedAt: "2023-06-15 14:30",
  },
  {
    student: "Bob Smith",
    class: "Science 202",
    assignment: "Lab Report 2",
    submittedAt: "2023-06-14 16:45",
  },
  {
    student: "Charlie Brown",
    class: "History 301",
    assignment: "Essay Draft",
    submittedAt: "2023-06-13 09:15",
  },
  {
    student: "Diana Ross",
    class: "Math 101",
    assignment: "Quiz 2",
    submittedAt: "2023-06-12 11:00",
  },
];

export function RecentSubmissions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student</TableHead>
          <TableHead>Class</TableHead>
          <TableHead>Assignment</TableHead>
          <TableHead>Submitted At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissionsData.map((submission, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{submission.student}</TableCell>
            <TableCell>{submission.class}</TableCell>
            <TableCell>{submission.assignment}</TableCell>
            <TableCell>{submission.submittedAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
