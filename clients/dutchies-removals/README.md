# Dutchies Removals

Site: `templates/website-template/index.html` on the Dutchies branches (`dutchies-removalist` and `claude/dutchies-removalists-website-23905k`). Netlify publishes that folder, so these notes sit outside it to stay off the live site. `main` keeps the clean scaffold. Status: mockup (`sample: true`).

Trading name is **Dutchies Removals** (not "Removalists"). ABN 21 690 437 968, sole trader Karen Maree Dewal, trading name registered May 2017, ACT 2904. Allen (also spelt Allan in reviews) runs the moves; John and Eli are named in reviews. Their old website (`dutchies-removals.business.site`) was a Google Business Profile site, and Google shut those down in 2024, so they most likely have no website now.

Heads-up: Muval also carries a negative review (fridge damaged, insurance repair still not sorted 12 months later). It's not on the site, but expect it to come up.

## Copy audit

Every line of copy on the page falls into one of these groups. Listing pages were blocked during research, so "word for word" means as read through search snippets: check against the live pages.

**Word for word from their own listings**
- Hero line and footer: "A family owned business servicing local, country and interstate relocations." (Muval, capitals lowered)
- Services intro: "We always go the extra mile, assembling and disassembling beds, attaching and reattaching washing machines and placing your belongings exactly where you need them." (Muval; their "attach ... place" changed to "attaching ... placing" for grammar)
- Slogan: "Excellence in removals" (their logo)
- Trust bar: "Locally owned and operated" (Localsearch), "Service.com.au awards, 2019 and 2020"
- Service names: local, interstate, regional/country, single item (Muval); backloads, pre-pack (Oneflare, Localsearch, Service.com.au)
- "Servicing the ACT, NSW, Victoria and Queensland" (states from their Facebook listing)
- All four reviews (Oneflare, Muval, Find a Mover). "cant" and "Ive" kept as the customer wrote them.

**Their facts, our wording**
- Headline "Family removalists in Canberra", page title, meta description
- "17+ years: Owner's experience in removals" (listings say "The owner has over 17 years experience in Removals")
- "Free in-home quote" lines (listings: "free in home quote available")
- Process steps 2 to 4 and the contact promises (free quote, family owned, local/country/interstate, backloads and pre-pack, the Muval set-up line)

**Ours, with no facts in them** (headings and instructions)
- Section headings: "What we move", "What customers say", "How it works", "Get your free quote", "Where we move"
- "From first call to set up in your new place.", "Tell us where you are moving from and to...", form labels and messages
- Form placeholder "e.g. 3 bedroom house, Monash to Goulburn, early December" is an example, not a real job
- Plain-English service explanations: Backloads "Share truck space on a long-distance move.", Pre-pack "Your home packed up before moving day.", Single items "One item, no full move needed."

**Judgment calls to confirm with the client**
- Hours: used the most recently posted set (Facebook and Localsearch). No listing shows an update date.
- Location: Monash (ABN record, most listings) vs Isabella Plains (Localsearch).
- Experience: 17+ (Oneflare, Localsearch, Service.com.au) vs "over 15" (Muval).
- Rating count: 97 as last indexed; may have grown.
- Queanbeyan as a service area: from one review describing a move there.
- "Moves around Canberra and the ACT" for local removals: inferred from "local" plus their Canberra base.
- Muval reviewer's name: not visible, shown as "Muval customer".

## Design sources

| Item | Value | Source |
| --- | --- | --- |
| Colours | Red `#D32930`, navy `#0D082B`, peach `#F7BD8D` | Sampled from their logo graphic: red is the background's most common colour, navy is the lion, peach is the script |
| Logo | `images/dutchies-logo.jpg` | Cropped from the graphic they supplied (original kept at the repo root, `474478559_…_n.jpg`) |
| Fonts | Bevan (headings, name), Pinyon Script (slogan), Outfit (body) | Bevan is a calmer cousin of the Western serif in their logo; Pinyon Script is close to its script |

Other ratings if you want to swap: ServiceSeeking 5.0 (30 reviews), Find a Mover 4.99 (36), Sirelo 9.4/10 (14), MovingSelect 4.67 (9). The "4.7 from 640+ Google reviews" that shows up when you search is Muval's own badge, not Dutchies' rating.

## Still missing (needs the client)

1. **Photos.** Biggest gap. One per service tile, plus job photos for a gallery. Their Facebook has none usable (memes, not job work). Next places to look: their Google Maps listing (customer photos), Oneflare and ServiceSeeking profile galleries, Localsearch, their Instagram. Best fix: ask Allen to take them on the next job.
2. **Sharper logo file.** The logo is cropped from a 758px social graphic, so it's soft on retina screens. Ask for the original file their sign-writer or printer used.
3. **Web3Forms key.** Sign up at web3forms.com with the inbox that should get leads.
4. **Insurance.** Not listed anywhere. If they have public liability or goods in transit cover, add it to the trust bar. It's a top worry for people booking movers.
5. **Google rating.** Couldn't find their Google Business Profile. If it's strong, it beats Muval in the trust bar because people recognise Google.
6. **Pricing.** Service.com.au lists $230/hour incl. GST. Not on the site. Ask whether they want rates shown.

## Changes from the template

- Static `<title>` and description in `<head>`, so Facebook and WhatsApp link previews show the business name instead of "Loading".
- Form asks "Moving from, to and when?" with an example placeholder. Form note and success message make no promises about reply times.
- On phones the business name in the header stacks onto two lines instead of being cut off.
- Icons load as CSS links instead of the Phosphor JS loader. The loader's global `head` clashed with the renderer and stopped every icon loading. The scaffold on `main` still has this bug.
- Re-themed to their logo: `colours.dark` and `colours.accent` added alongside primary. Navy hero, service tiles and footer; neutrals tinted navy and cream instead of the template's green-greys.
- Hero shows the logo (`heroBadge`) beside the headline on desktop and above it on phones, and the slogan (`tagline`) above the headline on desktop.
- Faded white text on red (trust labels, feature review name, contact intro) set to full opacity, because faded white fails contrast on this red.
- Headings, the name and trust values in Bevan at weight 400 (it has one weight, so no fake bold); slogan in Pinyon Script, which phones never download because the slogan line is hidden there.

## Before it goes live

- [ ] Check each review quote word for word against the live listing
- [ ] Client confirms the judgment calls above
- [ ] Photos in (`services[].image`, optional `beforeAfter` / `gallery`)
- [ ] Web3Forms key in, test form sends to the client's inbox
- [ ] `sample: false`
- [ ] Self-host fonts and icons, buy a domain
