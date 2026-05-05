import { MessageCircle, Phone, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FinalCTASection() {
  return (
    <section id="kontakt" className="section-padding bg-navy text-white relative overflow-hidden">
      <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue/10 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-cyan/10 blur-3xl" />
      <div className="container-site relative z-10">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Imate problem s računalom?</h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">Javite se — odgovorim brzo, savjetujem iskreno i pomažem po razumnoj cijeni.</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 rounded-2xl bg-green/15 p-6 text-center transition-colors hover:bg-green/25">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green text-white"><MessageCircle className="h-6 w-6" /></div>
              <span className="text-sm font-bold text-white">WhatsApp</span>
              <span className="text-xs text-white/60">{CONTACT.phone}</span>
            </a>
            <a href={CONTACT.phoneHref} className="flex flex-col items-center gap-3 rounded-2xl bg-white/10 p-6 text-center transition-colors hover:bg-white/15">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue text-white"><Phone className="h-6 w-6" /></div>
              <span className="text-sm font-bold text-white">Telefon</span>
              <span className="text-xs text-white/60">{CONTACT.phone}</span>
            </a>
            <a href={CONTACT.emailHref} className="flex flex-col items-center gap-3 rounded-2xl bg-white/10 p-6 text-center transition-colors hover:bg-white/15">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-light text-white"><Mail className="h-6 w-6" /></div>
              <span className="text-sm font-bold text-white">Email</span>
              <span className="text-xs text-white/60 break-all">{CONTACT.email}</span>
            </a>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div className="mt-10 text-center">
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-green hover:bg-green-dark text-white text-base font-bold px-10 py-6 rounded-xl shadow-lg shadow-green/30")}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Pošalji WhatsApp upit
            </a>
            <p className="mt-4 text-sm text-white/50">📍 {CONTACT.location} · Odgovor obično unutar sat vremena</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
