import type { Metadata } from "next";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import ChatMockup from "@/components/ChatMockup";
import AutomationFlow from "@/components/AutomationFlow";
import CTASection from "@/components/CTASection";
import { agentUseCases, automationCapabilities } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Agents",
  description:
    "Custom AI agents for lead capture, qualification, follow-up, appointment booking, customer support, and sales — automating repetitive workflows around the clock.",
  alternates: { canonical: "/ai-agents" },
  openGraph: {
    title: "AI Agents — BuildMarket AI",
    description:
      "A digital teammate that never clocks out — AI agents for lead response, follow-up, and support.",
    url: "/ai-agents",
  },
};

export default function AIAgentsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-strong">
              AI Agents
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance font-serif-display text-4xl italic tracking-tight text-foreground sm:text-5xl">
              A digital teammate that <span className="text-gradient">never clocks out.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-4 max-w-xl text-balance text-muted">
              Custom AI agents trained on your business — plus the automation
              that keeps your workflows moving 24/7.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-4">
        <Reveal>
          <ChatMockup />
        </Reveal>
      </section>

      {/* Journey */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          eyebrow="How It Flows"
          title="From first message to booked call"
        />
        <div className="mt-12">
          <AutomationFlow />
        </div>
      </section>

      {/* Use cases */}
      <section className="border-y border-border bg-surface-2">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeading eyebrow="Agent Types" title="Agents we build" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {agentUseCases.map((useCase, i) => (
              <CategoryCard key={useCase.title} category={useCase} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* Automation, folded in */}
      <section className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <SectionHeading
          eyebrow="AI Automation"
          title="Automation built into every agent"
          subtitle="Every AI agent we build can handle repetitive workflows so your team doesn't have to."
        />
        <Reveal delay={0.1} className="mt-10">
          <ul className="grid gap-3.5 sm:grid-cols-2">
            {automationCapabilities.map((item) => (
              <li key={item} className="flex items-start gap-2.5 rounded-xl border border-border bg-surface p-4">
                <Check className="mt-0.5 h-4 w-4 flex-none text-accent-strong" />
                <span className="text-sm text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Ready for an Agent That Works While You Sleep?"
        subtitle="Book a project and tell us what's eating your team's time — we'll build around it."
        primaryLabel="Build My AI Agent"
      />
    </>
  );
}
