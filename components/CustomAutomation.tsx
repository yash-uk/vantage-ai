import Reveal from "./Reveal";

const built = [
  "An automation that texts a quote follow-up 3 days after a no-response, then escalates to a call.",
  "A no-show predictor that auto-sends a reminder + reschedule link to high-risk bookings.",
  "A review-request flow that only fires after a job is marked complete in the CRM.",
  "Have something more specific in mind? That's exactly what the call below is for.",
];

const steps = [
  "Tell us the workflow you want automated — booking, follow-up, quoting, reminders, anything.",
  "We map it out, flag what's possible today, and design around your existing tools.",
  "You get a plan and a price scoped to your idea — not a generic tier.",
];

export default function CustomAutomation() {
  return (
    <section id="custom" className="py-28 border-t border-line relative overflow-hidden">
      <div className="glow bg-purple w-[420px] h-[420px] top-10 right-1/4 animate-drift" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-purple mb-3">Got an idea?</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-6">
            If you can describe the automation, we&apos;ll try to build it.
          </h2>
          <p className="text-dim leading-relaxed mb-8 max-w-lg">
            Every business runs a little differently — so we don&apos;t start with a fixed package.
            We start by listening: what&apos;s eating up your time, what keeps falling through the
            cracks, what you wish just happened automatically. Then we scope a system built around
            that, and price it based on what it actually takes to build.
          </p>
          <ul className="space-y-4 text-sm">
            {steps.map((step) => (
              <li key={step} className="flex gap-3">
                <span className="text-purple">→</span>
                <span className="text-dim">{step}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="glass rounded-2xl p-8">
          <>
            <p className="text-xs font-mono uppercase tracking-widest text-dim mb-6">
              A few things we&apos;ve built on request
            </p>
            <div className="space-y-4">
              {built.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-start gap-4 ${
                    i < built.length - 1 ? "border-b border-line pb-4" : ""
                  }`}
                >
                  <span className="text-purple mt-0.5">✓</span>
                  <p className="text-sm text-dim">{item}</p>
                </div>
              ))}
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}
