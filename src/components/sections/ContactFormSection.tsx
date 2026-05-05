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
            <h2 className="heading-section">Kontakt</h2>
            <p className="mt-4 mx-auto max-w-2xl text-body">
              WhatsApp za brz odgovor. Obrazac za detaljniji upit.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-12 max-w-6xl mx-auto">
          {/* Primary: WhatsApp Block */}
          <div className="lg:col-span-5">
            <AnimatedSection className="h-full">
              <div className="relative overflow-hidden bg-sand rounded-2xl p-8 md:p-12 flex flex-col justify-center h-full text-center sm:text-left border border-border/50 shadow-sm">
                <div className="mx-auto sm:mx-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-green/10 text-green-dark mb-8">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-navy mb-4">
                  Najbrži put do rješenja
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-[1.6]">
                  Pošaljite mi sliku problema ili kratak opis na WhatsApp. Odgovaram u pravilu unutar sat vremena.
                </p>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-bold px-8 py-6 rounded-xl shadow-sm transition-colors w-full sm:w-auto flex justify-center border-none"
                  )}
                >
                  <MessageCircle className="mr-2.5 h-5 w-5" />
                  Započni razgovor
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Secondary: Standard Form */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.1} className="h-full">
              <div className="bg-surface rounded-2xl p-8 md:p-12 border border-border/50 shadow-sm h-full">
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
