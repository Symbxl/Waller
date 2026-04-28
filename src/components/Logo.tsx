type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const stroke = variant === "light" ? "#fffaf0" : "#1f140c";
  const accent = variant === "light" ? "#c8932b" : "#8a2a14";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        width="44"
        height="44"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle
          cx="32"
          cy="32"
          r="29"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
        />
        <circle
          cx="32"
          cy="32"
          r="24"
          fill="none"
          stroke={accent}
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />
        <path
          d="M14 40 L24 22 L32 36 L40 22 L50 40"
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M20 44 L44 44"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="32" cy="14" r="1.5" fill={accent} />
      </svg>
      <div className="leading-none">
        <div
          className="font-display text-xl font-bold tracking-tight"
          style={{ color: stroke }}
        >
          Waller County Line
        </div>
        <div
          className="text-[0.65rem] tracking-[0.3em] uppercase mt-1"
          style={{ color: accent }}
        >
          Eats &middot; Drinks &middot; Texas
        </div>
      </div>
    </div>
  );
}
