import { MessageSquare, ClipboardList, Wrench } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PROCESS_STEPS } from "@/lib/constants";

const STEP_ICONS = [MessageSquare, ClipboardList, Wrench];

export function ProcessSection() {
  return (
    <section id="proces" className="py-20 md:py-32 bg-sand relative">
      <div className="container-site">
        <AnimatedSection>
          <div className="mb-16 md:mb-24 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-navy md:text-4xl">
                Kako funkcionira?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Bez dugih čekanja i kompliciranih procedura. Samo 3 jednostavna koraka do rješenja.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[1.5rem] left-[10%] right-[10%] border-t-2 border-dashed border-navy/10" />

          <div className="grid gap-16 md:gap-8 md:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <AnimatedSection key={step.step} delay={i * 0.15}>
                  <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                    
                    <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy shadow-sm border border-border">
                      <Icon className="h-5 w-5" />
                      {/* Small step number badge */}
                      <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-white shadow-sm border-2 border-sand">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="relative z-10 font-heading text-xl font-bold text-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="relative z-10 text-base text-slate-600 leading-[1.6] max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
