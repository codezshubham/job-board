import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getJobs, deleteJob } from "@/app/actions/jobActions";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Edit, Trash2 } from "lucide-react";

export const revalidate = 0;

export default async function AdminDashboard() {
  const session = await getAuthSession();

  if (!session) {
    redirect("/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz/login");
  }

  const jobs = await getJobs();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Jobs</h1>
        <Link href="/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz/jobs/new" className={buttonVariants({ variant: "default" })}>
          <Plus className="w-4 h-4 mr-2" /> Add New Job
        </Link>
      </div>

      <div className="bg-background border rounded-lg overflow-hidden relative">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Date Posted</TableHead>
              <TableHead>Closing Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job: any) => (
              <TableRow key={job._id}>
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>{job.company}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>
                  {new Date(job.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {job.closingDate ? new Date(job.closingDate).toLocaleDateString() : 'N/A'}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz/jobs/${job._id}/edit`} className={buttonVariants({ variant: "outline", size: "sm" })}>
                      <Edit className="w-4 h-4" />
                    </Link>
                    <form action={async () => {
                      "use server";
                      await deleteJob(job._id);
                    }}>
                      <Button variant="destructive" size="sm" type="submit">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </form>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {jobs.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No jobs found. Click "Add New Job" to get started.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
