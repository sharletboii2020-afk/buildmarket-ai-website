import type { Metadata } from "next";
import { Target, Zap, ShieldCheck, Users } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About — BuildMarket AI",
  description:
    "BuildMarket AI is a premium AI-powered digital growth agency built to give businesses one coordinated growth engine.",
};

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    description:
      "We measure success in leads, response times, and revenue — not deliverables checked off a list.",
  },
  {
    icon: Zap,
    title: "AI-accelerated, human-directed",
    description:
      "AI speeds up production and research; strategists and creatives make the calls that matter.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent by default",
    description:
      "You see the plan, the reasoning, and the reporting behind every recommendation we make.",
  },
  {
    icon: Users,
    title: "One team, not a vendor list",
    description:
      "Website, creative, automation, and agents are handled by one accountable team.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-grid">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            We built the agency we wished existed.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-muted">
            BuildMarket AI exists because growth shouldn&apos;t require
            managing five disconnected vendors. We combine web design,
            performance creative, automation, and AI agents into a single
            growth engine, so every part of your marketing and operations
            pulls in the same direction.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Our mission
            </h2>
            <p className="mt-4 text-muted">
              Give growing businesses access to the same caliber of website,
              creative, and AI infrastructure that used to be reserved for
              companies with large in-house teams — delivered faster, and
              tied directly to measurable results.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              How we&apos;re different
            </h2>
            <p className="mt-4 text-muted">
              Instead of specializing in one channel, we design a growth
              engine across your website, ads, automation, and AI agents —
              then keep tuning it as your business changes.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight">
            What we value
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <value.icon className="h-6 w-6 text-accent-2" />
                <h3 className="mt-4 text-base font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's talk about your growth engine"
        subtitle="Book a free call and we'll walk you through what a coordinated growth strategy looks like for your business."
      />
    </>
  );
}
