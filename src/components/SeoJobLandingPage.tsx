import Link from "next/link";
import { getJobs } from "@/app/actions/jobActions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { JobResultsList } from "@/components/JobResultsList";
import {
  buildJobsQuery,
  buildPaginationUrl,
  ITEMS_PER_PAGE,
  normalizeJobsSearchParams,
  type JobsSearchParams,
  type SeoLandingConfig,
} from "@/lib/job-search";
import { ArrowRight } from "lucide-react";

type SeoJobLandingPageProps = {
  config: SeoLandingConfig;
  searchParams?: Promise<JobsSearchParams>;
};

export async function SeoJobLandingPage({
  config,
  searchParams,
}: SeoJobLandingPageProps) {
  const filters = normalizeJobsSearchParams(await searchParams);
  const currentPage = filters.page;
  const allJobs = await getJobs(buildJobsQuery(config.filters));
  const totalPages = Math.ceil(allJobs.length / ITEMS_PER_PAGE);
  const paginatedJobs = allJobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const lastUpdatedSource = allJobs[0]?.updatedAt || allJobs[0]?.createdAt;
  const lastUpdated = lastUpdatedSource
    ? new Date(lastUpdatedSource).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Recently updated";

  const createPageUrl = (page: number) => buildPaginationUrl(config.path, {}, page);

  return (
    <div className="flex-1">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container relative mx-auto max-w-6xl px-4 py-20">
          <div className="space-y-6 text-center">
            <Badge variant="secondary" className="rounded-full px-4 py-1 text-sm">
              {config.badge}
            </Badge>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {config.title.replace(" | ", " ").replace(" 2026", "")}
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {config.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-sm text-muted-foreground">
              <div className="rounded-full border bg-background/80 px-4 py-2">
                Filtered by {config.shortLabel.toLowerCase()}
              </div>
              <div className="rounded-full border bg-background/80 px-4 py-2">
                {allJobs.length} matching listings
              </div>
              <div className="rounded-full border bg-background/80 px-4 py-2">
                Last updated {lastUpdated}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-8 flex flex-col gap-3">
          <Badge variant="secondary" className="w-fit rounded-full px-4 py-1">
            Filtered Job List
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            Latest {config.shortLabel.toLowerCase()} on RojgarSync
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            These listings are pulled from the same jobs database used across
            the platform, but this page keeps the public URL focused on one
            category that users and search engines can understand more clearly.
          </p>
        </div>

        <JobResultsList
          jobs={paginatedJobs}
          totalJobs={allJobs.length}
          currentPage={currentPage}
          totalPages={totalPages}
          createPageUrl={createPageUrl}
          emptyTitle={`No ${config.shortLabel.toLowerCase()} found right now`}
          emptyDescription="Please check back later or browse all jobs for more active openings."
        />
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-8 space-y-3">
          <Badge variant="secondary" className="rounded-full px-4 py-1">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            Questions job seekers often ask
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {config.faqs.map((faq) => (
            <Card key={faq.question} className="rounded-3xl border bg-background">
              <CardContent className="p-7">
                <h3 className="text-xl font-bold tracking-tight">{faq.question}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-20">
        <div className="mb-8 space-y-3">
          <Badge variant="secondary" className="rounded-full px-4 py-1">
            Internal Links
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            Related job pages and guides
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {config.internalLinks.map((item) => (
            <Link key={item.href} href={item.href} className="block h-full">
              <Card className="h-full rounded-3xl border bg-secondary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/30 hover:shadow-md">
                <CardContent className="space-y-4 p-7">
                  <h3 className="text-xl font-bold tracking-tight">{item.label}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Open page
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
