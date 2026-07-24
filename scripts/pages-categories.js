/* Category pages (5). Tier 1-2. Authored per page. */
module.exports = (ctx) => {
  const { page, CATEGORY_PAGES } = ctx;

  CATEGORY_PAGES.push(
    page({
      isCategory: true,
      slug: "drainage-service-westchester-ny",
      cat: "drainage",
      tier: 1,
      serviceType: "Drainage Service",
      title: "Drainage Service in Westchester County, NY | Dan's Drains",
      h1: "Trusted Drainage Service in Westchester County, NY",
      h1short: "Drainage Service",
      serviceName: "Drainage Service",
      heroAlt: "Dan's Drains technician using drain-clearing equipment at a Westchester County home",
      lead: "From a single slow sink to a fully backed-up main line, Dan's Drains clears, inspects, and maintains the drains and sewer lines in your Westchester County home — and tells you honestly what caused the problem.",
      localDetails: "clay and cast-iron sewer lines, mature tree roots, older Armonk-area homes",
      angle: "The drain-and-sewer specialist a business named Dan's Drains ought to be",
      toc: [
        { id: "what", label: "What we cover" },
        { id: "signs", label: "Warning signs" },
        { id: "how", label: "How we clear lines" },
        { id: "local", label: "Local factors" },
        { id: "when", label: "When to call" },
      ],
      sections: [
        {
          id: "what",
          h2: "What Our Drainage Services Cover",
          html: `<p>Drainage problems come in many sizes, and we handle the whole range. That includes routine [[LINK:drain-cleaning-westchester-ny|clearing of slow and clogged drains]], deeper cleaning with [[LINK:hydro-jetting-westchester-ny|high-pressure water jetting for grease and roots]], and diagnostic [[LINK:sewer-camera-inspection-westchester-ny|video camera inspections of your sewer line]].</p>
<p>We also handle mechanical [[LINK:drain-snaking-westchester-ny|snaking and rooter service for stubborn blockages]] and, for commercial kitchens, [[LINK:grease-trap-cleaning-westchester-ny|scheduled grease trap cleaning]]. When the trouble is the main line itself, we take on [[LINK:sewer-line-repair-westchester-ny|repairs to a cracked or root-invaded sewer line]]. If your drain is slow, smelly, or backing up, we can find out why.</p>`,
        },
        {
          id: "signs",
          h2: "Signs Your Drains Need Attention",
          html: `<p>Drains rarely fail all at once. They warn you first. Watch for these signs:</p>
<ul>
<li>Water pooling around a shower drain or draining slowly after a bath.</li>
<li>Gurgling sounds from a toilet or sink when another fixture is used.</li>
<li>A bad smell coming up from a drain, especially in a basement.</li>
<li>More than one fixture backing up at the same time — often a main-line problem.</li>
<li>Clogs that keep coming back a week or two after you clear them.</li>
</ul>
<p>Recurring clogs are the biggest tell. If the same drain keeps blocking, the real cause is usually further down the line where a plunger cannot reach.</p>`,
        },
        {
          id: "how",
          h2: "How We Clear and Inspect Drain Lines",
          html: `<p>We start by figuring out how far the problem goes. A single slow sink is different from several fixtures backing up at once. For a simple clog, snaking often does the job. For grease buildup or root intrusion, high-pressure jetting scours the pipe walls clean instead of just poking a hole through the blockage.</p>
<p>When a clog keeps returning or a main line is involved, a camera inspection lets us see the exact condition inside the pipe — a crack, a belly, or roots — so you are not paying to guess.</p>`,
        },
        {
          id: "local",
          h2: "Drainage Challenges in Westchester County Homes",
          html: `<p>A lot of homes in this area have older clay or cast-iron sewer lines, and mature trees whose roots are drawn to the moisture inside them. Over the years, those roots work into pipe joints and catch everything that flows past, which is why root intrusion is one of the most common causes of a main-line backup here.</p>
<p>Finished basements are also common locally, and a drain backup there can do real damage. The [[OUT:https://www.epa.gov/watersense|EPA's guidance on household water use]] is a good reminder that what goes down the drain — grease, wipes, and so-called flushable products — is often what causes the clog in the first place.</p>`,
        },
        {
          id: "when",
          h2: "When to Call a Pro for Drainage Help",
          html: `<p>A single slow drain is often something a homeowner can try to clear. But call us when more than one fixture backs up, when water comes up in an unexpected place like a floor drain, or when a clog keeps returning no matter what you do.</p>
<p>Those are signs of a main-line issue, and the sooner we look, the more options you have and the less risk of a messy backup. When you are ready, [[LINK:services|see the rest of the plumbing work we handle]] too.</p>`,
        },
      ],
      faqs: [
        { q: "How do I know if it is a single clog or a main-line problem?", a: "If just one fixture is slow, it is usually a local clog. If several fixtures back up at once, or water comes up in a tub or floor drain when you flush, that points to the main line — and that is worth a professional look." },
        { q: "Is hydro jetting or snaking better?", a: "It depends. Snaking is great for a simple clog. Hydro jetting cleans the whole pipe wall and is better for grease buildup and roots. We recommend whichever actually fits your problem, not the pricier one by default." },
        { q: "Can you tell what is wrong without digging?", a: "Often, yes. A sewer camera inspection lets us see inside the line and pinpoint a clog, crack, or root intrusion before anyone touches a shovel." },
        { q: "Why does my drain keep clogging in the same spot?", a: "A repeat clog usually means buildup, a pipe defect, or roots further down the line. Clearing the surface clog does not fix the underlying cause, which is why it comes back. A camera inspection is the reliable way to find it." },
        { q: "Do you handle commercial drains too?", a: "Yes. Along with home drainage, we clean grease traps and clear commercial kitchen lines for small businesses across Westchester County." },
      ],
    }),

    page({
      isCategory: true,
      slug: "septic-system-service-westchester-ny",
      cat: "septic",
      tier: 2,
      serviceType: "Septic System Service",
      title: "Septic System Service in Westchester County, NY | Dan's Drains",
      h1: "Reliable Septic System Service in Westchester County, NY",
      h1short: "Septic System Service",
      serviceName: "Septic System Service",
      heroAlt: "Dan's Drains plumber inspecting indoor plumbing connected to a septic system in Westchester County",
      lead: "Many homes in the Armonk area run on septic systems. Dan's Drains handles the plumbing side — the drains, lines, and fixtures that feed your tank — with care to keep the whole system healthy.",
      localDetails: "septic-prevalent rural Westchester properties, well water, drain field care",
      angle: "The indoor-plumbing partner for homes on septic, not a pumping company",
      toc: [
        { id: "what", label: "What we handle" },
        { id: "signs", label: "Warning signs" },
        { id: "care", label: "Protecting your system" },
        { id: "local", label: "Local factors" },
        { id: "when", label: "When to call" },
      ],
      sections: [
        {
          id: "what",
          h2: "What We Handle on Septic-Connected Plumbing",
          html: `<p>We focus on the plumbing that connects your home to its septic system: the drains, waste lines, and fixtures that carry water to the tank. That includes clearing clogs, fixing leaks, and making sure what leaves your house is not overloading the system.</p>
<p>If you are dealing with slow drains throughout the house, we can check whether the cause is a simple clog or a sign the [[LINK:septic-tank-service-westchester-ny|septic-connected line needs attention]] before it becomes a backup.</p>`,
        },
        {
          id: "signs",
          h2: "Signs Your Septic-Connected Plumbing Needs Help",
          html: `<p>Septic problems often show up inside the house first. Keep an eye out for:</p>
<ul>
<li>Several drains running slowly at the same time.</li>
<li>Gurgling toilets or drains, especially after heavy water use.</li>
<li>Sewage smells indoors or near the drain field.</li>
<li>Water backing up in the lowest drains in the house.</li>
</ul>
<p>These can point to a full tank, a drain-field issue, or a clog in the line. We help sort out which, and coordinate with a pumping service when the tank itself needs it.</p>`,
        },
        {
          id: "care",
          h2: "How to Protect a Septic System",
          html: `<p>Septic systems are sensitive to what goes into them. The single biggest thing you can do is be careful about what you flush and pour down the drain — no wipes, grease, or harsh chemicals that kill the bacteria the system relies on.</p>
<p>Spacing out laundry and heavy water use also helps, since a flood of water all at once can push solids into the drain field. We are glad to walk you through habits that extend the life of your system.</p>`,
        },
        {
          id: "local",
          h2: "Septic Systems in the Armonk Area",
          html: `<p>Plenty of properties around Armonk and the more rural parts of Westchester County are on septic rather than municipal sewer, often paired with well water. That means the health of your plumbing and your septic system are closely tied together.</p>
<p>The [[OUT:https://www.epa.gov/septic|EPA's SepticSmart resources]] are a helpful overview of how these systems work and what harms them. We put that same thinking to work on the plumbing inside your home.</p>`,
        },
        {
          id: "when",
          h2: "When to Call About Septic Plumbing",
          html: `<p>Call us when multiple drains slow down together, when you smell sewage, or when a lower-level drain backs up. Those are early signals worth catching before they turn into a mess.</p>
<p>We will help you figure out whether it is a plumbing fix on our end or a tank issue for a pumping company, and we can point you toward [[LINK:services|the other plumbing services we provide]] if the problem turns out to be elsewhere.</p>`,
        },
      ],
      faqs: [
        { q: "Do you pump septic tanks?", a: "We handle the plumbing that connects your home to the septic system — drains, lines, and fixtures. Tank pumping is done by a dedicated septic company, and we are glad to help you coordinate that when it is needed." },
        { q: "Why are several of my drains slow at once?", a: "When many drains slow together, the cause is usually further down the shared line or at the septic system itself, rather than a single clogged fixture. That is worth a professional look." },
        { q: "What should I never put down a septic-connected drain?", a: "Avoid grease, wipes (even flushable ones), harsh chemicals, and anything that does not break down. These clog lines and disrupt the bacteria your septic system depends on." },
        { q: "Can a plumbing leak hurt my septic system?", a: "Yes. A running toilet or hidden leak sends extra water to the tank around the clock, which can overload the drain field. Fixing leaks promptly protects the whole system." },
        { q: "Do you work on homes with well water too?", a: "Yes. Many septic homes in this area also have wells, and we handle the plumbing side of both, from fixtures to pressure and drainage." },
      ],
    }),

    page({
      isCategory: true,
      slug: "gasfitter-westchester-ny",
      cat: "gas",
      tier: 2,
      serviceType: "Gas Fitting",
      title: "Gasfitter &amp; Gas Line Services in Westchester County, NY",
      h1: "Licensed Gasfitter Services in Westchester County, NY",
      h1short: "Gasfitter",
      serviceName: "Gasfitter",
      heroAlt: "Dan's Drains licensed plumber checking a gas line connection in a Westchester County home",
      lead: "Gas work is not the place to cut corners. Dan's Drains handles gas line repairs, connections, and safety checks for Westchester County homes with the care and licensing this work demands.",
      localDetails: "gas appliance hookups, older home gas piping, safety-first approach",
      angle: "Safety-first licensed gas work, plainly explained",
      toc: [
        { id: "what", label: "What we do" },
        { id: "safety", label: "Gas safety" },
        { id: "signs", label: "Warning signs" },
        { id: "local", label: "Local factors" },
        { id: "when", label: "When to call" },
      ],
      sections: [
        {
          id: "what",
          h2: "What Our Gas Line Services Include",
          html: `<p>We handle the gas piping that feeds appliances like water heaters, boilers, ranges, and dryers. That covers running new lines for an appliance, repairing damaged or corroded pipe, and checking connections for leaks.</p>
<p>If you suspect a problem with an existing line, our [[LINK:gas-line-repair-westchester-ny|gas line repair and leak response service]] is the right place to start. We also connect gas appliances safely — from [[LINK:gas-water-heater-installation-westchester-ny|installing a gas-fired water heater]] to a full [[LINK:boiler-installation-westchester-ny|gas boiler installation and hookup]] — as part of a broader project.</p>`,
        },
        {
          id: "safety",
          h2: "Why Gas Safety Comes First",
          html: `<p>Natural gas is safe when the plumbing is done right and dangerous when it is not. That is why we treat every gas job carefully, test our connections, and never rush a shortcut.</p>
<p>If you ever smell gas — a rotten-egg odor — leave the house and call your gas utility from outside first. The [[OUT:https://www.nfpa.org/education-and-research/home-fire-safety/natural-gas-and-propane|NFPA's natural gas safety guidance]] is a good primer on what to do, and we handle the repair side once the immediate danger is addressed.</p>`,
        },
        {
          id: "signs",
          h2: "Signs of a Gas Line Problem",
          html: `<p>Some gas issues are obvious and some are subtle. Call for help if you notice:</p>
<ul>
<li>A sulfur or rotten-egg smell near an appliance or line.</li>
<li>A hissing sound near a gas connection.</li>
<li>A gas appliance that will not stay lit or burns with an odd flame.</li>
<li>Dead or discolored vegetation near an outdoor gas line.</li>
</ul>
<p>When in doubt, treat it as urgent. It is always better to have us check and find nothing than to ignore a real leak.</p>`,
        },
        {
          id: "local",
          h2: "Gas Piping in Older Westchester Homes",
          html: `<p>Many homes in the Armonk area have been added onto and updated over the decades, which means gas piping of different ages and materials. Older connections can loosen or corrode over time, especially where a line meets an appliance.</p>
<p>When we work on a gas project, we look at the whole run, not just the one fitting in front of us, so a fix on one appliance does not leave an older problem hiding down the line.</p>`,
        },
        {
          id: "when",
          h2: "When to Call a Licensed Gasfitter",
          html: `<p>Gas is one area where do-it-yourself is genuinely risky. Call a licensed plumber any time you are adding a gas appliance, moving a line, or you suspect a leak.</p>
<p>We will handle the work safely and to code, and if the project also touches your water heater or other plumbing, we can take care of [[LINK:services|the rest of the job under one roof]].</p>`,
        },
      ],
      faqs: [
        { q: "What should I do if I smell gas?", a: "Leave the house right away without flipping switches, and call your gas utility from outside or from a neighbor's. Once the immediate danger is handled, we can repair the line that caused it." },
        { q: "Are you licensed to work on gas lines?", a: "Yes. Dan's Drains is a licensed and insured plumbing company, and we handle gas line work with the care and code compliance it requires." },
        { q: "Can you connect a new gas appliance?", a: "Yes. Whether it is a gas water heater, range, or dryer, we can run or extend the line and connect the appliance safely." },
        { q: "How do you check for a gas leak?", a: "We inspect connections and test the line for leaks using proper methods, then confirm the repair holds before we consider the job done." },
        { q: "Is a small gas smell ever normal?", a: "A faint, brief odor when a burner lights can be normal, but a lingering or strong smell is not. When in doubt, treat it as a leak and get it checked." },
      ],
    }),

    page({
      isCategory: true,
      slug: "bathroom-remodeler-westchester-ny",
      cat: "bathroom",
      tier: 2,
      serviceType: "Bathroom Plumbing",
      title: "Bathroom Remodeler &amp; Plumbing in Westchester County, NY",
      h1: "Bathroom Remodeler Plumbing for Westchester County, NY",
      h1short: "Bathroom Remodeler",
      serviceName: "Bathroom Remodeler",
      heroAlt: "Dan's Drains plumber roughing in bathroom plumbing during a Westchester County remodel",
      lead: "A bathroom remodel is only as good as the plumbing behind the walls. Dan's Drains handles the rough-in, fixture connections, and drain work that keep your new bathroom leak-free for years.",
      localDetails: "older-home bathroom updates, fixture upgrades, behind-the-wall rough-in",
      angle: "The plumbing craftsmanship behind a lasting remodel",
      toc: [
        { id: "what", label: "What we handle" },
        { id: "plan", label: "Planning ahead" },
        { id: "fixtures", label: "Fixtures we install" },
        { id: "local", label: "Local factors" },
        { id: "when", label: "When to call" },
      ],
      sections: [
        {
          id: "what",
          h2: "What Our Bathroom Plumbing Covers",
          html: `<p>Whether you are refreshing a single bathroom or reworking the layout, we handle the plumbing that makes it work: moving or adding supply and drain lines, connecting fixtures, and pressure-testing everything before the walls close up.</p>
<p>That includes [[LINK:bathroom-plumbing-remodeling-westchester-ny|full bathroom remodel plumbing]] as well as individual upgrades like a new [[LINK:shower-installation-westchester-ny|shower and valve installation]] or a replacement [[LINK:bathtub-installation-westchester-ny|bathtub set and connected properly]].</p>`,
        },
        {
          id: "plan",
          h2: "Planning the Plumbing Before You Build",
          html: `<p>The best time to get plumbing right is before the tile goes up. Moving a drain or supply line is far easier with the walls open, so we like to be part of the conversation early.</p>
<p>We will look at your layout, flag anything that is harder than it looks (an old cast-iron drain, a joist in the wrong place), and give you an honest sense of what your plan will take. That saves surprises halfway through the job.</p>`,
        },
        {
          id: "fixtures",
          h2: "Fixtures We Install and Connect",
          html: `<p>A bathroom is a collection of fixtures that all need solid plumbing behind them. We install and connect toilets — including [[LINK:toilet-installation-westchester-ny|setting and sealing a new toilet]] — sinks and vanities, showers with [[LINK:shower-valve-replacement-westchester-ny|a fresh shower valve for steady temperature]], tubs, and faucets, and we make sure the drains and vents are right so nothing gurgles or smells later.</p>
<p>If your project also touches the vanity plumbing, a new [[LINK:faucet-installation-westchester-ny|bathroom faucet fitted and sealed]] is a small detail that makes a big difference in the finished look.</p>`,
        },
        {
          id: "local",
          h2: "Remodeling Older Westchester Bathrooms",
          html: `<p>Many bathrooms in this area sit in homes that are decades old, with original drain lines and supply pipes that may be a mix of materials. Opening a wall sometimes reveals aging plumbing that is worth updating while it is accessible.</p>
<p>We will tell you when that is genuinely worth doing and when it is fine to leave alone. For ideas on planning a remodel, the [[OUT:https://www.thisoldhouse.com/bathrooms|This Old House bathroom remodeling guides]] are a helpful starting point, and we handle the plumbing that turns those ideas into reality.</p>`,
        },
        {
          id: "when",
          h2: "When to Bring in a Plumber for Your Remodel",
          html: `<p>Bring us in as soon as your plans involve moving a fixture, adding a bathroom, or updating old pipe. Getting the plumbing planned early keeps the whole project on schedule.</p>
<p>Even for a smaller refresh, a plumber's eye on the rough-in pays off. Take a look at [[LINK:services|everything else we can handle on the project]] if your remodel goes beyond the bathroom.</p>`,
        },
      ],
      faqs: [
        { q: "Do you do the whole remodel or just the plumbing?", a: "We handle the plumbing side — rough-in, fixture connections, and drains. We work alongside your contractor or on the plumbing scope directly, and we are glad to coordinate timing." },
        { q: "Can you move a toilet or shower to a new spot?", a: "Often, yes, though it depends on where the drains and joists are. We will look at your layout and tell you honestly what is straightforward and what is more involved." },
        { q: "Should I update old pipes during a remodel?", a: "If a wall is already open and the pipe is aging, it is usually the cheapest time to update it. We will tell you when it is worth doing and when your existing pipe is fine to leave." },
        { q: "Will you pressure-test the new plumbing?", a: "Yes. We test supply and drain connections before the walls close up, so a hidden leak does not turn into a problem behind your new tile." },
        { q: "Can you install the fixtures I bought myself?", a: "In most cases, yes. Bring us the toilet, faucet, or fixtures you picked and we will install and connect them properly." },
      ],
    }),

    page({
      isCategory: true,
      slug: "water-damage-restoration-westchester-ny",
      cat: "water-damage",
      tier: 2,
      serviceType: "Water Damage Prevention",
      title: "Water Damage Restoration Service in Westchester, NY",
      h1: "Water Damage Restoration Service in Westchester County, NY",
      h1short: "Water Damage Restoration Service",
      serviceName: "Water Damage Restoration Service",
      heroAlt: "Dan's Drains plumber checking a basement for water leaks in a Westchester County home",
      lead: "The best water damage is the kind that never happens. Dan's Drains focuses on the plumbing side of water damage — finding leaks, stopping them fast, and installing safeguards that catch trouble early.",
      localDetails: "finished basements, sump pumps, winter pipe risk, early leak detection",
      angle: "Stop the source; prevention over cleanup",
      toc: [
        { id: "what", label: "What we do" },
        { id: "sources", label: "Common sources" },
        { id: "prevent", label: "Preventing damage" },
        { id: "local", label: "Local factors" },
        { id: "when", label: "When to call" },
      ],
      sections: [
        {
          id: "what",
          h2: "Our Role in Water Damage Situations",
          html: `<p>When water is getting where it should not, our job is to stop the plumbing source and prevent it from happening again. We find and fix the leak, then help you put safeguards in place so a small drip does not become a flooded floor.</p>
<p>That includes fast [[LINK:leak-detection-westchester-ny|hidden leak detection behind walls and floors]] and installing [[LINK:water-leak-sensor-installation-westchester-ny|smart leak sensors that alert you early]].</p>`,
        },
        {
          id: "sources",
          h2: "Common Sources of Home Water Damage",
          html: `<p>Most water damage we see traces back to a handful of plumbing culprits:</p>
<ul>
<li>A burst or leaking pipe, often after a hard freeze.</li>
<li>A failed water heater that lets go all at once.</li>
<li>A sump pump that stopped working during heavy rain.</li>
<li>A slow, hidden leak behind a wall that goes unnoticed for weeks.</li>
</ul>
<p>One of the sneakiest is a leak in a pipe beneath a concrete slab — our [[LINK:slab-leak-repair-westchester-ny|slab leak location and repair]] finds it before it undermines the floor. Catching any of these early is the difference between a quick repair and a major cleanup.</p>`,
        },
        {
          id: "prevent",
          h2: "How We Help Prevent Water Damage",
          html: `<p>Prevention is mostly about removing the surprises. We can install leak sensors near water heaters, washing machines, and in basements, make sure your [[LINK:sump-pump-installation-westchester-ny|sump pump is installed and working]], and check the fittings most likely to fail.</p>
<p>A quick plumbing check-up once in a while catches the slow leaks and worn parts that cause the biggest damage when they finally give out.</p>`,
        },
        {
          id: "local",
          h2: "Water Damage Risks in Westchester Homes",
          html: `<p>Finished basements are common in this area, and they are exactly where a leak or a failed sump pump does the most expensive damage. Cold winters add burst-pipe risk, and older homes may have aging supply lines waiting to fail.</p>
<p>The [[OUT:https://www.fema.gov/flood-insurance|FEMA guidance on protecting homes from water]] is a useful overview of the stakes, and we focus on the plumbing safeguards that keep your basement dry.</p>`,
        },
        {
          id: "when",
          h2: "When to Call Us About a Leak",
          html: `<p>Call the moment you see water where it should not be, or even a warning sign like a musty smell, a stain on the ceiling, or an unexplained jump in your water bill. Early is always cheaper.</p>
<p>If water is actively spreading, treat it as an emergency and reach out right away — our [[LINK:burst-pipe-repair-westchester-ny|burst pipe response stops the water fast]].</p>`,
        },
      ],
      faqs: [
        { q: "Do you do water damage cleanup and drying?", a: "We handle the plumbing side — finding and stopping the leak and preventing a repeat. For structural drying and restoration, you will want a dedicated restoration company, and we are glad to point you in the right direction." },
        { q: "How can I catch leaks before they cause damage?", a: "Smart leak sensors near water heaters, washers, and in basements are inexpensive and alert you the moment water appears. We install them as part of a prevention plan." },
        { q: "What is the most common cause of basement water damage?", a: "In this area, it is usually a failed sump pump during heavy rain or a burst pipe in winter. Keeping both in good shape prevents most of it." },
        { q: "My water bill jumped for no reason — could it be a leak?", a: "Very possibly. An unexplained increase often means a hidden leak running around the clock. We can find it before it causes visible damage." },
        { q: "Can a small drip really cause big damage?", a: "Yes. A slow leak behind a wall can rot framing and grow mold long before you see a drop, which is why catching it early matters so much." },
      ],
    })
  );
};
