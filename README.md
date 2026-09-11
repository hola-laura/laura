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
- **Laura wordmark:** `assets/laura-wordmark.svg`.
- **Illustrations:** `assets/doodles/`. The navigation and hero reuse the same `flower.svg#drawing`, so one artwork edit updates both. These SVGs also work as standalone images; their `--doodle-*` properties let inline `<use>` instances inherit the site palette.
- **Garden appearance:** `garden.css`. Only the homepage loads this stylesheet.
- **Garden artwork:** `assets/garden-flowers.svg`. Each `plant-*` symbol contains a full plant and reuses a `garden-*` flower head plus shared glass gradients.
- **Garden species and placement:** the five `.garden-seed` buttons in `index.html`. Each button holds the flower name, SVG reference, position, height and lean. Keep `data-flower` and the visible flower name in sync. When adding seeds, also update the introductory copy, accessible labels and spacing.
- **Garden interaction:** `little-garden.js`. Counts come from the seed buttons; reset copy comes from the original HTML. Completion messages live in this script.
- **Flower wobble:** `flower-motion.js`, attached to `.signature-flower`. Colour changes are CSS; movement uses a short spring animation and respects reduced motion.
- **Occasional doodle visitors:** `doodle-surprises.js`, with appearance styles in `styles.css`.
- **Shared cursor, scroll reveals and card tilt:** `script.js`.

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

## Fonts and publishing

The portfolio uses Google Fonts with system fallbacks. Monzo Sans is used by some product mockups, with a fallback when the files are unavailable. Its proprietary files are intentionally ignored by Git; keep them out of commits.

The repository is `hola-laura/work`. Local edits become part of the GitHub version only after committing and pushing them. Project-level Codex preferences live separately in `.codex/config.toml`; they do not affect the website.
