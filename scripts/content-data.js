/* Dan's Drains — authored page content (Phase 5/6).
 * Genuinely per-page copy, angles, and FAQs. Structure/boilerplate is applied
 * by build.js; this file is the words. Internal links use [[LINK:slug|anchor]]
 * and outbound authority links use [[OUT:href|anchor]] — build.js expands both
 * and records the anchor ledger from them (so ledger == pages by construction).
 *
 * Anchor rule: every [[LINK]] anchor and every hub card title is unique
 * sitewide. In-body anchors are descriptive phrases, never the bare service
 * name (the hub already uses the bare name as its card anchor), so they never
 * collide. build.js throws on any duplicate.
 */

// ---------- master registry (drives hub coverage + sitemap + breadcrumbs) ----------
// cat: category slug this service sits under, or "plumber" for the primary
// bucket (no category page — parent is the services hub).
const CATS = [
  { slug: "drainage-service-westchester-ny", name: "Drainage Services", short: "Drainage", tier: 1 },
  { slug: "septic-system-service-westchester-ny", name: "Septic System Services", short: "Septic", tier: 2 },
  { slug: "gasfitter-westchester-ny", name: "Gas Line Services", short: "Gas", tier: 2 },
  { slug: "bathroom-remodeler-westchester-ny", name: "Bathroom Plumbing", short: "Bathroom", tier: 2 },
  { slug: "water-damage-restoration-westchester-ny", name: "Water Damage Restoration", short: "Water Damage", tier: 2 },
];

// Short catalog used ONLY for hub cards + sitemap. Full authored pages are in
// SERVICE_PAGES / CATEGORY_PAGES below; this list must stay in sync with them.
const CATALOG = [
  // primary "Plumber" bucket
  { slug: "emergency-plumbing-repair-westchester-ny", name: "Emergency Plumbing Repair", cat: "plumber", group: "emergency", blurb: "Fast help for burst pipes, major leaks, and no-water emergencies across Westchester County." },
  { slug: "water-heater-installation-westchester-ny", name: "Water Heater Installation", cat: "plumber", group: "water", blurb: "New tank and high-efficiency water heaters sized and installed for your home." },
  { slug: "tankless-water-heater-installation-westchester-ny", name: "Tankless Water Heater Installation", cat: "plumber", group: "water", blurb: "Endless hot water and space savings with a properly sized tankless unit." },
  { slug: "gas-water-heater-installation-westchester-ny", name: "Gas Water Heater Installation", cat: "plumber", group: "water", blurb: "Safe, code-compliant gas water heater replacement and venting." },
  { slug: "hot-water-system-repair-westchester-ny", name: "Hot Water System Repair", cat: "plumber", group: "water", blurb: "No hot water or not enough? We diagnose and repair water heaters fast." },
  { slug: "boiler-installation-westchester-ny", name: "Boiler Installation", cat: "plumber", group: "water", blurb: "Reliable boiler replacement for older Westchester homes and finished basements." },
  { slug: "toilet-repair-westchester-ny", name: "Toilet Repair", cat: "plumber", group: "fixtures", blurb: "Running, clogged, or leaking toilets fixed the same day." },
  { slug: "toilet-installation-westchester-ny", name: "Toilet Installation", cat: "plumber", group: "fixtures", blurb: "New toilets set level, sealed, and leak-tested." },
  { slug: "leak-detection-westchester-ny", name: "Leak Detection", cat: "plumber", group: "repair", blurb: "Find hidden leaks behind walls and under floors without guesswork." },
  { slug: "pipe-repair-westchester-ny", name: "Pipe Repair", cat: "plumber", group: "repair", blurb: "Leaking, corroded, or damaged pipes repaired properly." },
  { slug: "pipe-replacement-westchester-ny", name: "Pipe Replacement", cat: "plumber", group: "repair", blurb: "Replace failing supply and drain pipes before they cause damage." },
  { slug: "burst-pipe-repair-westchester-ny", name: "Burst Pipe Repair", cat: "plumber", group: "repair", blurb: "Emergency burst-pipe response to stop the water and restore your plumbing." },
  { slug: "frozen-pipe-repair-westchester-ny", name: "Frozen Pipe Repair", cat: "plumber", group: "repair", blurb: "Safe thawing and repair of frozen pipes during cold Westchester winters." },
  { slug: "repiping-westchester-ny", name: "Repiping", cat: "plumber", group: "repair", blurb: "Whole-home repiping to replace old, failing pipe throughout the house." },
  { slug: "water-line-replacement-westchester-ny", name: "Water Line Replacement", cat: "plumber", group: "repair", blurb: "Replace a leaking or failing main water supply line to your home." },
  { slug: "water-main-repair-westchester-ny", name: "Water Main Repair", cat: "plumber", group: "repair", blurb: "Repair breaks and leaks in the main water line feeding your property." },
  { slug: "slab-leak-repair-westchester-ny", name: "Slab Leak Repair", cat: "plumber", group: "repair", blurb: "Locate and fix leaks in pipes running under a concrete slab." },
  { slug: "faucet-installation-westchester-ny", name: "Faucet Installation", cat: "plumber", group: "fixtures", blurb: "Kitchen and bath faucet installation and upgrades." },
  { slug: "outdoor-faucet-repair-westchester-ny", name: "Outdoor Faucet Repair", cat: "plumber", group: "fixtures", blurb: "Repair leaking or frozen-damaged outdoor spigots and hose bibs." },
  { slug: "sewer-line-repair-westchester-ny", name: "Sewer Line Repair", cat: "plumber", group: "repair", blurb: "Fix cracked, clogged, or root-invaded sewer lines." },
  { slug: "garbage-disposal-repair-westchester-ny", name: "Garbage Disposal Repair", cat: "plumber", group: "fixtures", blurb: "Jammed or leaking disposals repaired or replaced." },
  { slug: "shower-installation-westchester-ny", name: "Shower Installation", cat: "plumber", group: "fixtures", blurb: "Shower and valve installation done clean and watertight." },
  { slug: "shower-valve-replacement-westchester-ny", name: "Shower Valve Replacement", cat: "plumber", group: "fixtures", blurb: "Fix temperature and pressure problems with a new shower valve." },
  { slug: "bathtub-installation-westchester-ny", name: "Bathtub Installation", cat: "plumber", group: "fixtures", blurb: "Tub replacement and installation with proper drain connections." },
  { slug: "sink-installation-westchester-ny", name: "Sink Installation", cat: "plumber", group: "fixtures", blurb: "Kitchen and bathroom sink installation and hookups." },
  { slug: "urinal-installation-westchester-ny", name: "Urinal Installation", cat: "plumber", group: "commercial", blurb: "Commercial urinal installation for offices and small businesses." },
  { slug: "fixture-replacement-westchester-ny", name: "Fixture Replacement", cat: "plumber", group: "fixtures", blurb: "Swap out old or worn plumbing fixtures throughout your home." },
  { slug: "sump-pump-installation-westchester-ny", name: "Sump Pump Installation", cat: "plumber", group: "repair", blurb: "Keep finished basements dry with a properly installed sump pump." },
  { slug: "water-softener-installation-westchester-ny", name: "Water Softener Installation", cat: "plumber", group: "water", blurb: "Reduce hard-water scale with a whole-home water softener." },
  { slug: "water-filtration-system-installation-westchester-ny", name: "Water Filtration System Installation", cat: "plumber", group: "water", blurb: "Cleaner drinking water with a filtration system sized for your home." },
  { slug: "low-water-pressure-repair-westchester-ny", name: "Low Water Pressure Repair", cat: "plumber", group: "repair", blurb: "Track down and fix weak water pressure at the source." },
  { slug: "plumbing-inspection-westchester-ny", name: "Plumbing Inspection", cat: "plumber", group: "maintenance", blurb: "Know the condition of your plumbing before buying or renovating." },
  { slug: "appliance-hook-up-westchester-ny", name: "Appliance Hook-up", cat: "plumber", group: "fixtures", blurb: "Safe water-line hookups for dishwashers, ice makers, and washers." },
  { slug: "laundry-room-plumbing-westchester-ny", name: "Laundry Room Plumbing", cat: "plumber", group: "fixtures", blurb: "Washer supply, drain, and valve work for your laundry room." },
  { slug: "kitchen-plumbing-remodeling-westchester-ny", name: "Kitchen Plumbing Remodeling", cat: "plumber", group: "remodel", blurb: "Plumbing rough-in and fixture work for kitchen remodels." },
  { slug: "rainwater-tank-installation-westchester-ny", name: "Rainwater Tank Installation", cat: "plumber", group: "specialty", blurb: "Rainwater collection tank plumbing for outdoor and garden use." },
  { slug: "plumbing-maintenance-westchester-ny", name: "Plumbing Maintenance", cat: "plumber", group: "maintenance", blurb: "Routine checkups that catch small problems before they get expensive." },
  { slug: "commercial-plumbing-services-westchester-ny", name: "Commercial Plumbing Services", cat: "plumber", group: "commercial", blurb: "Plumbing for offices, retail, and small commercial spaces." },
  // drainage
  { slug: "drain-cleaning-westchester-ny", name: "Drain Cleaning", cat: "drainage-service-westchester-ny", blurb: "Clear slow and clogged drains and keep them flowing." },
  { slug: "hydro-jetting-westchester-ny", name: "Hydro Jetting", cat: "drainage-service-westchester-ny", blurb: "High-pressure water to fully scour grease and roots from a line." },
  { slug: "drain-snaking-westchester-ny", name: "Drain Snaking", cat: "drainage-service-westchester-ny", blurb: "Mechanical snaking and rooter service for stubborn clogs." },
  { slug: "sewer-camera-inspection-westchester-ny", name: "Sewer Camera Inspection", cat: "drainage-service-westchester-ny", blurb: "See inside your sewer line with a video camera inspection." },
  { slug: "grease-trap-cleaning-westchester-ny", name: "Grease Trap Cleaning", cat: "drainage-service-westchester-ny", blurb: "Grease trap cleaning for restaurants and commercial kitchens." },
  // septic
  { slug: "septic-tank-service-westchester-ny", name: "Septic Tank Service", cat: "septic-system-service-westchester-ny", blurb: "Septic-connected plumbing help for homes on a septic system." },
  // gas
  { slug: "gas-line-repair-westchester-ny", name: "Gas Line Repair", cat: "gasfitter-westchester-ny", blurb: "Licensed gas line repair and leak response." },
  // bathroom
  { slug: "bathroom-plumbing-remodeling-westchester-ny", name: "Bathroom Plumbing Remodeling", cat: "bathroom-remodeler-westchester-ny", blurb: "Plumbing work behind a smooth bathroom remodel." },
  // water damage
  { slug: "water-leak-sensor-installation-westchester-ny", name: "Water Leak Sensor Installation", cat: "water-damage-restoration-westchester-ny", blurb: "Smart leak sensors that catch water damage early." },
];

function catName(slug) {
  const c = CATS.find((c) => c.slug === slug);
  return c ? c.name : null;
}

// sitemap order: home, services, about, contact, categories, services
function sitemapOrder() {
  const order = ["", "services", "about", "contact"];
  CATS.forEach((c) => order.push(c.slug));
  CATALOG.forEach((s) => order.push(s.slug));
  return order;
}

module.exports = { CATS, CATALOG, catName, sitemapOrder };

// customPages + servicePages are attached at the bottom, after the page data
// blocks are defined (see content-pages.js appended sections).
require("./content-pages.js")(module.exports);
