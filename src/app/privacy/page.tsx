import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  Eye,
  BellRing,
  Link2,
  TriangleAlert,
  Trash2,
} from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your information when you use RojgarSync.",
  canonical: "/privacy",
  keywords: [
    "RojgarSync privacy policy",
    "job platform privacy",
    "data protection",
    "email alerts privacy",
  ],
});

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    description:
      "We may collect information you provide directly, such as your email address, account or administrator details, communications you send to us, and information submitted through forms. We may also collect limited technical information such as browser type, device information, IP-related metadata, and usage data needed to operate, secure, and improve the platform.",
  },
  {
    icon: Eye,
    title: "How We Use Information",
    description:
      "We use information to provide the platform, send requested emails and alerts, administer subscriptions, maintain security, troubleshoot issues, prevent abuse, comply with legal obligations, and improve the user experience.",
  },
  {
    icon: BellRing,
    title: "Sharing and Disclosure",
    description:
      "We do not sell personal information in exchange for money. We may share information with service providers and infrastructure vendors that help us operate the platform, or when disclosure is reasonably necessary to comply with law, enforce our terms, protect rights and safety, investigate fraud, or respond to lawful requests.",
  },
  {
    icon: Cookie,
    title: "Cookies & Tracking",
    description:
      "We may use cookies, session technologies, and local storage for essential site functions, authentication, abuse prevention, preferences, and performance. Some features may not work properly if these technologies are disabled.",
  },
  {
    icon: Trash2,
    title: "Retention and Minimization",
    description:
      "We aim to keep personal information only for as long as reasonably necessary for the purposes described in this policy, including operating the service, maintaining records, resolving disputes, and meeting legal or security requirements. We may remove, anonymize, or aggregate information when individual identification is no longer needed.",
  },
  {
    icon: Lock,
    title: "Security Measures and Limits",
    description:
      "We use reasonable administrative, technical, and organizational measures to help protect information. However, no website, database, transmission method, or storage system can be guaranteed to be completely secure, and we cannot promise absolute protection against unauthorized access, outages, misuse, or data breaches.",
  },
  {
    icon: Link2,
    title: "Third-Party Services and Employers",
    description:
      "This policy applies only to our platform. If you click external job links, apply on a third-party site, communicate with an employer, or use another service connected from our platform, that third party's privacy practices apply instead of ours.",
  },
  {
    icon: ShieldCheck,
    title: "Your Rights and Choices",
    description:
      "Depending on your location and applicable law, you may have rights to access, correct, delete, or limit certain uses of your personal information. We will evaluate and respond to qualifying requests in accordance with applicable law, and some rights may be subject to verification, exceptions, or legal limitations.",
  },
  {
    icon: TriangleAlert,
    title: "Policy Changes",
    description:
      "We may update this Privacy Policy from time to time to reflect operational, legal, or security changes. When we do, we will post the revised version on this page, and continued use of the platform after the update means you acknowledge the revised policy.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex-1">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container relative mx-auto max-w-5xl px-4 py-20">
          <div className="space-y-6 text-center">
            <Badge variant="secondary" className="rounded-full px-4 py-1 text-sm">
              Privacy & Security
            </Badge>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Privacy Policy
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Your privacy matters to us. This policy explains how we collect,
              use, share, retain, and protect information while avoiding
              overpromising about security, third-party conduct, or legal
              rights beyond what applicable law requires.
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
              We are committed to maintaining transparency and using reasonable
              safeguards for the information we handle. By using our platform,
              you acknowledge the practices described in this Privacy Policy,
              including the inherent limitations of online data security and
              third-party services.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto max-w-5xl px-4 pb-10">
        <Card className="rounded-3xl border border-primary/15 bg-primary/[0.04] shadow-none">
          <CardContent className="p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              We encourage users not to submit highly sensitive information
              unless it is clearly required for a legitimate purpose. For
              example, you should not provide bank account details, government
              identification numbers, or payment information to third-party
              employers unless you have independently verified the request.
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
