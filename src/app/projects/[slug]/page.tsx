import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/config/site";

export function generateStaticParams() {
  return site.projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase().trim();
  const project =
    site.projects.find((item) => item.slug.toLowerCase() === normalizedSlug) ||
    site.projects[0];

  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--canvas)]">
        {/* Dark Hero */}
        <section className="page-hero-dark">
          <div className="page-hero-bg">
            <Image
              src={project.cover.src}
              alt={project.name}
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#121110]/75" />
          </div>
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/" className="hover:text-white">HOME</Link> / <Link href="/projects" className="hover:text-white">WORK</Link> / <span>{project.name}</span>
            </div>
            <p className="eyebrow-accent text-[#e87a24] mb-2" style={{ color: "#e87a24" }}>
              {project.location} · {project.category}
            </p>
            <h1>
              {project.name.split(" ")[0]}
              <span>{project.name.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="hero-desc">{project.summary}</p>
          </div>
        </section>

        {/* Content & Gallery Section */}
        <section className="section bg-white">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
              <div className="lg:col-span-7 space-y-6">
                <p className="eyebrow-accent">THE PROJECT</p>
                <h2 className="section-title-bold text-3xl md:text-4xl">
                  DESIGNED AROUND <span>DAILY LIFE.</span>
                </h2>
                <p className="text-[var(--muted)] text-base leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#f7f5f2] border border-stone-200 p-8 rounded-2xl space-y-4 shadow-sm">
                  <h3 className="font-bold text-xs uppercase tracking-widest text-[var(--ink)]">
                    SERVICES PROVIDED
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((srv) => (
                      <span key={srv} className="bg-white border border-stone-300 text-[var(--ink)] font-bold text-xs px-3 py-1.5 rounded-full shadow-xs">
                        {srv}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-stone-200">
                    <Link href="/inquire" className="btn-accent block text-center w-full">
                      INQUIRE ABOUT YOUR HOME ↗
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

