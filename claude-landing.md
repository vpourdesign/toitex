# CLAUDE-LANDING.md — Performance Landing Page Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## What a Landing Page Is
A performance landing page has one job: convert. Every decision — layout, color, type, spacing, motion — serves that goal. It is not a portfolio piece. It is not a design showcase. It is a conversion machine that happens to look beautiful.

## Landing Page Approach — Choose One
Before writing a single line of code, identify which approach the page calls for. If the user doesn't specify, ask.

---

### 🔬 Scientific Approach
**Tone:** Authoritative, precise, reassuring. Speaks to the rational brain.
**Best for:** Health, supplements, medical devices, clinical products, B2B, anything where trust is built through proof.

**Design language:**
- Clean, structured layout. Generous whitespace. Nothing cluttered.
- Neutral or cool-tinted backgrounds (white, off-white, pale grey-blue). Brand color used sparingly as an accent.
- Sans-serif primary font. Serif used only for pull quotes or key statistics.
- Data visualizations, charts, or percentage callouts presented as designed elements, not afterthoughts.
- Ingredient or mechanism diagrams (illustrated or iconographic).
- Certification badges, regulatory numbers, lab origins — prominently placed.

**Copy patterns:**
- Lead with a specific claim backed by a number: "90% of users saw improvement in 14 days."
- Name the mechanism: "Lactobacillus rhamnosus GR-1® restores vaginal flora by..."
- Cite studies inline: "In a double-blind clinical trial (n=142)..."
- Objections answered factually, not emotionally.
- Headlines are clear and direct, not poetic.

**Section order:** Hero claim → Trust bar (certifications) → Mechanism explainer → Clinical evidence → Product spotlight → Reviews → FAQ → CTA

---

### 💛 Emotional / Storytelling Approach
**Tone:** Warm, human, intimate. Speaks to the feeling brain first, justifies with logic second.
**Best for:** Lifestyle products, wellness, beauty, personal challenges, anything where the customer needs to feel *understood* before they'll buy.

**Design language:**
- Warm, organic backgrounds (cream, blush, warm grey). Rich, saturated brand color used boldly.
- Serif or display font dominates headlines — evocative, editorial feel.
- Photography-forward (or strong placeholder treatment). People, texture, context — not product-on-white.
- Sections flow like a narrative, not a feature list. Each one builds emotional momentum.
- Pull quotes from real customers in large type. Let them carry sections.
- Micro-details that signal craft: custom dividers, subtle grain texture, handwritten-style accents.

**Copy patterns:**
- Open with the problem as a lived experience: "You've tried everything. The discomfort keeps coming back."
- Use "you" constantly. The reader is the hero, the product is the tool.
- Transition from pain → possibility → product naturally — never abruptly.
- Social proof is human: full name, photo, specific story. Not just stars.
- Headlines are evocative: "Finally, something that actually works." not "Clinically proven probiotic."
- End with hope and urgency, not just a discount.

**Section order:** Hero (empathy hook) → "You're not alone" moment → Story / journey → Product as solution → Proof (reviews with photos) → Guarantee → Final emotional CTA

---

## Anatomy — Shared Structure
Regardless of approach, every landing page needs:
1. **Nav** — logo + single CTA button. No distracting links.
2. **Hero** — headline, subheadline, primary CTA, one social proof element. Above the fold on desktop AND mobile.
3. **Trust bar** — certifications, logos, ticker of key claims.
4. **Core content** — follows the approach-specific section order above.
5. **Social proof** — reviews with names and ratings. 3–6 is enough.
6. **FAQ** — 4–6 objection-killers. Accordion.
7. **Final CTA** — repeat the offer, one big button.
8. **Footer** — minimal. Legal only, nothing that distracts.

## CTA Rules
- One primary CTA color. Used only for CTA buttons — nowhere else on the page.
- CTA must appear: in the nav, in the hero, after social proof, at the end. Minimum 3× per page.
- CTA copy is active and specific: "Commencer maintenant", "Obtenir mon kit", "Essayer Probaclac" — never "Submit" or "Click here".
- On mobile: sticky CTA bar at the bottom of the screen. Always.
- Button shape: rounded (border-radius 8–50px depending on brand feel). Never sharp corners.

## Visual Hierarchy Rules
- **One brand color.** Derive a dark and light variant from it. That's the palette.
- Off-white background (`#fafafa` or brand-tinted). Never pure `#ffffff` — too harsh.
- Headline in a serif or strong display font. Body in a clean sans. Never the same font for both.
- Section rhythm: alternating white and tinted backgrounds. Keeps sections readable without borders.
- Max content width: `1100px`. Never wider.
- Never center-align body text. Only center headlines and short taglines.

## Typography
- Headline: `clamp(2rem, 4vw, 3.5rem)`, weight 800–900, `letter-spacing: -0.02em`, `line-height: 1.1`
- Subheadline: `clamp(1rem, 2vw, 1.2rem)`, weight 400, `line-height: 1.65`, muted color, `max-width: 520px`
- Body: `clamp(0.95rem, 1.5vw, 1.05rem)`, `line-height: 1.7`
- Always use `clamp()`. Never fixed px font sizes.
- Load from Google Fonts or Bunny Fonts. Two fonts max.

## CSS — Keep It Simple
- **Tailwind CDN** for utilities.
- **Custom CSS** for brand tokens, keyframes, and anything Tailwind can't express cleanly.
- Define a `:root` token block at the top: brand color, dark/light variants, off-white, text, muted text, radius, spacing.
- Do not use `transition-all`. Transition only `transform`, `opacity`, `color`, `background-color`, `box-shadow`.
- No external JS animation libraries unless explicitly requested.

## Animations — Minimal and CSS-Only by Default
- **Hover states:** `transform: translateY(-2px)` + slight shadow lift on buttons and cards.
- **Entrance animations:** Intersection Observer + a single `.is-visible` class: `opacity: 0 → 1`, `transform: translateY(12px) → translateY(0)`. One utility, used everywhere.
- **Ticker/marquee:** pure CSS `@keyframes`. No JS.
- **FAQ accordion:** vanilla JS class toggle. No library.
- **Sticky nav shadow:** JS scroll listener, one `box-shadow` toggle. Nothing more.
- If it can't be done with CSS transitions and vanilla JS in under 20 lines, it's too complex for a landing page.

## Shadows
Never flat. Never default Tailwind. Always soft and color-tinted:
```css
/* Card */
box-shadow: 0 2px 8px rgba(0,0,0,.05), 0 8px 24px rgba(0,0,0,.06);

/* CTA button */
box-shadow: 0 4px 14px rgba(VAR_BRAND_RGB, 0.35);

/* Floating / modal */
box-shadow: 0 8px 32px rgba(0,0,0,.12), 0 2px 8px rgba(0,0,0,.06);
```

## Mobile — Non-Negotiable
- Hero must be fully readable and CTA tappable above the fold on a 390px wide screen.
- Sticky bottom CTA bar on mobile only (`@media (max-width: 768px)`).
- No horizontal scroll. All grids collapse to single column.
- Tap targets minimum 44px tall.

## Trust Signals — Use All That Apply
- Star ratings with review count ("4.8 ★ · 2 347 avis")
- Certification badges (NPN, Health Canada, clinically studied, made in Quebec, etc.)
- "As seen in" logo strip
- Claim icons (allergen-free, no refrigeration, etc.)
- Result statistics ("90% improvement")
- Real customer photos in reviews

## Pricing Block
- Show the price prominently — never hide it.
- Crossed-out original price if there's a discount.
- Shipping and guarantee info right below the price.
- Per-unit breakdown ("$1.20 per dose") builds value perception.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start: `node serve.mjs` (serves project root at `http://localhost:3000`)
- If already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer: `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache: `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Saved to `./temporary screenshots/screenshot-N.png` (auto-incremented).
- Optional label: `node screenshot.mjs http://localhost:3000 label`
- Read the PNG with the Read tool after every screenshot. Analyze it.
- Minimum 2 screenshot passes. Fix before declaring done.
- Check: hero above the fold, CTA visibility, mobile layout, section contrast, type hierarchy.

## Output Defaults
- Single `index.html`, all styles inline, unless told otherwise.
- Tailwind via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Google Fonts via `<link>` in `<head>`.
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- No GSAP, no Lenis, no Motion One — unless explicitly requested.

## Brand Assets
- Always check `brand_assets/` before designing.
- Use any logos, colors, or style guides found there.
- Never invent brand colors if a palette exists. Never use a placeholder where a real asset exists.

## Anti-Generic Guardrails
- Never use default Tailwind blue/indigo as the primary color.
- Never use `shadow-md` or flat single-stop shadows.
- Never use the same font for headings and body.
- Never center-align body paragraphs.
- Never use more than 2 typefaces.
- Never add animations before layout and content are stable.
- Never use `transition-all`.

## Hard Rules
- **Ask which approach (Scientific or Emotional) before starting if the user hasn't specified.**
- One page, one goal. No nav links that take users off-page (except footer legal).
- CTA button color appears nowhere else on the page.
- Every section must earn its place — if it doesn't build trust or move toward conversion, cut it.
- A clean, still page that converts beats an animated, cluttered one every time.
- Do not add sections not briefed by the user.
- Do not stop after one screenshot pass.