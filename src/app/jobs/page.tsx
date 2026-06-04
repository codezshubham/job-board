import { Metadata } from "next";
import { getJobs } from "@/app/actions/jobActions";

export const metadata: Metadata = {
  title: "Browse Jobs",
  description: "Search and filter through our active job listings to find the perfect career opportunity for you.",
};
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { MapPin, IndianRupee, Clock, Building2, Briefcase, CalendarDays } from "lucide-react";
import { JobFilters } from "@/components/JobFilters";
import { Suspense } from "react";

export const revalidate = 0;

export default async function JobsPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const search = typeof searchParams?.search === 'string' ? searchParams.search : undefined;
  const type = typeof searchParams?.type === 'string' ? searchParams.type : undefined;
  const category = typeof searchParams?.category === 'string' ? searchParams.category : undefined;
  const experience = typeof searchParams?.experience === 'string' ? searchParams.experience : undefined;
  const workMode = typeof searchParams?.workMode === 'string' ? searchParams.workMode : undefined;
  const company = typeof searchParams?.company === 'string' ? searchParams.company : undefined;
  const pageParam = typeof searchParams?.page === 'string' ? searchParams.page : '1';
  const currentPage = Math.max(1, parseInt(pageParam, 10) || 1);

  const formatLabel = (value: string) =>
    value
      .split(/[\s-]+/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");

  const activeLabel =
    (search && search.trim()) ||
    (company && company.trim()) ||
    (category && category !== "all" ? category : undefined) ||
    (type && type !== "all" ? type : undefined) ||
    (workMode && workMode !== "all" ? workMode : undefined) ||
    (experience && experience.trim()) ||
    undefined;

  const pageTitle = activeLabel
    ? `${formatLabel(activeLabel)} Jobs`
    : "Browse All Jobs";

  const pageDescription = activeLabel
    ? `Showing job results for ${formatLabel(activeLabel)}.`
    : "Explore the latest opportunities shaping remote and on-site careers.";

  const query: any = {};
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
      { location: { $regex: search, $options: "i" } },
      { skills: { $regex: search, $options: "i" } }
    ];
  }
  if (company) {
    query.company = company;
  }
  if (type && type !== "all") {
    query.employmentType = type;
  }
  if (category && category !== "all") {
    query.category = category;
  }
  if (experience) {
    if (experience.toLowerCase() === 'experienced') {
      // Find jobs where experience does not contain "fresher"
      query.experience = { $not: { $regex: "fresher", $options: "i" }, $exists: true, $ne: "" };
    } else {
      query.experience = { $regex: experience, $options: "i" };
    }
  }
  if (workMode && workMode !== "all") {
    query.workMode = workMode;
  }

  const allJobs = await getJobs(query);
  
  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(allJobs.length / ITEMS_PER_PAGE);
  const paginatedJobs = allJobs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (type) params.set('type', type);
    if (category) params.set('category', category);
    if (experience) params.set('experience', experience);
    if (workMode) params.set('workMode', workMode);
    if (company) params.set('company', company);
    params.set('page', page.toString());
    return `/jobs?${params.toString()}`;
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          {pageTitle}
        </h1>
        <p className="text-lg text-muted-foreground max-w-[600px]">
          {pageDescription}
        </p>
      </div>

      <Suspense fallback={<div>Loading filters...</div>}>
        <JobFilters />
      </Suspense>

      <div className="grid gap-6">
        {paginatedJobs.map((job: any) => (
          <Card key={job._id} className="group relative transition-all duration-300 hover:shadow-lg hover:border-primary/50 overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary/10 transition-transform origin-left scale-x-0 group-hover:scale-x-100 duration-300"></div>

            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  {job.logo ? (
                    <div className="w-14 h-14 rounded-lg bg-white p-1 border shadow-sm flex items-center justify-center shrink-0">
                      <img src={job.logo} alt={`${job.company} logo`} className="max-w-full max-h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center border shrink-0">
                      <Building2 className="w-7 h-7 text-primary/40" />
                    </div>
                  )}
                  <div className="space-y-1.5 mt-0.5">
                    <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
                      <Link href={`/jobs/${job.slug}`} className="before:absolute before:inset-0">
                        {job.title}
                      </Link>
                    </CardTitle>
                    <div className="flex items-center gap-2 text-primary/80 font-medium">
                      <Building2 className="w-4 h-4" />
                      {job.company}
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-2 md:justify-end shrink-0 z-10 relative">
                  <Badge variant="secondary" className="bg-primary/10 text-primary font-medium hover:bg-primary/20">{job.employmentType}</Badge>
                  <Badge variant="outline" className="border-primary/20 text-foreground/80">{job.category}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-4 pt-0">
              <div className="grid grid-cols-2 md:flex md:flex-wrap gap-y-3 gap-x-6 text-sm text-muted-foreground mb-5 p-3 bg-secondary/30 rounded-lg border border-secondary/50">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary/60 shrink-0" />
                  <span className="truncate">{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-primary/60 shrink-0" />
                  <span className="truncate">{job.salary}</span>
                </div>
                {job.experience && (
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary/60 shrink-0" />
                    <span className="truncate">{job.experience}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary/60 shrink-0" />
                  <span>{job.workMode || "On-site"}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {job.skills?.slice(0, 6).map((skill: string) => (
                  <Badge key={skill} variant="secondary" className="font-normal bg-secondary/50 hover:bg-secondary border border-secondary">
                    {skill}
                  </Badge>
                ))}
                {job.skills && job.skills.length > 6 && (
                  <Badge variant="secondary" className="font-normal bg-secondary/50 border border-secondary">
                    +{job.skills.length - 6} more
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="pt-0 pb-5 pl-6 pr-6 flex items-center justify-between border-t-0">
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center text-sm text-muted-foreground w-full justify-between pr-4">
                <div className="flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" />
                  <span>Posted {new Date(job.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                {job.closingDate && (
                  <div className="flex items-center gap-1.5 text-orange-600 dark:text-orange-400">
                    <Clock className="w-4 h-4" />
                    <span>Closes {new Date(job.closingDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                )}
              </div>
              <Link href={`/jobs/${job.slug}`} className={`relative z-10 transition-transform group-hover:-translate-y-0.5 group-hover:shadow-md shrink-0 ${buttonVariants({ variant: "default" })}`}>
                View Details
              </Link>
            </CardFooter>
          </Card>
        ))}

        {allJobs.length === 0 && (
          <div className="text-center py-16 px-4 border rounded-xl bg-secondary/20">
            <h3 className="text-xl font-bold mb-2">No jobs matched your criteria</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or resetting filters.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <Link
              href={createPageUrl(currentPage - 1)}
              className={`${buttonVariants({ variant: "outline" })} ${currentPage <= 1 ? "pointer-events-none opacity-50" : ""}`}
            >
              Previous
            </Link>
            <span className="text-sm text-muted-foreground font-medium w-32 text-center">
              Page {currentPage} of {totalPages}
            </span>
            <Link
              href={createPageUrl(currentPage + 1)}
              className={`${buttonVariants({ variant: "outline" })} ${currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}`}
            >
              Next
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
