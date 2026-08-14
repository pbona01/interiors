import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/seo/metadata";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { FloatingCallBtn } from "@/components/floating-call-btn";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = createMetadata(site, site.brand.name);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`antialiased ${plusJakarta.variable}`}>
      <body className={`${plusJakarta.className} overflow-x-hidden`}>
        <SmoothScrollProvider>
          {children}
          <FloatingCallBtn />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}


