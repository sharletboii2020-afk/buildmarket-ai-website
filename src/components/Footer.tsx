import Link from "next/link";
import { Sparkles } from "lucide-react";
import { navLinks, services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2">
              <Sparkles className="h-4 w-4 text-background" />
            </span>
            BuildMarket <span className="text-gradient">AI</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted">
            A premium AI-powered digital growth agency helping businesses
            build high-converting websites, creative, automation, and AI
            agents — under one roof.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Navigate</h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Services</h3>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-muted md:flex-row">
          <p>&copy; {new Date().getFullYear()} BuildMarket AI. All rights reserved.</p>
          <p>Built with an AI-driven growth engine.</p>
        </div>
      </div>
    </footer>
  );
}
