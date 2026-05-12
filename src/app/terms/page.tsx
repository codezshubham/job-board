import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review the terms and conditions that govern the use of our job board and related services.",
};
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Shield,
  Scale,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    description:
      "By accessing and using our platform, you agree to comply with these Terms & Conditions and any applicable policies or guidelines associated with our services.",
  },
  {
    icon: Shield,
    title: "Provision of Service",
    description:
      "We may update, modify, suspend, or discontinue parts of the platform at any time without prior notice. Job listings and submitted content remain the responsibility of their original owners.",
  },
  {
    icon: Scale,
    title: "User Conduct",
    description:
      "Users must use the platform lawfully and respectfully. Fraudulent, abusive, discriminatory, or misleading content is strictly prohibited and may result in removal or account restrictions.",
  },
  {
    icon: ExternalLink,
    title: "External Links",
    description:
      "Our platform may contain links to third-party websites or job applications. We are not responsible for the content, practices, or policies of external platforms.",
  },
  {
    icon: AlertTriangle,
    title: "Disclaimer of Liability",
    description:
      "The platform is provided for informational purposes only. We are not responsible for hiring decisions, business outcomes, financial losses, or damages arising from the use of our services.",
  },
];

export default function TermsPage() {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container relative mx-auto max-w-5xl px-4 py-20">
          <div className="text-center space-y-6">
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-1 text-sm"
            >
              Legal Information
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              Terms & Conditions
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Please review these terms carefully before using our platform and
              services.
            </p>

            <p className="text-sm text-muted-foreground">
              Last updated: May 2026
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto max-w-5xl px-4 py-14">
        <Card className="rounded-3xl border bg-secondary/20 shadow-none">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              These Terms & Conditions govern your access to and use of our
              platform. By continuing to use our services, you acknowledge and
              agree to these terms.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Terms Sections */}
      <section className="container mx-auto max-w-5xl px-4 pb-20">
        <div className="grid gap-6">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <Card
                key={section.title}
                className="rounded-3xl border bg-background hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="rounded-2xl bg-primary/10 p-3 border">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold tracking-tight">
                        {section.title}
                      </h2>

                      <p className="text-muted-foreground leading-relaxed">
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
