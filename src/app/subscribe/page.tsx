import type { Metadata } from "next";
import SubscribePageClient from "@/components/SubscribePageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Subscribe to Daily Job Alerts",
    description:
      "Subscribe to RojgarSync job alerts and get fresh openings, direct apply links, and curated hiring updates in your inbox.",
    canonical: "/subscribe",
    keywords: [
      "subscribe job alerts",
      "daily job alerts",
      "job email subscription",
      "latest job notifications",
      "RojgarSync subscribe",
      "job updates by email",
    ],
  }),
  keywords: [
    "subscribe job alerts",
    "daily job alerts",
    "job email subscription",
    "latest job notifications",
    "RojgarSync subscribe",
    "job updates by email",
  ],
};

export default function SubscribePage() {
  return <SubscribePageClient />;
}
