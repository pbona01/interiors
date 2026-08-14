import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/config/site";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PageHero } from "@/components/page-hero";

export default function ProcessPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--canvas)]">
        <PageHero
          breadcrumb={{ parentHref: "/", parentLabel: "HOME", current: "PROCESS" }}
          eyebrow="HOW IT WORKS"
          titleFirst="A CLEAR PATH FORWARD,"
          titleHighlight="ONE DECISION AT A TIME."
          description="From our first site walk to the final white-glove reveal, our process is designed to protect your peace of mind while crafting spaces that feel completely yours."
          imageSrc="https://i.postimg.cc/9Q4VkFbb/images.jpg"
        />

        <section className="section bg-white">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="text-center mb-16">
                <h2 className="section-title-bold text-3xl md:text-4xl">
                  OUR <span>4-STEP</span> METHOD
                </h2>
                <p className="text-stone-800 font-semibold text-lg">
                  Transparent, organized, and focused on exceptional craftsmanship.
                </p>
              </div>

              <div className="space-y-8">
                {site.process.map((step, index) => (
                  <div key={step.title} className="flex flex-col md:flex-row gap-6 p-8 bg-[#f5f0e6] border border-stone-200 rounded-xl shadow-sm hover:border-stone-400 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-[#e87a24] text-white flex items-center justify-center font-black text-xl rounded-lg shadow-md">
                        0{index + 1}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-black text-2xl text-[var(--ink)] tracking-tight uppercase">
                        {step.title}
                      </h3>
                      <p className="text-stone-700 font-semibold text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
