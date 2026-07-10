import Reveal from "./Reveal";

const before = ["Missed calls after hours", "Manual, back-and-forth booking", "Slow follow-up on new leads"];
const after = ["AI answers instantly, 24/7", "Appointments booked automatically", "SMS reminders sent on their own"];

export default function BeforeAfter() {
  return (
    <section className="py-28 border-t border-line">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16 mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-purple mb-3">The shift</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
            Before Aivora. After Aivora.
          </h2>
        </Reveal>
        <Reveal className="grid md:grid-cols-2 gap-6">
          <>
            <div className="glass rounded-2xl p-8 border-red-300/40">
              <p className="text-xs font-mono uppercase tracking-widest text-dim mb-5">Before</p>
              <ul className="space-y-4">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-blue mt-0.5">✕</span>
                    <span className="text-dim">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-8 bg-gradient-to-br from-blue/5 to-purple/5">
              <p className="text-xs font-mono uppercase tracking-widest text-purple mb-5">After</p>
              <ul className="space-y-4">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-purple mt-0.5">✓</span>
                    <span className="text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}
