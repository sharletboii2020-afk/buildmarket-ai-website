import type { Metadata } from "next";
import { Mail, Clock, Globe2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free strategy call with BuildMarket AI to talk through your website, UGC ads, automation, or AI agent needs.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — BuildMarket AI",
    description:
      "Book a free strategy call to talk through your website, UGC ads, automation, or AI agent needs.",
    url: "/contact",
  },
};

const details = [
  { icon: Mail, label: "Email", value: "hello@buildmarket.ai" },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
  { icon: Globe2, label: "Who we work with", value: "US businesses, served remotely" },
];

const contactFaqs = [
  {
    question: "What happens after I submit this form?",
    answer:
      "A member of the BuildMarket AI team reviews your message and follows up within one business day to schedule your free strategy call.",
  },
  {
    question: "Is the strategy call really free?",
    answer:
      "Yes — no cost, no obligation. You'll leave with a clear recommendation, even if you decide not to move forward.",
  },
  {
    question: "What should I have ready before the call?",
    answer:
      "Just a clear sense of what's not working today — slow lead response, an outdated site, inconsistent ad results, or too much manual admin work.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[500px]" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:py-24 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
                Contact
              </span>
              <h1 className="mt-6 text-balance font-serif-display text-4xl italic tracking-tight">
                Let&apos;s build your <span className="text-gradient">growth engine.</span>
              </h1>
              <p className="mt-4 text-muted">
                Tell us a bit about your business and what you&apos;re trying
                to grow. We&apos;ll follow up to schedule a free strategy
                call.
              </p>
            </Reveal>

            <div className="mt-10 space-y-6">
              {details.map((detail, i) => (
                <Reveal key={detail.label} delay={0.1 + i * 0.05}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-border text-accent">
                      <detail.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm text-muted">{detail.label}</div>
                      <div className="text-sm font-medium text-foreground">{detail.value}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="glass bg-noise rounded-3xl p-6 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground">
          Before you reach out
        </h2>
        <div className="mt-10">
          <FaqAccordion items={contactFaqs} />
        </div>
      </section>
    </>
  );
}
