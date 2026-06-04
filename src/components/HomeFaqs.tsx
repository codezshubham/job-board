import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CircleHelp, ShieldCheck, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "How often are jobs updated on RojgarSync?",
    answer:
      "New openings are added and refreshed regularly so job seekers can discover fresh opportunities, including remote, hybrid, on-site, and fresher roles.",
  },
  {
    question: "Are the job listings verified?",
    answer:
      "We aim to reduce spam and misleading listings through moderation, but users should still independently verify every employer, application link, and request for information before proceeding.",
  },
  {
    question: "Can I search jobs by company, skill, or work mode?",
    answer:
      "Yes. You can browse and filter jobs by keywords, company name, category, experience level, and work mode such as Remote, Hybrid, or On-site.",
  },
  {
    question: "Does RojgarSync charge job seekers to apply?",
    answer:
      "No. RojgarSync is a discovery platform for job opportunities. Be cautious if any third party asks for money, OTPs, or sensitive financial information during the application process.",
  },
  {
    question: "Can freshers use this platform?",
    answer:
      "Absolutely. The platform includes fresher-friendly opportunities along with roles for experienced professionals across multiple categories and companies.",
  },
  {
    question: "Where can I read more about site policies?",
    answer:
      "You can review our Privacy Policy, Terms & Conditions, and Disclaimer pages for more information about how the platform works and the responsibilities of users.",
  },
];

export function HomeFaqs() {
  return (
    <section className="relative overflow-hidden border-t py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />
      <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Badge variant="secondary" className="mb-5 rounded-full px-4 py-1">
            FAQs
          </Badge>

          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Answers To Common
            <span className="text-primary"> Job Seeker Questions</span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A quick guide to how RojgarSync works, how to use the platform
            safely, and where to find more information before you apply.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card
              key={faq.question}
              className="rounded-[1.75rem] border bg-background/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardContent className="p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <CircleHelp className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold tracking-tight">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-10 rounded-[2rem] border bg-secondary/30 shadow-none">
          <CardContent className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <ShieldCheck className="h-4 w-4" />
                Stay safe while applying
              </div>
              <p className="max-w-2xl text-muted-foreground">
                Review our legal and policy pages if you want more detail about
                privacy, platform limitations, and safe application practices.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 rounded-xl border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                Privacy Policy
              </Link>
              <Link
                href="/disclaimer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Read Disclaimer
                <Sparkles className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
