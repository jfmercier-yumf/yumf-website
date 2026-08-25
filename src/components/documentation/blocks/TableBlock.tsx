import type { TableBlock as TableBlockType } from "@/types/documentation";

type TableBlockProps = {
  block: TableBlockType;
};

export function TableBlock({ block }: TableBlockProps) {
  return (
    <div className="my-8 w-full overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-160 table-auto border-collapse text-left text-sm sm:text-base">
        <thead className="bg-slate-50">
          <tr>
            {block.columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="border-b border-slate-200 px-5 py-3.5 font-semibold text-slate-950 sm:px-6 sm:py-4"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {block.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="align-top">
              {block.columns.map((column) => (
                <td
                  key={column.key}
                  className="px-5 py-4 leading-6 text-slate-700 sm:px-6 sm:py-5 sm:leading-7"
                >
                  <div
                    className={
                      column.key === "influence" ||
                      column.key === "contribution"
                        ? "min-w-md max-w-3xl"
                        : column.key === "organisation" ||
                            column.key === "publisher" ||
                            column.key === "editeur" ||
                            column.key === "year" ||
                            column.key === "annee"
                          ? "w-max max-w-44"
                          : "min-w-48 max-w-xl"
                    }
                  >
                    {row[column.key]}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
