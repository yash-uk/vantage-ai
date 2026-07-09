import Reveal from "./Reveal";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-28 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3">What clients say</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
            Businesses that stopped losing leads.
          </h2>
        </Reveal>
        <Reveal className="grid md:grid-cols-3 gap-5">
          <>
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-7">
                <p className="text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-dim">{t.company}</p>
              </div>
            ))}
          </>
        </Reveal>
      </div>
    </section>
  );
}
