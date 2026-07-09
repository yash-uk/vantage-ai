"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Turn = { who: "user" | "ai"; text: string };

const convo: Turn[] = [
  { who: "user", text: "Hi, do you have anything open tomorrow afternoon?" },
  { who: "ai", text: "Yes — Dr. Lin has a 2:15 PM opening tomorrow. Want me to book that?" },
  { who: "user", text: "Yes please, that works." },
  {
    who: "ai",
    text: "Booked ✅ You're confirmed for 2:15 PM tomorrow. A reminder text will go out 1 hour before.",
  },
];

export default function ChatDemo() {
  const [shown, setShown] = useState<Turn[]>([]);
  const [status, setStatus] = useState("connecting…");

  useEffect(() => {
    let i = 0;
    let cancelled = false;

    function playNext() {
      if (cancelled) return;
      if (i >= convo.length) {
        setStatus("appointment confirmed");
        return;
      }
      setStatus(convo[i].who === "ai" ? "AI is typing…" : "customer typing…");
      setTimeout(() => {
        if (cancelled) return;
        setShown((prev) => [...prev, convo[i]]);
        i++;
        setTimeout(playNext, 900);
      }, 1000);
    }

    const start = setTimeout(playNext, 600);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, []);

  return (
    <div className="relative">
      <div className="animate-floaty glass-dark text-white rounded-2xl p-5 max-w-md ml-auto shadow-2xl shadow-blue/20">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-line">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-xs font-bold">
              AI
            </div>
            <div>
              <div className="text-sm font-medium">Vantage Receptionist</div>
              <div className="text-xs text-dim">Northline Dental — live</div>
            </div>
          </div>
          <span className="text-xs font-mono text-purple">● online</span>
        </div>

        <div className="space-y-3 text-sm min-h-[220px]">
          <AnimatePresence>
            {shown.map((turn, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={
                  turn.who === "ai"
                    ? "bg-gradient-to-r from-blue/20 to-purple/20 border border-blue/30 rounded-xl rounded-tl-sm px-4 py-2.5 max-w-[85%]"
                    : "bg-white/10 rounded-xl rounded-tr-sm px-4 py-2.5 max-w-[85%] ml-auto"
                }
              >
                {turn.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-dim">
          <span className="w-1.5 h-1.5 rounded-full bg-dim inline-block animate-blink" />
          <span className="w-1.5 h-1.5 rounded-full bg-dim inline-block animate-blink [animation-delay:.2s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-dim inline-block animate-blink [animation-delay:.4s]" />
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
}
