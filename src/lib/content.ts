export type IconName =
  | "clapperboard"
  | "globe"
  | "bot"
  | "playCircle"
  | "quote"
  | "package"
  | "star"
  | "layoutGrid"
  | "userCheck"
  | "shoppingCart"
  | "briefcase"
  | "inbox"
  | "filter"
  | "headset"
  | "calendarCheck"
  | "repeat"
  | "handshake"
  | "workflow"
  | "clock"
  | "messageCircle"
  | "mail"
  | "storefront";

export const contact = {
  email: "sharletproject@gmail.com",
  whatsappDisplay: "+91 95612 73979",
  whatsappLink: "https://wa.me/919561273979",
  emailLink: "mailto:sharletproject@gmail.com",
};

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  cta: string;
  icon: IconName;
};

export const services: Service[] = [
  {
    slug: "ugc-ads",
    name: "UGC Ads",
    tagline: "Creative that stops the scroll.",
    description:
      "Authentic, native-feeling video ads built for Meta, TikTok, and YouTube — the format people actually watch and buy from.",
    href: "/ugc-ads",
    cta: "Explore UGC Ads",
    icon: "clapperboard",
  },
  {
    slug: "premium-websites",
    name: "Premium Websites",
    tagline: "A site that looks like you're already winning.",
    description:
      "Elegant, fast, conversion-ready websites and landing pages — designed to make a strong first impression and turn visitors into inquiries.",
    href: "/premium-websites",
    cta: "Explore Websites",
    icon: "globe",
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    tagline: "A digital teammate that never clocks out.",
    description:
      "Custom AI agents that respond to leads, answer questions, and book appointments — plus the automation that keeps your workflows moving 24/7.",
    href: "/ai-agents",
    cta: "Explore AI Agents",
    icon: "bot",
  },
];

export type Category = {
  title: string;
  description: string;
  icon: IconName;
};

export const ugcCategories: Category[] = [
  {
    title: "Product Demonstration",
    description: "Show the product in action, in real hands.",
    icon: "playCircle",
  },
  {
    title: "Testimonial UGC",
    description: "Genuine-feeling praise that builds trust fast.",
    icon: "quote",
  },
  {
    title: "Problem → Solution",
    description: "Frame the pain point, then land the fix.",
    icon: "workflow",
  },
  {
    title: "Unboxing",
    description: "First impressions, captured on camera.",
    icon: "package",
  },
  {
    title: "Product Review",
    description: "Honest-style breakdown of features and value.",
    icon: "star",
  },
  {
    title: "Lifestyle UGC",
    description: "The product woven into everyday life.",
    icon: "layoutGrid",
  },
  {
    title: "Talking-Head UGC",
    description: "Direct-to-camera, personal and persuasive.",
    icon: "userCheck",
  },
  {
    title: "Short-form Social Ads",
    description: "Cut for the feed — fast hooks, fast payoff.",
    icon: "clapperboard",
  },
];

export const websiteCategories: Category[] = [
  {
    title: "Business Websites",
    description: "A polished digital home for your company.",
    icon: "briefcase",
  },
  {
    title: "Landing Pages",
    description: "Single-focus pages built to convert one action.",
    icon: "layoutGrid",
  },
  {
    title: "E-commerce Websites",
    description: "Product-led sites built to sell.",
    icon: "shoppingCart",
  },
  {
    title: "Portfolio / Brand Websites",
    description: "A showcase built around your work and story.",
    icon: "globe",
  },
];

export const agentUseCases: Category[] = [
  {
    title: "Lead Capture Agent",
    description: "Greets and captures every visitor inquiry.",
    icon: "inbox",
  },
  {
    title: "Lead Qualification Agent",
    description: "Asks the right questions before you get involved.",
    icon: "filter",
  },
  {
    title: "Customer Support Agent",
    description: "Handles common questions, any time of day.",
    icon: "headset",
  },
  {
    title: "Appointment Booking Agent",
    description: "Gets a call on the calendar without back-and-forth.",
    icon: "calendarCheck",
  },
  {
    title: "Follow-up Agent",
    description: "Keeps leads warm with timely, consistent follow-up.",
    icon: "repeat",
  },
  {
    title: "Sales Agent",
    description: "Guides a qualified lead toward a decision.",
    icon: "handshake",
  },
];

export const automationCapabilities = [
  "Responding to new leads the moment they arrive",
  "Qualifying leads before they reach your team",
  "Following up automatically, on a consistent schedule",
  "Booking appointments straight to your calendar",
  "Handling common customer questions",
  "Moving information through your business workflows",
  "Working around the clock — nights, weekends, holidays",
];

export type WorkExample = {
  slug: string;
  title: string;
  service: "UGC Ads" | "Premium Websites" | "AI Agents";
  description: string;
  sample: true;
};

// Sample projects illustrating the type of work BuildMarket AI does.
// Replace with real, verifiable case studies as they become available.
export const workExamples: WorkExample[] = [
  {
    slug: "ugc-creative-library",
    title: "Always-On Creative Library",
    service: "UGC Ads",
    description: "A rotating set of UGC-style video ads built to keep campaigns fresh.",
    sample: true,
  },
  {
    slug: "conversion-landing-page",
    title: "Conversion-First Landing Page",
    service: "Premium Websites",
    description: "A single-focus landing page built around one clear call to action.",
    sample: true,
  },
  {
    slug: "lead-response-agent",
    title: "Same-Day Response Agent",
    service: "AI Agents",
    description: "An AI agent that instantly responds to and qualifies new inquiries.",
    sample: true,
  },
  {
    slug: "brand-showcase-site",
    title: "Brand Showcase Website",
    service: "Premium Websites",
    description: "A portfolio-style site built to present a brand's best work.",
    sample: true,
  },
  {
    slug: "testimonial-ad-set",
    title: "Testimonial Ad Set",
    service: "UGC Ads",
    description: "A set of testimonial-style ads built to build trust fast.",
    sample: true,
  },
  {
    slug: "booking-agent",
    title: "Appointment Booking Agent",
    service: "AI Agents",
    description: "An agent that moves a qualified lead straight onto the calendar.",
    sample: true,
  },
];

export type Review = {
  quote: string;
  name: string;
  role: string;
  service: "UGC Ads" | "Premium Websites" | "AI Agents";
};

// Demo testimonials for illustration only — not verified real clients.
// Replace with real client feedback as it becomes available.
export const reviews: Review[] = [
  {
    quote:
      "The ad creative felt native to the platform, not like an ad. That's exactly what we needed.",
    name: "Sample Client",
    role: "D2C Brand",
    service: "UGC Ads",
  },
  {
    quote:
      "Our new site finally looks as good as the business actually is. First impressions changed overnight.",
    name: "Sample Client",
    role: "Professional Services",
    service: "Premium Websites",
  },
  {
    quote:
      "Leads get a response in seconds now instead of hours. That alone changed how many of them turn into calls.",
    name: "Sample Client",
    role: "Home Services",
    service: "AI Agents",
  },
  {
    quote:
      "Clean process, clear communication, and the final product matched exactly what we discussed.",
    name: "Sample Client",
    role: "E-commerce",
    service: "Premium Websites",
  },
];

export const navLinks = [
  { href: "/ugc-ads", label: "UGC Ads" },
  { href: "/premium-websites", label: "Premium Websites" },
  { href: "/ai-agents", label: "AI Agents" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export const shopLink = { href: "/shop", label: "Shop" };

export const footerLinks = {
  services: services.map((s) => ({ href: s.href, label: s.name })),
  company: [
    { href: "/reviews", label: "Reviews" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export const socialLinks: { label: "LinkedIn" | "Instagram" | "X (Twitter)"; href: string }[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X (Twitter)", href: "#" },
];
