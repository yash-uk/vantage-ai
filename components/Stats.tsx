import Counter from "./Counter";
import Reveal from "./Reveal";

const stats = [
  { value: 99.9, label: "AI availability", suffix: "%", isCounter: true },
  { value: "24/7", label: "Call answering", isCounter: false },
  { value: 60, label: "Fewer missed calls*", suffix: "%", isCounter: true },
  { value: "<1 min", label: "Average response time", isCounter: false },
];

export default function Stats() {
  return (
    <section className="py-20 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <>
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-3xl sm:text-4xl grad-text">
                  {stat.isCounter ? (
                    <Counter
                      target={stat.value as number}
                      suffix={stat.suffix}
                      className="grad-text"
                    />
                  ) : (
                    stat.value
                  )}
                </div>
                <p className="text-sm text-dim mt-2">{stat.label}</p>
              </div>
            ))}
          </>
        </Reveal>
        <p className="text-center text-xs text-dim mt-8">
          *Illustrative example based on typical results — ask us for figures specific to your business.
        </p>
      </div>
    </section>
  );
}
