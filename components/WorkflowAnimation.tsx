"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  { icon: "📞", label: "Incoming Call", detail: "A customer calls your business number." },
  { icon: "🤖", label: "AI Answers", detail: "Aivora picks up in your brand's voice, instantly." },
  { icon: "📅", label: "Appointment Booked", detail: "The AI checks your calendar and books the slot." },
  { icon: "⚙", label: "CRM Updated", detail: "The lead is logged and tagged automatically." },
  { icon: "📧", label: "Confirmation Sent", detail: "Customer gets an email confirming the booking." },
  { icon: "💬", label: "Follow-up Scheduled", detail: "A reminder text goes out before the appointment." },
];

export default function WorkflowAnimation() {
  return (
    <section className="py-28 border-t border-line relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16 mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3">
            How it actually works
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
            One call. The whole system moves.
          </h2>
        </Reveal>

        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-6 top-6 bottom-6 w-px bg-line hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                className="relative flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full glass flex items-center justify-center text-xl">
                  {step.icon}
                </div>
                <div className="glass card-hover rounded-xl px-5 py-4 flex-1">
                  <p className="font-display font-semibold">{step.label}</p>
                  <p className="text-sm text-dim mt-1">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
