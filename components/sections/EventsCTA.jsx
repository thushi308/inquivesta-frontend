import { events } from "@/data/events";
import Button from "@/components/ui/Button";

export default function EventsCTA() {
  const categories = [...new Set(events.map((event) => event.category))];

  return (
    <section className="bg-paper">
      <div className="container-inquivesta py-20 md:py-24">
        <div className="rounded-panel bg-ink text-paper px-6 py-12 md:px-14 md:py-16 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.1]">
              {events.length}+ events across {categories.length} departments —
              there's more than one way to compete.
            </h2>
            <p className="mt-4 font-body text-paper/65 max-w-lg leading-relaxed">
              From four-hour build sprints to a chemistry whodunit to a
              telescope race under the open sky — the full lineup covers
              electronics, code, chemistry, astronomy, and more.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 md:items-end">
            <ul className="flex flex-wrap gap-2 md:justify-end">
              {categories.map((category) => (
                <li
                  key={category}
                  className="rounded-full border border-paper/25 px-3.5 py-1.5 font-body text-xs text-paper/70"
                >
                  {category}
                </li>
              ))}
            </ul>
            <Button href="/events" variant="outline">
              See the full lineup
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
