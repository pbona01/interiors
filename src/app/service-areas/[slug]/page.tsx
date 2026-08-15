import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/config/site";

export function generateStaticParams() {
  return site.serviceAreas
    .filter((area) => area.enabled)
    .map(({ slug }) => ({ slug }));
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = site.serviceAreas.find(
    (item) => item.slug === slug && item.enabled
  );
  if (!area) notFound();

  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--canvas)]">
        <section className="page-hero-dark">
          <div className="page-hero-bg">
            <Image
              src="/images/project-terrace.jpg"
              alt={`${area.name} Residential Interiors`}
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#121110]/75" />
          </div>
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/">HOME</Link> / SERVICE AREA / <span>{area.name}</span>
            </div>
            <p className="eyebrow-accent text-[#e87a24] mb-2" style={{ color: "#e87a24" }}>
              {area.name.toUpperCase()}, {area.state.toUpperCase()}
            </p>
            <h1>
              RESIDENTIAL INTERIORS IN <span>{area.name.toUpperCase()}.</span>
            </h1>
            <p className="hero-desc">{area.description}</p>
          </div>
        </section>

        <section className="section bg-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <p className="eyebrow-accent">LOCAL EXPERTISE</p>
              <h2 className="section-title-bold text-3xl md:text-4xl">
                THOUGHTFUL SUPPORT FOR <span>HOMES OF CHARACTER.</span>
              </h2>
              <p className="text-[var(--muted)] text-lg leading-relaxed mt-4">
                Our studio provides end-to-end design, custom architectural millwork, and on-site oversight for discerning homeowners across {area.name}, {area.state}.
              </p>
            </div>

            <div className="pt-6">
              <Link href="/inquire" className="btn-accent inline-flex">
                SCHEDULE A SITE CONSULTATION ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
