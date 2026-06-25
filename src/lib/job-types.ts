export type WorkMode = "On-site" | "Hybrid" | "Remote";

export interface SerializedJob {
  _id: string;
  slug: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  skills: string[];
  applyUrl: string;
  category: string;
  employmentType: string;
  logo?: string;
  aboutCompany?: string;
  experience?: string;
  rolesAndResponsibilities?: string;
  education?: string;
  workMode?: WorkMode;
  batchEligible?: string[];
  closingDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobMutationInput {
  title: string;
  company: string;
  location: string;
  salary: string;
  category: string;
  employmentType: string;
  applyUrl: string;
  logo: string;
  aboutCompany: string;
  experience: string;
  rolesAndResponsibilities: string;
  education: string;
  workMode: WorkMode;
  batchEligible: string[];
  closingDate: string;
  skills: string | string[];
  description: string;
  slug: string;
}

export type JobActionResult =
  | { success: true }
  | { success: false; error: string };
