/* Drainage services + single-child category services (9). */
module.exports = (ctx) => {
  const { page, SERVICE_PAGES } = ctx;
  const P = (o) => SERVICE_PAGES.push(page(o));

  P({
    slug: "drain-cleaning-westchester-ny", cat: "drainage-service-westchester-ny", tier: 1, serviceType: "Drain Cleaning",
    title: "Drain Cleaning in Westchester County, NY | Dan's Drains",
    h1: "Drain Cleaning in Westchester County, NY",
    heroAlt: "Dan's Drains technician clearing a clogged drain in a Westchester County kitchen",
    lead: "Slow drain? Backed-up sink? As the company literally named Dan's Drains, this is our specialty. We clear the clog, find out why it happened, and keep it from coming right back — across Westchester County.",
    localDetails: "grease and hair clogs, recurring backups, older drain lines",
    angle: "Clear it and explain why it clogged",
    openCta: "Drain backing up? We can usually clear it the same day.",
    toc: [{ id: "signs", label: "Signs of a clog" }, { id: "causes", label: "What clogs drains" }, { id: "process", label: "How we clear them" }, { id: "prevent", label: "Preventing clogs" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "signs", h2: "Signs Your Drain Needs Cleaning", html: `<p>Drains warn you before they fully block:</p><ul><li>Water pooling and draining slowly.</li><li>Gurgling sounds as water goes down.</li><li>A bad smell rising from the drain.</li><li>A clog that keeps coming back after you clear it.</li></ul><p>That last one matters most — a repeat clog means the real problem is further down the line.</p>` },
      { id: "causes", h2: "What Actually Clogs Drains", html: `<p>Kitchen drains clog from grease and food; bathroom drains from hair and soap; and main lines from a mix of everything plus roots in older pipe. Knowing which you have tells us how to clear it.</p><p>If several drains are slow at once, that points past a single fixture toward the main line, which may call for a [[LINK:sewer-camera-inspection-westchester-ny|look inside the line with a camera]].</p>` },
      { id: "process", h2: "How We Clear a Drain", html: `<p>For a typical clog, mechanical snaking clears the blockage quickly. For heavy grease or roots, we reach for [[LINK:hydro-jetting-westchester-ny|a high-pressure water cleaning]] that scours the pipe walls rather than just punching a hole through the clog.</p><p>We match the method to the clog instead of using a one-size approach, and we do it clean.</p>` },
      { id: "prevent", h2: "Keeping Drains Clear", html: `<p>A few habits prevent most clogs: keep grease out of the kitchen drain, use strainers to catch hair and food, and never treat wipes as flushable. What goes down the drain is what comes back up.</p><p>The [[OUT:https://www.epa.gov/watersense|EPA WaterSense resources]] are a good reminder that mindful water and waste habits protect your plumbing.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when a plunger does not do it, when a drain keeps clogging, or when more than one fixture is slow. Store-bought chemicals often make things worse and can damage pipe.</p><p>If a clog turns out to be a stubborn mechanical blockage, our [[LINK:drain-snaking-westchester-ny|snaking and rooter approach]] handles it.</p>` },
    ],
    faqs: [
      { q: "Why does my drain keep clogging?", a: "A repeat clog usually means buildup or a defect further down the line that a surface clearing does not reach. We find the real cause so it stops coming back." },
      { q: "Are chemical drain cleaners a good idea?", a: "We generally advise against them. They often fail to fully clear the clog and can damage pipe and harm the environment. Mechanical clearing is safer and more effective." },
      { q: "How do you clear a tough clog?", a: "We match the method to the clog — snaking for typical blockages, high-pressure jetting for grease and roots. We choose based on what is actually causing it." },
      { q: "Can a clogged drain signal a bigger problem?", a: "Yes. When several drains are slow at once, it often points to the main line rather than a single fixture, which is worth a closer look." },
      { q: "Can you come the same day?", a: "For many drain cleaning calls, yes. Reach out early and we will do our best to clear it the same day." },
    ],
  });

  P({
    slug: "hydro-jetting-westchester-ny", cat: "drainage-service-westchester-ny", tier: 2, serviceType: "Hydro Jetting",
    title: "Hydro Jetting in Westchester County, NY | Dan's Drains",
    h1: "Hydro Jetting in Westchester County, NY",
    heroAlt: "Dan's Drains technician performing hydro jetting on a drain line at a Westchester County home",
    lead: "When a drain keeps clogging, hydro jetting cleans the whole pipe instead of just poking through. Dan's Drains uses high-pressure water to scour grease and roots out of your lines.",
    localDetails: "grease buildup, root intrusion, recurring main-line clogs",
    angle: "Scour the pipe clean, not just punch a hole",
    toc: [{ id: "what", label: "What it is" }, { id: "when", label: "When to use it" }, { id: "process", label: "How it works" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What Hydro Jetting Is", html: `<p>Hydro jetting uses a high-pressure stream of water to clean the inside of a pipe all the way around, removing grease, sludge, and roots. Unlike a snake, which clears a path through a clog, jetting cleans the whole pipe wall.</p><p>That is why it lasts longer — there is less left behind for the next clog to grab onto.</p>` },
      { id: "when", h2: "When Hydro Jetting Is the Right Choice", html: `<p>Jetting shines on grease-caked kitchen lines, root-invaded sewer lines, and drains that keep clogging no matter how often they are snaked. For a simple one-time clog, a snake is often enough.</p><p>We usually confirm the situation with a [[LINK:sewer-camera-inspection-westchester-ny|camera look at the line first]] so jetting is the right call.</p>` },
      { id: "process", h2: "How Hydro Jetting Works", html: `<p>We insert a jetting hose into the line and run high-pressure water through a specialized nozzle that cleans in all directions as it moves through the pipe. The debris flushes away with the water.</p><p>Done properly, it restores the pipe close to its full diameter, which a snake alone cannot do.</p>` },
      { id: "local", h2: "Jetting Older Westchester Lines", html: `<p>Many older sewer lines here suffer from root intrusion and years of grease buildup. Jetting is well suited to clearing both, and it buys real time before roots return.</p><p>Keeping lines clear protects your home and the wider system, in line with [[OUT:https://www.epa.gov/septic|EPA wastewater guidance]]. We match the pressure to the pipe so it cleans without harm.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when a drain keeps clogging, when grease or roots are the known cause, or when snaking has stopped holding. Jetting is a professional tool that works best with a camera to confirm the pipe can take it.</p><p>If jetting reveals a damaged pipe, we can move to a [[LINK:sewer-line-repair-westchester-ny|targeted sewer repair]].</p>` },
    ],
    faqs: [
      { q: "How is hydro jetting different from snaking?", a: "A snake clears a path through a clog; hydro jetting cleans the entire pipe wall with high-pressure water. Jetting removes more and lasts longer, especially with grease and roots." },
      { q: "Is hydro jetting safe for my pipes?", a: "For pipe in sound condition, yes. We often check the line with a camera first and match the pressure to the pipe so it cleans without causing harm." },
      { q: "How often do I need it?", a: "It depends on your line and habits. Jetting a root- or grease-prone line periodically prevents backups. We will suggest an interval based on what we find." },
      { q: "Will jetting clear tree roots?", a: "Yes, it cuts and flushes roots from the line. If roots keep returning, we may recommend a repair to the entry point they are using." },
      { q: "Do you inspect before jetting?", a: "Usually. A camera inspection confirms the cause and that the pipe is sound enough for jetting, so it is the right method." },
    ],
  });

  P({
    slug: "drain-snaking-westchester-ny", cat: "drainage-service-westchester-ny", tier: 3, serviceType: "Drain Snaking",
    title: "Drain Snaking &amp; Rooter Service in Westchester, NY",
    h1: "Drain Snaking &amp; Rooter Service in Westchester County, NY",
    heroAlt: "Dan's Drains technician using a drain snake to clear a clogged line in a Westchester County home",
    lead: "For a stubborn clog a plunger cannot budge, drain snaking clears the blockage mechanically. Dan's Drains provides snaking and rooter service to get your drains flowing again.",
    localDetails: "stubborn clogs, tub and toilet blockages, main-line snaking",
    angle: "Mechanical clearing for the clogs that resist",
    toc: [{ id: "what", label: "What it is" }, { id: "when", label: "When to use it" }, { id: "process", label: "How it works" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What Drain Snaking Is", html: `<p>A drain snake, or auger, is a flexible cable fed into the drain to break up or pull out a clog. A rooter is a powered version that can cut through tougher blockages, including roots in a line.</p><p>It is the go-to method for a clog that a plunger cannot clear.</p>` },
      { id: "when", h2: "When Snaking Is the Right Choice", html: `<p>Snaking works well for a single stubborn clog in a sink, tub, toilet, or branch line. For grease buildup or heavy roots throughout a line, [[LINK:hydro-jetting-westchester-ny|full-pipe hydro jetting]] cleans more thoroughly.</p><p>We choose the method that fits the clog rather than defaulting to one.</p>` },
      { id: "process", h2: "How Snaking Works", html: `<p>We feed the snake to the blockage, work through it to clear the path, and confirm the drain is flowing freely. For tougher clogs, a powered rooter does the heavy lifting.</p><p>If the clog returns quickly, that tells us to look deeper, sometimes with a camera.</p>` },
      { id: "local", h2: "Clogs in Local Homes", html: `<p>Hair and soap in bathroom lines and food and grease in kitchen lines cause most of the clogs we snake here. Older homes with narrower or aging pipe clog a bit more easily.</p><p>Keeping harmful items out of the drain prevents repeats, echoing the [[OUT:https://www.epa.gov/watersense|EPA's water-wise guidance]]. We clear what has already built up.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when a plunger fails, when a clog keeps returning, or when a toilet or tub backs up. Professional snaking clears it without the pipe damage chemicals can cause.</p><p>If snaking keeps needing repeats, a [[LINK:drain-cleaning-westchester-ny|deeper drain cleaning visit]] can address the underlying buildup.</p>` },
    ],
    faqs: [
      { q: "What is the difference between snaking and rooter service?", a: "A snake is a cable that clears a clog by hand or with a drill; a rooter is a powered version strong enough to cut through tougher blockages and roots. We use whichever fits the clog." },
      { q: "When should I snake versus jet a drain?", a: "Snaking is great for a single stubborn clog. Jetting is better for grease buildup and roots throughout a line. We recommend the right one for your situation." },
      { q: "Can snaking damage my pipes?", a: "Done properly, no. We use the right tool and technique for your pipe, which is far gentler than harsh chemical cleaners." },
      { q: "Why does my clog keep coming back after snaking?", a: "A quick repeat usually means buildup the snake did not fully clear or a deeper issue. We may recommend jetting or a camera look to solve it for good." },
      { q: "Can you snake a main line?", a: "Yes. We snake branch lines and main lines, and for a main-line problem we often confirm the cause with a camera first." },
    ],
  });

  P({
    slug: "sewer-camera-inspection-westchester-ny", cat: "drainage-service-westchester-ny", tier: 2, serviceType: "Sewer Camera Inspection",
    title: "Sewer Camera Inspection in Westchester County, NY",
    h1: "Sewer Camera Inspection in Westchester County, NY",
    heroAlt: "Dan's Drains technician running a sewer camera into a line at a Westchester County home",
    lead: "Stop guessing about what is wrong underground. Dan's Drains runs a video camera through your sewer line to show exactly what is happening — a clog, a crack, or roots — before anyone digs.",
    localDetails: "root intrusion, pre-purchase inspections, older sewer lines",
    angle: "See the problem before paying to fix it",
    toc: [{ id: "what", label: "What it shows" }, { id: "when", label: "When to inspect" }, { id: "process", label: "How it works" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What a Camera Inspection Shows", html: `<p>A sewer camera sends a live video feed through your line so we can see the actual condition inside: a clog, a cracked or collapsed section, root intrusion, or a low spot holding water. No guessing, no exploratory digging.</p><p>It turns a mystery backup into a clear picture of what needs to happen.</p>` },
      { id: "when", h2: "When to Get an Inspection", html: `<p>An inspection is worth it when drains repeatedly back up, before buying a home, or after a big clog to confirm the line is sound. It is also the smart first step before any [[LINK:sewer-line-repair-westchester-ny|sewer line repair]], so the fix targets the real problem.</p><p>For a home purchase especially, it can reveal an expensive issue before you own it.</p>` },
      { id: "process", h2: "How the Inspection Works", html: `<p>We feed a waterproof camera on a flexible line into the sewer and watch the feed as it travels through the pipe. We can locate a problem's exact position and depth, which makes any repair precise.</p><p>You get a clear explanation of what we found and what your options are.</p>` },
      { id: "local", h2: "Inspecting Older Westchester Sewers", html: `<p>Many established neighborhoods here have older clay or cast-iron sewer lines that are prone to cracks and root intrusion. A camera inspection is the reliable way to know their true condition.</p><p>Because sewer integrity matters for public health, in line with [[OUT:https://www.epa.gov/septic|EPA wastewater guidance]], it is worth knowing what shape your line is in.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when drains keep backing up, before you buy a home, or when you want to confirm a line is sound after a clog. Knowing the real condition prevents wasted money on the wrong fix.</p><p>If the camera reveals heavy buildup rather than damage, [[LINK:hydro-jetting-westchester-ny|a thorough jetting]] may be all you need.</p>` },
    ],
    faqs: [
      { q: "Why get a sewer camera inspection?", a: "It shows the exact condition inside your line — clog, crack, roots, or a low spot — so any repair is targeted rather than guesswork. It also helps before buying a home." },
      { q: "Should I inspect the sewer before buying a house?", a: "It is a smart move, especially with older homes. A camera can reveal a costly sewer problem before you own it, which is far better than discovering it later." },
      { q: "Can the camera find exactly where the problem is?", a: "Yes. We can locate the position and depth of an issue, which makes any repair precise and avoids unnecessary digging." },
      { q: "Do I need an inspection or just a cleaning?", a: "If a drain clogs once, cleaning may be enough. If it keeps backing up, an inspection tells us why so we can solve it for good." },
      { q: "What are the most common things you find?", a: "In this area, root intrusion and cracked or aged clay and cast-iron pipe are the most common findings, along with grease buildup." },
    ],
  });

  P({
    slug: "grease-trap-cleaning-westchester-ny", cat: "drainage-service-westchester-ny", tier: 3, serviceType: "Grease Trap Cleaning",
    title: "Grease Trap Cleaning in Westchester County, NY",
    h1: "Grease Trap Cleaning in Westchester County, NY",
    heroAlt: "Dan's Drains technician cleaning a commercial grease trap in a Westchester County kitchen",
    lead: "A neglected grease trap causes backups, odors, and code trouble. Dan's Drains cleans and maintains grease traps for restaurants and small commercial kitchens across Westchester County.",
    localDetails: "restaurant kitchens, code compliance, backup prevention",
    angle: "Keep the kitchen running and compliant",
    toc: [{ id: "why", label: "Why it matters" }, { id: "signs", label: "Signs it is due" }, { id: "process", label: "How we clean it" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "why", h2: "Why Grease Trap Cleaning Matters", html: `<p>A grease trap catches fats, oils, and grease before they enter the sewer. When it fills up, grease escapes into the line, causing backups, foul odors, and potential code violations for a food business.</p><p>Regular cleaning keeps the kitchen running and the drains flowing.</p>` },
      { id: "signs", h2: "Signs Your Grease Trap Needs Cleaning", html: `<p>Watch for these signs the trap is overdue:</p><ul><li>Slow drains in the kitchen.</li><li>Foul, greasy odors near drains or the trap.</li><li>Grease showing up where it should not.</li><li>An approaching scheduled service date.</li></ul><p>Staying ahead of it prevents an emergency backup during service.</p>` },
      { id: "process", h2: "How We Clean a Grease Trap", html: `<p>We clean out the accumulated grease and solids, check that the trap is functioning, and confirm the connected drains flow properly. Keeping to a regular schedule is what prevents surprises.</p><p>If grease has already clogged the line, we clear it with [[LINK:hydro-jetting-westchester-ny|high-pressure line cleaning]] as needed.</p>` },
      { id: "local", h2: "Commercial Kitchens in Westchester", html: `<p>Restaurants and small food businesses across the county rely on well-maintained grease traps to stay compliant and avoid backups during busy service. A missed cleaning can shut a kitchen down fast.</p><p>Proper grease handling protects the sewer system, in line with [[OUT:https://www.epa.gov/npdes/national-pretreatment-program|EPA guidance on keeping fats and grease out of sewers]]. We keep your trap in good shape.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us to set up regular grease trap cleaning, or when you notice slow kitchen drains or odors. Staying on schedule keeps your kitchen open and compliant.</p><p>For a full-service kitchen, this pairs naturally with our other [[LINK:commercial-plumbing-services-westchester-ny|commercial plumbing services]].</p>` },
    ],
    faqs: [
      { q: "How often should a grease trap be cleaned?", a: "It depends on your kitchen's volume and trap size, but many need cleaning on a regular schedule to stay compliant and avoid backups. We help you set the right interval." },
      { q: "What happens if I skip grease trap cleaning?", a: "Grease escapes into the line, causing slow drains, backups, odors, and potential code violations — any of which can disrupt service." },
      { q: "Do you offer scheduled service?", a: "Yes. Regular scheduled cleaning is the best way to prevent surprises, and we can set up an interval that fits your kitchen." },
      { q: "Can a full grease trap cause a backup?", a: "Yes. When the trap fills, grease enters the drain line and can clog it, backing up the kitchen. Regular cleaning prevents it." },
      { q: "Do you handle the drain line too if it clogs?", a: "Yes. If grease has already reached the line, we clear it with high-pressure jetting as part of getting the kitchen flowing again." },
    ],
  });

  P({
    slug: "septic-tank-service-westchester-ny", cat: "septic-system-service-westchester-ny", tier: 3, serviceType: "Septic Tank Service",
    title: "Septic Tank Service in Westchester County, NY | Dan's Drains",
    h1: "Septic Tank Service for Westchester County, NY Homes",
    heroAlt: "Dan's Drains plumber inspecting septic-connected plumbing at a Westchester County home",
    lead: "For homes on septic, the plumbing that feeds the tank needs care too. Dan's Drains handles the plumbing side of septic systems — clogs, leaks, and the lines that connect your home to the tank.",
    localDetails: "septic-connected drains, drain-field protection, rural properties",
    angle: "The plumbing partner for septic homes",
    toc: [{ id: "what", label: "What we handle" }, { id: "signs", label: "Warning signs" }, { id: "care", label: "Protecting the tank" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What We Handle on Septic Plumbing", html: `<p>We work on the plumbing that connects your home to the septic tank: the drains and waste lines carrying water to it, and the fixtures that feed them. When something slows or backs up, we sort out whether it is a plumbing clog or a tank issue.</p><p>This is the plumbing side of our broader [[LINK:septic-system-service-westchester-ny|septic system services]].</p>` },
      { id: "signs", h2: "Signs of Septic Plumbing Trouble", html: `<p>Problems often show up indoors first:</p><ul><li>Several drains running slow together.</li><li>Gurgling after heavy water use.</li><li>Sewage odors indoors or near the drain field.</li><li>Backups in the lowest drains.</li></ul><p>These can mean a clog, a full tank, or a drain-field issue, and it is worth sorting out early.</p>` },
      { id: "care", h2: "Protecting Your Septic System", html: `<p>What you put down the drain directly affects the tank. Keep out wipes, grease, and harsh chemicals, and space out heavy water use so you do not flood the drain field. Fixing leaks promptly matters too, since a running toilet sends water to the tank around the clock.</p><p>Catching a [[LINK:leak-detection-westchester-ny|hidden leak that is overloading the system]] protects the whole setup.</p>` },
      { id: "local", h2: "Septic Homes Around Armonk", html: `<p>Many properties in the more rural parts of the county run on septic, often with well water. That makes the health of your plumbing and your septic system closely linked.</p><p>The [[OUT:https://www.epa.gov/septic/how-your-septic-system-works|EPA overview of how septic systems work]] is a helpful reference, and we handle the plumbing that keeps yours healthy.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when multiple drains slow together, you smell sewage, or a lower drain backs up. We will determine whether it is a plumbing fix or a job for a tank pumping service.</p><p>We coordinate with pumping companies when the tank itself needs attention.</p>` },
    ],
    faqs: [
      { q: "Do you pump the septic tank?", a: "We handle the plumbing side — the drains, lines, and fixtures that feed the tank. Tank pumping is done by a dedicated septic company, and we help you coordinate it." },
      { q: "Why are all my drains slow at once?", a: "When many drains slow together, the cause is usually the shared line or the septic system itself rather than one fixture. That is worth a professional look." },
      { q: "What should I keep out of septic drains?", a: "Grease, wipes, harsh chemicals, and anything that does not break down. These clog lines and harm the bacteria your system needs." },
      { q: "Can a plumbing leak overload my septic system?", a: "Yes. A running toilet or hidden leak sends extra water to the tank continuously, which can overload the drain field. Fixing leaks protects the system." },
      { q: "Do you work on well-water homes too?", a: "Yes. Many septic homes here also have wells, and we handle the plumbing side of both." },
    ],
  });

  P({
    slug: "gas-line-repair-westchester-ny", cat: "gasfitter-westchester-ny", tier: 2, serviceType: "Gas Line Repair",
    title: "Gas Line Repair in Westchester County, NY | Dan's Drains",
    h1: "Gas Line Repair in Westchester County, NY",
    heroAlt: "Dan's Drains licensed plumber repairing a gas line connection in a Westchester County home",
    lead: "Gas line problems are not something to wait on. Dan's Drains provides licensed gas line repair and leak response for Westchester County homes, done safely and to code.",
    localDetails: "gas leaks, appliance connections, older gas piping",
    angle: "Licensed, safety-first gas repair",
    openCta: "Smell gas? Leave the house and call your utility first — then call us for the repair.",
    toc: [{ id: "signs", label: "Signs of a leak" }, { id: "safety", label: "Safety first" }, { id: "process", label: "How we repair" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "signs", h2: "Signs of a Gas Line Problem", html: `<p>Some gas issues are obvious, others subtle. Watch and listen for:</p><ul><li>A rotten-egg or sulfur smell near a line or appliance.</li><li>A hissing sound close to a gas connection.</li><li>An appliance that will not stay lit or burns oddly.</li><li>Dead vegetation near an outdoor gas line.</li></ul><p>Treat any suspected leak as urgent.</p>` },
      { id: "safety", h2: "Safety Comes First", html: `<p>If you smell gas, leave the house without flipping switches and call your gas utility from outside. Once the immediate danger is handled, we repair the line that caused it.</p><p>This is the repair side of our licensed [[LINK:gasfitter-westchester-ny|gas line services]], and we never rush a shortcut on gas work.</p>` },
      { id: "process", h2: "How We Repair a Gas Line", html: `<p>We locate the problem, repair or replace the affected section or connection, and test the line to confirm it holds before restoring service. We check the whole run, not just the obvious fitting.</p><p>Every repair is done to code, because gas is not an area for guesswork.</p>` },
      { id: "local", h2: "Gas Piping in Older Local Homes", html: `<p>Homes around Armonk have often been updated over decades, leaving gas piping of mixed ages. Older connections can corrode or loosen, especially where a line meets an appliance.</p><p>The [[OUT:https://www.nfpa.org/education-and-research/home-fire-safety/natural-gas-and-propane|NFPA natural gas safety information]] explains why careful work matters, and we repair to those standards.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call a licensed plumber any time you suspect a gas leak or need a line repaired or moved. It is not a do-it-yourself job.</p><p>If the repair ties into a gas appliance, we can also handle the [[LINK:gas-water-heater-installation-westchester-ny|gas water heater connection]].</p>` },
    ],
    faqs: [
      { q: "What do I do if I smell gas?", a: "Leave the house right away without flipping switches, and call your gas utility from outside. Once the danger is handled, we repair the line that caused it." },
      { q: "Are you licensed for gas work?", a: "Yes. Dan's Drains is a licensed and insured plumbing company, and we handle gas line repairs safely and to code." },
      { q: "How do you find a gas leak?", a: "We inspect connections and test the line using proper methods to locate the leak, then confirm the repair holds before restoring service." },
      { q: "Can you repair a line to a specific appliance?", a: "Yes. Whether it is a water heater, range, or dryer, we repair or replace the connection safely." },
      { q: "Is a faint gas smell ever normal?", a: "A brief odor when a burner lights can be normal; a lingering or strong smell is not. When in doubt, treat it as a leak and get it checked." },
    ],
  });

  P({
    slug: "bathroom-plumbing-remodeling-westchester-ny", cat: "bathroom-remodeler-westchester-ny", tier: 2, serviceType: "Bathroom Plumbing Remodeling",
    title: "Bathroom Plumbing Remodeling in Westchester County, NY",
    h1: "Bathroom Plumbing Remodeling in Westchester County, NY",
    heroAlt: "Dan's Drains plumber roughing in bathroom plumbing during a remodel in Westchester County",
    lead: "The plumbing behind your remodel decides whether it lasts. Dan's Drains handles bathroom remodel plumbing — moving lines, connecting fixtures, and testing everything before the walls close.",
    localDetails: "fixture relocation, older-home rough-in, remodel coordination",
    angle: "Get the rough-in right before the tile goes up",
    toc: [{ id: "what", label: "What we handle" }, { id: "plan", label: "Planning ahead" }, { id: "process", label: "How we work" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What Remodel Plumbing Covers", html: `<p>A bathroom remodel's plumbing includes moving or adding supply and drain lines, setting the rough-in for fixtures, and connecting everything once the finishes are in. It is the part you do not see that makes the part you do see work.</p><p>This is the hands-on side of our [[LINK:bathroom-remodeler-westchester-ny|bathroom plumbing category]].</p>` },
      { id: "plan", h2: "Planning the Plumbing First", html: `<p>The cheapest time to move a drain or supply line is before the walls close. We like to be involved early so we can flag anything harder than it looks and keep the project on schedule.</p><p>Good planning here prevents mid-remodel surprises that stall the whole job.</p>` },
      { id: "process", h2: "How We Handle the Rough-In", html: `<p>We set the supply and drain lines for each fixture, pressure-test the connections, and coordinate timing with the tile and finish work. Once finishes are in, we connect the [[LINK:toilet-installation-westchester-ny|toilet]] and other fixtures and confirm everything is leak-free.</p><p>Testing before the walls close is what prevents a hidden leak later.</p>` },
      { id: "local", h2: "Remodeling Older Local Bathrooms", html: `<p>Opening a wall in an older home here often reveals aging drain and supply lines. While the area is accessible, it is frequently worth updating them, and we will tell you honestly when it is.</p><p>For remodel inspiration, the [[OUT:https://www.thisoldhouse.com/bathrooms|This Old House bathroom resources]] are helpful, and we handle the plumbing that brings the plan to life.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Bring us in early, as soon as your plans involve moving a fixture or updating pipe. Getting the plumbing planned up front keeps the remodel smooth.</p><p>If your project also updates the shower, our [[LINK:shower-installation-westchester-ny|shower plumbing installation]] fits right in.</p>` },
    ],
    faqs: [
      { q: "When should I involve a plumber in my remodel?", a: "As early as possible — ideally during planning. Moving a fixture or updating pipe is far easier before the walls close, and early planning keeps the project on schedule." },
      { q: "Can you move fixtures to a new layout?", a: "Often, yes, depending on where the drains and joists are. We will review your plan and tell you honestly what is straightforward and what is involved." },
      { q: "Should I update old pipe during the remodel?", a: "If a wall is open and the pipe is aging, it is usually the cheapest time to update it. We advise when it is worth doing and when it is fine to leave." },
      { q: "Do you pressure-test the new plumbing?", a: "Yes. We test connections before the walls close so a hidden leak does not surface behind your new tile." },
      { q: "Do you work with my contractor?", a: "Yes. We handle the plumbing scope and coordinate timing with your contractor and the finish work." },
    ],
  });

  P({
    slug: "water-leak-sensor-installation-westchester-ny", cat: "water-damage-restoration-westchester-ny", tier: 3, serviceType: "Water Leak Sensor Installation",
    title: "Water Leak Sensor Installation in Westchester County, NY",
    h1: "Water Leak Sensor Installation in Westchester County, NY",
    heroAlt: "Dan's Drains plumber installing a smart water leak sensor near a water heater in Westchester County",
    lead: "A small sensor can save you from a big flood. Dan's Drains installs smart water leak sensors that catch leaks early — near water heaters, washers, and in basements — so you know before damage spreads.",
    localDetails: "finished basements, water heater and washer leaks, early warning",
    angle: "Catch the leak before it floods the room",
    toc: [{ id: "what", label: "What they do" }, { id: "where", label: "Where to place them" }, { id: "process", label: "How we install" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What Leak Sensors Do", html: `<p>A water leak sensor detects moisture where it should not be and alerts you right away — many send a notification to your phone. Some can even shut off the water automatically. It is a small device that prevents a big, expensive surprise.</p><p>It is one of the most cost-effective parts of [[LINK:water-damage-restoration-westchester-ny|preventing water damage]].</p>` },
      { id: "where", h2: "Where to Place Sensors", html: `<p>The best spots are wherever a leak would do the most damage or go unnoticed longest:</p><ul><li>Near the water heater.</li><li>Behind or under the washing machine.</li><li>In a finished basement.</li><li>Under sinks and near sump pumps.</li></ul><p>We help you pick the spots that matter most for your home.</p>` },
      { id: "process", h2: "How We Install Sensors", html: `<p>We place the sensors in the right spots, set them up, and confirm they detect and alert as they should. For systems with an automatic shutoff, we connect that to your water supply so it can stop a leak on its own.</p><p>We show you how it works so you are confident it has your back.</p>` },
      { id: "local", h2: "Leak Risk in Westchester Homes", html: `<p>Finished basements and cold winters make water damage a real risk here. A failed water heater or a burst pipe can flood a basement before anyone notices — unless a sensor catches it first.</p><p>The [[OUT:https://www.fema.gov/flood-insurance|FEMA guidance on water damage]] underscores the stakes, and sensors are an inexpensive safeguard.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when you want early warning for leaks, especially if you have a finished basement or have been burned by water damage before. We place sensors where they will actually help.</p><p>Pair them with a checked [[LINK:sump-pump-installation-westchester-ny|sump pump setup]] for solid basement protection.</p>` },
    ],
    faqs: [
      { q: "How do water leak sensors work?", a: "They detect moisture and alert you immediately, often to your phone. Some models can automatically shut off the water to stop a leak before it spreads." },
      { q: "Where should I put leak sensors?", a: "Near water heaters, washing machines, sump pumps, under sinks, and in finished basements — anywhere a leak would cause damage or go unnoticed. We help you choose." },
      { q: "Can a sensor shut off my water automatically?", a: "Some systems can. We can install one that connects to your water supply and shuts it off automatically when a leak is detected." },
      { q: "Are leak sensors worth it?", a: "For the cost, yes. A single caught leak can prevent thousands in water damage, especially in a finished basement." },
      { q: "Do the sensors need special wiring?", a: "Most are wireless and battery-powered, so installation is simple. Systems with automatic shutoff connect to your water line, which we handle." },
    ],
  });
};
