import Reveal from "./Reveal";

// Placeholder trust signals — swap for real review counts, response-time data,
// and client logos once you have them. Labeled generically on purpose so
// nothing here reads as a specific, unverifiable claim.
export default function TrustBar() {
  return (
    <section className="py-10 border-t border-line">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="glass rounded-2xl px-8 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            <div>
              <p className="text-sm font-medium text-dim">Trusted by growing businesses</p>
              <p className="text-blue text-sm mt-1" aria-label="5 star rating">
                ★★★★★
              </p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-line" />
            <div className="text-sm text-dim">
              <span className="text-ink font-medium">Available</span> 24/7
            </div>
            <div className="hidden sm:block w-px h-8 bg-line" />
            <div className="text-sm text-dim">
              <span className="text-ink font-medium">Responds</span> in under 5 minutes
            </div>
            <div className="hidden sm:block w-px h-8 bg-line" />
            <a
              href="#contact"
              className="text-sm font-medium bg-ink text-white px-5 py-2.5 rounded-full hover:bg-blue transition-colors"
            >
              Book a free consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
