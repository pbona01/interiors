import { projects } from "@/data/projects";
import { serviceAreas } from "@/data/service-areas";
import { services } from "@/data/services";
import { defaultTheme } from "@/config/theme";
import type { SiteConfig } from "@/types/site";

export const site = {
  mode: "demo",
  brand: {
    name: "Avery House Interiors",
    shortName: "Avery House",
    tagline: "Residential interiors with a sense of place.",
  },
  business: {
    founder: "Fictional demonstration studio",
    city: "Dallas",
    state: "Texas",
    country: "United States",
    serviceAreas: ["Dallas", "Fort Worth"],
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Studio", href: "/studio" },
    { label: "Process", href: "/process" },
  ],
  hero: {
    eyebrow: "Dallas–Fort Worth residential interiors",
    headline: "A home should feel like no one else could live there.",
    body: "Full-service interior design for renovations, new construction, and whole-home furnishing projects.",
    primaryCta: { label: "Begin a Project", href: "/inquire" },
    secondaryCta: { label: "View Projects", href: "/projects" },
  },
  projects,
  services,
  process: [
    { title: "Discovery", description: "We learn how the home needs to support the people living in it." },
    { title: "Direction", description: "A clear design point of view aligns materials, function, and feeling." },
    { title: "Design & Development", description: "Selections and specifications turn the direction into a coherent plan." },
    { title: "Installation & Styling", description: "The final layer brings the home into focus." },
  ],
  projectFit: {
    heading: "Designed for considered residential projects.",
    body: "This fictional demo shows where a studio should clearly communicate fit before an inquiry begins.",
    criteria: ["Dallas–Fort Worth properties", "Renovation, new-build, and furnishing scopes", "Homeowners ready to make design decisions"],
  },
  inquiry: {
    primaryCtaLabel: "Begin a Project",
    fields: ["name", "email", "phone", "city", "projectType", "budget", "timeline", "description"],
  },
  serviceAreas,
  contact: { email: "hello@example.com" },
  socials: [],
  booking: {},
  integrations: { leadWebhookEnabled: false },
  analytics: { enabled: false },
  ads: { campaignPagesEnabled: false },
  seo: {
    titleTemplate: "%s | Avery House Interiors",
    defaultDescription: "Fictional demonstration concept by Benestudio. Studio and project details are not real.",
  },
  legal: { privacyPath: "/privacy", termsPath: "/terms" },
  theme: defaultTheme,
} satisfies SiteConfig;
