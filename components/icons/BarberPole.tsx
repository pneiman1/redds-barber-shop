interface BarberPoleProps {
  className?: string;
  size?: number;
}

export function BarberPole({ className, size = 32 }: BarberPoleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Pole cylinder */}
      <rect x="9" y="2" width="6" height="20" rx="3" fill="currentColor" opacity="0.2" />

      {/* Red stripes */}
      <path
        d="M10 4 L14 8 L10 12 L14 16 L10 20"
        stroke="#ef4444"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* White stripes */}
      <path
        d="M10 6 L14 10 L10 14 L14 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Blue accent */}
      <path
        d="M12 4 L14 6 L12 8"
        stroke="#3b82f6"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Top cap */}
      <ellipse cx="12" cy="3" rx="3" ry="1.5" fill="currentColor" />

      {/* Bottom cap */}
      <ellipse cx="12" cy="21" rx="3" ry="1.5" fill="currentColor" />
    </svg>
  );
}
