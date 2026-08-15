"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  yOffset = 24,
  duration = 700,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        if (once) observer.disconnect();
      } else if (!once) {
        setVisible(false);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  return <div ref={ref} className={`scroll-reveal ${visible ? "is-visible" : ""} ${className}`} style={{ "--reveal-delay": `${delay * 1000}ms`, "--reveal-duration": `${duration}ms`, "--reveal-y": `${yOffset}px` } as CSSProperties}>{children}</div>;
}

export function ScrollStagger({
  children,
  className = "",
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`scroll-stagger ${visible ? "is-visible" : ""} ${className}`} style={{ "--stagger-delay": `${staggerDelay}s` } as CSSProperties}>{children}</div>;
}

export function ScrollStaggerItem({
  children,
  className = "",
  yOffset = 18,
}: {
  children: ReactNode;
  className?: string;
  yOffset?: number;
}) {
  return <div className={`scroll-stagger-item ${className}`} style={{ "--reveal-y": `${yOffset}px` } as CSSProperties}>{children}</div>;
}

