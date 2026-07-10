"use client";

import { useEffect, useState } from "react";

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
  const [shownCount, setShownCount] = useState(0);
  const [status, setStatus] = useState("connecting…");

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function playNext(index: number) {
      if (cancelled) return;
      if (index >= convo.length) {
        setStatus("appointment confirmed");
        return;
      }
      const turn = convo[index];
      if (!turn) return;

      setStatus(turn.who === "ai" ? "AI is typing…" : "customer typing…");

      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setShownCount((count) => Math.max(count, index + 1));
          timers.push(setTimeout(() => playNext(index + 1), 900));
        }, 1000)
      );
    }

    timers.push(setTimeout(() => playNext(0), 600));

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  const visibleTurns = convo.slice(0, shownCount);

  return (
    <div className="relative">
      <div className="animate-floaty glass-dark text-white rounded-2xl p-5 max-w-md ml-auto shadow-2xl shadow-blue/20">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-line">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-xs font-bold">
              AI
            </div>
            <div>
              <div className="text-sm font-medium">Aivora Receptionist</div>
              <div className="text-xs text-dim">Northline Dental — live</div>
            </div>
          </div>
          <span className="text-xs font-mono text-purple">● online</span>
        </div>

        <div className="space-y-3 text-sm min-h-[220px]">
          {visibleTurns.map((turn, idx) => (
            <div
              key={idx}
              className={
                turn.who === "ai"
                  ? "bg-gradient-to-r from-blue/20 to-purple/20 border border-blue/30 rounded-xl rounded-tl-sm px-4 py-2.5 max-w-[85%] animate-[fadeIn_0.3s_ease]"
                  : "bg-white/10 rounded-xl rounded-tr-sm px-4 py-2.5 max-w-[85%] ml-auto animate-[fadeIn_0.3s_ease]"
              }
            >
              {turn.text}
            </div>
          ))}
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
