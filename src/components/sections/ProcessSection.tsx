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
              <h2 className="font-heading text-3xl font-bold tracking-tight text-navy md:text-5xl">
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
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-navy/10" />

          <div className="grid gap-16 md:gap-8 md:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <AnimatedSection key={step.step} delay={i * 0.15}>
                  <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                    {/* Giant Watermark Number */}
                    <div className="absolute -top-12 -left-4 md:-left-8 text-[8rem] font-heading leading-none font-bold text-slate-200/60 pointer-events-none select-none z-0">
                      0{step.step}
                    </div>
                    
                    <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-navy shadow-lg shadow-navy/5 border border-white/50">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="relative z-10 font-heading text-2xl font-bold text-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="relative z-10 text-base text-slate-600 leading-relaxed max-w-sm">
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
