import Reveal from "@/components/Reveal";
import type { WorkExample } from "@/lib/content";

export default function WorkExampleCard({ item, delay = 0 }: { item: WorkExample; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="card-hover flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-wider text-accent-strong">
            {item.service}
          </span>
          <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-2">
            Sample
          </span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
      </div>
    </Reveal>
  );
}
