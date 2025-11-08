import type { SVGProps } from 'react';

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Terra-Civitas Logo</title>
      <path
        d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0Z"
        fill="black"
      />
      <path
        d="M29.5 20C29.5 25.2467 25.2467 29.5 20 29.5C14.7533 29.5 10.5 25.2467 10.5 20C10.5 14.7533 14.7533 10.5 20 10.5C22.3214 10.5 24.4735 11.3321 26.1667 12.75L20 20H29.5Z"
        fill="white"
      />
    </svg>
  );
}
