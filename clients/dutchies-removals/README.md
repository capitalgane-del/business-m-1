# Dutchies Removals

Site: `index.html`, built from `templates/website-template`. Status: mockup (`sample: true`).

Trading name is **Dutchies Removals** (not "Removalists"). ABN 21 690 437 968, sole trader Karen Maree Dewal, trading name registered May 2017, ACT 2904. Allen (also spelt Allan in reviews) runs the moves; John and Eli are named in reviews. Their old website (`dutchies-removals.business.site`) was a Google Business Profile site, and Google shut those down in 2024, so they most likely have no website now.

## Facts used and where they came from

| On the site | Value | Source |
| --- | --- | --- |
| Phone | 0411 331 779 | Every listing |
| Email | dutchiesremovals1@gmail.com | Localsearch, Sirelo, Yellow Pages |
| Location | Monash ACT 2904 (suburb only) | ABN record, Oneflare, Sirelo. Localsearch says Isabella Plains |
| Hours | 7 days, 7am to 7pm | Yellow Pages, Localpx. Facebook says Mon to Fri 9 to 4 (Thu to 5), Sat 9 to 12:30 |
| Rating | 4.9 on Muval, 80+ reviews | Muval (indexed at 83 and at 97 reviews) |
| Trust bar | Family owned, 17+ years | Oneflare, Service.com.au, Localsearch |
| Trust bar | Top 10 in Canberra, 2019 and 2020 | Service.com.au awards (also Top 10 Hunter, Central and Northern NSW 2018) |
| Services | Local, interstate, country, backloading, pre-pack, single items | Oneflare, Muval, Localsearch |
| Set-up extras | Beds rebuilt, washing machines reconnected | Muval description |
| Areas | ACT, NSW, VIC, QLD | Facebook (via vymaps). Queanbeyan from a review. Central Coast from their old Toukley NSW base |
| Reviews | Joy (Oneflare), Joanna and Ann (Find a Mover), Sirelo customer | Listing snippets, see below |

Other ratings if you want to swap: ServiceSeeking 5.0 (30 reviews), Find a Mover 4.99 (36), Sirelo 9.4/10 (14), MovingSelect 4.67 (9). The "4.7 from 640+ Google reviews" that shows up when you search is Muval's own badge, not Dutchies' rating.

## Still missing (needs the client)

1. **Photos.** Biggest gap. Hero (truck or crew on a job) plus one per service tile. Their Facebook page is the first place to look.
2. **Logo and brand colour.** Using Dutch orange `#AE3E0D` as a placeholder.
3. **Web3Forms key.** Sign up at web3forms.com with the inbox that should get leads.
4. **Insurance.** Not listed anywhere. If they have public liability or goods in transit cover, add it to the trust bar. It's a top worry for people booking movers.
5. **Google rating.** Couldn't find their Google Business Profile. If it's strong, it beats Muval in the trust bar because people recognise Google.
6. **Confirm:** hours, Monash vs Isabella Plains, years in business (could be 20+ by now), service areas, Sirelo reviewer's name.
7. **Pricing.** Service.com.au lists $230/hour incl. GST. Not on the site. Ask whether they want rates shown.

## Changes from the template

- Static `<title>` and description in `<head>`, so Facebook and WhatsApp link previews show the business name instead of "Loading".
- Form asks "Moving from, to and when?" with an example placeholder. The form note drops the template's "We reply the same business day" because it isn't confirmed.
- On screens 400px wide or less, the business name in the header stacks onto two lines instead of being cut off.
- Icons load as CSS links instead of the Phosphor JS loader. This fix is also in the template: the loader's global `head` clashed with the renderer and stopped every icon loading.

## Before it goes live

- [ ] Check each review quote word for word against the live listing (the listing pages were blocked during research, so quotes came through search snippets)
- [ ] Photos in (`heroImage`, `services[].image`, optional `beforeAfter` / `gallery`)
- [ ] Web3Forms key in, test form sends to the client's inbox
- [ ] Hours, location and areas confirmed by the client
- [ ] Live Muval review count in `rating.count`
- [ ] `sample: false`
- [ ] Self-host fonts and icons, buy a domain
