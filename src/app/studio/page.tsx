import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PageHero } from "@/components/page-hero";

export default function StudioPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--canvas)]">
        <PageHero
          breadcrumb={{ parentHref: "/", parentLabel: "HOME", current: "STUDIO" }}
          eyebrow="LOCALLY OWNED & OPERATED"
          titleFirst="THE DEDICATED STUDIO BEHIND"
          titleHighlight="YOUR HOME'S INTERIOR."
          description="Avery House Interiors is a boutique design firm built on meticulous spatial planning, honest project management, and treating every home as a bespoke sanctuary."
          imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
        />

        {/* Content Section */}
        <section className="section bg-white">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
                  alt="Our Work"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-6 max-w-2xl mx-auto text-center">
                <h2 className="section-title-bold">
                  DESIGN WITH <span>INTENTION.</span>
                </h2>
                <p className="text-[var(--muted)] text-lg leading-relaxed">
                  Our approach begins with what is already true about a home: its natural light, proportions, history, and the daily rituals of the people who live in it. That attention guides everything from early conceptual sketches to the final placement of a vintage armchair.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
