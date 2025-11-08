import type { ImgHTMLAttributes } from "react";

export function AppLogo(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Terra-Civitas Logo"
      {...props}
    >
      <circle cx="50" cy="50" r="50" fill="#003366" />
      <path
        d="M35 65 L35 35 L50 35 C61.0457 35 70 43.9543 70 55 C70 66.0457 61.0457 75 50 75 L35 75"
        stroke="white"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="55" r="5" fill="#003366" />
    </svg>
  );
}