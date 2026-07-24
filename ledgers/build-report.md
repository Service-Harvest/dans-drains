# Build Report — Dan's Drains

> Generated in Phase 2, updated by Phases 5, 7, 8, and read in full by
> Phase 13 for the final report to the user.

## Connection Status
- **DataforSEO MCP:** Connected and used directly for all Phase 2 research
  (search volume via `kw_data_google_ads_search_volume`, competitive landscape
  via `serp_organic_live_advanced`, AI/LLM visibility via
  `ai_opt_llm_ment_top_domains` and `ai_optimization_llm_response`). No web-search
  fallback needed; all Phase 2 figures are DataforSEO-verified.
- **Gemini (image gen):** Working. Used `gemini-2.5-flash-image` via
  `scripts/generate-image.js` to generate 14 hero/OG images at 1200×630. No
  failures, no retries needed, no SVG substitutions.

## Research Takeaways

### Geo-target decision (see architecture.md for full comparison)
- Selected target: **Westchester County, NY** (hybrid — physical city Armonk stays
  in NAP/schema/body).
- Armonk literal-city demand is negligible (~10/mo; 2 of 4 phrasings return no
  data). Westchester head term = 480/mo with all 4 phrasings clustering to an
  identical 480 (Google treating them as one demand pool — strong signal the market
  is named by county). Yonkers is higher (720/mo) but is a distinct city ~15mi south:
  unreachable from an Armonk GBP local pack and would misrepresent HQ, so rejected
  despite volume.

### Priority-selection research
- **Thin-but-complete market confirmed.** Almost every `[service] + westchester ny`
  exact-match term returns no measurable volume (water heater install/replace, sewer
  line repair, leak detection, sump pump, hydro jetting, gas line, sewer camera,
  burst/frozen pipe all null). Only two service terms register: *emergency plumber
  westchester ny* (20/mo, LOW competition, CPC $62.34 — very high commercial intent)
  and *drain cleaning westchester ny* (20/mo, LOW competition). This is expected and
  is NOT a reason to cut pages — the full service list mirrors the GBP per strategy.
- **Competitive landscape:** "plumber westchester ny" SERP is dominated by
  Roto-Rooter, regional multi-trade firms (Bruni & Campisi, Mazzacone, Bleakley,
  Flotechs) and heavy directory presence (Yelp, Angi, Diamond Certified). AI Overviews
  are present on the county-level query. At the Armonk city level the field is much
  thinner (Gleason / Armonk Plumbing dominate a small local pack) — consistent with the
  low city-level demand.
- **AI/LLM visibility:** `ai_optimization_llm_response` for "best plumber in
  Westchester County" returns an aggregator-driven answer — ChatGPT cites Skaggs-Walsh,
  Diamond Certified, Prime Buyers Report, Trusted Local Contractors and names dozens of
  firms; no single small plumber owns the AI answer. Notably, Armonk-area competitors
  (Karnes Plumbing – Armonk; Spano – Bedford Hills; Thru Way – Mt. Kisco) surface via
  Prime Buyers Report. Implication logged for later: AI citation for this market is won
  through directory/aggregator listings as much as on-site content. The raw
  `ai_opt_llm_ment_top_domains` for "plumber westchester county ny" skewed to
  gov/licensing domains (nyc.gov, westchestergov.com) — that keyword pulls
  licensing-info intent rather than hire-intent; the llm_response spot-check is the more
  representative AI signal here.

### Phase 1 cleanup notes
- Merged near-duplicate categories: Septic system service + Septic tank service →
  **Septic System Service**; Bathroom remodeler + Bathroom renovator → **Bathroom
  Remodeler**.
- Merged near-duplicate services: Clogged drain repair → Drain Cleaning; Video pipe
  inspection → Sewer Camera Inspection; Rooter service → Drain Snaking.
- Result: 6 categories (1 primary + 5 secondary), 47 service pages.

## Build approach & judgment calls (Phases 4–12, made autonomously per the execution model)
- **Page assembly generator (authoring tool).** Pages were assembled by a local
  Node generator (`scripts/gen.js`, `scripts/build.js`, `scripts/content-*.js`)
  rather than hand-typed one file at a time. This is an authoring tool only — it
  runs once locally and emits final, plain static HTML into `/site/`. Nothing in
  `/site/` is a template or requires a runtime build; the served output is exactly
  what ships. The generator emits the anchor ledger and sitemap from the same link
  tokens it writes into the pages, so ledger↔page consistency is guaranteed by
  construction (validate.js confirms it). **Classification: this stays
  client-specific** — it is an implementation choice for this build, not a fix to
  a reusable pipeline file, so nothing was ported to `pipeline-template/`.
- **No reusable-file bugs surfaced.** `scripts/validate.js`,
  `scripts/generate-image.js`, and the phase files all worked as written this
  build; nothing needed porting back to `pipeline-template/`. (Noted for the
  record because the sync rule requires stating it either way.)
- **Design system.** No brand colors were in the intake, so the palette was
  chosen from the aesthetic direction: deep aqua-teal `#0a5568` (water/drain
  trust) with a clay `#b23c07` accent for CTAs. All button/background pairings
  pass the validator's WCAG-AA contrast check.
- **Favicon is a generated placeholder.** No logo was provided; a simple "DD"
  monogram favicon set was generated. **The client should replace this with their
  real brand mark once one exists.**
- **Meta descriptions** were derived from each page's authored lead (unique per
  page). 16 non-blocking length warnings (title/meta slightly outside the
  50–60 / 150–160 char guidance); none block deploy.
- **Anchor ledger** was seeded during Phase 6 (not pre-Phase-4) because the
  anchors are derived from the drafted body copy, which does not exist until
  Phase 6. A "deferred, not skipped" note held the place until then; it is now
  fully seeded (184 rows) and verified by the Phase 12 gate before any deploy.

## Content Quality Notes (Phase 8 QA)
- **No invented facts.** Every page uses only intake-authorized claims: licensed
  & insured, Westchester County licensed plumber, 15+ years, same-day/emergency,
  upfront pricing, residential & light commercial. No license number, review
  counts, ratings, exact response times, or pricing were invented anywhere.
  Reviews/GBP are placeholders per the intake.
- **Geo hybrid applied correctly.** "Westchester County" is used in URLs, titles,
  and H1s; the physical Armonk NAP appears in the footer, schema, About, and
  Contact — "based in Armonk, serving Westchester County."
- **Cross-page redundancy controlled.** Each page carries its own angle
  (see content-ledger.md); shared local facts (older homes, finished basements,
  cold winters, root intrusion) are drawn on from distinct premises per page
  rather than a repeated opening.
- **Voice/reading level:** friendly local-expert tone, short paragraphs, "we/you,"
  ~8th-grade level, no corporate-speak, throughout.
- **Structure:** every category/service page passes the gate's exactly-5-H2 +
  5–6-FAQ + alternating-background + hero-media checks.

## Image Notes (Phase 7)
- **56 hero/OG images total, all 1200×630** (each doubles as the page's OG image
  per the Phase 4a convention).
- **42 images reused** from the sibling `petes-plumbing-mock-client-v2` build.
  These are AI-generated, business-agnostic *illustrative* plumbing photos
  (a technician at a water heater, a drain being cleared, etc.) — decorative, not
  presented as "our actual team/work," so the Phase 7 honesty rule is satisfied.
  Reusing them avoided regenerating ~42 near-identical generic images.
  **Judgment call: cost control.** If the client prefers wholly original imagery,
  these can be regenerated later.
- **14 images generated fresh** via Gemini for topics with no sibling equivalent:
  commercial-plumbing-services, drain-snaking, gas-water-heater-installation,
  hot-water-system-repair, laundry-room-plumbing, outdoor-faucet-repair,
  pipe-replacement, plumbing-maintenance, rainwater-tank-installation,
  urinal-installation, water-filtration-system-installation,
  water-leak-sensor-installation, water-line-replacement, water-softener-installation.
- **No SVG substitutions were needed** — every image slot has a real photo.

## GHL Embeds (Phase 10) — verified live
- Chat widget: loads sitewide, deferred, renders bottom-right.
- Free-estimate popup: click-triggered via `.request-estimate-cta`, with the
  MutationObserver suppression from phase-10. **Verified in-browser:** the popup
  does NOT auto-open on load, and clicking a "Request a Free Estimate" CTA opens
  it (overlay → display:flex, wrapper → display:block). Wrapper/overlay IDs
  (`popup-xHJhkUk8Wps0ag0Dokml-wrapper/-overlay`) confirmed against the live DOM.
- Review widget & GBP map: left as visible placeholders per the intake.

## Phase 12 gate
- `node scripts/validate.js` → **All checks passed, 0 failures** (16 non-blocking
  length warnings). Safe to deploy.
