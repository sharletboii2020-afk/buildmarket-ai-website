import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import HeroVisual from "@/components/HeroVisual";
import ServiceCard from "@/components/ServiceCard";
import ServiceIcon from "@/components/ServiceIcon";
import AutomationFlow from "@/components/AutomationFlow";
import UGCPreview from "@/components/UGCPreview";
import PortfolioCard from "@/components/PortfolioCard";
import PricingCard from "@/components/PricingCard";
import FaqAccordion from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";
import {
  services,
  trustPoints,
  whyUs,
  process,
  portfolioProjects,
  pricingPlans,
  pricingDisclaimer,
  faqs,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[700px]" />
        <div className="glow-accent pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-20 pt-16 sm:pt-24 lg:grid-cols-2 lg:gap-12 lg:pb-28 lg:pt-32">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
                AI-Powered Growth Agency for US Businesses
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance font-serif-display text-4xl italic leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Turn Your Business Into an{" "}
                <span className="text-gradient">AI-Powered Growth Machine.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-balance text-lg text-muted">
                BuildMarket AI combines high-converting websites, UGC &amp;
                video ads, AI automation, and AI agents into one system built
                to attract, convert, and manage more customers.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" size="lg">
                  Book a Free Strategy Call
                </Button>
                <Button href="/services" variant="secondary" size="lg" icon={false}>
                  Explore Our Services
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="hidden lg:block">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* 2. Trust */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-border text-accent">
                    <ServiceIcon icon={point.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{point.title}</div>
                    <div className="mt-1 text-sm text-muted">{point.description}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section id="services-overview" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeading
          eyebrow="What We Do"
          title="Everything your growth engine needs"
          subtitle="Six capabilities, coordinated as one system — instead of six disconnected vendors."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} delay={i * 0.06} />
          ))}
        </div>
      </section>

      {/* 4. Why BuildMarket AI */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Why BuildMarket AI"
                title="Built for how businesses actually grow"
                subtitle="Not another AI gimmick — a system that makes your marketing and sales faster, tighter, and easier to manage."
                align="left"
              />
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-3">
              {whyUs.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="border-l-2 border-border pl-5">
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear path from first call to compounding growth"
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.08}>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-accent">
                    <ServiceIcon icon={item.icon} className="h-4 w-4" />
                  </span>
                  <span className="font-serif-display text-2xl italic text-muted-2">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. Featured work */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <SectionHeading
            eyebrow="Featured Work"
            title="The kind of work we take on"
            subtitle="Sample projects illustrating the type of engagements BuildMarket AI runs across industries."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.slice(0, 3).map((project, i) => (
              <PortfolioCard key={project.slug} project={project} delay={i * 0.08} />
            ))}
          </div>
          <Reveal delay={0.2} className="mt-10 text-center">
            <Button href="/portfolio" variant="secondary">
              View Full Portfolio
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 7. AI Automation */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="AI Automation"
              title="Your busywork, handled while you sleep"
              subtitle="Lead follow-up, customer communication, reporting, and data entry — automated so nothing falls through the cracks and your team spends time on customers, not admin."
              align="left"
            />
            <Reveal delay={0.15} className="mt-8">
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-accent-2" />
                  Every automation is mapped and tested before it touches a
                  real lead.
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-accent-2" />
                  Built inside the tools you already use — no rip-and-replace.
                </li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <AutomationFlow />
          </Reveal>
        </div>
      </section>

      {/* 8. UGC Ads */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <UGCPreview />
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="UGC & Video Ads"
                title="Creative built for how people actually watch"
                subtitle="Scripted, produced, and edited for Meta, TikTok, and YouTube — the native, authentic format that consistently earns attention over polished brand ads."
                align="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Pricing preview */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeading
          eyebrow="Pricing"
          title="Packages built to scale with you"
          subtitle="A starting-point guide. Every engagement is scoped to your business on a free strategy call."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} delay={i * 0.08} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-xs text-muted-2">
          {pricingDisclaimer}
        </p>
      </section>

      {/* 10. FAQ */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:py-28">
          <SectionHeading eyebrow="FAQ" title="Questions we hear the most" />
          <div className="mt-14">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <CTASection />
    </>
  );
}
