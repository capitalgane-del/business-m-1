# Website template

Single-file HTML scaffold for small local-business/trade lead-gen sites (landscaper, plumber, electrician, cleaner, etc.).
Reskinning a client = editing the `content` object in `index.html` (first `<script>` block). Everything below it renders from that data and should not need touching.

`index.html` is the **editing copy**: open it in a browser to preview while you edit. The page you deploy comes from `build.js`, which writes a fully static version with every word already in the HTML (fast, Google-friendly, link previews work, readable with JavaScript off).

## To use for a new site

1. Copy `index.html` for the new client, e.g. `kambah-landscapes.html`.
2. Edit the `content` object (details below) and preview by opening the file in a browser.
3. Build the static page (needs [Node.js](https://nodejs.org), nothing to install):

   ```
   node build.js kambah-landscapes.html
   ```

   This writes `dist/kambah-landscapes/index.html`. Deploy that file, not the editing copy. The build warns if the SAMPLE ribbon is still on, the Web3Forms key is missing, or the copy has an em dash.

## Content fields

- `sample` — `true` shows a red "SAMPLE CONTENT" ribbon. Set to `false` only when every review, photo and number is real and from the client.
- `pageTitle`, `metaDescription` — browser tab / Google search snippet.
- `businessName`, `phone`, `phoneHref` (`tel:+61...`), `email`, `address`, `hours`.
- `ctaText`, `quoteText` — button labels used across hero, mobile bar and form.
- `heroHeading` (2 lines max), `heroSub` (under 20 words), `heroImage` (`""` for a plain brand-colour hero).
- `rating` (`score`, `count`, `source`) + `trust[]` (`icon`, `value`, `label`) — the bar under the hero. Icons are [Phosphor](https://phosphoricons.com) names.
- `servicesHeading` / `servicesSub` / `services[]` (`name`, `desc`, `image`) — 3 to 8 items; the grid auto-widens cards so there are no gaps.
- `workHeading` / `workSub` / `beforeAfter[]` (`before`, `after`, `caption`) / `gallery[]` (`image`, `alt`) — delete both arrays to hide the section.
- `reviewsHeading` / `reviews[]` (`quote`, `author`, `meta`) — first one is shown large (keep it under 90 characters). Real Google reviews only, or delete the array.
- `processHeading` / `processSub` / `steps[]` (`icon`, `title`, `text`).
- `contactHeading`, `contactSub`, `promises[]`.
- `areasHeading` / `areas[]` — suburbs served.
- `web3formsKey` — get one at https://web3forms.com for the client (or use your own and forward leads).
- `colours.primary` (brand colour) / `colours.onPrimary` (`#FAFAF8` on dark brand colours, `#15191C` on light ones).

## Copy rules

- No em dashes in the copy. Use a comma, a colon or a full stop.
- Photos: pull from the client's Facebook/Google listing. One real hero photo is the single biggest upgrade on a mockup.

## Notes

- One editing file, one built static file. The build uses only Node's standard library.
- The built page keeps a small script for the before/after slider, scroll reveal and form. The form also posts with JavaScript off.
- Fonts (Outfit) and icons (Phosphor) load from CDNs for mockups. Self-host both before final delivery.
- Contact form posts to Web3Forms (client-side fetch, no backend), with a honeypot field for spam.
- Light/dark follows the visitor's device. Motion respects `prefers-reduced-motion`.
- Sticky call/quote bar on mobile (under 768px).
