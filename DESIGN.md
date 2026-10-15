# madebycal: design vibe

Personal maker brand. Quiet page, loud drawings. The UI stays simple and easy to scan; the personality comes from Callum's own illustrations and the copy. Obviously made by one person who enjoys making things. Not a SaaS landing page, and not the thick-border-and-hard-shadow template either.

Reference build: `pre-prod/` (tokens in `pre-prod/style.css` `:root`). The live root site still uses the older look until pre-prod is promoted.

## Palette (use these, don't invent new ones)
- White background: #FFFFFF
- Ink (text): #111111
- Muted grey text: #6B6B63
- Blue (links, buttons, stats): #0103FF
- Mustard (the squiggle, the contact block): #F5C518
- Pastels, pulled from the drawings, for image frames and soft panels: lilac #E7DAEA, sky #D6E9F7, butter #FFF0C8, peach #FBE3C6, lemon #FAF3B8, mint #E9F5EF
- Soft grey for pills and quiet fills: #F2F2EE

Light mode only.

## Type
- Display: Comfortaa 700, big and rounded
- Body: DM Mono, small and technical, with generous line-height

## Signature moves
- Illustrations carry the personality: thick ink outlines and flat pastel fills, drawn by Callum. One character per section, max, and it has a job (says hello, or is the work itself). Never sprinkled as decoration
- Outlines belong on drawings, not on the UI. No borders on cards, no hard offset shadows
- Images sit in rounded pastel frames (24px radius)
- Squiggle motif: a long, loose wavy line in mustard as a divider, and in blue as the link underline on hover
- Pills are soft filled grey, no outline

## Layout
- Max width 1200px, 2rem gutters (1rem on phones)
- Flex-wrap rows that stack cleanly. One featured project, then two side by side; not a grid of identical cards
- Header: logo, nav and actions on one centre line on desktop. Below 860px it's the logo plus a Menu button that opens a stacked panel with 44px+ tap targets
- One main breakpoint at 860px. Everything must work at phone width with no horizontal scroll

## Projects
- Title is the outcome, project name goes small above it ("Backseat · App, 2024")
- One line on what you did, then a blue stat line. Only real numbers. No number? Cut the line, don't pad it
- One strong image per project

## Interactions
Each hover has a job. Nothing important hides behind hover (phones don't have it).
- Cards lift slightly, image zooms a touch, title turns blue, arrow nudges right
- Links get the blue squiggle underline
- Email copy button confirms with "Copied!"
- All motion turns off under `prefers-reduced-motion`

## Voice in the UI
- Short, plain, a bit cheeky. Lead with what it is, then the numbers, then the story
- Honest about limits. Label simplified mockups as simplified
- No filler headings like "Our journey" or "Unlocking value"
- No eyebrow labels unless they carry real info (a project name does; "Selected work" doesn't)

## Avoid
- Generic template look: centred hero, three identical feature cards
- Thick borders and hard shadows on UI (reads as an AI template)
- Interactive gimmicks that don't earn their place, including tilts
- Clip-path diagonals on cards
- Dark mode
