import type { ReferencesBlock as ReferencesBlockType } from "@/types/documentation";

type ReferencesBlockProps = {
  block: ReferencesBlockType;
};

export function ReferencesBlock({ block }: ReferencesBlockProps) {
  return (
    <section className="my-10 border-t border-slate-200 pt-7">
      {block.title && (
        <h3 className="mb-4 text-base font-semibold leading-snug text-slate-950 sm:text-lg">
          {block.title}
        </h3>
      )}

      <ol className="space-y-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
        {block.references.map((reference) => (
          <li
            id={`reference-${reference.number}`}
            key={reference.id}
            className="flex scroll-mt-40 gap-3"
          >
            <span
              aria-hidden="true"
              className="w-8 shrink-0 text-right font-medium tabular-nums text-slate-400"
            >
              {reference.number}.
            </span>

            <span className="min-w-0">
              {reference.url ? (
                <a
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-slate-300 underline-offset-4 transition-colors hover:text-green-600 hover:decoration-green-300"
                >
                  {reference.text}
                </a>
              ) : (
                reference.text
              )}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
