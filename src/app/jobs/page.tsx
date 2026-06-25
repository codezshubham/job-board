import type { Metadata } from "next";
import { Suspense } from "react";
import { getJobs } from "@/app/actions/jobActions";
import { JobResultsList } from "@/components/JobResultsList";
import { JobFilters } from "@/components/JobFilters";
import { JobFiltersSkeleton } from "@/components/page-skeletons";
import {
  buildJobsMetadata,
  buildJobsPageHeading,
  buildJobsQuery,
  buildPaginationUrl,
  ITEMS_PER_PAGE,
  normalizeJobsSearchParams,
  type JobsSearchParams,
} from "@/lib/job-search";

type JobsPageProps = {
  searchParams?: Promise<JobsSearchParams>;
};

export async function generateMetadata(
  props: JobsPageProps
): Promise<Metadata> {
  const filters = normalizeJobsSearchParams(await props.searchParams);
  return buildJobsMetadata(filters);
}

export const revalidate = 0;

export default async function JobsPage(props: JobsPageProps) {
  const filters = normalizeJobsSearchParams(await props.searchParams);
  const { pageTitle, pageDescription } = buildJobsPageHeading(filters);
  const allJobs = await getJobs(buildJobsQuery(filters));
  const totalPages = Math.ceil(allJobs.length / ITEMS_PER_PAGE);
  const paginatedJobs = allJobs.slice(
    (filters.page - 1) * ITEMS_PER_PAGE,
    filters.page * ITEMS_PER_PAGE
  );

  const createPageUrl = (page: number) =>
    buildPaginationUrl("/jobs", filters, page);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
          {pageTitle}
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground">
          {pageDescription}
        </p>
      </div>

      <Suspense fallback={<JobFiltersSkeleton />}>
        <JobFilters />
      </Suspense>

      <JobResultsList
        jobs={paginatedJobs}
        totalJobs={allJobs.length}
        currentPage={filters.page}
        totalPages={totalPages}
        createPageUrl={createPageUrl}
        emptyDescription="Try adjusting your search criteria or browse one of the clean category pages."
      />
    </div>
  );
}
