import { AnimatedSection } from "@/components/AnimatedSection";
import { SERVICES } from "@/lib/constants";

export function ServicesSection() {
  const featuredServices = SERVICES.filter(s => s.featured);
  const otherServices = SERVICES.filter(s => !s.featured);

  return (
    <section id="usluge" className="section-padding bg-slate-50/50 relative">
      <div className="container-site">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="heading-section">Kako vam mogu pomoći?</h2>
            <p className="mt-4 mx-auto max-w-2xl text-body">
              Od sporog računala do izgubljenih podataka — nudim brzu, stručnu i 
              transparentnu pomoć bez kompliciranja.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Services */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 mb-12">
          {featuredServices.map((service, i) => (
            <AnimatedSection key={service.title}>
              <div className="group relative overflow-hidden rounded-2xl bg-surface border border-border/50 shadow-sm p-8 md:p-10 transition-colors hover:border-navy/15">
                <div className="relative z-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sand/50 text-navy">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-slate-600 max-w-md">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Other Services as Scan Rows */}
        <AnimatedSection>
          <div className="rounded-2xl bg-surface overflow-hidden border border-border/50 shadow-sm">
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <div className="flex flex-col divide-y divide-slate-100">
                {otherServices.slice(0, Math.ceil(otherServices.length / 2)).map((service) => (
                  <div key={service.title} className="flex items-start gap-4 p-6 hover:bg-slate-50 transition-colors">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-lg">{service.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {otherServices.slice(Math.ceil(otherServices.length / 2)).map((service) => (
                  <div key={service.title} className="flex items-start gap-4 p-6 hover:bg-slate-50 transition-colors">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-lg">{service.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
