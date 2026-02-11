interface ClipperProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function Clipper({ className, size = 32, strokeWidth = 2 }: ClipperProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Clipper body */}
      <rect
        x="8"
        y="4"
        width="8"
        height="14"
        rx="1"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />

      {/* Clipper blades - horizontal lines */}
      <line x1="8" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />

      {/* Power button */}
      <circle cx="12" cy="8" r="1.5" fill="currentColor" />

      {/* Blade teeth */}
      <path
        d="M8 19 L9 21 M10 19 L11 21 M12 19 L13 21 M14 19 L15 21 M16 19 L17 21"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
