# Dutchies Removals

Site: `templates/website-template/index.html` on the Dutchies branches (`dutchies-removalist` and `claude/dutchies-removalists-website-23905k`). Netlify publishes that folder, so these notes sit outside it to stay off the live site. `main` keeps the clean scaffold. Status: mockup (`sample: true`).

Trading name is **Dutchies Removals** (not "Removalists"). ABN 21 690 437 968, sole trader Karen Maree Dewal, trading name registered May 2017, ACT 2904. Allen (also spelt Allan in reviews) runs the moves; John and Eli are named in reviews. Their old website (`dutchies-removals.business.site`) was a Google Business Profile site, and Google shut those down in 2024, so they most likely have no website now.

## Facts used and where they came from

| On the site | Value | Source |
| --- | --- | --- |
| Phone | 0411 331 779 | Every listing |
| Email | dutchiesremovals1@gmail.com | Localsearch, Sirelo, Yellow Pages |
| Location | Monash ACT 2904 (suburb only) | ABN record, Oneflare, Sirelo. Localsearch says Isabella Plains |
| Hours | Mon to Fri 9am to 4pm (Thu to 5pm), Sat 9am to 12:30pm, Sun closed | Most recently posted: Facebook and Localsearch (newest address). Older: Oneflare Mon to Sat 7 to 5; Yellow Pages/Yelp (old Toukley NSW listing) 7 days 7 to 7. Yelp's "Updated December 2025" is Yelp refreshing its own page, not a new post |
| Rating | 4.9 on Muval, 80+ reviews | Muval (indexed at 83 and at 97 reviews) |
| Trust bar | Family owned, 17+ years | Oneflare, Service.com.au, Localsearch |
| Trust bar | Top 10 in Canberra, 2019 and 2020 | Service.com.au awards (also Top 10 Hunter, Central and Northern NSW 2018) |
| Services | Local, interstate, country, backloading, pre-pack, single items | Oneflare, Muval, Localsearch |
| Set-up extras | Beds rebuilt, washing machines reconnected | Muval description |
| Areas | ACT, NSW, VIC, QLD | Facebook (via vymaps). Queanbeyan from a review. Central Coast from their old Toukley NSW base |
| Reviews | Joy (Oneflare), Joanna and Ann (Find a Mover), Sirelo customer | Listing snippets, see below |
| Colours | Red `#D32930`, navy `#0D082B`, peach `#F7BD8D` | Sampled from their logo graphic: red is the background's most common colour, navy is the lion, peach is the script |
| Logo and slogan | `images/dutchies-logo.jpg`, "Excellence in removals" | Cropped from the graphic they supplied (original kept at the repo root, `474478559_…_n.jpg`) |

Other ratings if you want to swap: ServiceSeeking 5.0 (30 reviews), Find a Mover 4.99 (36), Sirelo 9.4/10 (14), MovingSelect 4.67 (9). The "4.7 from 640+ Google reviews" that shows up when you search is Muval's own badge, not Dutchies' rating.

## Still missing (needs the client)

1. **Photos.** Biggest gap. One per service tile, plus job photos for a gallery. Their Facebook has none usable (memes, not job work). Next places to look: their Google Maps listing (customer photos), Oneflare and ServiceSeeking profile galleries, Localsearch, their Instagram. Best fix: ask Allen to take them on the next job.
2. **Sharper logo file.** The logo is cropped from a 758px social graphic, so it's soft on retina screens. Ask for the original file their sign-writer or printer used.
3. **Web3Forms key.** Sign up at web3forms.com with the inbox that should get leads.
4. **Insurance.** Not listed anywhere. If they have public liability or goods in transit cover, add it to the trust bar. It's a top worry for people booking movers.
5. **Google rating.** Couldn't find their Google Business Profile. If it's strong, it beats Muval in the trust bar because people recognise Google.
6. **Confirm:** Monash vs Isabella Plains, years in business (could be 20+ by now), service areas, Sirelo reviewer's name.
7. **Pricing.** Service.com.au lists $230/hour incl. GST. Not on the site. Ask whether they want rates shown.

## Changes from the template

- Static `<title>` and description in `<head>`, so Facebook and WhatsApp link previews show the business name instead of "Loading".
- Form asks "Moving from, to and when?" with an example placeholder. The form note drops the template's "We reply the same business day" because it isn't confirmed.
- On screens 400px wide or less, the business name in the header stacks onto two lines instead of being cut off.
- Icons load as CSS links instead of the Phosphor JS loader. The loader's global `head` clashed with the renderer and stopped every icon loading. The scaffold on `main` still has this bug.
- Re-themed to their logo: `colours.dark` and `colours.accent` added alongside primary. Navy hero, service tiles and footer; neutrals tinted navy and cream instead of the template's green-greys.
- Hero shows the logo (`heroBadge`) beside the headline on desktop and above it on phones, and the slogan (`tagline`) above the headline on desktop.
- Faded white text on red (trust labels, feature review name, contact intro) set to full opacity, because faded white fails contrast on this red.

## Before it goes live

- [ ] Check each review quote word for word against the live listing (the listing pages were blocked during research, so quotes came through search snippets)
- [ ] Photos in (`heroImage`, `services[].image`, optional `beforeAfter` / `gallery`)
- [ ] Web3Forms key in, test form sends to the client's inbox
- [ ] Location and areas confirmed by the client
- [ ] Live Muval review count in `rating.count`
- [ ] `sample: false`
- [ ] Self-host fonts and icons, buy a domain
