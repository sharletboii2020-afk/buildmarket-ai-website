import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import type { Service } from "@/lib/content";

export default function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={service.href}
        className="card-hover shadow-premium group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-strong">
          <ServiceIcon icon={service.icon} className="h-5 w-5 text-white" />
        </span>
        <h3 className="mt-6 text-xl font-semibold text-foreground">{service.name}</h3>
        <p className="mt-1.5 text-sm text-accent-strong">{service.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
          {service.cta}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </Reveal>
  );
}
