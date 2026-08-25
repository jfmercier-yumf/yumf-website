import Image from "next/image";

import { cn } from "@/lib/utils";

type StepCardProps = {
  number: number;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  className?: string;
};

export function StepCard({
  number,
  title,
  description,
  image,
  imageAlt = "",
  className,
}: StepCardProps) {
  return (
    <article
      className={cn(
        "mx-auto flex h-full w-full max-w-sm flex-col rounded-2xl border border-black/10 bg-white p-5 md:p-6",
        className,
      )}
    >
      <div className="flex min-h-20 items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white md:size-14 md:text-2xl">
          {number}
        </span>

        <div className="min-w-0 pt-1">
          <h3 className="text-2xl leading-tight font-medium text-neutral-950">
            {title}
          </h3>

          <div
            className="mt-3 h-1 w-10 rounded-full bg-primary"
            aria-hidden="true"
          />
        </div>
      </div>

      <p className="mt-6 min-h-20 text-base leading-7 text-neutral-900">
        {description}
      </p>

      <div className="mt-auto pt-6">
        <div className="mx-auto aspect-square w-full max-w-80">
          <Image
            src={image}
            alt={imageAlt}
            width={420}
            height={420}
            className="size-full object-contain"
          />
        </div>
      </div>
    </article>
  );
}
