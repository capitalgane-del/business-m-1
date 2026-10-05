# Move Mate Removals and Storage

Site: `templates/website-template/index.html` on the `move-mate` branch. Netlify (`ganeworks-website`) publishes that folder, so the branch preview is **https://move-mate--ganeworks-website.netlify.app/**. These notes sit outside the published folder so they stay off the live site. `main` keeps the clean scaffold. Status: cold-pitch preview (`sample: true`, `noindex`).

## What we know (and where from)

| Fact | Source |
| --- | --- |
| Name "Move Mate Removals and Storage", 0422 394 487, info@movematetransport.com.au, Fyshwick ACT, Facebook page 100063579248762 | Jett |
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

**Deliberately left out**: insurance, prices, free quotes, response times, years in business, reviews, ratings, team size, truck sizes, packing service, service area. Each has a commented-out placeholder in the `content` object.

## Placeholders to fill (all in the `content` object)

- [ ] `logo` and `colours`: no logo was in the repo, so it uses a text wordmark plus placeholder navy `#14365A` and amber `#F5A524`. Upload the logo to `images/`, set `logo`, sample its HEX codes into `colours`. Then re-render `images/og-image.jpg` and `images/favicon.svg`, which use the same placeholder colours.
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
- [ ] At launch: real domain in `siteUrl`, the static `og:url` and `og:image`, delete `<meta name="robots" content="noindex">`, set `sample: false`, self-host fonts and icons.

## Design notes

- Images are SVG illustrations (`images/placeholder-truck.svg`, `images/placeholder-boxes.svg`), drawn for this site: an unbranded white truck and kraft boxes. Stock photo hosts were blocked during the build. Illustrations also can't be mistaken for their own truck or depot, which a stock photo of a branded truck could be. Generated by a small script, so it's easy to redraw them in the real brand colours.
- The hero illustration loads eagerly with high priority (it is above the fold). Everything below the fold lazy-loads.
- `images/og-image.jpg` (1200 x 630) is the link preview when the URL is texted or shared.
- Contrast was measured in light and dark mode: body text 6:1 or better, input borders 3.9:1, call button text 8.8:1.

## Changes from the scaffold on main

- Static `<title>`, description and Open Graph tags in `<head>` (link previews don't run JavaScript), plus a console warning if they drift from `content`.
- `robots` noindex, SVG favicon, MovingCompany JSON-LD built from `content.schema` (empty fields left out), with the services as an offer catalogue.
- Icons load as CSS links, not the Phosphor JS loader (that loader's global `head` breaks the renderer: same fix as Dutchies). Fonts and icons load without blocking first paint, and icon slots reserve their space so nothing shifts.
- Hero: text paints immediately (no fade-in), illustration slot (`heroVisual`) when there is no photo, eyebrow line, call button shows the number, "Prefer to text?" link.
- Trust bar turned into a facts bar (`facts[]`), since there are no ratings or trust claims to show. `rating` still works when uncommented.
- Services: icon cards instead of photo tiles, plus an optional call-to-action card (`servicesCta`) that fills the last grid cell.
- New storage feature section (`storage`).
- Form built from `content.form.fields` (rows, selects, date, radio and checkbox groups with fieldset and legend). It adds a preview mode, a status area screen readers announce, and a plain error message.
- Quote buttons jump straight to the form card, not the section intro. The mobile call bar slides away while someone is typing in the form.
- Skip link, `<main>` landmark, numbered steps as an ordered list, FAQ (native details/summary), footer links and "Preview prepared by Ganeworks" credit.
- Scroll reveal shortened (0.45s) and never applied to the hero or the form.
