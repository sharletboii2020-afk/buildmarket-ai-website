import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import { reviews } from "@/lib/content";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Sample client feedback illustrating the kind of results BuildMarket AI aims for across UGC ads, premium websites, and AI agents.",
  alternates: { canonical: "/reviews" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Reviews — BuildMarket AI",
    description: "Sample client feedback across UGC ads, premium websites, and AI agents.",
    url: "/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[380px]" />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-strong">
              Reviews
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance font-serif-display text-4xl italic tracking-tight text-foreground sm:text-5xl">
              Sample <span className="text-gradient">client feedback.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-4 max-w-lg text-balance text-muted">
              Demo testimonials illustrating the kind of feedback we aim for —
              not verified real clients.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name + review.service + i} review={review} delay={i * 0.06} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
