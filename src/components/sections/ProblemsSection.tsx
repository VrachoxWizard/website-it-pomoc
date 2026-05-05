import { AlertCircle, MessageCircle, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PROBLEMS, CONTACT } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProblemsSection() {
  return (
    <section className="py-20 md:py-32 bg-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container-site relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left: Copy & CTA */}
          <div className="lg:col-span-5">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white mb-6 backdrop-blur-sm border border-white/10">
                <AlertCircle className="h-4 w-4 text-green" />
                Brza dijagnostika
              </div>
              <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl mb-6">
                Prepoznajete li svoj problem?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Ako vam se događa bilo što s ovog popisa, vjerojatno postoji jednostavno i brzo rješenje. Ne gubite vrijeme i živce — javite se odmah.
              </p>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-green hover:bg-[#128C7E] text-white text-lg font-bold px-8 py-7 rounded-xl shadow-lg transition-transform hover:-translate-y-1 w-full sm:w-auto flex justify-center border-none"
                )}
              >
                <MessageCircle className="mr-2.5 h-6 w-6" />
                Besplatne konzultacije
              </a>
            </AnimatedSection>
          </div>

          {/* Right: Checklist Band */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2}>
              <div className="grid gap-4 sm:grid-cols-2">
                {PROBLEMS.slice(0, 8).map((problem) => (
                  <div key={problem} className="flex items-start gap-3 bg-white/5 rounded-2xl p-5 border border-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 group">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/60 group-hover:bg-green/20 group-hover:text-green transition-colors">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-white/90">
                      {problem}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
