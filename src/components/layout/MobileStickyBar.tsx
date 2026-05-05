import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <div className="flex gap-3 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green py-3.5 text-sm font-bold text-white transition-colors hover:bg-green-dark active:scale-[0.98]"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href={CONTACT.phoneHref}
          className="flex flex-[0.7] items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white py-3.5 text-sm font-bold text-navy transition-colors hover:bg-slate-50 active:scale-[0.98]"
        >
          <Phone className="h-5 w-5 text-slate-400" />
          Nazovi
        </a>
      </div>
    </div>
  );
}
