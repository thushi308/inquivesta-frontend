// Edit fest-wide facts in exactly one place. Every page/component imports
// from here instead of hardcoding dates, names, or nav links.

export const siteConfig = {
  name: "Inquivesta",
  tagline: "The Science Feast",
  description:
    "Three days of experiments, ideas, and friendly chaos — Inquivesta is where curious minds come to build, break, and discover things together.",
  // ISO string with timezone offset — read by the CountdownTimer.
  eventStartISO: "2027-02-19T09:00:00+05:30",
  eventDatesLabel: "Feb 19–21, 2027",
  venue: "Central Campus Grounds",
  registrationsOpen: true,
  nav: [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Teams", href: "/teams" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};
