import type { Metadata } from "next";
import { Mail, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — BuildMarket AI",
  description:
    "Book a free discovery call with BuildMarket AI to talk through your website, ads, automation, or AI agent needs.",
};

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@buildmarket.ai",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 1 business day",
  },
  {
    icon: MapPin,
    label: "Availability",
    value: "Working with clients remotely, worldwide",
  },
];

export default function ContactPage() {
  return (
    <section className="border-b border-border bg-grid">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Let&apos;s build your growth engine.
          </h1>
          <p className="mt-4 text-muted">
            Tell us a bit about your business and what you&apos;re trying to
            grow. We&apos;ll follow up to schedule a free discovery call.
          </p>

          <div className="mt-10 space-y-6">
            {details.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-surface">
                  <detail.icon className="h-4 w-4 text-accent-2" />
                </span>
                <div>
                  <div className="text-sm text-muted">{detail.label}</div>
                  <div className="text-sm font-medium">{detail.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
