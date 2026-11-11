import type { Metadata } from "next";
import { Caveat, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

// Alle drei Schriften unterstützen Kyrillisch (für den ukrainischen Text).
const display = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "900"],
  variable: "--font-display-loaded",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-hand-loaded",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Марія Стельмах — Digital Technologies & Professional Education",
  description:
    "Інтеграція цифрових технологій, педагогіки та андрагогіки в освітньому процесі. Проєктування інтерактивних навчальних матеріалів, комп’ютерної графіки та сучасних вебрішень.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${display.variable} ${hand.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
