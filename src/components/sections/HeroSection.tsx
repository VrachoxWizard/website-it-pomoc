import { MessageCircle, Phone, CheckCircle2, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-sand pt-12 md:pt-20"
    >
      <div className="container-site relative z-10 pb-16 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left content — 6 cols */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatedSection>
              <div className="mb-6 inline-flex items-center rounded-full bg-navy/5 px-4 py-1.5 text-sm font-bold text-navy border border-navy/10">
                Lokalna IT pomoć u Zagrebu
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-navy md:text-5xl lg:text-6xl lg:leading-[1.1]">
                Jednostavna pomoć za računala i laptope.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-slate-600 md:text-xl">
                Mate Vukušić — lokalna IT pomoć u Zagrebu. Rješavam Windows probleme, spora računala i podešavam programe uz <strong className="font-semibold text-navy">jasan dogovor prije rada</strong>.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-bold px-8 py-7 rounded-xl shadow-lg shadow-green/20 transition-colors w-full sm:w-auto flex justify-center"
                  )}
                >
                  <MessageCircle className="mr-2.5 h-6 w-6" />
                  Pošalji WhatsApp upit
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "text-lg font-bold px-8 py-7 rounded-xl border-0 bg-white/50 hover:bg-white text-navy transition-colors w-full sm:w-auto flex justify-center shadow-sm"
                  )}
                >
                  <Phone className="mr-2.5 h-5 w-5 text-slate-400" />
                  {CONTACT.phone}
                </a>
              </div>
              <p className="mt-4 text-sm font-medium text-slate-500">
                Pošaljite opis problema ili sliku ekrana — javim vam što ima smisla napraviti.
              </p>
            </AnimatedSection>
          </div>

          {/* Right content — 6 cols: Realistic Image */}
          <AnimatedSection delay={0.3} className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[3/2] w-full overflow-hidden rounded-3xl shadow-2xl border border-white/50 bg-white">
              <Image 
                src="/images/hero.png" 
                alt="IT technician workbench repairing a laptop" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Trust Markers Glass Strip at the very bottom of the section */}
      <div className="relative z-20 border-y border-border/40 bg-white/60 backdrop-blur-lg">
        <div className="container-site py-4 md:py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue" />
              <span>Zagreb i okolica</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green" />
              <span>Besplatna procjena i dijagnostika</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-green" />
              <span>Odgovaram u najkraćem roku</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-navy/5 to-transparent" />
    </section>
  );
}
