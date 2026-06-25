import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNav } from "@/components/MobileNav";
import { Footer } from "@/components/Footer";
import { TelegramCta } from "@/components/TelegramCta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://rojgarsync.in"
  ),

  title: {
    default: "RojgarSync | Daily Job Updates & Direct Apply Links",
    template: "%s | RojgarSync",
  },

  description:
    "Get daily job updates, direct apply links, and verified hiring alerts. Find remote, fresher, and IT jobs from top companies across India on RojgarSync.",

  keywords: [
    // Brand
    "RojgarSync",
    "Rojgar Sync",

    // Core Job Keywords
    "jobs",
    "job portal",
    "job board",
    "latest jobs",
    "new job openings",
    "daily job updates",
    "job vacancy",
    "hiring now",
    "urgent hiring",
    "career opportunities",

    // Apply Keywords
    "direct apply links",
    "easy apply jobs",
    "apply online jobs",
    "one click apply jobs",

    // User Intent Keywords
    "find jobs",
    "search jobs",
    "jobs near me",
    "online jobs",
    "remote jobs",
    "work from home jobs",

    // India Specific
    "jobs in India",
    "India jobs",
    "private jobs in India",
    "government jobs",
    "fresher jobs in India",

    // Tech Keywords
    "software developer jobs",
    "frontend developer jobs",
    "backend developer jobs",
    "full stack developer jobs",
    "React jobs",
    "Next.js jobs",
    "Node.js jobs",
    "JavaScript jobs",
    "web developer jobs",

    // Experience Level
    "fresher jobs",
    "entry level jobs",
    "internships",
    "graduate jobs",

    // Categories
    "IT jobs",
    "engineering jobs",
    "startup jobs",
    "MNC jobs",

    // Trending
    "latest hiring",
    "top companies hiring",
    "verified job listings",
    "daily hiring alerts",
  ],

  authors: [
    {
      name: "RojgarSync",
    },
  ],

  creator: "RojgarSync",

  publisher: "RojgarSync",

  category: "Jobs & Careers",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",

    title:
      "RojgarSync - Daily Job Updates & Direct Apply Links",

    description:
      "Find verified jobs, internships, fresher openings, remote jobs, and direct apply links updated daily on RojgarSync.",

    siteName: "RojgarSync",

    images: [
      {
        url: "/Rojgarog-image.png",
        width: 1200,
        height: 630,
        alt: "RojgarSync - Job Portal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "RojgarSync - Latest Job Openings & Hiring Alerts",

    description:
      "Explore verified job opportunities, direct apply links, internships, and remote jobs on RojgarSync.",

    images: ["/Rojgarog-image.png"],

    creator: "@rojgarsync",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7892872345424109"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
              {/* Logo */}
              <Link
                href="/"
                className="group flex items-center gap-2 rounded-xl py-1 transition-all duration-300 hover:opacity-90"
              >
                <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-white to-slate-50 shadow-lg shadow-blue-500/10 ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/20 group-hover:ring-blue-200 overflow-hidden">
                  <Image
                    src="/Rojgarlogo.png"
                    alt="Rojgar Sync Logo"
                    width={72}
                    height={72}
                    className="object-contain p-1 z-10 transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>

                <div className="flex items-baseline pl-0.5 transition-transform duration-300 group-hover:translate-x-0.5">
                <span className="text-2xl font-extrabold tracking-tight text-foreground">
                  Rojgar
                </span>
                <span className="text-2xl font-extrabold tracking-tighter bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text text-transparent italic pr-1">
                  Sync
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse ml-0.5 mb-1" />
              </div>
              </Link>

              {/* Navigation */}
              <nav className="hidden items-center gap-1 md:flex">
                <div className="group relative">
                  <Link
                    href="/jobs"
                    className="flex shadow-none bg-transparent items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                  >
                    Browse Jobs
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
                  </Link>
                  {/* Dropdown menu */}
                  <div className="absolute left-0 top-full pt-1 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50">
                    <div className="w-56 rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-lg p-2 flex flex-col gap-1">
                      <Link href="/jobs" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                        All Jobs
                      </Link>
                      <Link href="/remote-jobs" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                        Remote Jobs
                      </Link>
                      <Link href="/fresher-jobs" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                        Fresher Jobs
                      </Link>
                      <Link href="/hybrid-jobs" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                        Hybrid Jobs
                      </Link>
                      <Link href="/on-site-jobs" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                        On-site Jobs
                      </Link>
                      <Link href="/experienced-jobs" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                        Experienced Jobs
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/companies"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                  Companies
                </Link>

                <Link
                  href="/articles"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                  Articles
                </Link>

                <Link
                  href="/about"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                  About
                </Link>
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <ThemeToggle />

                <Link
                  href="/subscribe"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "md:inline-flex hidden rounded-xl px-5 shadow-md transition-all hover:scale-105 hover:shadow-lg",
                  )}
                >
                  Subscribe Now
                </Link>

                <div className="md:hidden flex items-center">
                  <MobileNav />
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1">
            {children}
            <TelegramCta />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
