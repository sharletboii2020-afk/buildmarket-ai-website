"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const messages = [
  { from: "user", text: "Hi, do you have availability this week?" },
  { from: "agent", text: "Yes! I can get you booked in — what day works best?" },
  { from: "user", text: "Thursday afternoon" },
  { from: "agent", text: "Thursday 2:00 PM is open. Confirming now ✓" },
];

export default function ChatMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="shadow-premium mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface"
    >
      <div className="flex items-center gap-2.5 border-b border-border px-4 py-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-strong">
          <Bot className="h-3.5 w-3.5 text-white" />
        </span>
        <div>
          <div className="text-xs font-semibold text-foreground">BuildMarket AI Agent</div>
          <div className="flex items-center gap-1 text-[10px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Online now
          </div>
        </div>
      </div>
      <div className="space-y-2.5 p-4">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
            className={`flex ${m.from === "agent" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                m.from === "agent"
                  ? "rounded-bl-sm bg-surface-2 text-foreground"
                  : "rounded-br-sm bg-gradient-to-r from-accent to-accent-strong text-white"
              }`}
            >
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
