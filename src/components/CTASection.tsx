import { Button } from "@/components/Button";
import ContactChannels from "@/components/ContactChannels";
import Reveal from "@/components/Reveal";

export default function CTASection({
  eyebrow = "Get Started",
  title = "Ready to Build Your Next Growth Engine?",
  subtitle = "Book a project or message us directly — we'll get back to you fast.",
  primaryLabel = "Book a Project",
  primaryHref = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Reveal>
        <div className="bg-grid shadow-premium relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-strong">
              {eyebrow}
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-balance font-serif-display text-3xl italic tracking-tight text-foreground sm:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-balance text-muted">
              {subtitle}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
              </Button>
            </div>
            <ContactChannels className="mt-6 justify-center" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
