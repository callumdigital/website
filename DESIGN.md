# madebycal: design vibe

Personal maker brand. Playful and confident, a bit scrappy, obviously made by one person who enjoys making things. Not a corporate design system. Think sticker-covered laptop, not SaaS landing page.

## Palette (use these, don't invent new ones)
- Cream background: #FDFBF3
- Ink (text, borders): #111111
- Cobalt (primary accent, arrows, buttons): #1B2FD4
- Mustard (highlights, hero edge, CTA banners): #F5C518
- Mint (#8FD9C0), lilac (#B9A9F5): secondary accents for tags and panels
- Muted grey text: #6B6B63

Tokens live in `style.css` `:root`. Use the variables, not raw hex.

## Type
- Display: Comfortaa 700, big and rounded
- Body: DM Mono, small and technical, with generous line-height

## Signature moves
- 2px ink borders on cards and panels, 15px radius
- Pill tags with 1.5px borders
- Squiggle motif: a wavy SVG line used as dividers and accents. Keep it long and loose, not bunched up
- Dot grid texture in cobalt (radial-gradient dots, ~25px spacing) on feature panels
- Mustard squiggle edge on the hero, not scallops
- Hard offset shadows are fine, glossy gradients are not

## Layout
- Max width 1200px, 2rem gutters
- Flex-wrap rows, cards that stack cleanly
- Sticky nav chips on desktop
- Before/after comparisons: two bordered cards with a cobalt circle arrow between them
- Breakpoints at 860px and 800px. Everything must work at phone width with no horizontal scroll

## Voice in the UI
- Short, plain, a bit cheeky. Lead with what it is, then the numbers, then the story
- Honest about limits. Label simplified mockups as simplified
- No filler headings like "Our journey" or "Unlocking value"

## Avoid
- Generic template look: centred hero, three identical feature cards, grey-on-white
- Interactive gimmicks that don't earn their place
- Decorative mascots or SVG characters
- Clip-path diagonals on cards
