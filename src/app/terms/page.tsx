import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Shield,
  Scale,
  ExternalLink,
  AlertTriangle,
  BriefcaseBusiness,
  Ban,
  RefreshCw,
  Gavel,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the terms and conditions that govern the use of RojgarSync and related services.",
};

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    description:
      "By accessing or using the platform, you agree to these Terms & Conditions, our posted policies, and any additional rules we publish for specific features or services. If you do not agree, you should stop using the platform.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Platform Role Only",
    description:
      "RojgarSync acts only as an informational platform that helps users discover job opportunities and helps posters publish listings. We are not an employer, recruiter, staffing agency, hiring manager, agent, guarantor, or representative of any company unless expressly stated in writing.",
  },
  {
    icon: Shield,
    title: "Listings and Third-Party Content",
    description:
      "Job listings, company details, application links, compensation information, deadlines, and related statements may be supplied by third parties. We do not guarantee that any listing is accurate, complete, lawful, current, safe, available, or free from fraud, impersonation, or unauthorized changes.",
  },
  {
    icon: ExternalLink,
    title: "External Links and Applications",
    description:
      "Our platform may link to external websites, forms, and application portals that we do not own or control. Once you leave our platform, your interactions are governed by the third party's terms, privacy practices, and security controls, not ours.",
  },
  {
    icon: Scale,
    title: "User Responsibilities",
    description:
      "You are responsible for independently evaluating employers, offers, and requests for information or payment. Never send money, gift cards, bank credentials, identity documents, OTPs, or other sensitive information unless you have confirmed legitimacy through your own due diligence.",
  },
  {
    icon: Ban,
    title: "Prohibited Conduct",
    description:
      "You may not post, transmit, or rely on the platform for fraudulent, deceptive, unlawful, discriminatory, infringing, abusive, malicious, or misleading activity. We may remove content, restrict access, or cooperate with law enforcement where appropriate.",
  },
  {
    icon: AlertTriangle,
    title: "No Warranty",
    description:
      'The platform is provided on an "as is" and "as available" basis to the fullest extent permitted by applicable law. We disclaim warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, non-infringement, uninterrupted availability, and freedom from errors, malware, or security incidents.',
  },
  {
    icon: Gavel,
    title: "Limitation of Liability",
    description:
      "To the fullest extent permitted by applicable law, we are not liable for job scams, fraudulent postings, hiring outcomes, employment decisions, interview results, pay disputes, identity theft, lost profits, business interruption, reputational harm, data loss, or any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the platform.",
  },
  {
    icon: RefreshCw,
    title: "Changes, Suspension, and Removal",
    description:
      "We may modify, suspend, restrict, remove, or discontinue any part of the platform or any listing at any time, with or without notice. We may also update these terms from time to time, and continued use after changes are posted means you accept the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="flex-1">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container relative mx-auto max-w-5xl px-4 py-20">
          <div className="space-y-6 text-center">
            <Badge variant="secondary" className="rounded-full px-4 py-1 text-sm">
              Legal Information
            </Badge>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Terms & Conditions
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Please review these terms carefully before using our platform and
              services. They are intended to clarify the limited role of the
              platform and your responsibilities when interacting with job
              listings and third parties.
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
              These Terms & Conditions govern your access to and use of our
              platform. They do not create an employment relationship,
              partnership, agency, fiduciary duty, or guarantee of hiring,
              placement, screening, or verification by RojgarSync.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto max-w-5xl px-4 pb-10">
        <Card className="rounded-3xl border border-amber-500/20 bg-amber-500/5 shadow-none">
          <CardContent className="p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Important: We encourage users to verify every opportunity
              independently. If an employer or recruiter asks for money,
              gift-card codes, bank information, or sensitive identity documents
              before a legitimate hiring process, treat it as a potential scam
              and stop the interaction immediately.
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
