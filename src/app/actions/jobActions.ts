"use server";

import type { JobActionResult, JobMutationInput, SerializedJob } from "@/lib/job-types";
import dbConnect from "@/lib/mongodb";
import Job from "@/models/Job";
import { revalidatePath } from "next/cache";

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "An unexpected error occurred.";
}

function normalizeSkills(skills: JobMutationInput["skills"]) {
  if (Array.isArray(skills)) {
    return skills.map((skill) => skill.trim()).filter(Boolean);
  }

  return skills
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);
}

export async function getJobs(
  query = {},
  sort: Record<string, 1 | -1> = { createdAt: -1 },
  limit?: number
): Promise<SerializedJob[]> {
  await dbConnect();
  try {
    let queryBuilder = Job.find(query).sort(sort).lean();
    if (limit) {
      queryBuilder = queryBuilder.limit(limit);
    }
    const jobs = (await queryBuilder) as SerializedJob[];
    return JSON.parse(JSON.stringify(jobs)) as SerializedJob[];
  } catch (error) {
    console.error("Failed to fetch jobs", error);
    return [];
  }
}

export async function getJobBySlug(slug: string): Promise<SerializedJob | null> {
  await dbConnect();
  try {
    const job = await Job.findOne({ slug }).lean();
    if (!job) {
      return null;
    }

    return JSON.parse(JSON.stringify(job)) as SerializedJob;
  } catch (error) {
    console.error("Failed to fetch job", error);
    return null;
  }
}

export async function createJob(formData: JobMutationInput): Promise<JobActionResult> {
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
      skills: normalizeSkills(formData.skills),
    });

    await newJob.save();
    revalidatePath("/");
    revalidatePath("/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz");
    return { success: true };
  } catch (error) {
    console.error("Failed to create job", error);
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function updateJob(
  id: string,
  formData: JobMutationInput
): Promise<JobActionResult> {
  await dbConnect();
  try {
    const updateData = {
      ...formData,
      closingDate: formData.closingDate ? new Date(formData.closingDate) : undefined,
      skills: normalizeSkills(formData.skills),
    };

    await Job.findByIdAndUpdate(id, updateData);
    revalidatePath("/");
    revalidatePath("/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz");
    revalidatePath(`/jobs/${formData.slug}`);
    return { success: true };
  } catch (error) {
    return { success: false, error: getErrorMessage(error) };
  }
}

export async function deleteJob(id: string): Promise<JobActionResult> {
  await dbConnect();
  try {
    await Job.findByIdAndDelete(id);
    revalidatePath("/");
    revalidatePath("/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz");
    return { success: true };
  } catch (error) {
    return { success: false, error: getErrorMessage(error) };
  }
}
