import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNav } from "@/components/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: {
    default: "Modern Job Board - Find Your Dream Career",
    template: "%s | JobBoard."
  },
  description: "Discover top opportunities, connect with leading companies, and build your future with confidence on our modern job board.",
  keywords: ["jobs", "career", "hiring", "opportunities", "remote work", "job board"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Modern Job Board",
    description: "Find your dream job on our modern job board with thousands of active listings.",
    siteName: "JobBoard."
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Job Board",
    description: "Discover top opportunities and connect with leading companies.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
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
                className="group flex items-center gap-2 transition-all"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md transition-transform duration-300 group-hover:scale-105">
                  <span className="text-lg font-bold">J</span>
                </div>

                <div className="flex flex-col leading-none">
                  <span className="text-lg font-bold tracking-tight">
                    JobBoard
                    <span className="text-primary">.</span>
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    Find your dream job
                  </span>
                </div>
              </Link>

              {/* Navigation */}
              <nav className="hidden items-center gap-1 md:flex">
                <Link
                  href="/jobs"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                  Browse Jobs
                </Link>

                <Link
                  href="/companies"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                  Companies
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
                  href="/jobs"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "md:inline-flex hidden rounded-xl px-5 shadow-md transition-all hover:scale-105 hover:shadow-lg"
                  )}
                >
                  Try Now
                </Link>

                <div className="md:hidden flex items-center">
                  <MobileNav />
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-border/40 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto max-w-7xl px-4 py-12">
              <div className="grid gap-10 md:grid-cols-4">
                {/* Brand */}
                <div className="space-y-4">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
                      <span className="text-lg font-bold">J</span>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold tracking-tight">
                        JobBoard<span className="text-primary">.</span>
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        Find your dream career
                      </p>
                    </div>
                  </Link>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Discover top opportunities, connect with leading companies,
                    and build your future with confidence.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                    Quick Links
                  </h3>

                  <div className="space-y-3">
                    <Link
                      href="/jobs"
                      className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      Browse Jobs
                    </Link>

                    <Link
                      href="/companies"
                      className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      Companies
                    </Link>

                    <Link
                      href="/jobs"
                      className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      Find a Job
                    </Link>
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                    Resources
                  </h3>

                  <div className="space-y-3">
                    <Link
                      href="/about"
                      className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      About Us
                    </Link>

                    <Link
                      href="/privacy"
                      className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      Privacy Policy
                    </Link>

                    <Link
                      href="/terms"
                      className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                </div>

                {/* Newsletter */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                    Stay Updated
                  </h3>

                  <p className="mb-4 text-sm text-muted-foreground">
                    Get the latest job postings and career tips directly in your
                    inbox.
                  </p>

                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full min-w-0 rounded-l-lg border border-r-0 border-input bg-background px-3 py-2 text-sm ring-offset-background outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
                    />
                    <button
                      type="button"
                      className="rounded-r-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} JobBoard. All rights reserved.
                </p>

                <div className="flex gap-4">
                  {/* Simplified Social Links */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
