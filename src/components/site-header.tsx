"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const monogramUrl = "/avery-house-logo.png";

  const navItems = Array.from(
    new Map(
      [
        { label: "Home", href: "/" },
        ...site.navigation,
        { label: "Contact", href: "/inquire" },
      ].map((item) => [item.href, item]),
    ).values(),
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest("#mobile-nav-drawer") && !target.closest("#mobile-hamburger-btn")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <header className="site-header" id="main-site-header">
        {/* Brand Logo */}
        <Link
          className="flex items-center gap-2.5 group"
          href="/"
          aria-label="Avery House Interiors Home"
        >
          <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
            <Image
              src={monogramUrl}
              alt="Avery House Monogram"
              fill
              className="object-contain brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-all"
              priority
              sizes="(max-width: 767px) 48px, 64px"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-bold tracking-[0.16em] text-xs uppercase text-stone-200 md:hidden whitespace-nowrap">
            Avery House
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary navigation" className="desktop-nav">
          {site.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-black text-sm tracking-[0.16em] uppercase text-white hover:text-[#e87a24] transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link className="header-cta-accent" href="/inquire">
            Begin A Project
          </Link>
        </div>

        {/* Mobile Hamburger / Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            id="mobile-hamburger-btn"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-white transition-all cursor-pointer select-none relative z-[10001] shadow-lg ${
              isOpen
                ? "bg-[#e87a24] text-white ring-2 ring-[#e87a24]/50"
                : "bg-stone-900/90 text-white hover:bg-stone-800 border border-stone-700/80 active:scale-95"
            }`}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
            aria-haspopup="dialog"
          >
            <span className="font-black text-xs tracking-widest uppercase">
              {isOpen ? "CLOSE" : "MENU"}
            </span>
            {isOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none flex-shrink-0"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none flex-shrink-0"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer Modal */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 text-white flex flex-col justify-between overflow-hidden"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999999,
            backgroundColor: "#121110",
          }}
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-800 bg-[#171513] flex-shrink-0">
            <Link
              id="drawer-brand-link"
              className="flex items-center gap-2.5 group"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={monogramUrl}
                  alt="Avery House Monogram"
                  fill
                  className="object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                  sizes="40px"
                />
              </div>
              <span className="font-bold tracking-[0.16em] text-xs uppercase text-stone-200">
                Avery House
              </span>
            </Link>

            <button
              id="drawer-close-btn"
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#e87a24] text-white hover:bg-[#d26817] rounded-lg transition-colors cursor-pointer text-xs font-black tracking-wider uppercase shadow-md active:scale-95"
              aria-label="Close navigation menu"
            >
              <span>✕</span>
              <span>CLOSE</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto flex flex-col justify-between p-6 bg-[#121110]">
            <div className="flex flex-col space-y-2.5 pt-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 px-4 rounded-lg text-lg font-black tracking-wider uppercase text-stone-100 hover:text-white bg-stone-900/80 hover:bg-stone-800 border border-stone-800 hover:border-[#e87a24]/60 transition-all active:scale-[0.99]"
                >
                  <span>{item.label}</span>
                  <span className="text-[#e87a24] text-sm">→</span>
                </Link>
              ))}
            </div>

            {/* Bottom Actions & Direct Contacts */}
            <div className="pt-6 space-y-4">
              <Link
                id="drawer-cta-begin"
                href="/inquire"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#e87a24] hover:bg-[#d26817] text-white font-black text-sm tracking-wider uppercase py-4 rounded-lg transition-colors shadow-lg active:scale-[0.99]"
              >
                BEGIN A PROJECT
              </Link>

              <div className="space-y-2.5 border-t border-stone-800/80 pt-4">
                <a
                  id="drawer-phone-link"
                  href="tel:4158903420"
                  className="flex items-center gap-2 text-stone-200 font-bold text-sm hover:text-[#e87a24] transition-colors"
                >
                  <span className="text-[#e87a24]">📞</span>
                  <span>(415) 890-3420</span>
                </a>
                <a
                  id="drawer-email-link"
                  href="mailto:hello@averyhouseinteriors.com"
                  className="flex items-center gap-2 text-stone-400 text-xs hover:text-white transition-colors"
                >
                  <span className="text-[#e87a24]">✉️</span>
                  <span>hello@averyhouseinteriors.com</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
