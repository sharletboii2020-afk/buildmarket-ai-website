"use client";

import { motion } from "framer-motion";
import { Globe, Clapperboard, Workflow, Bot, TrendingUp } from "lucide-react";

const satellites = [
  { icon: Globe, label: "Website", pos: "left-0 top-4 sm:top-8" },
  { icon: Clapperboard, label: "UGC Ads", pos: "right-0 top-0 sm:top-4" },
  { icon: Workflow, label: "Automation", pos: "left-2 bottom-2 sm:left-4" },
  { icon: Bot, label: "AI Agents", pos: "right-2 bottom-6 sm:right-4" },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-md items-center justify-center sm:h-[380px]">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 380"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 60 90 C 140 90 140 190 200 190"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
        />
        <motion.path
          d="M 340 60 C 260 60 260 180 200 190"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
        />
        <motion.path
          d="M 70 320 C 140 280 150 220 200 195"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        />
        <motion.path
          d="M 330 300 C 260 270 250 220 200 195"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glow-accent bg-noise relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-border-strong bg-surface text-center sm:h-32 sm:w-32"
      >
        <TrendingUp className="h-6 w-6 text-accent" />
        <span className="mt-1.5 text-[11px] font-medium leading-tight text-foreground">
          Growth
          <br />
          Engine
        </span>
      </motion.div>

      {satellites.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={`glass absolute z-10 flex items-center gap-2 rounded-full px-3.5 py-2 ${s.pos}`}
        >
          <s.icon className="h-3.5 w-3.5 text-accent-2" />
          <span className="text-xs font-medium text-foreground">{s.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
