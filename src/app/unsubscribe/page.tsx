import type { Metadata } from "next";
import UnsubscribePageClient from "@/components/UnsubscribePageClient";
import { createNoIndexMetadata } from "@/lib/seo";

export const metadata: Metadata = createNoIndexMetadata(
  "Unsubscribe from RojgarSync Alerts",
  "Manage your RojgarSync email alert subscription and unsubscribe securely using email verification.",
  "/unsubscribe"
);

export default function UnsubscribePage() {
  return <UnsubscribePageClient />;
}
