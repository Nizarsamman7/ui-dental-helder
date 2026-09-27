import type { Metadata } from "next";
import { Outfit, Source_Serif_4 } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const display = Source_Serif_4({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700"] });
const body = Outfit({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: { default: "Helder Dental", template: "%s · Helder Dental" },
  description: "Full dental clinic website: treatments, new patients, fees, insurance, emergency hours, and the team.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable + " " + body.variable}>
      <body><SiteChrome>{children}</SiteChrome></body>
    </html>
  );
}
