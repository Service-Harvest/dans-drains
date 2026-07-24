/* Water heating & treatment service pages (7). */
module.exports = (ctx) => {
  const { page, SERVICE_PAGES } = ctx;

  SERVICE_PAGES.push(
    page({
      slug: "water-heater-installation-westchester-ny",
      cat: "plumber",
      tier: 1,
      serviceType: "Water Heater Installation",
      title: "Water Heater Installation in Westchester County, NY",
      h1: "Water Heater Installation in Westchester County, NY",
      heroAlt: "Dan's Drains plumber installing a new water heater in a Westchester County basement",
      lead: "A new water heater is a big decision. Dan's Drains helps you pick the right size and type for your home, then installs it safely and to code — with an honest price before we start.",
      localDetails: "older homes, tank vs tankless choice, basement installs, hard water",
      angle: "Right-sizing and honest trade-offs over upselling",
      toc: [
        { id: "process", label: "How it works" },
        { id: "choose", label: "Choosing a heater" },
        { id: "cost", label: "Cost factors" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "process", h2: "How We Install a Water Heater", html: `<p>We start by understanding how your household actually uses hot water — how many people, how many bathrooms, and whether you ever run out. Then we recommend a unit sized to match, drain and disconnect the old heater, and install the new one with proper connections, venting, and safety fittings.</p>
<p>Before we leave, we test it, check for leaks, and make sure it is heating the way it should. You get a clean install and a straight answer about how to get the most life out of it.</p>` },
        { id: "choose", h2: "Choosing the Right Water Heater", html: `<p>The big choice is usually tank versus tankless. A standard tank is simpler and cheaper up front. A [[LINK:tankless-water-heater-installation-westchester-ny|tankless unit that heats water on demand]] costs more but saves space and can lower energy use. If you heat with gas, a [[LINK:gas-water-heater-installation-westchester-ny|properly vented gas water heater]] is often the most economical to run.</p>
<p>We lay out the real trade-offs for your home and budget instead of steering you to the priciest option.</p>` },
        { id: "cost", h2: "What Affects the Cost", html: `<p>A few things drive the price of a water heater install:</p>
<ul>
<li>Tank versus tankless, and the capacity you need.</li>
<li>Whether the new unit fits the existing space and connections.</li>
<li>Any venting, gas, or electrical updates the new unit requires.</li>
<li>Code-required safety items like an expansion tank or new shutoff.</li>
</ul>
<p>We give you the full price up front so there are no surprises after the work is done.</p>` },
        { id: "local", h2: "Water Heaters in Westchester Homes", html: `<p>Many homes here have water heaters tucked into finished or semi-finished basements, and some have hard water that shortens a heater's life by building up scale inside the tank. We take both into account when we size and place your unit.</p>
<p>For efficiency comparisons, the [[OUT:https://www.energystar.gov/products/water_heaters|ENERGY STAR water heater information]] is a helpful reference, and we translate those ratings into what actually fits your home.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Water heater installation involves gas or electrical connections, venting, and water under pressure — not a safe do-it-yourself job. Call us when your heater is over ten years old, leaking, or no longer keeping up.</p>
<p>If your current unit is failing but not dead yet, our [[LINK:hot-water-system-repair-westchester-ny|water heater repair service]] can sometimes buy you time to plan the replacement.</p>` },
      ],
      faqs: [
        { q: "How long does a water heater installation take?", a: "A straightforward tank replacement is often done in a few hours. A tankless conversion or a job that needs new venting or gas work takes longer, and we will give you a realistic time frame up front." },
        { q: "How long should a water heater last?", a: "A typical tank heater lasts around 8 to 12 years, though hard water and heavy use can shorten that. Tankless units often last longer with proper maintenance." },
        { q: "Should I switch to tankless?", a: "Tankless is great for endless hot water and space savings, but it costs more up front and sometimes needs gas or venting upgrades. We will tell you honestly whether it pays off for your home." },
        { q: "Can you install a heater I bought myself?", a: "Often, yes, though we will check that it is the right size and type for your home first. We want the install to actually solve your hot-water problem, not just swap a box." },
        { q: "Do I need an expansion tank?", a: "In many cases, local code requires one to handle pressure changes safely. We include any code-required items in the upfront price rather than surprising you later." },
      ],
    }),

    page({
      slug: "tankless-water-heater-installation-westchester-ny",
      cat: "plumber",
      tier: 2,
      serviceType: "Tankless Water Heater Installation",
      title: "Tankless Water Heater Installation in Westchester, NY",
      h1: "Tankless Water Heater Installation in Westchester County, NY",
      heroAlt: "Dan's Drains plumber mounting a tankless water heater on a wall in a Westchester County home",
      lead: "Endless hot water and a smaller footprint make tankless a popular upgrade. Dan's Drains sizes and installs tankless units correctly so you get the performance you paid for.",
      localDetails: "space savings in older homes, gas/venting upgrades, hard-water care",
      angle: "Get tankless sized right or it disappoints",
      toc: [
        { id: "why", label: "Why tankless" },
        { id: "process", label: "How we install" },
        { id: "cost", label: "Cost factors" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "why", h2: "Why Homeowners Choose Tankless", html: `<p>A tankless heater warms water as you use it, so you do not run out midway through a shower and you are not paying to keep a tank hot all day. It also frees up floor space, which matters in a tight basement or utility closet.</p>
<p>The catch is that a tankless unit has to be sized to your home's demand, or it will struggle to keep up when several fixtures run at once. Getting that sizing right is the whole game.</p>` },
        { id: "process", h2: "How We Install a Tankless Unit", html: `<p>We calculate your peak hot-water demand, confirm your gas line and venting can support the unit, and mount and connect it with the right clearances. If your home is moving from a tank, we handle the changeover cleanly.</p>
<p>If a full tankless conversion is more than you need right now, a standard [[LINK:water-heater-installation-westchester-ny|tank water heater sized for your home]] may be the simpler path, and we will say so.</p>` },
        { id: "cost", h2: "What Affects Tankless Cost", html: `<p>Tankless installs vary more than tank swaps because of what the unit needs to run well:</p>
<ul>
<li>The size and number of units your demand requires.</li>
<li>Gas line capacity — tankless often needs more than a tank.</li>
<li>New venting suited to a tankless unit.</li>
<li>Any electrical work for the ignition and controls.</li>
</ul>
<p>We spell all of this out before we begin so the price is clear.</p>` },
        { id: "local", h2: "Tankless in Westchester Homes", html: `<p>In older homes around Armonk, the most common surprise is that the existing gas line or venting needs an upgrade to support a tankless unit. We check that before you commit, so you are not caught off guard.</p>
<p>Hard water also matters — scale is the enemy of a tankless heater. The [[OUT:https://www.energy.gov/energysaver/tankless-or-demand-type-water-heaters|Department of Energy overview of tankless heaters]] explains the efficiency side, and we handle the maintenance that keeps yours running.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Tankless installation touches gas, venting, water, and sometimes electrical, so it is firmly professional territory. Call us when you are replacing an aging heater and want to explore the upgrade, or when a builder's undersized unit is not keeping up.</p>
<p>We will make sure the unit fits your real demand, and if hard water is an issue we can pair it with a [[LINK:water-softener-installation-westchester-ny|whole-home water softener setup]].</p>` },
      ],
      faqs: [
        { q: "Will a tankless heater really give endless hot water?", a: "Yes, as long as it is sized for your peak demand. A properly sized unit keeps up with normal household use; an undersized one struggles when several fixtures run at once, which is why sizing matters." },
        { q: "Does tankless need special maintenance?", a: "It benefits from periodic descaling, especially with hard water. We can set you up with a maintenance routine so scale does not shorten its life." },
        { q: "Why does tankless cost more to install?", a: "The unit itself costs more, and it often needs gas or venting upgrades a tank does not. The trade-off is lower operating cost and no tank to run out." },
        { q: "Can one tankless unit serve my whole house?", a: "Often, yes, but a larger home with high simultaneous demand may need a larger unit or two. We size it to how your household actually uses hot water." },
        { q: "How long do tankless heaters last?", a: "With regular maintenance, many last 20 years or more — noticeably longer than a typical tank, which helps offset the higher up-front cost." },
      ],
    }),

    page({
      slug: "gas-water-heater-installation-westchester-ny",
      cat: "plumber",
      tier: 2,
      serviceType: "Gas Water Heater Installation",
      title: "Gas Water Heater Installation in Westchester County, NY",
      h1: "Gas Water Heater Installation in Westchester County, NY",
      heroAlt: "Dan's Drains plumber connecting a gas water heater in a Westchester County basement",
      lead: "Gas water heaters heat quickly and cost less to run, but they need safe venting and gas connections. Dan's Drains installs them to code so you get reliable hot water without the worry.",
      localDetails: "gas venting, older-home gas lines, safe combustion air",
      angle: "Safe venting and gas connections, done right",
      toc: [
        { id: "process", label: "How we install" },
        { id: "safety", label: "Venting & safety" },
        { id: "cost", label: "Cost factors" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "process", h2: "How We Install a Gas Water Heater", html: `<p>We size the unit to your household, remove the old heater, and connect the gas, water, and venting properly. Then we check the connections for leaks and confirm the burner and vent are drawing correctly before we call it done.</p>
<p>If you are weighing fuel types, we are glad to compare a gas unit against a standard [[LINK:water-heater-installation-westchester-ny|electric or high-efficiency tank option]] so you can choose with clear information.</p>` },
        { id: "safety", h2: "Venting and Combustion Safety", html: `<p>A gas water heater burns fuel, so it must vent exhaust safely and have enough combustion air. A poor vent connection is not just inefficient — it can be dangerous. We take that seriously on every install.</p>
<p>We confirm the venting is sized and sloped correctly and that the space provides adequate air, so your heater runs cleanly and safely for years.</p>` },
        { id: "cost", h2: "What Affects the Cost", html: `<p>Gas water heater pricing depends on:</p>
<ul>
<li>Tank capacity and efficiency level.</li>
<li>Whether the existing gas line and vent can be reused.</li>
<li>Any code-required safety upgrades.</li>
<li>The condition of the space and connections.</li>
</ul>
<p>We give you the complete price before we begin.</p>` },
        { id: "local", h2: "Gas Water Heaters in Older Homes", html: `<p>Older Westchester homes sometimes have gas lines or vents that were sized for a different appliance. When we install a gas heater, we check that the whole setup — not just the last fitting — can support it safely.</p>
<p>The [[OUT:https://www.cdc.gov/carbon-monoxide/about/index.html|CDC's carbon monoxide safety information]] is a good reminder of why proper venting matters, and it is exactly what we verify on every gas install.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Anything involving a gas connection and combustion venting belongs with a licensed plumber. Call us when your gas heater is aging, leaking, or venting poorly.</p>
<p>If the job also involves the gas supply itself, our [[LINK:gas-line-repair-westchester-ny|licensed gas line work]] covers that side too.</p>` },
      ],
      faqs: [
        { q: "Is a gas water heater cheaper to run than electric?", a: "Usually, yes, gas heats water quickly and often costs less to operate. The best choice depends on your home's setup and local rates, which we are glad to talk through." },
        { q: "Why is venting so important on a gas heater?", a: "Venting carries combustion exhaust safely out of your home. A poor vent can let dangerous gases build up, so we make sure it is correct on every install." },
        { q: "Can I reuse my old vent and gas line?", a: "Sometimes, if they are in good shape and correctly sized for the new unit. We check both before reusing them rather than assuming." },
        { q: "How long does a gas water heater last?", a: "Typically 8 to 12 years, similar to other tank heaters. Regular flushing to control sediment helps it reach the top of that range." },
        { q: "Do you handle the permit and code requirements?", a: "Yes. We install to code and include any required safety items in the upfront price, so the job is done properly." },
      ],
    }),

    page({
      slug: "hot-water-system-repair-westchester-ny",
      cat: "plumber",
      tier: 2,
      serviceType: "Water Heater Repair",
      title: "Hot Water System Repair in Westchester County, NY | Dan's",
      h1: "Hot Water System Repair in Westchester County, NY",
      heroAlt: "Dan's Drains plumber diagnosing a water heater that is not producing hot water",
      lead: "No hot water, or not enough? Dan's Drains diagnoses and repairs water heaters fast, and gives you an honest call on whether a repair makes sense or a replacement is the smarter move.",
      localDetails: "sediment buildup, hard water, aging tanks in basements",
      angle: "Honest repair-vs-replace advice, no upsell",
      toc: [
        { id: "signs", label: "Common symptoms" },
        { id: "causes", label: "What causes it" },
        { id: "process", label: "How we repair" },
        { id: "decide", label: "Repair or replace" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "signs", h2: "Signs Your Water Heater Needs Repair", html: `<p>Water heaters usually give warning signs before they quit. Watch for:</p>
<ul>
<li>Water that never gets hot enough, or runs out fast.</li>
<li>Rusty or discolored hot water.</li>
<li>Popping or rumbling sounds from the tank.</li>
<li>Water pooling around the base of the heater.</li>
</ul>
<p>Any of these is worth a look before you are left with a cold shower.</p>` },
        { id: "causes", h2: "What Causes Water Heater Problems", html: `<p>Common culprits include sediment building up at the bottom of the tank, a failed heating element or thermostat, a bad gas valve, or simple old age. Hard water speeds up sediment, which is a frequent issue in this area.</p>
<p>We diagnose the actual cause instead of guessing, so the repair fixes the problem the first time.</p>` },
        { id: "process", h2: "How We Repair a Water Heater", html: `<p>We test the unit to pinpoint the fault — element, thermostat, valve, or sediment — and replace or clean the failing part. Where sediment is the issue, flushing the tank often restores performance.</p>
<p>If the tank itself has failed, repair is not an option, and we will walk you through a straightforward [[LINK:water-heater-installation-westchester-ny|replacement sized for your home]] rather than patching something that is done.</p>` },
        { id: "decide", h2: "Repair or Replace?", html: `<p>The honest answer depends on age and what failed. A younger heater with a bad element is usually worth repairing. An older tank that is leaking or badly corroded is money better spent on a replacement.</p>
<p>The [[OUT:https://www.energy.gov/energysaver/water-heating|Department of Energy's water heating guide]] is a helpful reference on efficiency, and we give you a plain recommendation based on your specific unit — not a push to replace.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Call us as soon as hot water gets unreliable. Catching a small fault early often means a simple repair instead of an emergency replacement in the middle of winter.</p>
<p>And if you notice water around the base of the tank, treat it as urgent — that can point toward a failing tank and possible [[LINK:water-damage-restoration-westchester-ny|water damage worth preventing]].</p>` },
      ],
      faqs: [
        { q: "Why is my water not getting hot enough?", a: "Common causes are a failed heating element or thermostat, sediment buildup, or a gas issue. We test to find the exact cause rather than replacing parts by guesswork." },
        { q: "Is a rumbling noise from my heater serious?", a: "It usually means sediment has built up at the bottom of the tank. Flushing often quiets it and restores efficiency, though a very old tank may be near the end of its life." },
        { q: "Should I repair or replace my water heater?", a: "If the unit is relatively young and a part failed, repair usually makes sense. If it is old, leaking, or corroded, replacement is the smarter spend. We give you an honest call either way." },
        { q: "Water is pooling under my heater — what now?", a: "Treat it as urgent. A leaking tank can fail suddenly and cause water damage. Turn off the water supply to the heater if you can and call us right away." },
        { q: "Can regular maintenance prevent repairs?", a: "Yes. Periodic flushing to remove sediment is the single best thing you can do to extend a water heater's life and avoid surprise failures." },
      ],
    }),

    page({
      slug: "boiler-installation-westchester-ny",
      cat: "plumber",
      tier: 2,
      serviceType: "Boiler Installation",
      title: "Boiler Installation in Westchester County, NY",
      h1: "Boiler Installation in Westchester County, NY",
      heroAlt: "Dan's Drains plumber installing a new boiler in a Westchester County home",
      lead: "A reliable boiler keeps your home warm through cold Westchester winters. Dan's Drains installs and replaces boilers with proper sizing and clean connections, so you get steady heat and efficiency.",
      localDetails: "older heating systems, cold winters, finished basement mechanicals",
      angle: "Right-sized heat for cold-winter homes",
      toc: [
        { id: "process", label: "How we install" },
        { id: "choose", label: "Sizing it right" },
        { id: "cost", label: "Cost factors" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "process", h2: "How We Install a Boiler", html: `<p>We assess your home's heating needs, remove the old boiler, and install and connect the new unit with proper piping, venting, and controls. Then we test the system to confirm it heats evenly and runs safely.</p>
<p>Because a boiler ties into your gas or fuel supply, we handle the connection carefully and coordinate any needed [[LINK:gas-line-repair-westchester-ny|gas line updates for the new unit]].</p>` },
        { id: "choose", h2: "Sizing a Boiler Correctly", html: `<p>An oversized boiler wastes fuel and cycles on and off; an undersized one struggles on the coldest days. We size the unit to your home's actual heating load, not a rough guess.</p>
<p>Getting this right is the difference between even, efficient heat and a system that runs constantly and still leaves cold rooms.</p>` },
        { id: "cost", h2: "What Affects Boiler Cost", html: `<p>Boiler installation pricing depends on:</p>
<ul>
<li>The type and efficiency of the boiler you choose.</li>
<li>Your home's size and heating load.</li>
<li>Whether existing piping and venting can be reused.</li>
<li>Any controls or safety upgrades required.</li>
</ul>
<p>We provide the full price up front, before any work begins.</p>` },
        { id: "local", h2: "Boilers in Older Westchester Homes", html: `<p>Many homes in this area were built with boiler heat and finished basements where the mechanicals live. Replacing an aging boiler is a good chance to gain efficiency and reliability before the coldest months hit.</p>
<p>The [[OUT:https://www.energystar.gov/products/boilers|ENERGY STAR boiler information]] is a useful efficiency reference, and we help you weigh those ratings against what fits your home and budget.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Boiler work involves heat, fuel, and pressurized water, so it is a job for a licensed plumber. Call us when your boiler is old, unreliable, or no longer keeping the house warm.</p>
<p>If you also want to protect the basement where it lives, ask about pairing the install with a [[LINK:sump-pump-installation-westchester-ny|reliable basement sump pump]].</p>` },
      ],
      faqs: [
        { q: "How do I know if my boiler needs replacing?", a: "Frequent repairs, uneven heat, rising fuel bills, or an age past 15 to 20 years are all signs. We give you an honest assessment of whether a repair or a new boiler makes more sense." },
        { q: "Will a new boiler lower my heating bills?", a: "A modern, properly sized boiler is usually more efficient than an old one, which can reduce fuel use. How much depends on your home and the unit you choose." },
        { q: "How long does a boiler installation take?", a: "A straightforward replacement often takes a day or two. A more involved job with new piping or venting takes longer, and we give you a realistic schedule up front." },
        { q: "Can you reuse my existing radiators and piping?", a: "Often, yes, if they are in good condition and compatible with the new boiler. We check before reusing them so the new system performs as it should." },
        { q: "Is boiler installation safe to do myself?", a: "No. It involves fuel, venting, and pressurized water, and mistakes can be dangerous. It should always be done by a licensed professional." },
      ],
    }),

    page({
      slug: "water-softener-installation-westchester-ny",
      cat: "plumber",
      tier: 3,
      serviceType: "Water Softener Installation",
      title: "Water Softener Installation in Westchester County, NY",
      h1: "Water Softener Installation in Westchester County, NY",
      heroAlt: "Dan's Drains plumber installing a whole-home water softener in a Westchester County utility area",
      lead: "Hard water leaves scale on fixtures and shortens the life of your appliances. Dan's Drains installs whole-home water softeners that protect your plumbing and make everyday water easier to live with.",
      localDetails: "hard water and well water, scale on fixtures, appliance protection",
      angle: "Protect appliances and pipes from scale",
      toc: [
        { id: "signs", label: "Signs of hard water" },
        { id: "how", label: "How softeners work" },
        { id: "process", label: "How we install" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "signs", h2: "Signs You Have Hard Water", html: `<p>Hard water is common in this area, especially on wells. Tell-tale signs include:</p>
<ul>
<li>White, crusty scale on faucets and showerheads.</li>
<li>Spots on glasses and dishes after washing.</li>
<li>Soap and detergent that do not lather well.</li>
<li>Dry skin and dull laundry.</li>
</ul>
<p>Beyond the nuisance, that same scale builds up inside your pipes and water heater.</p>` },
        { id: "how", h2: "How a Water Softener Works", html: `<p>A softener removes the minerals that make water hard before the water reaches your fixtures and appliances. The result is water that rinses cleaner, protects your plumbing, and helps appliances last longer.</p>
<p>Because scale is especially hard on water heaters, a softener pairs well with a new [[LINK:water-heater-installation-westchester-ny|water heater install we handle]], extending the life of both.</p>` },
        { id: "process", h2: "How We Install a Softener", html: `<p>We find the right spot on your main water line, install the softener, and connect it so it treats the water feeding your whole home. Then we set it up and confirm it is working before we leave.</p>
<p>We size the unit to your household's water use so it keeps up without wasting salt or water.</p>` },
        { id: "local", h2: "Hard Water in Westchester Homes", html: `<p>Homes on wells around Armonk and the rural parts of the county often deal with harder water than those on municipal supply. Left untreated, it quietly shortens the life of water heaters, dishwashers, and washing machines.</p>
<p>The [[OUT:https://www.cdc.gov/healthywater/drinking/private/wells/index.html|CDC's private well water guidance]] is worth a read if you are on a well, and we handle the softening side that protects your plumbing.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when scale is building up on fixtures, appliances are wearing out early, or you simply want easier water. We will confirm a softener is the right fix and size it correctly.</p>
<p>If you also want better-tasting drinking water, ask about adding a [[LINK:water-filtration-system-installation-westchester-ny|home water filtration system]] alongside it.</p>` },
      ],
      faqs: [
        { q: "How do I know if I need a water softener?", a: "Scale on fixtures, spotty dishes, poor lather, and appliances that wear out early all point to hard water. We can confirm and recommend the right size unit." },
        { q: "Does a softener help my appliances last longer?", a: "Yes. By removing the minerals that cause scale, a softener protects water heaters, dishwashers, and washing machines from the buildup that shortens their life." },
        { q: "Is softened water safe to drink?", a: "Softened water is fine for most households. If you want to reduce sodium or improve taste, a separate drinking-water filter is a good companion to a softener." },
        { q: "Where does the softener get installed?", a: "On your main water line, usually near where it enters the home, so it treats all the water going to your fixtures and appliances." },
        { q: "How much maintenance does a softener need?", a: "Mostly just keeping it supplied with salt and an occasional check. We show you how when we install it." },
      ],
    }),

    page({
      slug: "water-filtration-system-installation-westchester-ny",
      cat: "plumber",
      tier: 3,
      serviceType: "Water Filtration System Installation",
      title: "Water Filtration System Installation in Westchester, NY",
      h1: "Water Filtration System Installation in Westchester County, NY",
      heroAlt: "Dan's Drains plumber installing a home water filtration system in a Westchester County home",
      lead: "Cleaner, better-tasting water at every tap. Dan's Drains installs home water filtration systems sized to your household, so you know exactly what you are drinking.",
      localDetails: "well water quality, taste and odor, whole-home vs point-of-use",
      angle: "Match the filter to what is actually in your water",
      toc: [
        { id: "why", label: "Why filter" },
        { id: "types", label: "Types of systems" },
        { id: "process", label: "How we install" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "why", h2: "Why Install a Filtration System", html: `<p>Filtration improves the taste, smell, and clarity of your water and can reduce specific contaminants depending on the system. For families on well water, it adds peace of mind about what comes out of the tap.</p>
<p>The right system depends on what is actually in your water, which is why we start with what you are trying to solve rather than selling a one-size box.</p>` },
        { id: "types", h2: "Types of Filtration Systems", html: `<p>Options range from whole-home filters that treat every tap to point-of-use filters at the kitchen sink. Some target taste and odor; others tackle specific contaminants.</p>
<p>If your water is also hard, filtration works well alongside a [[LINK:water-softener-installation-westchester-ny|softener that removes hardness minerals]], since the two solve different problems.</p>` },
        { id: "process", h2: "How We Install Filtration", html: `<p>We install the system where it will do the most good — on the main line for whole-home coverage, or at a specific fixture for point-of-use. We connect it cleanly, test it, and show you how to change filters.</p>
<p>Sizing matters here too, so the system keeps up with your household without slowing your water pressure.</p>` },
        { id: "local", h2: "Water Quality in Westchester Homes", html: `<p>Water quality varies a lot across the county, especially between municipal supply and private wells. Testing your water is the honest first step, so the system you install actually targets what is in it.</p>
<p>The [[OUT:https://www.epa.gov/privatewells|EPA's private well resources]] explain what to test for, and we handle the filtration that addresses the results.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when your water tastes or smells off, when a well test flags something, or when you simply want cleaner water at the tap. We will help you choose a system that fits the problem.</p>
<p>If low pressure is also bothering you, we can check that at the same time with our [[LINK:low-water-pressure-repair-westchester-ny|water pressure diagnosis]].</p>` },
      ],
      faqs: [
        { q: "Whole-home or under-sink filter — which do I need?", a: "It depends on your goal. Whole-home systems treat every tap; under-sink filters focus on drinking water at the kitchen. We help you match the system to what you want to solve." },
        { q: "Should I test my water first?", a: "Yes, especially on a well. Testing tells us what is actually in your water so the filter targets the right thing instead of guessing." },
        { q: "Will a filter reduce my water pressure?", a: "A properly sized system should not noticeably slow your water. We size it to your household so pressure stays comfortable." },
        { q: "How often do filters need changing?", a: "It varies by system and water quality. We show you the schedule for your specific unit when we install it." },
        { q: "Is filtration the same as softening?", a: "No. Softening removes hardness minerals; filtration targets taste, odor, and contaminants. Many homes benefit from both, and they work well together." },
      ],
    })
  );
};
