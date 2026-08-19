"use client";

import { motion } from "framer-motion";
import { Clapperboard, Globe, Bot, Sparkles } from "lucide-react";

const satellites = [
  { icon: Clapperboard, label: "UGC Ads", pos: "left-0 top-6 sm:top-10" },
  { icon: Globe, label: "Premium Websites", pos: "right-0 top-0 sm:top-2" },
  { icon: Bot, label: "AI Agents", pos: "left-1/2 bottom-0 -translate-x-1/2" },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto flex h-[300px] w-full max-w-md items-center justify-center sm:h-[340px]">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 340"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 70 100 C 140 100 150 160 200 170"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        />
        <motion.path
          d="M 330 60 C 260 60 250 150 200 170"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: "easeInOut" }}
        />
        <motion.path
          d="M 200 300 L 200 195"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--accent-soft)" stopOpacity="0.25" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="shadow-accent-glow relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-border-strong bg-surface text-center sm:h-28 sm:w-28"
      >
        <Sparkles className="h-5 w-5 text-accent-strong" />
        <span className="mt-1 text-[10px] font-semibold leading-tight text-foreground">
          BuildMarket
          <br />
          AI
        </span>
      </motion.div>

      {satellites.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={`shadow-premium absolute z-10 flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 ${s.pos}`}
        >
          <s.icon className="h-3.5 w-3.5 text-accent-strong" />
          <span className="text-xs font-medium text-foreground">{s.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
