import type { CalloutBlock as CalloutBlockType } from "@/types/documentation";
import { DocumentBlockRenderer } from "@/components/documentation/document/DocumentBlockRenderer";

type CalloutBlockProps = {
  block: CalloutBlockType;
};

export function CalloutBlock({ block }: CalloutBlockProps) {
  return (
    <aside className="my-8 flex gap-5 rounded-2xl border border-green-100 bg-green-50/60 px-6 py-5 sm:gap-6 sm:px-7 sm:py-6">
      <span
        aria-hidden="true"
        className="mt-0.5 size-10 shrink-0 bg-green-500 sm:size-12"
        style={{
          WebkitMask:
            "url('/icons/documentation/quote.svg') center / contain no-repeat",
          mask: "url('/icons/documentation/quote.svg') center / contain no-repeat",
        }}
      />

      <div className="min-w-0 flex-1 pt-1.5">
        {block.title && (
          <p className="mb-3 font-semibold leading-snug sm:text-lg">
            {block.title}
          </p>
        )}

        <div className="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          {block.content.map((contentBlock, index) => (
            <DocumentBlockRenderer key={index} block={contentBlock} />
          ))}
        </div>
      </div>
    </aside>
  );
}
