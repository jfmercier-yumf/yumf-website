import Image from "next/image";

type InfoCardProps = {
  icon: string;
  title: string;
  description: string | readonly string[];
  iconAlt?: string;
  className?: string;
};

export function InfoCard({
  icon,
  title,
  description,
  iconAlt = "",
  className = "",
}: InfoCardProps) {
  const paragraphs =
    typeof description === "string" ? [description] : description;

  return (
    <article
      className={[
        "mx-auto grid w-full grid-cols-[6rem_1fr] items-center gap-6 rounded-2xl",
        "border border-black/10 bg-white p-6",
        "sm:w-130 sm:max-w-full sm:grid-cols-[8rem_1fr] sm:gap-8 sm:p-8",
        className,
      ].join(" ")}
    >
      <div className="flex items-center justify-center">
        <Image
          src={icon}
          alt={iconAlt}
          width={192}
          height={192}
          className="h-auto w-full object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
          {title}
        </h3>

        <div className="mt-4 space-y-1 text-base leading-relaxed text-black sm:text-lg">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
