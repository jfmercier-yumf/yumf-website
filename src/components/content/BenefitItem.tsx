type BenefitItemProps = {
  title: string;
  description: readonly string[];
  icon?: string;
  number?: number;
};

export function BenefitItem({
  title,
  description,
  icon,
  number,
}: BenefitItemProps) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#28CC18]">
          {icon ? (
            <span
              aria-hidden="true"
              className="size-8 bg-white"
              style={{
                maskImage: `url(${icon})`,
                WebkitMaskImage: `url(${icon})`,
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskSize: "contain",
                WebkitMaskSize: "contain",
              }}
            />
          ) : (
            <span className="text-xl font-bold text-white">{number}</span>
          )}
        </div>

        <h3 className="text-2xl font-medium leading-tight text-black">
          {title}
        </h3>
      </div>

      <div className="mt-6 h-1 w-16 rounded-full bg-[#28CC18]" />

      <div className="mt-7 space-y-6 text-lg leading-relaxed text-black">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
