import type { Metadata } from "next";
import { Outfit, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const display = Source_Serif_4({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700"] });
const body = Outfit({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: { default: "Helder Dental", template: "%s · Helder Dental" },
  description: "Dental clinic template for treatments and new-patient appointments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable + " " + body.variable}>
      <body>{children}</body>
    </html>
  );
}
