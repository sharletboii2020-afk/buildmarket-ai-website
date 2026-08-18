import type { Metadata } from "next";
import { Check } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "High-converting websites, UGC & video ads, AI automation, AI agents, lead generation, and conversion optimization — explore what BuildMarket AI builds for growing US businesses.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — BuildMarket AI",
    description:
      "High-converting websites, UGC & video ads, AI automation, AI agents, lead generation, and conversion optimization.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
              Our Services
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance font-serif-display text-4xl italic tracking-tight sm:text-5xl">
              Six capabilities. <span className="text-gradient">One growth system.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-muted">
              Every service below can stand alone or plug into a full
              BuildMarket AI growth engine — built around what your business
              actually needs to attract and convert more customers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="space-y-16 sm:space-y-24">
          {services.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 grid gap-10 border-b border-border pb-16 last:border-none last:pb-0 sm:space-y-24 lg:grid-cols-5 lg:gap-16"
            >
              <Reveal className="lg:col-span-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-soft to-accent">
                  <ServiceIcon icon={service.icon} className="h-6 w-6 text-[#171208]" />
                </div>
                <div className="mt-5 font-serif-display text-3xl italic text-muted-2">
                  0{index + 1}
                </div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                  {service.name}
                </h2>
                <p className="mt-2 text-accent">{service.tagline}</p>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-3">
                <p className="text-muted">{service.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-accent-2" />
                      <span className="text-sm text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeading
            eyebrow="Not Sure Where to Start?"
            title="We'll recommend the right service on your strategy call"
            subtitle="Tell us about your business and goals — we'll tell you honestly which service (or combination) fits, and what it would take."
          />
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Ready to Build Your Next Growth Engine?"
        subtitle="Book a free strategy call and leave with a clear plan — no pressure, no obligation."
      />
    </>
  );
}
