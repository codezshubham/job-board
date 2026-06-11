import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Quote, Star } from "lucide-react";

const feedbackItems = [
  {
    name: "Aarav Sharma",
    rating: "4.9/5",
    quote:
      "The daily updates saved me hours. I found fresh frontend openings here before they showed up on bigger job boards.",
  },
  {
    name: "Priya Nair",
    rating: "5.0/5",
    quote:
      "The filters felt simple and useful. I could quickly narrow down jobs by company, role, and remote preference.",
  },
  {
    name: "Rohan Verma",
    rating: "4.8/5",
    quote:
      "I liked that the listings felt more relevant. It made my job search feel focused instead of overwhelming.",
  },
  {
    name: "Sneha Kulkarni",
    rating: "4.9/5",
    quote:
      "I was checking multiple sites every day earlier. This gave me one clean place to discover strong design openings.",
  },
  {
    name: "Aditya Rao",
    rating: "5.0/5",
    quote:
      "The platform helped me spot verified roles quickly. That gave me more confidence while applying.",
  },
  {
    name: "Neha Bansal",
    rating: "4.8/5",
    quote:
      "The experience felt smooth on mobile too, so I could keep browsing openings during my commute.",
  },
  {
    name: "Karthik Iyer",
    rating: "4.9/5",
    quote:
      "Fresh postings and a clean search flow made a real difference. I discovered roles that matched my exact stack.",
  },
  {
    name: "Meera Joshi",
    rating: "4.8/5",
    quote:
      "The site feels trustworthy and easy to understand. I especially liked how quickly I could compare opportunities.",
  },
  {
    name: "Ananya Patel",
    rating: "5.0/5",
    quote:
      "The updates were consistent, and the layout made it easy to keep coming back without losing momentum.",
  },
];

const columns = Array.from({ length: 3 }, (_, columnIndex) =>
  feedbackItems.filter((_, itemIndex) => itemIndex % 3 === columnIndex),
);

const columnSettings = [
  { direction: "up", durationClassName: "feedback-marquee-duration-slow" },
  { direction: "down", durationClassName: "feedback-marquee-duration-medium" },
  { direction: "up", durationClassName: "feedback-marquee-duration-fast" },
] as const;

function FeedbackCard({ item }: { item: (typeof feedbackItems)[number] }) {
  return (
    <Card className="rounded-[1.75rem] border bg-background shadow-sm">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-bold tracking-tight">{item.name}</p>
            <div className="mt-2 flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={`${item.name}-${index}`} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>

          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            {item.rating}
          </span>
        </div>

        <p className="leading-relaxed text-muted-foreground">{item.quote}</p>

        <div className="flex justify-end border-t pt-4">
          <Quote className="h-5 w-5 text-primary/40" />
        </div>
      </CardContent>
    </Card>
  );
}

function FeedbackColumn({
  items,
  direction,
  durationClassName,
}: {
  items: (typeof feedbackItems)[number][];
  direction: "up" | "down";
  durationClassName: string;
}) {
  const animationClassName =
    direction === "up" ? "feedback-marquee-up" : "feedback-marquee-down";

  return (
    <div className="relative h-[28rem] overflow-hidden rounded-[2rem] border bg-background/70 p-3">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-background via-background/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-background via-background/90 to-transparent" />

      <div
        className={cn(
          "feedback-marquee-track flex flex-col gap-4",
          animationClassName,
          durationClassName,
        )}
      >
        {[...items, ...items].map((item, index) => (
          <FeedbackCard key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function HomeFeedback() {
  return (
    <section className="relative overflow-hidden border-t py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />

      <div className="container relative mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Badge variant="secondary" className="mb-5 rounded-full px-4 py-1">
            Feedback From Users
          </Badge>

          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            What Our Users
            <span className="text-primary"> Say</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {columns.map((items, index) => (
            <FeedbackColumn
              key={`feedback-column-${index}`}
              items={items}
              direction={columnSettings[index].direction}
              durationClassName={columnSettings[index].durationClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
