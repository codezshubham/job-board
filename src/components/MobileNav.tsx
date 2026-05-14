"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, BriefcaseBusiness, Building2, Info } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";


export function MobileNav() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    {
      title: "Browse Jobs",
      href: "/jobs",
      icon: BriefcaseBusiness,
    },
    {
      title: "Companies",
      href: "/companies",
      icon: Building2,
    },
    {
      title: "Remote Jobs",
      href: "/jobs?workMode=Remote",
      icon: BriefcaseBusiness,
    },
    {
      title: "Fresher Jobs",
      href: "/jobs?experience=Fresher",
      icon: BriefcaseBusiness,
    },
    {
      title: "Hybrid Jobs",
      href: "/jobs?workMode=Hybrid",
      icon: BriefcaseBusiness,
    },
    {
      title: "Onsite Jobs",
      href: "/jobs?workMode=On-site",
      icon: BriefcaseBusiness,
    },
    {
      title: "Experienced Jobs",
      href: "/jobs?experience=Experienced",
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle Menu"
        onClick={() => setOpen(!open)}
        className="rounded-xl border border-border/50 bg-background/80 backdrop-blur-md"
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300",
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        )}
      />

      {/* Slider Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 flex h-[100dvh] w-[85%] max-w-[320px] flex-col border-l border-border/50 bg-background/95 backdrop-blur-2xl shadow-2xl transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="relative shrink-0 border-b border-border/50 p-5">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10" />

          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <div>
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

              
            </div>

            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="rounded-xl"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 rounded-2xl p-3 transition-all duration-200 hover:bg-muted"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-all duration-200 group-hover:bg-blue-100 dark:group-hover:bg-blue-950">
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-blue-600" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-sm font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted-foreground">
                    Explore {item.title.toLowerCase()}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative shrink-0 border-t border-border/50 p-4 mt-auto">
          <Link
            href="/jobs"
            onClick={() => setOpen(false)}
            className={buttonVariants({
              variant: "default",
              className:
                "h-12 w-full rounded-2xl bg-foreground text-background text-base font-semibold shadow-lg transition-all hover:scale-[1.02] hover:opacity-90",
            })}
          >
            Try Now
          </Link>
        </div>
      </div>
    </div>
  );
}