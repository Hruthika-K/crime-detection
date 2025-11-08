import { cn } from "@/lib/utils";
import Image from "next/image";

// Make sure to add your logo file to the `public` folder as `logo.png`
export function AppLogo({ className, ...props }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Terra-Civitas Logo"
      width={100}
      height={100}
      className={cn(className)}
      {...props}
    />
  );
}
