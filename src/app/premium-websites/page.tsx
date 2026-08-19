import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import WebsiteMockup from "@/components/WebsiteMockup";
import CTASection from "@/components/CTASection";
import { websiteCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Premium Websites",
  description:
    "Elegant, fast, conversion-ready websites and landing pages — business sites, landing pages, e-commerce, and portfolio/brand sites.",
  alternates: { canonical: "/premium-websites" },
  openGraph: {
    title: "Premium Websites — BuildMarket AI",
    description: "Elegant, fast, conversion-ready websites built to make a strong first impression.",
    url: "/premium-websites",
  },
};

export default function PremiumWebsitesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-strong">
              Premium Websites
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance font-serif-display text-4xl italic tracking-tight text-foreground sm:text-5xl">
              A site that looks like <span className="text-gradient">you&apos;re already winning.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-4 max-w-xl text-balance text-muted">
              Elegant, fast, and built to turn visitors into inquiries.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-4">
        <Reveal>
          <WebsiteMockup />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading eyebrow="Categories" title="What we build" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {websiteCategories.map((category, i) => (
            <CategoryCard key={category.title} category={category} delay={i * 0.06} />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Ready for a Website That Sells?"
        subtitle="Book a project and tell us about your business — we'll design around it."
        primaryLabel="Build My Website"
      />
    </>
  );
}
