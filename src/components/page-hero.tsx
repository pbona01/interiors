"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface PageHeroProps {
  breadcrumb: {
    parentHref?: string;
    parentLabel?: string;
    current: string;
  };
  eyebrow: string;
  titleFirst: string;
  titleHighlight: string;
  description: string;
  imageSrc?: string;
  children?: ReactNode;
}

export function PageHero({
  breadcrumb,
  eyebrow,
  titleFirst,
  titleHighlight,
  description,
  imageSrc = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80",
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero-dark animate-fade-in">
      <div className="page-hero-bg">
        <Image
          src={imageSrc}
          alt={titleFirst}
          fill
          priority
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#121110]/65" />
      </div>

      <div className="page-hero-content animate-fade-up">
        <div className="breadcrumb">
          {breadcrumb.parentHref ? (
            <Link href={breadcrumb.parentHref} className="hover:text-white">
              {breadcrumb.parentLabel || "HOME"}
            </Link>
          ) : (
            <span>{breadcrumb.parentLabel || "HOME"}</span>
          )}{" "}
          / <span>{breadcrumb.current}</span>
        </div>

        <p className="eyebrow-accent text-[#e87a24] mb-2" style={{ color: "#e87a24" }}>
          {eyebrow}
        </p>

        <h1>
          {titleFirst}
          <span>{titleHighlight}</span>
        </h1>

        <p className="hero-desc">
          {description}
        </p>

        {children && <div className="pt-4">{children}</div>}
      </div>
    </section>
  );
}
