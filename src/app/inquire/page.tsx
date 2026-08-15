import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { InquiryForm } from "./inquiry-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PageHero } from "@/components/page-hero";

export default function InquirePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--canvas)]">
        <PageHero
          breadcrumb={{ parentHref: "/", parentLabel: "HOME", current: "CONTACT" }}
          eyebrow="GET IN TOUCH"
          titleFirst="LET'S TALK ABOUT"
          titleHighlight="YOUR PROJECT."
          description="Call, text, email, or fill out the form below. We respond quickly, and every initial consultation and estimate is free with no pressure to book."
          imageSrc="/images/hero.jpg"
        />

        {/* Content Section */}
        <section className="section bg-white">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <p className="eyebrow-accent">CONTACT US</p>
                  <h2 className="section-title-bold text-4xl">
                    REACH THE <span>AVERY HOUSE TEAM.</span>
                  </h2>
                  <p className="text-[var(--muted)] text-lg leading-relaxed mt-4">
                    However you like to get in touch, we are ready to help with your full-home design, millwork, or bespoke styling project.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Phone Contact Card */}
                  <div className="bg-[#f7f5f2] border border-stone-200 p-6 rounded-xl flex items-center gap-6 shadow-sm">
                    <div className="w-14 h-14 bg-[#e87a24] text-[#121110] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-1">CALL OR TEXT</p>
                      <a href="tel:4158903420" className="text-2xl font-black text-[var(--ink)] hover:text-[#e87a24] transition-colors">
                        (415) 890-3420
                      </a>
                    </div>
                  </div>

                  {/* Email Contact Card */}
                  <div className="bg-[#f7f5f2] border border-stone-200 p-6 rounded-xl flex items-center gap-6 shadow-sm">
                    <div className="w-14 h-14 bg-[#121110] text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-1">EMAIL US DIRECTLY</p>
                      <a href="mailto:hello@averyhouseinteriors.com" className="text-lg font-bold text-[var(--ink)] hover:text-[#e87a24] transition-colors">
                        hello@averyhouseinteriors.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-[#ffffff] border border-stone-200 p-8 md:p-10 rounded-2xl shadow-xl">
                  <h3 className="font-black text-2xl uppercase tracking-tight mb-6">Send a Message</h3>
                  <InquiryForm />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
