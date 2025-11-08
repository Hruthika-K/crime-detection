import { cn } from "@/lib/utils";

export function AppLogo({ className, ...props }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10", className)}
      {...props}
    >
      <g transform="scale(1.1) translate(-5, -2)">
        <path 
          d="M50 0C10 15, 10 80, 50 100C90 80, 90 15, 50 0ZM50 25C35 30, 30 60, 50 75C70 60, 65 30, 50 25Z" 
          fill="#2C4E6A" 
        />
        <path 
          d="M50 25C35 30, 30 60, 50 75C70 60, 65 30, 50 25Z"
          fill="white"
        />
        <circle cx="50" cy="50" r="18" fill="white" stroke="#2C4E6A" strokeWidth="1"/>
        <g transform="translate(50,50)">
          <path d="M0 -15.5 A 15.5 15.5 0 0 1 0 15.5 A 15.5 15.5 0 0 1 0 -15.5 Z M0 -12.5 A 12.5 12.5 0 0 0 0 12.5 A 12.5 12.5 0 0 0 0 -12.5 Z" fill="#2C4E6A"/>
          <circle cx="0" cy="0" r="6" fill="#2C4E6A"/>
          <text x="0" y="2" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TC</text>
          
          <g stroke="#2C4E6A" strokeWidth="0.5" fill="none">
            {Array.from({ length: 16 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 22.5})`}>
                <path d="M 0,-6.5 L 0,-8" />
                <path d="M -1,-8 L 1,-8" />
                <path d="M -1,-8 L -2,-9" />
                <path d="M 1,-8 L 2,-9" />
                <path d="M 0,-8 L 0,-11.5" />
                <circle cx="0" cy="-12" r="0.5" fill="#2C4E6A"/>
                <path d="M 0,-9.5 L -2, -9.5" />
                <path d="M 0,-9.5 L 2, -9.5" />
                <circle cx="-2.5" cy="-9.5" r="0.25" fill="#2C4E6A"/>
                <circle cx="2.5" cy="-9.5" r="0.25" fill="#2C4E6A"/>
              </g>
            ))}
             {Array.from({ length: 32 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 11.25})`}>
                 <circle cx="0" cy="-14" r="0.3" fill="#2C4E6A"/>
              </g>
            ))}
          </g>
        </g>
      </g>
    </svg>
  );
}