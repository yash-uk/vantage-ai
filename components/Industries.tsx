import Reveal from "./Reveal";
import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <section id="industries" className="py-28 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-purple mb-3">
            Built for your industry
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
            We already know how your leads talk.
          </h2>
        </Reveal>
        <Reveal className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <>
            {industries.map((name) => (
              <div
                key={name}
                className="glass card-hover rounded-xl px-5 py-6 text-center text-sm font-medium"
              >
                {name}
              </div>
            ))}
          </>
        </Reveal>
      </div>
    </section>
  );
}
