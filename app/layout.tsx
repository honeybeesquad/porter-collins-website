import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portercollins.com"),
  title: {
    default:
      "Porter/Collins — Behind-the-Meter Flexible Compute for Chilean Renewables",
    template: "%s · Porter/Collins",
  },
  description:
    "Porter/Collins builds Active Dispatchable compute loads that co-locate behind the meter with utility-scale renewables in Chile. We monetize curtailed solar while protecting capacity payments.",
  openGraph: {
    title:
      "Porter/Collins — Behind-the-Meter Flexible Compute for Chilean Renewables",
    description:
      "Active Dispatchable compute loads co-located behind the meter with utility-scale renewables in Chile. SGC framework under Law 21.505.",
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
      className={`${lexend.variable} ${sourceSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
