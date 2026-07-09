export default function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <div className="font-display font-bold text-lg mb-3">
            Vantage <span className="grad-text">AI</span>
          </div>
          <p className="text-dim text-sm leading-relaxed">
            AI growth systems for local and service businesses.
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
          </ul>
        </div>
        <div>
          <p className="font-medium mb-3">Get in touch</p>
          <ul className="space-y-2 text-dim">
            <li>hello@vantageai.co</li>
            <li>Los Angeles, CA</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10 pt-6 border-t border-line text-xs text-dim flex justify-between">
        <span>© {new Date().getFullYear()} Vantage AI</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}
