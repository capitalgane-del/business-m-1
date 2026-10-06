# Move Mate Removals and Storage

Site: `index.html` (plus `images/` and `fonts/`) at the root of the `move-mate` branch, the same layout as `main`. The branch preview is **https://move-mate--ganeworks-website.netlify.app/**. Netlify publishes the whole repo, so `_redirects` returns 404 for `/clients/*`, `/CLAUDE.md` and `/README.md` to keep these notes off the preview link. The branch is called `move-mate` (not `client-move-mate` as CLAUDE.md asks) because Jett asked for that name. `main` keeps the clean scaffold. Status: cold-pitch preview (`sample: true`, `noindex`).

## What we know (and where from)

| Fact | Source |
| --- | --- |
| Name "Move Mate Removals and Storage", 0422 394 487, info@movematetransport.com.au, Fyshwick ACT, Facebook page 100063579248762 | Jett |
| Logo: white "MOVE" (a road runs through the O) and gold "MATE" on warm black, "REMOVALS • STORAGE" underneath | Jett's upload, kept at the repo root (`759330346_…_n.jpg`, 960 x 960) |
| Services: "Local Relocations, Interstate Relocations, Commercial Relocations, Property Staging Solutions, Storage facility Solutions" | Their Instagram bio (@movematetransports, "Move Mate Transports", 57 followers), read through search results |
| No website: `movematetransport.com.au` does not resolve (no DNS) | Checked October 2026 |

Not found anywhere: reviews, a rating, a Google Business Profile, ABN, opening hours, service area, insurance, prices, years in business, photos. Facebook, Instagram and the ABN register were blocked during research, so all of these are worth one look from your phone.

### Name clashes (read before you pitch)

- **Moving Mates** (Throsby ACT, movingmates.com.au, 1300 654 187 / 6411 9277) is a separate, established Canberra removalist with hundreds of reviews. Nothing from them is on this site. A customer searching "move mate canberra" will likely land on them first. That is a real selling point for this site plus a Google Business Profile.
- **Move Mate Movers** (movematemovers.com.au) and **The Move Mate Movers** (Gold Coast) are unrelated interstate companies.
- Their own names differ: Instagram says "Move Mate Transports", the email domain says "movematetransport", Facebook (per Jett) says "Move Mate Removals and Storage". Ask which one they want on the site and on Google.

## Copy audit

**Their facts** (Jett or Instagram): business name, phone, email, Fyshwick, the five service names, "storage solutions", Facebook and Instagram links.

**Their facts, our wording**: page title, meta description, hero line ("Local, interstate and commercial moves, plus storage. Based in Fyshwick, ACT."), facts bar, contact checklist, FAQ answers, footer line.

**Inferred, confirm with the client**
- "Canberra" in the headline and "around Canberra" for local moves: from local relocations plus a Fyshwick base.
- "Moving out of the ACT, or into it" for interstate.
- Property staging = "furniture moved in and out of homes being styled for sale or rent". Their bio just says "Property Staging Solutions". They might also supply the furniture.
- Offering "text us" on the mobile number.
- Instagram account is theirs (name, email domain and services match).

**Ours, no facts in them**: section headings, "How it works" steps, form labels and messages, the storage paragraph ("Settlement dates do not always line up..."), "Not sure what you need?" card.

**Deliberately left out**: insurance, prices, free quotes, response times, years in business, reviews, ratings, team size, truck sizes, packing service and a confirmed service area (the page only infers "around Canberra", see above). Insurance, prices, packing, reviews, rating and service area have commented-out placeholders in `content`. Free quotes, response times, years in business, team size and truck sizes have none: add them only once the client states them.

## Placeholders to fill (all in the `content` object)

- [ ] Original logo file (SVG, AI or PDF) from whoever designed it. The site's copy is cut from a 960px social graphic, so it's slightly soft on big retina screens. Swap it into `images/move-mate-logo.webp` / `.png` at the same proportions.
- [ ] `heroImage`: one real photo of their truck or crew (Facebook). Setting it swaps out the illustration.
- [ ] `storage.image`: a photo of their storage, or delete the line to drop the illustration.
- [ ] `web3formsKey`: sign up at web3forms.com with the inbox that should get leads. Until then the form says it's a preview and sends nothing.
- [ ] `hours` (footer) and `schema.openingHours`
- [ ] `areas` / `areasHeading` and `schema.areaServed`: service area unconfirmed
- [ ] `rating`: Google rating, once they have a Business Profile with reviews
- [ ] `reviews`: real ones only
- [ ] Insurance fact in `facts` plus the FAQ: only if confirmed, with the insurer named
- [ ] FAQ placeholders: price/rate model, how far ahead to book, boxes and packing materials, packing and unpacking
- [ ] `schema.streetAddress`, `schema.logo`, `schema.priceRange`, `schema.image` (a real photo)
- [ ] `services[]` descriptions: confirm property staging and storage details. Optional `image` per card.
- [ ] Which business name to use (see name clashes)
- [ ] Whether they take texts. If not, see the `smsHref` comment: it lists every string that offers texting.
- [ ] Whether they take small jobs ("A few items" in the form).
- [ ] At launch: real domain in `siteUrl`, the static `og:url` and `og:image`, and `schema.logo` / `schema.image`; delete `<meta name="robots" content="noindex">`; set `sample: false`. Fonts and icons are already self-hosted.

## Design notes

The whole site is built from their logo:

| Item | Value | Source |
| --- | --- | --- |
| Black (page, hero, header) | `#140B06` | The logo's background, sampled |
| Gold: `colours.primary`, the one accent (buttons, icons) | `#C69548`, flat | "MATE", sampled (range `#B07734` to `#DA9E48`) |
| Small gold text on black (`primaryText`) | `#D9A75A` | The same gold, nudged brighter so small text stays readable |
| White | `#FCFBFB` | "MOVE", sampled |
| Bands and cards | `#1C120B`, `#251810`, footer `#0C0603` | Lifted and deepened shades of the logo black |
| Type | Outfit (template font), 400 to 800 | CLAUDE.md: one family; the logo font itself is unknown |
| Favicon / home-screen icon | The road-in-the-O, cut from the logo | `images/favicon-32.png`, `favicon-48.png`, `apple-touch-icon.png` |

- Always dark, whatever the phone's light/dark setting: Jett asked for "a lot of black", and the logo's white lettering disappears on white, so a light theme would need a different logo version.
- The logo sits in the sticky header on every screen with the call button beside it (CLAUDE.md: phone always reachable in the header), and again in the footer, the link preview and the home-screen icon. The hero is the headline, one sentence and the two buttons, with the truck placeholder beside or below.
- `images/move-mate-logo.webp` (47 KB, used on the page) and `.png` (transparent, used for the schema logo and the link preview).
- Images are SVG illustrations (`images/placeholder-truck.svg`, `images/placeholder-boxes.svg`), drawn for this site in the logo's palette: a cream truck with a gold stripe and black running gear, and kraft boxes with a brass lamp. No name or logo on the truck. Stock photo hosts were blocked during the build. Illustrations also can't be mistaken for their own truck or depot, which a stock photo of a branded truck could be. Generated by a small script. They sit on the black with a soft gold glow behind them.
- The logo is preloaded and fetched with high priority (it leads the hero). Everything below the fold lazy-loads.
- `images/og-image.jpg` (1200 x 630) is the link preview when the URL is texted or shared: logo, headline, phone and truck on black.
- Contrast (measured on the real colours): body text 18.8:1, grey text 6.9:1 or better, small gold text 6.5:1 or better, text on the gold buttons 6:1, input borders 3.5:1 or better, gold focus ring 5:1 or better.
- Self-contained: fonts (Outfit 400 to 800, OFL licence in `fonts/`) and icons (inline SVG paths) are served with the site. The page makes no third-party requests, and the two fonts and the logo used on the first screen are preloaded.

## Changes from the scaffold on main

- Static `<title>`, description and Open Graph tags in `<head>` (link previews don't run JavaScript), plus a console warning if they drift from `content`.
- `robots` noindex, favicons, MovingCompany JSON-LD built from `content.schema` (empty fields left out), with the services as an offer catalogue.
- Self-hosted fonts and inline SVG icons instead of Google Fonts and the Phosphor CDN (about 300 KB of icon fonts down to 15 KB of paths; the CDN loader's global `head` also broke the renderer on main). No layout jump when the fonts arrive: the headline width is set in em, not ch.
- `content.colours` keys map straight to CSS variables (`--c-primary`, `--c-black`, ...), so a re-skin is one object.
- Logo in the sticky header (`logo`), illustration slot (`heroVisual`) when there is no hero photo, hero call button shows the number. Text paints immediately (no fade-in).
- Trust bar turned into a facts bar (`facts[]`), since there are no ratings or trust claims to show. `rating` still works when uncommented.
- Services: icon cards instead of photo tiles, plus an optional call-to-action card (`servicesCta`) that fills the last grid cell.
- New storage feature section (`storage`).
- Form built from `content.form.fields` (rows, selects, date, radio and checkbox groups with fieldset and legend, and a `more` panel for optional fields that opens itself if a field inside needs fixing). Preview mode while there is no Web3Forms key. After sending, the thank-you or error is scrolled into view and announced; focus moves to the thank-you.
- Quote buttons jump straight to the form card, not the section intro. The mobile call bar slides away while someone is typing in the form. `scroll-padding` keeps anything scrolled to or tabbed to clear of the header and the call bar.
- Skip link, `<main>` landmark, footer headings as h2, `role="list"` on styled lists (Safari/VoiceOver drops list semantics otherwise), FAQ (native details/summary, the "+" kept out of each question's spoken name), footer links and "Preview prepared by Ganeworks" credit.
- Ratings and review stars are drawn from the real score (4.6 = four and a half, never rounded up); reviews show stars only when the star count is recorded, and empty reviews are skipped.
- Each optional section renders on its own (`block()`), so one bad content edit drops that section, never the form, footer or call bar.
- Safe-area padding for notched iPhones in landscape, a `color-mix()` fallback for older Safari, and Windows high-contrast support (logo keeps its black plate, buttons get borders).
- Scroll reveal shortened (0.45s) and never applied to the hero or the form.

## CLAUDE.md rules not met (and why)

`main` gained CLAUDE.md (house build rules) while this site was being built. The site now follows it, except where Jett's own instructions say otherwise (CLAUDE.md: the chat instruction wins and the broken rule is listed).

| Rule | What the site does | Why |
| --- | --- | --- |
| Branch `client-<slug>` | Branch is `move-mate` | Jett asked for `move-mate` |
| Light by default, dark follows the device | Always dark | Jett: "use that colour scheme, a lot of black" |
| Short form: name, phone, message | Name, mobile, from, to, size, date, storage, flexible dates, plus an optional panel (contact preference, email, stairs, notes). Only four fields are required. | Jett asked for niche-specific fields |
| Real photos only, no hand-drawn SVG illustrations; hero is headline, sentence and two buttons | Two SVG placeholders (truck in the hero, boxes in Storage), labelled as illustrations | Jett asked for neutral truck and box placeholder images; stock photo sites were blocked from the build environment. Replace both with their photos. |
| JSON-LD only at go-live, real data | MovingCompany JSON-LD now, empty fields left out | Jett asked for it with placeholder fields |
| "Website by Ganeworks" only if the client agreed | "Preview prepared by Ganeworks" in the footer | Jett asked for that line |
| Secondary CTA "Get a Free Quote" | "Get a quote" | "Free" isn't confirmed by the client |
| List the suburbs a trade services | No areas section | Service area unconfirmed (placeholder in `content`) |
| Hours and ABN in the footer | Not shown | Not found; placeholders in `content` |
