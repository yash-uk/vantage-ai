"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";

function formatMoney(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function ROICalculator() {
  const [monthlyCalls, setMonthlyCalls] = useState(100);
  const [missedPercent, setMissedPercent] = useState(30);
  const [customerValue, setCustomerValue] = useState(500);

  const missedCalls = useMemo(
    () => Math.round((monthlyCalls * missedPercent) / 100),
    [monthlyCalls, missedPercent]
  );
  const monthlyLoss = missedCalls * customerValue;
  const annualLoss = monthlyLoss * 12;
  // Assume Aivora recovers roughly 70% of currently-missed calls — a reasonable,
  // clearly-labeled estimate rather than a guaranteed figure.
  const recoveredMonthly = Math.round(monthlyLoss * 0.7);

  return (
    <section id="calculator" className="py-28 border-t border-line relative overflow-hidden">
      <div className="glow bg-blue w-[420px] h-[420px] top-10 left-1/4 animate-drift" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14 mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3">
            See it in your own numbers
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
            What are missed calls actually costing you?
          </h2>
        </Reveal>

        <Reveal className="glass rounded-2xl p-8 grid md:grid-cols-2 gap-10">
          <>
            <div className="space-y-7">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="calls" className="font-medium">
                    Calls you receive monthly
                  </label>
                  <span className="text-dim font-mono">{monthlyCalls}</span>
                </div>
                <input
                  id="calls"
                  type="range"
                  min={10}
                  max={1000}
                  step={10}
                  value={monthlyCalls}
                  onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                  className="w-full accent-blue"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="missed" className="font-medium">
                    Percent you estimate you miss
                  </label>
                  <span className="text-dim font-mono">{missedPercent}%</span>
                </div>
                <input
                  id="missed"
                  type="range"
                  min={0}
                  max={80}
                  step={5}
                  value={missedPercent}
                  onChange={(e) => setMissedPercent(Number(e.target.value))}
                  className="w-full accent-blue"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="value" className="font-medium">
                    Average customer value
                  </label>
                  <span className="text-dim font-mono">{formatMoney(customerValue)}</span>
                </div>
                <input
                  id="value"
                  type="range"
                  min={50}
                  max={5000}
                  step={50}
                  value={customerValue}
                  onChange={(e) => setCustomerValue(Number(e.target.value))}
                  className="w-full accent-blue"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center bg-panel2 rounded-xl p-7 text-center">
              <p className="text-xs font-mono uppercase tracking-widest text-dim mb-2">
                Estimated missed calls / month
              </p>
              <p className="font-display font-bold text-3xl mb-6">{missedCalls}</p>

              <p className="text-xs font-mono uppercase tracking-widest text-dim mb-2">
                Potential revenue lost / month
              </p>
              <p className="font-display font-bold text-4xl grad-text mb-1">
                {formatMoney(monthlyLoss)}
              </p>
              <p className="text-xs text-dim mb-6">{formatMoney(annualLoss)} per year</p>

              <div className="pt-5 border-t border-line">
                <p className="text-xs text-dim leading-relaxed">
                  If Aivora recovers even ~70% of those missed calls, that's roughly{" "}
                  <span className="text-ink font-medium">{formatMoney(recoveredMonthly)}</span>{" "}
                  back every month. <span className="italic">Illustrative estimate, not a guarantee.</span>
                </p>
              </div>
            </div>
          </>
        </Reveal>

        <Reveal className="text-center mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue to-purple text-white font-medium px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            See how AI can reduce those losses
          </a>
        </Reveal>
      </div>
    </section>
  );
}
