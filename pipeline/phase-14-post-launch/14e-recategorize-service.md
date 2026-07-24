# Phase 14e — Re-nest / Recategorize a Service (move it between categories)

## When to use
Any time an existing service page's parent changes: moving it from the primary
"Plumber" bucket into a secondary category, from one secondary category to
another, or back into the primary bucket. Re-nesting is **not** just flipping the
parent field — it has to cascade to the linking on both the old and new parent,
and to the service's own backlink, or you re-introduce the recurring
parent↔child link gap.

## Why this flow exists
The URL never changes when a service is re-nested (the slug is stable), so it's
tempting to change only the nesting record and move on. But three linked things
depend on the parent and must be updated together:

1. the moved service's **breadcrumb + `Service` schema parent** (derived from the
   nesting record — usually automatic),
2. the moved service's **backlink** to its parent (must now point at the NEW
   parent — or the HOMEPAGE if it moved into/out of the primary bucket, since the
   primary category has no page of its own),
3. the **old** parent category page (must stop linking the departed service) and
   the **new** parent category page (must start linking the arrived service).

`scripts/validate.js` hard-fails on #2 and #3 (the parent↔child link gate), so
skipping any of them blocks deploy — but do them deliberately here rather than
discovering them at the gate.

## Steps (do all of them; none is optional)

1. **Update the nesting record.** Change the service's parent in the single
   source of truth — architecture.md's "Category nesting table" (and the same
   `cat`/parent field wherever the build reads nesting). Change the prose
   "Category → service nesting" summary too so counts stay honest.

2. **Old parent category page — remove the stale child link.** Open the OLD
   parent category page and delete the in-body contextual link (and its
   anchor-ledger row) that pointed to the departed service. Do not leave a link
   from a category to a service that is no longer its child.

3. **New parent category page — add a child link.** Add a real in-body
   contextual link from the NEW parent category page to the arrived service,
   with **full golden-rules anchor text** (unique sitewide, descriptive, no brand
   name, never repeated) — this direction is the SEO-important one. Add its
   anchor-ledger row. (If the move is INTO the primary bucket, there is no
   category page to add a child link to — skip this step; the Services hub
   already covers it.)

4. **Moved service — re-point its backlink.** Update the service page's own
   parent backlink so it points at the NEW parent:
   - moved under a secondary category → backlink to that category page
     (`Back to [Category]`),
   - moved into the primary "Plumber" bucket → backlink to the **homepage** (`Back
     to Home`), because the primary category's role is served by the homepage.
   This backlink stays a simple button (exempt from the golden-rules /
   anchor-uniqueness treatment) — see phase-06.

5. **Re-run `scripts/validate.js`** and confirm a clean pass. The parent↔child
   gate confirms the moved service now backlinks its correct parent, the new
   parent links the arrived child, and the old parent no longer claims it.
   Update the anchor ledger to reflect the added/removed links.

6. Redeploy per Phase 13 (push; the workflow re-runs the gate before publishing).

## Automation note
If the build derives the backlink and breadcrumb from the nesting record
(recommended), steps #1 and #4 collapse into a single edit — changing the parent
field automatically re-points the breadcrumb, schema, and backlink. Steps #2 and
#3 (the category-page contextual links) are content and still need a human edit,
which is exactly why the validator gate exists as the backstop.
