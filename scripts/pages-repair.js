/* Pipe, leak, sewer & emergency repair pages (13). */
module.exports = (ctx) => {
  const { page, SERVICE_PAGES } = ctx;

  SERVICE_PAGES.push(
    page({
      slug: "emergency-plumbing-repair-westchester-ny",
      cat: "plumber",
      tier: 1,
      serviceType: "Emergency Plumbing Repair",
      title: "Emergency Plumbing Repair in Westchester County, NY",
      h1: "Fast Emergency Plumbing Repair in Westchester County, NY",
      heroAlt: "Dan's Drains plumber responding to a plumbing emergency in a Westchester County home",
      lead: "When water is spreading and you need help now, Dan's Drains responds fast across Westchester County. We help you stop the water on the phone, then get to you quickly with upfront pricing — even in an emergency.",
      localDetails: "burst pipes in winter, finished-basement flooding, main shutoff guidance",
      angle: "Calm, fast help that starts on the phone",
      openCta: "Water spreading right now? Call us and we will help you shut it off.",
      toc: [
        { id: "now", label: "What to do now" },
        { id: "handle", label: "Emergencies we handle" },
        { id: "process", label: "How we respond" },
        { id: "cost", label: "Cost &amp; honesty" },
        { id: "prevent", label: "Preventing the next one" },
      ],
      sections: [
        { id: "now", h2: "What to Do Right Now", html: `<p>If water is actively flowing where it should not be, the first step is to stop it. For most home emergencies:</p>
<ul>
<li>Shut off the fixture's valve if there is one, or the main water shutoff for the whole house.</li>
<li>For a water heater leak, turn off its supply and, for gas units, the gas.</li>
<li>Move valuables away from the water and stay clear of any outlet the water has reached.</li>
<li>Call us — we will talk you through it and head your way.</li>
</ul>
<p>You do not have to figure it out alone. We will stay on the phone and help.</p>` },
        { id: "handle", h2: "Emergencies We Handle", html: `<p>We respond to the plumbing problems that cannot wait: a [[LINK:burst-pipe-repair-westchester-ny|pipe that has burst and is flooding a room]], a major supply leak, a sewer backing up into the house, a failed water heater, and no-water situations.</p>
<p>In winter, a [[LINK:frozen-pipe-repair-westchester-ny|frozen pipe that has cracked]] is one of the most common emergency calls we get in this area.</p>` },
        { id: "process", h2: "How We Respond to an Emergency", html: `<p>When you call, we help you stop the water first, then head out as fast as we can. On arrival, we find the source, stop the leak, and stabilize the situation before doing anything else.</p>
<p>Then we explain what happened and what the repair involves, and give you a price before we start — even under pressure, you are never handed a surprise bill afterward.</p>` },
        { id: "cost", h2: "Upfront Pricing, Even in a Crisis", html: `<p>An emergency is stressful enough without worrying about being taken advantage of. We give you an honest, upfront price for the emergency repair before we begin the work.</p>
<p>Acting fast also limits the damage. The [[OUT:https://www.fema.gov/flood-insurance|FEMA guidance on limiting home water damage]] reinforces why stopping the water quickly matters, and it is exactly what we help you do.</p>` },
        { id: "prevent", h2: "Preventing the Next Emergency", html: `<p>Once the crisis is handled, we will point out what caused it and how to avoid a repeat — insulating vulnerable pipes, replacing a tired shutoff, or watching an aging water heater.</p>
<p>Simple safeguards like [[LINK:water-leak-sensor-installation-westchester-ny|early-warning leak sensors placed in risky spots]] can catch the next problem before it floods a room.</p>` },
      ],
      faqs: [
        { q: "How fast can you get here?", a: "We keep room in the schedule for emergencies and get to you as quickly as we can. When you call, we will give you an honest time frame and help you stop the water in the meantime." },
        { q: "Where is my main water shutoff?", a: "It is usually where the water line enters the house — often in the basement, a utility area, or near the water meter. If you cannot find it, call us and we will help you locate it on the phone." },
        { q: "Do you charge more for emergency calls?", a: "We give you an upfront price before any work begins, even in an emergency. You will know the cost before we start, not after." },
        { q: "My basement is flooding — what should I do first?", a: "Shut off the water at the source or the main, stay away from any outlets the water has reached, and call us right away. We will guide you and get moving." },
        { q: "Can a burst pipe wait until morning?", a: "No. A burst pipe can release a lot of water fast and cause serious damage. Shut off the water and call us as soon as it happens." },
      ],
    }),

    page({
      slug: "leak-detection-westchester-ny",
      cat: "plumber",
      tier: 2,
      serviceType: "Leak Detection",
      title: "Leak Detection in Westchester County, NY | Dan's Drains",
      h1: "Hidden Leak Detection in Westchester County, NY",
      heroAlt: "Dan's Drains plumber using leak detection equipment to find a hidden leak in a wall",
      lead: "Some leaks hide behind walls and under floors for weeks. Dan's Drains finds them without tearing your home apart, so a small hidden leak does not turn into major water damage.",
      localDetails: "hidden wall leaks, high water bills, older supply lines",
      angle: "Find it precisely, open only what is needed",
      toc: [
        { id: "signs", label: "Signs of a hidden leak" },
        { id: "how", label: "How we find leaks" },
        { id: "why", label: "Why act fast" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "signs", h2: "Signs of a Hidden Leak", html: `<p>Hidden leaks are sneaky, but they leave clues:</p>
<ul>
<li>A water bill that jumped without a clear reason.</li>
<li>A musty smell or a stain on a wall or ceiling.</li>
<li>The sound of running water when everything is off.</li>
<li>Warm spots on a floor, which can signal a hot-water line leak.</li>
</ul>
<p>If your water meter keeps moving with every fixture off, water is going somewhere it should not.</p>` },
        { id: "how", h2: "How We Find a Hidden Leak", html: `<p>We track a leak to its source using listening equipment, meter checks, and know-how, so we can pinpoint it before opening a wall. That means we cut into only what we have to, not a whole ceiling on a hunch.</p>
<p>Once we find it, we fix it or, if the pipe is failing, recommend a targeted [[LINK:pipe-repair-westchester-ny|repair of the damaged section of pipe]].</p>` },
        { id: "why", h2: "Why Finding Leaks Early Matters", html: `<p>A slow leak can rot framing, ruin insulation, and grow mold long before you see a drop of water. Finding it early is far cheaper than repairing water damage later.</p>
<p>It also saves water and money. The [[OUT:https://www.epa.gov/watersense/fix-a-leak-week|EPA's Fix a Leak information]] notes how much household water leaks quietly waste — often more than people expect.</p>` },
        { id: "local", h2: "Hidden Leaks in Older Homes", html: `<p>Older homes around Westchester often have supply lines of mixed ages and materials, and joints that loosen over time. Those aging connections are a common source of the slow leaks we track down.</p>
<p>Because many local homes have finished basements, a hidden leak there can do costly damage before it is noticed, which is why we take even a small clue seriously.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when your water bill spikes, you smell must, or you hear water running with everything off. The sooner we find it, the less damage it does.</p>
<p>If the leak turns out to be under a slab, we handle that too with specialized [[LINK:slab-leak-repair-westchester-ny|under-slab leak repair]].</p>` },
      ],
      faqs: [
        { q: "How do you find a leak without tearing up my house?", a: "We use listening equipment, meter checks, and experience to pinpoint the source first, so we open only the small area we need to reach the leak." },
        { q: "My water bill jumped — is it definitely a leak?", a: "Not always, but an unexplained spike is one of the most common signs. We can check your meter and track down whether water is escaping somewhere hidden." },
        { q: "How much water can a hidden leak waste?", a: "More than most people think — a steady hidden leak can waste thousands of gallons over time, which is why finding it early saves both water and money." },
        { q: "Can a hidden leak cause mold?", a: "Yes. Slow leaks behind walls keep materials damp, which is exactly what mold needs. Finding and fixing the leak early prevents it." },
        { q: "What if the leak is under my floor slab?", a: "We handle slab leaks with specialized detection and repair, locating the leak under the concrete so we can fix it with minimal disruption." },
      ],
    }),

    page({
      slug: "pipe-repair-westchester-ny",
      cat: "plumber",
      tier: 2,
      serviceType: "Pipe Repair",
      title: "Pipe Repair in Westchester County, NY | Dan's Drains",
      h1: "Pipe Repair in Westchester County, NY",
      heroAlt: "Dan's Drains plumber repairing a leaking copper pipe in a Westchester County home",
      lead: "A leaking or corroded pipe only gets worse with time. Dan's Drains repairs damaged pipe properly — fixing the real problem, not just wrapping tape around it — to protect your home from water damage.",
      localDetails: "corroded joints, mixed pipe materials, older-home supply lines",
      angle: "Fix the cause, not just the drip",
      toc: [
        { id: "signs", label: "Signs of pipe trouble" },
        { id: "causes", label: "Common causes" },
        { id: "process", label: "How we repair" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "signs", h2: "Signs a Pipe Needs Repair", html: `<p>Pipes give warnings before they fail outright:</p>
<ul>
<li>A visible drip or dampness around a joint or run of pipe.</li>
<li>Water stains on walls, ceilings, or floors.</li>
<li>Reduced water pressure from a partly blocked or corroded line.</li>
<li>Discolored water, which can signal corrosion inside the pipe.</li>
</ul>
<p>Catching these early keeps a small repair from becoming a burst-pipe emergency.</p>` },
        { id: "causes", h2: "What Causes Pipe Damage", html: `<p>Common causes include corrosion in older metal pipe, loose or failing joints, physical damage, and pressure that runs too high. Freezing is another big one in this area during winter.</p>
<p>If a pipe has already let go, that is an emergency — our [[LINK:burst-pipe-repair-westchester-ny|fast burst-pipe response]] is the right call.</p>` },
        { id: "process", h2: "How We Repair a Pipe", html: `<p>We find the damaged section, determine whether a repair or a section replacement is the right fix, and do the work with proper materials and connections. We do not just patch a symptom and leave the underlying weakness in place.</p>
<p>If we find that much of the pipe is failing, we will be straight with you about whether a larger [[LINK:pipe-replacement-westchester-ny|section or whole-line pipe replacement]] is the smarter long-term move.</p>` },
        { id: "local", h2: "Pipe Problems in Older Homes", html: `<p>Many homes here have a mix of pipe materials added over the decades, and older joints that corrode or loosen with age. Where two different metals meet, corrosion can accelerate and cause a leak at the connection.</p>
<p>The [[OUT:https://www.familyhandyman.com/list/plumbing-pipe-types/|Family Handyman guide to pipe types]] is a helpful primer, and we bring the right approach for whatever your home actually has.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Call us at the first sign of a leak, stain, or drop in pressure. A pipe repair caught early is quick and inexpensive compared to the water damage a failed pipe can cause.</p>
<p>If you are not sure exactly where the leak is coming from, our [[LINK:leak-detection-westchester-ny|precise leak location service]] finds it first.</p>` },
      ],
      faqs: [
        { q: "Can you just patch the leak?", a: "Sometimes a targeted repair is exactly right. But if the pipe is corroded or failing along its length, a patch only delays the next leak. We recommend whichever actually solves the problem." },
        { q: "Should I repair or replace the pipe?", a: "It depends on the pipe's condition. An isolated failure usually warrants a repair; widespread corrosion favors replacement. We give you an honest recommendation based on what we find." },
        { q: "Why is my water discolored?", a: "Discolored water can signal corrosion inside older metal pipes. It is worth having checked, since it often means the pipe is deteriorating from the inside." },
        { q: "How urgent is a small pipe leak?", a: "More urgent than it looks. A small leak can grow suddenly and cause water damage, so it is best repaired promptly rather than watched." },
        { q: "Can high water pressure damage my pipes?", a: "Yes. Pressure that runs too high stresses pipes and joints over time. If we find that is the cause, we can address the pressure as part of the fix." },
      ],
    }),

    page({
      slug: "pipe-replacement-westchester-ny",
      cat: "plumber",
      tier: 3,
      serviceType: "Pipe Replacement",
      title: "Pipe Replacement in Westchester County, NY | Dan's Drains",
      h1: "Pipe Replacement in Westchester County, NY",
      heroAlt: "Dan's Drains plumber replacing a section of old pipe in a Westchester County home",
      lead: "When a pipe is too corroded or damaged to repair, replacing it is the lasting fix. Dan's Drains replaces failing supply and drain pipes cleanly, so you are not chasing leak after leak.",
      localDetails: "aging galvanized and mixed pipe, corrosion, older homes",
      angle: "Replace what is genuinely failing, not more",
      toc: [
        { id: "when", label: "When to replace" },
        { id: "process", label: "How we replace" },
        { id: "cost", label: "Cost factors" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "when", h2: "When Replacement Beats Repair", html: `<p>Replacement makes sense when a pipe is corroded along its length, keeps leaking in new spots, or is an outdated material near the end of its life. At that point, repeated repairs cost more than replacing the run.</p>
<p>If only one spot has failed, a targeted [[LINK:pipe-repair-westchester-ny|repair of that pipe section]] may be all you need, and we will tell you honestly which applies.</p>` },
        { id: "process", h2: "How We Replace Pipe", html: `<p>We map out the failing run, shut off the water, and replace the pipe with modern, appropriate material and solid connections. We keep the disruption to your home as small as the job allows.</p>
<p>When a full-house situation is involved, we handle whole-home [[LINK:repiping-westchester-ny|repiping across the entire home]] as a planned project rather than a scramble.</p>` },
        { id: "cost", h2: "What Affects Replacement Cost", html: `<p>Pipe replacement pricing depends on:</p>
<ul>
<li>How much pipe needs replacing.</li>
<li>How accessible the pipe is behind walls or floors.</li>
<li>The pipe material and connections required.</li>
<li>Any drywall or finish work to reach it.</li>
</ul>
<p>We give you a clear price before starting.</p>` },
        { id: "local", h2: "Aging Pipe in Westchester Homes", html: `<p>Older homes in this area sometimes still have galvanized steel or other aging pipe that corrodes and narrows over the years, reducing pressure and eventually leaking. Replacing it restores flow and reliability.</p>
<p>The [[OUT:https://www.iapmo.org/about-us|IAPMO plumbing code organization]] sets many of the standards this work follows, and we replace pipe to current code.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when repairs keep adding up, pressure has dropped, or you know your home has old pipe due for replacement. Planning it beats reacting to the next leak.</p>
<p>If pressure loss is your main concern, we can start with a [[LINK:low-water-pressure-repair-westchester-ny|water pressure check]] to confirm the cause.</p>` },
      ],
      faqs: [
        { q: "How do I know if I need pipe replacement?", a: "Repeated leaks, corroded or discolored pipe, and dropping water pressure are common signs. We assess the pipe's condition and recommend replacement only when repair no longer makes sense." },
        { q: "Do you have to open my walls?", a: "Sometimes, to reach the pipe. We keep the openings as small as possible and only where necessary, then leave the area clean." },
        { q: "What pipe material do you use?", a: "We use modern materials appropriate to the application and to code. We will explain the choice for your specific job." },
        { q: "How long does pipe replacement take?", a: "A single run can be quick; a larger project takes longer. We give you a realistic timeline with the upfront price." },
        { q: "Is it worth replacing old galvanized pipe?", a: "Usually, yes. Galvanized pipe corrodes and narrows over time, hurting pressure and eventually leaking. Replacing it restores reliable flow." },
      ],
    }),

    page({
      slug: "burst-pipe-repair-westchester-ny",
      cat: "plumber",
      tier: 2,
      serviceType: "Burst Pipe Repair",
      title: "Burst Pipe Repair in Westchester County, NY | Dan's Drains",
      h1: "Burst Pipe Repair in Westchester County, NY",
      heroAlt: "Dan's Drains plumber repairing a burst pipe that flooded a Westchester County basement",
      lead: "A burst pipe releases water fast. Dan's Drains responds quickly across Westchester County — helping you stop the water immediately, then repairing the pipe and getting your home back to normal.",
      localDetails: "winter freeze bursts, finished-basement flooding, main shutoff",
      angle: "Speed first, then a proper repair",
      openCta: "Pipe just burst? Shut off the water and call us right away.",
      toc: [
        { id: "now", label: "Stop the water" },
        { id: "causes", label: "Why pipes burst" },
        { id: "process", label: "How we repair" },
        { id: "local", label: "Local factors" },
        { id: "prevent", label: "Preventing bursts" },
      ],
      sections: [
        { id: "now", h2: "Stop the Water First", html: `<p>A burst pipe is an emergency. The moment it happens:</p>
<ul>
<li>Shut off your main water valve to stop the flow.</li>
<li>Open a low faucet to drain the remaining water in the lines.</li>
<li>Keep away from outlets and electronics the water has reached.</li>
<li>Call us — we respond fast and will guide you until we arrive.</li>
</ul>
<p>Stopping the water quickly is the single biggest thing that limits the damage.</p>` },
        { id: "causes", h2: "Why Pipes Burst", html: `<p>The most common cause in this area is freezing — water expands as it freezes and splits the pipe. Other causes include corrosion, excessive pressure, and physical damage.</p>
<p>If your pipe burst from a freeze, our [[LINK:frozen-pipe-repair-westchester-ny|frozen pipe thawing and repair]] addresses both the break and the freeze risk behind it.</p>` },
        { id: "process", h2: "How We Repair a Burst Pipe", html: `<p>We locate the break, stop the water, and replace the damaged section with proper materials. Then we check the surrounding pipe for other weak spots the freeze or pressure may have stressed.</p>
<p>If the water reached finished areas, we will flag the risk of hidden moisture so you can address possible [[LINK:water-damage-restoration-westchester-ny|water damage before it spreads]].</p>` },
        { id: "local", h2: "Burst Pipes in Westchester Winters", html: `<p>Cold snaps here regularly push pipes past their limit, especially in unheated crawl spaces, exterior walls, and garages. A burst in a finished basement can flood the space fast.</p>
<p>Knowing where your main shutoff is saves precious minutes — the [[OUT:https://www.familyhandyman.com/article/how-to-shut-off-your-water/|Family Handyman guide to shutting off your home's water]] is worth reading before you need it, and we handle both the emergency repair and prevention.</p>` },
        { id: "prevent", h2: "Preventing the Next Burst", html: `<p>After the repair, we will point out vulnerable pipes worth insulating and habits that reduce freeze risk on cold nights. A little prevention goes a long way here.</p>
<p>Adding [[LINK:water-leak-sensor-installation-westchester-ny|leak sensors near at-risk pipes]] gives you early warning if it ever happens again.</p>` },
      ],
      faqs: [
        { q: "What is the very first thing to do when a pipe bursts?", a: "Shut off your main water valve to stop the flow, then open a low faucet to drain the lines. Stay clear of any electrical hazards and call us right away." },
        { q: "How fast can you respond to a burst pipe?", a: "We treat burst pipes as emergencies and get to you as fast as we can, guiding you to stop the water in the meantime." },
        { q: "Why do pipes burst in winter?", a: "Water expands as it freezes, and that pressure splits the pipe. Pipes in unheated or exterior areas are most at risk during cold snaps." },
        { q: "Will my insurance cover a burst pipe?", a: "Many policies cover sudden burst-pipe damage, though it varies. We provide clear documentation of the repair, and you will want to check with your insurer." },
        { q: "Can I prevent pipes from bursting again?", a: "Often, yes. Insulating vulnerable pipes, keeping heat on during cold snaps, and letting a faucet drip on the coldest nights all help. We will point out your risk spots." },
      ],
    }),

    page({
      slug: "frozen-pipe-repair-westchester-ny",
      cat: "plumber",
      tier: 2,
      serviceType: "Frozen Pipe Repair",
      title: "Frozen Pipe Repair in Westchester County, NY | Dan's Drains",
      h1: "Frozen Pipe Repair in Westchester County, NY",
      heroAlt: "Dan's Drains plumber safely thawing a frozen pipe in a Westchester County home",
      lead: "A frozen pipe is a burst waiting to happen. Dan's Drains safely thaws frozen pipes, repairs any damage, and helps you keep it from happening again through cold Westchester winters.",
      localDetails: "cold snaps, exterior walls and crawl spaces, freeze prevention",
      angle: "Thaw safely before it bursts",
      toc: [
        { id: "signs", label: "Signs of a frozen pipe" },
        { id: "safe", label: "Thaw safely" },
        { id: "process", label: "How we help" },
        { id: "local", label: "Local factors" },
        { id: "prevent", label: "Preventing freezes" },
      ],
      sections: [
        { id: "signs", h2: "Signs a Pipe Is Frozen", html: `<p>Catching a freeze before it bursts saves a lot of trouble. Watch for:</p>
<ul>
<li>No water or just a trickle from a faucet on a cold day.</li>
<li>Frost visible on an exposed pipe.</li>
<li>A bulging section of pipe.</li>
<li>Strange smells from a faucet or drain, a sign of a blockage.</li>
</ul>
<p>If a pipe is frozen, it is under stress and can split as it thaws, so act carefully.</p>` },
        { id: "safe", h2: "How to Thaw a Pipe Safely", html: `<p>Never use an open flame to thaw a pipe — it is a fire risk and can crack the pipe. Gentle warmth and keeping the faucet open so melting water can escape is the safe approach.</p>
<p>If you cannot reach the frozen section, or you suspect it has already cracked, stop and call us before it becomes a [[LINK:burst-pipe-repair-westchester-ny|full burst-pipe emergency]].</p>` },
        { id: "process", h2: "How We Handle a Frozen Pipe", html: `<p>We locate the frozen section, thaw it safely, and check for cracks the freeze may have caused. If the pipe was damaged, we repair or replace the affected section on the spot.</p>
<p>Then we look for why it froze — an uninsulated run, a cold draft — so we can help you prevent a repeat.</p>` },
        { id: "local", h2: "Freeze Risk in Westchester Homes", html: `<p>Our winters get cold enough to freeze pipes in crawl spaces, exterior walls, garages, and unheated basements. Homes with older insulation or exposed runs are especially at risk during a hard freeze.</p>
<p>The [[OUT:https://www.consumerreports.org/home-garden/home-maintenance-repairs/how-to-prevent-and-thaw-frozen-pipes-a1148446908/|Consumer Reports guide to preventing frozen pipes]] offers practical steps, and we handle the repairs and safeguards side.</p>` },
        { id: "prevent", h2: "Preventing Frozen Pipes", html: `<p>Insulating vulnerable pipes, sealing cold drafts, keeping the heat on during cold snaps, and letting a faucet drip on the coldest nights all reduce freeze risk. We will point out which pipes in your home need protecting.</p>
<p>If a freeze has already stressed your plumbing, a quick [[LINK:pipe-repair-westchester-ny|check and repair of the affected pipe]] prevents a surprise later.</p>` },
      ],
      faqs: [
        { q: "Can I thaw a frozen pipe myself?", a: "Gentle warmth with the faucet open can work for an accessible pipe, but never use an open flame. If you cannot reach it or suspect a crack, call us before it bursts." },
        { q: "Will a frozen pipe always burst?", a: "Not always, but it is under stress and can split as it thaws. It is safest to thaw it carefully and check for damage." },
        { q: "Which pipes are most likely to freeze?", a: "Pipes in unheated areas — crawl spaces, exterior walls, garages, and basements — and any exposed or poorly insulated runs." },
        { q: "How can I prevent frozen pipes?", a: "Insulate at-risk pipes, seal drafts, keep the heat on during cold snaps, and let a faucet drip on the coldest nights. We will help identify your risk spots." },
        { q: "What should I do if no water comes out on a cold morning?", a: "You may have a frozen pipe. Keep the faucet open, apply gentle warmth if you can safely reach the pipe, and call us if it does not clear or you suspect damage." },
      ],
    }),

    page({
      slug: "repiping-westchester-ny",
      cat: "plumber",
      tier: 3,
      serviceType: "Repiping",
      title: "Whole-Home Repiping in Westchester County, NY",
      h1: "Whole-Home Repiping in Westchester County, NY",
      heroAlt: "Dan's Drains plumber repiping a section of an older Westchester County home",
      lead: "When old pipe throughout a house keeps failing, repiping replaces it all at once. Dan's Drains plans and handles whole-home repiping cleanly, so you stop chasing leaks for good.",
      localDetails: "aging galvanized systems, recurring leaks, older housing stock",
      angle: "One planned project instead of endless patches",
      toc: [
        { id: "when", label: "When to repipe" },
        { id: "process", label: "How we repipe" },
        { id: "cost", label: "Cost factors" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "when", h2: "When a Home Needs Repiping", html: `<p>Repiping makes sense when leaks keep popping up in new spots, water pressure has dropped across the house, or the home still has aging pipe like galvanized steel that is corroding throughout.</p>
<p>If only part of the system is failing, a targeted [[LINK:pipe-replacement-westchester-ny|replacement of that pipe run]] may be enough — we will tell you honestly which fits.</p>` },
        { id: "process", h2: "How We Repipe a Home", html: `<p>We plan the project to minimize disruption: mapping the runs, staging the work, and keeping wall openings as small as possible. We replace the old pipe with modern material and solid connections, then test everything before closing up.</p>
<p>Good planning is what separates a smooth repipe from a chaotic one, and we treat it as a project, not a scramble.</p>` },
        { id: "cost", h2: "What Affects Repiping Cost", html: `<p>Repiping pricing depends on:</p>
<ul>
<li>The size of the home and number of fixtures.</li>
<li>How accessible the existing pipe is.</li>
<li>The pipe material used.</li>
<li>Any wall and finish repair afterward.</li>
</ul>
<p>We provide a clear, upfront price for the whole project.</p>` },
        { id: "local", h2: "Repiping Older Westchester Homes", html: `<p>Plenty of homes in this area are old enough to have original or early-replacement pipe that is now corroding. Repiping restores pressure and reliability and ends the cycle of surprise leaks.</p>
<p>Work follows plumbing code, much of which comes from organizations like the [[OUT:https://iapmo.org/uniform-plumbing-code|Uniform Plumbing Code publishers]], and we repipe to current standards.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when repairs keep stacking up or pressure has fallen across the house. Planning a repipe beats reacting to leak after leak.</p>
<p>If you want to confirm the cause first, our [[LINK:leak-detection-westchester-ny|leak and pressure diagnosis]] can pinpoint how widespread the problem really is.</p>` },
      ],
      faqs: [
        { q: "How do I know if my whole house needs repiping?", a: "Recurring leaks in different spots, low pressure throughout, and old corroding pipe are the main signs. We assess the system and recommend repiping only when it is genuinely warranted." },
        { q: "How long does a repipe take?", a: "It depends on the home's size and layout — often a few days. We plan the work to keep your water on as much as possible and minimize disruption." },
        { q: "Will you repair the walls afterward?", a: "We keep openings small and coordinate finish repair. We will explain exactly what the job involves before we start." },
        { q: "Is repiping worth it versus repeated repairs?", a: "If pipe is failing throughout, yes. The cost of endless repairs and water damage usually exceeds a planned repipe that solves it once." },
        { q: "What pipe do you use for repiping?", a: "Modern, code-approved materials suited to your home. We will explain the choice and why it fits your situation." },
      ],
    }),

    page({
      slug: "water-line-replacement-westchester-ny",
      cat: "plumber",
      tier: 3,
      serviceType: "Water Line Replacement",
      title: "Water Line Replacement in Westchester County, NY",
      h1: "Water Line Replacement in Westchester County, NY",
      heroAlt: "Dan's Drains plumber replacing a main water supply line to a Westchester County home",
      lead: "The main line that feeds your home's water can fail with age or damage. Dan's Drains replaces failing water supply lines so you get reliable pressure and clean water back to the house.",
      localDetails: "aging service lines, pressure loss, yard and driveway access",
      angle: "Restore the lifeline that feeds the whole house",
      toc: [
        { id: "signs", label: "Signs of trouble" },
        { id: "process", label: "How we replace" },
        { id: "cost", label: "Cost factors" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "signs", h2: "Signs Your Water Line Is Failing", html: `<p>The main supply line runs underground, so problems show up indirectly:</p>
<ul>
<li>A sudden or gradual drop in water pressure throughout the house.</li>
<li>Discolored or dirty water at the tap.</li>
<li>Wet or unusually green patches in the yard along the line's path.</li>
<li>An unexplained jump in your water bill.</li>
</ul>
<p>Any of these is worth checking before the line fails completely.</p>` },
        { id: "process", h2: "How We Replace a Water Line", html: `<p>We confirm the line is the problem, plan the route, and replace it with modern pipe rated for underground supply. We work to keep your yard and driveway disruption to a minimum.</p>
<p>If the issue turns out to be a break rather than the whole line, a focused [[LINK:water-main-repair-westchester-ny|repair of the main line]] may be all you need.</p>` },
        { id: "cost", h2: "What Affects the Cost", html: `<p>Water line replacement pricing depends on:</p>
<ul>
<li>The length and depth of the line.</li>
<li>What is above it — lawn, driveway, or landscaping.</li>
<li>The pipe material and connections.</li>
<li>Access and local requirements.</li>
</ul>
<p>We give you a clear price before the work begins.</p>` },
        { id: "local", h2: "Service Lines in Westchester Homes", html: `<p>Older homes here often have original service lines that have aged for decades underground. As they corrode or crack, pressure drops and water quality can suffer.</p>
<p>Clean, reliable water starts at the main, and the [[OUT:https://www.epa.gov/ground-water-and-drinking-water|EPA's drinking water resources]] underscore why a sound supply line matters. We replace failing lines to restore it.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when pressure drops across the house, water looks dirty, or you see wet spots along the line's path. Replacing a failing service line prevents a bigger failure later.</p>
<p>If low pressure is the main symptom, we can start with a [[LINK:low-water-pressure-repair-westchester-ny|full pressure evaluation]] to confirm the source.</p>` },
      ],
      faqs: [
        { q: "How do I know if my main water line is the problem?", a: "Falling pressure throughout the house, discolored water, wet spots in the yard, or a rising bill all point to the service line. We confirm before recommending replacement." },
        { q: "Will you dig up my whole yard?", a: "We plan the route to minimize disruption and only open what we need. We will explain the approach and what to expect before starting." },
        { q: "How long does a water line replacement take?", a: "Often a day or two depending on length, depth, and what is above the line. We give you a realistic timeline with the price." },
        { q: "Can a water line be repaired instead of replaced?", a: "If it is a single break, sometimes yes. If the line is aged and failing along its length, replacement is the lasting fix. We advise honestly." },
        { q: "Why is my water discolored?", a: "Discoloration can come from a corroding service line. Replacing an aged line often restores clean, clear water to the house." },
      ],
    }),

    page({
      slug: "water-main-repair-westchester-ny",
      cat: "plumber",
      tier: 3,
      serviceType: "Water Main Repair",
      title: "Water Main Repair in Westchester County, NY | Dan's Drains",
      h1: "Water Main Repair in Westchester County, NY",
      heroAlt: "Dan's Drains plumber repairing a water main break outside a Westchester County home",
      lead: "A break in your water main can cut off water and flood your yard. Dan's Drains locates and repairs main-line breaks and leaks quickly to restore water to your home.",
      localDetails: "underground main breaks, pressure loss, cold-weather ground shift",
      angle: "Find the break, restore the water fast",
      toc: [
        { id: "signs", label: "Signs of a break" },
        { id: "process", label: "How we repair" },
        { id: "cost", label: "Cost factors" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "signs", h2: "Signs of a Water Main Break", html: `<p>A main-line problem tends to announce itself:</p>
<ul>
<li>A sudden loss of water pressure or no water at all.</li>
<li>Water bubbling up in the yard or street.</li>
<li>A soggy, sinking, or unusually green area along the line.</li>
<li>Dirty or discolored water when it does flow.</li>
</ul>
<p>A main break wastes a lot of water and can undermine walkways, so it needs prompt attention.</p>` },
        { id: "process", h2: "How We Repair a Water Main", html: `<p>We pinpoint the break, expose the damaged section, and repair or replace it with proper materials, then restore service and confirm the pressure is back to normal.</p>
<p>If the main is old and failing beyond a single break, we will discuss a full [[LINK:water-line-replacement-westchester-ny|main supply line replacement]] rather than a repair that will not hold.</p>` },
        { id: "cost", h2: "What Affects the Cost", html: `<p>Water main repair pricing depends on:</p>
<ul>
<li>The location and depth of the break.</li>
<li>What sits above the line.</li>
<li>Whether a repair or a replacement is needed.</li>
<li>Access and local requirements.</li>
</ul>
<p>We provide an upfront price before we dig.</p>` },
        { id: "local", h2: "Main Breaks in Westchester", html: `<p>Ground that freezes and shifts through the winter can stress underground mains, and older lines are the most vulnerable. A break here often shows up as a wet patch or a pressure drop before anything else.</p>
<p>Because the main connects your home to the public supply, sound repair matters for water quality too, in line with [[OUT:https://www.epa.gov/dwreginfo|EPA drinking water standards]]. We repair mains to keep that water clean and flowing.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Call us right away if water pressure drops sharply or you see water surfacing in the yard. A main break only gets worse and wastes water the whole time.</p>
<p>Not sure whether it is the main or something inside? Our [[LINK:leak-detection-westchester-ny|leak-source investigation]] narrows it down.</p>` },
      ],
      faqs: [
        { q: "How do I know if my water main is broken?", a: "A sudden loss of pressure, water surfacing in the yard, or a soggy patch along the line are common signs. We locate the break to confirm." },
        { q: "Is a water main break an emergency?", a: "It can be. It wastes water continuously and can undermine walkways and foundations, so it is best addressed quickly." },
        { q: "Who is responsible for the water main — me or the town?", a: "Generally, the portion from the street to your home is the homeowner's responsibility, while the town handles the public side. We can help you sort out which part is affected." },
        { q: "Can you repair the main without replacing it?", a: "If it is a single break in otherwise sound pipe, often yes. If the line is aged and failing, replacement is the lasting fix. We advise based on what we find." },
        { q: "Why did my main break in winter?", a: "Freezing and shifting ground put stress on underground pipe, and older mains are the most likely to give way during a cold stretch." },
      ],
    }),

    page({
      slug: "slab-leak-repair-westchester-ny",
      cat: "plumber",
      tier: 3,
      serviceType: "Slab Leak Repair",
      title: "Slab Leak Repair in Westchester County, NY | Dan's Drains",
      h1: "Slab Leak Repair in Westchester County, NY",
      heroAlt: "Dan's Drains plumber locating a slab leak under a concrete floor in a Westchester County home",
      lead: "A leak in a pipe under your concrete slab is easy to miss and costly to ignore. Dan's Drains locates and repairs slab leaks with minimal disruption, before they undermine your floor.",
      localDetails: "under-slab supply lines, warm floor spots, foundation risk",
      angle: "Pinpoint under concrete, open only what is needed",
      toc: [
        { id: "signs", label: "Signs of a slab leak" },
        { id: "how", label: "How we find them" },
        { id: "process", label: "How we repair" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "signs", h2: "Signs of a Slab Leak", html: `<p>Slab leaks hide under concrete, but they leave clues:</p>
<ul>
<li>A warm spot on the floor, often from a hot-water line leak.</li>
<li>The sound of running water with everything off.</li>
<li>Unexplained cracks in flooring or the slab.</li>
<li>A jump in your water bill with no other explanation.</li>
</ul>
<p>Because the pipe is under the slab, catching these signs early prevents costly damage.</p>` },
        { id: "how", h2: "How We Locate a Slab Leak", html: `<p>We use listening equipment and pressure testing to pinpoint the leak under the concrete before opening anything. That lets us reach the exact spot instead of breaking up a whole floor to search.</p>
<p>Accurate location is the whole point here — it is closely related to our broader [[LINK:leak-detection-westchester-ny|hidden leak location work]], applied under a slab.</p>` },
        { id: "process", h2: "How We Repair a Slab Leak", html: `<p>Once located, we access the pipe and repair or reroute it, depending on what makes the most sense for your home. We keep the opening as small as the repair allows and restore the area cleanly.</p>
<p>If the affected pipe is aged, we will discuss whether a [[LINK:pipe-replacement-westchester-ny|replacement of that pipe section]] is the more durable fix.</p>` },
        { id: "local", h2: "Slab Leaks in Westchester Homes", html: `<p>Homes with slab foundations or slab-on-grade additions can develop leaks in the supply lines run beneath the concrete. Left alone, the water can undermine the slab and damage flooring.</p>
<p>Because a slow slab leak wastes water continuously, catching it aligns with the water-saving spirit of the [[OUT:https://www.epa.gov/watersense|EPA WaterSense program]], and it protects your foundation too.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Call us if you notice a warm floor spot, hear running water, or see an unexplained bill increase. Slab leaks do not fix themselves and only cause more damage over time.</p>
<p>If water has already affected finishes, address possible [[LINK:water-damage-restoration-westchester-ny|moisture damage early]] before it spreads.</p>` },
      ],
      faqs: [
        { q: "What is a slab leak?", a: "It is a leak in a water pipe running under your home's concrete slab foundation. Because it is hidden, it often goes unnoticed until it causes damage." },
        { q: "How do you find a leak under concrete?", a: "We use listening equipment and pressure testing to pinpoint the leak before opening the slab, so we reach the exact spot with minimal disruption." },
        { q: "Will you have to break up my whole floor?", a: "No. By locating the leak precisely first, we open only the small area needed to reach and repair the pipe." },
        { q: "Can a slab leak damage my foundation?", a: "Over time, yes. Continuous water under the slab can undermine it and damage flooring, which is why early repair matters." },
        { q: "How do I know the warm spot on my floor is a leak?", a: "A warm patch often signals a hot-water line leaking under the slab. We can confirm with leak-location equipment before doing any work." },
      ],
    }),

    page({
      slug: "sewer-line-repair-westchester-ny",
      cat: "plumber",
      tier: 2,
      serviceType: "Sewer Line Repair",
      title: "Sewer Line Repair in Westchester County, NY | Dan's Drains",
      h1: "Sewer Line Repair in Westchester County, NY",
      heroAlt: "Dan's Drains plumber repairing a sewer line at a Westchester County property",
      lead: "A damaged sewer line can back up waste into your home and yard. Dan's Drains diagnoses and repairs cracked, clogged, and root-invaded sewer lines to get your drains flowing safely again.",
      localDetails: "root intrusion, older clay and cast-iron lines, main-line backups",
      angle: "See the real problem, then fix it right",
      toc: [
        { id: "signs", label: "Signs of trouble" },
        { id: "causes", label: "Common causes" },
        { id: "process", label: "How we repair" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "signs", h2: "Signs of a Sewer Line Problem", html: `<p>Sewer trouble usually affects the whole house at once:</p>
<ul>
<li>Several drains slow or backing up together.</li>
<li>Gurgling toilets when you run water elsewhere.</li>
<li>Sewage smells indoors or in the yard.</li>
<li>Soggy or unusually lush patches over the sewer line's path.</li>
</ul>
<p>These point to the main sewer line, not a single fixture, and they are worth prompt attention.</p>` },
        { id: "causes", h2: "What Damages a Sewer Line", html: `<p>The most common causes here are tree roots working into pipe joints, aged clay or cast-iron pipe cracking, grease and debris buildup, and ground shifting. Roots are the biggest culprit in older neighborhoods.</p>
<p>Before we repair, a [[LINK:sewer-camera-inspection-westchester-ny|camera inspection of the sewer line]] shows exactly what is going on so we fix the real problem.</p>` },
        { id: "process", h2: "How We Repair a Sewer Line", html: `<p>We inspect the line, clear any blockage, and repair or replace the damaged section. Where roots are the issue, thorough clearing with [[LINK:hydro-jetting-westchester-ny|high-pressure jetting]] often restores flow before a targeted repair.</p>
<p>We match the fix to the actual damage, whether that is a spot repair or a longer section replacement.</p>` },
        { id: "local", h2: "Sewer Lines in Older Westchester Areas", html: `<p>Many established neighborhoods here have older clay or cast-iron sewer lines and mature trees whose roots are drawn to them. That combination makes root intrusion and cracked joints common local problems.</p>
<p>Keeping sewage flowing safely away protects both your home and public health, in line with [[OUT:https://www.epa.gov/septic|EPA guidance on wastewater systems]]. We keep your line doing its job.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when multiple drains back up, you smell sewage, or the yard is soggy over the line. Sewer problems only get messier the longer they wait.</p>
<p>If a single stubborn clog is the issue rather than damage, our [[LINK:drain-snaking-westchester-ny|mechanical snaking service]] may clear it.</p>` },
      ],
      faqs: [
        { q: "How do I know if it is my sewer line?", a: "When several drains back up at once, toilets gurgle, or you smell sewage, the main sewer line is the likely cause rather than a single fixture. A camera inspection confirms it." },
        { q: "Do tree roots really break sewer lines?", a: "Yes. Roots are drawn to the moisture in the pipe and work into joints, where they catch debris and eventually crack the line. It is one of the most common causes here." },
        { q: "Can you fix a sewer line without digging up the whole yard?", a: "Often we can target just the damaged section after locating it with a camera. We keep excavation to the minimum the repair requires." },
        { q: "Is a sewer backup dangerous?", a: "It can be a health hazard because of the wastewater involved. It is best addressed promptly, and we handle it safely." },
        { q: "How can I prevent sewer line problems?", a: "Avoid flushing wipes and grease, and consider periodic inspection if you have mature trees near the line. Catching root intrusion early prevents backups." },
      ],
    }),

    page({
      slug: "sump-pump-installation-westchester-ny",
      cat: "plumber",
      tier: 2,
      serviceType: "Sump Pump Installation",
      title: "Sump Pump Installation in Westchester County, NY",
      h1: "Sump Pump Installation in Westchester County, NY",
      heroAlt: "Dan's Drains plumber installing a sump pump in a Westchester County basement",
      lead: "A working sump pump is what keeps a finished basement dry. Dan's Drains installs and replaces sump pumps sized for your home, so heavy rain does not turn your basement into a problem.",
      localDetails: "finished basements, heavy-rain flooding, backup pumps",
      angle: "Keep the finished basement dry when it counts",
      toc: [
        { id: "why", label: "Why it matters" },
        { id: "process", label: "How we install" },
        { id: "backup", label: "Backup options" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "why", h2: "Why a Sump Pump Matters", html: `<p>A sump pump collects water that gathers under or around your foundation and pumps it away before it floods the basement. In a home with a finished basement, that pump is the last line of defense during heavy rain.</p>
<p>When a pump fails at the wrong moment, the damage can be severe, which ties directly into [[LINK:water-damage-restoration-westchester-ny|preventing basement water damage]].</p>` },
        { id: "process", h2: "How We Install a Sump Pump", html: `<p>We assess your basement and water situation, set the pump in a properly prepared pit, and connect the discharge so water is carried well away from the foundation. Then we test it to confirm it kicks on and clears water as it should.</p>
<p>Sizing matters — we match the pump's capacity to how much water your home actually has to handle.</p>` },
        { id: "backup", h2: "Backup Pump Options", html: `<p>The worst floods often happen during storms that also knock out the power — exactly when a standard pump quits. A battery backup or secondary pump keeps things dry when the main pump cannot run.</p>
<p>We will talk through whether a backup makes sense for your basement, especially if it is finished or holds valuables.</p>` },
        { id: "local", h2: "Basements in Westchester Homes", html: `<p>Finished basements are common here, and our wet springs and heavy storms put them at real risk. A reliable sump pump is one of the most valuable safeguards a local homeowner can have.</p>
<p>The [[OUT:https://www.fema.gov/floodproofing|FEMA guidance on protecting homes from flooding]] backs this up, and we handle the pump side of keeping your basement dry.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when your basement takes on water, your current pump is old or noisy, or you have finished the basement and want protection. Getting the pump in before a storm beats scrambling during one.</p>
<p>If your basement also gets damp from other sources, we can check for [[LINK:leak-detection-westchester-ny|hidden leaks adding to the moisture]].</p>` },
      ],
      faqs: [
        { q: "How long do sump pumps last?", a: "Many last around 7 to 10 years. If yours is older, noisy, or running constantly, it is worth replacing before it fails during a storm." },
        { q: "Do I need a battery backup?", a: "If your basement is finished or floods during storms that also cut power, a backup is well worth it — that is exactly when a standard pump would otherwise fail." },
        { q: "How do I know if my sump pump is failing?", a: "Watch for constant running, strange noises, or a pump that does not turn on when the pit fills. Testing it before storm season is a good habit." },
        { q: "Where does the water get pumped to?", a: "We route the discharge well away from your foundation so the water does not simply drain back toward the house. Proper discharge placement is part of the install." },
        { q: "Can you replace just the pump if the pit is fine?", a: "Often, yes. If the pit and discharge are in good shape, we can swap the pump itself. We will check the whole setup and advise." },
      ],
    }),

    page({
      slug: "low-water-pressure-repair-westchester-ny",
      cat: "plumber",
      tier: 3,
      serviceType: "Low Water Pressure Repair",
      title: "Low Water Pressure Repair in Westchester County, NY",
      h1: "Low Water Pressure Repair in Westchester County, NY",
      heroAlt: "Dan's Drains plumber checking water pressure at a fixture in a Westchester County home",
      lead: "Weak water pressure makes everyday tasks a chore. Dan's Drains tracks down the real cause of low pressure — from a clogged fixture to a failing line — and fixes it at the source.",
      localDetails: "corroded pipe, pressure regulator, whole-house vs single-fixture",
      angle: "Diagnose the source, not just the symptom",
      toc: [
        { id: "signs", label: "What you notice" },
        { id: "causes", label: "Common causes" },
        { id: "process", label: "How we fix it" },
        { id: "local", label: "Local factors" },
        { id: "pro", label: "When to call a pro" },
      ],
      sections: [
        { id: "signs", h2: "What Low Pressure Looks Like", html: `<p>Low pressure shows up as a weak shower, a slow-filling tub, or fixtures that trickle instead of flow. The key question is whether it affects one fixture or the whole house.</p>
<ul>
<li>One fixture: often a clogged aerator or a local supply issue.</li>
<li>The whole house: usually a pressure regulator, a failing line, or corrosion.</li>
</ul>
<p>Which it is tells us where to look.</p>` },
        { id: "causes", h2: "Common Causes of Low Pressure", html: `<p>Frequent culprits include mineral buildup in fixtures, corroded or narrowing pipe, a failing pressure regulator, a partially closed valve, or a hidden leak bleeding off pressure.</p>
<p>If corrosion in old pipe is the cause, the lasting fix may be a [[LINK:pipe-replacement-westchester-ny|replacement of the affected pipe]] rather than a temporary patch.</p>` },
        { id: "process", h2: "How We Restore Pressure", html: `<p>We test pressure at key points to isolate the cause, then fix it — cleaning or replacing a clogged fixture, adjusting or replacing a regulator, or addressing a failing line. We confirm the pressure is back where it should be before we finish.</p>
<p>If a hidden leak is quietly stealing pressure, our [[LINK:leak-detection-westchester-ny|leak-finding service]] pinpoints it.</p>` },
        { id: "local", h2: "Pressure Issues in Older Homes", html: `<p>Older homes in this area with aging galvanized or mixed pipe often lose pressure as the pipe corrodes and narrows inside. What feels like a fixture problem is sometimes a whole-house pipe issue.</p>
<p>Comfortable, efficient water use depends on proper pressure, something the [[OUT:https://www.epa.gov/watersense/showerheads|EPA WaterSense showerhead information]] touches on, and we get yours back to where it should be.</p>` },
        { id: "pro", h2: "When to Call a Pro", html: `<p>Call us when pressure drops across the house, a fix at one fixture does not help, or pressure keeps getting worse. We find the actual source instead of masking it.</p>
<p>If pressure loss comes with discolored water, it may point to the main line — our [[LINK:water-line-replacement-westchester-ny|service line evaluation]] can check.</p>` },
      ],
      faqs: [
        { q: "Why is my water pressure low in the whole house?", a: "Whole-house low pressure usually points to a failing pressure regulator, corroded pipe, a partly closed main valve, or a hidden leak. We test to find which." },
        { q: "Only one faucet is weak — what is that?", a: "A single weak fixture is often a clogged aerator or a local supply issue, which is usually a quick fix. We confirm before doing more." },
        { q: "Can a leak cause low pressure?", a: "Yes. A hidden leak bleeds off water and pressure. If we suspect one, we locate it as part of solving the pressure problem." },
        { q: "Can old pipes cause low pressure?", a: "Definitely. Corroded galvanized or aging pipe narrows inside over time, restricting flow. Replacing it restores pressure for good." },
        { q: "Is low pressure something I can fix myself?", a: "Cleaning a fixture aerator is a fine DIY step. If that does not help or the whole house is affected, it is worth having us find the real source." },
      ],
    })
  );
};
