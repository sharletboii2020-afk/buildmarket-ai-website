"use client";

import { motion } from "framer-motion";
import { Inbox, Bot, Send, CalendarCheck, ArrowRight } from "lucide-react";

const steps = [
  { icon: Inbox, title: "New lead comes in", desc: "Form, call, or message" },
  { icon: Bot, title: "AI qualifies instantly", desc: "No waiting on a human" },
  { icon: Send, title: "Automated follow-up", desc: "Right message, right time" },
  { icon: CalendarCheck, title: "Call gets booked", desc: "Straight to your calendar" },
];

export default function AutomationFlow() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:gap-2">
      {steps.map((step, i) => (
        <div key={step.title} className="flex items-center gap-3 sm:flex-col sm:gap-0 sm:text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="glass bg-noise flex w-full items-center gap-4 rounded-2xl p-5 sm:flex-col sm:items-center sm:gap-3 sm:py-8"
          >
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-accent-soft to-accent">
              <step.icon className="h-5 w-5 text-[#171208]" />
            </span>
            <div className="sm:mt-1">
              <div className="text-sm font-semibold text-foreground">{step.title}</div>
              <div className="mt-0.5 text-xs text-muted">{step.desc}</div>
            </div>
          </motion.div>
          {i < steps.length - 1 && (
            <ArrowRight className="hidden h-4 w-4 flex-none text-muted-2 sm:mx-auto sm:my-3 sm:block" />
          )}
        </div>
      ))}
    </div>
  );
}
