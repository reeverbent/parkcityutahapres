# DJ Cam Reeve — Design System

The brand system for **DJ Cam Reeve**, a Utah DJ who plays weddings, corporate events, galas and resort events in the Park City / Deer Valley market. The position, in one line: **après sets with festival energy.**

This system exists to solve one specific commercial problem. Cam wins on the phone and loses before it — inquiries never become conversations, and his price lands as a price for "a DJ." So every surface here is built to make the difference visible *before* the call, and to book the conversation rather than deliver a quote.

---

## Sources

Everything in this system traces to four documents supplied by the client. Read them if you have access; do not assume the reader does.

| Source | What it settles |
|---|---|
| `uploads/MeldeenBrandDevelopement-DJCamReeve_Guidebook.pdf` — *Meldeen Brand Development, "DJ Cam Reeve — Logo Brand Development," May 2022*, 6 pages | The authoritative palette (exact hex), the logo lockup and its variations, the letter-tile icon system, the brand-language vocabulary, and the moodboard |
| `uploads/dj-cam-reeve-positioning_1.md` — positioning session, 8/25/26 | The two buyer faces (wedding / corporate), taglines, messaging pillars, repel lists, and Part 3, which promotes **APRÈS** to the spine word |
| `uploads/dj-cam-reeve-design-handoff_1.md` — design handoff, 8/25/26 | Page-level structure for the wedding and corporate landing pages, accent assignments, standing constraints |
| `uploads/*.png` / `*.jpg` | Logo artwork (purple and coral raster) and one cut-out headshot |

Rendered reference pages from the guidebook are saved in `guidelines/source/`:
`guidebook-color-palette.png`, `guidebook-logo-usage.png`, `guidebook-moodboard.png`.

There is **no codebase and no Figma file** for this brand. Nothing here was recreated from a screenshot of a live product; the components are authored from the guidebook and the two briefs.

### Where the guidebook and the briefs disagree

The printed guidebook lists white's hex as `000000`. That is a typo in the original. White is `#FFFFFF`, and this system uses the corrected value.

---

## The two faces

Same brand, same look, **two entry points — never one page for both.** A planner who lands on wedding language assumes Cam is a wedding guy who also does corporate, and prices him like one.

| | Wedding | Corporate |
|---|---|---|
| Buyer | The couple. Own money, own night. | Planner or exec. Someone else's money, own reputation. |
| Buys | Upside | Downside protection, then upside |
| Accent | **Coral** dominant, purple support | **Ice blue** dominant, coral support |
| Lead word | Après **set** | Après **atmosphere** |
| Hero line | Your wedding deserves an après set | Your event deserves après energy |
| Support line | A set, not a playlist. Played once, never again. | Après energy. Run like a production. |
| Lead pillar | We build it together | Run like a production |
| Promised land | A night that existed once | Nobody left early |
| Feel | Warm, cinematic | Cool, composed |
| CTA | Let's talk about your music | Check your date |
| Theme class | `.theme-wedding` | `.theme-corporate` |

Two more themes exist for Cam's other work: `.theme-nightlife` (magenta — après, open-format club) and `.theme-cosmic` (purple with coral — the guidebook's own signature pairing).

---

## Standing constraints

Non-negotiable. These come from Cam directly, 8/25/26, and apply to every future page, asset and document.

1. **Après carries the grave accent.** `après`, never "apres" or "Aprés". One character, and it is the difference between reading premium and reading like a typo. Verify any new display face renders `È` before locking it.
2. **Après is an hour, not a season.** Never illustrate it with skis, snow, chairlifts or scenic mountain landscapes. Illustrate it with the room at the moment the lights drop. If a June couple reads a page as a ski thing, the word has failed.
3. **The venue proof list is closed:** Montage Deer Valley, High West Distillery, The St. Regis. **Powder Mountain and Snowbird do not appear** in any marketing, positioning or design document. `APPROVED_VENUES` is exported from `components/media/VenueList.jsx` so the list never gets retyped.
4. **One CTA per page, and it books a conversation, never delivers a price.** No package tiers, no "get a quote", no second CTA.
5. **Never one page for both audiences.**
6. **DJ Cam Reeve only.** Reeverb Entertainment is the production arm; it appears as a *text credit in the opposite corner*, never a logo lockup, never a co-brand. **BeatHive DJs is out of scope** — different brand, palette and voice; never apply this system to it.
7. **Zero stock DJ imagery.** No turntables, no clip-art music notes, no glowing headphone icons.
8. **Headlines are built so the category word swaps** (`APRÈS ⟷ FESTIVAL`) without a relayout. Both landing pages ship with that A/B toggle wired.

---

## CONTENT FUNDAMENTALS

### Voice

Confident, declarative, unhurried. Short sentences. Cam states a fact and lets the reader draw the conclusion — that is the single most characteristic move in the whole system.

> "This set will never be played again" beats "an unrepeatable experience" every time.

**Say the fact, not the adjective.** "Unrepeatable," "one of a kind" and "unforgettable" are words every vendor in the wedding industry uses, so they land as noise. The mechanism is the message: a live set built for one room on one night cannot be run again by anyone, including Cam.

### Person

**"I" for the work, "we" for the collaboration, "you" for the reader.** This is a personal-talent brand, not an agency, and the copy should never hide behind a company voice.

- "**I** build the arc of your night around it"
- "**We** build it together"
- "**Your** wedding deserves an après set"

`Reeverb Entertainment` is referred to in the third person, as a supplier — "sound and light by Reeverb Entertainment" — never as "we."

### Casing

- **Display headlines: ALL CAPS**, always, with tight tracking. Sentence-cased display type is off-brand.
- **Eyebrows, labels, nav, buttons, captions: CAPS with wide tracking** (0.18em–0.32em).
- **Body and form copy: sentence case.** Normal punctuation, no title case.
- Brand names keep their own casing: `DJ • CAM REEVE`, `REEVERB ENTERTAINMENT`, `BeatHive DJs`.

### Length

Short by rule. This is event marketing, not a brochure.

- Hero headline: 5–8 words
- Support line: one sentence, sometimes two fragments — "A set, not a playlist. Played once, never again."
- Tension / fear sections: two or three lines maximum
- Body paragraphs: two sentences, capped at `--measure-body` (66ch)
- Eyebrow: four words or fewer

### Tone by section

| Section | Tone |
|---|---|
| Hero | Identity. States who this is for and dares the wrong buyer to leave. |
| Tension / fear | Confident, **not bitter.** One sentence of contrast, then move on. |
| Proof | Plain and factual. Let the audio do the arguing. |
| How it works / production | Procedural, almost technical. This is where credibility lives. |
| Repel | Quiet and honest. Understated is where its power comes from — no accent colour, small type. |
| Close | The same words as the hero CTA, verbatim. Repetition is the point. |

### Copy that is fixed

Use these exactly. They are decided.

- `Your wedding deserves an après set.` / `A set, not a playlist. Played once, never again.`
- `Your event deserves après energy.` / `Après energy. Run like a production.`
- `Après sets with festival energy.` — the category line, both faces
- `Nobody left early.` — corporate result headline, never a promise, always a result
- `Recorded at a real wedding. Never played again.` — the proof-block caption
- `Après is not a season. It is the hour the day ends and the night starts.` — the one explainer line, if it is ever needed
- Bench / A/B challengers: `Your wedding deserves a festival set.`, `Your event deserves festival energy.`, `Your wedding deserves mainstage energy.` (photo captions and reels, not primary)

### The inquiry form is a filter, not a lead capture

Three questions do all the work: **what do you actually listen to / what show or festival was the best night of your life / what should never be played.** The right couple gets excited answering them; the wrong one bounces before wasting anyone's time. Never ask for a budget range on the page.

### Emoji, exclamation, hype

**No emoji.** Not in UI, not in copy, not in captions on brand-controlled surfaces. No exclamation marks in headlines. No "amazing," "epic," "vibes" — *vibes* was explicitly cut from a tagline during the positioning session because every vendor says it and none of them mean anything by it.

### The guidebook's own vocabulary

Use this as the tone check for anything new: experiential · bold · fantastic · not typical · cosmic · open-format surprises · confidence · structured · organized · edgy · friendly · full spectrum · powerful · spontaneous · imaginative · emotional depth.

---

## VISUAL FOUNDATIONS

### The governing tension

From the guidebook: **structured and organized** on one side, **spontaneous and cosmic** on the other. Only structured reads corporate and forgettable. Only spontaneous reads amateur.

**Every page needs a rigid grid and exactly one thing that breaks loose.** On a landing page that break is either the peak-hour photo *or* the one accent-coloured word in the headline — **never both.** This is the rule most likely to be broken by accident; check it last before shipping.

### Colour

Exact values, from the guidebook. Do not eyeball them.

| Role | Token | Hex |
|---|---|---|
| Primary | `--dcr-black` | `#000000` |
| Primary | `--dcr-white` | `#FFFFFF` |
| Secondary | `--dcr-purple` | `#6D22A8` |
| Secondary | `--dcr-magenta` | `#FE01CE` |
| Secondary | `--dcr-coral` | `#FD675E` |
| Secondary | `--dcr-ice-blue` | `#A0DCF9` |

**Spend ratio: roughly 70% black or white, 20% one dominant accent, 10% a supporting accent.** One dominant accent per piece. Never all four. The secondaries are accents, not backgrounds-by-default — the moment a secondary becomes a large field, the piece starts looking like a rave flyer instead of a designed thing.

**Hard avoids:** magenta directly on purple (they vibrate), gradients between two secondaries, drop shadows or glows on type, all four accents in one piece.

**Neutrals are derived, not from the guidebook.** The guidebook defines no greys, so `--ink-1…6` and `--paper-1…5` were built from black and white for UI needs (raised surfaces, hairlines, muted type). They are kept deliberately few so the field still reads as pure black or pure white. If the brand ever specifies greys, replace them.

**The dark field is the default.** `.dcr-field-light` flips to the white register, which is what price sheets, one-sheets and proposals use — that is where the brand should read premium and calm rather than loud.

### Type

Five roles. The guidebook's own support face (Brandon Grotesque) and Cam's named wide face (Acumin Pro Wide) are not available as webfonts, so both are substituted — see *Substitutions* below.

| Role | Token | Family | Where |
|---|---|---|---|
| Display | `--font-display` | **Anton** | Every headline. Heavy condensed caps, tracking −0.02 to −0.03em, leading 0.94. |
| Wide caps | `--font-wide` | **Archivo** (width 125) | Eyebrows, labels, nav, buttons, spec-sheet labels, captions. 0.18–0.32em tracking. |
| Support | `--font-support` | **Montserrat** 300 | The letterspaced line under a headline. 0.06em tracking. |
| Body | `--font-text` | **Open Sans** | Long-form copy, forms, UI. The only face at normal tracking. |
| Editorial | `--font-editorial` | **Libre Baskerville Italic** | One word per page, and the guidebook's black-box section tabs. Nothing else. |

The type system lives at two extremes — **tight display, wide labels** — with almost nothing in between. That contrast is most of the brand's visual signature.

Display scale: 104 / 76 / 56 / 40. Leading is `0.94` rather than the tighter `0.90` **specifically so the grave accent on `APRÈS` clears the line above it when a headline wraps.** `--lh-display-tight` (0.90) exists for lines that carry no accented caps.

### Spacing, grid, layout

4px base, going coarse fast: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160 · 200.

12 columns, 32px gutters, `--grid-max` 1280, `--page-pad` 48. Section vertical padding is 96 / 128 / 200 — sections are tall on purpose. **The brand's calm comes from air, not from decoration.** Measures are capped at 16ch (display), 44ch (support), 66ch (body).

Fixed elements: the site header is sticky, and it is the only fixed chrome. No floating action buttons, no sticky footers, no cookie-bar-shaped interruptions.

### Backgrounds

Black, or full-bleed photography, or white. That is the whole list.

- **No gradient backgrounds.** Gradients between two secondaries are explicitly banned; a gradient over black is off-brand by omission.
- **No hand-drawn illustration**, ever. The brand carries meaning with type and photography.
- **One texture only:** `--texture-grid`, a 48px hairline grid at 4.5% white. It exists to make the corporate page's spec-sheet section look deliberately technical. Use it there and almost nowhere else.
- **Scrims, not filters,** put type on photography: `--scrim-flat`, `--scrim-heavy`, `--scrim-top`, `--scrim-bottom`.

### Photography

Real event photography. Strong directional lighting. Dark rooms with the colour coming from **the rig itself**, not from a colour filter. Crowds shot wide. Portraits clean against dark or plain backgrounds. The target is closer to a tour photographer's work than a wedding vendor's.

Grades: `--img-grade` (base, brightness .72), `--img-grade-hero` (brightness .52 — the full-bleed hero treatment), `--img-grade-mono` (editorial black-and-white portraiture, straight from the moodboard). The colour vibe is **cool and dark, never warm-filtered**: saturation is pulled back slightly so the rig's own magenta and purple read as light rather than as a Instagram preset. No grain.

**Banned subjects:** skis, snow, chairlifts, scenic mountain landscapes, stock turntables, clip-art music notes, glowing headphone icons.

**The single most important asset on either landing page** is one wide, dark, peak-hour crowd shot where the light is clearly coming from a real rig. If that photo is good, the page works. If it is a posed vendor headshot, the page fails no matter how well it is laid out. → **This asset does not exist yet.** See *Caveats*.

### Corners, borders, cards, shadows

**Square is the default.** `--radius-none` (0) is used everywhere. `--radius-sm` (2px) exists only for an input that reads broken as a hard square. `--radius-pill` is allowed in exactly two places: the play affordance and a forced-circle avatar.

**There is no drop-shadow system.** The guidebook bans shadows and glows on type, and on a black field elevation is meaningless anyway. Separation is a **1px hairline plus a one-step surface value shift** — `--ink-0` page, `--ink-1` raised, `--ink-2` inset. `--shadow-float` exists for the rare element that genuinely floats over photography, and nothing else.

Cards: hairline border, no radius, no shadow, `--card-pad` 32. An accent bar, when used, is **4px across the top edge** — never a coloured left border only. At most one accent-bar card per row.

Rules do the structural work shadows would do elsewhere. Vertical rules between grid cells use `--accent-line` (32% accent), not full-strength accent — the rule structures the grid, it does not compete with the headline.

### Transparency and blur

One use only: `--glass-dark` (72% black) with `--glass-blur` on the sticky header, so the bar can sit over moving photography without becoming a solid slab. Blur is not a decorative material in this brand.

### Motion

**Cuts and fades. No bounce, no spring, no overshoot.** Durations 80 / 140 / 240 / 420 / 640ms; easing is `--ease-out` `cubic-bezier(.16, 1, .3, 1)` for everything that enters, `--ease-in-out` for state changes.

- **Hover** is a value shift on colour, border or opacity — never a scale, never a lift. Accent buttons go to `--accent-press`. Outline buttons swap their hairline to accent. Links go from accent to white.
- **Press** is `translateY(1px)`. A 1px settle, never a shrink.
- **Focus** is a 2px accent outline at 2px offset — visible, square, no glow.
- **Reveal** on scroll, where used, is opacity plus a small Y translate over 640ms. Nothing rotates, nothing staggers by more than 80ms.
- `prefers-reduced-motion` zeroes every duration token.

---

## ICONOGRAPHY

**The brand ships no icon set.** The guidebook contains no icon system, no icon font, no SVG sprite, and no PNG icon assets — it defines a logotype, a palette, a moodboard and a type direction. There is nothing to copy in.

What the guidebook *does* define, and what this system uses instead of icons:

- **The letter-tile system** — single letters (D, J, C, A, M) set in the logotype face on a solid tile. This is the brand's real "icon" system: profile pictures, stickers, badges, spot marks and repeating pattern work. Approved combos from the guidebook, in order: purple letter on coral tile, white letter on coral tile, coral letter on purple tile. The letters in `assets/logo/letters/` were **cropped from the supplied logo artwork**, not re-set in a typeface. → `LetterTile`
- **The swatch shapes** — the guidebook draws primaries as **hexagons** (black filled, white as a hairline outline) and secondaries as **vertical bars**. The shape carries the primary/secondary distinction, so keep it whenever the palette is shown. → `Swatch`
- **The section tab** — a solid black box holding letterspaced italic-serif caps. This is the guidebook's own page-header device and the sanctioned use of the editorial face. → `SectionTab`
- **Bare type.** Most places a design system would reach for an icon, this brand reaches for wide-tracked caps instead. A `01 / 02 / 03` display numeral opens a step; a hairline rule divides a grid; a caption in tracked caps labels a photo.

### The substitution, flagged

Where a genuine UI glyph is unavoidable — a play/pause control, a checkmark on a sent form, the A/B swap affordance — this system links **[Lucide](https://lucide.dev)** from CDN via the `Icon` component. Lucide was chosen for its thin, geometric, square-cut stroke, which sits with the "structured and organized" half of the brand. It is rendered through a CSS mask so it inherits `currentColor` and tints from the accent tokens.

**This is a substitution, not brand-sanctioned.** If Cam has or commissions an icon set, replace the `BASE` constant in `components/core/Icon.jsx` and nothing else changes.

Rules for icon use in this system:

- Icons are **rare**. If a label can do the job, use the label.
- Never emoji. Never unicode characters standing in as icons (no `▶`, `★`, `→` in place of a glyph or a word).
- Never a turntable, a vinyl record, a music note, or a glowing headphone — those are the exact clichés the brand is positioned against.
- Icons never appear alone as navigation. They ride alongside a tracked-caps label.

### Logo assets

`assets/logo/` holds the primary lockup in all six approved colorways, derived from the supplied artwork:

`dj-cam-reeve-black.png` · `-white.png` · `-coral.png` · `-purple.png` · `-magenta.png` · `-ice-blue.png`

The black and white versions are **transparent PNGs generated from the supplied colour artwork** by extracting its alpha and re-filling it — the letterforms are the real ones, untouched. The original JPGs are preserved in `assets/logo/source/`.

Logo rules: clear space on all four sides equal to the cap height of the `DJ • CAM` line. On photography, place it on a darkened area or a solid black bar only. Never rotate, skew, outline, add effects to, or re-type it — **the logotype is custom lettering, not a font.** When anyone asks Cam for "the logo," send the **EPS**, which is not in this project.

---

## Index

### Root

| File | What it is |
|---|---|
| `readme.md` | This file. The design guide and manifest. |
| `SKILL.md` | Agent Skills front-matter so this folder works as a Claude Code skill. |
| `styles.css` | The single stylesheet consumers link. `@import` lines only. |
| `thumbnail.html` | The system's homepage tile. |

### Tokens — `tokens/`

`fonts.css` (webfont loading + substitution log) · `colors.css` (brand hex, derived neutrals, tints, scrims, semantic aliases, `.dcr-field-light`) · `themes.css` (the four accent themes) · `typography.css` (families, scales, weights, leading, tracking, composite roles) · `spacing.css` (scale, section rhythm, grid, measures) · `borders.css` (radii, border widths, card recipe) · `effects.css` (the deliberate absence of a shadow system, glass, photo grades, texture, opacity) · `motion.css` (durations, easing, press shift, reduced-motion) · `base.css` (element defaults, link colours, focus ring)

### Components — `components/`

**`core/`** — `Button` · `Logo` · `LetterTile` · `Eyebrow` · `DisplayHeading` · `SupportText` · `Rule` · `Icon` · `Badge`

**`layout/`** — `Section` · `Card` · `StepGrid` · `SpecList` · `PhotoFrame`

**`media/`** — `PlayBlock` · `VenueList` (+ the `APPROVED_VENUES` constant) · `Quote`

**`forms/`** — `Field` · `Input` · `Textarea` · `Select` · `Checkbox`

**`brand/`** — `Swatch` · `SectionTab`

**`navigation/`** — `SiteHeader` · `SiteFooter`

Each component ships `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (what & when, a usage example, and the brand rule it enforces). Read the `.prompt.md` before using a component — several of them carry a hard constraint, not just an API.

**Intentional additions.** No source defined a component inventory (there is no codebase and no Figma file), so the set above was authored from the guidebook and the two briefs. Two entries are worth calling out because they are conveniences rather than brand primitives: `Icon` (a wrapper over a substituted CDN glyph set — see *Iconography*) and `Field` (the label/hint/error shell shared by the form controls).

### UI kits — `ui_kits/`

| Kit | Entry | Notes |
|---|---|---|
| Wedding landing page | `ui_kits/wedding-landing/index.html` | `.theme-wedding`. Hero → tension → **proof of the set** → we build it together → venues → repel → filtering inquiry form. |
| Corporate landing page | `ui_kits/corporate-landing/index.html` | `.theme-corporate`. Hero → fear → **run like a production** → atmosphere → built for the room → `NOBODY LEFT EARLY.` → date check. |

Each kit has its own `README.md` explaining the section order and what is interactive. Both are registered as Starting Points.

### Guidelines — `guidelines/`

`foundations/*.html` — the specimen cards that populate the Design System tab, grouped **Colors**, **Type**, **Spacing**, **Surfaces**, **Brand**.

`source/` — rendered reference pages from the Meldeen guidebook (colour palette, logo usage, moodboard). The moodboard is **reference only, not licensed imagery** — do not publish it.

### Assets — `assets/`

`logo/` — the primary lockup in six colorways, plus `source/` originals
`logo/letters/` — D, J, C, A, M cropped from the lockup, in white, black, coral and purple
`imagery/cam-reeve-headshot.jpg` — cut-out portrait on white

---

## Caveats

- **No event photography.** The most important asset in the brand — a wide, dark, peak-hour crowd shot lit by a real rig — was not supplied. Both landing-page heroes render `PhotoFrame`'s labelled placeholder well instead. Nothing was invented or generated to fill the gap.
- **Two fonts are substituted.** Brandon Grotesque → Montserrat (a guidebook-approved substitute, and Cam's own request). Acumin Pro Wide → Archivo at width 125 (Adobe Fonts ships no webfont binary for it). Anton stands in for the custom logotype face in display type. If licensed webfont files exist, drop them in and swap the `@font-face` sources in `tokens/fonts.css`.
- **The icon set is substituted** (Lucide). See *Iconography*.
- **Five uploaded files were empty** (0 bytes on arrival): `DJCamReeve-Logo-Black.png`, `DJCamReeve-Logo-Pink.png`, `DJCamReeve-Logo-Pink.jpg`, `DJCamReeve-Logo-Blue.jpg`, `djcamreeve_qr.png`. The black and white lockups here were derived from the purple artwork rather than from those files. The QR code is missing entirely.
- **No EPS.** Guidebook rule: EPS is what goes out when someone asks for the logo. This project has raster only.
