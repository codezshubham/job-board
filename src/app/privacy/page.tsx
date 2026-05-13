import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read our privacy policy to understand how we collect, use, and protect your information when you use RojgarSync.",
};
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  Eye,
} from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    description:
      "We collect information you provide directly to us, including your name, email address, and any details shared while using the platform. We also gather limited analytics data such as browser type and device information to improve reliability and user experience.",
  },
  {
    icon: Eye,
    title: "Sharing of Information",
    description:
      "We never sell your personal information. Data may only be shared with trusted service providers who help us operate the platform and are required to keep all information secure and confidential.",
  },
  {
    icon: Lock,
    title: "Data Retention",
    description:
      "Your information is stored only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and maintain platform security.",
  },
  {
    icon: Cookie,
    title: "Cookies & Tracking",
    description:
      "We use essential cookies and local storage to maintain secure sessions, remember preferences like dark mode, and improve overall functionality and performance.",
  },
  {
    icon: ShieldCheck,
    title: "Your Privacy Rights",
    description:
      "Depending on your region, you may request access, correction, or deletion of your personal data under applicable privacy regulations such as GDPR or CCPA.",
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy & Security
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              Privacy Policy
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Your privacy matters to us. This policy explains how we collect,
              use, and protect your information while using our platform.
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
              We are committed to maintaining transparency and protecting your
              personal information. By using our platform, you agree to the
              practices described in this Privacy Policy.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Policy Sections */}
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
