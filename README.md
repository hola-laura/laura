# Laura’s portfolio

A static website: HTML for content, CSS for design, and small JavaScript files for interactions. There is no build step or package installation.

## Run locally

From this repository’s folder:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/ and refresh after saving changes. Use the local server rather than opening the HTML file directly, so external SVG references load correctly.

## Where to edit

- **Homepage copy, project cards and contact details:** `index.html`.
- **Colours, typography, navigation and shared layout:** the `:root` tokens and relevant sections in `styles.css`. Change existing rules instead of adding competing overrides at the bottom.
- **Title typeface:** `headings.css`, loaded last on every page. It applies Libre Baskerville to all titles from one rule; the font itself is requested in each page's Google Fonts link.
- **Laura wordmark:** `assets/laura-wordmark.svg`.
- **Illustrations:** `assets/doodles/`. The navigation and hero reuse the same `flower.svg#drawing`, so one artwork edit updates both. These SVGs also work as standalone images; their `--doodle-*` properties let inline `<use>` instances inherit the site palette.
- **Garden appearance:** `garden.css`. Only the homepage loads this stylesheet.
- **Garden artwork:** `assets/garden-flowers.svg`. Each `plant-*` symbol contains a full plant and reuses a `garden-*` flower head plus shared glass gradients.
- **Garden species and placement:** the five `.garden-seed` buttons in `index.html`. Each button holds the flower name, SVG reference, position, height and lean. Keep `data-flower` and the visible flower name in sync. When adding seeds, also update the introductory copy, accessible labels and spacing.
- **Garden interaction:** `little-garden.js`. Counts come from the seed buttons; reset copy comes from the original HTML. Completion messages live in this script.
- **Flower wobble:** `flower-motion.js`, attached to `.signature-flower`. Colour changes are CSS; movement uses a short spring animation and respects reduced motion.
- **Occasional doodle visitors:** `doodle-surprises.js`, with appearance styles in `styles.css`.
- **Shared cursor, scroll reveals and card tilt:** `script.js`.

## Languages

English is the text in the HTML. Spanish lives in `i18n-es.js`, keyed by the English it replaces, and `i18n.js` swaps it in across every page. If you change English copy, update the matching key there or that text stays in English. The switch is the `.lang-pill` on the homepage, styled in `i18n.css`. Product mockups stay in English on purpose.

## Case studies

Each `case-study*.html` file contains its own story. They load `styles.css`, then `case-study.css`, and a matching page-specific stylesheet where needed. `case-study.js` handles their interactive demonstrations.

`case-study.html` is the original Accepting Recs story. `case-study-accepting-recs.html` is its separate research-to-delivery version; both are linked from the homepage.

Navigation and footers are currently plain HTML repeated across pages. For a site this size, keep that arrangement and update shared copy consistently. If the portfolio grows substantially, extracting these into templates would be a useful next step.

## Before sharing an update

1. Check the homepage at desktop and phone widths, including project cards and contact links.
2. Open the flower’s garden; grow every seed, plant again, and close with Escape. Check that focus returns to the flower.
3. Try flower hover and a project-image hover; doodles should disappear and never block links.
4. Open the case studies and check their navigation and relevant interactive examples.
5. Check keyboard navigation and the system’s reduced-motion setting when changing animation code.
6. Run `git diff --check` and `node --check` on any edited JavaScript file before committing.

## Coming-soon projects (UX tarot)

Project cards marked `coming-soon-card` on the homepage open `case-study-financial-health.html` or `case-study-bizum.html`. Those pages show the UX tarot instead of a case study.

- `ux-tarot.js`: the game (situation, draw three cards, read). It draws the geometric card art and follows the site language through `I18n.lang`.
- `ux-tarot-cards.js`: the deck. Each card has a suit, English and Spanish text (name, advice, warning, something to try this week) and its art. To add a card, add one entry; the card count updates by itself.
- `ux-tarot.css`: styles, using the portfolio tokens from `styles.css`.

When a project gets its full case study, point its homepage card to the real page and remove `coming-soon-card`.

## What is in the folder

- `index.html`: the homepage. Comments mark each section.
- `case-study-*.html`: one page per project. `case-study.html` only redirects the old Accepting Recs link.
- `styles.css`, `case-study.css`, `case-layout.css`, `headings.css`: shared styles. Other `.css` files belong to one page or project; the first lines of each file say which.
- `script.js`, `i18n.js`, `i18n-es.js`: shared behaviour and the Spanish text.
- `assets/`: images. Before adding images, resize and use `.webp` where possible; unused images are not removed automatically, so delete the ones a page stops using.

## Fonts and publishing

The portfolio uses Google Fonts with system fallbacks. Monzo Sans is used by some product mockups, with a fallback when the files are unavailable. Its proprietary files are intentionally ignored by Git; keep them out of commits.

The repository is `hola-laura/laura`. Local edits become part of the GitHub version only after committing and pushing them. Project-level Codex preferences live separately in `.codex/config.toml`; they do not affect the website.

## Mortgage case study: iPhone frame and motion
- `mortgage-device.css`: the iPhone 16 Pro frame (`.mg-bz`) used by every app screen, plus the small animations (all behind `prefers-reduced-motion`).
- `mortgage-motion.js`: scroll reveals, count-up numbers. Pure decoration; the page works without it.
- `assets/mortgages/*-screen.png`: screens cropped without their old phone frame.
