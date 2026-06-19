/**
 * Geometric "SA" monogram. Inline SVG so it scales crisply and themes via
 * currentColor. The dot evokes the reference logo's stacked-shape mark.
 */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={className}
      role="img"
      aria-label="Syed Arif"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="42"
        height="42"
        rx="12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text
        x="50%"
        y="53%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontFamily='"Archivo", sans-serif'
        fontWeight="800"
        fontSize="18"
        letterSpacing="-0.5"
      >
        SA
      </text>
    </svg>
  );
}
