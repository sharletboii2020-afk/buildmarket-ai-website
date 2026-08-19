import type { Metadata } from "next";
import { Store, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/Button";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Shop",
  description: "The BuildMarket AI store — launching soon.",
  alternates: { canonical: "/shop" },
  robots: { index: false, follow: true },
};

export default function ShopPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <Reveal>
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-accent-strong">
          <Store className="h-6 w-6" />
        </span>
        <h1 className="mt-6 text-balance font-serif-display text-3xl italic tracking-tight text-foreground sm:text-4xl">
          The BuildMarket AI store is on its way.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-balance text-muted">
          Our store is a separate shopping destination from our agency
          services — not a website-building offer. It&apos;s launching soon.
        </p>
        <Button href={contact.emailLink} variant="secondary" className="mt-8" icon={false}>
          <Mail className="h-4 w-4" />
          Get notified
        </Button>
      </Reveal>
    </section>
  );
}
