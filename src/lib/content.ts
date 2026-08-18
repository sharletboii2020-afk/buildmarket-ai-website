export type IconName =
  | "globe"
  | "clapperboard"
  | "workflow"
  | "bot"
  | "target"
  | "gauge"
  | "compass"
  | "layout"
  | "zap"
  | "trendingUp"
  | "shieldCheck"
  | "users"
  | "clock"
  | "sparkles";

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  icon: IconName;
};

export const services: Service[] = [
  {
    slug: "high-converting-websites",
    name: "High-Converting Websites",
    tagline: "A site engineered to sell, not just exist.",
    description:
      "We design and build fast, conversion-first websites and landing pages — structured around how your customers actually decide, so more visitors turn into calls and quotes.",
    benefits: [
      "Conversion-focused UX & messaging",
      "Built on a fast, modern stack",
      "Mobile-first from the first pixel",
      "Clear path to every CTA",
    ],
    icon: "globe",
  },
  {
    slug: "ugc-video-ads",
    name: "UGC & Video Ads",
    tagline: "Creative that stops the scroll and earns the click.",
    description:
      "We script, produce, and edit user-generated-content style video ads for Meta, TikTok, and YouTube — the format built for how people actually watch and buy today.",
    benefits: [
      "Hook-first scripting",
      "Authentic, native-feeling creative",
      "Edited for short-form platforms",
      "Built to test and iterate fast",
    ],
    icon: "clapperboard",
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    tagline: "Give your team its time back.",
    description:
      "We map your repetitive workflows — intake, follow-up, reporting, data entry — and automate them so your team spends less time on admin and more time on customers.",
    benefits: [
      "Workflow audit before we build anything",
      "Automations that fit your existing tools",
      "Faster response times, fewer dropped leads",
      "Documented and handed off to your team",
    ],
    icon: "workflow",
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    tagline: "A trained digital teammate, on call around the clock.",
    description:
      "We build custom AI agents for lead follow-up, customer support, and appointment booking — trained on your business so responses sound like you, not a script.",
    benefits: [
      "Trained on your business and offers",
      "Works across chat, email, and phone",
      "Clear handoff rules to a human",
      "Monitored and refined after launch",
    ],
    icon: "bot",
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    tagline: "A predictable stream of the right inquiries.",
    description:
      "We build and run acquisition campaigns designed around qualified leads, not clicks — matching the right channel, offer, and audience to your sales process.",
    benefits: [
      "Channel strategy matched to your buyer",
      "Offers built to earn a reply",
      "Tracking tied to real leads, not vanity metrics",
      "Continuous testing to lower cost per lead",
    ],
    icon: "target",
  },
  {
    slug: "conversion-optimization",
    name: "Conversion Optimization",
    tagline: "More results from the traffic you already have.",
    description:
      "We audit your funnel — site, forms, follow-up — and systematically remove the friction that's costing you leads and sales before you spend another dollar on ads.",
    benefits: [
      "Full funnel audit and prioritized fixes",
      "Structured A/B testing, not guesswork",
      "Faster forms, clearer offers",
      "Reporting tied to conversion rate, not traffic",
    ],
    icon: "gauge",
  },
];

export const trustPoints = [
  {
    icon: "shieldCheck" as IconName,
    title: "Free, no-obligation strategy call",
    description: "You get a clear plan before you commit to anything.",
  },
  {
    icon: "users" as IconName,
    title: "Direct access to your project team",
    description: "No account-manager relay — you talk to the people doing the work.",
  },
  {
    icon: "clock" as IconName,
    title: "Clear timelines, set up front",
    description: "You know what's being delivered and when, before we start.",
  },
  {
    icon: "sparkles" as IconName,
    title: "You own what we build",
    description: "Your site, creative, and automations are yours — no lock-in.",
  },
];

export const whyUs = [
  {
    title: "AI-powered, not AI-gimmick",
    description:
      "We use AI to move faster on research, production, and follow-up — every output is still reviewed and directed by our team.",
  },
  {
    title: "Conversion-focused by default",
    description:
      "Every page, ad, and automation is built around a specific action you want a visitor or lead to take.",
  },
  {
    title: "Automation that removes busywork",
    description:
      "We take the repetitive parts of running your marketing and sales off your plate.",
  },
  {
    title: "Faster workflows, faster launches",
    description:
      "AI-assisted production means shorter timelines without cutting corners on quality.",
  },
  {
    title: "Better lead management",
    description:
      "Faster response times and structured follow-up mean fewer leads slip through the cracks.",
  },
  {
    title: "One agency, one accountable team",
    description:
      "Website, creative, automation, and AI agents — coordinated by one team instead of stitched together from vendors.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: IconName;
};

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "A free strategy call to understand your business, goals, and where growth is currently stuck.",
    icon: "compass",
  },
  {
    step: "02",
    title: "Build",
    description:
      "We design and build the website, creative, or agent your growth plan calls for.",
    icon: "layout",
  },
  {
    step: "03",
    title: "Automate",
    description:
      "We connect the pieces — automations and AI agents that keep leads moving without manual work.",
    icon: "zap",
  },
  {
    step: "04",
    title: "Grow",
    description:
      "We track performance against real business outcomes and keep refining what's working.",
    icon: "trendingUp",
  },
];

export type PortfolioProject = {
  slug: string;
  name: string;
  industry: string;
  service: string;
  built: string;
  goal: string;
  sample: true;
};

// Sample / demo projects illustrating the type of work we do.
// Replace with real, verifiable case studies as they become available.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "home-services-response-agent",
    name: "Same-Day Response Agent",
    industry: "Home Services",
    service: "AI Agents + Website",
    built:
      "A rebuilt lead-capture site paired with an AI agent that instantly responds to and qualifies new inquiries.",
    goal: "Reduce lead response time from hours to seconds.",
    sample: true,
  },
  {
    slug: "dtc-ugc-library",
    name: "Always-On Creative Library",
    industry: "D2C E-commerce",
    service: "UGC & Video Ads",
    built:
      "A rotating library of UGC-style ad creative built to keep campaigns fresh as ad fatigue sets in.",
    goal: "Maintain stable cost per acquisition over time.",
    sample: true,
  },
  {
    slug: "professional-services-automation",
    name: "Intake & Reporting Automation",
    industry: "Professional Services",
    service: "AI Automation",
    built:
      "Automated client intake, scheduling, and weekly reporting workflows across existing tools.",
    goal: "Cut manual admin time spent on repetitive tasks.",
    sample: true,
  },
  {
    slug: "saas-conversion-rebuild",
    name: "Trial-to-Paid Site Rebuild",
    industry: "SaaS",
    service: "High-Converting Website",
    built:
      "A marketing site rebuilt around a clearer offer and a shorter path from trial signup to paid plan.",
    goal: "Improve the trial-to-paid conversion path.",
    sample: true,
  },
  {
    slug: "local-services-growth-engine",
    name: "Coordinated Local Growth Engine",
    industry: "Local Services",
    service: "Lead Generation + Automation",
    built:
      "Paid campaigns, a redesigned funnel, and automated follow-up built to work as one system.",
    goal: "Build a consistent, trackable lead pipeline.",
    sample: true,
  },
  {
    slug: "retail-support-agent",
    name: "Support & FAQ Agent",
    industry: "Retail",
    service: "AI Agents",
    built:
      "A customer support agent trained on product and policy documentation to handle routine questions.",
    goal: "Free up the support team for complex issues.",
    sample: true,
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Launch",
    price: "$2,500",
    cadence: "starting at, one-time",
    description: "For businesses that need a high-converting website or a single automation built right.",
    features: [
      "High-converting website or landing page",
      "Or: one core workflow automated",
      "Mobile-first, conversion-focused build",
      "2 weeks of post-launch support",
    ],
    cta: "Book a Strategy Call",
  },
  {
    name: "Growth",
    price: "$4,500",
    cadence: "starting at, per month",
    description: "For businesses ready to run website, creative, automation, and lead gen as one system.",
    features: [
      "Everything in Launch",
      "UGC/video ad creative production",
      "AI agent for lead follow-up",
      "Ongoing lead generation campaigns",
      "Monthly reporting & optimization",
    ],
    cta: "Book a Strategy Call",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "scoped to your needs",
    description: "For established businesses with multiple locations, brands, or complex workflows.",
    features: [
      "Everything in Growth",
      "Multiple AI agents across functions",
      "Custom automation architecture",
      "Dedicated strategist & priority support",
    ],
    cta: "Talk to Us",
  },
];

export const pricingDisclaimer =
  "Pricing shown is a starting-point guide, not a final quote. Every engagement is scoped on a free strategy call before you commit to anything.";

export const faqs = [
  {
    question: "What exactly does BuildMarket AI do?",
    answer:
      "We're a digital growth agency that combines high-converting websites, UGC & video ads, AI automation, and AI agents into one coordinated system for attracting and converting customers.",
  },
  {
    question: "Who is BuildMarket AI a good fit for?",
    answer:
      "Growing US businesses — home services, local services, e-commerce, SaaS, and professional services — that want their marketing and lead handling to work as one system instead of scattered tools and vendors.",
  },
  {
    question: "How does website development work?",
    answer:
      "We start with your goals and customer journey, then design and build a site around the actions you want visitors to take. You'll review milestones throughout, not just a final reveal.",
  },
  {
    question: "What's involved in UGC & video ads?",
    answer:
      "We handle scripting, creator direction (or in-house production), editing, and iteration — delivering ad-ready creative built for how people watch on Meta, TikTok, and YouTube.",
  },
  {
    question: "What can AI automation actually handle?",
    answer:
      "Repetitive, rules-based work: lead intake, follow-up sequences, appointment reminders, reporting, and data entry across the tools you already use.",
  },
  {
    question: "What can an AI agent do that a chatbot can't?",
    answer:
      "Our agents are trained on your specific business, offers, and tone — and connect to your real systems (CRM, calendar, inbox) so they can actually complete tasks, not just answer FAQs.",
  },
  {
    question: "How long do projects typically take?",
    answer:
      "A website or single automation is typically a few weeks. Full growth engagements are ongoing, with the first components live within the first month. Your strategy call will include a specific timeline.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a free strategy call. We'll learn about your business, identify where growth is stuck, and recommend which service to start with — no pressure to commit to everything at once.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = {
  services: services.map((s) => ({ href: `/services#${s.slug}`, label: s.name })),
  company: [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X (Twitter)", href: "#" },
];
