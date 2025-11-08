import type { ImgHTMLAttributes } from "react";

export function AppLogo(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Terra-Civitas Logo"
      {...props}
    >
      <path
        d="M50 0C15 0 15 20 15 20C15 50 25 80 50 80C75 80 85 50 85 20C85 20 85 0 50 0Z"
        fill="currentColor"
      />
      <path
        d="M20 40C20 40 35 30 50 30C65 30 80 40 80 40C80 40 65 50 50 50C35 50 20 40 20 40Z"
        fill="white"
      />
      <circle cx="50" cy="40" r="12" fill="currentColor" />
      <text
        x="50"
        y="41"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        TC
      </text>
      <g stroke="white" strokeWidth="0.5">
        <circle cx="50" cy="40" r="10" fill="none" />
        <path d="M50 30 V 28.5" />
        <path d="M50 50 V 51.5" />
        <path d="M40 40 H 38.5" />
        <path d="M60 40 H 61.5" />
        <path d="M42.929 32.929 L 41.868 31.868" />
        <path d="M57.071 47.071 L 58.132 48.132" />
        <path d="M42.929 47.071 L 41.868 48.132" />
        <path d="M57.071 32.929 L 58.132 31.868" />

        <path d="M47 31 a 3 3 0 0 1 6 0" />
        <path d="M47 49 a 3 3 0 0 0 6 0" />
        <path d="M39 37 a 3 3 0 0 0 0 -6" transform="rotate(90 39 37)" />
        <path d="M61 37 a 3 3 0 0 1 0 -6" transform="rotate(90 61 37)" />

        <circle cx="46" cy="31.5" r="0.7" />
        <circle cx="54" cy="31.5" r="0.7" />
        <circle cx="46" cy="48.5" r="0.7" />
        <circle cx="54" cy="48.5" r="0.7" />
        <circle cx="39.5" cy="34" r="0.7" />
        <circle cx="39.5" cy="46" r="0.7" />
        <circle cx="60.5" cy="34" r="0.7" />
        <circle cx="60.5" cy="46" r="0.7" />
        
        <circle cx="42" cy="35" r="0.7" />
        <circle cx="42" cy="45" r="0.7" />
        <circle cx="58" cy="35" r="0.7" />
        <circle cx="58" cy="45" r="0.7" />
      </g>
    </svg>
  );
}
