import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-board text-paper">
      <div className="container-inquivesta py-14 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <span className="font-display text-2xl">{siteConfig.name}</span>
          <p className="mt-3 max-w-sm font-body text-sm text-paper/60 leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="font-body text-sm uppercase tracking-wide text-paper/45 mb-3">
            Explore
          </h3>
          <ul className="flex flex-col gap-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-sm text-paper/75 hover:text-marigold transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-body text-sm uppercase tracking-wide text-paper/45 mb-3">
            Find us
          </h3>
          <p className="font-body text-sm text-paper/75">{siteConfig.venue}</p>
          <p className="font-body text-sm text-paper/75 mt-1">
            {siteConfig.eventDatesLabel}
          </p>
          <ul className="flex gap-4 mt-4">
            {siteConfig.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  className="font-body text-sm text-paper/60 hover:text-chalkteal transition-colors"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-board-line">
        <div className="container-inquivesta py-5 text-xs font-body text-paper/40">
          © {new Date().getFullYear()} {siteConfig.name}. Built by curious people.
        </div>
      </div>
    </footer>
  );
}
