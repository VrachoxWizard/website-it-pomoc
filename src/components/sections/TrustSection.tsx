import { MapPin, Handshake, MessageCircle, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TRUST_SIGNALS } from "@/lib/constants";
import Image from "next/image";

const TRUST_ICONS = [MapPin, Handshake, MessageCircle, ShieldCheck];

export function TrustSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-site">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="heading-section">Zašto odabrati mene?</h2>
            <p className="mt-4 mx-auto max-w-2xl text-body">
              Bez lažnih obećanja i skrivenih troškova.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-12 max-w-6xl mx-auto items-center">
          {/* Left: Personal Panel */}
          <div className="lg:col-span-5">
            <AnimatedSection>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-2xl border border-white/50 bg-white">
                <Image 
                  src="/images/trust.png" 
                  alt="IT technician portrait" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-heading text-2xl font-bold mb-2">Mate Vukušić</p>
                  <p className="text-white/90">Vaš lokalni IT stručnjak</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Trust Signals */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {TRUST_SIGNALS.map((signal, i) => {
                const Icon = TRUST_ICONS[i] || ShieldCheck;
                return (
                  <AnimatedSection key={signal.title}>
                    <div className="bg-surface rounded-2xl p-6 h-full shadow-sm border border-border/50 transition-colors hover:border-navy/10">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-navy mb-2">
                        {signal.title}
                      </h3>
                      <p className="text-[0.95rem] leading-[1.6] text-slate-600">
                        {signal.description}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
