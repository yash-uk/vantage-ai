export type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We used to lose calls every time we were with a patient. Now every one of them gets booked automatically — it paid for itself in the first month.",
    name: "Dr. Amara Lin",
    company: "Northline Dental",
  },
  {
    quote:
      "Our dispatch team went from drowning in texts to letting the automation handle the first response. Response time dropped from hours to under two minutes.",
    name: "Jorge Mendez",
    company: "Ember HVAC",
  },
  {
    quote:
      "Showings tripled without adding a single agent. The voice follow-up alone changed how fast we close leads.",
    name: "Priya Shah",
    company: "Coastline Realty",
  },
];
