import type { Project } from "@/types/site";

const livingRoom = {
  src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
  alt: "Avery House living room with limestone, custom walnut joinery, and natural linen seating.",
  width: 1600,
  height: 1067,
} as const;

const kitchen = {
  src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
  alt: "Avery House kitchen with pale oak cabinetry and a honed marble island.",
  width: 1600,
  height: 1067,
} as const;

const bedroom = {
  src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
  alt: "Avery House bedroom in warm plaster, walnut millwork, and olive linen drapery.",
  width: 1200,
  height: 1500,
} as const;

const customMillwork = {
  src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
  alt: "Avery House bespoke architectural custom millwork and cabinetry.",
  width: 1600,
  height: 1067,
} as const;

export const projects: Project[] = [
  {
    slug: "westlake-residence",
    name: "Westlake Residence",
    location: "Westlake, Texas",
    category: "Whole-home furnishing",
    summary: "A fictional family home shaped around everyday gathering.",
    overview: "Demonstration content only. Replace with factual client project context before production.",
    services: ["Full-Service Interior Design"],
    cover: livingRoom,
    gallery: [livingRoom, customMillwork, bedroom],
  },
  {
    slug: "preston-hollow-retreat",
    name: "Preston Hollow Retreat",
    location: "Dallas, Texas",
    category: "Renovation & Millwork",
    summary: "A fictional renovation balancing material warmth and custom architectural millwork.",
    overview: "Demonstration content only. Replace with factual client project context before production.",
    services: ["Renovation & New Construction", "Custom Millwork"],
    cover: customMillwork,
    gallery: [customMillwork, kitchen, livingRoom],
  },
  { slug: "highland-park-townhome", name: "Highland Park Townhome", location: "Dallas, Texas", category: "Furnishing & styling", summary: "A fictional townhome with collected material warmth.", overview: "Demonstration content only. Replace with factual client project context before production.", services: ["Furnishing & Styling"], cover: bedroom, gallery: [bedroom, kitchen] },
];
