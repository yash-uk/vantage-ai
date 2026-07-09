export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "How fast can we go live?",
    answer:
      "Most single-location businesses are live within 1–2 weeks. Enterprise and multi-location rollouts are scoped individually depending on integrations.",
  },
  {
    question: "Does the AI actually sound human?",
    answer:
      "Yes — voice and chat are trained on your business's tone, FAQs, and booking rules, and every conversation can hand off to a real person at any point.",
  },
  {
    question: "What if I already use a CRM?",
    answer:
      "We connect into most common CRMs and calendar tools rather than replacing them. If yours isn't supported yet, we'll scope a custom integration.",
  },
  {
    question: "Is there a contract?",
    answer:
      "Starter and Growth are month-to-month. Enterprise plans are scoped with terms that match your rollout.",
  },
];
