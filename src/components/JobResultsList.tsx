/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  Building2,
  CalendarDays,
  Clock,
  IndianRupee,
  MapPin,
} from "lucide-react";

type JobListItem = {
  _id: string;
  slug: string;
  title: string;
  company: string;
  logo?: string;
  employmentType: string;
  category: string;
  location: string;
  salary: string;
  experience?: string;
  workMode?: string;
  skills?: string[];
  createdAt: string;
  closingDate?: string;
};

type JobResultsListProps = {
  jobs: JobListItem[];
  totalJobs: number;
  currentPage: number;
  totalPages: number;
  createPageUrl: (page: number) => string;
  emptyTitle?: string;
  emptyDescription?: string;
};

export function JobResultsList({
  jobs,
  totalJobs,
  currentPage,
  totalPages,
  createPageUrl,
  emptyTitle = "No jobs matched your criteria",
  emptyDescription = "Try adjusting your filters or browse a different job category.",
}: JobResultsListProps) {
  return (
    <div className="grid gap-6">
      {jobs.map((job) => (
        <Card
          key={job._id}
          className="group relative overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
        >
          <div className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-primary/40 to-primary/10 transition-transform duration-300 group-hover:scale-x-100" />

          <CardHeader className="pb-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                {job.logo ? (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border bg-white p-1 shadow-sm">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border bg-primary/5">
                    <Building2 className="h-7 w-7 text-primary/40" />
                  </div>
                )}

                <div className="mt-0.5 space-y-1.5">
                  <CardTitle className="line-clamp-1 text-xl font-bold transition-colors group-hover:text-primary">
                    <Link
                      href={`/jobs/${job.slug}`}
                      className="before:absolute before:inset-0"
                    >
                      {job.title}
                    </Link>
                  </CardTitle>

                  <div className="flex items-center gap-2 font-medium text-primary/80">
                    <Building2 className="h-4 w-4" />
                    {job.company}
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex shrink-0 flex-wrap items-center gap-2 md:justify-end">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 font-medium text-primary hover:bg-primary/20"
                >
                  {job.employmentType}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-primary/20 text-foreground/80"
                >
                  {job.category}
                </Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0 pb-4">
            <div className="mb-5 grid grid-cols-2 gap-x-6 gap-y-3 rounded-lg border border-secondary/50 bg-secondary/30 p-3 text-sm text-muted-foreground md:flex md:flex-wrap">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary/60" />
                <span className="truncate">{job.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4 shrink-0 text-primary/60" />
                <span className="truncate">{job.salary}</span>
              </div>

              {job.experience && (
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 shrink-0 text-primary/60" />
                  <span className="truncate">{job.experience}</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary/60" />
                <span>{job.workMode || "On-site"}</span>
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2">
              {job.skills?.slice(0, 6).map((skill: string) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="border border-secondary bg-secondary/50 font-normal hover:bg-secondary"
                >
                  {skill}
                </Badge>
              ))}

              {job.skills && job.skills.length > 6 && (
                <Badge
                  variant="secondary"
                  className="border border-secondary bg-secondary/50 font-normal"
                >
                  +{job.skills.length - 6} more
                </Badge>
              )}
            </div>
          </CardContent>

          <CardFooter className="justify-between border-t-0 pt-0 pb-5 pr-6 pl-6">
            <div className="flex w-full flex-col justify-between gap-2 pr-4 text-sm text-muted-foreground sm:flex-row sm:items-center">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <span>
                  Posted{" "}
                  {new Date(job.createdAt).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              {job.closingDate && (
                <div className="flex items-center gap-1.5 text-orange-600 dark:text-orange-400">
                  <Clock className="h-4 w-4" />
                  <span>
                    Closes{" "}
                    {new Date(job.closingDate).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              )}
            </div>

            <Link
              href={`/jobs/${job.slug}`}
              className={`relative z-10 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:shadow-md ${buttonVariants({ variant: "default" })}`}
            >
              View Details
            </Link>
          </CardFooter>
        </Card>
      ))}

      {totalJobs === 0 && (
        <div className="rounded-xl border bg-secondary/20 px-4 py-16 text-center">
          <h3 className="mb-2 text-xl font-bold">{emptyTitle}</h3>
          <p className="text-muted-foreground">{emptyDescription}</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href={createPageUrl(currentPage - 1)}
            className={`${buttonVariants({ variant: "outline" })} ${currentPage <= 1 ? "pointer-events-none opacity-50" : ""}`}
          >
            Previous
          </Link>
          <span className="w-32 text-center text-sm font-medium text-muted-foreground">
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
  );
}
