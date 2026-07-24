/* Dan's Drains — authored page bodies (Phase 5/6). Attached onto content-data.js.
   All prose here is authored per page. build.js applies structure. */
module.exports = function (exp) {
  const { CATS, CATALOG, catName, CANONICAL } = exp;

  const heroFile = (slug) => "og-" + slug.replace(/-westchester-ny$/, "") + ".webp";

  // Build a breadcrumb trail for a service/category page.
  // cat = "plumber" (primary bucket) -> Home > Services > name
  // cat = <category slug>            -> Home > Services > Category > name
  // isCategory                       -> Home > Services > name
  function trailFor(slug, name, cat, isCategory) {
    const t = [
      { name: "Home", rel: "", abs: "/" },
      { name: "Services", rel: "services/", abs: "/services" },
    ];
    if (!isCategory && cat && cat !== "plumber") {
      t.push({ name: catName(cat), rel: cat + "/", abs: "/" + cat });
    }
    t.push({ name, rel: slug + "/", abs: "/" + slug });
    return t;
  }

  // ================= CUSTOM PAGES =================
  function homePage(G) {
    const B = G.BIZ;
    return {
      slug: "",
      title: "Plumber in Westchester County, NY | Dan's Drains",
      meta: "Licensed, insured plumber based in Armonk serving Westchester County, NY. Same-day service, upfront pricing, and 15+ years of local experience. Call today.",
      ogImage: "og-home.webp",
      schema: () => [
        G.bizNode(),
        G.websiteNode(),
        G.webPageNode("/", "Plumber in Westchester County, NY | Dan's Drains", "WebPage"),
        G.breadcrumbNode("/", [{ name: "Home", url: "/" }]),
        G.faqNode("/", HOME_FAQS),
      ],
      contentLedger: { page: "/", details: "Armonk base, Westchester County service area, 15+ years, same-day/emergency, septic-connected homes, cold winters", angle: "Trusted local generalist you can reach fast", notes: "Homepage (Tier 1)" },
      body: (root) => homeBody(root, B, G),
    };
  }


  const HOME_FAQS = [
    { q: "What areas do you serve?", a: "We are based in Armonk and serve homeowners and small businesses across Westchester County, including Pleasantville, Mount Kisco, Yonkers, Bedford, and Scarsdale. If you are nearby and not sure whether you are in our area, just call and ask." },
    { q: "Do you offer same-day plumbing service?", a: "Yes, same-day service is available for many repairs, and we keep room in the schedule for urgent problems like leaks and clogged drains. Call early in the day when you can, and we will tell you honestly what is realistic." },
    { q: "Are you licensed and insured?", a: "Yes. Dan's Drains is a licensed and insured plumbing company, and we hold a Westchester County plumbing license. We handle both residential and light commercial plumbing." },
    { q: "Will I know the price before work starts?", a: "Yes. We believe in upfront pricing. We look at the problem, explain your options in plain language, and give you a price before we begin, so there are no surprises when the work is done." },
    { q: "Do you handle emergency plumbing?", a: "We do. For burst pipes, major leaks, and no-water situations, reach out right away and we will walk you through shutting off the water and get to you as fast as we can. Learn more on our [[LINK:emergency-plumbing-repair-westchester-ny|emergency plumbing help page]]." },
    { q: "What kinds of plumbing do you work on?", a: "Everyday repairs, water heaters, drain and sewer work, leak repairs, fixtures, sump pumps, gas lines, and light commercial plumbing. If you are not sure whether we cover it, ask — we would rather point you in the right direction than leave you guessing." },
  ];

  function homeBody(root, B, G) {
    const badges = G.heroBadges([
      "Licensed &amp; Insured",
      "Same-Day Service Available",
      "Upfront Pricing",
      "15+ Years Local Experience",
    ]);
    const card = (title, body) => `<div class="card"><h3>${title}</h3><p>${body}</p></div>`;
    const prioSection = (bg, imgSide, h2, slug, img, alt, paras, anchorSentence) => {
      const media = `<div class="media-media"><img src="${root}assets/img/${img}" alt="${alt}" width="1200" height="630" loading="lazy"></div>`;
      const text = `<div class="media-text"><h2>${h2}</h2>${paras}<p>${anchorSentence}</p><div class="btn-row"><a class="btn btn-secondary" href="${root}${slug}/">Learn More</a><a class="btn btn-primary request-estimate-cta" href="${root}contact/">Request a Free Estimate</a></div></div>`;
      const inner = imgSide === "right" ? text + media : media + text;
      const rev = imgSide === "left" ? " reverse" : "";
      return `<section class="section${bg ? " " + bg : ""} content"><div class="container"><div class="media-row${rev}">${inner}</div></div></section>`;
    };
    return `<section class="hero hero-media"><div class="container">
<div class="media-row">
<div class="media-text">
<h1>Your Licensed, Insured Plumber in Westchester County, NY</h1>
<p class="lead">Dan's Drains is a local, family-run plumbing company based in Armonk. For over 15 years we have helped Westchester County homeowners with everyday repairs, emergencies, water heaters, drains, and more — with honest advice and upfront pricing.</p>
<div class="btn-row">
<a class="btn btn-primary request-estimate-cta" href="${root}contact/">Request a Free Estimate</a>
<a class="btn btn-secondary" href="tel:${B.phoneTel}">Call ${B.nameEnt}</a>
</div>
${badges}
</div>
<div class="media-media">
<img src="${root}assets/img/og-home.webp" alt="Dan's Drains plumber in a work uniform standing by a service van in a Westchester County neighborhood" width="1200" height="630" fetchpriority="high">
</div>
</div>
</div></section>

<section class="section section-alt content"><div class="container">
<h2>Why Homeowners Call Dan's Drains</h2>
<p>We are not a national franchise or a high-pressure sales company. We are a small local business that shows up when promised, keeps your home clean, and explains what is going on before we touch anything.</p>
<div class="grid grid-4">
${card("Local &amp; Family-Run", "Based in Armonk and serving Westchester County. When you call, you reach people who know the area and its older homes.")}
${card("Honest, Upfront Pricing", "We explain your options and give you a price before we start. No surprises, no pressure to buy more than you need.")}
${card("Clean &amp; Respectful", "We treat your home like our own — shoe covers, tidy work areas, and no mess left behind.")}
${card("15+ Years Experience", "From quick fixes to bigger repairs, we have seen it across Westchester's mix of old and new plumbing.")}
</div>
</div></section>

<section class="section content"><div class="container">
<h2>Reviews &amp; Google Business Profile</h2>
<p>We are proud of the reputation we have built in Westchester County by doing honest work and treating people right. Verified reviews and our Google Business Profile will appear here.</p>
<div class="embed-holder">Google reviews widget placeholder — to be connected.</div>
<div class="embed-holder" style="margin-top:1rem">Google Business Profile map embed placeholder — to be connected.</div>
</div></section>

${prioSection("section-alt", "right", "Fast Emergency Plumbing Help", "emergency-plumbing-repair-westchester-ny", "og-emergency-plumbing-repair.webp", "Dan's Drains plumber shutting off a home water supply valve during an emergency call", `<p>When a pipe bursts or water is spreading across the floor, you do not have time to shop around. We keep room in the day for urgent calls and will stay on the phone to help you shut off the water before we arrive.</p><p>Once we are there, we find the source, stop the water, and explain your options before starting. You get a clear price up front, not a frightening number after the fact.</p>`, `For burst pipes and sudden leaks, count on [[LINK:emergency-plumbing-repair-westchester-ny|our round-the-clock emergency response]] to get things under control quickly.`)}

${prioSection("", "left", "Water Heater Installation Done Right", "water-heater-installation-westchester-ny", "og-water-heater-installation.webp", "New water heater installed in a clean Westchester County basement by Dan's Drains", `<p>A new water heater is a big purchase, so we help you get it right the first time. We size the unit to how your household actually uses hot water, then install it safely and to code.</p><p>Whether you want a straightforward tank replacement or you are weighing a tankless upgrade, we give you the honest trade-offs instead of pushing the priciest option.</p>`, `See how we handle [[LINK:water-heater-installation-westchester-ny|sizing and installing a new water heater]] for Westchester homes of every age.`)}

${G.ctaBand("Have a plumbing problem that will not wait? Let's talk today.", "./")}

${prioSection("section-alt", "right", "Drain Cleaning That Actually Lasts", "drain-cleaning-westchester-ny", "og-drain-cleaning.webp", "Dan's Drains technician clearing a slow kitchen drain in a Westchester County home", `<p>A slow or clogged drain is more than an annoyance — it is a sign something is building up in the line. We clear the blockage and look at why it happened, so it does not come right back.</p><p>Being the company named Dan's Drains, this is bread-and-butter work for us. We do it clean, and we tell you if a recurring clog points to a bigger issue.</p>`, `Learn what sets [[LINK:drain-cleaning-westchester-ny|a thorough drain cleaning visit]] apart from a quick plunge-and-go.`)}

${prioSection("", "left", "Full Drainage &amp; Sewer Services", "drainage-service-westchester-ny", "og-drainage-service.webp", "Dan's Drains van and drainage equipment outside a Westchester County property", `<p>Beyond a single slow sink, we handle the whole drainage picture: main-line clogs, grease, root intrusion, and video inspections to see exactly what is happening underground.</p><p>For homes on older clay or cast-iron lines — common in this part of Westchester — that camera work saves a lot of guesswork and digging.</p>`, `Explore the full range of [[LINK:drainage-service-westchester-ny|drainage and sewer solutions we offer]] across the county.`)}

<section class="section section-alt content"><div class="container">
<h2>Serving All of Westchester County</h2>
<p>We are based in Armonk and travel to homes and small businesses throughout the area. Our regular service areas include Armonk, Pleasantville, Mount Kisco, Yonkers, Bedford, and Scarsdale.</p>
<p>Because we work across the county every week, we know its housing stock well — from older homes with mixed pipe materials to newer builds with finished basements and sump pumps. That local knowledge helps us solve problems faster.</p>
</div></section>

<section class="section content"><div class="container">
<h2>How Working With Us Works</h2>
<p>We keep the process simple and clear from the first call to the finished job.</p>
<ol>
<li><strong>Call or request an estimate.</strong> Tell us what is going on. For emergencies, we help you stop the water right away.</li>
<li><strong>We diagnose and explain.</strong> We find the real cause and lay out your options in plain language.</li>
<li><strong>You get an upfront price.</strong> You approve the price before we begin — no surprises.</li>
<li><strong>We do the work cleanly.</strong> We complete the repair, test it, and leave your home tidy.</li>
</ol>
</div></section>

<section class="section section-deep content"><div class="container">
<h2>Licensed, Insured, and Local</h2>
<p>Dan's Drains is a licensed and insured plumbing company holding a Westchester County plumbing license. We carry the credentials that matter and back our work with clear communication and clean workmanship.</p>
<ul class="trust-list grid-2">
<li>Licensed &amp; insured plumbing</li>
<li>Westchester County licensed plumber</li>
<li>Residential &amp; light commercial</li>
<li>15+ years of local experience</li>
<li>Same-day service available</li>
<li>Upfront, honest pricing</li>
</ul>
</div></section>

<section class="section section-alt" id="faq"><div class="container">
<h2>Frequently Asked Questions</h2>
<div class="faq">
${HOME_FAQS.map((f) => `<div class="faq-item"><h3>${f.q}</h3><p>${f.a}</p></div>`).join("\n")}
</div>
</div></section>

${G.ctaBand("Ready for a plumber who answers the phone and shows up? Call Dan's Drains today.", "./")}`;
  }

  // ---- Services hub ----
  function hubPage(G) {
    return {
      slug: "services",
      title: "Plumbing Services in Westchester County, NY | Dan's Drains",
      meta: "Browse the full range of plumbing services from Dan's Drains — drain cleaning, water heaters, emergency repairs, sewer, gas, and more across Westchester County, NY.",
      ogImage: "og-services.webp",
      trail: [
        { name: "Home", rel: "", abs: "/" },
        { name: "Services", rel: "services/", abs: "/services" },
      ],
      schema: () => {
        const items = CATALOG.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.name,
          url: `${G.BASE}/${s.slug}`,
        }));
        return [
          G.bizNode(),
          G.websiteNode(),
          G.webPageNode("/services", "Plumbing Services in Westchester County, NY", "CollectionPage"),
          { "@type": "ItemList", "@id": `${G.BASE}/services#itemlist`, itemListElement: items },
          G.breadcrumbNode("/services", [{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]),
        ];
      },
      body: (root) => hubBody(root, G),
    };
  }

  function hubBody(root, G) {
    const cardFor = (s) =>
      `<div class="card"><h3>[[LINK:${s.slug}|${s.name}]]</h3><p>${s.blurb}</p><a class="btn btn-secondary" href="${root}${s.slug}/">Learn More</a></div>`;
    const grid = (list) => `<div class="grid grid-3">${list.map(cardFor).join("\n")}</div>`;

    // primary bucket, split into readable sub-groups (Phase 6 rule 5)
    const bucket = CATALOG.filter((s) => s.cat === "plumber");
    const groups = [
      { key: "emergency", h3: "Emergency &amp; Leak Repair", intro: "When water is where it should not be, these are the calls we drop everything for." },
      { key: "repair", h3: "Pipe, Leak &amp; Sewer Repair", intro: "Repairs that protect your home from water damage, from a dripping joint to a failing main line." },
      { key: "water", h3: "Water Heating &amp; Treatment", intro: "Hot water, softer water, and cleaner water — installed and repaired for your home." },
      { key: "fixtures", h3: "Fixtures &amp; Installations", intro: "Toilets, faucets, sinks, showers, and the everyday fixtures that keep a home running." },
      { key: "remodel", h3: "Kitchen &amp; Bath Remodeling Plumbing", intro: "The behind-the-wall plumbing that makes a remodel go smoothly." },
      { key: "maintenance", h3: "Inspections &amp; Maintenance", intro: "Simple checkups that catch small problems before they become expensive ones." },
      { key: "specialty", h3: "Specialty Plumbing", intro: "Less-common projects we are glad to take on." },
      { key: "commercial", h3: "Commercial Plumbing", intro: "Plumbing for offices, retail, and small commercial spaces." },
    ];
    const bucketHtml = groups
      .map((g) => {
        const list = bucket.filter((s) => s.group === g.key);
        if (!list.length) return "";
        return `<div class="hub-cat"><h4>${g.h3}</h4><p>${g.intro}</p>${grid(list)}</div>`;
      })
      .join("\n");

    // Category sections. The category HEADING itself links to that category's
    // dedicated page (anchor = the exact canonical name), so the parent grouping
    // is clickable, not just plain text over a card grid. Framing sentences stay
    // plain — the heading carries the link.
    const catFrames = {
      "drainage-service-westchester-ny": "From a single slow sink to a main-line backup, we clear, inspect, and maintain the drains and sewer lines in your home.",
      "septic-system-service-westchester-ny": "For homes on a septic system, we handle the plumbing side of septic care — the drains, lines, and fixtures that feed the tank.",
      "gasfitter-westchester-ny": "Licensed gas work matters. We handle gas line repairs, connections, and safety checks for your home.",
      "bathroom-remodeler-westchester-ny": "Planning a bathroom project? We handle the rough-in and fixture plumbing that makes a remodel last.",
      "water-damage-restoration-westchester-ny": "Catch leaks before they spread. We find and stop the plumbing source and add safeguards that warn you early.",
    };
    const catHtml = CATS.map((c) => {
      const list = CATALOG.filter((s) => s.cat === c.slug);
      return `<div class="hub-cat"><h3>[[LINK:${c.slug}|${c.name}]]</h3><p>${catFrames[c.slug]}</p>${list.length ? grid(list) : ""}</div>`;
    }).join("\n");

    return `<section class="hero"><div class="container">
<h1>Our Plumbing Services Across Westchester County</h1>
<p class="lead">Dan's Drains covers the full range of residential and light commercial plumbing — from a stubborn clogged drain to a new water heater or a sewer repair. Browse by category below, or call us and we will point you to the right fix.</p>
<div class="btn-row">
<a class="btn btn-primary request-estimate-cta" href="${root}contact/">Request a Free Estimate</a>
<a class="btn btn-secondary" href="tel:${G.BIZ.phoneTel}">Call Dan&rsquo;s Drains</a>
</div>
</div></section>

<section class="section content"><div class="container">
<h2>General Plumbing Services</h2>
<p>Most of what we do falls under everyday plumbing — repairs, water heaters, fixtures, and the occasional emergency. These are grouped below by the kind of problem you are trying to solve.</p>
${bucketHtml}
</div></section>

<section class="section section-alt content"><div class="container">
<h2>Specialized Service Categories</h2>
<p>Some work benefits from dedicated attention. These categories cover drainage and sewer, septic-connected plumbing, gas lines, bathroom remodeling, and water-damage prevention.</p>
${catHtml}
</div></section>

${G.ctaBand("Not sure which service you need? Tell us the problem and we will help.", "../")}`;
  }

  // ---- About ----
  function aboutPage(G) {
    return {
      slug: "about",
      title: "About Dan's Drains | Armonk &amp; Westchester County Plumber",
      meta: "Meet Dan's Drains — a licensed, insured, family-run plumbing company in Armonk with 15+ years serving Westchester County homeowners with honest, upfront work.",
      ogImage: "og-about.webp",
      trail: [
        { name: "Home", rel: "", abs: "/" },
        { name: "Services", rel: "services/", abs: "/services" },
        { name: "About", rel: "about/", abs: "/about" },
      ],
      schema: () => [
        G.bizNode(),
        G.websiteNode(),
        G.webPageNode("/about", "About Dan's Drains", "AboutPage"),
        G.breadcrumbNode("/about", [{ name: "Home", url: "/" }, { name: "About", url: "/about" }]),
      ],
      body: (root) => aboutBody(root, G),
    };
  }
  function aboutBody(root, G) {
    return `<section class="hero hero-media"><div class="container">
<div class="media-row">
<div class="media-text">
<h1>About Dan's Drains</h1>
<p class="lead">A licensed, insured, family-run plumbing company based in Armonk, serving Westchester County for over 15 years with honest advice and clean, careful work.</p>
<div class="btn-row"><a class="btn btn-primary request-estimate-cta" href="${root}contact/">Request a Free Estimate</a><a class="btn btn-secondary" href="tel:${G.BIZ.phoneTel}">Call Dan&rsquo;s Drains</a></div>
</div>
<div class="media-media"><img src="${root}assets/img/og-about.webp" alt="Dan's Drains service van parked outside a home in Armonk, Westchester County" width="1200" height="630" fetchpriority="high"></div>
</div>
</div></section>

<section class="section section-alt content"><div class="container">
<h2>Who We Are</h2>
<p>Dan's Drains is a locally owned and operated plumbing company serving Armonk and nearby Westchester County communities. Over more than 15 years, we have helped homeowners and small businesses with everyday repairs, emergencies, water heaters, drain cleaning, leak repairs, sewer concerns, septic-connected plumbing, fixtures, sump pumps, and light commercial work.</p>
<p>We built this business on a simple idea: diagnose the problem, explain the options, and do the work right — without pressure or unnecessary upsells.</p>
</div></section>

<section class="section content"><div class="container">
<h2>How We Work</h2>
<p>We are known for honest recommendations, clear communication, and clean workmanship. When we arrive, we figure out what is actually wrong, walk you through your choices in plain language, and give you an upfront price before we start.</p>
<p>If a repair is simple, we will tell you. If something bigger is going on, we will explain why and what it will take. Either way, you are never left guessing.</p>
</div></section>

<section class="section section-deep content"><div class="container">
<h2>Credentials You Can Count On</h2>
<p>We carry the credentials that matter for plumbing work in this area and stand behind everything we do.</p>
<ul class="trust-list grid-2">
<li>Licensed &amp; insured plumbing company</li>
<li>Westchester County licensed plumber</li>
<li>Residential &amp; light commercial experience</li>
<li>15+ years serving Westchester County</li>
<li>Same-day service available</li>
<li>Clean, respectful technicians</li>
</ul>
</div></section>

<section class="section content"><div class="container">
<h2>Local Knowledge That Helps</h2>
<p>Because we work across Westchester every week, we understand its homes: older houses with mixed pipe materials, finished basements that need reliable sump pumps, properties on septic systems, and the cold winters that put pipes at risk. That experience means we spot problems faster and fix them for the long run. When you are ready, [[LINK:services|see the full list of plumbing services we offer]] or reach out with your question.</p>
</div></section>

${G.ctaBand("Have a plumbing question or need a hand? We would be glad to help.", "../")}`;
  }

  // ---- Contact ----
  function contactPage(G) {
    const B = G.BIZ;
    return {
      slug: "contact",
      title: "Contact Dan's Drains | Armonk, NY Plumber",
      meta: "Contact Dan's Drains for plumbing service in Armonk and across Westchester County, NY. Call +1 855-597-5391, email us, or request a free estimate today.",
      ogImage: "og-contact.webp",
      trail: [
        { name: "Home", rel: "", abs: "/" },
        { name: "Services", rel: "services/", abs: "/services" },
        { name: "Contact", rel: "contact/", abs: "/contact" },
      ],
      schema: () => [
        G.bizNode(),
        G.websiteNode(),
        G.webPageNode("/contact", "Contact Dan's Drains", "ContactPage"),
        G.breadcrumbNode("/contact", [{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]),
      ],
      body: (root) => `<section class="hero"><div class="container">
<h1>Contact Dan's Drains</h1>
<p class="lead">Need a plumber in Westchester County? Call us, send an email, or request a free estimate and we will get right back to you. For emergencies, calling is fastest.</p>
<div class="btn-row"><a class="btn btn-primary" href="tel:${B.phoneTel}">Call ${B.nameEnt}</a><a class="btn btn-secondary request-estimate-cta" href="#estimate">Request a Free Estimate</a></div>
</div></section>

<section class="section content"><div class="container">
<h2>Get in Touch</h2>
<div class="grid grid-2">
<div class="card"><h3>Call or Text</h3><p><a href="tel:${B.phoneTel}">${B.phone}</a><br>Best for same-day and emergency plumbing.</p></div>
<div class="card"><h3>Email</h3><p><a href="mailto:${B.email}">${B.email}</a><br>Good for questions and non-urgent scheduling.</p></div>
<div class="card"><h3>Address</h3><p>${B.street}<br>${B.city}, ${B.region} ${B.zip}</p></div>
<div class="card"><h3>Hours</h3><p>Regular plumbing service during business hours, with same-day and emergency availability.</p></div>
</div>
</div></section>

<section class="section section-alt content" id="estimate"><div class="container">
<h2>Request a Free Estimate</h2>
<p>Tell us what is going on and we will follow up with next steps and honest pricing. Prefer to talk it through? Call us at <a href="tel:${B.phoneTel}">${B.phone}</a>.</p>
<div class="embed-holder">Free estimate form — click any "Request a Free Estimate" button on the site to open it, or call us directly.</div>
<p style="margin-top:1rem">You can also <a class="request-estimate-cta" href="#estimate">open the free estimate form here</a>.</p>
</div></section>

<section class="section content"><div class="container">
<h2>Areas We Serve</h2>
<p>We are based in Armonk and serve homeowners and small businesses across Westchester County, including Pleasantville, Mount Kisco, Yonkers, Bedford, and Scarsdale. Not sure if you are in our area? Just ask — and while you are here, [[LINK:services|browse the plumbing services we provide]].</p>
</div></section>

${G.ctaBand("We are ready when you are. Call Dan's Drains for fast, friendly plumbing help.", "../")}`,
    };
  }

  // ================= CATEGORY + SERVICE PAGES =================
  const CATEGORY_PAGES = [];
  const SERVICE_PAGES = [];
  // Page objects are pushed by the appended batches below (see __PAGES__ marker).

  // Derive a unique meta description from the authored lead when one isn't
  // given explicitly. Strips tags/entities, trims to ~157 chars on a word
  // boundary so it lands near the 150-160 SEO guidance.
  function deriveMeta(lead) {
    let t = String(lead).replace(/<[^>]+>/g, "").replace(/&rsquo;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
    if (t.length <= 160) return t;
    let cut = t.slice(0, 158);
    cut = cut.slice(0, cut.lastIndexOf(" "));
    return cut.replace(/[\s,;:—-]+$/, "") + ".";
  }

  // helper to assemble a standard service/category page object
  function page(o) {
    const isCategory = !!o.isCategory;
    const metaText = o.meta || deriveMeta(o.lead);
    return {
      slug: o.slug,
      kind: isCategory ? "category" : "service",
      tier: o.tier,
      title: o.title,
      meta: metaText,
      metaPlain: metaText.replace(/&[a-z]+;/g, "").replace(/<[^>]+>/g, ""),
      h1: o.h1,
      // Schema Service name + breadcrumb label = the exact canonical name.
      serviceName: CANONICAL[o.slug] || o.serviceName || o.h1,
      serviceType: o.serviceType,
      ogImage: heroFile(o.slug),
      hero: { file: heroFile(o.slug), alt: o.heroAlt },
      lead: o.lead,
      badges: o.badges,
      openCta: o.openCta,
      midCta: o.midCta,
      finalCta: o.finalCta,
      toc: o.toc,
      sections: o.sections,
      faqs: o.faqs,
      localDetails: o.localDetails || "",
      angle: o.angle || "",
      // Breadcrumb label is the exact canonical name, plain (no wrapping).
      trail: trailFor(o.slug, CANONICAL[o.slug] || o.h1, o.cat, isCategory),
    };
  }

  const ctx = { page, CATS, CATALOG, catName, CATEGORY_PAGES, SERVICE_PAGES };
  require("./pages-categories.js")(ctx);
  require("./pages-water.js")(ctx);
  require("./pages-repair.js")(ctx);
  require("./pages-fixtures.js")(ctx);
  require("./pages-drainage.js")(ctx);
  require("./pages-specialty.js")(ctx);

  exp.customPages = (G, build) => {
    [homePage(G), hubPage(G), aboutPage(G), contactPage(G)].forEach(build);
  };
  exp.servicePages = (G, build) => {
    CATEGORY_PAGES.concat(SERVICE_PAGES).forEach(build);
  };

  // expose the page() helper + arrays to appended batch files via closure export
  exp.__reg = { page, CATEGORY_PAGES, SERVICE_PAGES };
};
