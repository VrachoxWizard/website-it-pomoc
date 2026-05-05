"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CONTACT, SERVICE_TYPES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Unesite vaše ime (minimalno 2 znaka)"),
  contact: z.string().min(5, "Unesite telefon ili email adresu"),
  serviceType: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent(`PC Servis upit: ${data.serviceType || "Općenito"}`);
    const body = encodeURIComponent(
      `Ime: ${data.name}\nKontakt: ${data.contact}\nVrsta usluge: ${data.serviceType || "Nije odabrano"}\n\nPoruka:\n${data.message || "(bez poruke)"}`
    );
    window.location.assign(`mailto:${CONTACT.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green/30 bg-green/5 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green" />
        <h3 className="text-lg font-bold text-foreground mb-2">Hvala na upitu!</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Vaš email klijent bi se trebao otvoriti s popunjenom porukom. Ako se nije otvorio, kontaktirajte me direktno:
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "bg-green hover:bg-green-dark text-white")}>
            <MessageCircle className="mr-2 h-4 w-4" />WhatsApp
          </a>
          <a href={CONTACT.phoneHref} className={cn(buttonVariants({ variant: "outline" }))}>
            Nazovi: {CONTACT.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <AnimatedSection>
      <div className="rounded-3xl border border-border/60 bg-white p-6 shadow-xl shadow-navy/5 md:p-10 relative overflow-hidden">
        {/* WhatsApp Banner */}
        <div className="mb-8 rounded-2xl bg-green/10 p-5 border border-green/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="flex items-center gap-2 text-base font-bold text-green-dark mb-1">
                <MessageCircle className="h-5 w-5" />
                Najbrže je poslati WhatsApp poruku
              </h4>
              <p className="text-sm text-green-dark/80">
                Odgovorim obično unutar 1 sata s jasnom procjenom.
              </p>
            </div>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants(),
                "bg-green hover:bg-green-dark text-white font-bold whitespace-nowrap"
              )}
            >
              Pošalji WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-8 border-b border-border/50 pb-6">
            <h3 className="text-2xl font-extrabold text-navy mb-2">Ili pošaljite upit ovdje</h3>
            <p className="text-base text-muted-foreground">
              Ispunite obrazac i otvorit će se vaša email aplikacija s pripremljenom porukom.
            </p>
          </div>
          
          <div className="space-y-5">
            <div>
              <Label htmlFor="cf-name" className="text-base font-medium mb-2 block">Ime <span className="text-destructive">*</span></Label>
              <Input id="cf-name" placeholder="Vaše ime" {...register("name")} aria-invalid={!!errors.name} className="h-12 text-base" />
              {errors.name && <p className="mt-1.5 text-sm text-destructive">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="cf-contact" className="text-base font-medium mb-2 block">Telefon ili email <span className="text-destructive">*</span></Label>
              <Input id="cf-contact" placeholder="npr. 099 123 4567 ili email@primjer.hr" {...register("contact")} aria-invalid={!!errors.contact} className="h-12 text-base" />
              {errors.contact && <p className="mt-1.5 text-sm text-destructive">{errors.contact.message}</p>}
            </div>
            <div>
              <Label htmlFor="cf-service" className="text-base font-medium mb-2 block">Vrsta usluge</Label>
              <select id="cf-service" {...register("serviceType")} className="flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" defaultValue="">
                <option value="" disabled>Odaberite uslugu (opcionalno)</option>
                {SERVICE_TYPES.map((type) => (<option key={type} value={type}>{type}</option>))}
              </select>
            </div>
            <div>
              <Label htmlFor="cf-message" className="text-base font-medium mb-2 block">Poruka</Label>
              <Textarea id="cf-message" rows={5} placeholder="Napišite ukratko što ne radi, kada je počelo i koji uređaj koristite..." {...register("message")} className="text-base resize-y" />
              <p className="mt-2 text-sm text-muted-foreground">Napišite ukratko što ne radi, kada je počelo i koji uređaj koristite.</p>
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-navy hover:bg-navy-light text-white font-bold h-14 text-lg rounded-xl mt-4 transition-all hover:-translate-y-1">
              <Send className="mr-2 h-5 w-5" />Pripremi poruku za slanje
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-4">Vaši podaci se ne spremaju. Ovo samo priprema email poruku.</p>
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
}
