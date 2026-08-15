import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { QuickConsultationForm } from "@/components/quick-consultation-form";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/scroll-reveal";
import { AnimatedHero } from "@/components/animated-hero";

export default function Home() {
  const heroImageSrc = "/images/hero.jpg";

  const services = [
    {
      num: "01",
      slug: "full-home-interior-design",
      name: "FULL-HOME DESIGN",
      description: "Concept-to-completion interior transformations with spatial drawings, fixture schedules, and turn-key execution.",
      image: "/images/living-room.jpg",
    },
    {
      num: "02",
      slug: "custom-cabinetry-millwork",
      name: "CUSTOM MILLWORK",
      description: "Bespoke architectural cabinetry, library walls, integrated wardrobes, and crafted wood finishes built to exact scale.",
      image: "/images/process.jpg",
    },
    {
      num: "03",
      slug: "kitchen-and-bath-renovations",
      name: "KITCHEN & BATH",
      description: "Dedicated wet-space architecture with hand-selected stone slabs, bespoke plumbing fixtures, and custom layouts.",
      image: "/images/bathroom.jpg",
    },
    {
      num: "04",
      slug: "furnishing-and-art-curation",
      name: "FURNISHINGS & ART",
      description: "Textile curation, custom upholstery, collector art sourcing, and decorative lighting selected for tactile warmth.",
      image: "/images/hero.jpg",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "FREE INITIAL CONSULTATION & ESTIMATE",
      description: "We walk through your home, evaluate spatial flow, listen to your goals, and deliver a transparent budget range.",
    },
    {
      num: "02",
      title: "SCHEMATIC DESIGN & TACTILE SAMPLES",
      description: "We prepare 2D layout drawings, 3D renderings, material boards, and physical stone, wood, and fabric swatches.",
    },
    {
      num: "03",
      title: "ORDERING, CRAFT & PROJECT MANAGEMENT",
      description: "We handle vendor procurement, coordinate trusted trade artisans, and supervise all on-site millwork installations.",
    },
    {
      num: "04",
      title: "WHITE-GLOVE INSTALLATION & REVEAL",
      description: "Furniture delivery, art hanging, styling details, and a spotless final walkthrough ready for you to live in.",
    },
  ];

  const projects = [
    {
      slug: "pacific-heights-revival",
      tag: "WHOLE HOME · SAN FRANCISCO",
      title: "Pacific Heights Victorian Revival",
      location: "San Francisco, CA",
      image: "/images/project-terrace.jpg",
    },
    {
      slug: "carmel-valley-sanctuary",
      tag: "CUSTOM MILLWORK · CARMEL",
      title: "Carmel Valley Stone & Oak Haven",
      location: "Carmel Valley, CA",
      image: "/images/process.jpg",
    },
    {
      slug: "montecito-coastal-villa",
      tag: "FURNISHINGS & ART · MONTECITO",
      title: "Montecito Historic Estate",
      location: "Montecito, CA",
      image: "/images/millwork.jpg",
    },
    {
      slug: "presidio-terrace-residence",
      tag: "KITCHEN & BATH · SAN FRANCISCO",
      title: "Presidio Terrace Residence",
      location: "San Francisco, CA",
      image: "/images/project-stone.jpg",
    },
  ];

  const reviews = [
    {
      stars: 5,
      quote: "Avery House completely transformed our Pacific Heights flat. Their attention to custom millwork details and daily project communication kept our renovation effortless.",
      author: "Eleanor & Mark S.",
      location: "PACIFIC HEIGHTS, SF",
    },
    {
      stars: 5,
      quote: "From our first consultation to the final art installation in Montecito, they treated our home with the highest level of care. Truly an exceptional design team.",
      author: "David V.",
      location: "MONTECITO, CA",
    },
    {
      stars: 5,
      quote: "The cabinetry drawings and natural finish selections turned our dark Carmel kitchen into the warmest room in the house. We could not recommend them more highly.",
      author: "Sarah L.",
      location: "CARMEL VALLEY, CA",
    },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        {/* Centered Hero Section with Smooth Load Animation */}
        <AnimatedHero heroImageSrc={heroImageSrc} />

        {/* 1. WHO WE ARE SECTION (Reference Image 1) */}
        <section className="section bg-[var(--canvas)]">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 space-y-4">
                <p className="eyebrow-accent">WHO WE ARE</p>
                <h2 className="section-title-bold">
                  A BOUTIQUE DESIGN STUDIO CRAFTING HOMES, <span>ONE SPACE AT A TIME.</span>
                </h2>
              </div>
              <div className="lg:col-span-6 space-y-6 text-[var(--muted)] text-base leading-relaxed">
                <p>
                  <strong className="text-[var(--ink)]">Avery House Interiors</strong> is a full-service residential interior design studio built on spatial clarity, tactile materials, and practical oversight. We handle whole-home renovations, historic restorations, and ground-up builds—giving you one dedicated team for interior architecture, custom millwork, furnishings, and white-glove styling.
                </p>
                <p>
                  From preliminary spatial strategy to custom lime plaster finishes and hand-selected vintage accents, every project is executed with quality materials, clean site coordination, and deep respect for your daily life.
                </p>
                
                {/* Trust Metrics 2x2 / 4-Column Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[var(--line)]">
                  <div>
                    <p className="stat-number">Boutique</p>
                    <p className="stat-label">OWNED & OPERATED</p>
                  </div>
                  <div>
                    <p className="stat-number">Free</p>
                    <p className="stat-label">CONSULTATIONS & ESTIMATES</p>
                  </div>
                  <div>
                    <p className="stat-number">SF + CA</p>
                    <p className="stat-label">SERVING TWO REGIONS</p>
                  </div>
                  <div>
                    <p className="stat-number">4</p>
                    <p className="stat-label">INTERIOR DISCIPLINES</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 2. WHAT WE DO SECTION (Reference Image 2 - 4 Column Dark Band) */}
        <section className="dark-band">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
                <div className="lg:col-span-7 space-y-3">
                  <p className="eyebrow-accent">WHAT WE DO</p>
                  <h2 className="section-title-bold text-[#e9e1d7]" style={{ color: "#e9e1d7" }}>
                    YOUR WHOLE INTERIOR, <span>COVERED.</span>
                  </h2>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                    Four core disciplines, one dedicated studio crew. Everything that elevates the inside of your home, handled with care and built to last.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ScrollStaggerItem key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="group relative bg-[#181614] border border-stone-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#e87a24] transition-all duration-300 hover:shadow-2xl h-full"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                      <span className="card-number-overlay">{service.num}</span>
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5 space-y-3 flex-1 flex flex-col justify-between bg-[#191715]">
                      <div className="space-y-2">
                        <h3 className="text-lg font-black uppercase tracking-tight text-white group-hover:text-[#e87a24] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-stone-400 text-xs leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-[10.5px] font-extrabold tracking-widest uppercase text-[#e87a24] pt-2">
                        LEARN MORE ↗
                      </span>
                    </div>
                  </Link>
                </ScrollStaggerItem>
              ))}
            </ScrollStagger>
          </div>
        </section>

        {/* 3. HOW WE WORK SECTION (Reference Image 3) */}
        <section className="section bg-[#f5f0e6]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl bg-[#ddd5ca] group">
                <span className="absolute top-4 left-4 z-10 bg-[#e87a24] text-white font-black text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-sm shadow-md">
                  ON SITE IN MONTECITO
                </span>
                <Image
                  src="/images/millwork.jpg"
                  alt="Avery House design process and custom millwork"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-6 space-y-6" delay={0.15}>
              <div>
                <p className="eyebrow-accent">HOW WE WORK</p>
                <h2 className="section-title-bold">
                  DONE RIGHT, <span>START TO FINISH.</span>
                </h2>
                <p className="text-stone-800 font-semibold text-base md:text-lg mt-2 leading-relaxed">
                  A great result comes down to the details. We protect your home, develop precise custom millwork elevations, curate tactile materials, and do a spotless cleanup before reveal day.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {processSteps.map((step) => (
                  <div key={step.title} className="flex items-start gap-4 p-4 bg-white border border-stone-200/80 rounded-xl shadow-sm hover:border-stone-400 transition-colors">
                    <div className="step-pill-number shadow-md font-black">{step.num}</div>
                    <div>
                      <h4 className="font-black text-base tracking-tight text-[var(--ink)] uppercase">{step.title}</h4>
                      <p className="text-sm font-semibold text-stone-700 leading-relaxed mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link className="btn-accent inline-flex shadow-md font-extrabold" href="/process">
                  SEE OUR PROCESS ↗
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 4. RECENT WORK SECTION (Reference Image 4 - 4 Columns Across) */}
        <section className="section">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
              <div>
                <p className="eyebrow-accent">RECENT WORK</p>
                <h2 className="section-title-bold">
                  REAL HOMES, <span>REAL RESULTS.</span>
                </h2>
              </div>
              <Link className="bg-white border border-stone-300 hover:border-black text-[var(--ink)] font-bold text-xs tracking-wider uppercase px-6 py-3 rounded transition-colors shadow-sm" href="/projects">
                VIEW ALL WORK ↗
              </Link>
            </div>
          </ScrollReveal>

          <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ScrollStaggerItem key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 space-y-1.5">
                    <p className="text-[#e87a24] font-black text-[10.5px] uppercase tracking-wider">
                      {project.tag}
                    </p>
                    <h3 className="font-bold text-base text-[var(--ink)] group-hover:text-[#e87a24] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)] pt-1">
                      {project.location}
                    </p>
                  </div>
                </Link>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </section>

        {/* 5. CLIENT REVIEWS SECTION */}
        <section className="section bg-[#eae3d5]">
          <ScrollReveal>
            <div className="max-w-2xl space-y-3 mb-12">
              <p className="eyebrow-accent">CLIENT REVIEWS</p>
              <h2 className="section-title-bold">
                WHAT OUR CLIENTS <span>SAY.</span>
              </h2>
              <p className="text-[var(--muted)] text-base">
                Read how homeowners experience our studio process, on-site clarity, and final spatial transformations.
              </p>
            </div>
          </ScrollReveal>

          <ScrollStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <ScrollStaggerItem key={idx}>
                <div className="review-card flex flex-col justify-between space-y-4 rounded-xl shadow-sm h-full">
                  <div className="space-y-3">
                    <div className="review-stars">
                      {Array.from({ length: rev.stars }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-sm italic text-[var(--ink)] leading-relaxed">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[var(--line)]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">{rev.author}</p>
                    <p className="text-[10px] tracking-widest text-[var(--muted)] uppercase">{rev.location}</p>
                  </div>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </section>

        {/* 6. GET IN TOUCH / CONSULTATION FORM SECTION */}
        <section className="section bg-[#efeae1] border-t border-[var(--line)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <ScrollReveal className="lg:col-span-5 space-y-6">
              <p className="eyebrow-accent">GET A FREE CONSULTATION</p>
              <h2 className="section-title-bold">
                READY TO TRANSFORM <span>YOUR SPACE?</span>
              </h2>
              <p className="text-[var(--muted)] text-base leading-relaxed">
                We accept a limited number of residential design commissions each year across San Francisco, Montecito, and Carmel Valley to ensure undivided creative attention.
              </p>
              <div className="space-y-3 pt-4 border-t border-[var(--line)]">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">STUDIO CONTACT & DIRECT LINE</p>
                <p className="text-base font-bold text-[var(--ink)]">
                  Phone: <a href="tel:4158903420" className="text-[#e87a24] hover:underline">(415) 890-3420</a>
                </p>
                <p className="text-sm text-[var(--muted)]">
                  Email: hello@averyhouseinteriors.com
                </p>
                <p className="text-xs text-[var(--muted)]">
                  Studio: 820 Montgomery Street, San Francisco, CA & Coast Village Rd, Montecito, CA
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-7 home-contact-card shadow-xl rounded-xl" delay={0.2}>
              <QuickConsultationForm />
            </ScrollReveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
