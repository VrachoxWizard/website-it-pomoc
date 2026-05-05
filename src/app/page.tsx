import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProblemsSection />
        <ProcessSection />
        <TrustSection />
        <PricingSection />
        <FAQSection />
        <ContactFormSection />
      </main>

      <SiteFooter />
      <MobileStickyBar />
    </>
  );
}
