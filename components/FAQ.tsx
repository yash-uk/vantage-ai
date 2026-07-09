"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 border-t border-line">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-purple mb-3">FAQ</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
            Questions, answered.
          </h2>
        </Reveal>
        <Reveal className="divide-y divide-line border-y border-line">
          <>
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.question} className="py-5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left font-display font-medium text-lg"
                    aria-expanded={isOpen}
                  >
                    {item.question}
                    <span
                      className="text-dim text-xl transition-transform"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="text-dim text-sm leading-relaxed pt-4 pr-8">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </>
        </Reveal>
      </div>
    </section>
  );
}
