/* Specialty, remodel, maintenance & commercial pages (6). */
module.exports = (ctx) => {
  const { page, SERVICE_PAGES } = ctx;
  const P = (o) => SERVICE_PAGES.push(page(o));

  P({
    slug: "kitchen-plumbing-remodeling-westchester-ny", cat: "plumber", tier: 3, serviceType: "Kitchen Plumbing Remodeling",
    title: "Kitchen Plumbing Remodeling in Westchester County, NY",
    h1: "Kitchen Plumbing Remodeling in Westchester County, NY",
    heroAlt: "Dan's Drains plumber roughing in kitchen plumbing during a Westchester County remodel",
    lead: "A kitchen remodel lives or dies on the plumbing behind it. Dan's Drains handles the sink, dishwasher, and supply and drain lines that make your new kitchen work — and last.",
    localDetails: "sink relocation, dishwasher lines, island plumbing",
    angle: "Plumbing that keeps up with a new kitchen",
    toc: [{ id: "what", label: "What we handle" }, { id: "plan", label: "Planning ahead" }, { id: "process", label: "How we work" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What Kitchen Remodel Plumbing Covers", html: `<p>Kitchen plumbing includes the sink, faucet, dishwasher, disposal, and sometimes a pot filler or island fixture — plus the supply and drain lines behind them. We handle moving, adding, and connecting all of it.</p><p>That includes the final [[LINK:sink-installation-westchester-ny|sink set and connected]] once the counters are in.</p>` },
      { id: "plan", h2: "Planning the Plumbing First", html: `<p>If your remodel moves the sink or adds an island, the plumbing has to move with it — and that is easiest before the cabinets and floor go in. We like to plan the routing early so nothing stalls the project.</p><p>Island plumbing in particular needs careful venting, which is worth getting right up front.</p>` },
      { id: "process", h2: "How We Handle the Work", html: `<p>We route the supply and drain lines to the new layout, set the rough-in, and connect the fixtures and appliances once finishes are in. We pressure-test everything and confirm the dishwasher and disposal drain cleanly.</p><p>We coordinate timing so the plumbing is ready exactly when the rest of the kitchen needs it.</p>` },
      { id: "local", h2: "Kitchen Remodels in Local Homes", html: `<p>Older kitchens here often have dated drain and supply lines that are worth updating while the walls and floor are open. We will point out what is worth doing while it is accessible.</p><p>For layout ideas, the [[OUT:https://www.bhg.com/kitchen/remodeling/|Better Homes &amp; Gardens kitchen remodeling ideas]] are a useful starting point, and we handle the plumbing behind them.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Bring us in early if your remodel moves the sink, adds an island, or updates appliances. Planning the plumbing up front keeps the job on schedule.</p><p>We also connect the [[LINK:appliance-hook-up-westchester-ny|dishwasher and other appliance lines]] as part of the work.</p>` },
    ],
    faqs: [
      { q: "Can you move my kitchen sink to a new spot?", a: "Often, yes, depending on where the drains and vents are. We review your layout and tell you honestly what the move involves." },
      { q: "Do you plumb kitchen islands?", a: "Yes. Island sinks need careful drain and vent routing, which we plan and install so it drains properly." },
      { q: "When should I involve a plumber in a kitchen remodel?", a: "Early, during planning. Moving lines is far easier before cabinets and flooring go in, and early planning avoids mid-project delays." },
      { q: "Do you connect the dishwasher and disposal?", a: "Yes. We connect the dishwasher, disposal, and other appliance lines and confirm they drain cleanly and leak-free." },
      { q: "Should I update old kitchen pipe during the remodel?", a: "If it is aging and the area is open, usually yes. We will tell you when it is worth doing and when it is fine to leave." },
    ],
  });

  P({
    slug: "commercial-plumbing-services-westchester-ny", cat: "plumber", tier: 2, serviceType: "Commercial Plumbing",
    title: "Commercial Plumbing Services in Westchester County, NY",
    h1: "Commercial Plumbing Services in Westchester County, NY",
    heroAlt: "Dan's Drains plumber servicing plumbing in a Westchester County commercial space",
    lead: "Small businesses need plumbing that does not slow them down. Dan's Drains provides light commercial plumbing for offices, retail, and small commercial spaces across Westchester County.",
    localDetails: "offices and retail, restroom fixtures, minimal downtime",
    angle: "Keep small businesses running",
    toc: [{ id: "what", label: "What we handle" }, { id: "why", label: "Why it is different" }, { id: "process", label: "How we work" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What Our Commercial Plumbing Covers", html: `<p>We handle light commercial plumbing: restroom fixtures, water heaters, drains, leaks, and repairs for offices, retail spaces, and small commercial buildings. If a business's plumbing is holding it back, we sort it out.</p><p>That includes commercial fixtures like a [[LINK:urinal-installation-westchester-ny|properly installed commercial urinal]] and grease-handling for food service.</p>` },
      { id: "why", h2: "Why Commercial Work Is Different", html: `<p>In a business, a plumbing problem means lost time, unhappy customers, or a closed restroom. Speed and reliability matter even more, and the fixtures often see far heavier use than a home's.</p><p>We work efficiently and aim to minimize the disruption to your operation.</p>` },
      { id: "process", h2: "How We Handle Commercial Jobs", html: `<p>We diagnose the issue, give you an upfront price, and do the work with as little downtime as we can manage. For food service, we also handle [[LINK:grease-trap-cleaning-westchester-ny|grease trap cleaning and maintenance]] to keep the kitchen compliant.</p><p>We keep the work clean and the space usable wherever possible.</p>` },
      { id: "local", h2: "Small Businesses in Westchester", html: `<p>The county is full of small offices, shops, and restaurants that need dependable plumbing without the overhead of a big service contract. We are a local company that shows up and gets it handled.</p><p>Industry groups like the [[OUT:https://www.phccweb.org/|PHCC national plumbing association]] set the standards we work to, and we bring that professionalism to commercial jobs.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us for commercial repairs, fixture work, water heaters, or drain problems in your business space. We work to keep your downtime short.</p><p>For a restaurant, pairing repairs with regular [[LINK:drain-cleaning-westchester-ny|drain cleaning to prevent backups]] keeps the kitchen running.</p>` },
    ],
    faqs: [
      { q: "Do you handle commercial plumbing?", a: "Yes, light commercial work for offices, retail, and small commercial spaces — restroom fixtures, water heaters, drains, leaks, and repairs." },
      { q: "Can you work around my business hours?", a: "We work to minimize downtime and disruption to your operation, and we will discuss timing that fits your business." },
      { q: "Do you service restaurant plumbing?", a: "Yes. Along with general repairs, we handle grease trap cleaning and drain maintenance to keep a commercial kitchen running and compliant." },
      { q: "How fast can you respond to a commercial issue?", a: "We know plumbing problems cost a business time, so we prioritize getting to you quickly and giving you an upfront price." },
      { q: "Do you install commercial fixtures?", a: "Yes, including commercial urinals, restroom fixtures, and water heaters suited to heavier use." },
    ],
  });

  P({
    slug: "urinal-installation-westchester-ny", cat: "plumber", tier: 3, serviceType: "Urinal Installation",
    title: "Commercial Urinal Installation in Westchester County, NY",
    h1: "Commercial Urinal Installation in Westchester County, NY",
    heroAlt: "Dan's Drains plumber installing a commercial urinal in a Westchester County business restroom",
    lead: "Commercial restrooms need fixtures that hold up to heavy use. Dan's Drains installs and connects urinals for offices and small businesses, sealed and flushing reliably.",
    localDetails: "office and retail restrooms, water-efficient models, heavy use",
    angle: "Restroom fixtures built for heavy use",
    toc: [{ id: "what", label: "What we handle" }, { id: "why", label: "Why proper install" }, { id: "process", label: "How we install" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What Urinal Installation Involves", html: `<p>Installing a urinal means connecting the supply and drain, mounting it securely, and sealing it so it holds up to constant use without leaking. Commercial fixtures see far more use than home ones, so a solid install matters.</p><p>It is one piece of our broader [[LINK:commercial-plumbing-services-westchester-ny|commercial plumbing work]].</p>` },
      { id: "why", h2: "Why a Proper Install Matters", html: `<p>A poorly installed urinal leaks, smells, or comes loose under heavy use — none of which a business can afford in a customer restroom. Secure mounting and a good seal prevent all three.</p><p>Water-efficient models also cut a business's water use noticeably over time.</p>` },
      { id: "process", h2: "How We Install a Urinal", html: `<p>We connect the supply and drain, mount the fixture securely to the wall, and seal it. Then we test the flush and check for leaks before it goes into service.</p><p>We can install a new fixture or replace one that is worn or leaking.</p>` },
      { id: "local", h2: "Commercial Restrooms in Westchester", html: `<p>Offices, shops, and small businesses across the county rely on restroom fixtures that just work. A leaking or broken urinal is both a nuisance and a water-waster.</p><p>Efficient models help, as the [[OUT:https://www.epa.gov/watersense/urinals|EPA WaterSense urinal information]] describes, and we install them to perform reliably.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us to install new urinals or replace worn ones in your business restroom. A secure, sealed install prevents leaks and downtime.</p><p>We can handle it alongside other [[LINK:fixture-replacement-westchester-ny|fixture replacements]] in the space.</p>` },
    ],
    faqs: [
      { q: "Do you install commercial urinals?", a: "Yes. We connect the supply and drain, mount the fixture securely, and seal and test it for reliable, leak-free service." },
      { q: "Can you install water-efficient urinals?", a: "Yes. Efficient models reduce a business's water use significantly, and we install them to flush reliably under heavy use." },
      { q: "Can you replace a leaking urinal?", a: "Yes. We remove the old fixture and install a new one, sealed and connected properly so it holds up." },
      { q: "Do you handle whole restroom fixtures?", a: "Yes. Along with urinals, we install and replace toilets, sinks, and faucets as part of commercial restroom work." },
      { q: "How much downtime does it take?", a: "A straightforward install is quick. We work to keep the restroom out of service for as little time as possible." },
    ],
  });

  P({
    slug: "plumbing-inspection-westchester-ny", cat: "plumber", tier: 3, serviceType: "Plumbing Inspection",
    title: "Plumbing Inspection in Westchester County, NY | Dan's Drains",
    h1: "Plumbing Inspection in Westchester County, NY",
    heroAlt: "Dan's Drains plumber inspecting a home's plumbing system in Westchester County",
    lead: "Know the condition of your plumbing before buying, renovating, or just for peace of mind. Dan's Drains provides thorough plumbing inspections that catch small problems before they get expensive.",
    localDetails: "pre-purchase checks, older-home systems, hidden issues",
    angle: "Find the problem before it finds you",
    toc: [{ id: "what", label: "What we check" }, { id: "when", label: "When to inspect" }, { id: "process", label: "How it works" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What a Plumbing Inspection Covers", html: `<p>We check the visible and accessible plumbing: supply lines, drains, water heater, fixtures, shutoffs, and signs of leaks or corrosion. The goal is a clear picture of your system's condition and any issues worth addressing.</p><p>Where a drain or sewer concern turns up, we can follow up with a [[LINK:sewer-camera-inspection-westchester-ny|camera look inside the line]].</p>` },
      { id: "when", h2: "When to Get an Inspection", html: `<p>An inspection is especially valuable before buying a home, before a renovation, or when you have inherited an older home and want to know what you are working with.</p><p>It is also a smart periodic check for any home, catching small leaks and worn parts before they fail.</p>` },
      { id: "process", h2: "How the Inspection Works", html: `<p>We walk the system methodically, note the condition of each part, and flag anything that needs attention now or is worth watching. You get a plain-language rundown of what we found and what it means.</p><p>No scare tactics — just an honest assessment you can act on.</p>` },
      { id: "local", h2: "Inspecting Older Westchester Homes", html: `<p>Many homes in this area have decades of plumbing history, sometimes with mixed pipe materials and aging fixtures. An inspection is the reliable way to know what shape it is really in.</p><p>The [[OUT:https://www.nachi.org/plumbing-inspection.htm|home inspection resources from InterNACHI]] outline what a thorough plumbing check looks at, and we apply that same care.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us before a purchase or renovation, or when you simply want to know your plumbing's condition. Catching a small issue early is far cheaper than an emergency later.</p><p>If we find worn parts, a round of [[LINK:plumbing-maintenance-westchester-ny|preventive maintenance]] often takes care of them.</p>` },
    ],
    faqs: [
      { q: "What does a plumbing inspection include?", a: "We check the accessible supply lines, drains, water heater, fixtures, and shutoffs, and look for leaks and corrosion, then give you a clear rundown of the condition." },
      { q: "Should I get one before buying a house?", a: "It is a smart move, especially for older homes. An inspection can reveal costly plumbing issues before you own them." },
      { q: "How long does an inspection take?", a: "It depends on the size and age of the home, but most take a couple of hours. We give you an honest assessment afterward." },
      { q: "Will you try to sell me repairs I don't need?", a: "No. We give you an honest picture of your plumbing's condition and flag what genuinely needs attention, without scare tactics." },
      { q: "Can you inspect the sewer line too?", a: "Yes. If there are concerns about drains or the sewer, we can add a camera inspection of the line to the check." },
    ],
  });

  P({
    slug: "plumbing-maintenance-westchester-ny", cat: "plumber", tier: 3, serviceType: "Plumbing Maintenance",
    title: "Plumbing Maintenance in Westchester County, NY | Dan's Drains",
    h1: "Plumbing Maintenance in Westchester County, NY",
    heroAlt: "Dan's Drains plumber performing routine plumbing maintenance in a Westchester County home",
    lead: "Small problems are cheap to fix — until they are not. Dan's Drains provides routine plumbing maintenance that catches leaks, wear, and buildup before they turn into expensive repairs.",
    localDetails: "water heater flushing, leak checks, seasonal freeze prep",
    angle: "Catch it small, before it gets expensive",
    toc: [{ id: "why", label: "Why maintain" }, { id: "what", label: "What we check" }, { id: "process", label: "How it works" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "why", h2: "Why Plumbing Maintenance Pays Off", html: `<p>Most expensive plumbing failures start small — a slow leak, a worn valve, sediment in a water heater. Catching these early costs a fraction of the emergency repair and water damage they cause when ignored.</p><p>Maintenance is the cheapest insurance in plumbing.</p>` },
      { id: "what", h2: "What Maintenance Covers", html: `<p>A maintenance visit typically includes checking for leaks, testing shutoff valves, flushing the water heater to clear sediment, checking water pressure, and looking over drains and fixtures for early wear.</p><p>If we find a heater near the end of its life, we will flag it so you can plan a [[LINK:water-heater-installation-westchester-ny|replacement on your schedule]] rather than in a cold-shower emergency.</p>` },
      { id: "process", h2: "How Maintenance Works", html: `<p>We go through the system, handle the routine upkeep, and note anything worth addressing now or watching. You get an honest summary and clear priorities, not a list of scare-tactic upsells.</p><p>Regular visits build a picture of your plumbing's health over time.</p>` },
      { id: "local", h2: "Seasonal Maintenance in Westchester", html: `<p>Our cold winters make fall a smart time to prep pipes against freezing, and hard water in parts of the county makes water heater flushing especially valuable. Seasonal upkeep prevents the most common local failures.</p><p>The [[OUT:https://www.familyhandyman.com/list/plumbing-maintenance-tips/|Family Handyman plumbing maintenance tips]] are a helpful reference, and we handle the work.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us to set up routine maintenance, especially before winter or if your home has older plumbing. Small, regular attention prevents big, sudden bills.</p><p>If maintenance turns up a hidden issue, our [[LINK:leak-detection-westchester-ny|process for tracking down hidden leaks]] pinpoints it.</p>` },
    ],
    faqs: [
      { q: "How often should I have plumbing maintenance?", a: "For most homes, an annual check is a good baseline, with extra attention before winter. Older homes may benefit from more frequent visits." },
      { q: "What is the most valuable maintenance task?", a: "Flushing the water heater to clear sediment and checking for hidden leaks are two of the highest-value tasks, since both prevent expensive failures." },
      { q: "Can maintenance really prevent big repairs?", a: "Yes. Most costly failures start as small, catchable problems. Regular maintenance finds them early, when the fix is cheap." },
      { q: "Do you flush the water heater during maintenance?", a: "Yes, when appropriate. Flushing removes sediment that hurts efficiency and shortens the heater's life, especially with hard water." },
      { q: "Will you push repairs I don't need?", a: "No. We give you honest priorities and flag only what genuinely needs attention, without scare tactics." },
    ],
  });

  P({
    slug: "rainwater-tank-installation-westchester-ny", cat: "plumber", tier: 3, serviceType: "Rainwater Tank Installation",
    title: "Rainwater Tank Installation in Westchester County, NY",
    h1: "Rainwater Tank Installation in Westchester County, NY",
    heroAlt: "Dan's Drains plumber installing a rainwater collection tank at a Westchester County home",
    lead: "Collecting rainwater for your garden and outdoor use is easier with the plumbing done right. Dan's Drains installs and connects rainwater tanks so your collection system works cleanly and reliably.",
    localDetails: "garden irrigation, outdoor water use, gutter connection",
    angle: "Put rainwater to work the right way",
    toc: [{ id: "why", label: "Why collect rainwater" }, { id: "what", label: "What we handle" }, { id: "process", label: "How we install" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "why", h2: "Why Install a Rainwater Tank", html: `<p>A rainwater tank captures runoff from your roof for outdoor uses like watering the garden, cutting your use of treated tap water. For homeowners who water a lot in summer, it can make a real difference.</p><p>Done right, it is a clean, low-maintenance addition to your outdoor plumbing.</p>` },
      { id: "what", h2: "What Rainwater Tank Plumbing Covers", html: `<p>We connect the tank to your gutter downspouts, set up the overflow so excess water drains safely away, and plumb the outlet for a hose or irrigation. Proper connections keep the system clean and prevent standing water problems.</p><p>If you also want an easier outdoor spigot, we handle [[LINK:outdoor-faucet-repair-westchester-ny|outdoor faucet work]] at the same time.</p>` },
      { id: "process", h2: "How We Install a Rainwater Tank", html: `<p>We position the tank, connect it to the downspout with the right fittings, set the overflow, and plumb the outlet for how you plan to use the water. Then we confirm it fills, holds, and overflows correctly.</p><p>We keep the setup tidy and easy to maintain.</p>` },
      { id: "local", h2: "Rainwater Use in Westchester", html: `<p>With plenty of gardens and larger properties in this area, rainwater collection is a practical way to cut outdoor water use in the growing season. Proper overflow routing keeps it from causing drainage problems near the foundation.</p><p>The [[OUT:https://www.epa.gov/soakuptherain/soak-rain-rain-barrels|EPA guidance on rain barrels and rainwater capture]] covers the basics, and we handle the plumbing side.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when you want a rainwater tank connected properly, with clean gutter connections and safe overflow routing. Good plumbing keeps the system working and your foundation dry.</p><p>We can also fold it into broader [[LINK:plumbing-maintenance-westchester-ny|seasonal plumbing upkeep]].</p>` },
    ],
    faqs: [
      { q: "What can I use rainwater tank water for?", a: "Typically outdoor uses like watering the garden and lawn. It reduces your use of treated tap water for those tasks. We plumb the outlet for how you plan to use it." },
      { q: "How does the tank connect to my house?", a: "We connect it to your gutter downspouts to capture roof runoff, set the overflow to drain safely, and plumb the outlet for a hose or irrigation." },
      { q: "Will the overflow cause drainage problems?", a: "Not when routed properly. We set the overflow to carry excess water safely away from your foundation, avoiding standing water." },
      { q: "Is a rainwater tank hard to maintain?", a: "Not with a proper setup. Occasional checks of the gutter connection and outlet keep it clean, and we can fold that into routine maintenance." },
      { q: "Can you add an outdoor faucet to the system?", a: "Yes. We can plumb the tank outlet for a hose connection and handle any related outdoor faucet work at the same time." },
    ],
  });
};
