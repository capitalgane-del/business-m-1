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

**Added after the competitor research**
- "On the job": "Dutchies Removals offer a friendly, polite and professional service, specialising in local and interstate removals." (their Facebook about text; "&" written as "and"), "Locally owned and operated." (Localsearch), "The owner has over 17 years of experience in removals." (listings)
- FAQ: questions are ours; answers use only sourced facts. "so we can see what is moving" and the backload answer are plain-English explanations, not claims.
- Form: "Call or text" assumes they're happy to get texts on the mobile; labels and the example are ours.
- Photo `images/on-the-job.jpg`: their truck on a job, from their Facebook via Jett. Cropped, metadata stripped. It shows a customer's house (no street number visible); check they're fine using it.

**Judgment calls to confirm with the client**
- Hours: used the most recently posted set (Facebook and Localsearch). No listing shows an update date.
- Location: Monash (ABN record, most listings) vs Isabella Plains (Localsearch).
- Experience: 17+ (Oneflare, Localsearch, Service.com.au) vs "over 15" (Muval).
- Rating count: 97 as last indexed; may have grown.
- Queanbeyan as a service area: from one review describing a move there.
- "Moves around Canberra and the ACT" for local removals: inferred from "local" plus their Canberra base.
- Muval reviewer's name: not visible, shown as "Muval customer".

## Design sources

The page copies how their logo is presented: navy Western lettering and a lion on a glowing red-orange panel, with a cream script underneath.

| Item | Value | Source |
| --- | --- | --- |
| Colours | Red `#D32930`, navy `#0D082B`, peach `#F7BD8D`; glow `#EE9466` to `#C8202D` | Sampled from their logo graphic |
| Emblem | `images/dutchies-emblem.png` | The navy lettering and lion lifted out of the graphic they supplied (original at the repo root, `474478559_…_n.jpg`), on a transparent background so it sits on the glow like their sign |
| Fonts | Sancreek with a hairline outline (headings, name), Pinyon Script (slogan), Outfit (body) | Sancreek: the closest Google font to the logo lettering (solid Tuscan, same mid-stem spurs), picked by scoring 23 Western fonts against the logo's REMOVALS. Not the exact font: that is probably a non-Google face (Carnivalee Freakshow style). For an exact match, get the font name from whoever made the logo, then self-host it if it's licensed for commercial use |
| Unused | `images/dutchies-logo.jpg` | Earlier crop of the full logo panel; handy later as a social share image |

Text contrast on the glow was measured from the rendered page (desktop, 390px and 360px phones): all body text 4.5:1 or better, large text 3:1 or better.

## Links to their other profiles

On the site: footer "Find us online" column, the Muval rating and Top 10 award in the trust bar, each review's source, and "Read all 97 reviews on Muval". All open in a new tab.

- Facebook `https://www.facebook.com/1479089482380269` (their page ID from a Facebook mirror listing; Facebook redirects it to the page)
- Muval, Oneflare, ServiceSeeking, Find a Mover, Localsearch, Service.com.au, Sirelo, MovingSelect (profile URLs from search results)
- Left out: Yellow Pages and Yelp (old Toukley NSW listings with out-of-date hours and address), LetsMoveMe (NSW listing)
- Not found: Instagram (Oneflare says they have one, handle not visible), Google Maps listing
- Every URL came from search results and the pages were blocked during research: click each one once on the preview.
- Trade-off: Muval, Oneflare and the other review sites also show competing removalists. That's why the links sit in the footer and on the review sources, not near the call buttons.

Their domain: `dutchiesremovals.com.au` is registered and points at Synergy Wholesale's domain-forwarding service (`redirection.synergywholesale.com`), so it currently forwards or parks somewhere. Check where it lands. It's the natural domain for this site at launch.

Repo visibility: this repo is public, so these notes can be read by anyone (including the client). Make it private in GitHub settings if that matters; Netlify works with private repos.

Other ratings if you want to swap: ServiceSeeking 5.0 (30 reviews), Find a Mover 4.99 (36), Sirelo 9.4/10 (14), MovingSelect 4.67 (9). The "4.7 from 640+ Google reviews" that shows up when you search is Muval's own badge, not Dutchies' rating.

## Competitor research (October 2026)

Back2Back Removals (b2bremovals.com, Forrest ACT, owner Adam De Franceschi) sells "a young, strong team", 24/7 availability and a long service list (deceased estates, rubbish, cleaning, pianos). They name the owner and crew, and post on Instagram (@back2backcbr). Dutchies' counter-position: family owned, 17+ years, Allen named in review after review.

What most Canberra removalist sites show, and where Dutchies stands:

| Pattern | Dutchies site |
| --- | --- |
| Real truck and team photos | One truck photo ("On the job"). Need more |
| Short quote form: from, to, date | Done |
| Reviews near the top | Done (Muval rating in the trust bar) |
| FAQ | Done, sourced answers only |
| Click to call (and text) | Done |
| "Fully insured", insurer named | Missing: need the client's answer |
| Price shown ("from $X/hr", 2 men + truck) | Missing: Canberra average is about $120 to $170/hr; their old listing says $230/hr incl. GST |
| "No hidden fees" / fixed price | Missing: need their pricing model |
| AFRA accreditation | Missing: ask if they're members |
| Suburb and route pages (e.g. Canberra to Sydney) | Not built: multi-page SEO, a possible paid add-on |

## Still missing (needs the client)

1. **Photos.** One truck photo so far (used in "On the job"). Still need one per service tile, plus job photos for a gallery. Their Facebook has nothing else usable (memes). Next places to look: their Google Maps listing (customer photos), Oneflare and ServiceSeeking profile galleries, Localsearch, their Instagram. Best fix: ask Allen to take them on the next job.
2. **Sharper logo file.** The logo is cropped from a 758px social graphic, so it's soft on retina screens. Ask for the original file their sign-writer or printer used.
3. **Web3Forms key.** Sign up at web3forms.com with the inbox that should get leads.
4. **Insurance (highest-value answer).** Not listed anywhere, and almost every Canberra competitor says "fully insured" up front. If they have goods in transit and public liability cover, add it to the trust bar and the FAQ, naming the insurer.
5. **Google rating.** Couldn't find their Google Business Profile. If it's strong, it beats Muval in the trust bar because people recognise Google.
6. **Pricing.** Service.com.au lists $230/hour incl. GST. Not on the site. Ask whether they want rates shown.

## Changes from the template

- Static `<title>` and description in `<head>`, so Facebook and WhatsApp link previews show the business name instead of "Loading".
- Form asks "Moving from, to and when?" with an example placeholder. Form note and success message make no promises about reply times.
- On phones the business name in the header stacks onto two lines instead of being cut off.
- Icons load as CSS links instead of the Phosphor JS loader. The loader's global `head` clashed with the renderer and stopped every icon loading. The scaffold on `main` still has this bug.
- Re-themed to their logo: `colours.dark` and `colours.accent` added alongside primary. Navy hero, service tiles and footer; neutrals tinted navy and cream instead of the template's green-greys.
- Hero shows the emblem (`heroBadge`) with the slogan (`tagline`) in script underneath, stacked like the logo: beside the headline on desktop, above it on phones.
- Logo presentation: hero, featured review and quote section use the logo's glow with navy type; trust bar and footer are cream on navy. Headings, the name and trust values in Sancreek, uppercase, at weight 400 (one weight, so no fake bold).
- Links: optional `href` on `rating`, `trust[]` and `reviews[]`, plus `reviewsMore` and a `links[]` footer column. External links open in a new tab.
- Faded white text on red set to full opacity, because faded white fails contrast on this red.
- "On the job" section (`about`), FAQ section (`faqs`, native details/summary), and nav links for both.
- Services shown as a compact carousel (icon cards, native scroll with snap, arrows and dots that wrap) instead of the photo grid, since they have no service photos.
- Quote form split into moving from / moving to / date / optional notes; form note links to call and text.
- Sections get `scroll-margin-top`, so jump links land below the sticky header instead of under it.

## Before it goes live

- [ ] Check each review quote word for word against the live listing
- [ ] Client confirms the judgment calls above
- [ ] Photos in (`services[].image`, optional `beforeAfter` / `gallery`)
- [ ] Web3Forms key in, test form sends to the client's inbox
- [ ] `sample: false`
- [ ] Self-host fonts and icons, buy a domain
