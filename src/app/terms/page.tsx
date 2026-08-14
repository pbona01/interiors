import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--canvas)]">
        <section className="page-hero-dark">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/">HOME</Link> / TERMS
            </div>
            <p className="eyebrow-accent text-[#e87a24] mb-2" style={{ color: "#e87a24" }}>LEGAL</p>
            <h1>
              TERMS OF <span>SERVICE.</span>
            </h1>
            <p className="hero-desc">
              General guidelines governing design consultations, proposals, and studio agreements.
            </p>
          </div>
        </section>

        <section className="section bg-white">
          <div className="max-w-3xl mx-auto space-y-6 text-[var(--muted)] text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-[var(--ink)]">Consultations and Proposals</h2>
            <p>
              Initial phone consultations and introductory site walks are non-binding. Formal design services, CAD drafting, procurement, and project management commence following executed letters of agreement and agreed retainer schedules.
            </p>

            <h2 className="text-2xl font-bold text-[var(--ink)] pt-4">Intellectual Property</h2>
            <p>
              Custom joinery drawings, finish specifications, and interior concepts prepared by Avery House Interiors remain the design property of the studio until full execution under written project contracts.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

