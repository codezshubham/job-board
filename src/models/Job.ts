import mongoose from 'mongoose';

export interface IJob {
  _id?: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  skills: string[];
  applyUrl: string;
  slug: string;
  category: string;
  employmentType: string;
  logo?: string;
  aboutCompany?: string;
  experience?: string;
  rolesAndResponsibilities?: string;
  whyThisRoleMayBeUseful?: string;
  education?: string;
  workMode?: string;
  batchEligible?: string[];
  closingDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const JobSchema = new mongoose.Schema<IJob>(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: [String], required: true },
    applyUrl: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    employmentType: { type: String, required: true },
    logo: { type: String },
    aboutCompany: { type: String },
    experience: { type: String },
    rolesAndResponsibilities: { type: String },
    whyThisRoleMayBeUseful: { type: String },
    education: { type: String },
    workMode: { type: String, enum: ["Remote", "Hybrid", "On-site"], default: "On-site" },
    batchEligible: { type: [String], default: [] },
    closingDate: { type: Date },
  },
  { timestamps: true }
);

// Add indexes to improve query performance
JobSchema.index({ createdAt: -1 }); // often used for sorting recent jobs
JobSchema.index({ category: 1 });
JobSchema.index({ workMode: 1 });
JobSchema.index({ experience: 1 });
JobSchema.index({ location: 1 });
JobSchema.index({ company: 1 });

export default mongoose.models.Job || mongoose.model<IJob>('Job', JobSchema);
