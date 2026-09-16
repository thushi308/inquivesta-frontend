/**
 * SectionHeading
 * --------------
 * Shared heading treatment for section intros across the site: a small
 * orbiting-dot mark (astronomy motif, not a decorative eyebrow label),
 * a display headline, and an optional supporting line.
 */
export default function SectionHeading({
  kicker,
  title,
  supporting,
  align = "left",
  tone = "dark", // "dark" text on paper, "light" text on board
}) {
  const textTone = tone === "light" ? "text-paper" : "text-ink";
  const supportingTone = tone === "light" ? "text-paper/70" : "text-ink/65";
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {kicker && (
        <div className="flex items-center gap-2.5">
          <span
            className="relative block h-2.5 w-2.5 rounded-full bg-ember"
            aria-hidden="true"
          >
            <span className="absolute -inset-1.5 rounded-full border border-ember/40" />
          </span>
          <span className={`font-body text-sm ${supportingTone}`}>{kicker}</span>
        </div>
      )}
      <h2 className={`font-display text-3xl md:text-[2.75rem] leading-[1.08] ${textTone}`}>
        {title}
      </h2>
      {supporting && (
        <p className={`font-body text-base md:text-lg leading-relaxed ${supportingTone}`}>
          {supporting}
        </p>
      )}
    </div>
  );
}
