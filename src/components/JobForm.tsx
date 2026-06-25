"use client";

import Image from "next/image";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createJob, updateJob } from "@/app/actions/jobActions";
import type { JobMutationInput, SerializedJob } from "@/lib/job-types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type JobFormProps = {
  initialData?: SerializedJob | null;
};

export default function JobForm({ initialData = null }: JobFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<JobMutationInput>({
    title: initialData?.title || "",
    company: initialData?.company || "",
    location: initialData?.location || "",
    salary: initialData?.salary || "",
    category: initialData?.category || "",
    employmentType: initialData?.employmentType || "",
    applyUrl: initialData?.applyUrl || "",
    logo: initialData?.logo || "",
    aboutCompany: initialData?.aboutCompany || "",
    experience: initialData?.experience || "",
    rolesAndResponsibilities: initialData?.rolesAndResponsibilities || "",
    education: initialData?.education || "",
    workMode: initialData?.workMode || "On-site",
    batchEligible: initialData?.batchEligible || [],
    closingDate: initialData?.closingDate ? new Date(initialData.closingDate).toISOString().split('T')[0] : "",
    skills: initialData?.skills?.join(", ") || "",
    description: initialData?.description || "",
    slug: initialData?.slug || "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, logo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBatchChange = (year: string) => {
    setFormData((prev) => {
      const currentBatches = prev.batchEligible || [];
      if (currentBatches.includes(year)) {
        return { ...prev, batchEligible: currentBatches.filter((y: string) => y !== year) };
      } else {
        return { ...prev, batchEligible: [...currentBatches, year] };
      }
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    let res;
    if (initialData) {
      res = await updateJob(initialData._id, formData);
    } else {
      res = await createJob(formData);
    }

    setLoading(false);

    if (res.success) {
      router.push("/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz");
    } else {
      alert("Error: " + res.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title">Job Title</Label>
          <Input id="title" name="title" required value={formData.title} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" required value={formData.company} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" required value={formData.location} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="salary">Salary (e.g. $80k - $120k)</Label>
          <Input id="salary" name="salary" required value={formData.salary} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input id="category" name="category" required value={formData.category} onChange={handleChange} placeholder="e.g. Engineering, Marketing" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="employmentType">Employment Type</Label>
          <Input id="employmentType" name="employmentType" required value={formData.employmentType} onChange={handleChange} placeholder="e.g. Full-time, Contract" />
        </div>
        <div className="space-y-3">
          <Label>Work Mode</Label>
          <div className="flex flex-col gap-2 mt-2">
            {["On-site", "Hybrid", "Remote"].map((mode) => (
              <label key={mode} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="workMode"
                  value={mode}
                  checked={formData.workMode === mode}
                  onChange={handleChange}
                  required
                  className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                />
                <span className="text-sm font-medium">{mode}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="applyUrl">Apply URL</Label>
          <Input id="applyUrl" name="applyUrl" type="url" required value={formData.applyUrl} onChange={handleChange} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="closingDate">Closing Date (Optional)</Label>
          <Input id="closingDate" name="closingDate" type="date" value={formData.closingDate} onChange={handleChange} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="logo">Company Logo (PNG/JPEG image - optional)</Label>
          <Input id="logo" name="logo" type="file" accept="image/png, image/jpeg" onChange={handleFileChange} />
          {formData.logo && (
            <div className="mt-2">
              <span className="text-xs text-muted-foreground block mb-1">Preview:</span>
              <Image
                src={formData.logo}
                alt="Logo preview"
                width={64}
                height={64}
                unoptimized
                className="h-16 w-16 object-contain border p-1 rounded bg-white"
              />
            </div>
          )}
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="aboutCompany">About Company (Optional)</Label>
          <Textarea id="aboutCompany" name="aboutCompany" rows={4} value={formData.aboutCompany} onChange={handleChange} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="experience">Experience Required (Optional)</Label>
          <Input id="experience" name="experience" value={formData.experience} onChange={handleChange} placeholder="e.g. 2+ years" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="rolesAndResponsibilities">Roles & Responsibilities (Optional)</Label>
          <Textarea id="rolesAndResponsibilities" name="rolesAndResponsibilities" rows={5} value={formData.rolesAndResponsibilities} onChange={handleChange} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="education">Education Requirements (Optional)</Label>
          <Input id="education" name="education" value={formData.education} onChange={handleChange} placeholder="e.g. Bachelor's Degree in Computer Science" />
        </div>
        <div className="space-y-3 md:col-span-2 p-4 border rounded-md bg-secondary/10">
          <Label className="text-base font-semibold">Batch Eligible</Label>
          <div className="flex flex-wrap gap-4 mt-2">
            {["2022", "2023", "2024", "2025", "2026", "2027", "2028"].map(year => (
              <div key={year} className="flex items-center space-x-2 bg-background px-3 py-1.5 rounded-md border shadow-sm cursor-pointer hover:border-primary transition-colors" onClick={() => handleBatchChange(year)}>
                <input
                  type="checkbox"
                  id={`batch-${year}`}
                  name="batchEligible"
                  value={year}
                  checked={formData.batchEligible.includes(year)}
                  onChange={() => {}} // Handle empty to avoid React warning, clicking parent div manages state
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer pointer-events-none"
                />
                <Label htmlFor={`batch-${year}`} className="font-medium cursor-pointer pointer-events-none">{year}</Label>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="skills">Skills (comma separated)</Label>
          <Input id="skills" name="skills" required value={formData.skills} onChange={handleChange} placeholder="React, Node.js, TypeScript" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="description">Job Description</Label>
          <Textarea id="description" name="description" rows={8} required value={formData.description} onChange={handleChange} />
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : initialData ? "Update Job" : "Create Job"}
        </Button>
      </div>
    </form>
  );
}
