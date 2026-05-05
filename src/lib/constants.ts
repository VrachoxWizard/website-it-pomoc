import {
  Gauge,
  Monitor,
  Laptop,
  ShieldCheck,
  Download,
  HardDrive,
  Wifi,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

/* ─── Contact Data ─── */
export const CONTACT = {
  phone: "099 441 4638",
  phoneHref: "tel:+385994414638",
  whatsapp: "https://wa.me/385994414638",
  email: "matevukusic123321@gmail.com",
  emailHref: "mailto:matevukusic123321@gmail.com",
  location: "Zagreb, Hrvatska",
} as const;

/* ─── Navigation Links ─── */
export const NAV_LINKS = [
  { label: "Usluge", href: "#usluge" },
  { label: "Kako funkcionira", href: "#proces" },
  { label: "Cijene", href: "#cijene" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

/* ─── Services ─── */
export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: Gauge,
    title: "Sporo računalo",
    description:
      "Računalo vam radi presporo ili se dugo pali? Radim detaljno čišćenje nepotrebnih programa i optimizaciju za brži rad.",
    featured: true,
  },
  {
    icon: Monitor,
    title: "Windows problemi",
    description:
      "Rješavam dosadne Windows greške, plave ekrane, probleme s ažuriranjima i aplikacijama koje se ne žele pokrenuti.",
    featured: true,
  },
  {
    icon: Laptop,
    title: "Laptop i PC pomoć",
    description:
      "Pregrijavanje, čudni zvukovi ili laptop koji se gasi? Nudim opću dijagnostiku i rješavanje problema za sve marke uređaja.",
  },
  {
    icon: ShieldCheck,
    title: "Čišćenje virusa",
    description:
      "Iskaču vam čudne reklame ili sumnjate na virus? Temeljito čistim računalo od zlonamjernih programa i postavljam osnovnu zaštitu.",
  },
  {
    icon: Download,
    title: "Instalacija programa",
    description:
      "Trebate nove Windowse, Office paket, antivirus ili neki specifični program za školu i posao? Instaliram i podešavam sve po želji.",
  },
  {
    icon: HardDrive,
    title: "Spasavanje podataka",
    description:
      "Kupili ste novi laptop ili vam je stari na izmaku snaga? Pomažem sa sigurnom kopijom slika i dokumenata (backup).",
  },
  {
    icon: Wifi,
    title: "Internet i printeri",
    description:
      "Wi-Fi vam puca, ne možete spojiti novi printer ili vam email ne radi? Rješavam sve probleme s mrežom i osnovnim postavkama.",
  },
  {
    icon: ShoppingCart,
    title: "Savjet za kupnju",
    description:
      "Ne znate koji laptop kupiti za vaše potrebe? Dajem iskren savjet bez guranja najskupljih opcija kako biste prošli što bolje.",
  },
];

/* ─── Problems Checklist ─── */
export const PROBLEMS: string[] = [
  "Računalo se sporo pokreće ili radi",
  "Windows javlja greške ili se ruši",
  "Laptop se pregrijava ili gasi",
  "Sumnja na virus ili neželjene programe",
  "Treba instalacija Windowsa ili programa",
  "Potreban prijenos podataka na novi uređaj",
  "Wi-Fi ne radi ili je nestabilan",
  "Printer se ne povezuje",
  "Email ne radi ispravno",
  "Treba savjet za kupnju računala",
  "Zaboravljena lozinka ili zaključan račun",
  "Računalo ne prepoznaje USB ili disk",
];

/* ─── Process Steps ─── */
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Pošaljite problem",
    description:
      "Javite se putem WhatsAppa ili telefona. Napišite ukratko što se događa i o kojem uređaju je riječ.",
  },
  {
    step: 2,
    title: "Dogovorimo procjenu",
    description:
      "Brzo odgovaram s jasnom procjenom što treba napraviti i koliko bi okvirno moglo koštati.",
  },
  {
    step: 3,
    title: "Dobijete rješenje ili iskren savjet",
    description:
      "Rješavam problem, a ako je popravak neisplativ, iskreno ću vam reći kako biste izbjegli bacanje novca.",
  },
];

/* ─── Pricing ─── */
export interface PricingItem {
  title: string;
  price: string;
  description: string;
  highlighted?: boolean;
}

export const PRICING: PricingItem[] = [
  {
    title: "Osnovna dijagnostika",
    price: "od 20€",
    description:
      "Provjera stanja računala, identificacija problema i preporuka rješenja.",
  },
  {
    title: "Optimizacija računala",
    price: "od 35€",
    description:
      "Čišćenje sustava, uklanjanje nepotrebnih programa, ubrzavanje pokretanja.",
    highlighted: true,
  },
  {
    title: "Instalacija / podešavanje",
    price: "od 25€",
    description:
      "Instalacija Windowsa, programa, drivera ili podešavanje uređaja.",
  },
  {
    title: "Individualna pomoć",
    price: "po dogovoru",
    description:
      "Složeniji problemi, višesatni rad ili specifični zahtjevi — cijena po dogovoru.",
  },
];

/* ─── Trust Signals ─── */
export interface TrustSignal {
  emoji?: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

export const TRUST_SIGNALS: TrustSignal[] = [
  {
    emoji: "📍",
    title: "Lokalno u Zagrebu",
    description: "Dostupan sam za pomoć u Zagrebu i okolici. Idealno za kućne korisnike, studente, starije osobe i male tvrtke.",
  },
  {
    emoji: "🤝",
    title: "Jasan dogovor prije rada",
    description: "Uvijek dogovaramo opseg i cijenu unaprijed. Nema neugodnih iznenađenja ni skrivenih troškova.",
  },
  {
    emoji: "💬",
    title: "Bez kompliciranja",
    description: "Javite se, objasnite problem, dogovorimo realno rješenje. Govorim jasno i bez nerazumljivih IT termina.",
  },
  {
    emoji: "🛡️",
    title: "Iskrenost na prvom mjestu",
    description: "Ako je uređaj prestari ili je popravak neisplativ, reći ću vam to otvoreno kako biste uštedjeli novac.",
  },
];

/* ─── FAQ ─── */
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Koliko traje popravak?",
    answer:
      "Ovisi o vrsti problema. Jednostavnije stvari poput optimizacije ili instalacije programa riješim isti dan. Složeniji problemi mogu potrajati 1-2 dana.",
  },
  {
    question: "Dolazite li na kućnu adresu?",
    answer:
      "Da, moguć je dolazak na adresu u Zagrebu po dogovoru. Alternativno, mnoge stvari mogu riješiti i udaljenim pristupom (remote).",
  },
  {
    question: "Kako vas mogu kontaktirati?",
    answer:
      "Najbrže putem WhatsAppa na 099 441 4638. Možete me i nazvati ili poslati email na matevukusic123321@gmail.com.",
  },
  {
    question: "Koje marke i modele popravljate?",
    answer:
      "Radim sa svim markama PC-a i laptopa — HP, Lenovo, Dell, Acer, ASUS i drugi. Fokus je na Windows sustave.",
  },
  {
    question: "Radite li vikendom?",
    answer:
      "Po dogovoru — za hitnije slučajeve dostupan sam i vikendom. Javite se pa ćemo se dogovoriti.",
  },
  {
    question: "Mogu li dobiti pomoć na daljinu (remote)?",
    answer:
      "Da, mnoge softverske probleme mogu riješiti udaljenim pristupom. Dovoljno je da imate internet vezu i da instalirate program koji ću vam predložiti.",
  },
  {
    question: "Što ako ne možete riješiti problem?",
    answer:
      "Ako utvrdim da problem ne mogu riješiti, reći ću vam iskreno i uputiti vas na nekoga tko može pomoći. Ne naplaćujem nešto što nisam uspio napraviti.",
  },
  {
    question: "Kako funkcionira plaćanje?",
    answer:
      "Plaćanje je moguće gotovinom ili bankovnim prijenosom. Cijenu uvijek dogovorimo unaprijed prije početka rada.",
  },
];

/* ─── Service Types for Contact Form ─── */
export const SERVICE_TYPES = [
  "Sporo računalo",
  "Windows problemi",
  "Laptop / PC pomoć",
  "Virus / malware",
  "Instalacija programa",
  "Backup / prijenos podataka",
  "Wi-Fi / printer / email",
  "Savjetovanje",
  "Ostalo",
] as const;
