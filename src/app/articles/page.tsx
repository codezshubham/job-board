import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Landmark,
  FileText,
  Search,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  Clock3,
  LucideIcon,
} from "lucide-react";
import { Article, articles } from "@/lib/articles";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Career Articles and Job Search Guides",
  description:
    "Read in-depth career guides on resumes, interviews, internships, job search strategy, application tracking, and avoiding job scams on RojgarSync.",
  canonical: "/articles",
  keywords: [
    "career articles",
    "job search guides",
    "resume tips",
    "interview preparation",
    "job scam awareness",
    "RojgarSync articles",
  ],
});

const slugIconMap: Record<string, LucideIcon> = {
  "how-to-apply-for-government-jobs": Landmark,
  "resume-tips-for-freshers": FileText,
  "best-websites-for-job-search": Search,
  "how-to-prepare-for-campus-placement": GraduationCap,
  "private-job-vs-government-job": BriefcaseBusiness,
};

const categoryIconMap: Record<string, LucideIcon> = {
  "Government Jobs": Landmark,
  "Resume Writing": FileText,
  "Job Search": Search,
  "Campus Placement": GraduationCap,
  "Career Choice": BriefcaseBusiness,
  "Job Safety": BookOpen,
  "Fresher Skills": BriefcaseBusiness,
  "Application Strategy": Search,
  Internships: GraduationCap,
  "Aptitude Prep": BookOpen,
  Networking: Sparkles,
  "Fresher Careers": BriefcaseBusiness,
  "Career Basics": BookOpen,
  "Interview Prep": BookOpen,
  "Student Careers": GraduationCap,
};

function getArticleIcon(article: Article) {
  return slugIconMap[article.slug] ?? categoryIconMap[article.category] ?? BookOpen;
}

export default function ArticlesPage() {
  return (
    <div className="flex-1">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container relative mx-auto max-w-6xl px-4 py-20">
          <div className="space-y-6 text-center">
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-1 text-sm"
            >
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Career Guides
            </Badge>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Helpful Articles For Job Seekers
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Explore {articles.length} practical guides on resumes,
              internships, interview preparation, job search strategy, and job
              safety so you can apply with more clarity and confidence.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-sm text-muted-foreground">
              <div className="rounded-full border bg-background/80 px-4 py-2">
                {articles.length} in-depth guides
              </div>
              <div className="rounded-full border bg-background/80 px-4 py-2">
                Fresher-friendly topics
              </div>
              <div className="rounded-full border bg-background/80 px-4 py-2">
                Real application advice
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {articles.map((article) => {
            const Icon = getArticleIcon(article);

            return (
              <Link
                key={article.title}
                href={`/articles/${article.slug}`}
                className="block h-full"
              >
                <Card className="group h-full rounded-3xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="secondary" className="rounded-full">
                        {article.category}
                      </Badge>
                      <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock3 className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>

                    <h2 className="mt-4 text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
                      {article.title}
                    </h2>

                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                      Read full article
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 pb-20">
        <Card className="overflow-hidden rounded-[2rem] border-none bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-2xl">
          <CardContent className="space-y-6 p-10 text-center md:p-14">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <BookOpen className="h-7 w-7" />
            </div>

            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Ready to start applying?
            </h2>

            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Put these tips into action and explore the latest openings across
              remote, fresher, and experienced roles.
            </p>

            <Button
              size="lg"
              variant="secondary"
              className="rounded-xl px-8 text-base"
            >
              <Link href="/jobs" className="flex items-center gap-2">
                Browse Jobs
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
