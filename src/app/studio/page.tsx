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
          imageSrc="/images/project-terrace.jpg"
        />

        {/* Content Section */}
        <section className="section bg-white">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/living-room.jpg"
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
