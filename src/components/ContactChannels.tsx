import { MessageCircle, Mail } from "lucide-react";
import { contact } from "@/lib/content";

export default function ContactChannels({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-premium transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="h-4 w-4" />
        Chat on WhatsApp
      </a>
      <a
        href={contact.emailLink}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-border-strong"
      >
        <Mail className="h-4 w-4 text-accent-strong" />
        Email Us
      </a>
    </div>
  );
}
