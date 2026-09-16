import SectionHeading from "@/components/ui/SectionHeading";

const STATS = [
  { value: "3", label: "Days" },
  { value: "40+", label: "Events" },
  { value: "6,000+", label: "Attendees last year" },
  { value: "120", label: "Colleges represented" },
];

export default function About() {
  return (
    <section className="bg-paper">
      <div className="container-inquivesta py-20 md:py-28 grid gap-14 md:grid-cols-[1fr_0.85fr] md:items-start">
        <SectionHeading
          kicker="What is Inquivesta"
          title="A science fest built by people who never stopped asking “what happens if...”"
          supporting="Inquivesta began as a two-classroom physics exhibit and grew into a three-day feast of competitions, builds, talks, and late-night experiments. It's equal parts rigorous and ridiculous — bring your curiosity, we'll bring the reagents."
        />

        <dl className="grid grid-cols-2 gap-6 md:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-l-2 border-ember/60 pl-4">
              <dt className="font-display text-3xl md:text-4xl text-ink">
                {stat.value}
              </dt>
              <dd className="mt-1 font-body text-sm text-ink/60">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
