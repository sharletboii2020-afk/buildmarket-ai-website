import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Review } from "@/lib/content";

export default function ReviewCard({ review, delay = 0 }: { review: Review; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="card-hover flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
        <Quote className="h-5 w-5 text-accent-soft" />
        <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
          &ldquo;{review.quote}&rdquo;
        </p>
        <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br from-accent-soft to-accent text-sm font-semibold text-white">
            {review.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
          <div>
            <div className="text-sm font-medium text-foreground">{review.name}</div>
            <div className="text-xs text-muted">{review.role}</div>
          </div>
          <span className="ml-auto rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-2">
            {review.service}
          </span>
        </div>
      </div>
    </Reveal>
  );
}
