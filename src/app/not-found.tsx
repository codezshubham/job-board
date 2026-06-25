import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FileQuestion, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] px-4 text-center overflow-hidden">
      {/* Background large 404 text for visual depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-black tracking-tighter text-primary/[0.03] select-none -z-10 pointer-events-none">
        404
      </div>

      <div className="relative">
        <div className="absolute inset-0 -m-8 scale-150 rounded-full bg-primary/20 blur-3xl opacity-60"></div>
        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-background border border-primary/20 shadow-2xl mb-8 mx-auto">
          <FileQuestion className="h-12 w-12 text-primary" />
        </div>
      </div>
      
      {/* Small text indicator */}
      <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
        Status 404
      </div>

      <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
        Page Not Found
      </h2>
      
      <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10 leading-relaxed">
        Oops! We couldn&apos;t find the page or job listing you&apos;re looking for. It might have been removed, renamed, or is temporarily unavailable.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Link
          href="/"
          className={buttonVariants({
            size: "lg",
            className: "rounded-xl px-8 w-full sm:w-auto shadow-lg transition-all hover:scale-105",
          })}
        >
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/jobs"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "rounded-xl px-8 w-full sm:w-auto shadow-sm",
          })}
        >
          <Search className="mr-2 h-4 w-4" />
          Browse Jobs
        </Link>
      </div>
    </div>
  );
}
