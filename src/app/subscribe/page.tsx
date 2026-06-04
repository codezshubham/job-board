import type { Metadata } from "next";
import SubscribePageClient from "@/components/SubscribePageClient";

export const metadata: Metadata = {
  title: "Subscribe to Daily Job Alerts",
  description:
    "Subscribe to RojgarSync job alerts and get fresh openings, direct apply links, and curated hiring updates in your inbox.",
  keywords: [
    "subscribe job alerts",
    "daily job alerts",
    "job email subscription",
    "latest job notifications",
    "RojgarSync subscribe",
    "job updates by email",
  ],
  alternates: {
    canonical: "/subscribe",
  },
  openGraph: {
    title: "Subscribe to Daily Job Alerts | RojgarSync",
    description:
      "Get curated job updates, fresh openings, and direct apply links delivered to your inbox with RojgarSync.",
    url: "/subscribe",
    siteName: "RojgarSync",
    images: [
      {
        url: "/Rojgarog-image.png",
        width: 1200,
        height: 630,
        alt: "Subscribe to job alerts on RojgarSync",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subscribe to Daily Job Alerts | RojgarSync",
    description:
      "Receive fresh job openings, curated hiring updates, and direct apply links in your inbox.",
    images: ["/Rojgarog-image.png"],
  },
};

export default function SubscribePage() {
  return <SubscribePageClient />;
}
