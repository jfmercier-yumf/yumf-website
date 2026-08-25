import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonVariant = "primary" | "secondary";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: CTAButtonVariant;
  className?: string;
};

const variantClasses: Record<CTAButtonVariant, string> = {
  primary:
    "border-[#20D113] text-[#20D113] hover:bg-[#20D113] hover:text-white",
  secondary:
    "border-foreground text-foreground hover:bg-foreground hover:text-background",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-14 min-w-72.5 items-center justify-center rounded-full border-2 px-8 text-center text-lg font-semibold transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
