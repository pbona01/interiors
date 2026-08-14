import type { SiteConfig, SiteMode } from "@/types/site";

export const isPublicMode = (mode: SiteMode) => mode === "production";

export const isIndexable = (site: SiteConfig) => isPublicMode(site.mode);

export const canCollectAnalytics = (site: SiteConfig) =>
  isPublicMode(site.mode) && site.analytics.enabled;

export const canSubmitLeads = (site: SiteConfig) =>
  isPublicMode(site.mode) && site.integrations.leadWebhookEnabled;

export const modeDisclaimer = (site: SiteConfig) => {
  if (site.mode === "concept") {
    return site.concept?.disclaimer ?? "Independent concept prepared by Benestudio. Not affiliated with this studio.";
  }

  if (site.mode === "demo") {
    return "Independent demonstration concept by Benestudio. Studio and project details shown are fictional.";
  }

  return undefined;
};
