import Reveal from "./Reveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3">What we build</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
            One system, every channel a lead comes from.
          </h2>
        </Reveal>
        <Reveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <>
            {services.map((s) => (
              <div key={s.title} className="glass card-hover rounded-2xl p-7">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${
                    s.accent === "blue" ? "bg-blue/15 text-blue" : "bg-purple/15 text-purple"
                  }`}
                >
                  {s.icon}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-dim text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </>
        </Reveal>
      </div>
    </section>
  );
}
