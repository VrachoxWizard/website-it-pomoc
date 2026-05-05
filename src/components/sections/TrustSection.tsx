import { MapPin, Handshake, MessageCircle, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TRUST_SIGNALS } from "@/lib/constants";
import Image from "next/image";

const TRUST_ICONS = [MapPin, Handshake, MessageCircle, ShieldCheck];

export function TrustSection() {
  return (
    <section className="section-padding bg-sand relative overflow-hidden">
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
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl border border-white/50 bg-white">
                <Image 
                  src="/images/trust.png" 
                  alt="IT technician portrait" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="font-heading text-2xl font-bold mb-2">Mate Vukušić</p>
                  <p className="text-white/80">Vaš lokalni IT stručnjak</p>
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
                  <AnimatedSection key={signal.title} delay={i * 0.1}>
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 h-full shadow-xl shadow-navy/5 border-0 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/10 transition-all">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-navy/5 text-navy">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-navy mb-3">
                        {signal.title}
                      </h3>
                      <p className="text-base leading-relaxed text-slate-600">
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
