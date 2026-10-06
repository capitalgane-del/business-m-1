# CLAUDE.md - Ganeworks build rules

Read this whole file before every task. It overrides your default design habits. If an instruction in chat conflicts with this file, follow the chat instruction and say which rule you broke.

---

## 1. What we build and why

- Ganeworks builds single-page websites for small local businesses in Canberra: trades, removalists, cleaners, cafes, takeaways, salons, groomers.
- The site has one job: turn a visitor on a phone into a phone call, booking or quote request. Judge every decision against that. Fonts, motion and layout cleverness come second.
- The visitor is a local customer, usually on a phone, often mid-problem (moving next week, dog needs a groom, retaining wall collapsing). They scan, they do not read. They decide in about 5 seconds whether to call.
- The client is a non-technical business owner. They care about calls, looking legitimate, and not looking worse than competitors.

---

## 2. Repo and workflow

- `index.html` is a single-file template with a `content` object at the top. All client-specific text, images, colours and settings live in `content`. The render code and CSS below it are shared across every client.
- `main` is the clean template. Never commit client content to `main`.
- One branch per client, named `client-<business-slug>` (for example `client-dutchies-removals`). Netlify auto-deploys every branch to `https://<branch>--ganeworks-website.netlify.app`. Report that URL after every push.
- Reskinning a client means editing the `content` object only. Do not touch render code or CSS unless the task explicitly asks for a layout change. If something cannot be done through `content`, stop and describe the template change needed instead of hacking around it.
- If a section has no real content, delete its array so the section hides (the template supports this). Never pad a section just so it exists.
- Template improvements (bug fixes, new optional sections) go on their own branch off `main`, and only when asked.
- The user has no local terminal. You can run commands in your own environment (grep, node, a headless browser if available). Never tell the user to run commands.
- Work in passes and commit after each one:
  1. Structure and content
  2. Brand colour and imagery
  3. Mobile check
  4. Pre-flight (section 13)
- Commit messages are short and specific: `dutchies: add services and real reviews`, not `update`.

---

## 3. Two modes. Know which one you are in.

Check `content.sample` and the task. If unclear, ask.

**Pitch mockup** (built before the business has agreed to anything)
- Uses public info only: business name, phone, suburb, services from their listings, real public Google reviews, photos from their own public Facebook or Google listing.
- Never invent reviews, ratings, years in business, licences, insurance, awards, guarantees or prices. If unknown, leave it out. A shorter honest page beats a padded fake one.
- Add `<meta name="robots" content="noindex, nofollow">` to the head. Mockups must never be indexed by Google.
- `sample: false` only when every visible claim is real public info. Otherwise `sample: true`.

**Client build** (deposit paid, assets supplied by the client)
- Use the client's own logo, photos, services, wording and reviews.
- Every claim on the page must come from the client. Unverified claims ("fully insured", "licensed", "24/7", "20 years experience") stay out until the client confirms them. Misleading claims are a legal risk for the client under Australian Consumer Law, not just a style issue.
- Remove `noindex` only at go-live on the client's real domain.

---

## 4. Before writing code: the design read

For every new client, output this first in four short lines:

1. **Design read:** "Reading this as: <category> site for <audience> in <area>, trust-first, primary action is <call / book / order / quote>."
2. **CTAs:** primary and secondary (see section 6).
3. **Brand colour:** the hex value and where it came from (logo, van, signage, shopfront, or a category choice if they have nothing).
4. **Blockers:** any missing info that stops the build. Missing nice-to-haves become TODO notes, not questions.

If the brief is clear, do not ask questions. State the read and proceed. If something genuinely changes the build, ask exactly one question.

For a layout change (not a reskin), first write a compact plan: palette as 4 to 6 hex values, type roles, and a short ASCII wireframe of the changed sections. Check the plan against section 11 (banned patterns) before building. If any part of it is what you would produce for any similar page by default, change it and say why.

---

## 5. Dials

- **Client local-business sites:** DESIGN_VARIANCE 5, MOTION_INTENSITY 4, VISUAL_DENSITY 4.
  Mostly left-aligned, a clean grid with some asymmetry (the wide service cards), standard section spacing, motion limited to one hero load sequence, one subtle scroll reveal, and hover feedback on mouse devices.
- **Concept or portfolio pieces** (only when the task says so): DESIGN_VARIANCE 7 to 8, MOTION_INTENSITY 6 to 7, VISUAL_DENSITY 3. GSAP and ScrollTrigger are allowed there. Never on client sites unless asked.

---

## 6. Conversion rules (non-negotiable)

**One obvious primary action**, used in the header, hero, mobile bar and contact section. Choose by category:

| Category | Primary CTA | Secondary CTA |
|---|---|---|
| Trades, removals, cleaning, pest, tree work | Call Now (tel: link) | Get a Free Quote (form) |
| Salons, groomers, beauty, nails | Book Now (their booking link, e.g. Fresha) | Call Now |
| Cafes, takeaways, restaurants | Call Now, or Order Now if they have an ordering link | View Menu (on-page) |

**Say what they do and where within 5 seconds.** Headline pattern: service plus area, or the specific thing that makes them different. "Removals across Canberra, from one room to the whole house" beats "Welcome to Dutchies Removals". Never "Welcome to our website".

**Phone always reachable:** in the sticky header at every screen size, tap-to-call, plus the fixed mobile bar.

**Proof next to the action:** rating, real review excerpts, real photos, awards they actually won. The trust bar sits directly under the hero.

**Real photos beat stock.** The actual owner, van, shopfront or finished work beats any polished image.

**Short form:** name, phone, message. Never add fields unless the client asks. Every extra field loses leads. Exception: removalists, where "moving from", "moving to" and an optional date replace the message box, so each enquiry arrives ready to quote.

**Page order:** hero, trust bar, services, work and photos, reviews, how it works, contact, service areas, footer. Get creative inside the sections, not with their order.

**Category specifics:**
- Food: the menu (with prices) and opening hours are the most important content after the hero. Hours must be easy to find. Use a "Get directions" link to Google Maps, not an embedded map (embeds are slow).
- Booking businesses: booking link is primary, hours visible, price list if they have one.
- Trades: list the suburbs they service. People search "<trade> <suburb>".

**Footer:** business name, phone, email, suburb, hours, ABN if provided. A small "Website by Ganeworks" credit only if the client has agreed to it.

---

## 7. Visual rules

### Locks (whole page, no exceptions)
- **One theme system:** light by default, dark follows `prefers-color-scheme`. No section flips theme mid-page. Tinted brand-colour bands are fine and are part of the template.
- **One accent:** `content.colours.primary`. It is the only accent on the page. No second highlight colour anywhere.
- **One radius:** `--r` (12px). Every corner uses it.
- **No pure `#000` or `#fff`** for backgrounds or text.

### Colour
- Pull the brand colour from the client's logo, van, signage or uniform. If they have none, choose one that suits the category while avoiding these defaults: cream or beige with terracotta or clay, near-black with acid green, purple or blue AI glows.
- The primary colour is used as a full-bleed background (trust bar, contact section, featured review) with `onPrimary` text on top. The contrast of `onPrimary` on `primary` must be at least 4.5:1. Calculate it, do not eyeball it.
- Light brand colours (yellow, light blue, pale green) get dark `onPrimary` (`#15191C`). If the brand colour fails with both light and dark text, darken it for background use and say so.
- Check that the dark-mode `--primary-text` value still reads as the brand colour and passes contrast.
- Use the brand colour as it is. Do not oversaturate it.

### Typography
- The template font is Outfit. Keep it unless the client has a brand font. Never switch to Inter, Fraunces, Instrument Serif, or any serif without a real brand reason.
- One family. Emphasis by weight only. Never italicise, bold or colour a single word inside a headline for effect.
- Sentence case for headings and buttons. No all-caps labels, no tracked-out uppercase eyebrows, no monospace labels.
- Body line length under about 70 characters.

### Layout
- **The hero fits the first screen** on a 375x667 phone and on desktop. Headline max 2 lines on desktop (3 on a phone only if the business name is long). Subtext max 20 words. Both CTAs visible without scrolling.
- **The hero contains only:** headline, one sentence, two CTAs. No rating strip, no badges, no tagline under the buttons. Those belong in the trust bar.
- **Zero eyebrow labels** (small uppercase text above headings). The template has none. Keep it that way.
- No "big headline on the left, small paragraph floating on the right" section headers. Heading, then sub-sentence, stacked.
- No three identical cards in a row. The services grid already uses wide cards to avoid this and to avoid empty cells. Keep services between 3 and 8.
- No empty grid cells. N items means N cells.
- Lists longer than 5 items use a grid, pills or grouped columns, never a bulleted list with a divider under every row.
- **Spend boldness in one place:** the hero photo and headline. Everything else stays quiet and consistent. Before finishing, remove one decorative thing.

### Images
- Real photos only: the client's own, or photos from their own public listings for pitch mockups. Picsum placeholders are allowed only when `sample: true`, each with a TODO comment saying what real photo is needed.
- No stock photos of smiling teams. No AI-generated people presented as staff or customers.
- Never fake screenshots or illustrations with styled divs or hand-written SVG paths. Icons come from Phosphor only.
- Hero photo: the subject should sit centre or right so the left-side text overlay stays readable. Check text contrast against the actual photo, not the placeholder.
- Sizes: hero about 1800px wide, service and gallery images about 1000px. WebP where possible. Aim for a hero under 250KB and other images under 120KB each. Always set width and height, or an aspect ratio, so nothing jumps while loading.
- Alt text describes the actual photo ("New concrete driveway in Chisholm"), not "image", and is never keyword-stuffed.
- No captions, pills or labels overlaid on photos. No decorative photo credits.

---

## 8. Copy rules

**Voice:** plain Australian English, like the owner talking to a customer at the counter. Specific beats clever. Boring and true beats cute.

- Australian spelling: colour, organise, centre, metre.
- Phone formats: mobiles `0411 331 779`, landlines `(02) 6231 9999`. `tel:` links use the international form: `tel:+61411331779`, `tel:+61262319999`.
- Suburb names spelt correctly. Add ACT or NSW only where it helps.
- **No em dashes or en dashes anywhere:** headlines, body, buttons, alt text, review quotes, meta tags. Use a comma, colon, full stop or brackets. Hyphens only for compound words and ranges (7am-5pm).
- **Banned phrases:** welcome to our website, look no further, one-stop shop, we pride ourselves, passionate about, nestled, elevate, seamless, unleash, transform your space, next level, game changer, solutions (meaning services), quality you can trust, your satisfaction is our priority.
- No arrow characters added to button or link text. No middle-dot strings like "Fast · Friendly · Local".
- **Buttons say exactly what happens:** "Call Now", "Get a Free Quote", "Book Now", "View Menu". Max 3 words, one line on desktop.
- **One label per intent** across the whole page. Never "Get a Quote" in one place and "Contact Us" or "Enquire" in another.
- No invented numbers. "500+ happy customers", "20 years experience" and "4.9 stars" appear only if they are true and sourced.
- Section headings under 8 words. Sub-sentences under 25 words.
- **Reviews:** real only, copied exactly (trimming allowed, rewording not). The featured excerpt is under about 90 characters, the others max 3 lines. Attribution is first name, last initial, and suburb or "Google review".
- **Form messages:** success says what happens next ("Thanks, we will call you back today."). Error says what to do ("That did not send. Please call 0411 331 779."). No apologising, no vague "Something went wrong".
- **Copy self-audit:** before finishing, re-read every visible string, including alt text and meta tags. Rewrite anything awkward, vague, salesy or AI-sounding into a plain sentence.
- Never promise Google rankings anywhere in the copy.

---

## 9. Motion, performance, accessibility

### Motion
- The ceiling is what the template already has: one hero load sequence, one subtle fade-up on scroll, and hover feedback on mouse devices only. Do not add marquees, parallax, number counters, typewriter text, cursor effects or GSAP to client sites.
- Every animation must communicate something (draw attention, confirm an action, show a change). "It looks cool" is not a reason.
- Animate `transform` and `opacity` only. Everything respects `prefers-reduced-motion`. The template already does this. Keep it true for anything you add.
- Never use `window.addEventListener('scroll')`. Use IntersectionObserver or CSS.

### Performance (target: fast on a mid-range phone on 4G)
- LCP under 2.5s, CLS under 0.1.
- The hero image is set from JavaScript, so the browser cannot discover it early. Add `<link rel="preload" as="image" href="<hero url>" fetchpriority="high">` to the head.
- Below-the-fold images use `loading="lazy"` (the template already does).
- No new libraries, frameworks or build tools. Static HTML, CSS and vanilla JS. Do not add React, Tailwind, jQuery, Bootstrap, chat widgets or analytics scripts unless asked.
- Google Fonts and the Phosphor CDN stylesheets are acceptable for mockups only. At go-live: self-host Outfit (woff2, only the weights used, `font-display: swap`) and replace the Phosphor stylesheets with inline SVGs of only the icons used, copied from Phosphor's official icon files. That is sourcing icons, not hand-drawing them.

### Accessibility
- One `h1`. Headings in order.
- Visible focus on everything interactive (the template has `:focus-visible`).
- Tap targets at least 48px tall.
- WCAG AA contrast: 4.5:1 for body text, 3:1 for large text. Check buttons, form fields, labels, text over the hero photo, and dark mode.
- Labels above inputs. No placeholder text used as a label.
- `<html lang="en-AU">`.

---

## 10. SEO and link previews

The raw HTML head must contain real values, even though the `content` object also sets them with JavaScript. Link previews in iMessage, Messenger, WhatsApp and Facebook do not run JavaScript. If the raw `<title>` says "Loading", that is exactly what a business owner sees when we text them their mockup link.

**Hardcode in the head, matching `content`:**
- `<title>`: "<Business name> | <Main service> in <Suburb or Canberra>"
- `<meta name="description">`: one sentence, under 155 characters, covering service, area and a reason to call.
- Open Graph: `og:title`, `og:description`, `og:image` (hero photo, absolute URL), `og:type` set to `website`, `og:url`.
- `theme-color` set to the brand colour.

**At go-live on the client domain:**
- LocalBusiness JSON-LD, using the specific subtype where one exists (Plumber, Electrician, HairSalon, Restaurant, MovingCompany, and so on): name, phone, suburb or address, area served, opening hours, url. Real data only. No `aggregateRating` unless those reviews are real and shown on the page.
- Business name, phone and suburb must match their Google Business Profile exactly: same spelling, same number.
- Remove `noindex`.
- Preferred: produce a static build with the rendered markup baked into the HTML (still generated from the `content` object), so the page loads faster and works without JavaScript. Minimum: the head tags above, plus a `<noscript>` fallback containing business name, phone, services and hours.

---

## 11. Banned patterns (AI tells)

Never produce any of these on client sites:

- Em dashes or en dashes.
- Eyebrow labels, section numbers (01, 02, 03), "Step 1 / Stage 1" labels. Process steps use their real titles.
- Centred hero over a gradient blob, purple or blue AI gradients, neon glows, gradient text.
- Three equal cards in a row. Cream with terracotta. Near-black with acid green.
- Fake screenshots built from divs, hand-drawn SVG illustrations, custom cursors.
- Decorative coloured dots, scroll cues ("Scroll", bouncing arrows), version labels, locale or weather strips, decorative word strips like "QUALITY. SERVICE. TRUST."
- Pills or labels over images, fake photo credits.
- Filled progress or score bars.
- Generic names (John Doe), fake reviews, fake stats, stock "team" photos.
- Logo walls of brands they have never worked with.
- Popups, newsletter signups, chat widgets, or cookie banners the site does not legally need.

---

## 12. CSS hygiene (only when editing CSS)

- Change existing variables and classes instead of adding new overriding selectors. No `!important`.
- Watch for specificity fights between section-level and component-level rules, especially padding and margin between sections.
- Keep to the existing z-index layers: header 50, mobile bar 50, sample ribbon 60.
- Use `dvh` for full-height sections, never `100vh`.
- Every multi-column layout declares its under-768px behaviour in the same block.
- Test any new component in light mode, dark mode, and with reduced motion on.

---

## 13. Pre-flight checklist

Run every item before saying a task is done. If an item fails, fix it, then rerun.

**Mechanical checks (run these, do not eyeball):**
1. `grep -nP '[\x{2013}\x{2014}]' index.html` returns nothing (no en or em dashes).
2. Client builds only: `grep -nE '0400 000 000|example\.com|YOUR_WEB3FORMS|Sample Landscapes|picsum\.photos' index.html` returns nothing.
3. Count `<h1` in the rendered page: exactly one.

**Judgement checks:**
4. `content.sample` matches reality: `true` if anything is placeholder or unverified.
5. Robots meta matches the mode: `noindex` on mockups and previews, removed only at go-live.
6. Head tags (title, description, Open Graph) are hardcoded and match `content`.
7. Contrast calculated for: `onPrimary` on `primary`, every button, form labels and inputs, text over the actual hero photo, dark-mode `--primary-text`.
8. Phone number appears in the header, hero CTA, mobile bar, contact section and footer. Every `tel:` link is in +61 format and dials the right number.
9. One label per CTA intent across the page. No CTA wraps to two lines on desktop.
10. Hero fits at 375x667 and 1280x800 with both CTAs visible.
11. No empty grid cells. Services count is between 3 and 8.
12. Every review is real and attributed. Every number on the page has a source.
13. Copy self-audit done (section 8).
14. Contact form works with the real Web3Forms key, or the missing key is listed as a TODO.
15. If you can run a headless browser, screenshot 375px and 1280px in light and dark mode and review the screenshots yourself before reporting. If you cannot, say so, and list exactly what the user should check on their phone.
16. Icons actually render: in the headless browser, every `i[class*="ph-"]` has a non-zero width (excluding the mobile bar on desktop). A blank trust bar or missing stars means the icon stylesheets did not load.
17. Form test: intercept `api.web3forms.com` in the headless browser, submit once with a success reply and once with a failure reply, and confirm every field is posted and both messages show.

---

## 14. Report format

End every task with:

- **Preview URL**
- **What changed** (short list)
- **TODO:** each placeholder still on the page and exactly which real asset or fact is needed from the client to replace it
- **Rules not met:** any rule in this file you could not satisfy, and why
- **Pre-flight:** pass, or which items failed

Keep the report short. Do not praise your own work.

---

## 15. Field notes from past builds

Lessons from the Dutchies Removals build (October 2026). Each one cost real time once. Read them before starting a new client.

### Intake
- Expect the first message to be a filled-in `CLIENT-BRIEF.md`. Anything blank, research yourself and list what you could not find. Do not stall on it.
- Confirm the exact trading name on ABN Lookup (abr.business.gov.au) before anything else. It also gives the owner, postcode and start date. Clients get called by near-miss names ("Dutchies Removalists" trades as "Dutchies Removals").
- A Claude session can only push to its own `claude/...` branch unless the user names another branch in chat. If the brief does not name one, ask once.

### What your sandbox can and cannot reach
- **Blocked:** Facebook, Instagram, most directory sites (Muval, Oneflare, ServiceSeeking, Sirelo, Localsearch, Yellow Pages), competitor websites, Netlify preview URLs, unpkg, jsDelivr and font download sites.
- **Works:** web search (it returns summaries of blocked pages), Google Fonts (fonts.googleapis.com and fonts.gstatic.com), the npm registry and PyPI.
- Quotes read through search summaries are unverified until the user checks them on the live page. Say so in the report and keep `sample: true` until they have.
- To check the page in headless Chromium: Chromium does not trust the sandbox proxy certificate, so serve the Phosphor stylesheets from the npm package (`npm pack @phosphor-icons/web`) and Google Fonts from files downloaded with curl, through Playwright request routing.
- For image work: `pip install --target <scratchpad> pillow`.

### Research playbook (local service businesses)
- Order: ABN Lookup, Google listing, Facebook (vymaps.com mirrors Facebook pages, including page ID, hours and about text), then the category's directories. For removalists: Muval, Oneflare, Find a Mover, ServiceSeeking, Sirelo, Localsearch, Service.com.au, MovingSelect.
- Directory badges can belong to the directory. Muval shows "4.7/5 from 640+ Google reviews" on every listing: that is Muval's own rating, not the business's.
- Yelp page titles say "Updated <month year>" when Yelp refreshes the page. It does not mean the business posted anything.
- Listings from a previous location carry stale hours and addresses. Check postcodes against ABN Lookup.
- Review counts change between crawls. Use the latest number, or a floor like "80+".
- Google's old `business.site` websites were shut down in 2024. A business that had one probably has no website now, which is a pitch angle.
- Check for an existing domain with `getent hosts <name>.com.au`. If a reverse lookup points at a registrar's redirection server, the domain is registered but forwarding. The user can confirm the registrant at whois.auda.org.au (blocked from the sandbox).
- When sources conflict (hours, address, years), default to the most recently posted owner-controlled source, and record the others in the client notes.
- Note the claims competitors make in the same category and area. Canberra removalists almost all say "fully insured", "no hidden fees" or fixed price, AFRA accredited, and "from $X/hr". List the ones this client cannot yet back up as questions for the client.

### Copy provenance
- Put a short source comment above each `content` field: their own words (name the listing), their facts in our words, or ours.
- Keep a copy audit in the client notes listing every inferred or judgment-call line, so the user can confirm them with the client.
- The render code hardcodes "No obligation. We reply the same business day." in the form note. That is a claim. Change it for each client unless they confirm it.

### Matching a client's brand
- Sample colours from the logo's pixels (Pillow quantize), never by eye.
- When the user asks to match the logo's look, the logo's style overrides the section 7 typography locks (serif or display faces, uppercase, script). Say which locks you are overriding.
- Logo fonts are often not on Google Fonts. Score candidates objectively: render one of the logo's words in each font, binarise it, and compare its overlap with the logo's word. Show the top two beside the logo, and ask the user for the real font name (WhatTheFont) if they want an exact match. Dutchies' Western Tuscan lettering matched Sancreek with `-webkit-text-stroke: 0.018em currentColor`; Rye looked close but adds inline strokes the logo does not have.
- A logo printed on a coloured background can be lifted onto transparency: estimate the background (max filter, blur), un-blend the ink colour to get alpha, then drop specks and anything touching the crop border. Ask for the original logo file first; it is faster and sharper.
- On gradient or photo backgrounds, measure contrast from the rendered pixels behind each text element, not from the gradient stops.

### Photos
- Users upload photos to the client branch root on GitHub. Look for "Add files via upload" commits. If the user says they uploaded something and you cannot see it, list the branches and the newest commits, and remind them to press Commit changes.
- Facebook downloads (`<digits>_<digits>_<digits>_n.jpg`) already have location data stripped. Re-save with Pillow anyway so no metadata survives, crop away empty sky or road, and resize.
- Flag photos that show a customer's house or people, so the client can confirm consent.
- If a section's grid has no photos, a compact carousel of icon cards uses far less space than empty photo tiles (Dutchies services).

### Deploy and go-live
- The repo is public. Everything committed, including client notes, can be read by anyone and gets indexed by search engines. Keep pitch angles and anything sensitive out of the repo.
- Files at the root of a client branch are published on its preview URL. Keep notes out of any folder Netlify publishes.
- `main` is the shared template. Never merge a client branch or PR into it. At go-live each client gets its own Netlify site from their branch, then their domain.
- You cannot open Netlify previews from the sandbox. Verify by rendering locally, and say that is what you did.

### Template issues found
- The Phosphor JavaScript loader declared a global `head` that clashed with the renderer's `head` helper, so no icon ever rendered. Fixed: the template links the bold and fill stylesheets directly.
