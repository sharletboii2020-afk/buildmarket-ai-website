import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BuildMarket AI collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <h1 className="font-serif-display text-3xl italic tracking-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted-2">
        Placeholder content — replace with a policy reviewed by your legal
        counsel before launch.
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
        <div>
          <h2 className="text-base font-semibold text-foreground">Information we collect</h2>
          <p className="mt-2">
            When you submit our contact form, we collect the information you
            provide — such as your name, email address, company, and project
            details — so we can respond to your inquiry.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">How we use it</h2>
          <p className="mt-2">
            We use the information you provide solely to respond to your
            inquiry and, if you engage us, to deliver our services. We do not
            sell your information to third parties.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">Contact</h2>
          <p className="mt-2">
            Questions about this policy can be sent to
            hello@buildmarket.ai.
          </p>
        </div>
      </div>
    </section>
  );
}
