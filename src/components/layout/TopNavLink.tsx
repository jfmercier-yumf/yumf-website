"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TopNavLinkProps = {
  href: string;
  label: string;
  activePath?: string;
};

export function TopNavLink({
  href,
  label,
  activePath = href,
}: TopNavLinkProps) {
  const pathname = usePathname();

  const isActive =
    pathname === activePath || pathname.startsWith(`${activePath}/`);

  return (
    <Link
      href={href}
      className="relative flex h-full items-center font-semibold text-neutral-800 transition-colors hover:text-black"
    >
      {label}

      {isActive && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary"
        />
      )}
    </Link>
  );
}
