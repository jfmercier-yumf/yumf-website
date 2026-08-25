import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ManufacturerFAQProps = {
  content: {
    title: string;
    items: readonly {
      question: string;
      answer: string;
    }[];
  };
};

export function ManufacturerFAQ({ content }: ManufacturerFAQProps) {
  return (
    <section className="border-t border-black/10 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          {content.title}
        </h2>

        <Accordion defaultValue={["faq-0"]} className="mt-16 sm:mt-20 lg:mt-24">
          {content.items.map((item, index) => (
            <AccordionItem
              key={item.question}
              id={`faq-${index}`}
              className="border-black/10"
            >
              <AccordionTrigger className="py-7 text-left text-lg font-semibold text-black sm:py-8 sm:text-xl">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="max-w-5xl pb-8 text-base leading-relaxed text-black sm:text-lg sm:leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
