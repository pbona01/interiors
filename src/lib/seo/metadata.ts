import type { Metadata } from "next";
import type { SiteConfig } from "@/types/site";
import { isIndexable } from "@/lib/site-mode";

export function createMetadata(site: SiteConfig, title: string, description?: string): Metadata {
  const indexable = isIndexable(site);
  const resolvedDescription = description ?? site.seo.defaultDescription;

  return {
    title,
    description: resolvedDescription,
    robots: indexable ? { index: true, follow: true } : { index: false, follow: false },
    alternates: site.seo.siteUrl ? { canonical: site.seo.siteUrl } : undefined,
    openGraph: { title, description: resolvedDescription, type: "website" },
  };
}
