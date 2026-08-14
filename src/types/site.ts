export type SiteMode = "demo" | "concept" | "production";

export type AnalyticsEventName =
  | "page_view"
  | "project_view"
  | "service_view"
  | "primary_cta_click"
  | "begin_inquiry"
  | "inquiry_step_complete"
  | "inquiry_submit"
  | "qualified_lead"
  | "booking_click"
  | "consultation_booked"
  | "phone_click"
  | "email_click";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
  priority?: boolean;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  location: string;
  category: string;
  summary: string;
  overview: string;
  services: string[];
  cover: ImageAsset;
  gallery: ImageAsset[];
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  included: string[];
  idealFor: string;
}

export interface ServiceArea {
  slug: string;
  name: string;
  state: string;
  description: string;
  enabled: boolean;
}

export interface ThemeConfig {
  canvas: string;
  surface: string;
  surfaceAlt: string;
  primaryInk: string;
  secondaryInk: string;
  quietInk: string;
  accent: string;
  accentDeep: string;
  optionalSage: string;
  hairline: string;
  fontFamily: string;
  buttonStyle: "text-arrow" | "solid-rectangle";
  imageTreatment: "natural" | "soft-contrast";
}

export interface SiteConfig {
  mode: SiteMode;
  brand: { name: string; shortName: string; tagline: string };
  business: {
    founder: string;
    city: string;
    state: string;
    country: string;
    serviceAreas: string[];
  };
  navigation: { label: string; href: string }[];
  hero: {
    eyebrow: string;
    headline: string;
    body: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  projects: Project[];
  services: Service[];
  process: { title: string; description: string }[];
  projectFit: { heading: string; body: string; criteria: string[] };
  inquiry: { primaryCtaLabel: string; fields: string[] };
  serviceAreas: ServiceArea[];
  contact: { email: string; phone?: string };
  socials: { label: string; href: string }[];
  booking: { url?: string };
  integrations: { leadWebhookEnabled: boolean };
  analytics: { enabled: boolean; gaMeasurementId?: string; metaPixelId?: string };
  ads: { campaignPagesEnabled: boolean };
  seo: { titleTemplate: string; defaultDescription: string; siteUrl?: string };
  legal: { privacyPath: string; termsPath: string };
  theme: ThemeConfig;
  concept?: { prospectName: string; disclaimer: string };
}
