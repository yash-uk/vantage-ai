"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#work", label: "Work" },
  { href: "#custom", label: "Custom Automation" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled && "bg-white/90 backdrop-blur-md border-b border-line"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
        <a href="#top" className="font-display font-bold text-xl tracking-tight flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue to-purple" />
          Vantage <span className="grad-text">AI</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 font-body text-sm text-dim">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navlink hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium bg-ink text-white px-4 py-2.5 rounded-full hover:bg-blue transition-colors"
        >
          Book a strategy call
        </a>
      </div>
    </header>
  );
}
