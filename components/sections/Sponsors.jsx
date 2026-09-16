import { sponsors } from "@/data/sponsors";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Sponsors() {
  return (
    <section className="bg-paper">
      <div className="container-inquivesta py-20 md:py-24">
        <SectionHeading
          kicker="Backed by"
          title="The labs and companies fuelling the feast"
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-ink/10 bg-white/40 px-4 py-7 text-center hover:border-ember/50 transition-colors"
            >
              {/* Swap this wordmark plate for an <Image> once real logo
                  files are dropped into /public/images/sponsors */}
              <span className="font-display text-lg text-ink">
                {sponsor.name}
              </span>
              <span className="font-body text-[11px] uppercase tracking-wide text-ink/45">
                {sponsor.tier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
