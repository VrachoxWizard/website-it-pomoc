import { MessageCircle, Phone, CheckCircle2, MapPin, Clock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-sand pt-24 md:pt-36"
    >
      <div className="container-site relative z-10 pb-16 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left content — 6 cols */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatedSection>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-1.5 text-sm font-bold text-navy border border-navy/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green"></span>
                </span>
                Lokalna IT pomoć u Zagrebu
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-heading text-5xl font-bold tracking-tighter text-navy md:text-6xl lg:text-[5rem] lg:leading-[1.05]">
                Brza i iskrena pomoć za vaše računalo.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Sporo računalo? Windows problemi? Rješavam sve IT probleme u Zagrebu
                uz <strong className="font-semibold text-navy">jasan dogovor unaprijed</strong> i bez skrivenih troškova.
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
                    "bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-bold px-8 py-7 rounded-xl shadow-lg shadow-green/20 transition-transform hover:-translate-y-1 w-full sm:w-auto flex justify-center"
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
            </AnimatedSection>
          </div>

          {/* Right content — 6 cols: Realistic Image */}
          <AnimatedSection delay={0.3} className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-2xl border border-white/50 bg-white">
              <Image 
                src="/images/hero.png" 
                alt="IT technician workbench repairing a laptop" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent pointer-events-none" />
              
              {/* Floating trust badge */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green/10 text-green">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">Odgovaram u najkraćem roku</p>
                    <p className="text-sm text-slate-500 mt-0.5">Opišite problem na WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative background blob */}
            <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-blue/10 blur-[80px] pointer-events-none -z-10" />
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
              <Clock className="h-4 w-4 text-blue" />
              <span>Brz odgovor i dolazak</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-navy/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white pointer-events-none z-0" />
    </section>
  );
}
