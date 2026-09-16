import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-marigold text-ink hover:bg-ember hover:text-paper border-transparent",
  outline:
    "bg-transparent text-paper border-paper/40 hover:border-marigold hover:text-marigold",
  "outline-dark":
    "bg-transparent text-ink border-ink/30 hover:border-ember hover:text-ember",
};

/**
 * Button
 * ------
 * The one button style used everywhere (hero CTA, events CTA, nav
 * "Register" link, etc.) so interactive elements feel consistent site-wide.
 */
export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  type = "button",
  className = "",
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3",
    "font-body text-sm font-semibold tracking-wide transition-colors duration-200",
    VARIANTS[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
