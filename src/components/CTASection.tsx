import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection({
  title = "Ready to build your growth engine?",
  subtitle = "Book a free discovery call and get a tailored plan for your business.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center bg-grid">
        <div className="pointer-events-none absolute inset-0 glow" />
        <div className="relative">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-muted">
            {subtitle}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Book a Free Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
