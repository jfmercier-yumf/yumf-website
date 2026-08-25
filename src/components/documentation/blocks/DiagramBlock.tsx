import type { ReactNode } from "react";
import type { DiagramBlock as DiagramBlockType } from "@/types/documentation";

type DiagramBlockProps = {
  block: DiagramBlockType;
};

type DiagramNodeProps = {
  children: ReactNode;
};

function Arrow() {
  return (
    <div aria-hidden="true" className="flex h-10 items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="h-5 w-px bg-green-300" />

        <div className="size-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-green-400" />
      </div>
    </div>
  );
}

function DiagramNode({ children }: DiagramNodeProps) {
  return (
    <div className="mx-auto flex min-h-14 w-full max-w-sm items-center justify-center rounded-xl border border-green-200 bg-white px-5 py-3 text-center font-medium leading-6 text-slate-800 shadow-sm">
      {children}
    </div>
  );
}

function FlowDiagram({
  block,
}: {
  block: Extract<DiagramBlockType, { variant: "flow" }>;
}) {
  return (
    <div className="mx-auto max-w-lg">
      {block.items.map((item, index) => (
        <div key={`${item}-${index}`}>
          <DiagramNode>{item}</DiagramNode>

          {index < block.items.length - 1 && <Arrow />}
        </div>
      ))}
    </div>
  );
}

function ConvergenceDiagram({
  block,
}: {
  block: Extract<DiagramBlockType, { variant: "convergence" }>;
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {block.sources.map((source) => (
          <DiagramNode key={source}>{source}</DiagramNode>
        ))}
      </div>

      <Arrow />

      <DiagramNode>{block.junction}</DiagramNode>

      <Arrow />

      <DiagramNode>{block.destination}</DiagramNode>
    </div>
  );
}

function SplitConnector() {
  return (
    <div aria-hidden="true" className="hidden h-12 md:block">
      <div className="relative mx-auto h-full w-1/2">
        <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-green-300" />

        <div className="absolute left-1/4 right-1/4 top-4 h-px bg-green-300" />

        <div className="absolute left-1/4 top-4 flex -translate-x-1/2 flex-col items-center">
          <div className="h-5 w-px bg-green-300" />

          <div className="size-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-green-400" />
        </div>

        <div className="absolute left-3/4 top-4 flex -translate-x-1/2 flex-col items-center">
          <div className="h-5 w-px bg-green-300" />

          <div className="size-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-green-400" />
        </div>
      </div>
    </div>
  );
}

function MergeConnector() {
  return (
    <div aria-hidden="true" className="hidden h-12 md:block">
      <div className="relative mx-auto h-full w-1/2">
        <div className="absolute left-1/4 top-0 h-5 w-px -translate-x-1/2 bg-green-300" />

        <div className="absolute left-3/4 top-0 h-5 w-px -translate-x-1/2 bg-green-300" />

        <div className="absolute left-1/4 right-1/4 top-5 h-px bg-green-300" />

        <div className="absolute left-1/2 top-5 flex -translate-x-1/2 flex-col items-center">
          <div className="h-5 w-px bg-green-300" />

          <div className="size-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-green-400" />
        </div>
      </div>
    </div>
  );
}

function SplitDiagram({
  block,
}: {
  block: Extract<DiagramBlockType, { variant: "split" }>;
}) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid gap-3 sm:grid-cols-3">
        {block.sources.map((source) => (
          <DiagramNode key={source}>{source}</DiagramNode>
        ))}
      </div>

      <Arrow />

      <DiagramNode>{block.junction}</DiagramNode>

      <div className="md:hidden">
        <Arrow />
      </div>

      <SplitConnector />

      <div className="grid gap-6 md:grid-cols-2">
        {block.branches.map((branch) => (
          <div key={`${branch.title}-${branch.outcome}`}>
            <DiagramNode>{branch.title}</DiagramNode>

            <Arrow />

            <DiagramNode>{branch.outcome}</DiagramNode>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <Arrow />
      </div>

      <MergeConnector />

      <DiagramNode>{block.destination}</DiagramNode>
    </div>
  );
}

export function DiagramBlock({ block }: DiagramBlockProps) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-green-100 bg-green-50/40 px-5 py-8 sm:px-7 sm:py-10">
      {block.variant === "flow" && <FlowDiagram block={block} />}

      {block.variant === "convergence" && <ConvergenceDiagram block={block} />}

      {block.variant === "split" && <SplitDiagram block={block} />}
    </figure>
  );
}
