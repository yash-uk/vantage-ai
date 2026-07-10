import ChatDemo from "./ChatDemo";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="glow bg-blue w-[500px] h-[500px] -top-40 left-1/4 animate-drift" />
      <div className="glow bg-purple w-[420px] h-[420px] top-20 right-1/4 animate-drift" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-dim mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            AI Solutions for Modern Businesses
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl leading-[1.05] tracking-tight mb-6">
            Turn every missed call
            <br />
            into a <span className="grad-text">paying customer</span>.
          </h1>
          <p className="text-dim text-lg leading-relaxed max-w-lg mb-10">
            Your AI employees answer, qualify, and book every lead — nights, weekends, and the
            moment a call comes in. No more lost revenue while your team is busy, closed, or asleep.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue to-purple text-white font-medium px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Book a free strategy call
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 text-sm font-medium text-dim hover:text-ink transition-colors px-2"
            >
              ▶ Watch a 60-second demo
            </a>
          </div>
          <div className="flex items-center gap-8 mt-14 text-sm text-dim">
            <div>
              <Counter target={120} />+ businesses automated
            </div>
            <div>
              <Counter target={34} />k leads captured
            </div>
            <div>
              <Counter target={98} />% response rate
            </div>
          </div>
        </div>

        <div id="demo">
          <ChatDemo />
        </div>
      </div>
    </section>
  );
}
