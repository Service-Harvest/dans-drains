# Phase 14d — Migrate a Custom Domain Between Repos

## When to use
A live custom domain needs to move from one GitHub Pages repo to another —
e.g. a full rebuild deployed to a new repo (v1 → v2), a repo rename, or repo
consolidation. The domain is already serving from an *existing* Pages repo,
and the DNS A/AAAA records are already correct and pointing at GitHub Pages.
This flow changes only GitHub's repo-level binding and the deployed artifact
`CNAME` — **never DNS.**

A domain can be actively served by only ONE Pages site at a time. The old
repo must fully let go — at both the API-binding AND the deployed-artifact
level — before the new repo will serve the domain. Binding the domain on the
new repo while the old repo's artifact still carries its `CNAME` leaves the
old build serving the domain even though the new API call "succeeded": the
serving layer honors the artifact `CNAME`, not the API binding alone (this is
the same serving-vs-control-plane distinction as Phase 13 step 8c).

## Before you start
- Confirm the NEW repo's site is fully built, deployed, and healthy at its
  own `[org].github.io/[NEW]` URL (run the Phase 12 gate if in doubt).
- Identify both repos: **OLD** (currently bound to the domain) and **NEW**
  (the target).
- **Snapshot DNS as a baseline** so you can prove it stayed untouched:
  `dig +short [domain] A` (expect the four GitHub Pages IPs,
  `185.199.108.153`–`185.199.111.153`) and `dig +short [domain] AAAA`.
  Record the exact output.

## Steps
1. **Record the current state.** `gh api repos/[org]/[OLD]/pages` and
   `gh api repos/[org]/[NEW]/pages` — confirm OLD holds `cname: [domain]` and
   NEW is unbound. `curl -s https://[domain]/` and record the content marker
   it currently serves (homepage `<title>`/H1) — this is the OLD marker you
   will later confirm has been replaced.
2. **Release the OLD repo's binding — both halves, or it won't let go.**
   a. Clear the repo-level binding:
      `gh api -X PUT repos/[org]/[OLD]/pages -F cname=null`, then re-read and
      confirm `cname: null`.
   b. Remove the artifact `CNAME` so the OLD build stops claiming the domain.
      Locate it (`gh api "repos/[org]/[OLD]/git/trees/HEAD?recursive=1"` →
      the `CNAME` path, usually `site/CNAME`), get its `sha` via the contents
      API, and `DELETE` it with a commit to the deploy branch (`main`). For a
      workflow-based Pages repo this push triggers a redeploy that republishes
      the OLD build WITHOUT the domain claim — wait for that run to succeed
      (`gh run watch [id] --exit-status`). Skipping this half is the classic
      trap: the API says released, but the OLD artifact keeps serving (or
      re-claims) the domain.
3. **Bind the domain to the NEW repo.**
   a. Add `/site/CNAME` containing the canonical domain to the NEW repo and
      push, so its deploy artifact carries the domain durably — this is what
      the serving layer honors, and without it the next NEW deploy would drop
      the domain. Wait for the NEW deploy run to succeed.
   b. Set the repo-level binding:
      `gh api -X PUT repos/[org]/[NEW]/pages -f cname=[domain]`. Confirm
      `cname: [domain]` and, once the cert issues (can take a few minutes),
      `https_enforced: true`.
4. **Verify serving at the serving layer, not just the API** (same check as
   Phase 13 step 8c). Poll `curl -s https://[domain]/` until it returns `200`
   serving the NEW build's content marker from step 1 — not merely that a
   page loads. A stale build, or the OLD repo still mid-release, can answer on
   the same URL with a genuine `age:0` / `x-cache:MISS` origin response that
   is nonetheless the wrong site; only the content marker proves the switch.
   Confirm HTTPS end to end: a valid cert with `CN=[domain]`, and
   `http://[domain]` → `https://[domain]` returning a `301`.
5. **Confirm the OLD build is no longer reachable at the domain.** The same
   `curl` now serves the NEW marker; the OLD repo (if kept) serves only at
   its own `[org].github.io/[OLD]` path. Leave the OLD repo in place —
   released, not deleted — unless the user explicitly asked to decommission
   it.
6. **Confirm DNS remained untouched.** Re-run the step-"Before you start"
   `dig` and confirm the A (and AAAA) records are byte-identical to the
   baseline. This flow never edits DNS; if the records differ, something
   external changed it — surface that to the user rather than accepting it
   silently.

## Output
Report: OLD repo released at both levels (API `cname` cleared **and** artifact
`CNAME` removed + redeployed); NEW repo bound and serving the correct build
over HTTPS, with the content marker that proves it; the OLD build confirmed no
longer reachable at the domain; and DNS confirmed byte-identical to the
baseline. State whether the OLD repo was left in place or decommissioned.
Flag any remaining manual, outside-the-pipeline steps to the user rather than
attempting them here.
