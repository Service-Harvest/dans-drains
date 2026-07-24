#!/usr/bin/env node
/**
 * Dan's Drains — page assembler (Phase 6). Run: node scripts/build.js
 * Consumes content-data.js + gen.js helpers, writes /site/**\/index.html,
 * then emits /ledgers/anchor-ledger.md, /ledgers/content-ledger.md, and
 * /site/sitemap.xml from the same authored link data.
 */
const fs = require("fs");
const path = require("path");
const G = require("./gen.js");
const C = require("./content-data.js");

const DEFAULT_BADGES = [
  "Licensed &amp; Insured",
  "Same-Day Service Available",
  "Upfront Pricing",
  "15+ Years Local Experience",
];

function writePage(slug, html) {
  const dir = slug === "" ? G.SITE : path.join(G.SITE, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

function breadcrumbHtml(trail, root) {
  const items = trail
    .map((t, i) =>
      i === trail.length - 1
        ? `<li aria-current="page">${t.name}</li>`
        : `<li><a href="${root}${t.rel}">${t.name}</a></li>`
    )
    .join("\n      ");
  return `  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol>
      ${items}
    </ol>
  </nav>`;
}

function tocHtml(toc) {
  return `<nav class="toc" aria-label="On this page">
<p class="toc-title">On this page</p>
<ul>${toc.map((t) => `<li><a href="#${t.id}">${t.label}</a></li>`).join("")}</ul>
</nav>`;
}

// ---- service / category page ----
function buildServicePage(p) {
  const slug = p.slug;
  const root = "../";
  const url = "/" + slug;
  if (p.sections.length !== 5) throw new Error(`${slug}: needs exactly 5 sections, has ${p.sections.length}`);
  if (p.faqs.length < 5 || p.faqs.length > 6) throw new Error(`${slug}: needs 5-6 FAQs, has ${p.faqs.length}`);

  const badges = p.badges || DEFAULT_BADGES;
  const trail = p.trail; // [{name, rel}], last is current
  const schema = [
    G.bizNode(),
    G.websiteNode(),
    G.webPageNode(url, p.h1),
    G.serviceNode(url, p.serviceName || p.h1, p.serviceType, p.metaPlain || p.meta),
    G.breadcrumbNode(url, trail.map((t) => ({ name: t.name, url: t.abs }))),
    G.faqNode(url, p.faqs),
  ];

  // sections HTML with alternating bg + mid CTA after section 2
  const bg = ["", "section-alt", "", "section-alt", ""]; // sections 1..5 -> plain,alt,plain,alt,plain
  const secHtml = p.sections
    .map((s, i) => {
      const cls = `section content${bg[i] ? " " + bg[i] : ""}`;
      const toc = i === 0 ? tocHtml(p.toc) + "\n" : "";
      const body = G.expandLinks(s.html, url, root);
      let block = `<section class="${cls}" id="${s.id}"><div class="container">
${toc}<h2>${s.h2}</h2>
${body}
</div></section>`;
      if (i === 1) {
        block += "\n" + G.ctaBand(p.midCta || `Talk to a local Westchester County plumber today.`);
      }
      return block;
    })
    .join("\n");

  const faqHtml = `<section class="section section-alt" id="faq"><div class="container">
<h2>Frequently Asked Questions</h2>
<div class="faq">
${p.faqs.map((f) => `<div class="faq-item"><h3>${f.q}</h3><p>${G.expandLinks(f.a, url, root)}</p></div>`).join("\n")}
</div></div></section>`;

  const heroSection = `<section class="hero hero-media"><div class="container">
<div class="media-row">
<div class="media-text">
<h1>${p.h1}</h1>
<p class="lead">${p.lead}</p>
<div class="btn-row">
<a class="btn btn-primary request-estimate-cta" href="${root}contact/">Request a Free Estimate</a>
<a class="btn btn-secondary" href="tel:${G.BIZ.phoneTel}">Call ${G.BIZ.nameEnt}</a>
</div>
${G.heroBadges(badges)}
</div>
<div class="media-media">
${G.heroImg(root, p.hero, true)}
</div>
</div>
</div></section>`;

  const openCta = G.ctaBand(p.openCta || `Need a plumber in Westchester County? We can usually help the same day.`);
  const finalCta = G.ctaBand(p.finalCta || `Ready to book? Reach ${G.BIZ.nameEnt} for fast, upfront plumbing help.`);

  const html =
    G.head({ slug, title: p.title, meta: p.meta, ogImage: p.ogImage, schema }) +
    "\n" + breadcrumbHtml(trail, root) +
    "\n" + heroSection +
    "\n" + openCta +
    "\n" + secHtml +
    "\n" + faqHtml +
    "\n" + finalCta +
    "\n" + G.foot(root);
  writePage(slug, html);

  G.contentLedger.push({ page: url, details: p.localDetails || "", angle: p.angle || "", notes: `Tier ${p.tier}` });
}

// ---- generic custom page (home/hub/about/contact): body provided as HTML ----
function buildCustomPage(p) {
  const slug = p.slug;
  const root = slug === "" ? "./" : "../";
  const url = slug === "" ? "/" : "/" + slug;
  const body = G.expandLinks(p.body(root), url === "/" ? "/" : url, root);
  const bcrumb = p.trail ? breadcrumbHtml(p.trail, root) + "\n" : "";
  const html =
    G.head({ slug, title: p.title, meta: p.meta, ogImage: p.ogImage, schema: p.schema() }) +
    "\n" + bcrumb + body +
    "\n" + G.foot(root);
  writePage(slug, html);
  if (p.contentLedger) G.contentLedger.push(p.contentLedger);
}

// ---- run ----
C.customPages(G, buildCustomPage);
C.servicePages(G, buildServicePage);

// ---- emit anchor ledger ----
const ledgerHeader = `# Anchor Text Ledger

> Generated in Phase 6 by scripts/build.js from the same link tokens written
> into the pages, so every row is guaranteed present as a real body-copy link
> (validate.js cross-checks this). Updated by every Phase 14 edit — never
> regenerate blindly on an edit; append/check against existing entries.
> Source Page and Destination Page are exact URL paths; scripts/validate.js
> parses this table directly. No anchor string appears twice (sitewide rule).

| Source Page | Destination Page | Anchor Text | Placement Note |
|---|---|---|---|
`;
const ledgerBody = G.ledgerRows
  .map((r) => `| ${r.source} | ${r.destination} | ${r.anchorText} | in-body contextual link |`)
  .join("\n");
fs.writeFileSync(path.join(G.ROOT_DIR, "ledgers", "anchor-ledger.md"), ledgerHeader + ledgerBody + "\n");

// ---- emit content ledger ----
const clHeader = `# Content Ledger

> Generated in Phase 6, checked/updated by Phase 8 QA and every Phase 14 edit.
> Tracks which local details, angles, and phrasings have been used on which
> pages, to prevent cross-page redundancy on a ~50-page site.

| Page | Local Details Used | Main Angle/Hook | Notes |
|---|---|---|---|
`;
const clBody = G.contentLedger
  .map((c) => `| ${c.page} | ${c.details} | ${c.angle} | ${c.notes} |`)
  .join("\n");
fs.writeFileSync(path.join(G.ROOT_DIR, "ledgers", "content-ledger.md"), clHeader + clBody + "\n");

// ---- emit sitemap ----
const sitemapUrls = C.sitemapOrder();
const smBody = sitemapUrls
  .map((u) => `  <url>\n    <loc>${G.BASE}/${u}</loc>\n    <lastmod>${G.TODAY}</lastmod>\n  </url>`)
  .join("\n");
fs.writeFileSync(
  path.join(G.SITE, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${smBody}\n</urlset>\n`
);

console.log(`Built ${G.ledgerRows.length} anchor rows, ${G.contentLedger.length} content-ledger rows, ${sitemapUrls.length} sitemap URLs.`);
console.log("Pages written to /site/. Run: node scripts/validate.js");
