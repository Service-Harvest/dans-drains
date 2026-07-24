# Phase 1 — Category + Service Cleanup Audit

## Purpose
Take the raw GBP category/service list from intake and produce a clean,
deduplicated hierarchy. This hierarchy becomes the backbone of the entire
site architecture and, eventually, the actual live GBP listing.

## Task

Using the raw category/service list from `/intake/intake-completed.md`:

0. Sanity-check the raw GBP category names against real Google Business
   category data using `mcp__dataforseo__business_data_business_listings_search`
   (search on the client's business name + location from intake). Flag any
   raw category from intake that doesn't match a real, current Google
   category name — a stale or informally-worded category is worth catching
   here, before it gets cleaned up and baked into the architecture. This is
   a sanity check, not a redo of the client's category choices.
1. Remove exact duplicates and major overlaps.
2. Keep similar services separate only when customers and Google would likely
   treat them as meaningfully different (don't over-merge just to shorten the
   list).
3. Merge or remove items that are basically the same thing worded differently.
4. Group every remaining service under its correct parent category. **Nest for
   genuine fit first, then balance.** Two standing rules:
   - **Fit first.** Put each service under the secondary category it truly
     belongs to — e.g. a sewer-line repair under a Drainage/sewer category, a
     gas water-heater or boiler under a Gasfitter category, bathroom fixture
     *installs* under a Bathroom category, leak/flood work under a Water-Damage
     category — rather than defaulting everything into the primary category's
     catch-all bucket.
   - **When a service is genuinely ambiguous, nest it under the category with
     FEWER services**, to spread the structure out. A lopsided result — most
     secondary categories with a single nested service while the primary bucket
     holds 30+ — is a smell that fit-first nesting wasn't done. It is fine for a
     category to legitimately have only one service (nothing else genuinely fits
     it); it is not fine to leave services in the primary bucket that clearly
     belong under a thinly-populated secondary category. Never *invent* a nesting
     that misrepresents a service just to balance counts — accuracy for the
     client's real GBP wins over evenness.
5. Do not over-explain decisions, create homepage-linking notes, or create
   architecture commentary here — that happens in Phase 2/3. This phase is
   purely the cleanup.

## Output format

```
CATEGORIES:
- [Category]
- [Category]

CATEGORY / SERVICE HIERARCHY:
[Category 1 Name]
- [Service]
- [Service]

[Category 2 Name]
- [Service]
- [Service]
```

No primary/secondary or priority split here — this phase produces one clean
hierarchy, nothing else. Which categories/services become priority/
homepage-linked is a judgment call made in Phase 2 (weighing search volume,
competitive landscape, client-fit, and AI/LLM visibility) and finalized in
the Phase 3 checkpoint, not here.

This output feeds directly into Phase 2 (research) and Phase 3 (architecture).
