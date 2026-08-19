"use client";

import { motion } from "framer-motion";
import { Inbox, Filter, Repeat, CalendarCheck, Headset, ArrowRight } from "lucide-react";

const steps = [
  { icon: Inbox, title: "Lead Capture", desc: "Every inquiry greeted instantly" },
  { icon: Filter, title: "Qualification", desc: "Right questions, before you get involved" },
  { icon: Repeat, title: "Follow-up", desc: "Consistent, on schedule" },
  { icon: CalendarCheck, title: "Appointment Booking", desc: "Straight to your calendar" },
  { icon: Headset, title: "Customer Support", desc: "Common questions, any time" },
];

export default function AutomationFlow() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-5 sm:gap-2">
      {steps.map((step, i) => (
        <div key={step.title} className="flex items-center gap-3 sm:flex-col sm:gap-0 sm:text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="shadow-premium flex w-full items-center gap-4 rounded-2xl border border-border bg-surface p-5 sm:flex-col sm:items-center sm:gap-3 sm:px-3 sm:py-7"
          >
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-strong">
              <step.icon className="h-5 w-5 text-white" />
            </span>
            <div className="sm:mt-1">
              <div className="text-sm font-semibold text-foreground">{step.title}</div>
              <div className="mt-0.5 text-xs text-muted">{step.desc}</div>
            </div>
          </motion.div>
          {i < steps.length - 1 && (
            <ArrowRight className="hidden h-4 w-4 flex-none text-muted-2 sm:mx-auto sm:my-2 sm:block" />
          )}
        </div>
      ))}
    </div>
  );
}
