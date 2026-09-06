# GROK.md — ROIClear.com project memory

This file is for Grok and future coding sessions.
It is not part of the public website.

Location: `.github/GROK.md`
Keep it on the production branch (`gh-pages`).
Do not put this file in the site root. A root `GROK.md` would be served at https://ROIClear.com/GROK.md.

Repo: https://github.com/bridgetownpartners/ROIClear
Live site: https://ROIClear.com
Owner: Ray Hightower

Production branch: `gh-pages` (GitHub Pages)
Typical working branch: `feature/...` then merge to `gh-pages`
Ray often deletes feature branches after merge. That is why this file lives on `gh-pages` inside `.github/`.

When starting a new thread:
1. Read this file first.
2. Pull fresh files from `gh-pages` (and the current feature branch if one exists) before recommending full-file replacements.
3. Always deliver complete files, never diffs, unless Ray asks otherwise.
4. Do not overwrite Ray’s manual `<br>` tags unless he asks.
5. Bump the CSS cache buster in `index.html` when CSS changes.

---

## What ROIClear is

ROIClear buys and improves multifamily investment properties.
The site is a professional one-page investor landing page and podcast hub.

Core message:
- Attract investors who share a long-term vision
- Capital preservation, tax advantages, and strong ROI
- Access is through the Investor Portal
- The ROIClear Podcast celebrates capitalism and business leaders
- Partnerships matter (AZMM, Family Office Club)

Brand rules:
- The company name is always **ROIClear** with no space
- “ROI Clear” appears only as an intentional SEO misspelling hyperlink to https://ROIClear.com
- Wrap visible occurrences of the name in `<span class="brand">ROIClear</span>`
- Brand font: `"American Typewriter", "Courier New", Courier, monospace`

Investor Portal:
https://roiclear.cashflowportal.com

Podcast:
- YouTube: https://www.youtube.com/@ROIClear
- Apple: https://podcasts.apple.com/us/podcast/roiclear-with-ray-hightower/id1593774119
- Spotify: https://open.spotify.com/show/00WhNSTd2l64ojVhf6GEff
- Rumble: https://rumble.com/user/ROIClear

Ray personal:
- Site: https://RayHightower.com
- X: https://x.com/RayHightower
- LinkedIn: https://www.linkedin.com/in/rayhightower/

Related pattern:
- RayHightower.com is a Jekyll site. There, `GROK.md` can live in the repo root because `_config.yml` excludes it from the published site.
- ROIClear.com is a plain static GitHub Pages site. Jekyll exclude will not hide a root file. Use `.github/GROK.md` instead.

---

## Repo / file map
index.html
css/styles.css
js/sticky-header.js
images/
  ROIClear_logo_400.png
  hero-bg.jpg
  azmm_logo.png
  family_office_club_logo.jpg
assets/
  youtube-black-white.svg
  rumble-logo-bw.png
  apple-podcasts.png
  spotify-black-logo.png
  favicons/
.github/
  GROK.md

Static HTML/CSS/JS. No build step. Hosted on GitHub Pages from `gh-pages`.

---

## Design system

CSS variables in `css/styles.css`:

- `--black: #0a0a0a`
- `--green: #1a7a4c`          /* Investor Portal button + body links */
- `--green-hover: #14603c`
- `--light-bg: #e8f0e9`       /* alternating section green */
- `--white: #ffffff`
- `--max-width: 640px`        /* section / video column */
- `--text-width: 480px`       /* 75% of video width for paragraphs only */

Layout rules:
- Videos stay 640px wide
- Body paragraph text is 480px (75% of video width)
- Headings stay on one line on desktop (`white-space: nowrap`)
- Headings may wrap on small screens
- Headings use a short centered green underline (`h2::after`)
- Hero has no Investor Portal button
- Header keeps the green Investor Portal button plus hamburger on mobile
- Footer is full width and centered
- Footer social icons: X, LinkedIn, YouTube only
- X footer link is Ray’s personal account (`https://x.com/RayHightower`), not @ROIClear
- Facebook and Instagram were intentionally removed from the footer
- Next Steps section background is white, not green
- Alternating sections: white / light green / white / light green / white
- iPad header uses `env(safe-area-inset-top)` so Safari chrome does not cover it

Section headings:
- Investors → Long-Term Vision
- Podcast → Celebrating Capitalism
- Partnerships → Achieving More
- In Summary...
- Next Steps

Use arrows (`→`), not colons.

---

## Workflow rules Ray prefers

1. Pull the latest files from GitHub before every full-file delivery.
2. Always return the entire file.
3. Ray may edit text and `<br>` tags locally. Preserve those unless asked.
4. Cache buster lives on the stylesheet link:
   `<link rel="stylesheet" href="css/styles.css?v=YYYYMMDD">`
   Bump it whenever CSS changes.
5. Feature work happens on a feature branch, then merges to `gh-pages`.
6. Live site is `gh-pages`. GitHub Pages / CDN can lag 30 seconds to several minutes.
7. Raw GitHub and the live site can temporarily disagree. Check both if something looks stale.

Preferred `<br>` usage:
- Use `<br>` not `<br/>`
- Use only for exact rhetorical / emotional line breaks
- Do not rely on `<br>` just to fake column width

---

## Important product / copy notes

Hero:
- “ROIClear buys and improves multifamily investment properties.”
- No CTA button on the photo

Investors copy:
- “We attract investors…” not “We partner with investors…”
  That wording change is intentional and important.

Podcast copy should keep the capitalism / business-leader tone.

Footer SEO line:
- “ROI Clear” and “ROIClear” both link to https://ROIClear.com
- Motivation: capture the misspelled spaced version

---

## Performance notes (HubSpot Website Grader, Aug 2026)

Overall score: 94

- Performance: 24/30
- SEO: 30/30
- Mobile: 30/30
- Security: 10/10

Problems to improve later:
- Page size about 3.1 MB (target under 3 MB)
- HTTP requests about 46 (target under 30)
- Image Size failed

Likely largest culprit:
- `images/hero-bg.jpg`

Recommended next performance work:
1. Measure actual hero image dimensions and file size
2. Compress / convert hero to WebP with JPEG fallback
3. Add responsive hero variants if needed
4. Compress partner logos
5. Reduce extra asset requests
6. Keep Font Awesome only if footer icons still need it

Do not lazy-load the hero image.

---

## Known working decisions

- Font Awesome 6.5.1 CDN for footer icons (`fa-x-twitter`, `fa-linkedin`, `fa-youtube`)
- Non-square FA icons were more reliable than square variants
- Podcast platform logos stay under the podcast video
- Sticky header: logo left, nav + Investor Portal right, hamburger on mobile
- Green header button must remain visible on mobile with the hamburger
- American Typewriter on `.brand` only, not the whole page

---

## How Grok should work in future threads

- Be precise and practical
- Teach while changing files
- Prefer complete replacement files
- Confirm branch before assuming the live site matches source
- Ask Ray before rewriting copy
- Protect rhetorical line breaks
- Keep the site conservative and investor-grade, not flashy

