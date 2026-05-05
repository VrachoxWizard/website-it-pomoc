import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-slate-50 relative border-t border-border/50">
      <div className="container-site">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="heading-section">Često postavljena pitanja</h2>
            <p className="mt-4 mx-auto max-w-2xl text-body">
              Odgovori na najčešća pitanja. Ako ne pronađete svoj odgovor, slobodno me kontaktirajte.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div className="mx-auto max-w-3xl">
            <Accordion className="space-y-4">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={i} className="rounded-2xl border border-border/60 bg-white px-6 shadow-sm hover:border-navy/20 transition-colors">
                  <AccordionTrigger className="py-5 text-left text-base font-bold text-navy hover:no-underline md:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-slate-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
