"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Monitor, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur-sm transition-shadow duration-300",
        scrolled ? "shadow-sm border-border" : "border-transparent"
      )}
    >
      <div className="container-site flex h-16 items-center justify-between md:h-[4.5rem]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-navy font-extrabold text-xl tracking-tight"
        >
          <Monitor className="h-6 w-6 text-blue" />
          <span>PC Servis Zagreb</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Glavna navigacija">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "sm", variant: "outline" }),
              "ml-3 border-green/20 bg-green/5 text-green-dark hover:bg-green hover:text-white transition-colors"
            )}
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button variant="ghost" size="icon" aria-label="Otvori navigaciju">
                <Menu className="h-5 w-5" />
              </Button>
            }
          />
          <SheetContent side="right" className="w-72 bg-white p-0" showCloseButton={false}>
            <SheetTitle className="sr-only">Navigacija</SheetTitle>
            <div className="flex flex-col h-full">
              {/* Mobile header */}
              <div className="flex items-center justify-between border-b px-5 py-4">
                <span className="flex items-center gap-2 text-navy font-bold text-lg">
                  <Monitor className="h-5 w-5 text-blue" />
                  PC Servis Zagreb
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  aria-label="Zatvori navigaciju"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile links */}
              <nav className="flex flex-col gap-1 px-3 py-4" aria-label="Mobilna navigacija">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Mobile CTAs */}
              <div className="mt-auto border-t px-5 py-5 space-y-3">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants(),
                    "w-full bg-green hover:bg-green-dark text-white h-12 text-base"
                  )}
                >
                  WhatsApp upit
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className={cn(buttonVariants({ variant: "outline" }), "w-full h-12 text-base")}
                >
                  Nazovi: {CONTACT.phone}
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
