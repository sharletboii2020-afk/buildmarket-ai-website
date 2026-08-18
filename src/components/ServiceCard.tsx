import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import type { Service } from "@/lib/content";

export default function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/services#${service.slug}`}
        className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6"
      >
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-soft to-accent">
            <ServiceIcon icon={service.icon} className="h-5 w-5 text-[#171208]" />
          </span>
          <ArrowUpRight className="h-4 w-4 text-muted-2 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-foreground">{service.name}</h3>
        <p className="mt-1.5 text-sm text-accent">{service.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
      </Link>
    </Reveal>
  );
}
