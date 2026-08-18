import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Work — BuildMarket AI",
  description:
    "A look at the kind of engagements BuildMarket AI takes on across websites, UGC ads, automation, and AI agents.",
};

// Placeholder case studies — replace with real client work and metrics before launch.
const caseStudies = [
  {
    industry: "Home Services",
    service: "AI Agents + Website Rebuild",
    summary:
      "Replaced a slow contact form with a lead-response AI agent and a rebuilt site, cutting response time from hours to seconds.",
    metric: "Faster lead response",
  },
  {
    industry: "D2C E-commerce",
    service: "UGC Ads",
    summary:
      "Produced a rotating library of UGC-style ad creative to keep cost per acquisition stable as ad fatigue set in.",
    metric: "Lower cost per acquisition",
  },
  {
    industry: "Professional Services",
    service: "AI Automation",
    summary:
      "Automated intake, scheduling, and reporting workflows that previously consumed a full day per week of staff time.",
    metric: "Hours saved weekly",
  },
  {
    industry: "SaaS",
    service: "High-Converting Website",
    summary:
      "Rebuilt the marketing site around a clearer offer and stronger conversion path from trial signup to paid plan.",
    metric: "Improved trial-to-paid rate",
  },
  {
    industry: "Local Services",
    service: "Digital Growth Solutions",
    summary:
      "Combined paid campaigns, funnel redesign, and automated follow-up into one coordinated acquisition strategy.",
    metric: "Consistent lead pipeline",
  },
  {
    industry: "Retail",
    service: "AI Agents",
    summary:
      "Deployed a customer support agent trained on product and policy docs, handling the majority of routine inquiries.",
    metric: "Reduced support load",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-border bg-grid">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Engagements across every service
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-muted">
            A sample of the types of projects BuildMarket AI takes on for
            clients across industries.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.industry + study.service}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-accent-2">
                    {study.industry}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted" />
                </div>
                <h3 className="mt-3 text-lg font-semibold">{study.service}</h3>
                <p className="mt-2 text-sm text-muted">{study.summary}</p>
              </div>
              <div className="mt-6 border-t border-border pt-4 text-sm font-medium text-foreground">
                {study.metric}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted">
          Sample engagements shown for illustration — replace with real
          client case studies and metrics before launch.
        </p>
      </section>

      <CTASection
        title="Want results like these?"
        subtitle="Book a free call and let's map what a growth engine could look like for your business."
      />
    </>
  );
}
