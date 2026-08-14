import type { AnalyticsEventName, SiteConfig } from "@/types/site";
import { canCollectAnalytics } from "@/lib/site-mode";

export type AnalyticsEvent = {
  name: AnalyticsEventName;
  properties?: Record<string, string | number | boolean | undefined>;
};

/** Provider-neutral boundary. Add a consent-aware provider in Phase 6. */
export function trackEvent(site: SiteConfig, event: AnalyticsEvent): void {
  if (!canCollectAnalytics(site)) return;

  // Intentionally no provider call until client-owned analytics is configured.
  void event;
}
