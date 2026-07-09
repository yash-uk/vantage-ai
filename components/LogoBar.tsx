const logos = [
  "Northline Dental",
  "Halo Fitness",
  "Marrow & Salt",
  "Coastline Realty",
  "Ember HVAC",
  "Sable Law Group",
];

export default function LogoBar() {
  return (
    <section className="border-y border-line py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-dim mb-6">
          Trusted by 120+ local & service businesses
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-dim/60 font-display font-semibold text-lg">
          {logos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
