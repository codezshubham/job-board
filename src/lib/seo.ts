import type { Metadata } from "next";

type PageMetadataOptions = {
  canonical: string;
  description: string;
  keywords?: string[];
  robots?: Metadata["robots"];
  title: string;
};

const DEFAULT_OG_IMAGE = "/Rojgarog-image.png";

export function createPageMetadata({
  canonical,
  description,
  keywords,
  robots,
  title,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "RojgarSync",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    ...(robots ? { robots } : {}),
  };
}

export function createNoIndexMetadata(
  title: string,
  description: string,
  canonical: string
) {
  return createPageMetadata({
    title,
    description,
    canonical,
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    },
  });
}
