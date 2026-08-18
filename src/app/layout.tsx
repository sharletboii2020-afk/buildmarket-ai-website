import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    default: "BuildMarket AI — AI-Powered Digital Growth Agency for US Businesses",
    template: "%s — BuildMarket AI",
  },
  description:
    "BuildMarket AI helps US businesses attract, convert, and manage more customers through high-converting websites, UGC & video ads, AI automation, and AI agents.",
  keywords: [
    "AI growth agency",
    "AI marketing agency",
    "high-converting websites",
    "UGC ads agency",
    "AI automation for business",
    "AI agents for business",
    "lead generation agency",
  ],
  openGraph: {
    title: "BuildMarket AI — AI-Powered Digital Growth Agency",
    description:
      "High-converting websites, UGC & video ads, AI automation, and AI agents — combined into one growth engine for your business.",
    url: siteUrl,
    siteName: "BuildMarket AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildMarket AI — AI-Powered Digital Growth Agency",
    description:
      "High-converting websites, UGC & video ads, AI automation, and AI agents — combined into one growth engine for your business.",
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
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
