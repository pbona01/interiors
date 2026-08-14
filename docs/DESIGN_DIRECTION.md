# BICS design direction

## Visual premise

BICS is an editorial, image-led system for serious residential interior studios—not a “luxury website” costume. It should feel composed, architectural, and calm while communicating the practical facts a homeowner needs to begin.

## Grid and composition

Use a 12-column desktop grid with a wide editorial gutter and a four-column mobile grid. Sections may break symmetry once, deliberately: an image field can dominate, a project label can align to its edge, or copy can sit in a narrow reading column. Do not repeat three-card layouts as a default.

## Type and color

Start with one sans family: **Manrope** or **Inter Tight**, subject to prototype testing. Use 400–600 weights, compact display tracking, comfortable body leading, and uppercase micro-labels sparingly. The light-first token palette is canvas `#EFEAE1`, surface `#F6F2EA`, surface-alt `#E8E1D7`, ink `#292621`, muted `#756F66`, accent `#A76542`, accent-deep `#7D4932`, sage `#788071`, and hairline `rgba(41,38,33,.16)`. All values become theme tokens in Phase 2.

## Image and motion philosophy

Photography carries the emotion; type supplies certainty. Images are large, art-directed, stable in aspect ratio, and described with useful alt text. Use no autoplay video by default. Motion is limited to short opacity/clip reveals, line expansion, and arrow movement; respect `prefers-reduced-motion` and avoid scroll hijacking.

## Navigation and CTA philosophy

The header works like a publication index: brand, numbered route links, and one quiet **Begin a Project** action. The hero has exactly two actions: **Begin a Project** and **View Projects**. Repeat the primary action only after selected work, project fit, and at the final conversion moment.

## Project and service presentation

Support three controlled project patterns: sequential editorial features, a project index with adjacent image switching, and asymmetrical gallery rhythm. Support two service patterns: typographic editorial rows and type-plus-image rows. These are curated variants, not a page builder.

## Mobile principles

Mobile is a separate composition: stacked image sequence, 44px targets, clear menu, reduced text overlap, and no hover-only content. Validate 320, 375, 390, 430, 768, 1024, 1366, 1440, and 1920px before release.
