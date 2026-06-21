---
name: Neo Tian How Portfolio
description: A precise engineering dossier for recruiters evaluating Neo Tian How.
colors:
  canvas: "#F7F8F5"
  canvas-soft: "#EEF1F0"
  panel: "#FFFFFB"
  panel-strong: "#FDFDF8"
  panel-soft: "#FFFFFBB8"
  chip: "#EAEEEE"
  line: "#15181A14"
  line-strong: "#15181A29"
  text: "#15181A"
  soft-text: "#333B3E"
  muted: "#667174"
  quiet: "#919A9C"
  accent: "#006A73"
  accent-strong: "#004E56"
  accent-ink: "#F7F8F5"
  accent-soft: "#DCECEE"
  second: "#52666B"
  header: "#F7F8F5E6"
  dark-canvas: "#101315"
  dark-canvas-soft: "#171D1F"
  dark-panel: "#1D2426"
  dark-panel-strong: "#222A2D"
  dark-panel-soft: "#1D2426C2"
  dark-chip: "#293235"
  dark-line: "#F5F7F21A"
  dark-line-strong: "#F5F7F230"
  dark-text: "#F5F7F2"
  dark-soft-text: "#CDD6D5"
  dark-muted: "#9DA9A8"
  dark-quiet: "#758280"
  dark-accent: "#62C8D0"
  dark-accent-strong: "#8FDEE4"
  dark-accent-ink: "#101315"
  dark-accent-soft: "#62C8D024"
  dark-second: "#B4C8CA"
  dark-header: "#101315E6"
typography:
  display:
    fontFamily: "Host Grotesk, sans-serif"
    fontSize: "clamp(3.25rem, 8vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Host Grotesk, sans-serif"
    fontSize: "clamp(2rem, 4.7vw, 3.45rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Host Grotesk, sans-serif"
    fontSize: "22px"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Host Grotesk, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  label:
    fontFamily: "Host Grotesk, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "12px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0"
rounded:
  none: "0"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "24px"
  3xl: "32px"
  4xl: "40px"
  tap: "44px"
  button: "48px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "{spacing.button}"
  button-primary-hover:
    backgroundColor: "{colors.accent-strong}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "{spacing.button}"
  button-secondary:
    backgroundColor: "{colors.panel-soft}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "{spacing.button}"
  chip:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.soft-text}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "6px 10px"
  status-pill:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-strong}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  card:
    backgroundColor: "{colors.panel-soft}"
    textColor: "{colors.soft-text}"
    rounded: "{rounded.none}"
    padding: "20px"
  nav-link:
    backgroundColor: "{colors.header}"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 6px"
    height: "{spacing.tap}"
---

# Design System: Neo Tian How Portfolio

## 1. Overview

**Creative North Star: "The Engineering Dossier"**

This system presents Neo Tian How as a precise, credible, technical software engineer. The page should feel like a compact dossier assembled for recruiters: immediate signal, dense evidence, crisp sectioning, and enough visual authorship to avoid looking like a template.

The interface uses cool paper surfaces, square geometry, restrained teal emphasis, and strong grotesk typography. It is professional without going cold: the accent is confident, the motion is measured, and project imagery is used as proof rather than decoration.

It explicitly rejects the anti-references in `PRODUCT.md`: a generic SaaS landing page, an academic resume page, and a static CV copied into a website.

**Key Characteristics:**

- Compact, evidence-led hierarchy with recruiter signal visible before ornamental detail.
- Square-edged surfaces and single-pixel rules instead of rounded marketing cards.
- Teal accent used as a scarce navigation and action signal, not as a decorative wash.
- Light and dark themes with matching structure, contrast, and component behavior.
- Motion that clarifies state and stages the hero once, never scattered fade effects.

## 2. Colors

The palette is a cool technical neutral system with one restrained teal accent and paired light/dark themes.

### Primary

- **Signal Teal**: Primary action, focus, underline, selection, and proof-marker color. It appears as `accent` in the light theme and `dark-accent` in the dark theme.
- **Deep Signal Teal**: Hover and high-emphasis accent state. It appears as `accent-strong` in the light theme and `dark-accent-strong` in the dark theme.
- **Pale Signal Field**: Low-emphasis tint behind portrait shadows, logo fallbacks, and status badges. It appears as `accent-soft` and `dark-accent-soft`.

### Neutral

- **Cool Canvas**: Main page field for the light theme. It is slightly green-gray and should remain quieter than the panels.
- **Ink Canvas**: Main page field for the dark theme. It is near-black with a green-gray cast, not blue-black.
- **Warm White Panel**: Content panels, image frames, and elevated surfaces in the light theme. It is close to white but not sterile.
- **Charcoal Panel**: Content panels and elevated surfaces in the dark theme.
- **Dossier Ink**: Primary text color. Use `text` and `dark-text` for names, headings, selected tabs, and any sentence that carries hiring signal.
- **Technical Body Ink**: Secondary body color. Use `soft-text` and `dark-soft-text` for summaries and supporting detail.
- **Metadata Gray**: Muted metadata color. Use `muted` and `dark-muted` for dates, nav defaults, category headings, and labels.
- **Quiet Gray**: Lowest-emphasis readable text and separators. Use `quiet` and `dark-quiet` sparingly.
- **Rule Line**: Thin structural divider. Use `line` for light boundaries and `line-strong` where adjacent panels need clearer separation.

### Named Rules

**The Scarce Signal Rule.** Teal is for actions, focus, section state, and proof marks. Do not spread it across backgrounds just to make a section feel branded.

**The Paired Theme Rule.** Every light token has a dark counterpart. New UI must preserve the same role in both themes instead of inventing a one-off dark style.

## 3. Typography

**Display Font:** Host Grotesk, with sans-serif fallback  
**Body Font:** Host Grotesk, with sans-serif fallback  
**Label/Mono Font:** JetBrains Mono, used only for compact fallback marks and technical identifiers

**Character:** Host Grotesk gives the portfolio a direct engineering voice: dense, readable, and confident under heavy weights. JetBrains Mono is a small utility voice, not the identity.

### Hierarchy

- **Display** (900, `clamp(3.25rem, 8vw, 5rem)`, `0.95`): Hero name only. Keep the line length capped near 11em and use balanced wrapping.
- **Headline** (500, `clamp(2rem, 4.7vw, 3.45rem)`, `1.02`): Hero supporting statement. It should feel quieter than the name but still substantial.
- **Section Heading** (900, `30px`, tight line-height): Main section titles and active tab labels.
- **Title** (900, `22px`, tight line-height): Project, experience, and education names.
- **Body** (400-500, `14px` to `20px`, `1.6` to `1.7`): Summaries, bullets, and evidence. Keep long prose below 75ch.
- **Label** (700-900, `11px` to `14px`, slight negative or normal tracking): Navigation, chips, dates, badges, and compact actions.
- **Mono** (900, `12px`, `1`): Logo fallback initials only.

### Named Rules

**The Evidence Weight Rule.** Heavy type belongs on names, section titles, and concrete proof. Do not use bold weight to make vague copy sound important.

**The Mono Restraint Rule.** JetBrains Mono is a fallback and identifier tool. Do not use monospace as lazy shorthand for technical credibility.

## 4. Elevation

The system is flat by default and uses tonal layering, borders, and one restrained header shadow for depth. Surfaces are separated by 1px rules, translucent panels, and tiny gaps that expose the divider color. Shadows are stateful or structural, not decorative.

### Shadow Vocabulary

- **Surface Low** (`box-shadow: 0 8px 16px rgba(21, 24, 26, 0.05)`): Generic `.surface` lift. Use only when a surface must sit above the page field.
- **Header Scroll** (`box-shadow: 0 8px 24px rgba(21, 24, 26, 0.06)`): Sticky header lift after scroll.

### Named Rules

**The Rule-First Depth Rule.** Start with a line, a tint shift, or a one-pixel gap. Add shadow only when the surface actually needs to float.

## 5. Components

### Buttons

- **Shape:** Square, no corner radius (`0`). Buttons should feel engineered and decisive.
- **Primary:** Signal Teal background, Accent Ink text, `48px` height, `20px` horizontal padding, medium icon gap, semibold label.
- **Hover / Focus:** Primary buttons deepen to Deep Signal Teal. Secondary buttons keep their panel fill and shift border/text toward Signal Teal. Focus uses a 2px Signal Teal outline with 3px offset.
- **Secondary / Ghost / Tertiary:** Secondary actions use a 1px Rule Line border with panel fill. Text links use no box, just strong type, Signal Teal, and an arrow translate on hover.

### Chips

- **Style:** Square chip blocks, Cool Chip background, Technical Body Ink text, compact padding (`6px 10px`), and bold small labels.
- **State:** Chips are informational by default. Status pills may use `rounded-full` only when the content is a compact state such as "Now" or a GPA badge.

### Cards / Containers

- **Corner Style:** Square (`0`). Do not round cards.
- **Background:** Translucent panel fill (`panel-soft`) sitting over a divider field (`line-strong`) for one-pixel row separation.
- **Shadow Strategy:** No card shadow at rest. Use color and line structure for grouping.
- **Border:** Image frames and header controls use 1px `line-strong`; project rows use stacked panel blocks over `line-strong`.
- **Internal Padding:** `20px` on mobile, `24px` on larger screens.

### Inputs / Fields

This portfolio does not currently ship form inputs. If a field is added, build it like the secondary button: square, 1px `line-strong` border, panel fill, `48px` minimum height, clear focus outline, and no placeholder text below WCAG AA contrast.

### Navigation

Desktop navigation uses compact lowercase labels, bold weight, muted text, and an animated Signal Teal underline that scales from the leading edge. The sticky header uses a translucent theme-aware background with backdrop blur and adds the Header Scroll shadow only after scrolling. Mobile navigation opens as a row-collapsing panel with line-separated links and arrow affordances.

### Theme Toggle

The theme toggle is an icon-only square control (`44px`). The sun/moon icon animates internally using the shared exponential easing. The switch state is exposed with `role="switch"` and `aria-checked`.

### Project Rows

Project rows are full-width evidence blocks, not marketing cards. The title, period, summary, tech chips, and optional thumbnail all sit in a single scan path. Hover may reveal the arrow and slightly scale the thumbnail, but the content remains readable at rest.

## 6. Do's and Don'ts

### Do:

- **Do** preserve the recruiter-first dossier structure: role, proof, work history, and project evidence must stay immediately scannable.
- **Do** use Signal Teal only for actions, focus, active states, proof markers, and scarce emphasis.
- **Do** keep cards square, flat, and separated by one-pixel rules or tonal fields.
- **Do** maintain both light and dark theme token pairs for every new visual role.
- **Do** use project screenshots, logos, and profile imagery as evidence. Imagery should show real work or real identity.
- **Do** keep motion purposeful: hero entrance, tab swap, navigation underline, icon morphs, and hover feedback.

### Don't:

- **Don't** make it look like a generic SaaS landing page.
- **Don't** make it look like an academic resume page.
- **Don't** make it feel like a static CV copied into a website.
- **Don't** add rounded marketing cards, large rounded icons above headings, or repeated feature-grid templates.
- **Don't** use gradient text, decorative glassmorphism, colored side-stripe borders, or soft shadow plus border ghost cards.
- **Don't** add tiny uppercase tracked eyebrows above every section. Section titles should carry their own weight.
- **Don't** use monospace as a broad technical style. JetBrains Mono is reserved for compact identifiers and fallback marks.
- **Don't** dilute hiring signal with vague marketing copy. Show evidence before adjectives.
