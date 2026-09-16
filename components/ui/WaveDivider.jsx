/**
 * WaveDivider
 * -----------
 * A hand-drawn "chalk wave" divider used between sections across the whole
 * site. It's one reusable component so the transition motif stays
 * consistent everywhere — change the path/animation once, here.
 *
 * Props:
 *  - from / to: tailwind color tokens (e.g. "board", "paper") for the
 *    two sections being stitched together. `to` becomes the fill of the
 *    wave shape; `from` is the flat backdrop behind it.
 *  - flip: mirror vertically, for use above vs. below a section.
 *  - animated: drift the wave slowly, like water — off by default for
 *    people who prefer reduced motion (also respected via CSS).
 */
const COLOR_VARS = {
  board: "var(--color-board)",
  "board-alt": "var(--color-board-alt)",
  paper: "var(--color-paper)",
};

export default function WaveDivider({
  from = "paper",
  to = "board",
  flip = false,
  animated = true,
}) {
  const fillColor = COLOR_VARS[to] ?? to;
  const backdropColor = COLOR_VARS[from] ?? from;

  return (
    <div
      aria-hidden="true"
      className="relative h-16 md:h-24 w-full overflow-hidden"
      style={{ backgroundColor: backdropColor }}
    >
      <div
        className={[
          "absolute inset-0 flex",
          flip ? "-scale-y-100" : "",
        ].join(" ")}
      >
        {/* Render the wave path twice, edge-to-edge, so the drift
            animation can loop seamlessly at -50%. */}
        <svg
          className={animated ? "animate-chalk-drift-slow" : ""}
          width="200%"
          height="100%"
          viewBox="0 0 2400 160"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* One 1200-wide "chalk wobble" tile, drawn twice back-to-back
              (0 and +1200) so a -50% translateX loops seamlessly. */}
          <path
            d="M0,96 C 80,60 160,132 240,100 C 320,68 400,140 480,104
               C 560,68 640,132 720,96 C 800,60 880,128 960,100
               C 1040,72 1120,136 1200,100 L1200,160 L0,160 Z"
            fill={fillColor}
          />
          <path
            d="M0,96 C 80,60 160,132 240,100 C 320,68 400,140 480,104
               C 560,68 640,132 720,96 C 800,60 880,128 960,100
               C 1040,72 1120,136 1200,100 L1200,160 L0,160 Z"
            fill={fillColor}
            transform="translate(1200, 0)"
          />
        </svg>
      </div>
    </div>
  );
}
