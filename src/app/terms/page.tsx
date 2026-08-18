import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the BuildMarket AI website and services.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <h1 className="font-serif-display text-3xl italic tracking-tight text-foreground sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-muted-2">
        Placeholder content — replace with terms reviewed by your legal
        counsel before launch.
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
        <div>
          <h2 className="text-base font-semibold text-foreground">Use of this site</h2>
          <p className="mt-2">
            This website is provided for informational purposes about
            BuildMarket AI&apos;s services. By using it, you agree not to
            misuse the site or attempt to disrupt its normal operation.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">Services</h2>
          <p className="mt-2">
            Specific service engagements, deliverables, timelines, and
            pricing are governed by a separate agreement entered into
            directly with BuildMarket AI, not by this website.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to hello@buildmarket.ai.
          </p>
        </div>
      </div>
    </section>
  );
}
