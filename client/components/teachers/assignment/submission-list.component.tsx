"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAssignmentData, Submission } from "@/utils/assignmentData";

export default function SubmissionList() {
  const { submissions, assignments, updateSubmission } = useAssignmentData();
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);
  const [grade, setGrade] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");

  const handleGrade = (submission: Submission) => {
    setSelectedSubmission(submission);
    setGrade(submission.grade?.toString() || "");
    setFeedback(submission.feedback || "");
  };

  const handleSubmitGrade = () => {
    if (selectedSubmission) {
      const updatedSubmission = {
        ...selectedSubmission,
        grade: parseFloat(grade),
        feedback,
      };
      updateSubmission(updatedSubmission);
      setSelectedSubmission(null);
      setGrade("");
      setFeedback("");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submissions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Assignment</TableHead>
              <TableHead>Submission Date</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell>{submission.studentName}</TableCell>
                <TableCell>
                  {
                    assignments.find((a) => a.id === submission.assignmentId)
                      ?.title
                  }
                </TableCell>
                <TableCell>{submission.submissionDate}</TableCell>
                <TableCell>
                  {submission.grade !== undefined
                    ? `${submission.grade}/100`
                    : "Not graded"}
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleGrade(submission)}
                      >
                        Grade
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Grade Submission</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="grade"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Grade (out of 100)
                          </label>
                          <Input
                            id="grade"
                            type="number"
                            min="0"
                            max="100"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="feedback"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Feedback
                          </label>
                          <Textarea
                            id="feedback"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                          />
                        </div>
                        <Button onClick={handleSubmitGrade}>
                          Submit Grade
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
