import {
  Globe,
  Clapperboard,
  Workflow,
  Bot,
  Target,
  Gauge,
  Compass,
  LayoutTemplate,
  Zap,
  TrendingUp,
  ShieldCheck,
  Users,
  Clock,
  Sparkles,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/content";

const icons: Record<IconName, typeof Globe> = {
  globe: Globe,
  clapperboard: Clapperboard,
  workflow: Workflow,
  bot: Bot,
  target: Target,
  gauge: Gauge,
  compass: Compass,
  layout: LayoutTemplate,
  zap: Zap,
  trendingUp: TrendingUp,
  shieldCheck: ShieldCheck,
  users: Users,
  clock: Clock,
  sparkles: Sparkles,
};

export default function ServiceIcon({
  icon,
  ...props
}: { icon: IconName } & LucideProps) {
  const Icon = icons[icon];
  return <Icon {...props} />;
}
