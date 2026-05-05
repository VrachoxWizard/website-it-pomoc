import { MessageCircle, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactFormSection() {
  return (
    <section id="kontakt" className="section-padding bg-white relative">
      <div className="container-site">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="heading-section">Kako želite stupiti u kontakt?</h2>
            <p className="mt-4 mx-auto max-w-2xl text-body">
              Za najbrži odgovor preporučujem WhatsApp. Ako imate detaljniji upit, koristite obrazac.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-12 max-w-6xl mx-auto">
          {/* Primary: WhatsApp Block */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.1} className="h-full">
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-navy rounded-3xl p-8 md:p-12 flex flex-col justify-center h-full text-center sm:text-left text-white shadow-2xl shadow-navy/20 border-0">
                {/* Decorative glow */}
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-green/20 blur-[60px] pointer-events-none"></div>
                
                <div className="relative z-10 mx-auto sm:mx-0 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 shadow-sm mb-8 text-green backdrop-blur-md">
                  <MessageCircle className="h-10 w-10" />
                </div>
                <h3 className="relative z-10 font-heading text-3xl font-bold text-white mb-4">
                  Najbrži put do rješenja
                </h3>
                <p className="relative z-10 text-lg text-slate-300 mb-8 leading-relaxed">
                  Pošaljite mi sliku problema ili kratak opis na WhatsApp. Odgovaram u pravilu unutar sat vremena.
                </p>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "relative z-10 bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-bold px-8 py-7 rounded-xl shadow-lg transition-transform hover:-translate-y-1 w-full sm:w-auto flex justify-center border-none"
                  )}
                >
                  <MessageCircle className="mr-2.5 h-6 w-6" />
                  Započni razgovor
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Secondary: Standard Form */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2} className="h-full">
              <div className="bg-white rounded-3xl p-8 md:p-12 border-0 shadow-2xl shadow-navy/5 h-full">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
                  <Mail className="h-6 w-6 text-slate-400" />
                  <h3 className="font-heading text-xl font-bold text-navy">
                    Ili pošaljite detaljan upit
                  </h3>
                </div>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
