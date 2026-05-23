import { getJobBySlug, getJobs } from "@/app/actions/jobActions";
import { notFound } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, IndianRupee, Clock, Briefcase, ExternalLink, ChevronLeft, GraduationCap, CalendarDays, Building2, Tag, Globe, Users } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) return { title: "Job Not Found" };
  
  const shortDescription = job.description ? job.description.substring(0, 160) : `Apply for ${job.title} at ${job.company}`;

  return {
    title: `${job.title} at ${job.company}`,
    description: shortDescription,
      keywords: [
      job.title,
      job.company,
      job.location || "",
      "jobs",
      "latest jobs",
      "software jobs",
      "remote jobs",
      "hybrid jobs",
      "on-site jobs",
      "freshers jobs",
      "graduate jobs",
      "internship jobs",
      "entry-level jobs",
      "experienced jobs",
      "IT jobs",
      "job portal",
      "RojgarSync",
      `${job.title} jobs`,
      `${job.company} careers`,
    ],
    openGraph: {
      title: `${job.title} | ${job.company}`,
      description: shortDescription,
      url: `/jobs/${slug}`,
      siteName: "RojgarSync",
      images: job.logo ? [{ url: job.logo, alt: `${job.company} logo` }] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title} | ${job.company}`,
      description: shortDescription,
      images: job.logo ? [job.logo] : [],
    }
  };
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Use Promise.all to fetch the job details AND the latest jobs concurrently 
  // instead of waiting for one to finish before starting the other.
  const [job, latestJobsData] = await Promise.all([
    getJobBySlug(slug),
    getJobs({}, { createdAt: -1 }, 6)
  ]);

  if (!job) {
    notFound();
  }

  // Filter out the current job from the recent jobs list
  const latestJobs = latestJobsData.filter((j: any) => j._id !== job._id).slice(0, 5);

  // Helper to render text with newlines as a bulleted list
  const renderBulletList = (text: string) => {
    if (!text) return null;
    const lines = text.split('\n').filter((line: string) => line.trim() !== '');
    
    if (lines.length === 1) {
      return <p>{text}</p>;
    }

    return (
      <ul className="list-disc pl-5 space-y-2">
        {lines.map((line: string, i: number) => (
          <li key={i}>{line.replace(/^[-*•]\s*/, '')}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
    <style>{`
  @keyframes marquee-right {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  .animate-marquee-right {
    display: inline-flex;
    align-items: center;
    min-width: max-content;
    white-space: nowrap;

    /* Slower Speed */
    animation: marquee-right 45s linear infinite;

    will-change: transform;
  }

  .animate-marquee-right:hover {
    animation-play-state: paused;
  }
`}</style>
<div className="relative mb-8 overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-r from-primary/5 via-background to-primary/5 shadow-sm">

  <div className="flex items-center gap-4 px-4 py-3">

    {/* Badge */}
    <div className="shrink-0 rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-md">
      JUST IN
    </div>

    {/* Marquee */}
    <div
      className="relative flex-1 overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="animate-marquee-right">

        {/* Duplicate array for seamless loop */}
        {[...latestJobs.slice(0, 3), ...latestJobs.slice(0, 3)].map(
          (recentJob: any, index: number) => (
            <div
              key={`${recentJob._id}-${index}`}
              className="mx-5 flex items-center"
            >
              <Link
                href={`/jobs/${recentJob.slug}`}
                className="group flex items-center gap-2"
              >
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />

                <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {recentJob.title}
                </span>

                <span className="text-sm text-muted-foreground">
                  at {recentJob.company}
                </span>
              </Link>

              <span className="ml-8 text-muted-foreground/30 text-lg">
                ✦
              </span>
            </div>
          )
        )}
      </div>
    </div>

    {/* Live */}
    <div className="hidden md:flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1.5 shadow-sm">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
      </span>

      <span className="text-xs font-medium text-muted-foreground">
        Live Updates
      </span>
    </div>
  </div>
</div>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
        <div className="flex items-center gap-6">
          {job.logo ? (
            <img src={job.logo} alt={`${job.company} logo`} className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl bg-white p-2 border shadow-sm" />
          ) : (
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-primary/10 flex items-center justify-center border shadow-sm">
              <Building2 className="w-10 h-10 text-primary/40" />
            </div>
          )}
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight">{job.title}</h1>
            <div className="text-xl md:text-2xl text-primary font-semibold">{job.company}</div>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-10 order-2 lg:order-1">

          {job.aboutCompany && (
            <section className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-primary" />
                About {job.company}
              </h2>
              <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                {renderBulletList(job.aboutCompany)}
              </div>
            </section>
          )}

          <section className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Job Description</h2>
            <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              {renderBulletList(job.description)}
            </div>
          </section>

          {job.rolesAndResponsibilities && (
            <section className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Roles & Responsibilities</h2>
              <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                {renderBulletList(job.rolesAndResponsibilities)}
              </div>
            </section>
          )}

          {job.logo && (
            <div className="w-full h-48 md:h-72 bg-white rounded-2xl border shadow-sm flex items-center justify-center p-6 mb-6">
              <img src={job.logo} alt={`${job.company} banner`} className="w-full h-full object-contain" />
            </div>
          )}

          <section className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Skills Required</h2>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill: string) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm bg-secondary/50 font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {(job.experience || job.education || (job.batchEligible && job.batchEligible.length > 0)) && (
            <section className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Eligibility Criteria</h2>
              <div className="space-y-6">
                {job.experience && (
                  <div className="flex items-start gap-4 text-base">
                    <CalendarDays className="w-6 h-6 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Experience</p>
                      <p className="text-muted-foreground">{job.experience}</p>
                    </div>
                  </div>
                )}

                {job.education && (
                  <div className="flex items-start gap-4 text-base">
                    <GraduationCap className="w-6 h-6 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Education</p>
                      <p className="text-muted-foreground">{job.education}</p>
                    </div>
                  </div>
                )}

                {job.batchEligible && job.batchEligible.length > 0 && (
                  <div className="flex items-start gap-4 text-base">
                    <Users className="w-6 h-6 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-2">Batch Eligible</p>
                      <div className="flex flex-wrap gap-2">
                        {job.batchEligible.map((batch: string) => (
                          <Badge key={batch} variant="secondary" className="px-3 py-1 text-sm bg-secondary/50 font-medium">
                            {batch}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          <div className="pt-4">
            <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "default", size: "lg", className: "font-semibold text-base h-12 px-8 w-full md:w-auto" })}>
              Apply for this position <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6 lg:top-24 order-1 lg:order-2">
          <Card className="shadow-sm border-primary/10 border-2">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">Job Overview</h3>
                
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{job.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <IndianRupee className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="font-medium">Salary</p>
                    <p className="text-muted-foreground">{job.salary}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Briefcase className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="font-medium">Job Type</p>
                    <p className="text-muted-foreground">{job.employmentType}</p>
                  </div>
                </div>

                {job.workMode && (
                  <div className="flex items-start gap-3 text-sm">
                    <Globe className="w-5 h-5 text-muted-foreground shrink-0" />
                    <div>
                      <p className="font-medium">Work Mode</p>
                      <p className="text-muted-foreground">{job.workMode}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3 text-sm">
                  <Tag className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="font-medium">Category</p>
                    <p className="text-muted-foreground">{job.category}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Clock className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="font-medium">Posted Date</p>
                    <p className="text-muted-foreground">{new Date(job.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>

                {job.closingDate && (
                  <div className="flex items-start gap-3 text-sm">
                    <CalendarDays className="w-5 h-5 text-muted-foreground shrink-0" />
                    <div>
                      <p className="font-medium">Closing Date</p>
                      <p className="text-muted-foreground">{new Date(job.closingDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

      {latestJobs && latestJobs.length > 0 && (
        <div className="mt-16 md:mt-24 border-t pt-12">
          <h2 className="text-3xl font-bold mb-8 tracking-tight">Latest Jobs</h2>
          <div className="flex flex-col gap-4">
            {latestJobs.map((latestJob: any) => (
              <Card key={latestJob._id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start md:items-center gap-4">
                      {latestJob.logo ? (
                        <img src={latestJob.logo} alt={latestJob.company} className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-md border p-1 shrink-0" />
                      ) : (
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-md border bg-primary/5 flex items-center justify-center shrink-0">
                          <Building2 className="w-6 h-6 text-primary/40" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-lg mb-1" title={latestJob.title}>
                          {latestJob.title}
                        </h3>
                        <p className="text-muted-foreground text-sm font-medium mb-2">
                          {latestJob.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span className="truncate">{latestJob.location}</span>
                          </div>
                          {latestJob.salary && (
                            <div className="flex items-center gap-1">
                              <IndianRupee className="w-3.5 h-3.5" />
                              <span className="truncate">{latestJob.salary}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5" />
                            <span className="truncate">{latestJob.employmentType}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:ml-auto w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 shrink-0">
                      <Link href={`/jobs/${latestJob.slug}`} className={buttonVariants({ variant: "outline", className: "w-full md:w-auto" })}>
                        View Job <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
