"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open && (
        <div className="absolute top-16 left-0 right-0 border-b border-border/40 bg-background/95 backdrop-blur-xl p-4 shadow-lg flex flex-col gap-4 z-50">
          <Link 
            href="/jobs" 
            className="text-sm font-medium p-2 hover:bg-muted rounded-md transition-colors" 
            onClick={() => setOpen(false)}
          >
            Browse Jobs
          </Link>
          <Link 
            href="/companies" 
            className="text-sm font-medium p-2 hover:bg-muted rounded-md transition-colors" 
            onClick={() => setOpen(false)}
          >
            Companies
          </Link>
          <Link 
            href="/about" 
            className="text-sm font-medium p-2 hover:bg-muted rounded-md transition-colors" 
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/jobs"
            onClick={() => setOpen(false)}
            className={buttonVariants({
              variant: "default",
              className: "w-full rounded-xl shadow-md",
            })}
          >
            Try Now
          </Link>
        </div>
      )}
    </div>
  );
}