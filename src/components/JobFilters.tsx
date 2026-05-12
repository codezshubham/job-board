"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function JobFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [experience, setExperience] = useState(searchParams.get("experience") || "");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleApplyFilters = () => {
    let params = new URLSearchParams(searchParams.toString());
    
    if (search) params.set("search", search);
    else params.delete("search");
    
    if (type && type !== "all") params.set("type", type);
    else params.delete("type");
    
    if (category && category !== "all") params.set("category", category);
    else params.delete("category");
    
    if (experience && experience !== "all") params.set("experience", experience);
    else params.delete("experience");

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setSearch("");
    setType("all");
    setCategory("all");
    setExperience("all");
    router.push(pathname);
  };

  return (
    <div className="bg-card border rounded-lg p-4 mb-8 flex flex-col md:flex-row gap-4 items-end flex-wrap">
      <div className="w-full md:flex-1 md:min-w-[200px]">
        <label className="text-sm font-medium mb-1 block">Search Jobs</label>
        <Input 
          placeholder="Job title, company, or keywords..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleApplyFilters()}
        />
      </div>
      
      <div className="w-full md:w-48">
        <label className="text-sm font-medium mb-1 block">Employment Type</label>
        <Select value={type || "all"} onValueChange={(val) => setType(val || "all")}>
          <SelectTrigger>
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Full-time">Full-time</SelectItem>
            <SelectItem value="Part-time">Part-time</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem>
            <SelectItem value="Freelance">Freelance</SelectItem>
            <SelectItem value="Internship">Internship</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full md:w-48">
        <label className="text-sm font-medium mb-1 block">Category</label>
        <Select value={category || "all"} onValueChange={(val) => setCategory(val || "all")}>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Engineering">Engineering</SelectItem>
            <SelectItem value="Design">Design</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
            <SelectItem value="Sales">Sales</SelectItem>
            <SelectItem value="Product">Product</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full md:w-48">
        <label className="text-sm font-medium mb-1 block">Experience</label>
        <Select value={experience || "all"} onValueChange={(val) => setExperience(val || "all")}>
          <SelectTrigger>
            <SelectValue placeholder="Any Experience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Experience</SelectItem>
            <SelectItem value="Fresher">Fresher</SelectItem>
            <SelectItem value="1 year">1 year</SelectItem>
            <SelectItem value="2 years">2 years</SelectItem>
            <SelectItem value="3 years">3 years</SelectItem>
            <SelectItem value="5+ years">5+ years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-2 w-full md:w-auto mt-2 md:mt-0">
        <Button onClick={handleApplyFilters} className="w-full md:w-auto">Filter</Button>
        <Button variant="outline" onClick={handleClearFilters} className="w-full md:w-auto">Clear</Button>
      </div>
    </div>
  );
}
