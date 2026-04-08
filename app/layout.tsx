import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portercollins.com"),
  title: {
    default:
      "Porter/Collins — Behind-the-Meter Flexible Compute for Utility-Scale Renewables",
    template: "%s · Porter/Collins",
  },
  description:
    "Porter/Collins builds Active Dispatchable compute loads that co-locate behind the meter with utility-scale solar and battery storage. We monetize curtailed daytime generation while perfectly protecting capacity payments.",
  openGraph: {
    title:
      "Porter/Collins — Behind-the-Meter Flexible Compute for Utility-Scale Renewables",
    description:
      "Active Dispatchable compute loads co-located behind the meter with utility-scale solar and battery storage. Monetize curtailed solar without cannibalizing capacity revenues.",
    type: "website",
    locale: "en_US",
    siteName: "Porter/Collins",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
