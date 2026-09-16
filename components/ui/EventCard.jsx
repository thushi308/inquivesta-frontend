"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * EventCard
 * ---------
 * Used on the home page's "top events" strip today, and meant to be
 * reused as-is on the /events listing page. If the event has more than
 * one image it auto-crossfades between them like a small slideshow;
 * with a single image it just renders statically — no extra config.
 */
export default function EventCard({ event, size = "md" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = event.images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % event.images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [hasMultipleImages, event.images.length]);

  const imageHeight = size === "lg" ? "h-80 md:h-[26rem]" : "h-64";

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block rounded-panel overflow-hidden bg-board-alt border border-board-line hover:border-marigold/60 transition-colors"
    >
      <div className={`relative ${imageHeight} w-full overflow-hidden`}>
        {event.images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            } group-hover:scale-[1.04] transition-transform duration-700`}
            priority={false}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-board/90 via-board/10 to-transparent" />

        {hasMultipleImages && (
          <div className="absolute bottom-3 right-3 flex gap-1.5" aria-hidden="true">
            {event.images.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-marigold" : "bg-paper/40"
                }`}
              />
            ))}
          </div>
        )}

        <span className="absolute top-3 left-3 rounded-full bg-board/80 border border-board-line px-3 py-1 font-body text-xs text-paper/80">
          {event.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl text-paper">{event.title}</h3>
        <p className="mt-1.5 font-body text-sm text-paper/60 leading-relaxed">
          {event.tagline}
        </p>
        <div className="mt-4 flex items-center gap-3 font-body text-xs text-paper/45">
          <span>{event.date}</span>
          <span aria-hidden="true">·</span>
          <span>{event.time}</span>
          <span aria-hidden="true">·</span>
          <span>{event.venue}</span>
        </div>
      </div>
    </Link>
  );
}
