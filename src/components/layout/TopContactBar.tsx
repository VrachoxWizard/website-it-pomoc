import { Phone, MessageCircle, Mail } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function TopContactBar() {
  return (
    <div className="bg-navy-dark text-white text-sm hidden md:block">
      <div className="container-site flex items-center justify-between py-2.5">
        {/* Left: location */}
        <span className="text-white/80 font-medium">📍 {CONTACT.location}</span>

        {/* Right: contact links */}
        <div className="flex items-center gap-6">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 font-semibold transition-colors hover:text-blue-light"
          >
            <Phone className="h-4 w-4" />
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold text-green transition-colors hover:text-green-400"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={CONTACT.emailHref}
            className="flex items-center gap-2 font-semibold transition-colors hover:text-blue-light"
          >
            <Mail className="h-4 w-4" />
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
}
