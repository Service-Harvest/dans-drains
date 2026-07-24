/* Fixtures & installation pages (12). */
module.exports = (ctx) => {
  const { page, SERVICE_PAGES } = ctx;
  const P = (o) => SERVICE_PAGES.push(page(o));

  P({
    slug: "toilet-repair-westchester-ny", cat: "plumber", tier: 2, serviceType: "Toilet Repair",
    title: "Toilet Repair in Westchester County, NY | Dan's Drains",
    h1: "Toilet Repair in Westchester County, NY",
    heroAlt: "Dan's Drains plumber repairing a running toilet in a Westchester County bathroom",
    lead: "A running, leaking, or clogged toilet wastes water and patience. Dan's Drains fixes toilet problems the same day so your bathroom is back to normal fast.",
    localDetails: "running toilets, wax-ring leaks, older fixtures", angle: "Quick same-day fixes that stop the waste",
    toc: [{ id: "signs", label: "Common problems" }, { id: "causes", label: "What causes them" }, { id: "process", label: "How we fix it" }, { id: "cost", label: "Repair or replace" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "signs", h2: "Common Toilet Problems", html: `<p>Most toilet trouble falls into a few buckets:</p><ul><li>A toilet that keeps running long after a flush.</li><li>A weak or incomplete flush.</li><li>Water pooling at the base.</li><li>A clog that will not clear with a plunger.</li></ul><p>Each has a different cause, and a running toilet alone can waste a surprising amount of water every day.</p>` },
      { id: "causes", h2: "What Causes Toilet Problems", html: `<p>A running toilet usually comes down to a worn flapper or fill valve. A leak at the base often means a failed wax ring. Weak flushing can be mineral buildup or a partial clog further down the line.</p><p>If the clog keeps returning, the real issue may be deeper — the kind of thing our [[LINK:drain-snaking-westchester-ny|drain snaking for stubborn clogs]] resolves.</p>` },
      { id: "process", h2: "How We Repair a Toilet", html: `<p>We diagnose the specific problem and replace the worn part — flapper, fill valve, or wax ring — or clear the blockage. It is usually a quick, inexpensive fix once we know the cause.</p><p>If the toilet itself is cracked or worn out, we will discuss a straightforward [[LINK:toilet-installation-westchester-ny|replacement toilet set and sealed]] instead.</p>` },
      { id: "cost", h2: "Repair or Replace?", html: `<p>Most toilet issues are simple repairs. Replacement makes sense when the bowl or tank is cracked, the toilet is very old and inefficient, or repairs keep stacking up.</p><p>A modern low-flow toilet can cut water use noticeably, as the [[OUT:https://www.epa.gov/watersense/residential-toilets|EPA WaterSense toilet information]] explains, and we will give you an honest call on repair versus replace.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when a toilet keeps running, leaks at the base, or clogs repeatedly. A quick repair now prevents water waste and possible floor damage.</p><p>A base leak in particular is worth prompt attention before it causes [[LINK:water-damage-restoration-westchester-ny|hidden floor and subfloor damage]].</p>` },
    ],
    faqs: [
      { q: "Why does my toilet keep running?", a: "Usually a worn flapper or fill valve that is not sealing. It is an inexpensive repair, and worth doing quickly because a running toilet wastes a lot of water." },
      { q: "Water is leaking at the base — what is wrong?", a: "That often means a failed wax ring or loose connection. It should be fixed promptly, since the water can damage the floor and subfloor beneath." },
      { q: "My toilet clogs constantly. Why?", a: "Frequent clogs can mean a partial blockage further down the line or an older low-performing toilet. We find the cause instead of just plunging again." },
      { q: "Is it worth repairing an old toilet?", a: "Often, yes, if it is basically sound. If it is cracked, very inefficient, or repeatedly failing, a modern replacement may be the better value." },
      { q: "Can you come the same day?", a: "For many toilet repairs, yes. Call early and we will do our best to get it handled the same day." },
    ],
  });

  P({
    slug: "toilet-installation-westchester-ny", cat: "plumber", tier: 3, serviceType: "Toilet Installation",
    title: "Toilet Installation in Westchester County, NY | Dan's Drains",
    h1: "Toilet Installation in Westchester County, NY",
    heroAlt: "Dan's Drains plumber installing a new toilet in a Westchester County bathroom",
    lead: "A properly installed toilet sits level, seals tight, and never wobbles. Dan's Drains installs new toilets cleanly and leak-tests every one before we leave.",
    localDetails: "low-flow upgrades, wax-ring seal, level set", angle: "Set level, sealed, and leak-tested",
    toc: [{ id: "why", label: "Why proper install" }, { id: "process", label: "How we install" }, { id: "choose", label: "Choosing a toilet" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "why", h2: "Why a Proper Install Matters", html: `<p>A toilet that is not set right will rock, leak at the base, or run. Done properly, it seals to the floor, connects cleanly to the supply, and flushes reliably for years.</p><p>Getting the wax-ring seal right is the detail that prevents the slow base leaks behind many [[LINK:toilet-repair-westchester-ny|later toilet repairs]].</p>` },
      { id: "process", h2: "How We Install a Toilet", html: `<p>We set a fresh seal, level the toilet to the floor, connect the supply, and test the flush and base for leaks. We haul away the old unit and leave the bathroom clean.</p><p>If your floor or flange is damaged, we address that first so the new toilet sits on a solid base.</p>` },
      { id: "choose", h2: "Choosing the Right Toilet", html: `<p>Modern toilets vary in height, flush type, and water use. A comfort-height bowl and an efficient flush are popular upgrades. We are glad to install a model you have chosen or advise on options.</p><p>Efficient models save water without sacrificing performance, in line with [[OUT:https://www.epa.gov/watersense/residential-toilets|EPA WaterSense guidance]].</p>` },
      { id: "local", h2: "Toilet Upgrades in Local Homes", html: `<p>Many older bathrooms in this area still have original, water-hungry toilets. Swapping to an efficient model during a bathroom update is an easy win for both water use and reliability.</p><p>If you are remodeling, we coordinate the toilet with the rest of the [[LINK:bathroom-plumbing-remodeling-westchester-ny|bathroom plumbing work]].</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when your toilet is cracked, chronically leaking, or you simply want an upgrade. A clean, level install prevents the wobble and leaks of a rushed job.</p><p>Buying the toilet yourself? We are glad to install a unit you have already picked out.</p>` },
    ],
    faqs: [
      { q: "Can you install a toilet I bought?", a: "Yes. Bring us the model you chose and we will set it level, seal it, and leak-test it." },
      { q: "How long does a toilet installation take?", a: "A standard replacement is usually quick — often under an hour or two — unless the floor or flange needs repair first." },
      { q: "Should I upgrade to a low-flow toilet?", a: "Modern efficient toilets save water while flushing well. If your current toilet is old and water-hungry, an upgrade usually pays off." },
      { q: "What if my floor is damaged under the old toilet?", a: "We check the flange and floor when we remove the old unit and address any damage so the new toilet sits on a solid, leak-free base." },
      { q: "Do you remove the old toilet?", a: "Yes. We haul away the old unit and leave the bathroom clean." },
    ],
  });

  P({
    slug: "faucet-installation-westchester-ny", cat: "plumber", tier: 3, serviceType: "Faucet Installation",
    title: "Faucet Installation in Westchester County, NY | Dan's Drains",
    h1: "Faucet Installation in Westchester County, NY",
    heroAlt: "Dan's Drains plumber installing a new kitchen faucet in a Westchester County home",
    lead: "A new faucet freshens a kitchen or bath instantly — when it is installed without leaks. Dan's Drains fits and seals new faucets cleanly and tests every connection.",
    localDetails: "kitchen and bath upgrades, worn shutoffs, drip-free seals", angle: "Clean, drip-free fit every time",
    toc: [{ id: "why", label: "Why it matters" }, { id: "process", label: "How we install" }, { id: "choose", label: "Choosing a faucet" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "why", h2: "Why Proper Faucet Installation Matters", html: `<p>A faucet has several connections that can drip if they are not sealed right. A clean install means no leaks under the sink, smooth handles, and steady flow.</p><p>While we are under there, we often spot worn shutoff valves worth replacing, which prevents a future [[LINK:leak-detection-westchester-ny|hidden under-sink leak]].</p>` },
      { id: "process", h2: "How We Install a Faucet", html: `<p>We remove the old faucet, fit the new one, connect the supply lines, and test for leaks and smooth operation. We also check the shutoff valves and drain connection while we are there.</p><p>If your sink is being replaced too, we handle the [[LINK:sink-installation-westchester-ny|sink and faucet together]] for a clean result.</p>` },
      { id: "choose", h2: "Choosing a Faucet", html: `<p>Faucets vary in mounting, handle style, and features like pull-down sprayers. We can install a model you have chosen or help you pick one that fits your sink's configuration.</p><p>Water-efficient models cut waste without hurting performance, as [[OUT:https://www.epa.gov/watersense/bathroom-faucets|EPA WaterSense faucet information]] describes.</p>` },
      { id: "local", h2: "Faucet Upgrades in Local Homes", html: `<p>In older homes here, the shutoff valves under the sink are often as old as the house and can seize or leak. Replacing them during a faucet swap saves headaches down the road.</p><p>A new faucet is also a simple refresh during a larger [[LINK:kitchen-plumbing-remodeling-westchester-ny|kitchen plumbing update]].</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when a faucet drips, the handles are stiff, or you want to upgrade. A proper install prevents the under-sink leaks that come from a rushed one.</p><p>We are happy to install a faucet you have already purchased.</p>` },
    ],
    faqs: [
      { q: "Can you install a faucet I bought myself?", a: "Yes. Bring us the faucet you chose and we will fit it, seal the connections, and test it." },
      { q: "Should I replace the shutoff valves too?", a: "If they are old or stiff, yes. Replacing them during the faucet swap is cheap insurance against a future leak." },
      { q: "Why does my new faucet drip underneath?", a: "That usually means a connection was not sealed properly. We test every connection so leaks do not show up under the sink later." },
      { q: "How long does faucet installation take?", a: "A standard faucet swap is usually quick, often under an hour unless there are complications with old valves or connections." },
      { q: "Can you match a faucet to my sink?", a: "Yes. We will make sure the mounting and hole configuration fit your sink before installing." },
    ],
  });

  P({
    slug: "outdoor-faucet-repair-westchester-ny", cat: "plumber", tier: 3, serviceType: "Outdoor Faucet Repair",
    title: "Outdoor Faucet Repair in Westchester County, NY",
    h1: "Outdoor Faucet Repair in Westchester County, NY",
    heroAlt: "Dan's Drains plumber repairing an outdoor hose faucet on a Westchester County home",
    lead: "A leaking or frozen-damaged outdoor spigot wastes water and can leak into your wall. Dan's Drains repairs and replaces hose bibs and outdoor faucets, and sets you up to avoid winter freeze damage.",
    localDetails: "freeze-damaged hose bibs, winterizing, wall leaks", angle: "Stop the outdoor drip before it reaches the wall",
    toc: [{ id: "signs", label: "Common problems" }, { id: "causes", label: "What causes them" }, { id: "process", label: "How we fix it" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "signs", h2: "Common Outdoor Faucet Problems", html: `<p>Outdoor faucets take weather abuse, so they fail in predictable ways:</p><ul><li>A steady drip from the spout or handle.</li><li>No flow or weak flow after winter.</li><li>Water leaking behind the faucet into the wall.</li><li>A handle that spins without shutting off.</li></ul><p>A leak that runs into the wall is the one to catch fast.</p>` },
      { id: "causes", h2: "What Causes Them", html: `<p>The biggest cause here is winter freeze damage — water left in the faucet freezes, expands, and splits the valve or pipe. Worn washers and seals cause the everyday drips.</p><p>If a freeze cracked the pipe inside the wall, that becomes a [[LINK:pipe-repair-westchester-ny|repair of the damaged supply pipe]].</p>` },
      { id: "process", h2: "How We Repair an Outdoor Faucet", html: `<p>We diagnose whether it is a worn seal, a failed valve, or freeze damage, then repair or replace the faucet. Where it makes sense, we install a frost-proof hose bib to reduce future freeze risk.</p><p>We test for leaks both at the spout and behind the wall before finishing.</p>` },
      { id: "local", h2: "Winter and Outdoor Faucets", html: `<p>Our winters are hard on outdoor faucets. Water left in a standard hose bib can freeze and split it, sometimes leaking inside the wall when the weather warms. Winterizing outdoor faucets each fall prevents most of this.</p><p>The [[OUT:https://www.familyhandyman.com/article/how-to-winterize-outdoor-faucets/|Family Handyman guide to winterizing outdoor faucets]] is a handy reference, and we handle the repairs and upgrades.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when an outdoor faucet drips, will not shut off, or leaks behind the wall. A frost-proof replacement can save you the same repair every spring.</p><p>Not sure if the leak reached inside? Our [[LINK:water-leak-sensor-installation-westchester-ny|leak sensors near vulnerable spots]] give early warning.</p>` },
    ],
    faqs: [
      { q: "Why did my outdoor faucet break over winter?", a: "Water left in the faucet froze and expanded, splitting the valve or pipe. It is one of the most common cold-weather plumbing problems here." },
      { q: "What is a frost-proof hose bib?", a: "It is an outdoor faucet designed so the shutoff sits inside the warm wall, reducing the chance of freeze damage. We often install these as replacements." },
      { q: "My outdoor faucet leaks into the wall — is that serious?", a: "Yes. Water leaking behind the wall can cause hidden damage. It should be repaired promptly, and we check inside as well as out." },
      { q: "How do I winterize my outdoor faucets?", a: "Disconnect hoses, shut off the interior valve if there is one, and drain the faucet before hard freezes. We can show you how or install frost-proof faucets." },
      { q: "Can you just replace the washer?", a: "For a simple drip, sometimes yes. If the valve is freeze-damaged, replacement is the lasting fix. We advise based on what we find." },
    ],
  });

  P({
    slug: "garbage-disposal-repair-westchester-ny", cat: "plumber", tier: 3, serviceType: "Garbage Disposal Repair",
    title: "Garbage Disposal Repair in Westchester County, NY",
    h1: "Garbage Disposal Repair in Westchester County, NY",
    heroAlt: "Dan's Drains plumber repairing a garbage disposal under a Westchester County kitchen sink",
    lead: "A jammed, humming, or leaking garbage disposal is a quick fix in the right hands. Dan's Drains repairs or replaces disposals and gets your kitchen sink working again.",
    localDetails: "jammed units, leaks, sink drain connection", angle: "Fast under-sink fixes done clean",
    toc: [{ id: "signs", label: "Common problems" }, { id: "causes", label: "What causes them" }, { id: "process", label: "How we fix it" }, { id: "cost", label: "Repair or replace" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "signs", h2: "Common Disposal Problems", html: `<p>Disposals usually fail in familiar ways:</p><ul><li>It hums but will not turn.</li><li>It is completely dead.</li><li>It leaks from the bottom or the connections.</li><li>It drains slowly or backs up.</li></ul><p>A hum without spinning usually means a jam, which is often a quick fix.</p>` },
      { id: "causes", h2: "What Causes Disposal Problems", html: `<p>Jams from bones, fibrous scraps, or utensils are the most common. Leaks come from worn seals or loose connections, and a dead unit may just need a reset or have reached the end of its life.</p><p>If the sink drain itself is slow, the disposal may not be the culprit — that can be a [[LINK:drain-cleaning-westchester-ny|clogged kitchen drain line]].</p>` },
      { id: "process", h2: "How We Repair a Disposal", html: `<p>We clear jams, reset or repair the motor where possible, and reseal or tighten leaking connections. If the unit is burned out or badly corroded, we replace it and connect the new one cleanly to the drain.</p><p>We test it thoroughly before finishing so it runs quiet and drains well.</p>` },
      { id: "cost", h2: "Repair or Replace?", html: `<p>Jams and minor leaks are usually simple repairs. Replacement makes sense when the motor is burned out or the unit is old and corroded. A new disposal is inexpensive and quick to install.</p><p>Either way, we handle disposals as a small job and connect them properly to your [[LINK:sink-installation-westchester-ny|kitchen sink plumbing]]. For what belongs in a disposal and what does not, the [[OUT:https://www.familyhandyman.com/article/garbage-disposal-dos-and-donts/|Family Handyman garbage disposal do's and don'ts]] is a handy reference.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when your disposal hums, leaks, or quits. Never put your hand inside a disposal to clear a jam — that is exactly the kind of quick, safe fix we handle.</p><p>Leaks under the sink deserve prompt attention to avoid cabinet damage.</p>` },
    ],
    faqs: [
      { q: "My disposal hums but does not spin — what is wrong?", a: "That usually means it is jammed. There is often a simple fix, but never reach inside the unit. We clear jams safely and get it running." },
      { q: "Why is my disposal leaking?", a: "Leaks usually come from worn seals or loose drain connections. We find the source and reseal or replace as needed." },
      { q: "Should I repair or replace my disposal?", a: "Jams and minor leaks are usually worth repairing. A burned-out motor or an old, corroded unit is better replaced, since a new one is inexpensive." },
      { q: "Can a disposal cause a slow drain?", a: "Sometimes the disposal is fine and the drain line beyond it is clogged. We check both so we fix the real cause." },
      { q: "What should I avoid putting down my disposal?", a: "Avoid bones, fibrous scraps like celery, grease, and hard items. These cause most of the jams and clogs we see." },
    ],
  });

  P({
    slug: "shower-installation-westchester-ny", cat: "plumber", tier: 3, serviceType: "Shower Installation",
    title: "Shower Installation in Westchester County, NY | Dan's Drains",
    h1: "Shower Installation in Westchester County, NY",
    heroAlt: "Dan's Drains plumber installing a shower and valve in a Westchester County bathroom",
    lead: "A new shower is only as good as the plumbing behind it. Dan's Drains installs showers and valves watertight, so you get steady temperature and no hidden leaks.",
    localDetails: "valve rough-in, waterproofing, remodel coordination", angle: "Watertight behind the wall, not just the tile",
    toc: [{ id: "what", label: "What we handle" }, { id: "process", label: "How we install" }, { id: "valve", label: "The valve matters" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What Shower Installation Involves", html: `<p>A shower install is more than the fixture you see. It is the supply lines, the valve, the drain, and the waterproofing behind the wall that keeps water where it belongs.</p><p>We handle the plumbing side, often as part of a full [[LINK:bathroom-plumbing-remodeling-westchester-ny|bathroom remodel plumbing project]].</p>` },
      { id: "process", h2: "How We Install a Shower", html: `<p>We set the valve and supply lines, connect the drain, and pressure-test everything before the wall closes up. Getting the rough-in right is what prevents leaks you would otherwise only discover later.</p><p>We coordinate timing with your tile and finish work so nothing gets trapped behind a wall unfinished.</p>` },
      { id: "valve", h2: "Why the Shower Valve Matters", html: `<p>The valve controls temperature and pressure. A quality, properly installed valve gives you steady water that does not scald when someone flushes elsewhere. A bad one is a daily annoyance.</p><p>If your issue is an existing shower running hot and cold, that is a [[LINK:shower-valve-replacement-westchester-ny|shower valve replacement]] rather than a full install.</p>` },
      { id: "local", h2: "Showers in Local Bathrooms", html: `<p>Older bathrooms here sometimes have outdated valves and drains that are worth updating during a shower project. Opening the wall is the right time to bring the plumbing up to date.</p><p>For planning ideas, the [[OUT:https://www.thisoldhouse.com/bathrooms|This Old House bathroom guides]] are a helpful resource, and we handle the plumbing that makes them work.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when you are adding or replacing a shower, especially if it involves moving the valve or drain. Watertight plumbing behind the wall is not the place to guess.</p><p>We can install fixtures you have chosen and coordinate with your remodel schedule.</p>` },
    ],
    faqs: [
      { q: "Can you install a shower during my remodel?", a: "Yes. We handle the plumbing rough-in and fixture connection and coordinate timing with your tile and finish work." },
      { q: "Why does my shower temperature swing?", a: "That often points to an old or failing valve. A modern pressure-balancing valve keeps the temperature steady even when other fixtures run." },
      { q: "Do you pressure-test the plumbing?", a: "Yes. We test the supply and drain connections before the wall closes so a hidden leak does not surface later." },
      { q: "Can I pick my own shower fixtures?", a: "Absolutely. We are glad to install the valve trim and showerhead you have selected." },
      { q: "Can you move my shower to a new spot?", a: "Often, depending on where the drain and supply lines are. We will look at your layout and tell you honestly what is involved." },
    ],
  });

  P({
    slug: "shower-valve-replacement-westchester-ny", cat: "plumber", tier: 3, serviceType: "Shower Valve Replacement",
    title: "Shower Valve Replacement in Westchester County, NY",
    h1: "Shower Valve Replacement in Westchester County, NY",
    heroAlt: "Dan's Drains plumber replacing a shower valve in a Westchester County bathroom",
    lead: "If your shower runs hot and cold or drips constantly, the valve is usually to blame. Dan's Drains replaces shower valves to restore steady temperature and pressure.",
    localDetails: "temperature swings, dripping valves, older valve bodies", angle: "Steady temperature from a proper valve",
    toc: [{ id: "signs", label: "Signs of valve trouble" }, { id: "process", label: "How we replace it" }, { id: "types", label: "Valve types" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "signs", h2: "Signs Your Shower Valve Is Failing", html: `<p>A failing valve shows up in daily use:</p><ul><li>Water temperature that swings when another fixture runs.</li><li>A shower that drips even when off.</li><li>Difficulty setting a comfortable temperature.</li><li>Handles that are stiff or spin loosely.</li></ul><p>A pressure-balancing valve fixes the temperature swings that scald or chill mid-shower.</p>` },
      { id: "process", h2: "How We Replace a Shower Valve", html: `<p>We access the valve, remove the old body, and install a new one connected to the hot and cold lines. We test the temperature and pressure and check for leaks before restoring the wall.</p><p>If we find other aging shower plumbing, we will point it out rather than close the wall over a future problem — related to our broader [[LINK:shower-installation-westchester-ny|shower plumbing work]].</p>` },
      { id: "types", h2: "Shower Valve Types", html: `<p>Modern pressure-balancing and thermostatic valves keep temperature steady and safe. We help you choose the right type for your shower and install it correctly.</p><p>A good valve is the difference between a comfortable shower and a daily fight with the handle.</p>` },
      { id: "local", h2: "Older Valves in Local Homes", html: `<p>Many bathrooms in this area still have original valve bodies that no longer regulate temperature well. Replacing an old valve is a common, worthwhile upgrade.</p><p>Comfortable, safe water temperature is worth getting right, and the [[OUT:https://www.cdc.gov/healthy-water-swimming/about/hot-tubs-water-temperature.html|CDC information on hot water safety]] is a useful reminder of why scald protection matters.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when your shower temperature swings, drips, or is hard to control. Replacing the valve is the real fix, not a new showerhead.</p><p>If the drip has stained the ceiling below, check for [[LINK:leak-detection-westchester-ny|a hidden leak behind the wall]] too.</p>` },
    ],
    faqs: [
      { q: "Why does my shower go hot and cold?", a: "Usually an old or failing valve that cannot balance pressure. A modern pressure-balancing valve keeps the temperature steady even when other fixtures run." },
      { q: "Can you replace the valve without retiling?", a: "Often we access the valve through an existing panel or a small opening. We keep any wall work to the minimum the job requires." },
      { q: "My shower drips even when off — is the valve the cause?", a: "Frequently, yes. A worn valve cartridge lets water through. Replacing the valve or cartridge stops the drip." },
      { q: "What is a pressure-balancing valve?", a: "It is a valve that holds your shower temperature steady when water pressure changes elsewhere in the house, preventing sudden hot or cold surges." },
      { q: "How long does a valve replacement take?", a: "Often a few hours, depending on access. We will give you a realistic estimate up front." },
    ],
  });

  P({
    slug: "bathtub-installation-westchester-ny", cat: "plumber", tier: 3, serviceType: "Bathtub Installation",
    title: "Bathtub Installation in Westchester County, NY | Dan's Drains",
    h1: "Bathtub Installation in Westchester County, NY",
    heroAlt: "Dan's Drains plumber installing a new bathtub in a Westchester County bathroom",
    lead: "A new tub can transform a bathroom — when the drain and supply connections are done right. Dan's Drains installs and connects bathtubs cleanly and leak-free.",
    localDetails: "drain and overflow connections, remodel timing, older bathrooms", angle: "Solid drain connections, no hidden leaks",
    toc: [{ id: "what", label: "What we handle" }, { id: "process", label: "How we install" }, { id: "choose", label: "Choosing a tub" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What Bathtub Installation Involves", html: `<p>Installing a tub means more than setting it in place. The drain, overflow, and supply connections all have to be watertight, and the tub has to be level and supported so it does not flex.</p><p>We handle the plumbing side, often within a larger [[LINK:bathroom-plumbing-remodeling-westchester-ny|bathroom remodel plumbing scope]].</p>` },
      { id: "process", h2: "How We Install a Bathtub", html: `<p>We remove the old tub if needed, set and level the new one, connect the drain and overflow, and hook up the supply and faucet. Then we test everything for leaks before the surround goes up.</p><p>Getting the drain connection right is what prevents slow leaks into the floor below.</p>` },
      { id: "choose", h2: "Choosing a Bathtub", html: `<p>Tubs vary in size, material, and drain configuration. We make sure your chosen tub fits the space and that the drain lines up, then install it properly. We can advise if you are still deciding.</p><p>A freestanding tub, for example, has different plumbing needs than a standard alcove tub.</p>` },
      { id: "local", h2: "Tubs in Older Local Bathrooms", html: `<p>Replacing a tub in an older home sometimes reveals aged drain lines worth updating while the area is open. We will tell you when that is worth doing.</p><p>For remodel planning, the [[OUT:https://www.bhg.com/bathroom/remodeling/|Better Homes &amp; Gardens bathroom remodeling ideas]] are a helpful starting point, and we handle the plumbing.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when you are replacing a tub or adding one in a remodel. The drain and supply connections are exactly where a rushed job leaks.</p><p>We coordinate with your remodel and can install a tub you have already chosen.</p>` },
    ],
    faqs: [
      { q: "Can you install a freestanding tub?", a: "Yes. Freestanding tubs have specific drain and supply needs, and we handle the plumbing to install one cleanly and leak-free." },
      { q: "Do you remove the old tub?", a: "Yes, we can remove and dispose of the old tub as part of the job, then install the new one." },
      { q: "Will you check the drain lines?", a: "Yes. With the area open, we inspect the drain and overflow and flag anything aged that is worth updating while it is accessible." },
      { q: "Can I pick my own tub?", a: "Absolutely. We will confirm it fits your space and drain configuration, then install it properly." },
      { q: "How long does a bathtub installation take?", a: "It varies with the tub type and any drain work needed. We give you a realistic timeline with the upfront price." },
    ],
  });

  P({
    slug: "sink-installation-westchester-ny", cat: "plumber", tier: 3, serviceType: "Sink Installation",
    title: "Sink Installation in Westchester County, NY | Dan's Drains",
    h1: "Sink Installation in Westchester County, NY",
    heroAlt: "Dan's Drains plumber installing a kitchen sink in a Westchester County home",
    lead: "Kitchen or bathroom, a new sink needs solid drain and supply connections. Dan's Drains installs sinks and hooks them up leak-free, including the faucet and disposal.",
    localDetails: "kitchen and bath sinks, drain hookup, disposal connection", angle: "Every connection sealed and tested",
    toc: [{ id: "what", label: "What we handle" }, { id: "process", label: "How we install" }, { id: "choose", label: "Choosing a sink" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What Sink Installation Involves", html: `<p>Installing a sink means fitting it to the counter or vanity, connecting the drain and trap, and hooking up the supply lines and faucet — all sealed so nothing leaks into the cabinet below.</p><p>We handle the sink along with the [[LINK:faucet-installation-westchester-ny|faucet fitted and sealed]] and any disposal.</p>` },
      { id: "process", h2: "How We Install a Sink", html: `<p>We set and secure the sink, connect the drain and trap, hook up the supply lines, and install the faucet. Then we run water and check every connection for leaks before finishing.</p><p>If your sink has a disposal, we connect that too and confirm it drains cleanly.</p>` },
      { id: "choose", h2: "Choosing a Sink", html: `<p>Sinks vary in mounting style — drop-in, undermount, farmhouse — and each connects a little differently. We make sure your chosen sink fits the counter and plumbing, or advise if you are deciding.</p><p>The right sink is one that fits your space and how you actually use it.</p>` },
      { id: "local", h2: "Sink Upgrades in Local Homes", html: `<p>Swapping a sink during a kitchen or bath refresh is a common project here, and it is a good time to update aging shutoff valves and drain parts underneath.</p><p>Efficient faucets paired with a new sink save water, as [[OUT:https://www.epa.gov/watersense|EPA WaterSense]] notes, and we set the whole assembly up cleanly.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when you are replacing a sink or installing one in a remodel. The drain and supply connections are where a clean install pays off.</p><p>We coordinate the sink with a [[LINK:garbage-disposal-repair-westchester-ny|disposal repair or hookup]] if you have one.</p>` },
    ],
    faqs: [
      { q: "Can you install an undermount or farmhouse sink?", a: "Yes. Different mounting styles connect a bit differently, and we handle the plumbing to install each type cleanly." },
      { q: "Will you connect my garbage disposal too?", a: "Yes. We connect the disposal and confirm the whole assembly drains without leaks." },
      { q: "Can I supply my own sink and faucet?", a: "Absolutely. We will confirm they fit your counter and plumbing, then install and test everything." },
      { q: "Do you replace the shutoff valves?", a: "If they are old or stiff, we recommend replacing them during the install to prevent future leaks." },
      { q: "How long does sink installation take?", a: "A standard sink and faucet install is usually a few hours, depending on the sink type and any extra connections." },
    ],
  });

  P({
    slug: "fixture-replacement-westchester-ny", cat: "plumber", tier: 3, serviceType: "Fixture Replacement",
    title: "Plumbing Fixture Replacement in Westchester County, NY",
    h1: "Plumbing Fixture Replacement in Westchester County, NY",
    heroAlt: "Dan's Drains plumber replacing a worn plumbing fixture in a Westchester County home",
    lead: "Worn-out fixtures drip, stick, and date a room. Dan's Drains replaces plumbing fixtures throughout your home — faucets, valves, supply lines, and more — cleanly and leak-free.",
    localDetails: "aging fixtures, worn shutoffs, whole-home refresh", angle: "Refresh worn fixtures without the leaks",
    toc: [{ id: "what", label: "What we replace" }, { id: "why", label: "Why replace" }, { id: "process", label: "How we do it" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "Fixtures We Replace", html: `<p>Fixtures cover a lot of ground: faucets, shutoff valves, supply lines, drains, showerheads, and the small parts that wear out over years of use. We replace them individually or as a whole-home refresh.</p><p>For specific fixtures, we also handle dedicated [[LINK:faucet-installation-westchester-ny|faucet installation]] and other targeted swaps.</p>` },
      { id: "why", h2: "Why Replace Aging Fixtures", html: `<p>Old fixtures drip, stick, and waste water, and worn shutoff valves can seize just when you need them in an emergency. Replacing them improves reliability and can lower water use.</p><p>Fresh fixtures also update the look of a room for a fraction of a remodel's cost.</p>` },
      { id: "process", h2: "How We Replace Fixtures", html: `<p>We remove the old fixture, install the new one with fresh connections, and test for leaks and smooth operation. We often replace tired shutoff valves at the same time so everything is dependable.</p><p>We leave the area clean and confirm each fixture works before we go.</p>` },
      { id: "local", h2: "Fixture Upgrades in Local Homes", html: `<p>Many homes in this area have original fixtures and valves that are decades old. Refreshing them is an easy, affordable way to improve reliability and cut water waste.</p><p>Water-efficient fixtures make a real difference, as [[OUT:https://www.epa.gov/watersense/watersense-products|EPA WaterSense product information]] shows, and we install them properly.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when fixtures drip, stick, or look dated, or when you want a whole-home refresh. Proper connections prevent the leaks a quick swap can cause.</p><p>If a fixture leak has already caused damage, address the [[LINK:water-damage-restoration-westchester-ny|moisture before it spreads]].</p>` },
    ],
    faqs: [
      { q: "What counts as a plumbing fixture?", a: "Faucets, valves, showerheads, supply lines, drains, and similar parts. We replace them individually or as part of a whole-home refresh." },
      { q: "Should I replace old shutoff valves?", a: "Yes, if they are old or stiff. A seized shutoff is a real problem in an emergency, so replacing them during other work is smart." },
      { q: "Can new fixtures lower my water use?", a: "Efficient fixtures use less water without sacrificing performance, which can reduce your usage noticeably over time." },
      { q: "Can you install fixtures I bought?", a: "Yes. Bring us the fixtures you chose and we will install and test them." },
      { q: "Is fixture replacement disruptive?", a: "Usually not. Most fixture swaps are quick and clean, and we leave the area tidy." },
    ],
  });

  P({
    slug: "appliance-hook-up-westchester-ny", cat: "plumber", tier: 3, serviceType: "Appliance Hook-up",
    title: "Appliance Hook-up in Westchester County, NY | Dan's Drains",
    h1: "Appliance Hook-up in Westchester County, NY",
    heroAlt: "Dan's Drains plumber connecting a dishwasher water line in a Westchester County kitchen",
    lead: "Dishwashers, ice makers, and washers all need safe water connections. Dan's Drains hooks up appliances properly so a loose line does not become a leak.",
    localDetails: "dishwasher and ice-maker lines, washer valves, leak-safe connections", angle: "Leak-safe connections that hold",
    toc: [{ id: "what", label: "What we connect" }, { id: "why", label: "Why it matters" }, { id: "process", label: "How we do it" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "Appliances We Hook Up", html: `<p>We connect the water side of appliances: dishwashers, refrigerator ice makers and water dispensers, washing machines, and similar. Each needs a proper supply connection and, in some cases, a drain.</p><p>For a laundry setup specifically, our [[LINK:laundry-room-plumbing-westchester-ny|laundry room plumbing work]] covers the valves and drain too.</p>` },
      { id: "why", h2: "Why Proper Hookup Matters", html: `<p>A loose or poorly connected appliance line is a slow leak waiting to happen — and appliances often sit against a wall or under a counter where a leak hides for a long time.</p><p>Doing the connection right, with a good shutoff, prevents exactly that.</p>` },
      { id: "process", h2: "How We Hook Up an Appliance", html: `<p>We connect the supply line with a proper valve, secure the fittings, and test for leaks. Where a drain is involved, we make sure it is connected and flowing. Then we confirm the appliance runs and holds water without dripping.</p><p>We also make sure there is an accessible shutoff so future service is easy.</p>` },
      { id: "local", h2: "Appliance Connections in Local Homes", html: `<p>In older kitchens and laundry areas here, the existing valves are sometimes aged or missing entirely. We add or update the shutoff so your new appliance is safe and serviceable.</p><p>Efficient appliances also save water, as [[OUT:https://www.energystar.gov/products/clothes_washers|ENERGY STAR washer information]] describes, and we connect them cleanly.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when you are installing a new dishwasher, ice maker, or washer and want the water connection done safely. A proper hookup prevents the slow leaks that damage floors and cabinets.</p><p>If a line has already leaked, we can check for [[LINK:water-damage-restoration-westchester-ny|hidden moisture damage]].</p>` },
    ],
    faqs: [
      { q: "Can you connect my new dishwasher?", a: "Yes. We connect the water supply and drain, add or check the shutoff, and test for leaks so it runs safely." },
      { q: "Do you hook up refrigerator ice makers?", a: "Yes. We run or connect the water line to the fridge with a proper valve and confirm it holds without leaking." },
      { q: "Why does my washing machine need special valves?", a: "Washer supply valves let you shut off the water when the machine is not in use, which reduces the risk of a burst hose flooding the room." },
      { q: "Can a poorly connected appliance cause a leak?", a: "Yes, and often a hidden one, since appliances sit against walls or under counters. A proper connection with a good shutoff prevents it." },
      { q: "Do you add a shutoff if there isn't one?", a: "Yes. We make sure there is an accessible shutoff so the appliance is safe and easy to service later." },
    ],
  });

  P({
    slug: "laundry-room-plumbing-westchester-ny", cat: "plumber", tier: 3, serviceType: "Laundry Room Plumbing",
    title: "Laundry Room Plumbing in Westchester County, NY",
    h1: "Laundry Room Plumbing in Westchester County, NY",
    heroAlt: "Dan's Drains plumber working on laundry room plumbing in a Westchester County home",
    lead: "Washer supply, drain, and valves all have to work together to keep a laundry room dry. Dan's Drains handles laundry room plumbing, from new hookups to updated valves and drains.",
    localDetails: "washer valves, standpipe drains, basement laundry", angle: "Keep the laundry room dry and serviceable",
    toc: [{ id: "what", label: "What we handle" }, { id: "why", label: "Why it matters" }, { id: "process", label: "How we do it" }, { id: "local", label: "Local factors" }, { id: "pro", label: "When to call" }],
    sections: [
      { id: "what", h2: "What Laundry Room Plumbing Covers", html: `<p>A laundry setup needs hot and cold supply valves, a drain that can handle the washer's discharge, and secure connections. We install and update all of it, whether you are adding a laundry room or fixing an old one.</p><p>The washer connection itself is closely related to our broader [[LINK:appliance-hook-up-westchester-ny|appliance water hookups]].</p>` },
      { id: "why", h2: "Why Laundry Plumbing Matters", html: `<p>Washing machines move a lot of water quickly, so a weak drain or a burst supply hose can flood a room fast. Good valves and a properly sized drain keep that from happening.</p><p>Single-lever shutoff valves also make it easy to turn off the water when you are away.</p>` },
      { id: "process", h2: "How We Handle Laundry Plumbing", html: `<p>We install or update the supply valves, connect or improve the drain standpipe, and secure the hoses. Then we run the washer through a cycle to confirm it fills and drains without leaks.</p><p>Where a laundry room is going in a new spot, we run the necessary supply and drain lines.</p>` },
      { id: "local", h2: "Laundry Rooms in Local Homes", html: `<p>Many homes here have laundry in the basement, where a drain backup or burst hose can do real damage. Updating old rubber hoses and adding good shutoff valves is cheap protection.</p><p>Efficient washers use less water too, as [[OUT:https://www.energystar.gov/products/clothes_washers|ENERGY STAR]] notes, and we set up the plumbing to match.</p>` },
      { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when you are adding a laundry room, moving the washer, or dealing with slow drains or old valves. Getting the plumbing right keeps the room dry.</p><p>If the laundry drain backs up, that can tie into a larger [[LINK:drain-cleaning-westchester-ny|drain line clog]] we can clear.</p>` },
    ],
    faqs: [
      { q: "Can you set up plumbing for a new laundry room?", a: "Yes. We run the supply and drain lines, install valves, and connect the washer so the new laundry room works safely." },
      { q: "Why does my washer drain back up?", a: "It can be an undersized or clogged standpipe drain, or a larger clog in the line. We check the whole path and clear or update as needed." },
      { q: "Should I replace my washer hoses?", a: "If they are old rubber hoses, yes. Braided stainless hoses are far less likely to burst and flood the room." },
      { q: "Can you add shutoff valves for my washer?", a: "Yes. A single-lever shutoff makes it easy to turn off the water when you are away, reducing flood risk." },
      { q: "My laundry is in the basement — any extra concerns?", a: "Basement laundry adds flood risk, so good valves, a sound drain, and sturdy hoses matter even more. We set it up to keep the space dry." },
    ],
  });
};
