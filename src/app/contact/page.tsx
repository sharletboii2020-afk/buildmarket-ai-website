import type { Metadata } from "next";
import { Mail, MessageCircle, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ContactChannels from "@/components/ContactChannels";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a project with BuildMarket AI. Message us directly on WhatsApp or email, or send your details below.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — BuildMarket AI",
    description: "Book a project — message us directly on WhatsApp or email.",
    url: "/contact",
  },
};

const details = [
  { icon: MessageCircle, label: "WhatsApp", value: contact.whatsappDisplay, href: contact.whatsappLink },
  { icon: Mail, label: "Email", value: contact.email, href: contact.emailLink },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[500px]" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-16 sm:py-20 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-strong">
              Contact
            </span>
            <h1 className="mt-6 text-balance font-serif-display text-4xl italic tracking-tight text-foreground">
              Book a <span className="text-gradient">project.</span>
            </h1>
            <p className="mt-4 text-muted">
              Message us directly, or send your details below and we&apos;ll
              follow up.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactChannels className="mt-8" />
          </Reveal>

          <div className="mt-10 space-y-6">
            {details.map((detail, i) => (
              <Reveal key={detail.label} delay={0.15 + i * 0.05}>
                {detail.href ? (
                  <a href={detail.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-border text-accent-strong">
                      <detail.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm text-muted">{detail.label}</div>
                      <div className="text-sm font-medium text-foreground">{detail.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-border text-accent-strong">
                      <detail.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm text-muted">{detail.label}</div>
                      <div className="text-sm font-medium text-foreground">{detail.value}</div>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="lg:col-span-3">
          <div className="shadow-premium rounded-3xl border border-border bg-surface p-6 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
