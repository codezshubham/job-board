/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Companies Hiring on RojgarSync",
  description:
    "Explore companies hiring on RojgarSync and browse active opportunities by employer across fresher, remote, hybrid, and on-site roles.",
  canonical: "/companies",
  keywords: [
    "companies hiring",
    "hiring companies in India",
    "employer job listings",
    "RojgarSync companies",
    "company careers",
  ],
});
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Building2,
  Briefcase,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { getJobs } from "@/app/actions/jobActions";

export const revalidate = 60;

type CompanyListingJob = {
  company: string;
  logo?: string;
};

type CompanySummary = {
  name: string;
  logo?: string;
  jobCount: number;
};

export default async function CompaniesPage() {
  const jobs = (await getJobs()) as CompanyListingJob[];

  // Extract unique companies
  const companyMap = new Map<string, CompanySummary>();

  jobs.forEach((job) => {
    if (!companyMap.has(job.company)) {
      companyMap.set(job.company, {
        name: job.company,
        logo: job.logo,
        jobCount: 1,
      });
    } else {
      const existingCompany = companyMap.get(job.company);
      if (existingCompany) {
        existingCompany.jobCount += 1;
      }
    }
  });

  const uniqueCompanies = Array.from(companyMap.values());

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container relative mx-auto max-w-6xl px-4 py-20">
          <div className="text-center space-y-6">
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-1 text-sm"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Hiring Companies
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              Top Companies Hiring
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Discover innovative teams building amazing products and offering
              exciting career opportunities across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        {uniqueCompanies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueCompanies.map((company, idx) => (
              <Card
                key={idx}
                className="group rounded-3xl border bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-7">
                  {/* Company Header */}
                  <div className="flex items-start gap-4">
                    {company.logo ? (
                      <div className="w-16 h-16 rounded-2xl bg-white border shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border flex items-center justify-center shrink-0">
                        <Building2 className="w-7 h-7 text-primary/50" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-bold truncate">
                        {company.name}
                      </h2>

                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" />

                        <span>
                          {company.jobCount} open{" "}
                          {company.jobCount === 1
                            ? "position"
                            : "positions"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <Link
                      href={`/jobs?company=${encodeURIComponent(
                        company.name
                      )}`}
                      className={buttonVariants({
                        variant: "outline",
                        className:
                          "w-full rounded-xl  transition-all",
                      })}
                    >
                      View Jobs
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="rounded-3xl border border-dashed bg-secondary/20 shadow-none">
            <CardContent className="py-20 px-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 mx-auto flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-primary/50" />
              </div>

              <h2 className="text-2xl font-bold mb-3">
                No companies found
              </h2>

              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                There are currently no active companies with job postings on
                the platform.
              </p>

              <Link
                href="/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz"
                className={buttonVariants({
                  variant: "default",
                  className: "rounded-xl px-6",
                })}
              >
                Post a Job
              </Link>
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}
