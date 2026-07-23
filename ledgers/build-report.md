# Build Report — Dan's Drains

> Generated in Phase 2, updated by Phases 5, 7, 8, and read in full by
> Phase 13 for the final report to the user.

## Connection Status
- **DataforSEO MCP:** Connected and used directly for all Phase 2 research
  (search volume via `kw_data_google_ads_search_volume`, competitive landscape
  via `serp_organic_live_advanced`, AI/LLM visibility via
  `ai_opt_llm_ment_top_domains` and `ai_optimization_llm_response`). No web-search
  fallback needed; all Phase 2 figures are DataforSEO-verified.
- **Gemini (image gen):** Not yet exercised (Phase 7).

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

## Content Quality Notes
(Populated in Phase 8.)

## Image Notes
(Populated in Phase 7.)
