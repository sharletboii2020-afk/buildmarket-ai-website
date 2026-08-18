import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import CTASection from "@/components/CTASection";
import { services, stats, process, testimonials } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] glow" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 text-center sm:pt-28">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
            AI-Powered Digital Growth Agency
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Growth infrastructure for businesses that want to{" "}
            <span className="text-gradient">move faster than their market.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted">
            BuildMarket AI builds high-converting websites, scroll-stopping
            UGC ads, AI automation, and custom AI agents — combined into one
            growth engine for your business.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Book a Free Call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold text-gradient sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything your growth engine needs
          </h2>
          <p className="mt-4 text-balance text-muted">
            Five capabilities, one coordinated strategy — no juggling
            disconnected vendors.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2">
                <ServiceIcon icon={service.icon} className="h-5 w-5 text-background" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{service.name}</h3>
              <p className="mt-2 text-sm text-muted">{service.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-2 opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              How we work
            </h2>
            <p className="mt-4 text-balance text-muted">
              A straightforward path from first call to compounding growth.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step}>
                <div className="text-sm font-mono text-accent-2">{item.step}</div>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            What clients say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name + testimonial.quote.slice(0, 10)}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6"
            >
              <blockquote className="text-sm text-foreground/90">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-muted">{testimonial.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          Sample testimonials shown for illustration — replace with real
          client quotes before launch.
        </p>
      </section>

      {/* Why us */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                One team. One growth engine.
              </h2>
              <p className="mt-4 text-muted">
                Most businesses stitch together a web agency, an ad agency, a
                freelance automation builder, and a support team. BuildMarket
                AI replaces that patchwork with one coordinated team working
                toward the same metrics.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Dedicated strategist across every service",
                "AI-accelerated production without cutting quality",
                "Transparent reporting tied to business outcomes",
                "Flexible engagements — start with one service, scale up",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent-2" />
                  <span className="text-sm text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
