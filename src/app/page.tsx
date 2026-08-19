import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import HeroVisual from "@/components/HeroVisual";
import ServiceCard from "@/components/ServiceCard";
import UGCPreview from "@/components/UGCPreview";
import WebsiteMockup from "@/components/WebsiteMockup";
import ChatMockup from "@/components/ChatMockup";
import WorkExampleCard from "@/components/WorkExampleCard";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import { services, workExamples, reviews } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[600px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-16 pt-14 sm:pt-20 lg:grid-cols-2 lg:gap-10 lg:pb-24 lg:pt-28">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-strong">
                Premium Creative + AI Studio
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance font-serif-display text-4xl italic leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Build Better. <span className="text-gradient">Automate Smarter.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-balance text-lg text-muted">
                BuildMarket AI helps businesses grow with UGC ads, premium
                websites, and AI agents — built to attract, convert, and
                respond to customers.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" size="lg">
                  Book a Project
                </Button>
                <Button href="#services" variant="secondary" size="lg" icon={false}>
                  Explore Services
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="hidden lg:block">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* 3 Core Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          eyebrow="What We Do"
          title="Three services. One studio."
          subtitle="Everything BuildMarket AI builds falls under these three."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* Visual Work / Portfolio */}
      <section className="border-y border-border bg-surface-2">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeading eyebrow="See It In Action" title="What we build, at a glance" />
          <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-8">
            <div>
              <UGCPreview />
              <p className="mt-6 text-center text-sm font-medium text-foreground">UGC Ads</p>
            </div>
            <div className="flex flex-col justify-center">
              <WebsiteMockup />
              <p className="mt-6 text-center text-sm font-medium text-foreground">
                Premium Websites
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <ChatMockup />
              <p className="mt-6 text-center text-sm font-medium text-foreground">AI Agents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Proof */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Results / Proof"
          title="The kind of work we take on"
          subtitle="Sample projects illustrating scope — real case studies will replace these as they go live."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workExamples.slice(0, 6).map((item, i) => (
            <WorkExampleCard key={item.slug} item={item} delay={i * 0.06} />
          ))}
        </div>
      </section>

      {/* Reviews / Trust */}
      <section className="border-y border-border bg-surface-2">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeading eyebrow="Reviews" title="Sample client feedback" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review, i) => (
              <ReviewCard key={review.name + review.service} review={review} delay={i * 0.08} />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-2">
            Demo testimonials shown for illustration — not verified real
            clients.
          </p>
        </div>
      </section>

      {/* Book a Project / Contact */}
      <CTASection />
    </>
  );
}
