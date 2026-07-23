# Site Architecture — Dan's Drains

> Generated and approved in Phase 3. This is the permanent source of truth
> for every later phase (content drafting, schema, validation, and all
> Phase 14 post-launch edits). Update this file if the architecture ever
> changes (e.g., Phase 14b adding a new page) — do not let it go stale.

## Business identity (NAP — the fixed facts every page uses)
- **Name:** Dan's Drains
- **Physical city (NAP / schema address / body):** 1234 Main Street, Armonk, NY 10504
- **Phone:** +1 855-597-5391
- **Email:** derek@hexorasystems.com
- **Domain:** hexorasystems.com
- **GitHub repo (Phase 13):** Service-Harvest/dans-drains
- **Service areas:** Armonk, Pleasantville, Mount Kisco, Yonkers, Bedford, Scarsdale

## Geo-target decision

**Selected target: Westchester County, NY** — implemented as a HYBRID, not a swap.

| Signal | Armonk (literal city) | Westchester County (SELECTED) | Yonkers (largest service-area city) |
|---|---|---|---|
| Search volume (head term) | ~10/mo ("plumber armonk") | **480/mo** ("plumber westchester") | 720/mo ("plumber yonkers") |
| Phrasing clustering | 2 of 4 phrasings return no data → weak | All 4 phrasings identical at 480 → one real demand pool | (higher, but city-specific) |
| Competition | HIGH index 92 on tiny volume | HIGH index 68; AI Overviews present | MEDIUM index 55 |
| Reachability from Armonk GBP | Yes (home city) but negligible demand | Yes — county contains Armonk + all 6 service areas | **No** — distinct city ~15mi south; cannot rank its local pack; would misstate HQ |
| AI/LLM visibility | too small to register | aggregator-driven (Skaggs-Walsh, Diamond Certified, Prime Buyers Report); no single small plumber owns the answer | n/a |

**Reasoning:** Armonk is where the business physically is but has almost no search demand. Yonkers has the most volume but is unreachable from an Armonk-based GBP local pack and targeting it in URLs/H1s would falsely imply the business is headquartered there. Westchester County is the highest *reachable and honest* demand pool, it geographically contains every approved service area (capturing their intent without contradiction), and the identical clustering of all four head-term phrasings shows the market is genuinely named by county.

**Hybrid implementation:**
- **Target geo "Westchester" / "Westchester County, NY"** → URLs, title tags, H1s, meta descriptions.
- **Physical city "Armonk, NY"** → NAP, `LocalBusiness` schema `address`, homepage subhead, About, Contact, and body copy.
- Site reads as *"Based in Armonk, serving all of Westchester County."*
- Geo slug used in URLs: `westchester-ny`. State abbrev: `NY`.

## Priority picks (5 — homepage-linked, premium/Tier-1 content)
1. **Plumber** (primary GBP category → homepage) — manual override + primary
2. **Drainage Service** (category) — manual override
3. **Water Heater Installation** (service) — manual override
4. **Emergency Plumbing Repair** (service) — data-backed: 20/mo LOW competition, $62 CPC (highest commercial intent in the set), direct fit with the same-day/emergency USP
5. **Drain Cleaning** (service) — data-backed: 20/mo LOW competition, signature service for a business literally named "Dan's Drains"; strongest client-fit of the service set

(See build-report.md → Research Takeaways for the full four-signal reasoning per candidate.)

## Global navigation & footer (Phase 3 rules 8–9)
- **Nav bar (exactly):** Home · Services · About · Contact. No dropdowns, no service links in nav. One header CTA button: **Call Dan's Drains Today** → tel:+18555975391.
- **Footer:** main nav; the 5 priority pages; all 5 secondary category pages; NAP (Armonk address, phone, email); service-area list; social (Facebook). Footer links use plain functional labels — they are navigation, NOT anchor-text strategy (that lives in body copy per the anchor ledger).

## Page inventory

Legend — Tier: **1** = priority/premium · **2** = standard · **3** = thin-but-complete (exists to mirror the GBP). Schema: LB = LocalBusiness/Plumber (sitewide), Svc = Service, BC = BreadcrumbList, FAQ = FAQPage (where FAQs present), WP = WebPage.

### Main pages
| URL | Title tag | H1 | Parent | Schema | Tier |
|---|---|---|---|---|---|
| `/` | Plumber in Westchester County, NY \| Dan's Drains | Trusted Westchester County Plumber — Fast, Honest, Local | — | LB, WP, FAQ | 1 |
| `/services` | Plumbing Services in Westchester County, NY \| Dan's Drains | Our Plumbing Services Across Westchester County | / | WP, BC | 1 |
| `/about` | About Dan's Drains \| Armonk & Westchester County Plumber | About Dan's Drains | / | WP, BC | 2 |
| `/contact` | Contact Dan's Drains \| Armonk, NY Plumber | Contact Dan's Drains | / | LB, WP, BC | 2 |

### Secondary category pages (parent = /services)
| URL | H1 | Schema | Tier |
|---|---|---|---|
| `/drainage-service-westchester-ny` ⭐ | Drainage Services in Westchester County, NY | Svc, BC, FAQ | 1 |
| `/septic-system-service-westchester-ny` | Septic System Services in Westchester County, NY | Svc, BC | 2 |
| `/gasfitter-westchester-ny` | Gas Fitting & Gas Line Services in Westchester County, NY | Svc, BC | 2 |
| `/bathroom-remodeler-westchester-ny` | Bathroom Plumbing & Remodeling in Westchester County, NY | Svc, BC | 2 |
| `/water-damage-restoration-westchester-ny` | Water Damage Restoration in Westchester County, NY | Svc, BC | 2 |

### Service pages under Plumber (primary) — parent = /services
| URL | Tier |
|---|---|
| `/emergency-plumbing-repair-westchester-ny` ⭐ | 1 |
| `/water-heater-installation-westchester-ny` ⭐ | 1 |
| `/tankless-water-heater-installation-westchester-ny` | 2 |
| `/gas-water-heater-installation-westchester-ny` | 2 |
| `/hot-water-system-repair-westchester-ny` | 2 |
| `/boiler-installation-westchester-ny` | 2 |
| `/toilet-repair-westchester-ny` | 2 |
| `/toilet-installation-westchester-ny` | 3 |
| `/leak-detection-westchester-ny` | 2 |
| `/pipe-repair-westchester-ny` | 2 |
| `/pipe-replacement-westchester-ny` | 3 |
| `/burst-pipe-repair-westchester-ny` | 2 |
| `/frozen-pipe-repair-westchester-ny` | 2 |
| `/repiping-westchester-ny` | 3 |
| `/water-line-replacement-westchester-ny` | 3 |
| `/water-main-repair-westchester-ny` | 3 |
| `/slab-leak-repair-westchester-ny` | 3 |
| `/faucet-installation-westchester-ny` | 3 |
| `/outdoor-faucet-repair-westchester-ny` | 3 |
| `/sewer-line-repair-westchester-ny` | 2 |
| `/garbage-disposal-repair-westchester-ny` | 3 |
| `/shower-installation-westchester-ny` | 3 |
| `/shower-valve-replacement-westchester-ny` | 3 |
| `/bathtub-installation-westchester-ny` | 3 |
| `/sink-installation-westchester-ny` | 3 |
| `/urinal-installation-westchester-ny` | 3 |
| `/fixture-replacement-westchester-ny` | 3 |
| `/sump-pump-installation-westchester-ny` | 2 |
| `/water-softener-installation-westchester-ny` | 3 |
| `/water-filtration-system-installation-westchester-ny` | 3 |
| `/low-water-pressure-repair-westchester-ny` | 3 |
| `/plumbing-inspection-westchester-ny` | 3 |
| `/appliance-hook-up-westchester-ny` | 3 |
| `/laundry-room-plumbing-westchester-ny` | 3 |
| `/kitchen-plumbing-remodeling-westchester-ny` | 3 |
| `/rainwater-tank-installation-westchester-ny` | 3 |
| `/plumbing-maintenance-westchester-ny` | 3 |
| `/commercial-plumbing-services-westchester-ny` | 2 |

### Service pages under Drainage Service — parent = /drainage-service-westchester-ny
| URL | Tier |
|---|---|
| `/drain-cleaning-westchester-ny` ⭐ | 1 |
| `/hydro-jetting-westchester-ny` | 2 |
| `/drain-snaking-westchester-ny` | 3 |
| `/sewer-camera-inspection-westchester-ny` | 2 |
| `/grease-trap-cleaning-westchester-ny` | 3 |

### Service pages under Septic System Service — parent = /septic-system-service-westchester-ny
| URL | Tier |
|---|---|
| `/septic-tank-service-westchester-ny` | 3 |

### Service pages under Gasfitter — parent = /gasfitter-westchester-ny
| URL | Tier |
|---|---|
| `/gas-line-repair-westchester-ny` | 2 |

### Service pages under Bathroom Remodeler — parent = /bathroom-remodeler-westchester-ny
| URL | Tier |
|---|---|
| `/bathroom-plumbing-remodeling-westchester-ny` | 2 |

### Service pages under Water Damage Restoration Service — parent = /water-damage-restoration-westchester-ny
| URL | Tier |
|---|---|
| `/water-leak-sensor-installation-westchester-ny` | 3 |

**Total pages: 56** — Home + Services hub + About + Contact (4) · 5 secondary category pages · 47 service pages.

## Per-page metadata rules (title / H1 / meta pattern)
The 11 key pages above (home, services hub, about, contact, 5 category pages, 2 flagged service pages) have their title/H1 specced explicitly in the tables. For the remaining service pages, Phase 5 (per-page research) + Phase 6 (drafting) finalize the exact copy from these deterministic patterns, keeping every string unique sitewide:
- **Title tag:** `[Service] in Westchester County, NY | Dan's Drains` (≤60 chars; abbreviate to "Westchester, NY" when needed to fit).
- **H1:** wrap the service head term in a real Dan's Drains differentiator — never a bare "[Service] Westchester NY." Draw from: licensed & insured, 15+ years, same-day/emergency, upfront pricing, local/Armonk-based, clean respectful techs. Each H1 unique.
- **Meta description:** ≤155 chars, includes service + Westchester + one CTA ("Call Dan's Drains today" / "Request a free estimate"); unique per page.
- **URL:** `/[service-slug]-westchester-ny` (already fixed above — these are canonical and must not change once the anchor ledger is seeded against them).

## Standing constraints for later phases
- Homepage targets Plumber + Westchester County + NY; there is NO standalone `/plumber` page (primary category = homepage).
- No location/service-area pages in this initial build.
- One page per category and per service — page existence mirrors the GBP, not search volume (thin Tier-3 pages are intentional).
- Credentials that may appear on-site (only these): licensed plumber, insured,
  Westchester County licensed plumber, 15+ years, residential & light commercial.
  No license number was provided — do not invent or imply one.
