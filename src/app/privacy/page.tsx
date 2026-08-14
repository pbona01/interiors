import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--canvas)]">
        <section className="page-hero-dark">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/">HOME</Link> / PRIVACY
            </div>
            <p className="eyebrow-accent text-[#e87a24] mb-2" style={{ color: "#e87a24" }}>LEGAL</p>
            <h1>
              PRIVACY <span>POLICY.</span>
            </h1>
            <p className="hero-desc">
              How Avery House Interiors protects and respects your personal consultation and project data.
            </p>
          </div>
        </section>

        <section className="section bg-white">
          <div className="max-w-3xl mx-auto space-y-6 text-[var(--muted)] text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-[var(--ink)]">Information We Collect</h2>
            <p>
              We only collect information directly submitted by you through our consultation request forms, phone calls, or email correspondence. This includes your name, contact details, project address or region, and notes regarding your scope of work.
            </p>

            <h2 className="text-2xl font-bold text-[var(--ink)] pt-4">How We Use Your Information</h2>
            <p>
              Your details are used solely to prepare project proposals, coordinate initial site visits, and manage residential design contracts. We do not sell or share client information with outside third-party marketing companies.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

