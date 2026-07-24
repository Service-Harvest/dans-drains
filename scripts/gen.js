#!/usr/bin/env node
/**
 * Dan's Drains — local page assembly generator (authoring tool, Phase 6).
 *
 * NOT served and NOT a runtime build step: this runs once locally to emit the
 * final, plain static HTML into /site/. Every /site/**\/index.html it writes is
 * exactly what ships — no template language reaches the browser. It automates
 * the Phase 6 "copy the /snippets/ header/nav/footer verbatim + drop authored
 * content into the page skeleton" step, and emits the anchor ledger + sitemap
 * from the SAME link data it writes into the pages, so ledger and pages can't
 * drift (satisfies validate.js's ledger-vs-body-copy cross-check by construction).
 *
 * Content lives in content-data.js. Run: node scripts/gen.js
 */
const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.join(__dirname, "..");
const SITE = path.join(ROOT_DIR, "site");
const SNIP = path.join(ROOT_DIR, "snippets");
const data = require("./content-data.js");

const DOMAIN = "hexorasystems.com";
const BASE = `https://${DOMAIN}`;
const TODAY = "2026-07-23";

const BIZ = {
  name: "Dan's Drains",
  nameEnt: "Dan&rsquo;s Drains",
  phone: "+1 855-597-5391",
  phoneTel: "+18555975391",
  email: "derek@hexorasystems.com",
  street: "1234 Main Street",
  city: "Armonk",
  region: "NY",
  regionName: "New York",
  zip: "10504",
  areas: ["Armonk", "Pleasantville", "Mount Kisco", "Yonkers", "Bedford", "Scarsdale"],
  geo: "Westchester County",
};

// ---- snippet loading (verbatim, {{ROOT}} substituted per depth) ----
function snippet(name, root) {
  let s = fs.readFileSync(path.join(SNIP, name), "utf8");
  // drop the leading HTML authoring comment
  s = s.replace(/^<!--[\s\S]*?-->\s*/, "");
  return s.replace(/\{\{ROOT\}\}/g, root);
}

// ---- link + ledger machinery ----
const ledgerRows = [];              // {source, destination, anchorText}
const anchorSeen = new Map();       // anchorText -> source (uniqueness guard)
const contentLedger = [];           // {page, details, angle, notes}

function registerAnchor(sourceUrl, destUrl, anchorText) {
  if (anchorSeen.has(anchorText)) {
    throw new Error(`DUPLICATE ANCHOR TEXT "${anchorText}" on ${sourceUrl} (first used on ${anchorSeen.get(sourceUrl) || anchorSeen.get(anchorText)})`);
  }
  anchorSeen.set(anchorText, sourceUrl);
  ledgerRows.push({ source: sourceUrl, destination: destUrl, anchorText });
}

// Expand [[LINK:slug|anchor]] (internal, recorded to ledger) and
// [[OUT:href|anchor]] (outbound authority) inside authored HTML.
function expandLinks(html, sourceUrl, root) {
  html = html.replace(/\[\[LINK:([^|\]]+)\|([^\]]+)\]\]/g, (_, slug, anchor) => {
    const destUrl = "/" + slug;
    registerAnchor(sourceUrl, destUrl, anchor);
    return `<a href="${root}${slug}/">${anchor}</a>`;
  });
  html = html.replace(/\[\[OUT:([^|\]]+)\|([^\]]+)\]\]/g, (_, href, anchor) => {
    return `<a href="${href}" rel="noopener nofollow" target="_blank">${anchor}</a>`;
  });
  return html;
}

// ---- schema builders ----
function bizNode() {
  return {
    "@type": ["PlumbingService", "LocalBusiness"],
    "@id": `${BASE}/#business`,
    name: BIZ.name,
    telephone: BIZ.phone,
    email: BIZ.email,
    url: `${BASE}/`,
    image: `${BASE}/assets/img/og-home.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BIZ.street,
      addressLocality: BIZ.city,
      addressRegion: BIZ.region,
      postalCode: BIZ.zip,
      addressCountry: "US",
    },
    areaServed: BIZ.areas.map((a) => ({ "@type": "City", name: a })),
    priceRange: "$$",
  };
}
function bizRef() { return { "@id": `${BASE}/#business` }; }

function webPageNode(url, name, type = "WebPage") {
  const clean = url === "/" ? "" : url.replace(/^\//, "");
  return {
    "@type": type,
    "@id": `${BASE}/${clean}#webpage`,
    url: `${BASE}/${clean}`,
    name,
    isPartOf: { "@id": `${BASE}/#website` },
    about: bizRef(),
  };
}

function breadcrumbNode(url, trail) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${BASE}/${url === "/" ? "" : url.replace(/^\//, "")}#breadcrumb`,
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${BASE}${t.url === "/" ? "/" : t.url}`,
    })),
  };
}

function faqNode(url, faqs) {
  return {
    "@type": "FAQPage",
    "@id": `${BASE}/${url === "/" ? "" : url.replace(/^\//, "")}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") },
    })),
  };
}

function serviceNode(url, name, serviceType, desc) {
  const clean = url.replace(/^\//, "");
  return {
    "@type": "Service",
    "@id": `${BASE}/${clean}#service`,
    name,
    serviceType: serviceType || name,
    url: `${BASE}/${clean}`,
    description: desc,
    provider: bizRef(),
    areaServed: BIZ.areas.map((a) => ({ "@type": "City", name: a })),
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: `${BASE}/`,
    name: BIZ.name,
    publisher: bizRef(),
  };
}

// ---- head + shell ----
function head({ slug, title, meta, ogImage, schema }) {
  const root = slug === "" ? "./" : "../";
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${meta}">
<link rel="canonical" href="${BASE}/${slug}">
<link rel="icon" type="image/svg+xml" href="${root}assets/img/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="${root}assets/img/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="${root}assets/img/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="${root}assets/img/apple-touch-icon.png">
<link rel="manifest" href="${root}site.webmanifest">
<meta name="theme-color" content="#0a5568">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Dan&rsquo;s Drains">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${meta}">
<meta property="og:url" content="${BASE}/${slug}">
<meta property="og:image" content="${BASE}/assets/img/${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${meta}">
<meta name="twitter:image" content="${BASE}/assets/img/${ogImage}">
<link rel="stylesheet" href="${root}assets/css/main.css">
<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": schema })}</script>
</head>
<body>
${snippet("header-nav.html", root)}
<main id="main">`;
}

function foot(root) {
  return `</main>
${snippet("footer.html", root)}
${ghlEmbeds(root)}
</body>
</html>`;
}

// ---- GHL embeds (Phase 10) ----
function ghlEmbeds() {
  return `<!-- GHL chat widget (Phase 10) -->
<script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" data-widget-id="69d95aea9a7ac3d3245191cd" defer></script>
<!-- GHL free-estimate popup form (click-triggered via .request-estimate-cta) -->
<iframe
  src="https://go.serviceharvest.com/widget/form/xHJhkUk8Wps0ag0Dokml"
  style="display:none;width:100%;height:100%;border:none;border-radius:8px"
  id="popup-xHJhkUk8Wps0ag0Dokml"
  data-layout="{'id':'POPUP'}"
  data-trigger-type="click"
  data-trigger-value=".request-estimate-cta"
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Free Estimate Form"
  data-height="1050"
  data-layout-iframe-id="popup-xHJhkUk8Wps0ag0Dokml"
  data-form-id="xHJhkUk8Wps0ag0Dokml"
  title="Free Estimate Form"
  data-modal-height="500">
</iframe>
<script src="https://go.serviceharvest.com/js/form_embed.js" defer></script>
<script>
/* GHL's form_embed.js auto-shows the popup on load regardless of
   data-trigger-type="click" (confirmed by testing). Suppress the auto-show and
   only reveal on a genuine .request-estimate-cta click. See phase-10. */
(function () {
  var POPUP_ID = "popup-xHJhkUk8Wps0ag0Dokml";
  var allowShow = false;
  function setDisp(id, val) {
    var el = document.getElementById(id);
    if (el) el.style.setProperty("display", val, "important");
  }
  function hidePopup() {
    if (allowShow) return;
    // Suppressing the auto-show only needs the overlay + wrapper hidden.
    setDisp(POPUP_ID + "-overlay", "none");
    setDisp(POPUP_ID + "-wrapper", "none");
  }
  var observer = new MutationObserver(hidePopup);
  observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["style"] });
  hidePopup();
  [50, 200, 500, 1000, 2000, 4000].forEach(function (ms) { setTimeout(hidePopup, ms); });
  document.addEventListener("click", function (e) {
    if (e.target.closest(".request-estimate-cta")) {
      e.preventDefault();
      allowShow = true;
      // Reopen must restore EVERY element GHL's own close handler hides — not
      // just the overlay + wrapper. Confirmed by live DOM inspection: GHL's
      // close sets the OUTER form container (POPUP_ID + "-div") to display:none
      // as well. Restoring only the wrapper + overlay leaves that container
      // hidden, so the 2nd (and later) opens only dim the screen with no
      // visible form. Restore all three, matching the display values GHL uses
      // when it shows the popup itself (overlay:flex, div/wrapper:block).
      setDisp(POPUP_ID + "-overlay", "flex");
      setDisp(POPUP_ID + "-div", "block");
      setDisp(POPUP_ID + "-wrapper", "block");
    }
  });
})();
</script>`;
}

// ---- shared band pieces ----
function heroBadges(badges) {
  return `<ul class="hero-badges">${badges.map((b) => `<li>${b}</li>`).join("")}</ul>`;
}
function ctaBand(titleHtml, root = "../", opts = {}) {
  const primary = opts.primary || { label: "Request a Free Estimate", href: `${root}contact/`, cls: "request-estimate-cta" };
  const secondary = opts.secondary || { label: "Call Dan’s Drains", href: null };
  const secHref = secondary.href || `tel:${BIZ.phoneTel}`;
  return `<section class="section section-deep cta-band"><div class="container">
<p class="cta-title">${titleHtml}</p>
<div class="btn-row">
<a class="btn btn-primary ${primary.cls || ""}" href="${primary.href}">${primary.label}</a>
<a class="btn btn-secondary" href="${secHref}">${secondary.label}</a>
</div></div></section>`;
}
function heroImg(root, slot, fetchHigh = true) {
  return `<img src="${root}assets/img/${slot.file}" alt="${slot.alt}" width="1200" height="630"${fetchHigh ? ' fetchpriority="high"' : ' loading="lazy"'}>`;
}

module.exports = {
  ROOT_DIR, SITE, DOMAIN, BASE, TODAY, BIZ,
  ledgerRows, anchorSeen, contentLedger,
  expandLinks, registerAnchor,
  bizNode, bizRef, webPageNode, breadcrumbNode, faqNode, serviceNode, websiteNode,
  head, foot, heroBadges, ctaBand, heroImg, snippet,
};
