import { ProjectCard } from "@/components/project-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/config/site";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PageHero } from "@/components/page-hero";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--canvas)]">
        <PageHero
          breadcrumb={{ parentHref: "/", parentLabel: "HOME", current: "WORK" }}
          eyebrow="OUR WORK"
          titleFirst="REAL HOMES."
          titleHighlight="REAL RESULTS."
          description="A look at recent full-scope interior, millwork, and styling projects across San Francisco and Montecito. Every photo is real work from our dedicated design team."
          imageSrc="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80"
        />

        {/* Content Section */}
        <section className="section bg-white">
          <ScrollReveal>
            <div className="mb-16">
              <p className="eyebrow-accent">ON THE JOB</p>
              <h2 className="section-title-bold max-w-2xl">
                SEE OUR PROCESS <span>IN ACTION.</span>
              </h2>
              <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mb-8">
                From the first conceptual sketch to the final styling sweep, our team takes pride in clean, careful work. This is what an Avery House reveal looks like up close.
              </p>
              <Link href="/inquire" className="btn-accent inline-flex">
                START YOUR PROJECT
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-[var(--line)]">
              {site.projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} number={index + 1} />
              ))}
            </div>
          </ScrollReveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
