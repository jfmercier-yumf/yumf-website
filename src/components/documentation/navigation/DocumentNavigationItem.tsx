import type { DocumentSection } from "@/types/documentation";

type DocumentNavigationItemProps = {
  section: DocumentSection;
  isActive?: boolean;
  onSectionChange: (sectionId: string) => void;
};

export function DocumentNavigationItem({
  section,
  isActive = false,
  onSectionChange,
}: DocumentNavigationItemProps) {
  const isSubsection = section.number?.includes(".") ?? false;

  return (
    <button
      type="button"
      onClick={() => onSectionChange(section.id)}
      aria-current={isActive ? "location" : undefined}
      className={`group relative grid w-full grid-cols-[2rem_minmax(0,1fr)] gap-3 rounded-r-lg py-3 pr-3 text-left transition-colors ${
        isSubsection ? "ml-4 w-[calc(100%-1rem)]" : ""
      } ${
        isActive
          ? "bg-green-50/70 text-slate-950"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-2 left-0 w-0.5 rounded-full transition-colors ${
          isActive ? "bg-green-500" : "bg-transparent"
        }`}
      />

      <span
        className={`pl-3 font-semibold tabular-nums transition-colors ${
          isActive
            ? "text-green-600"
            : "text-slate-400 group-hover:text-slate-600"
        }`}
      >
        {section.number}
      </span>

      <span
        className={`leading-6 transition-colors ${
          isActive ? "font-semibold text-slate-950" : "font-medium"
        }`}
      >
        {section.title}
      </span>
    </button>
  );
}
