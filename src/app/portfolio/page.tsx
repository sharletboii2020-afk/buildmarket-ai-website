import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";
import { portfolioProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Sample projects illustrating the type of website, UGC ad, AI automation, and AI agent engagements BuildMarket AI takes on for US businesses.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio — BuildMarket AI",
    description:
      "Sample projects across websites, UGC ads, AI automation, and AI agents.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
              Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance font-serif-display text-4xl italic tracking-tight sm:text-5xl">
              The kind of work we <span className="text-gradient">take on.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-muted">
              These are sample / demo projects illustrating the scope and
              style of engagements BuildMarket AI runs across industries —
              real client case studies will be added here as they go live.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, i) => (
            <PortfolioCard key={project.slug} project={project} delay={i * 0.06} />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Your Project, Next"
        title="Want Results Like These for Your Business?"
        subtitle="Book a free strategy call and let's map what a growth engine could look like for you."
      />
    </>
  );
}
