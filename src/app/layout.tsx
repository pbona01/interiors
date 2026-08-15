import type { Metadata } from "next";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/seo/metadata";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { FloatingCallBtn } from "@/components/floating-call-btn";
import "./globals.css";

export const metadata: Metadata = createMetadata(site, site.brand.name);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body className="overflow-x-hidden">
        <SmoothScrollProvider>
          {children}
          <FloatingCallBtn />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

