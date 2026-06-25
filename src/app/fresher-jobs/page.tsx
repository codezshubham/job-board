import type { Metadata } from "next";
import { SeoJobLandingPage } from "@/components/SeoJobLandingPage";
import {
  buildLandingMetadata,
  getSeoLandingBySlug,
  type JobsSearchParams,
} from "@/lib/job-search";

type LandingPageProps = {
  searchParams?: Promise<JobsSearchParams>;
};

const config = getSeoLandingBySlug("fresher-jobs")!;

export async function generateMetadata(
  props: LandingPageProps
): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const pageParam = typeof searchParams?.page === "string" ? searchParams.page : "1";
  const page = Math.max(1, Number.parseInt(pageParam, 10) || 1);
  return buildLandingMetadata(config, page);
}

export const revalidate = 0;

export default function FresherJobsPage(props: LandingPageProps) {
  return <SeoJobLandingPage config={config} searchParams={props.searchParams} />;
}
