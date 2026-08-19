import { MessageCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { contact } from "@/lib/content";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-border bg-surface/95 px-4 py-3 backdrop-blur-lg [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <a
        href={contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <Button href="/contact" icon={false} className="flex-1">
        Book a Project
      </Button>
    </div>
  );
}
