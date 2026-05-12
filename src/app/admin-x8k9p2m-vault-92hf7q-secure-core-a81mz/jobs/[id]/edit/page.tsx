import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import JobForm from "@/components/JobForm";
import dbConnect from "@/lib/mongodb";
import Job from "@/models/Job";

export default async function EditJobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getAuthSession();

  if (!session) {
    redirect("/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz/login");
  }

  await dbConnect();
  const job = await Job.findById(id).lean();

  if (!job) {
    redirect("/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Job</h1>
      <JobForm initialData={JSON.parse(JSON.stringify(job))} />
    </div>
  );
}
