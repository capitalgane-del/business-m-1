# Website template

HTML template for small local-business/trade websites (plumber, electrician, cafe, cleaner, etc.).
Reskinning a client = editing the `content` object in `index.html` (top `<script>` block). Nothing else should need touching for a normal reskin.

`index.html` is self-contained and will work on its own. The other files in this
folder are optional extras that need real URLs and so cannot be inlined — ship
them alongside it and everything works; drop them and the page still renders.

## To use for a new site

1. Copy `index.html` and rename/deploy as needed for the new client.
2. Edit the `content` object at the top of the file:
   - `pageTitle`, `metaDescription` — browser tab / Google search snippet.
   - `businessName`, `phone`, `phoneHref` — `phoneHref` is `tel:+61...`, digits only after `tel:`.
   - `trade` — drives which icon auto-selects (matches on substring: `plumb`, `electric`, `caf`, `clean`; anything else falls back to a generic icon).
   - `suburb`, `address`.
   - `heroHeading`, `ctaText`.
   - `heroImage` — leave `""` for the default plain tinted hero. Set to an image URL to show a photo behind the hero text (a dark overlay is applied automatically for readability).
   - `servicesHeading` / `services[]`.
   - `servicesNote` — optional lead paragraph above the services list, for clients whose offering changes (no fixed menu, seasonal work, etc.). `{ text, linkText, url }`: put a `{link}` token in `text` where the link should sit, and it's built as a real anchor at render time. Keep `text` plain — it's rendered as text nodes, so HTML in it will not work (deliberately). Omit the whole object and the paragraph stays hidden.
   - `testimonialsHeading` / `testimonials[]` — each has `quote`, `author`, `stars` (1-5).
   - `galleryHeading` / `gallery[]` — placeholder hatch blocks by default; swap in real photos per client once they send them (real photos beat stock). `src` takes a URL or an inlined `data:` URI; a tile with no `src`, or whose image fails to load, falls back to the labelled hatch block rather than a broken image icon.
   - `contactHeading`, `formButtonText`.
   - `locationNote` — optional plain-English "how do I actually find you", shown above the contact form. For anywhere a street address is a poor answer (a van in a park, a unit round the back, a site with no signage). Omit it and the paragraph stays hidden.
   - `geo`, `addressParts`, `openingHours`, `priceRange` — never rendered as visible copy. These feed the JSON-LD structured data that tells Google the hours, phone and location as machine-readable facts. Omit `addressParts` and no structured data is emitted at all. Keep `openingHours` (24-hour) in step with the human-readable `hours` string.
   - `web3formsKey` — get a key from https://web3forms.com for the client (or use your own key and forward leads manually — decide per client).
   - `colours.primary` / `colours.secondary` — CSS variables driving the whole palette; pick per-trade, not generic.
   - `colours.bg` — optional page background. Omit it for the near-neutral default; set it when the brand is dark or warm and the default reads cold against it. Keep it light (body ink is a fixed dark value) and check it against `colours.primary`, which is the tightest pairing since links use it.

3. That's it — everything below the `content` object (styles, DOM, form handler) renders from that data and shouldn't need edits for a standard reskin.

## The other files in this folder

Everything here is optional. `index.html` works without them; each one covers a
gap that cannot be solved from inside a single file.

| File | Why it can't be inlined |
| --- | --- |
| `og-image.jpg` | Link previews (Facebook, WhatsApp, iMessage, Slack). `og:image` must be a real fetchable URL — scrapers will not read a `data:` URI. 1200x630. |
| `favicon.png`, `apple-touch-icon.png` | Browser tab icon and the "Add to Home Screen" icon. iOS ignores `data:` URIs for `apple-touch-icon`. |
| `404.html` | Netlify (and most static hosts) serve this automatically for unknown paths. Without it visitors get the host's generic error page. Deliberately standalone — a 404 must render even if something about the main page is broken. |
| `robots.txt` | Stops crawlers guessing. No `Sitemap:` line: a one-page site gains nothing from a sitemap, and sitemaps need absolute URLs. |

Regenerate the icons and OG image from the client's own art whenever the logo
or hero photo changes.

### Setting the production domain

`canonical`, `og:url` and `og:image` ship as **relative** paths and are upgraded
to absolute at runtime from `location.origin`. That covers everything that runs
JavaScript, Google included. **Facebook's scraper does not run JavaScript**, so
if link previews on Facebook matter, hardcode the real domain into those three
tags in `<head>` once it is known.

## Notes

- No build step — plain static files.
- Images (logo, hero, gallery) are inlined as base64 `data:` URIs, so `index.html` needs no image files to render. The cost is page weight: crop each photo to the aspect ratio its slot actually renders at and compress it before inlining, rather than dropping in camera-resolution originals. Gallery tiles render around 250px wide, so ~640px sources are already retina. Keep the originals in the repo root as the source of truth.
- Contact form posts to Web3Forms (client-side fetch, no backend needed).
- Mobile breakpoint at 640px; tap targets kept ≥44px per iOS/Android guidelines.
