import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  Briefcase,
  Building2,
  Clock3,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HomeFaqs } from "@/components/HomeFaqs";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b bg-background pt-20 pb-20">
        {/* Modern grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Glowing gradient blobs */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] mix-blend-normal" />
        <div className="absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px] mix-blend-normal" />

        <div className="container relative mx-auto flex max-w-7xl flex-col items-center px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="font-semibold tracking-wide">12,000+ Active Jobs Updated Daily</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-5xl text-5xl font-extrabold tracking-tight md:text-7xl lg:text-[5.5rem] leading-[1.1]">
            Discover Your <br className="hidden md:block" />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-600 mt-2 pb-2">
              Next Career Move
              <Sparkles className="absolute -right-12 -top-4 h-8 w-8 text-blue-500 animate-pulse hidden md:block" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Explore fresh opportunities from top startups and companies. Find
            remote, hybrid, and on-site jobs tailored to your skills.
          </p>

          {/* Search Box */}
          <form action="/jobs" className="mt-12 flex w-full max-w-3xl flex-col gap-3 rounded-3xl border bg-background/60 p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl md:flex-row transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="flex flex-1 items-center gap-3 rounded-2xl bg-muted/50 px-5 transition-all focus-within:bg-background focus-within:ring-2 focus-within:ring-primary/20">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                name="search"
                type="text"
                placeholder="Search jobs, companies, skills..."
                className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/70"
              />
            </div>
            <button
              type="submit"
              className={buttonVariants({
                size: "lg",
                className:
                  "h-14 rounded-2xl px-10 text-base font-semibold shadow-xl transition-all hover:scale-[1.02] active:scale-95",
              })}
            >
              Search Jobs
            </button>
          </form>

          {/* Quick Stats */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2.5 rounded-full border bg-background/50 backdrop-blur-sm px-5 py-2.5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Remote Friendly
            </div>
            <div className="flex items-center gap-2.5 rounded-full border bg-background/50 backdrop-blur-sm px-5 py-2.5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-blue-500" />
              Verified Companies
            </div>
            <div className="flex items-center gap-2.5 rounded-full border bg-background/50 backdrop-blur-sm px-5 py-2.5 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-indigo-500" />
              Daily New Jobs
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="relative overflow-hidden py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-background to-background" />

        <div className="container relative mx-auto max-w-7xl px-4">
          {/* Heading */}
          <div className="mb-20 flex flex-col items-center text-center">
            <Badge variant="secondary" className="mb-5 rounded-full px-4 py-1">
              Why Choose Us
            </Badge>

            <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              Built To Make
              <span className="text-primary"> Job Hunting Easier</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Discover better opportunities, connect with top companies, and
              accelerate your career with a platform designed for modern
              professionals.
            </p>
          </div>

          {/* Features Layout */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Large Featured Card */}
            <div className="group relative overflow-hidden rounded-[2rem] border bg-primary p-10 text-primary-foreground shadow-xl lg:row-span-2">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-white/10 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                    <Briefcase className="h-8 w-8" />
                  </div>

                  <h3 className="mb-4 text-3xl font-bold">
                    Premium Opportunities
                  </h3>

                  <p className="text-primary-foreground/80 leading-relaxed">
                    Access carefully curated roles from trusted companies hiring
                    across engineering, design, marketing, and more.
                  </p>
                </div>

                <div className="mt-10">
                  <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                    <div className="h-2 w-2 rounded-full bg-white" />
                    Updated daily with verified listings
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-[2rem] border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Building2 className="h-7 w-7" />
              </div>

              <h3 className="mb-3 text-2xl font-bold">Top Companies</h3>

              <p className="leading-relaxed text-muted-foreground">
                Connect with startups, global brands, and fast-growing companies
                shaping the future.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-[2rem] border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Clock3 className="h-7 w-7" />
              </div>

              <h3 className="mb-3 text-2xl font-bold">Daily Updates</h3>

              <p className="leading-relaxed text-muted-foreground">
                Fresh openings posted every day so you never miss the right
                opportunity.
              </p>
            </div>

            {/* Bottom Wide Card */}
            <div className="group relative overflow-hidden rounded-[2rem] border bg-secondary/30 p-8 shadow-sm transition-all duration-300 hover:shadow-xl lg:col-span-2">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <TrendingUp className="h-7 w-7" />
                  </div>

                  <h3 className="mb-3 text-3xl font-bold">
                    Career Growth Focused
                  </h3>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Find opportunities aligned with your long-term goals, skill
                    development, and future ambitions.
                  </p>
                </div>

                <div className="flex gap-8">
                  <div>
                    <h4 className="text-3xl font-black">10K+</h4>
                    <p className="text-sm text-muted-foreground">Active Jobs</p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-black">2K+</h4>
                    <p className="text-sm text-muted-foreground">Companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container mx-auto px-4 pb-24 max-w-5xl">
        <Card className="rounded-[2rem] overflow-hidden border-none bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-2xl">
          <CardContent className="p-10 md:p-14 text-center space-y-6">
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-1 text-foreground"
            >
              Start Your Journey
            </Badge>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Find your next big opportunity
            </h2>

            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Explore thousands of verified opportunities and connect with
              companies building the future.
            </p>

            <Button
              size="lg"
              variant="secondary"
              className="rounded-xl px-8 text-base"
            >
              <Link href="/jobs" className="flex items-center gap-2">
                Browse Jobs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <HomeFaqs />
    </div>
  );
}
