import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="group flex items-center gap-2 rounded-xl py-1 transition-all duration-300 hover:opacity-90"
            >
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-white to-slate-50 shadow-lg shadow-blue-500/10 ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/20 group-hover:ring-blue-200 overflow-hidden">
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discover top opportunities, connect with leading companies, and
              build your future with confidence.
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
                href="/contact"
                className="block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
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
            © {new Date().getFullYear()} RojgarSync. All rights reserved.
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
  );
}
