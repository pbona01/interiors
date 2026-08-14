"use client";

import { ReactNode } from "react";

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
}: ScrollRevealProps) {
  return <div className={className}>{children}</div>;
}

export function ScrollStagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function ScrollStaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  yOffset?: number;
}) {
  return <div className={className}>{children}</div>;
}





