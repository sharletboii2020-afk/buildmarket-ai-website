"use client";

import { motion } from "framer-motion";
import { Play, Heart, MessageCircle, Send } from "lucide-react";

const cards = [
  { label: "Hook" },
  { label: "Problem → Solution" },
  { label: "Call to Action" },
];

export default function UGCPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      {cards.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 20, rotate: i === 1 ? 0 : i === 0 ? -3 : 3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={`shadow-premium relative flex aspect-[9/16] w-40 flex-none flex-col justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface-2 to-surface p-3 sm:w-44 ${
            i === 1 ? "z-10 scale-105" : "opacity-90"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-border bg-background/80 px-2 py-1 text-[10px] font-medium text-foreground">
              {card.label}
            </span>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-background shadow-premium">
              <Play className="ml-0.5 h-4 w-4 fill-accent-strong text-accent-strong" />
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-3/4 rounded-full bg-foreground/10" />
            <div className="h-1.5 w-1/2 rounded-full bg-foreground/10" />
            <div className="mt-2 flex items-center gap-3 text-muted-2">
              <Heart className="h-3.5 w-3.5" />
              <MessageCircle className="h-3.5 w-3.5" />
              <Send className="h-3.5 w-3.5" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
