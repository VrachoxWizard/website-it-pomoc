import { Monitor, Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { CONTACT, SERVICES } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white border-t border-white/5">
      <div className="container-site py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Column 1: Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 font-heading font-bold text-xl mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                <Monitor className="h-5 w-5" />
              </div>
              PC Servis Zagreb
            </div>
            <p className="text-base leading-relaxed text-slate-400 max-w-sm">
              Lokalna IT pomoć u Zagrebu. Popravak računala, optimizacija,
              instalacija programa i osnovna IT podrška — brzo, iskreno i po
              dogovoru.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-base uppercase tracking-wider mb-6 text-white">
              Usluge
            </h3>
            <ul className="space-y-4 text-slate-400">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a
                    href="#usluge"
                    className="transition-colors hover:text-white inline-block"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-4">
            <h3 className="font-bold text-base uppercase tracking-wider mb-6 text-white">
              Kontakt
            </h3>
            <ul className="space-y-5 text-slate-400">
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green/20 text-green">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  WhatsApp (Najbrže)
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-500">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>{CONTACT.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} PC Servis Zagreb. Sva prava pridržana.</p>
          <p>Lokalna IT pomoć u Zagrebu</p>
        </div>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="h-24 md:hidden" aria-hidden="true" />
    </footer>
  );
}
