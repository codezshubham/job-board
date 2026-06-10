import Link from "next/link";
import type { SVGProps } from "react";
import { Send } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M21.5 4.4 18.3 19c-.2 1-.9 1.2-1.7.8l-4.7-3.4-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.8-7.9c.4-.3-.1-.5-.6-.2L6.3 12.8 1.7 11.4c-1-.3-1-1 .2-1.5L20.2 3c.9-.3 1.6.2 1.3 1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TelegramCta() {
  return (
    <section className="container mx-auto w-full max-w-7xl px-4 py-10 md:py-14">
      <div className="relative overflow-hidden rounded-[2rem] border border-sky-200/70 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100/80 px-6 py-8 text-center shadow-[0_24px_80px_-40px_rgba(34,158,217,0.75)] dark:border-sky-400/20 dark:from-sky-950/20 dark:via-blue-950/30 dark:to-cyan-950/20 md:px-10 md:py-10">
        <div className="absolute inset-x-1/4 top-0 h-24 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-400/10" />

        <div className="relative flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-white/75 px-3 py-1 text-sm font-semibold text-sky-700 backdrop-blur dark:border-sky-300/20 dark:bg-slate-950/40 dark:text-sky-200">
            <TelegramIcon className="size-4" />
            Instant Updates
          </div>

          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white md:text-3xl">
              Join our Telegram channel for fresh job alerts
            </h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">
              Get direct apply links, verified openings, and daily hiring
              updates as soon as they go live.
            </p>
          </div>

          <Link
            href="https://t.me/rojgarsyncjobs"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-full bg-[#229ED9] px-6 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] hover:bg-[#1d8fc4]",
            )}
          >
            <span className="flex items-center gap-2">
              <TelegramIcon className="size-5" />
              Join Telegram
              <Send className="size-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
