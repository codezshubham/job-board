"use server";

import dbConnect from "@/lib/mongodb";
import Job from "@/models/Job";
import { revalidatePath } from "next/cache";

export async function getJobs(query = {}, sort: Record<string, 1 | -1> = { createdAt: -1 }) {
  await dbConnect();
  try {
    const jobs = await Job.find(query).sort(sort).lean();
    return JSON.parse(JSON.stringify(jobs));
  } catch (error) {
    console.error("Failed to fetch jobs", error);
    return [];
  }
}

export async function getJobBySlug(slug: string) {
  await dbConnect();
  try {
    const job = await Job.findOne({ slug }).lean();
    return JSON.parse(JSON.stringify(job));
  } catch (error) {
    console.error("Failed to fetch job", error);
    return null;
  }
}

export async function createJob(formData: any) {
  await dbConnect();
  try {
    // Generate slug from title and company
    const baseSlug = `${formData.title}-${formData.company}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
      
    let slug = baseSlug;
    let counter = 1;
    while (await Job.findOne({ slug })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    const newJob = new Job({
      ...formData,
      slug,
      closingDate: formData.closingDate ? new Date(formData.closingDate) : undefined,
      skills: formData.skills.split(",").map((s: string) => s.trim()),
    });

    await newJob.save();
    revalidatePath("/");
    revalidatePath("/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to create job", error);
    return { success: false, error: error.message };
  }
}

export async function updateJob(id: string, formData: any) {
  await dbConnect();
  try {
    const updateData = {
      ...formData,
      closingDate: formData.closingDate ? new Date(formData.closingDate) : undefined,
      skills: typeof formData.skills === 'string' ? formData.skills.split(",").map((s: string) => s.trim()) : formData.skills,
    };
    
    await Job.findByIdAndUpdate(id, updateData);
    revalidatePath("/");
    revalidatePath("/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz");
    revalidatePath(`/jobs/${formData.slug}`);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteJob(id: string) {
  await dbConnect();
  try {
    await Job.findByIdAndDelete(id);
    revalidatePath("/");
    revalidatePath("/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
