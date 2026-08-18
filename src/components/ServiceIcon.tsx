import {
  Globe,
  Clapperboard,
  Workflow,
  Bot,
  TrendingUp,
  type LucideProps,
} from "lucide-react";
import type { Service } from "@/lib/content";

const icons: Record<Service["icon"], typeof Globe> = {
  globe: Globe,
  clapperboard: Clapperboard,
  workflow: Workflow,
  bot: Bot,
  trendingUp: TrendingUp,
};

export default function ServiceIcon({
  icon,
  ...props
}: { icon: Service["icon"] } & LucideProps) {
  const Icon = icons[icon];
  return <Icon {...props} />;
}
