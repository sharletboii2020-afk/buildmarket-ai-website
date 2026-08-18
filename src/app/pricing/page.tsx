import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import FaqAccordion from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";
import { pricingPlans, pricingDisclaimer } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Straightforward, editable pricing guidance for BuildMarket AI's website, UGC ads, AI automation, and AI agent packages — every engagement is scoped on a free strategy call.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — BuildMarket AI",
    description:
      "Straightforward pricing guidance for website, UGC ads, automation, and AI agent packages.",
    url: "/pricing",
  },
};

const pricingFaqs = [
  {
    question: "Is the price on this page final?",
    answer:
      "No — it's a starting-point guide. Every engagement is scoped to your specific business and goals on a free strategy call before you commit to anything.",
  },
  {
    question: "Can I start with just one service?",
    answer:
      "Yes. Most clients start with a single service — usually a website or an AI agent — and add others once that piece is proving out.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "One-time builds are just that — one time. Ongoing packages are discussed and agreed upfront on your strategy call, with no surprise lock-in.",
  },
  {
    question: "What affects the final price?",
    answer:
      "Scope (number of pages, ad volume, number of automations or agents), timeline, and how much of your existing stack we're integrating with.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
              Pricing
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance font-serif-display text-4xl italic tracking-tight sm:text-5xl">
              Packages built to <span className="text-gradient">scale with you.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-muted">
              {pricingDisclaimer}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} delay={i * 0.08} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <SectionHeading eyebrow="Pricing FAQ" title="Common pricing questions" />
          <div className="mt-14">
            <FaqAccordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Get a Real Quote"
        title="Let's Scope Your Project"
        subtitle="Book a free strategy call — you'll leave with a clear price range and timeline for your specific business."
      />
    </>
  );
}
