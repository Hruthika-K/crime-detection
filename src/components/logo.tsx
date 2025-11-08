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
      <g transform="translate(0, -5)">
        <path
          d="M50 5C25 20 10 40 10 55S25 90 50 95s40-15 40-40-15-35-40-50z"
          fill="#2C4E70"
        />
        <path
          d="M50 15C30 28 20 45 20 55s10 27 30 35c20-8 30-18 30-27s-10-27-30-35z"
          fill="white"
        />
        <g transform="translate(30, 30) scale(0.4)">
          <circle cx="50" cy="50" r="48" fill="#2C4E70" />
          <path
            d="M50,2a48,48 0 1,0 0,96a48,48 0 1,0 0,-96M50,10a40,40 0 1,1 0,80a40,40 0 1,1 0,-80"
            fill="white"
          />
          <path
            d="M50 30 v-15 m10 15 v-10 m10 10 v-5 m10 5 v-5 m5 10 h-5 m5 10 h-5 m-5 10 v5 m-10 5 v5 m-10 0 v-5 m-10 -5 v-5 m-5 -10 h5 m-5 -10 h5 m20 -15 a5,5 0 0,0 -10,0 m20 0 a5,5 0 0,0 -10,0 m-10 10 a5,5 0 0,0 0,10 m20 -10 a5,5 0 0,0 0,10 m0 10 a5,5 0 0,0 -10,0 m-10 10 a5,5 0 0,0 10,0 m-20 0 a5,5 0 0,0 10,0 m-20 -10 a5,5 0 0,0 0,-10 m10 -10 a5,5 0 0,0 0,-10 m-10 10 a5,5 0 0,0 0,-10"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
          />
          <circle cx="60" cy="20" r="2.5" fill="white" />
          <circle cx="70" cy="25" r="2.5" fill="white" />
          <circle cx="80" cy="40" r="2.5" fill="white" />
          <circle cx="80" cy="60" r="2.5" fill="white" />
          <circle cx="70" cy="75" r="2.5" fill="white" />
          <circle cx="60" cy="80" r="2.5" fill="white" />
          <circle cx="40" cy="80" r="2.5" fill="white" />
          <circle cx="30" cy="75" r="2.5" fill="white" />
          <circle cx="20" cy="60" r="2.5" fill="white" />
          <circle cx="20" cy="40" r="2.5" fill="white" />
          <circle cx="30" cy="25" r="2.5" fill="white" />
          <circle cx="40" cy="20" r="2.5" fill="white" />
        </g>
        <text
          x="50"
          y="56"
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