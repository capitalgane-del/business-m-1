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
   - `testimonialsHeading` / `testimonials[]` — each has `quote`, `author`, `stars` (1-5).
   - `galleryHeading` / `gallery[]` — placeholder hatch blocks by default; swap in real `<img>` tags per client once they send real photos (real photos beat stock).
   - `contactHeading`, `formButtonText`.
   - `web3formsKey` — get a key from https://web3forms.com for the client (or use your own key and forward leads manually — decide per client).
   - `colours.primary` / `colours.secondary` — CSS variables driving the whole palette; pick per-trade, not generic.

3. That's it — everything below the `content` object (styles, DOM, form handler) renders from that data and shouldn't need edits for a standard reskin.

## Notes

- No build step — it's a single static HTML file.
- Contact form posts to Web3Forms (client-side fetch, no backend needed).
- Mobile breakpoint at 640px; tap targets kept ≥44px per iOS/Android guidelines.
