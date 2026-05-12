import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our mission to help talented professionals connect with companies that truly value skills, innovation, and growth.",
};
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Users,
  Zap,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Helping talented professionals connect with companies that truly value skills, innovation, and growth.",
  },
  {
    icon: Users,
    title: "People Focused",
    description:
      "We believe hiring should be transparent, inclusive, and designed around real career growth.",
  },
  {
    icon: Zap,
    title: "Simple Experience",
    description:
      "No unnecessary complexity — discover opportunities and apply quickly with confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Listings",
    description:
      "Every listing is carefully moderated to reduce spam, scams, and misleading job posts.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container relative mx-auto max-w-5xl px-4 py-20">
          <div className="text-center space-y-6">
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-1 text-sm"
            >
              About Our Platform
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Building Careers.
              <span className="text-primary"> Creating Opportunities.</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              We connect ambitious professionals with companies that embrace
              innovation, flexibility, and meaningful work.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Designed for the modern workforce
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg">
                We believe talent is everywhere, but opportunities are not
                always accessible. Our platform helps bridge that gap by making
                high-quality jobs easier to discover.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Whether you are a software engineer, designer, marketer, or
                someone exploring their next big career move, we help you find
                roles that align with your ambitions and lifestyle.
              </p>
            </div>

            {/* Small Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="text-sm text-muted-foreground">
                  Active Opportunities
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">2K+</h3>
                <p className="text-sm text-muted-foreground">
                  Hiring Companies
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="rounded-3xl border bg-secondary/30 p-8 backdrop-blur">
              <div className="space-y-5">
                <div className="rounded-2xl bg-background p-5 border shadow-sm">
                  <p className="font-medium">
                    Remote-first opportunities
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Flexible roles from companies worldwide.
                  </p>
                </div>

                <div className="rounded-2xl bg-background p-5 border shadow-sm">
                  <p className="font-medium">
                    Transparent hiring
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Clear salary ranges and verified employers.
                  </p>
                </div>

                <div className="rounded-2xl bg-background p-5 border shadow-sm">
                  <p className="font-medium">
                    Career-focused community
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Learn, grow, and discover better opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto max-w-5xl px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="group rounded-3xl border bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="p-7">
                  <div className="mb-5 w-fit rounded-2xl bg-background p-3 border">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
