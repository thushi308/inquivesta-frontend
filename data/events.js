// Single source of truth for event content. The home page's featured
// section, the /events listing, and each /events/[slug] page all read
// from this file — add an event once and it appears everywhere.

export const events = [
  {
    slug: "circuit-breaker",
    title: "Circuit Breaker",
    category: "Electronics",
    tagline: "Build a working device from a box of mystery parts in 4 hours.",
    description:
      "Teams get an identical box of resistors, sensors, and a microcontroller, plus one absurd brief — build it, wire it, and demo it before the clock runs out.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1600&auto=format&fit=crop",
    ],
    date: "Feb 19",
    time: "10:00 AM",
    venue: "Robotics Lab",
    teamSize: "2–4",
    featured: true,
  },
  {
    slug: "code-red",
    title: "Code Red",
    category: "Competitive Programming",
    tagline: "A three-round algorithmic sprint that gets meaner each round.",
    description:
      "Standard rules, escalating difficulty. Round three has broken more laptops than it has solved problems — bring snacks.",
    images: [
      "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1600&auto=format&fit=crop",
    ],
    date: "Feb 19",
    time: "2:00 PM",
    venue: "Computer Centre",
    teamSize: "1–2",
    featured: true,
  },
  {
    slug: "titration-theatre",
    title: "Titration Theatre",
    category: "Chemistry",
    tagline: "Solve a mystery using nothing but a rack of reagents.",
    description:
      "A chemistry whodunit — identify the unknown solution through a chain of reactions before your rivals beat you to the reveal.",
    images: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1600&auto=format&fit=crop",
    ],
    date: "Feb 20",
    time: "11:00 AM",
    venue: "Chemistry Block",
    teamSize: "2–3",
    featured: true,
  },
  {
    slug: "night-sky-sprint",
    title: "Night Sky Sprint",
    category: "Astronomy",
    tagline: "A guided telescope hunt across the winter sky.",
    description:
      "Race against three other teams to locate and log a checklist of constellations, planets, and deep-sky objects before dawn.",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    ],
    date: "Feb 20",
    time: "8:00 PM",
    venue: "Open Grounds",
    teamSize: "3–5",
    featured: false,
  },
  {
    slug: "bridge-of-sighs",
    title: "Bridge of Sighs",
    category: "Civil Engineering",
    tagline: "Build a bridge from ice-cream sticks. Watch it fail live.",
    description:
      "Load-testing is public, loud, and occasionally tragic. Heaviest load-to-weight ratio wins bragging rights for the year.",
    images: [
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1600&auto=format&fit=crop",
    ],
    date: "Feb 21",
    time: "9:30 AM",
    venue: "Main Quad",
    teamSize: "2–4",
    featured: false,
  },
  {
    slug: "the-pitch-tank",
    title: "The Pitch Tank",
    category: "Science Communication",
    tagline: "Explain your favourite theorem to a room of skeptical judges.",
    description:
      "Five minutes, one whiteboard, zero jargon. Judges dock points for every unexplained acronym.",
    images: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1600&auto=format&fit=crop",
    ],
    date: "Feb 21",
    time: "3:00 PM",
    venue: "Auditorium",
    teamSize: "1",
    featured: false,
  },
];

export const featuredEvents = events.filter((event) => event.featured);
