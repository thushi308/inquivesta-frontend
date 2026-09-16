import { featuredEvents } from "@/data/events";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/ui/EventCard";

export default function FeaturedEvents() {
  return (
    <section className="bg-board">
      <div className="container-inquivesta py-20 md:py-28">
        <SectionHeading
          kicker="Marquee events"
          title="The ones people plan their whole weekend around"
          tone="light"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredEvents.slice(0, 3).map((event, index) => (
            <div key={event.slug} className={index === 0 ? "md:col-span-1" : ""}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
