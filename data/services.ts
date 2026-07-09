export type Service = {
  icon: string;
  title: string;
  description: string;
  accent: "blue" | "purple";
};

// This array is the single source of truth for the Services grid.
// To wire up a CMS later (Sanity/Strapi/Payload), replace this static
// export with a fetch call in the same shape — see README "Connecting a CMS".
export const services: Service[] = [
  {
    icon: "☎",
    title: "AI Receptionists",
    description:
      "Answers every call in your brand's voice, books appointments, and never puts a caller on hold.",
    accent: "blue",
  },
  {
    icon: "🎙",
    title: "AI Voice Agents",
    description: "Outbound follow-up calls that re-engage leads within minutes, not days.",
    accent: "purple",
  },
  {
    icon: "💬",
    title: "AI Chatbots",
    description:
      "Website and SMS chat that qualifies visitors and hands off booked appointments automatically.",
    accent: "blue",
  },
  {
    icon: "⚙",
    title: "Automation & CRM",
    description: "Every lead logged, tagged, and followed up on — no spreadsheet, no missed thread.",
    accent: "purple",
  },
  {
    icon: "◫",
    title: "Website Development",
    description:
      "A fast, conversion-built site that gives your AI systems somewhere credible to work from.",
    accent: "blue",
  },
  {
    icon: "▲",
    title: "SEO & Paid Ads",
    description: "Traffic that arrives ready to book, fed straight into the same automated pipeline.",
    accent: "purple",
  },
  {
    icon: "◐",
    title: "Social Media Management",
    description:
      "Consistent posting and engagement that feeds new leads into the same automated pipeline.",
    accent: "blue",
  },
  {
    icon: "★",
    title: "Reputation Management",
    description:
      "Automated review requests after every completed job, so your rating grows without anyone chasing it.",
    accent: "purple",
  },
  {
    icon: "✦",
    title: "Custom Integrations",
    description: "Have a tool you already rely on? We connect it in, rather than asking you to switch.",
    accent: "blue",
  },
];
