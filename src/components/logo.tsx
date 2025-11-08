import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("fill-current", props.className)}
      {...props}
    >
      <g>
        <path d="M50,95 C20,80 10,50 10,30 C10,15 25,5 50,5 C75,5 90,15 90,30 C90,50 80,80 50,95 Z M50,12 C30,22 20,40 20,55 C20,70 30,80 50,88 C70,80 80,70 80,55 C80,40 70,22 50,12 Z" />
        <circle cx="50" cy="50" r="20" fill="white" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="18" />
        <text
          x="50"
          y="55"
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
        >
          TC
        </text>
      </g>
    </svg>
  );
}
