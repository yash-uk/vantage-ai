export type CaseStudy = {
  client: string;
  metricLabel: string;
  before: string;
  after: string;
  description: string;
};

export const caseStudies: CaseStudy[] = [
  {
    client: "Northline Dental",
    metricLabel: "Missed calls / week",
    before: "41",
    after: "3",
    description: "AI receptionist + booking automation, live in 9 days.",
  },
  {
    client: "Ember HVAC",
    metricLabel: "Avg. response time",
    before: "6h",
    after: "90s",
    description: "SMS chatbot + CRM automation across 3 dispatch teams.",
  },
  {
    client: "Coastline Realty",
    metricLabel: "Booked showings / month",
    before: "28",
    after: "97",
    description: "Voice agent follow-up on every inbound lead, day or night.",
  },
  {
    client: "Marrow & Salt",
    metricLabel: "Reservations booked online",
    before: "22%",
    after: "81%",
    description: "Chatbot handles reservations, waitlist, and private events.",
  },
  {
    client: "Sable Law Group",
    metricLabel: "Consult requests / month",
    before: "17",
    after: "63",
    description: "Intake chatbot pre-qualifies leads before they reach a paralegal.",
  },
  {
    client: "Halo Fitness",
    metricLabel: "Trial-to-member conversion",
    before: "19%",
    after: "47%",
    description: "Automated follow-up sequence for every trial signup, day 1 to day 14.",
  },
];
