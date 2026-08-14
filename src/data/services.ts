import type { Service } from "@/types/site";

export const services: Service[] = [
  {
    slug: "full-home-interior-design",
    name: "Full-Home Interior Design",
    shortDescription: "Concept-to-completion interior transformations with spatial drawings, fixture schedules, and turn-key execution.",
    description: "End-to-end residential interior design for full homes, comprehensive architectural alterations, and turnkey turn-overs. We handle space planning, custom millwork drawings, finish selection, trade coordination, and complete installation.",
    included: [
      "2D Architectural Layouts & Spatial Drawings",
      "3D Conceptual Renderings & Material Moodboards",
      "Custom Cabinetry & Millwork Specifications",
      "Hard Finish & Lighting Fixture Schedules",
      "Furnishing Procurement, Trade Management & Final White-Glove Installation"
    ],
    idealFor: "Homeowners embarking on a whole-home architectural renovation, new build, or complete interior redesign who want full-service guidance from concept to reveal.",
  },
  {
    slug: "custom-cabinetry-millwork",
    name: "Custom Millwork & Cabinetry",
    shortDescription: "Bespoke architectural cabinetry, library walls, integrated wardrobes, and crafted wood finishes built to exact scale.",
    description: "Tailored architectural millwork design that integrates seamlessly with your home's structural bones. From integrated library shelving and hidden bar alcoves to walk-in dressing rooms and kitchen cabinetry.",
    included: [
      "Custom Millwork & Elevation Drawings",
      "Wood Species, Stain, & Tactile Material Selection",
      "Integrated Architectural LED Lighting Detailing",
      "Hardware Sourcing & Custom Metal Fabrication Coordination",
      "On-Site Artisan Supervisions & Millwork Fit Oversight"
    ],
    idealFor: "Clients looking to elevate living spaces with permanent, bespoke built-ins, custom paneling, tailored kitchens, or handcrafted storage solutions.",
  },
  {
    slug: "kitchen-and-bath-renovations",
    name: "Kitchen & Bath Renovations",
    shortDescription: "Dedicated wet-space architecture with hand-selected stone slabs, bespoke plumbing fixtures, and custom layouts.",
    description: "Focused design for the high-impact areas of your home. We balance functional ergonomics with quiet luxury—curating book-matched stone slabs, unlacquered brass fittings, custom vanities, and tactile plaster or tile finishes.",
    included: [
      "Kitchen & Bath Floor Plan & Plumbing Layout Optimization",
      "Natural Stone Slab Selection & Slab-Fabrication Guidance",
      "Custom Vanity, Island & Storage Cabinetry Design",
      "Plumbing, Tile, & Decorative Lighting Specifications",
      "Contractor & Trade Liaison During Demolition & Build Out"
    ],
    idealFor: "Homeowners prioritizing kitchen, scullery, primary bath, or powder room transformations with high-end materials and exacting craftsmanship.",
  },
  {
    slug: "furnishing-and-art-curation",
    name: "Furnishings & Art Curation",
    shortDescription: "Textile curation, custom upholstery, collector art sourcing, and decorative lighting selected for tactile warmth.",
    description: "A complete furnishings and styling layer for new or existing residences. We source heirloom vintage items, custom-upholstered seating, layered rugs, and fine art pieces that create a lived-in, soul-stirring environment.",
    included: [
      "Complete Room Furniture Plans & Spatial Elevation Layouts",
      "Custom Upholstery, Textile, & Window Treatment Sourcing",
      "Vintage, Antique, & Gallery Art Sourcing",
      "Custom Lighting & Rug Specifications",
      "White-Glove Delivery Coordination & On-Site Styling Day"
    ],
    idealFor: "Homeowners with completed architectural shells looking to furnish, layer, and curate their spaces with distinctive, comfortable pieces.",
  },
];
