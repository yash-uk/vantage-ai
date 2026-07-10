import Reveal from "./Reveal";

const traditional = ["Office hours only", "Calls missed during busy periods", "Manual, back-and-forth scheduling", "Follow-up depends on staff remembering"];
const aiReceptionist = ["24/7 availability, nights and weekends", "Every call answered instantly", "Appointments booked automatically", "Follow-ups sent on their own, every time"];

export default function WhyChooseUs() {
  return (
    <section className="py-28 border-t border-line">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16 mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3">Why choose us</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
            A receptionist that never clocks out.
          </h2>
        </Reveal>
        <Reveal className="grid md:grid-cols-2 gap-6">
          <>
            <div className="glass rounded-2xl p-8">
              <p className="text-xs font-mono uppercase tracking-widest text-dim mb-5">
                Traditional Receptionist
              </p>
              <ul className="space-y-4">
                {traditional.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-dim mt-0.5">–</span>
                    <span className="text-dim">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-8 bg-gradient-to-br from-blue/5 to-purple/5 border-blue/20">
              <p className="text-xs font-mono uppercase tracking-widest text-purple mb-5">
                Aivora AI Receptionist
              </p>
              <ul className="space-y-4">
                {aiReceptionist.map((item) => (
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
