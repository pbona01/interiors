"use client";

import Image from "next/image";
import Link from "next/link";

interface AnimatedHeroProps {
  heroImageSrc: string;
}

export function AnimatedHero({ heroImageSrc }: AnimatedHeroProps) {
  const monogramUrl = "/avery-house-logo.png";

  return (
    <section className="hero-centered">
      <div className="absolute inset-0 z-0 animate-fade-in">
        <Image
          className="hero-image"
          src={heroImageSrc}
          alt="Avery House Interiors sanctuary living space"
          fill
          priority
          sizes="100vw"
          referrerPolicy="no-referrer"
        />
        <div className="hero-overlay" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 space-y-6 animate-fade-up">
        {/* Monogram Emblem Logo */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-28 h-28 md:w-36 md:h-36 mb-1">
            <Image
              src={monogramUrl}
              alt="Avery House Monogram Logo"
              fill
              className="object-contain brightness-0 invert"
              priority
              sizes="(max-width: 767px) 112px, 144px"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xs md:text-sm font-black tracking-[0.28em] text-[#e87a24] uppercase">
            AVERY HOUSE INTERIORS
          </span>
        </div>

        {/* Subtitle / Headline */}
        <p className="text-lg md:text-2xl text-[#f3eee6] max-w-2xl mx-auto font-semibold leading-relaxed tracking-tight text-center drop-shadow-sm">
          Quiet, considered spaces built for human life. Full-service residential interior design across San Francisco, Montecito, and Carmel Valley.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link className="btn-accent" href="/inquire">
            BEGIN A CONSULTATION
          </Link>
          <a className="btn-outline-light" href="tel:4158903420">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (415) 890-3420
          </a>
        </div>

        {/* Feature Bullet Highlights */}
        <div className="hero-bullets">
          <span><i>●</i> RESIDENTIAL INTERIORS</span>
          <span><i>●</i> CUSTOM MILLWORK</span>
          <span><i>●</i> SAN FRANCISCO & CENTRAL COAST</span>
        </div>
      </div>
    </section>
  );
}
