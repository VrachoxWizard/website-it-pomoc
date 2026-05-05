import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PC Servis Zagreb | Pouzdan popravak računala i IT pomoć",
  description:
    "Brza i iskrena lokalna IT pomoć u Zagrebu. Rješavamo spora računala, Windows greške, viruse, i nudimo opću podršku za laptope i PC-jeve. Jasan dogovor unaprijed.",
  keywords: [
    "pc servis zagreb",
    "popravak računala zagreb",
    "popravak laptopa zagreb",
    "sporo računalo zagreb",
    "it pomoć zagreb",
    "čišćenje virusa",
    "instalacija windowsa zagreb",
    "spašavanje podataka",
  ],
  authors: [{ name: "PC Servis Zagreb" }],
  openGraph: {
    title: "PC Servis Zagreb | Pouzdan popravak računala",
    description:
      "Brza i iskrena lokalna IT pomoć u Zagrebu. Rješavamo spora računala, Windows greške, viruse. Jasan dogovor unaprijed.",
    locale: "hr_HR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={`${inter.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
