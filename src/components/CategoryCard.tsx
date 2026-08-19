import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import type { Category } from "@/lib/content";

export default function CategoryCard({ category, delay = 0 }: { category: Category; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="card-hover flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-accent-strong">
          <ServiceIcon icon={category.icon} className="h-5 w-5" />
        </span>
        <h3 className="mt-5 text-base font-semibold text-foreground">{category.title}</h3>
        <p className="mt-2 text-sm text-muted">{category.description}</p>
      </div>
    </Reveal>
  );
}
