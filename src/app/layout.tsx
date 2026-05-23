import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Civismo Digital — Libertad, responsabilidad y calidad de la conversación pública",
  description:
    "Iniciativa por una conversación pública libre y responsable. Observatorio de daño digital, propuesta legislativa y carta ciudadana.",
  keywords: ["civismo digital", "libertad de expresión", "responsabilidad digital", "daño reputacional", "México"],
  openGraph: {
    title: "Civismo Digital",
    description: "Libertad de expresión, responsabilidad y calidad de la conversación pública en la era digital.",
    url: "https://civismodigital.mx",
    siteName: "Civismo Digital",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
