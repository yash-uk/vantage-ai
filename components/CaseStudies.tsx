import Reveal from "./Reveal";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="work" className="py-28 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3">Case studies</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
            Before the system. After the system.
          </h2>
        </Reveal>
        <Reveal className="grid lg:grid-cols-3 gap-5">
          <>
            {caseStudies.map((c) => (
              <div key={c.client} className="glass card-hover rounded-2xl p-7">
                <p className="text-xs font-mono text-dim uppercase mb-4">{c.client}</p>
                <div className="flex items-end justify-between mb-1">
                  <span className="text-dim text-sm">{c.metricLabel}</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-display font-bold text-dim/50 line-through">
                    {c.before}
                  </span>
                  <span className="text-dim">→</span>
                  <span className="text-2xl font-display font-bold grad-text">{c.after}</span>
                </div>
                <p className="text-sm text-dim leading-relaxed">{c.description}</p>
              </div>
            ))}
          </>
        </Reveal>
      </div>
    </section>
  );
}
