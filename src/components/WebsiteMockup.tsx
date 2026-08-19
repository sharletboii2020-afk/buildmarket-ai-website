"use client";

import { motion } from "framer-motion";

export default function WebsiteMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="shadow-premium mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="ml-3 h-5 flex-1 rounded-full bg-surface-2" />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <div className="h-3 w-16 rounded-full bg-foreground/15" />
          <div className="flex gap-2">
            <div className="h-3 w-8 rounded-full bg-foreground/10" />
            <div className="h-3 w-8 rounded-full bg-foreground/10" />
            <div className="h-3 w-8 rounded-full bg-accent-soft/60" />
          </div>
        </div>
        <div className="space-y-2.5 rounded-xl bg-gradient-to-br from-surface-2 to-surface p-5">
          <div className="h-4 w-3/4 rounded-full bg-foreground/20" />
          <div className="h-2.5 w-full rounded-full bg-foreground/10" />
          <div className="h-2.5 w-2/3 rounded-full bg-foreground/10" />
          <div className="mt-3 h-8 w-28 rounded-full bg-gradient-to-r from-accent to-accent-strong" />
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          <div className="aspect-square rounded-lg bg-surface-2" />
          <div className="aspect-square rounded-lg bg-surface-2" />
          <div className="aspect-square rounded-lg bg-surface-2" />
        </div>
      </div>
    </motion.div>
  );
}
