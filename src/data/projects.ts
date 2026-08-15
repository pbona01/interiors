import type { Project } from "@/types/site";

const livingRoom = {
  src: "/images/living-room.jpg",
  alt: "Avery House living room with limestone, custom walnut joinery, and natural linen seating.",
  width: 1600,
  height: 1067,
} as const;

const kitchen = {
  src: "/images/kitchen.jpg",
  alt: "Avery House kitchen with pale oak cabinetry and a honed marble island.",
  width: 1600,
  height: 1067,
} as const;

const bedroom = {
  src: "/images/bedroom.jpg",
  alt: "Avery House bedroom in warm plaster, walnut millwork, and olive linen drapery.",
  width: 1200,
  height: 1500,
} as const;

const customMillwork = {
  src: "/images/millwork.jpg",
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
