import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  Clock3,
  FileSearch,
  Mail,
  ShieldCheck,
  Target,
} from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About RojgarSync",
  description:
    "Learn how RojgarSync collects job listings, reviews links, updates openings, and handles expired or suspicious job reports.",
  canonical: "/about",
  keywords: [
    "about RojgarSync",
    "job platform transparency",
    "how RojgarSync works",
    "report fake job",
    "job listing review process",
  ],
});

const features = [
  {
    icon: Target,
    title: "Career-Focused Curation",
    description:
      "RojgarSync is built to help job seekers find fresher-friendly and practical opportunities without digging through clutter first.",
  },
  {
    icon: FileSearch,
    title: "Reviewed Listings",
    description:
      "Jobs are added through our internal publishing workflow so titles, companies, links, and core details can be checked before going live.",
  },
  {
    icon: Clock3,
    title: "Regular Updates",
    description:
      "New jobs are reviewed before publishing, and older listings are revisited during updates and when users flag a problem.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Expectations",
    description:
      "We work to reduce misleading listings, but we also clearly ask users to independently verify every employer and application page.",
  },
];

const transparencyItems = [
  {
    question: "Who runs RojgarSync?",
    answer:
      "RojgarSync is run by a small independent team focused on job discovery and career content for Indian job seekers. We manage the platform, publish listings, and maintain the career guides available across the site.",
  },
  {
    question: "How are jobs collected?",
    answer:
      "We collect jobs from company career pages, official hiring announcements, and employer-facing submissions, then add them through our internal admin workflow before they appear on the site.",
  },
  {
    question: "How often are jobs reviewed?",
    answer:
      "New listings are reviewed before publishing. Existing listings are checked during ongoing updates and again whenever users report that a role is expired, broken, or suspicious.",
  },
  {
    question: "Do you manually verify links?",
    answer:
      "Where possible, we manually check that the apply link opens and points to a relevant employer or application destination. Because employers can update or close openings without notice, users should still verify the final page before sharing personal information.",
  },
  {
    question: "How can users report expired or fake jobs?",
    answer:
      "If you find a broken, expired, duplicate, or suspicious listing, email us at rojgarsync@gmail.com with the job title and link. You can also use the Contact page to reach the team directly.",
  },
  {
    question: "What type of jobs do you publish?",
    answer:
      "We primarily publish fresher roles, internships, early-career openings, and other practical opportunities across remote, hybrid, and on-site work modes, with a strong focus on roles job seekers can apply to directly.",
  },
];

const jobTypes = [
  "Fresher jobs",
  "Internships",
  "Remote roles",
  "Hybrid openings",
  "On-site jobs",
  "Direct apply opportunities",
  "Early-career tech roles",
  "General private-sector hiring",
];

const reportJobMailto =
  "mailto:rojgarsync@gmail.com?subject=Report%20a%20Job&body=Please%20share%20the%20job%20title%2C%20job%20link%2C%20and%20the%20issue%20you%20noticed.";

export default function AboutPage() {
  return (
    <div className="flex-1">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container relative mx-auto max-w-5xl px-4 py-20">
          <div className="space-y-6 text-center">
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-1 text-sm"
            >
              About RojgarSync
            </Badge>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Built To Make Job Search
              <span className="text-primary"> Clearer And Safer.</span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              RojgarSync is a job discovery platform focused on practical
              openings, cleaner job search, and more transparency around how
              listings are collected, reviewed, and maintained.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                How RojgarSync works
              </h2>

              <p className="text-lg leading-relaxed text-muted-foreground">
                RojgarSync is run by a small independent team that curates job
                listings and publishes career content for job seekers who want a
                more focused search experience.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Jobs are collected from company career pages, official hiring
                announcements, and direct employer or platform-side submissions.
                Before a listing is published, we review the core details and
                add it through our internal admin workflow so the post is easier
                to understand and apply to.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                We aim to reduce spam, broken links, and misleading listings,
                but job status can change quickly. That is why we also ask users
                to verify final employer details and report anything that looks
                expired or suspicious.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 pt-2">
              <div>
                <h3 className="text-3xl font-bold">Reviewed</h3>
                <p className="text-sm text-muted-foreground">
                  Before publishing
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">Reported</h3>
                <p className="text-sm text-muted-foreground">
                  Issues checked by email
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-secondary/30 p-8 backdrop-blur">
            <div className="space-y-5">
              <div className="rounded-2xl border bg-background p-5 shadow-sm">
                <p className="font-medium">Collection process</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Company career pages, official announcements, and direct job
                  submissions.
                </p>
              </div>

              <div className="rounded-2xl border bg-background p-5 shadow-sm">
                <p className="font-medium">Review cadence</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  New jobs are checked before publishing, and older listings are
                  revisited during updates or after user reports.
                </p>
              </div>

              <div className="rounded-2xl border bg-background p-5 shadow-sm">
                <p className="font-medium">User reporting</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Expired or suspicious jobs can be reported at
                  rojgarsync@gmail.com for manual review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="group rounded-3xl border bg-secondary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/30 hover:shadow-md"
              >
                <CardContent className="p-7">
                  <div className="mb-5 w-fit rounded-2xl border bg-background p-3">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>

                  <p className="leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 pb-16">
        <div className="mb-8 space-y-3">
          <Badge variant="secondary" className="rounded-full px-4 py-1">
            Transparency
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Common questions, answered directly
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            We want the About page to explain how the platform operates, what
            we review, and where users should contact us when something looks
            wrong.
          </p>
        </div>

        <div className="grid gap-6">
          {transparencyItems.map((item) => (
            <Card key={item.question} className="rounded-3xl border bg-background">
              <CardContent className="p-7">
                <h3 className="text-xl font-bold tracking-tight">
                  {item.question}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 pb-16">
        <Card className="rounded-3xl border bg-secondary/20 shadow-none">
          <CardContent className="p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl space-y-3">
                <Badge variant="secondary" className="rounded-full px-4 py-1">
                  Published Job Types
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight">
                  What you will usually find on RojgarSync
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  We focus on practical openings that are useful for job seekers
                  actively applying, especially those looking for fresher,
                  internship, or direct-apply opportunities.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:max-w-xl md:justify-end">
                {jobTypes.map((type) => (
                  <div
                    key={type}
                    className="rounded-full border bg-background px-4 py-2 text-sm text-muted-foreground"
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto max-w-5xl px-4 pb-20">
        <Card className="overflow-hidden rounded-[2rem] border-none bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-2xl">
          <CardContent className="space-y-6 p-10 text-center md:p-14">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Mail className="h-7 w-7" />
            </div>

            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Spot a broken or suspicious listing?
            </h2>

            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Send us the job title, listing link, and the issue you found. We
              review reports and use them to improve the quality of the jobs on
              the platform.
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={reportJobMailto}
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className: "rounded-xl px-8 text-base",
                })}
              >
                Report a Job
              </Link>

              <Link
                href="/contact"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "rounded-xl border-white/20 bg-white/10 px-8 text-base text-white hover:bg-white/20 hover:text-white",
                })}
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <p className="text-sm text-primary-foreground/80">
              Report email: rojgarsync@gmail.com
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
