import { cn } from "@/lib/utils";

export function AppLogo({ className, ...props }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10", className)}
      {...props}
    >
      <defs>
        <path
          id="circlePath"
          d="
            M 50, 50
            m -40, 0
            a 40,40 0 1,1 80,0
            a 40,40 0 1,1 -80,0
          "
        />
      </defs>
      <circle cx="50" cy="50" r="48" fill="white" stroke="#E0E0E0" strokeWidth="2" />
      <g transform="translate(18, 18) scale(0.64)">
        <path
          d="M50 0L95.8 25V62.5C95.8 81.3 75.8 97.4 50 100C24.2 97.4 4.2 81.3 4.2 62.5V25L50 0Z"
          fill="#E0E0E0"
        />
        <path
          d="M50 3.8L90.8 26.9V60.6C90.8 77.8 73.1 92.5 50 95C26.9 92.5 9.2 77.8 9.2 60.6V26.9L50 3.8Z"
          fill="white"
          stroke="#BDBDBD"
          strokeWidth="2"
        />
        <path
          fill="#E0E0E0"
          d="M50 4.1C50 4.1 50 94.7 50 94.7M50 94.7C27.2 92.2 9.7 77.5 9.7 60.5V27L50 4.1M50 94.7C72.8 92.2 90.3 77.5 90.3 60.5V27L50 4.1M18.8 33.1H81.2M23 48.1H77M28.3 63.1H71.7M50 4.1C42.8 25.5 37.7 48.1 37.7 48.1M50 4.1C57.2 25.5 62.3 48.1 62.3 48.1M50 94.7C45.2 79.9 41.5 63.1 41.5 63.1M50 94.7C54.8 79.9 58.5 63.1 58.5 63.1M18.8 33.1C25.5 48.1 28.3 63.1 28.3 63.1M81.2 33.1C74.5 48.1 71.7 63.1 71.7 63.1"
          stroke="#BDBDBD"
          strokeWidth="1.5"
        />
      </g>
      <text fill="#424242" fontSize="9" fontWeight="bold" letterSpacing="0.5">
        <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
          TERRA-CIVITAS
        </textPath>
      </text>
      <text fill="#757575" fontSize="6" fontWeight="bold" letterSpacing="0.2">
        <textPath href="#circlePath" startOffset="0%" textAnchor="middle" transform="rotate(180, 50, 50)" dominantBaseline="hanging">
         COMMUNITY CRIME REPORTING
        </textPath>
      </text>
    </svg>
  );
}
