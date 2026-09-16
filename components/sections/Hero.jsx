import { siteConfig } from "@/lib/site-config";
import Button from "@/components/ui/Button";
import CountdownTimer from "@/components/ui/CountdownTimer";

export default function Hero() {
  return (
    <section className="relative bg-board overflow-hidden">
      {/* Starfield + orbit motif — literal astronomy content for a science
          fest, kept quiet so it doesn't compete with the headline. */}
      <div className="absolute inset-0 trajectory-dot opacity-40" aria-hidden="true" />
      <div
        className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full border border-board-line hidden md:block"
        aria-hidden="true"
      >
        <div className="absolute inset-8 rounded-full border border-board-line animate-orbit-spin-slow">
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-marigold shadow-[0_0_12px_2px_rgba(255,182,39,0.6)]" />
        </div>
      </div>

      <div className="container-inquivesta relative grid gap-12 py-20 md:py-28 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <span className="relative block h-2.5 w-2.5 rounded-full bg-marigold animate-twinkle" />
            <span className="font-body text-sm text-paper/65">
              {siteConfig.eventDatesLabel} · {siteConfig.venue}
            </span>
          </div>

          <h1 className="font-display text-[2.75rem] leading-[1.05] text-paper md:text-7xl">
            {siteConfig.tagline}
            <span className="block text-marigold">is coming back.</span>
          </h1>

          <p className="mt-6 max-w-lg font-body text-base md:text-lg text-paper/70 leading-relaxed">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/register" variant="primary">
              Register your team
            </Button>
            <Button href="/events" variant="outline">
              Browse events
            </Button>
          </div>
        </div>

        <div className="rounded-panel bg-board-alt/60 border border-board-line p-5 md:p-7 shadow-panel">
          <p className="font-body text-xs uppercase tracking-wide text-paper/45 mb-4">
            Countdown to opening ceremony
          </p>
          <CountdownTimer targetISO={siteConfig.eventStartISO} />
        </div>
      </div>
    </section>
  );
}
