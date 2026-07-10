export default function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-5 gap-10 text-sm">
        <div className="md:col-span-1">
          <div className="font-display font-bold text-lg mb-3">
            Aivora <span className="grad-text">AI</span>
          </div>
          <p className="text-dim text-sm leading-relaxed">
            AI Solutions for Modern Businesses.
          </p>
        </div>
        <div>
          <p className="font-medium mb-3">Services</p>
          <ul className="space-y-2 text-dim">
            <li>AI Receptionists</li>
            <li>AI Chatbots</li>
            <li>Automation & CRM</li>
            <li>Website Development</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-3">Company</p>
          <ul className="space-y-2 text-dim">
            <li>
              <a href="#work" className="hover:text-ink transition-colors">
                Case studies
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-ink transition-colors">
                FAQ
              </a>
            </li>
            {/* Careers / Press: add real links once these pages exist */}
            <li className="text-dim/50">Careers</li>
            <li className="text-dim/50">Press</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-3">Resources</p>
          <ul className="space-y-2 text-dim">
            {/* Placeholder until a resource center / docs / API pages are built */}
            <li className="text-dim/50">Documentation</li>
            <li className="text-dim/50">API</li>
            <li className="text-dim/50">Partners</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-3">Get in touch</p>
          <ul className="space-y-2 text-dim">
            <li>hello@aivora.ai</li>
            <li>Los Angeles, CA</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10 pt-6 border-t border-line text-xs text-dim flex justify-between">
        <span>© {new Date().getFullYear()} Aivora AI</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}
