import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["italic", "normal"],
  axes: ["opsz"],
});

const siteUrl = "https://buildmarket.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BuildMarket AI — UGC Ads, Premium Websites & AI Agents",
    template: "%s — BuildMarket AI",
  },
  description:
    "BuildMarket AI is a premium creative + AI studio helping businesses grow with UGC ads, premium websites, and AI agents that automate lead response, follow-up, and support.",
  keywords: [
    "UGC ads agency",
    "premium website design",
    "AI agents for business",
    "AI automation",
    "lead capture agent",
    "creative AI studio",
  ],
  openGraph: {
    title: "BuildMarket AI — UGC Ads, Premium Websites & AI Agents",
    description:
      "A premium creative + AI studio. UGC ads, premium websites, and AI agents that work around the clock.",
    url: siteUrl,
    siteName: "BuildMarket AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildMarket AI — UGC Ads, Premium Websites & AI Agents",
    description:
      "A premium creative + AI studio. UGC ads, premium websites, and AI agents that work around the clock.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background pb-20 text-foreground lg:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
