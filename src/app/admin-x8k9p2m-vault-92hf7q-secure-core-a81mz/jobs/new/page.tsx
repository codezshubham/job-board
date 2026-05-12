import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import JobForm from "@/components/JobForm";

export default async function NewJobPage() {
  const session = await getAuthSession();

  if (!session) {
    redirect("/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz/login");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Create New Job</h1>
      <JobForm />
    </div>
  );
}
