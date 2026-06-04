import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { articles, getArticleBySlug } from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata(
  props: ArticlePageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage(props: ArticlePageProps) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex-1">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container relative mx-auto max-w-4xl px-4 py-20">
          <div className="space-y-6">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to articles
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="rounded-full px-4 py-1">
                {article.category}
              </Badge>
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4" />
                {article.readTime}
              </div>
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {article.title}
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {article.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-8">
          {article.sections.map((section) => (
            <Card
              key={section.heading}
              className="rounded-3xl border bg-background shadow-sm"
            >
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  {section.heading}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets && section.bullets.length > 0 && (
                  <div className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <div className="mt-2 h-2 w-2 rounded-full bg-primary/70" />
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 pb-20">
        <Card className="rounded-[2rem] border bg-secondary/30 shadow-none">
          <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Continue exploring career tips
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                Browse more articles or head to the jobs page to put these
                ideas into action.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 rounded-xl border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                More articles
              </Link>
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Browse jobs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
