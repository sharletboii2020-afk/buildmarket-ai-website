import Reveal from "@/components/Reveal";
import type { PortfolioProject } from "@/lib/content";

export default function PortfolioCard({
  project,
  delay = 0,
}: {
  project: PortfolioProject;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="card-hover flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6">
        <div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              {project.industry}
            </span>
            <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-2">
              Sample Project
            </span>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-foreground">{project.name}</h3>
          <p className="mt-1 text-sm text-accent-2">{project.service}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.built}</p>
        </div>
        <div className="mt-6 border-t border-border pt-4">
          <div className="text-xs uppercase tracking-wider text-muted-2">Goal</div>
          <div className="mt-1 text-sm font-medium text-foreground">{project.goal}</div>
        </div>
      </div>
    </Reveal>
  );
}
