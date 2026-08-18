import type { Metadata } from "next";
import { Target, Zap, ShieldCheck, Users, Compass, Layers } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "BuildMarket AI is an AI-powered digital growth agency built to give US businesses one coordinated system for websites, ads, automation, and AI agents.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — BuildMarket AI",
    description:
      "An AI-powered digital growth agency built to give US businesses one coordinated growth system.",
    url: "/about",
  },
};

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    description:
      "We measure success in leads, response times, and booked calls — not deliverables checked off a list.",
  },
  {
    icon: Zap,
    title: "AI-accelerated, human-directed",
    description:
      "AI speeds up research, production, and follow-up. Strategy and quality control stay with our team.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent by default",
    description:
      "You see the plan, the reasoning, and the reporting behind every recommendation we make.",
  },
  {
    icon: Users,
    title: "One accountable team",
    description:
      "Website, creative, automation, and AI agents — handled by one team, not a patchwork of vendors.",
  },
  {
    icon: Compass,
    title: "Scoped before we build",
    description:
      "Every engagement starts with a strategy call, not a sales pitch — you know the plan before you commit.",
  },
  {
    icon: Layers,
    title: "Built to be owned",
    description:
      "Your site, creative, and automations belong to you. No lock-in, no black boxes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
              About BuildMarket AI
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance font-serif-display text-4xl italic tracking-tight sm:text-5xl">
              We built the growth partner{" "}
              <span className="text-gradient">we wished existed.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-muted">
              BuildMarket AI exists because growth shouldn&apos;t require
              managing five disconnected vendors. We combine web design,
              performance creative, automation, and AI agents into one
              coordinated system — so every part of your marketing and sales
              pulls in the same direction.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Our mission
            </h2>
            <p className="mt-4 text-muted">
              Give growing US businesses access to the same caliber of
              website, creative, and AI infrastructure that used to be
              reserved for companies with large in-house teams — delivered
              faster, and tied directly to measurable outcomes like leads and
              booked calls.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              How we&apos;re different
            </h2>
            <p className="mt-4 text-muted">
              Instead of specializing in a single channel, we design a growth
              system across your website, ads, automation, and AI agents —
              then keep tuning it as your business changes. One team, one
              strategy, one set of numbers to look at.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeading eyebrow="What We Value" title="Principles behind every engagement" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="card-hover h-full rounded-2xl border border-border bg-background p-6">
                  <value.icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-28">
        <Reveal>
          <p className="text-balance font-serif-display text-2xl italic leading-relaxed text-foreground sm:text-3xl">
            &ldquo;Most businesses don&apos;t need more marketing tools — they
            need their marketing to work as one system.&rdquo;
          </p>
          <p className="mt-4 text-sm text-muted">The idea BuildMarket AI is built around.</p>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Let's Talk"
        title="Let's Build Your Growth System"
        subtitle="Book a free strategy call and see what a coordinated growth engine looks like for your business."
      />
    </>
  );
}
