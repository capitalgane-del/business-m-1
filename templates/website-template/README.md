# Website template

Single-file HTML template for small local-business/trade websites (plumber, electrician, cafe, cleaner, etc.).
Reskinning a client = editing the `content` object in `index.html` (top `<script>` block). Nothing else should need touching for a normal reskin.

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
   - `web3formsKey` — get a key from https://web3forms.com for the client (or use your own key and forward leads manually — decide per client).
   - `colours.primary` / `colours.secondary` — CSS variables driving the whole palette; pick per-trade, not generic.
   - `colours.bg` — optional page background. Omit it for the near-neutral default; set it when the brand is dark or warm and the default reads cold against it. Keep it light (body ink is a fixed dark value) and check it against `colours.primary`, which is the tightest pairing since links use it.

3. That's it — everything below the `content` object (styles, DOM, form handler) renders from that data and shouldn't need edits for a standard reskin.

## Notes

- No build step — it's a single static HTML file.
- Images (logo, hero, gallery) are inlined as base64 `data:` URIs so that stays true — `index.html` is the only file to ship. The cost is page weight: crop each photo to the aspect ratio its slot actually renders at and compress it before inlining, rather than dropping in camera-resolution originals. Gallery tiles render around 250px wide, so ~640px sources are already retina. Keep the originals in the repo root as the source of truth.
- Contact form posts to Web3Forms (client-side fetch, no backend needed).
- Mobile breakpoint at 640px; tap targets kept ≥44px per iOS/Android guidelines.
