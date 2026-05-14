"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Briefcase, Tags, Award, Filter, X, ChevronDown, ChevronUp } from "lucide-react";

export function JobFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [type, setType] = useState(searchParams.get("type") || "All Types");
  const [category, setCategory] = useState(searchParams.get("category") || "All Categories");
  const [experience, setExperience] = useState(searchParams.get("experience") || "All Experience Levels");

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
    
    if (type && type !== "All Types") params.set("type", type);
    else params.delete("type");
    
    if (category && category !== "All Categories") params.set("category", category);
    else params.delete("category");
    
    if (experience && experience !== "All Experience Levels") params.set("experience", experience);
    else params.delete("experience");

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setSearch("");
    setType("All Types");
    setCategory("All Categories");
    setExperience("All Experience Levels");
    router.push(pathname);
  };

  return (
    <div className="bg-card/60 backdrop-blur-xl border border-border/50 shadow-xl shadow-blue-500/5 rounded-3xl p-5 md:p-6 mb-8 flex flex-col gap-6 transition-all relative overflow-hidden">
      {/* Decorative gradient blur in background */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row gap-4 z-10 w-full">
        {/* Main Search Bar */}
        <div className="relative w-full flex-1 group drop-shadow-sm">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-blue-500" />
          <Input 
            placeholder="Search job title, company, or keywords..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleApplyFilters()}
            className="pl-12 h-14 text-base rounded-2xl bg-background/80 border-border/60 focus-visible:ring-blue-500/50 transition-all hover:bg-background"
          />
        </div>
        
        <Button
          variant="outline"
          className="h-14 rounded-2xl px-6 border-border/60 bg-background/80 hover:bg-background shrink-0"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
          {isFiltersOpen ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
        </Button>
      </div>

      {isFiltersOpen && (
        <div className="flex flex-col lg:flex-row gap-5 justify-between lg:items-end z-10 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full flex-1">
            {/* Employment Type */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 ml-1">
              <Briefcase className="w-3.5 h-3.5" /> Employment Type
            </label>
            <Select value={type || "All Types"} onValueChange={(val) => setType(val || "All Types")}>
              <SelectTrigger className="h-11 rounded-xl bg-background/60 border-border/60 hover:bg-background transition-colors focus:ring-blue-500/50">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50 shadow-lg">
                <SelectItem value="All Types">All Types</SelectItem>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Freelance">Freelance</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 ml-1">
              <Tags className="w-3.5 h-3.5" /> Category
            </label>
            <Select value={category || "All Categories"} onValueChange={(val) => setCategory(val || "All Categories")}>
              <SelectTrigger className="h-11 rounded-xl bg-background/60 border-border/60 hover:bg-background transition-colors focus:ring-blue-500/50">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50 shadow-lg">
                <SelectItem value="All Categories">All Categories</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Sales">Sales</SelectItem>
                <SelectItem value="Product">Product</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 ml-1">
              <Award className="w-3.5 h-3.5" /> Experience
            </label>
            <Select value={experience || "All Experience Levels"} onValueChange={(val) => setExperience(val || "All Experience Levels")}>
              <SelectTrigger className="h-11 rounded-xl bg-background/60 border-border/60 hover:bg-background transition-colors focus:ring-blue-500/50">
                <SelectValue placeholder="Any Experience" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50 shadow-lg">
                <SelectItem value="All Experience Levels">Any Experience</SelectItem>
                <SelectItem value="Fresher">Fresher</SelectItem>
                <SelectItem value="1 year">1 year</SelectItem>
                <SelectItem value="2 years">2 years</SelectItem>
                <SelectItem value="3 years">3 years</SelectItem>
                <SelectItem value="5+ years">5+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 w-full lg:w-[240px] lg:flex lg:flex-none">
          <Button 
            onClick={handleApplyFilters} 
            className="w-full lg:flex-1 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all font-semibold"
          >
            <Filter className="w-4 h-4 " />
            Apply Filter
          </Button>
          <Button 
            variant="outline" 
            onClick={handleClearFilters} 
            className="w-full lg:w-auto px-4 h-11 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border-dashed border-2 hover:border-solid hover:text-foreground font-medium"
          >
            <X className="w-4 h-4" aria-label="Clear filters" />
            <span className="lg:hidden ml-2">Clear</span>
          </Button>
        </div>
        </div>
      )}
    </div>
  );
}
