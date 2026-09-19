import "@/styles/globals.css";

import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import Footer from "@/components/footer";

import localFont from "next/font/local";

const peignot = localFont({
  src: "../fonts/Peignot.ttf",
  variable: "--font-title",
  display: "swap",
  preload: true,
});

const industriaSolid = localFont({
  src: "../fonts/Industria Solid.otf",
  variable: "--font-subtitle",
  display: "swap",
  preload: true,
});

const futuraCyrillic = localFont({
  src: [
    { path: "../fonts/FuturaCyrillicLight.ttf", weight: "300" },
    { path: "../fonts/FuturaCyrillicBook.ttf", weight: "400" },
    { path: "../fonts/FuturaCyrillicMedium.ttf", weight: "500" },
    { path: "../fonts/FuturaCyrillicDemi.ttf", weight: "600" },
    { path: "../fonts/FuturaCyrillicBold.ttf", weight: "700" },
    { path: "../fonts/FuturaCyrillicExtraBold.ttf", weight: "800" },
    { path: "../fonts/FuturaCyrillicHeavy.ttf", weight: "900" },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Ethan Kuai's Personal Website",
  description: "A fun project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${peignot.variable} ${industriaSolid.variable} ${futuraCyrillic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="flex-1">{children}</main>
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
