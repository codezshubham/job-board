import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function SectionHeadingSkeleton() {
  return (
    <div className="space-y-4 text-center">
      <Skeleton className="mx-auto h-6 w-32 rounded-full" />
      <Skeleton className="mx-auto h-10 w-64 md:h-14 md:w-96" />
      <Skeleton className="mx-auto h-4 w-full max-w-2xl" />
      <Skeleton className="mx-auto h-4 w-4/5 max-w-xl" />
    </div>
  );
}

function JobCardSkeleton() {
  return (
    <Card className="overflow-hidden border-primary/10">
      <CardContent className="space-y-5 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <Skeleton className="h-14 w-14 rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-56 max-w-full" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 rounded-lg border bg-secondary/20 p-3 md:flex md:flex-wrap md:gap-x-6">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-24" />
        </div>

        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-7 w-20 rounded-full" />
          <Skeleton className="h-7 w-24 rounded-full" />
          <Skeleton className="h-7 w-16 rounded-full" />
          <Skeleton className="h-7 w-28 rounded-full" />
        </div>

        <div className="flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-36" />
          </div>
          <Skeleton className="h-10 w-28 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
}

function JobDetailSectionSkeleton({
  lineCount = 4,
}: {
  lineCount?: number;
}) {
  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
      <Skeleton className="mb-6 h-8 w-48" />
      <div className="space-y-3">
        {Array.from({ length: lineCount }).map((_, index) => (
          <Skeleton
            key={index}
            className={`h-4 ${index === lineCount - 1 ? "w-3/4" : "w-full"}`}
          />
        ))}
      </div>
    </section>
  );
}

export function SitePageSkeleton() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="space-y-14">
        <SectionHeadingSkeleton />

        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="rounded-3xl">
              <CardContent className="space-y-5 p-6">
                <Skeleton className="h-12 w-12 rounded-2xl" />
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-10 w-32 rounded-xl" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-3xl">
            <CardContent className="space-y-4 p-6">
              <Skeleton className="h-7 w-40" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
          <Card className="rounded-3xl">
            <CardContent className="space-y-4 p-6">
              <Skeleton className="h-7 w-48" />
              <Skeleton className="h-24 w-full rounded-2xl" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function JobFiltersSkeleton() {
  return (
    <div className="relative mb-8 overflow-hidden rounded-3xl border border-border/50 bg-card/60 p-5 shadow-xl shadow-blue-500/5 backdrop-blur-xl md:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 space-y-2">
          <Skeleton className="h-7 w-56" />
          <Skeleton className="h-4 w-full max-w-md" />
        </div>
        <Skeleton className="h-14 w-full rounded-2xl sm:w-36" />
      </div>
    </div>
  );
}

export function JobsPageSkeleton() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="space-y-8">
        <SectionHeadingSkeleton />
        <JobFiltersSkeleton />

        <div className="grid gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <JobCardSkeleton key={index} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <Skeleton className="h-10 w-24 rounded-md" />
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export function JobDetailsPageSkeleton() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="space-y-8">
        <div className="overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-r from-primary/5 via-background to-primary/5 p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <Skeleton className="h-11 w-24 rounded-xl" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <Skeleton className="hidden h-9 w-28 rounded-full md:block" />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-6">
            <Skeleton className="h-20 w-20 rounded-xl md:h-24 md:w-24" />
            <div className="space-y-3">
              <Skeleton className="h-10 w-64 max-w-full md:h-12 md:w-80" />
              <Skeleton className="h-6 w-40 md:w-52" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          <div className="order-2 space-y-10 lg:order-1 lg:col-span-2">
            <JobDetailSectionSkeleton lineCount={4} />
            <JobDetailSectionSkeleton lineCount={5} />
            <JobDetailSectionSkeleton lineCount={4} />

            <div className="flex h-48 items-center justify-center rounded-2xl border bg-white p-6 shadow-sm md:h-72">
              <Skeleton className="h-full w-full rounded-xl" />
            </div>

            <section className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <Skeleton className="mb-6 h-8 w-40" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 8 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-9 w-20 rounded-full"
                  />
                ))}
              </div>
            </section>

            <section className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <Skeleton className="mb-6 h-8 w-52" />
              <div className="space-y-6">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Skeleton className="mt-1 h-6 w-6 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Skeleton className="h-12 w-full rounded-md md:w-56" />
          </div>

          <div className="order-1 space-y-6 lg:order-2 lg:col-span-1">
            <Card className="border-2 border-primary/10 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Skeleton className="h-6 w-36" />
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Skeleton className="h-5 w-5 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t pt-12">
          <Skeleton className="mb-8 h-9 w-40" />
          <div className="flex flex-col gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4 md:items-center">
                      <Skeleton className="h-12 w-12 rounded-md md:h-16 md:w-16" />
                      <div className="space-y-2">
                        <Skeleton className="h-6 w-52" />
                        <Skeleton className="h-4 w-32" />
                        <div className="flex flex-wrap gap-3">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-4 w-20" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                    </div>
                    <Skeleton className="h-10 w-full rounded-md md:w-28" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CompaniesPageSkeleton() {
  return (
    <div className="flex-1">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container relative mx-auto max-w-6xl px-4 py-20">
          <SectionHeadingSkeleton />
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="rounded-3xl">
              <CardContent className="space-y-6 p-7">
                <div className="flex items-start gap-4">
                  <Skeleton className="h-16 w-16 rounded-2xl" />
                  <div className="flex-1 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-28" />
                  </div>
                </div>
                <Skeleton className="h-10 w-full rounded-xl" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export function AdminPageSkeleton() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Skeleton className="h-9 w-44" />
        <Skeleton className="h-10 w-full rounded-md sm:w-36" />
      </div>

      <div className="overflow-hidden rounded-lg border bg-background">
        <div className="grid gap-0 border-b md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="px-4 py-3">
              <Skeleton className="h-4 w-full max-w-24" />
            </div>
          ))}
        </div>
        <div className="space-y-0">
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4 border-b px-4 py-4 last:border-b-0 md:grid-cols-6"
            >
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
              <div className="flex gap-2 md:justify-end">
                <Skeleton className="h-8 w-8 rounded-md" />
                <Skeleton className="h-8 w-8 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
