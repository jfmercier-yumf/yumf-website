import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: string;
  iconAlt?: string;
  title: string;
  description: string;
  variant?: "pink" | "yellow" | "blue" | "purple";
  className?: string;
  href?: string;
  cta?: string;
};

const variantClasses = {
  pink: "bg-[#F8D8DD]",
  yellow: "bg-[#F5D6A3]",
  blue: "bg-[#D1E9FE]",
  purple: "bg-[#D7C6FB]",
} as const;

const iconVariantClasses = {
  pink: "bg-[#E16976]",
  yellow: "bg-[#F5786A]",
  blue: "bg-[#7FA9EE]",
  purple: "bg-[#978CF8]",
} as const;

export function FeatureCard({
  icon,
  iconAlt = "",
  title,
  description,
  variant = "pink",
  className,
  href,
  cta,
}: FeatureCardProps) {
  const content = (
    <>
      <div className="flex items-center gap-5">
        <span
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-full md:size-14",
            iconVariantClasses[variant],
          )}
        >
          <Image
            src={icon}
            alt={iconAlt}
            width={28}
            height={28}
            className="size-7 object-contain brightness-0 invert md:size-8"
          />
        </span>

        <h3 className="text-xl leading-snug font-bold text-neutral-950 md:text-2xl">
          {title}
        </h3>
      </div>

      <p className="mt-8 text-base leading-7 text-neutral-900 md:text-lg md:leading-8">
        {description}
      </p>

      {cta && (
        <span className="mt-auto pt-6 text-base font-medium text-neutral-950 md:text-lg">
          {cta} <span aria-hidden="true">→</span>
        </span>
      )}
    </>
  );

  const cardClassName = cn(
    "flex min-h-56 flex-col rounded-2xl p-7 md:min-h-60 md:p-8",
    variantClasses[variant],
    href &&
      "transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <article className={cardClassName}>{content}</article>;
}
