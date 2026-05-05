import { Search, Zap, Settings, HeadphonesIcon, Info } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PRICING, CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PRICING_ICONS = [Search, Zap, Settings, HeadphonesIcon];

export function PricingSection() {
  return (
    <section id="cijene" className="section-padding bg-white relative">
      <div className="container-site">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="heading-section">Okvirne cijene</h2>
            <p className="mt-4 mx-auto max-w-2xl text-body">
              Transparentne cijene bez skrivenih troškova.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto items-end">
          {PRICING.map((item, i) => {
            const Icon = PRICING_ICONS[i];
            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative flex flex-col rounded-3xl border p-8 transition-all duration-300",
                    item.highlighted
                      ? "border-navy bg-navy text-white shadow-2xl shadow-navy/20 lg:-mt-4 lg:mb-4 py-10"
                      : "border-border/60 bg-white hover:border-navy/20"
                  )}
                >
                  {item.highlighted && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                      <span className="inline-block rounded-b-xl bg-gradient-to-r from-green to-[#128C7E] px-6 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                        Najčešće
                      </span>
                    </div>
                  )}

                  <div className="mb-6 mt-4 flex items-center justify-between">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl",
                        item.highlighted
                          ? "bg-white/10 text-white"
                          : "bg-navy/5 text-navy"
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className={cn("font-heading text-lg font-bold mb-4", item.highlighted ? "text-white" : "text-navy")}>
                    {item.title}
                  </h3>

                  <div className="mb-6">
                    {item.price.startsWith("od") ? (
                      <div className="flex items-baseline gap-2">
                        <span className={cn("text-xs font-bold uppercase tracking-wider", item.highlighted ? "text-white/60" : "text-slate-400")}>od</span>
                        <p className={cn("font-heading text-4xl font-bold tracking-tighter", item.highlighted ? "text-white" : "text-navy")}>
                          {item.price.replace("od ", "")}
                        </p>
                      </div>
                    ) : (
                      <p className={cn("font-heading text-3xl font-bold tracking-tight", item.highlighted ? "text-white" : "text-navy")}>
                        {item.price}
                      </p>
                    )}
                  </div>

                  <p className={cn("text-sm leading-relaxed mb-8 flex-1", item.highlighted ? "text-white/80" : "text-slate-600")}>
                    {item.description}
                  </p>

                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({
                        variant: item.highlighted ? "default" : "outline",
                      }),
                      "w-full font-bold justify-center",
                      item.highlighted 
                        ? "bg-[#25D366] hover:bg-[#128C7E] text-white border-none py-6 text-base" 
                        : "border border-border text-navy hover:bg-slate-50 py-5"
                    )}
                  >
                    Kontaktiraj
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-16 mx-auto max-w-3xl rounded-2xl bg-sand p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 border border-border/50">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm">
              <Info className="h-5 w-5" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-navy">Jasan dogovor prije rada</h4>
              <p className="text-sm text-slate-600 mt-1">
                Konačna cijena ovisi o opsegu posla i složenosti problema. 
                Uvijek ćete znati točan iznos prije nego započnem s radom — nema neugodnih iznenađenja.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
