import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/Button";
import type { PricingPlan } from "@/lib/content";

export default function PricingCard({ plan, delay = 0 }: { plan: PricingPlan; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`relative flex h-full flex-col rounded-2xl border p-7 ${
          plan.highlighted
            ? "glow-accent border-border-strong bg-surface-2"
            : "border-border bg-surface"
        }`}
      >
        {plan.highlighted && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-soft to-accent px-4 py-1 text-xs font-semibold text-[#171208]">
            Most Popular
          </span>
        )}
        <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-serif-display text-4xl italic tracking-tight text-foreground">
            {plan.price}
          </span>
        </div>
        <p className="mt-1 text-xs uppercase tracking-wider text-muted-2">{plan.cadence}</p>
        <p className="mt-4 text-sm text-muted">{plan.description}</p>

        <ul className="mt-6 flex-1 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 flex-none text-accent-2" />
              <span className="text-sm text-foreground/90">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          href="/contact"
          variant={plan.highlighted ? "primary" : "secondary"}
          className="mt-8 w-full"
          icon={false}
        >
          {plan.cta}
        </Button>
      </div>
    </Reveal>
  );
}
