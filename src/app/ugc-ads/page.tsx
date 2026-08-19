import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import UGCPreview from "@/components/UGCPreview";
import CTASection from "@/components/CTASection";
import { ugcCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "UGC Ads",
  description:
    "Authentic, native-feeling UGC and short-form video ads for Meta, TikTok, and YouTube — product demos, testimonials, unboxings, and more.",
  alternates: { canonical: "/ugc-ads" },
  openGraph: {
    title: "UGC Ads — BuildMarket AI",
    description:
      "Authentic, native-feeling UGC and short-form video ads built to stop the scroll.",
    url: "/ugc-ads",
  },
};

export default function UGCAdsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-strong">
              UGC Ads
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance font-serif-display text-4xl italic tracking-tight text-foreground sm:text-5xl">
              Creative that <span className="text-gradient">stops the scroll.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-4 max-w-xl text-balance text-muted">
              What type of UGC ad does your business need? Here&apos;s what we
              create.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-4">
        <Reveal>
          <UGCPreview />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading eyebrow="Categories" title="What we create" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ugcCategories.map((category, i) => (
            <CategoryCard key={category.title} category={category} delay={i * 0.05} />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Ready for Ads That Actually Convert?"
        subtitle="Book a project and tell us what you're promoting — we'll bring the creative."
        primaryLabel="Book UGC Ads"
      />
    </>
  );
}
