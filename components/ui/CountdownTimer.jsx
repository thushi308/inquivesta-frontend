"use client";

import { useEffect, useState } from "react";

function getTimeParts(targetISO) {
  const total = Math.max(0, new Date(targetISO).getTime() - Date.now());
  const seconds = Math.floor(total / 1000) % 60;
  const minutes = Math.floor(total / (1000 * 60)) % 60;
  const hours = Math.floor(total / (1000 * 60 * 60)) % 24;
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds, done: total === 0 };
}

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hrs" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Sec" },
];

/**
 * CountdownTimer
 * ---------------
 * Ticks down to `targetISO`. Rendered as an "instrument panel" of digit
 * cards — reused wherever a countdown is needed (hero today, potentially
 * a per-event countdown on event pages later).
 */
export default function CountdownTimer({ targetISO, doneLabel = "It's on." }) {
  // Start at null so server and first client render match (avoids
  // hydration mismatch); fill in real numbers after mount.
  const [parts, setParts] = useState(null);

  useEffect(() => {
    setParts(getTimeParts(targetISO));
    const id = setInterval(() => setParts(getTimeParts(targetISO)), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  if (!parts) {
    return (
      <div className="grid grid-cols-4 gap-2.5 md:gap-4" aria-hidden="true">
        {UNITS.map((unit) => (
          <div
            key={unit.key}
            className="rounded-xl bg-board-alt/80 border border-board-line px-2 py-3 md:px-4 md:py-5 text-center"
          >
            <span className="block font-display text-2xl md:text-4xl text-paper tabular-nums">
              --
            </span>
            <span className="mt-1 block text-[11px] md:text-xs uppercase tracking-wide text-paper/50">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (parts.done) {
    return (
      <p className="font-display text-2xl md:text-3xl text-marigold">
        {doneLabel}
      </p>
    );
  }

  return (
    <div
      className="grid grid-cols-4 gap-2.5 md:gap-4"
      role="timer"
      aria-live="polite"
      aria-label="Time remaining until Inquivesta begins"
    >
      {UNITS.map((unit) => (
        <div
          key={unit.key}
          className="rounded-xl bg-board-alt/80 border border-board-line px-2 py-3 md:px-4 md:py-5 text-center shadow-panel"
        >
          <span className="block font-display text-2xl md:text-4xl text-paper tabular-nums">
            {String(parts[unit.key]).padStart(2, "0")}
          </span>
          <span className="mt-1 block text-[11px] md:text-xs uppercase tracking-wide text-paper/50">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
