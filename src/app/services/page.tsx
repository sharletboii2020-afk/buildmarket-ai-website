import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — BuildMarket AI",
  description:
    "High-converting websites, UGC ads, AI automation, AI agents, and digital growth solutions from BuildMarket AI.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-grid">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Services built for one outcome: growth
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted">
            Every service below can stand alone or plug into a full
            BuildMarket AI growth engine.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 grid gap-10 border-b border-border pb-16 last:border-none last:pb-0 lg:grid-cols-5 lg:gap-16"
            >
              <div className="lg:col-span-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2">
                  <ServiceIcon icon={service.icon} className="h-6 w-6 text-background" />
                </div>
                <div className="mt-4 font-mono text-xs text-muted">
                  0{index + 1}
                </div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  {service.name}
                </h2>
                <p className="mt-2 text-accent-2">{service.tagline}</p>
              </div>

              <div className="lg:col-span-3">
                <p className="text-muted">{service.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent-2" />
                      <span className="text-sm text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure which service fits?"
        subtitle="Tell us about your business on a free call and we'll recommend where to start."
      />
    </>
  );
}
