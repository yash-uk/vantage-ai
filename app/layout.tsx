import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
  display: "swap",
});

const siteUrl = "https://www.aivora.ai"; // TODO: replace with your real production domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aivora AI — AI Solutions for Modern Businesses",
    template: "%s | Aivora AI",
  },
  description:
    "Aivora builds AI receptionists, chatbots, and automation that answer every call, book every appointment, and follow up before your competitors even see the message.",
  keywords: [
    "AI receptionist",
    "AI chatbot for local business",
    "business automation agency",
    "AI voice agent",
    "CRM automation",
  ],
  openGraph: {
    title: "Aivora AI — AI Solutions for Modern Businesses",
    description:
      "AI receptionists, chatbots, and automation that answer every call and book every appointment.",
    url: siteUrl,
    siteName: "Aivora AI",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Aivora AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aivora AI — AI Solutions for Modern Businesses",
    description:
      "AI receptionists, chatbots, and automation that answer every call and book every appointment.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${sora.variable} ${inter.variable} ${jbmono.variable}`}>
      <body className="font-body antialiased bg-panel text-ink">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
