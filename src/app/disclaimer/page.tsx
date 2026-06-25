import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BadgeAlert,
  CircleHelp,
  ExternalLink,
  FileWarning,
  SearchCheck,
  ShieldAlert,
  UserRoundSearch,
} from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Disclaimer",
  description:
    "Read the RojgarSync disclaimer about informational content, third-party job listings, verification responsibilities, and platform limitations.",
  canonical: "/disclaimer",
  keywords: [
    "RojgarSync disclaimer",
    "job listing disclaimer",
    "job verification notice",
    "third party listings",
  ],
});

const sections = [
  {
    icon: FileWarning,
    title: "Information Only",
    description:
      "RojgarSync is provided for general informational purposes only. The platform is designed to help users discover job opportunities and related information, but it does not provide employment, recruitment, legal, tax, financial, career, or professional advice.",
  },
  {
    icon: UserRoundSearch,
    title: "Independent Verification Required",
    description:
      "Users are responsible for independently reviewing job listings, employers, compensation details, deadlines, eligibility requirements, and all communications received through or after using the platform. You should verify legitimacy before sharing documents, personal data, or sensitive credentials.",
  },
  {
    icon: ExternalLink,
    title: "Third-Party Links and Applications",
    description:
      "Many listings may direct you to third-party websites, forms, application portals, or employer-managed channels. We do not control those destinations and are not responsible for their content, policies, uptime, security, or actions once you leave our platform.",
  },
  {
    icon: SearchCheck,
    title: "No Guarantee of Accuracy or Hiring Outcome",
    description:
      "We do not guarantee that job posts, company details, salary information, benefits, deadlines, work arrangements, or contact information are accurate, complete, current, or available. We also do not guarantee interviews, callbacks, offers, hiring decisions, or employment outcomes.",
  },
  {
    icon: ShieldAlert,
    title: "Scams and Sensitive Requests",
    description:
      "Although we may take reasonable steps to reduce spam and misleading content, no screening process is perfect. Treat any request for money, OTPs, bank details, gift cards, government identification, or other highly sensitive information as a warning sign unless you have fully verified the party through your own due diligence.",
  },
  {
    icon: CircleHelp,
    title: "No Endorsement",
    description:
      "References to employers, brands, products, services, or opportunities on the platform do not mean that RojgarSync endorses, recommends, certifies, or guarantees them unless we explicitly say so in writing.",
  },
  {
    icon: BadgeAlert,
    title: "Use at Your Own Risk",
    description:
      "Your use of the platform is at your own risk. To the fullest extent permitted by applicable law, RojgarSync disclaims liability for losses, damages, fraud, identity misuse, missed opportunities, or disputes arising from reliance on platform content, third-party listings, or off-platform interactions.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="flex-1">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container relative mx-auto max-w-5xl px-4 py-20">
          <div className="space-y-6 text-center">
            <Badge variant="secondary" className="rounded-full px-4 py-1 text-sm">
              Important Notice
            </Badge>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Disclaimer
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              This page explains the limits of the information and services
              available on RojgarSync, including the role of third-party job
              listings and your responsibility to verify opportunities
              independently.
            </p>

            <p className="text-sm text-muted-foreground">
              Last updated: June 4, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 py-14">
        <Card className="rounded-3xl border bg-secondary/20 shadow-none">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              By using this platform, you acknowledge that RojgarSync serves as
              a discovery and information service only. You should make your own
              decisions after conducting appropriate checks on every employer,
              application link, and request for information.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto max-w-5xl px-4 pb-10">
        <Card className="rounded-3xl border border-amber-500/20 bg-amber-500/5 shadow-none">
          <CardContent className="p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Important: Never send money, OTPs, banking details, or identity
              documents to an employer or recruiter unless you have independently
              confirmed that the request is legitimate and necessary.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto max-w-5xl px-4 pb-20">
        <div className="grid gap-6">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <Card
                key={section.title}
                className="rounded-3xl border bg-background transition-all duration-300 hover:shadow-md"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="rounded-2xl border bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold tracking-tight">
                        {section.title}
                      </h2>

                      <p className="leading-relaxed text-muted-foreground">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
