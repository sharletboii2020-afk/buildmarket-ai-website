import {
  Clapperboard,
  Globe,
  Bot,
  PlayCircle,
  Quote,
  Package,
  Star,
  LayoutGrid,
  UserCheck,
  ShoppingCart,
  Briefcase,
  Inbox,
  Filter,
  Headset,
  CalendarCheck,
  Repeat,
  Handshake,
  Workflow,
  Clock,
  MessageCircle,
  Mail,
  Store,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/content";

const icons: Record<IconName, typeof Globe> = {
  clapperboard: Clapperboard,
  globe: Globe,
  bot: Bot,
  playCircle: PlayCircle,
  quote: Quote,
  package: Package,
  star: Star,
  layoutGrid: LayoutGrid,
  userCheck: UserCheck,
  shoppingCart: ShoppingCart,
  briefcase: Briefcase,
  inbox: Inbox,
  filter: Filter,
  headset: Headset,
  calendarCheck: CalendarCheck,
  repeat: Repeat,
  handshake: Handshake,
  workflow: Workflow,
  clock: Clock,
  messageCircle: MessageCircle,
  mail: Mail,
  storefront: Store,
};

export default function ServiceIcon({
  icon,
  ...props
}: { icon: IconName } & LucideProps) {
  const Icon = icons[icon];
  return <Icon {...props} />;
}
