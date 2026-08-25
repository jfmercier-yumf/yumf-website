import Image from "next/image";

import { cn } from "@/lib/utils";

type FeatureRowMarker =
  | {
      type: "index";
      value: number;
      label: string;
    }
  | {
      type: "icon";
      src: string;
      alt?: string;
      label: string;
    };

type FeatureRowProps = {
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  marker?: FeatureRowMarker;
  imagePosition?: "left" | "right";
  className?: string;
};

export function FeatureRow({
  image,
  imageAlt = "",
  title,
  description,
  marker,
  imagePosition = "left",
  className,
}: FeatureRowProps) {
  const imageContent = (
    <div
      className={cn(
        "flex min-w-0 items-center justify-center",
        imagePosition === "right" ? "md:order-2" : "md:order-1",
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        width={560}
        height={560}
        className="h-auto w-full object-contain"
      />
    </div>
  );

  const textContent = (
    <div
      className={cn(
        "flex min-w-0 flex-col justify-center",
        imagePosition === "right" ? "md:order-1" : "md:order-2",
      )}
    >
      {marker ? (
        <div className="mb-8 flex items-center gap-6">
          {marker.type === "index" ? (
            <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
              {marker.value}
            </span>
          ) : (
            <span className="flex size-16 shrink-0 items-center justify-center">
              <Image
                src={marker.src}
                alt={marker.alt ?? ""}
                width={64}
                height={64}
                className="size-16 object-contain"
              />
            </span>
          )}

          <span className="text-2xl text-neutral-950">{marker.label}</span>
        </div>
      ) : null}

      <h3 className="max-w-xl text-3xl leading-tight font-bold tracking-tight text-neutral-950 md:text-4xl">
        {title}
      </h3>

      <div
        className="my-7 h-1 w-16 rounded-full bg-primary"
        aria-hidden="true"
      />

      <p className="max-w-xl whitespace-pre-line text-base leading-7 text-neutral-900 md:text-lg">
        {description}
      </p>
    </div>
  );

  return (
    <article
      className={cn(
        "grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24",
        className,
      )}
    >
      {imageContent}
      {textContent}
    </article>
  );
}
