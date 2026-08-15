import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PageHero } from "@/components/page-hero";
import { services } from "@/data/services";

const serviceMeta: Record<
  string,
  { image: string; badge: string; navLabel: string }
> = {
  "full-home-interior-design": {
    image:
      "/images/living-room.jpg",
    badge: "01 / FULL-HOME DESIGN",
    navLabel: "FULL-HOME DESIGN",
  },
  "custom-cabinetry-millwork": {
    image: "/images/process.jpg",
    badge: "02 / CUSTOM MILLWORK",
    navLabel: "CUSTOM MILLWORK",
  },
  "kitchen-and-bath-renovations": {
    image:
      "/images/bathroom.jpg",
    badge: "03 / KITCHEN & BATH",
    navLabel: "KITCHEN & BATH",
  },
  "furnishing-and-art-curation": {
    image:
      "/images/hero.jpg",
    badge: "04 / FURNISHINGS & ART",
    navLabel: "FURNISHINGS & ART",
  },
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f7f4ee] min-h-screen">
        {/* Brand Page Hero matching all other pages */}
        <PageHero
          breadcrumb={{ parentHref: "/", parentLabel: "HOME", current: "SERVICES" }}
          eyebrow="OUR COMPREHENSIVE DISCIPLINES"
          titleFirst="OUR INTERIOR "
          titleHighlight="SERVICES."
          description="Four dedicated disciplines delivered with precision. Every detail from spatial planning down to custom millwork installation, handled by one trusted studio team."
          imageSrc="/images/living-room.jpg"
        />

        {/* Category Anchor Nav Bar - High-Contrast Luxury Sticky Navigation */}
        <div className="sticky top-0 z-30 bg-[#121110] border-b border-stone-800 shadow-xl py-3 px-4 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2.5 sm:gap-3.5 py-0.5">
            {services.map((service) => {
              const meta = serviceMeta[service.slug] || {
                navLabel: service.name,
              };
              return (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="bg-[#262320] hover:bg-[#e87a24] text-white hover:text-white font-black text-[11px] sm:text-xs tracking-widest uppercase transition-all py-2.5 px-4 sm:px-5 rounded-full border border-stone-700/80 hover:border-[#e87a24] shadow-md flex items-center gap-2 flex-shrink-0 active:scale-95 whitespace-nowrap"
                >
                  <span className="w-2 h-2 rounded-full bg-[#e87a24] flex-shrink-0 shadow-sm" />
                  <span className="text-white font-black">{meta.navLabel}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Alternating Services Blocks */}
        <div className="divide-y divide-stone-300/60">
          {services.map((service, index) => {
            const meta = serviceMeta[service.slug] || {
              image:
                "/images/living-room.jpg",
              badge: `0${index + 1} / ${service.name}`,
            };

            const isEven = index % 2 === 0;

            return (
              <section
                key={service.slug}
                id={service.slug}
                className={`scroll-mt-16 py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${
                  isEven ? "bg-[#f7f4ee]" : "bg-white"
                }`}
              >
                <div className="max-w-7xl mx-auto">
                  <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                      {/* Image Column (Alternates) */}
                      <div
                        className={`lg:col-span-6 ${
                          isEven ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-stone-200/80 group">
                          <Image
                            src={meta.image}
                            alt={service.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute bottom-4 left-4 bg-[#e87a24] text-white font-black text-xs md:text-sm tracking-wider uppercase px-4 py-2 rounded-sm shadow-md z-10">
                            {meta.badge}
                          </div>
                        </div>
                      </div>

                      {/* Content Column (Alternates) */}
                      <div
                        className={`lg:col-span-6 space-y-6 ${
                          isEven ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-8 h-[3px] bg-[#e87a24] inline-block"></span>
                            <span className="text-[#e87a24] font-black text-xs md:text-sm tracking-widest uppercase">
                              {service.name}
                            </span>
                          </div>
                          <h2 className="text-3xl md:text-5xl font-black text-stone-900 uppercase tracking-tight font-display leading-tight">
                            {service.name}
                          </h2>
                        </div>

                        <p className="text-stone-700 font-semibold text-base md:text-lg leading-relaxed">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 pt-2">
                          {service.included.map((item) => (
                            <div key={item} className="flex items-start gap-2.5">
                              <svg
                                className="w-5 h-5 text-[#e87a24] flex-shrink-0 mt-0.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="font-bold text-stone-900 text-sm md:text-base leading-snug">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4">
                          <Link
                            href="/inquire"
                            className="bg-[#e87a24] hover:bg-[#d26817] text-white font-black text-sm uppercase tracking-wider px-7 py-4 rounded shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
                          >
                            GET A FREE ESTIMATE ↗
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
