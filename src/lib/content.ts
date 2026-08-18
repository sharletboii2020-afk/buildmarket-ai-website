export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: "globe" | "clapperboard" | "workflow" | "bot" | "trendingUp";
};

export const services: Service[] = [
  {
    slug: "high-converting-websites",
    name: "High-Converting Websites",
    tagline: "Sites built to turn visitors into pipeline.",
    description:
      "We design and build fast, conversion-focused websites and landing pages that are backed by copy, structure, and UX decisions proven to move visitors toward a call, quote, or sale — not just look good.",
    deliverables: [
      "Conversion-first UX & copywriting",
      "Mobile-first, sub-2s load times",
      "SEO-ready technical foundation",
      "Analytics & event tracking wired in",
    ],
    icon: "globe",
  },
  {
    slug: "ugc-ads",
    name: "UGC Ads",
    tagline: "Scroll-stopping creative that performs.",
    description:
      "We plan, script, and produce user-generated-content style ad creative for Meta, TikTok, and YouTube — the format that consistently outperforms polished brand ads on cost per acquisition.",
    deliverables: [
      "Hook & script writing",
      "Creator sourcing & direction",
      "Editing for short-form platforms",
      "Iterative testing against ad metrics",
    ],
    icon: "clapperboard",
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    tagline: "Remove the busywork from your operations.",
    description:
      "We map your repetitive workflows — lead intake, follow-ups, reporting, data entry — and automate them with AI-driven pipelines that plug into the tools you already use.",
    deliverables: [
      "Workflow audit & mapping",
      "Custom automation build (CRM, email, ops)",
      "AI-assisted data processing",
      "Ongoing monitoring & optimization",
    ],
    icon: "workflow",
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    tagline: "24/7 digital teammates for your business.",
    description:
      "We build and deploy custom AI agents — for sales follow-up, customer support, appointment booking, and internal knowledge — trained on your business so they act like a well-briefed team member.",
    deliverables: [
      "Custom agent design & training",
      "Integration with your stack (CRM, chat, phone, email)",
      "Guardrails, testing & handoff rules",
      "Performance monitoring",
    ],
    icon: "bot",
  },
  {
    slug: "digital-growth",
    name: "Digital Growth Solutions",
    tagline: "A single growth engine, not a pile of tactics.",
    description:
      "We combine paid acquisition, funnel design, automation, and AI into one coordinated growth strategy — so every channel feeds the same pipeline instead of working in isolation.",
    deliverables: [
      "Growth strategy & channel plan",
      "Funnel & offer design",
      "Cross-channel campaign execution",
      "Reporting tied to revenue, not vanity metrics",
    ],
    icon: "trendingUp",
  },
];

export const stats = [
  { value: "5", label: "Core services under one roof" },
  { value: "<2s", label: "Target site load time" },
  { value: "24/7", label: "AI agent availability" },
  { value: "1", label: "Growth engine, fully coordinated" },
];

export const process = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn your business, your goals, and where growth is currently getting stuck.",
  },
  {
    step: "02",
    title: "Growth Plan",
    description:
      "You get a clear plan mapping which services, channels, and automations will move the needle first.",
  },
  {
    step: "03",
    title: "Build & Launch",
    description:
      "Our team designs, builds, and ships your site, creative, agents, or automations.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    description:
      "We track performance against real business metrics and iterate to keep growth compounding.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// Placeholder testimonials — replace with real client quotes before launch.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Our new site paired with the AI follow-up agent changed how fast we respond to leads. We stopped losing deals to slow response times.",
    name: "Placeholder Client",
    role: "Founder, Home Services Co. (sample content)",
  },
  {
    quote:
      "The UGC ad creative outperformed everything our old agency produced. Cost per lead dropped within the first two weeks.",
    name: "Placeholder Client",
    role: "Marketing Lead, D2C Brand (sample content)",
  },
  {
    quote:
      "Automation took a two-day reporting process down to minutes. It paid for itself in the first month.",
    name: "Placeholder Client",
    role: "Operations Manager (sample content)",
  },
];

export const faqs = [
  {
    question: "How fast can we get started?",
    answer:
      "Most engagements kick off within a week of your discovery call, once scope and priorities are locked in.",
  },
  {
    question: "Do we need all five services?",
    answer:
      "No. Most clients start with one or two — usually a website or AI agent — and add services as the growth engine proves out.",
  },
  {
    question: "Can you work with our existing tools?",
    answer:
      "Yes. Our automations and AI agents are built to integrate with the CRM, ad platforms, and tools you already run on.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Every engagement is tied to a business metric — leads, cost per acquisition, response time, or revenue — agreed on before we start.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
