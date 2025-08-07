import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dgea6w5L.mjs';
import { S as ScrollAnimation } from '../chunks/ScrollAnimation_DokyVXDc.mjs';
export { renderers } from '../renderers.mjs';

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          q: "How do I know if I need waterproofing?",
          a: "Common signs include water stains on walls/floors, musty odors, visible mold, foundation cracks, efflorescence (white powder on walls), or water seepage during rain. If you notice any of these signs, schedule a free inspection to assess your needs."
        },
        {
          q: "What areas of Toronto do you serve?",
          a: "We serve all of Toronto and the Greater Toronto Area including North York, Scarborough, Etobicoke, East York, York, Mississauga, Brampton, Vaughan, Richmond Hill, Markham, Pickering, Ajax, and Oakville. Same-day service is available in most areas."
        },
        {
          q: "Do you offer free estimates?",
          a: "Yes! We provide comprehensive free inspections and written estimates with no obligation. Our assessment includes moisture readings, foundation evaluation, and a detailed solution plan with transparent pricing."
        },
        {
          q: "Are you licensed and insured?",
          a: "Yes, we are fully licensed by the City of Toronto, carry $5 million liability insurance, have WSIB coverage for all workers, and maintain all required certifications for waterproofing work in Ontario."
        }
      ]
    },
    {
      category: "Cost & Financing",
      questions: [
        {
          q: "How much does waterproofing cost?",
          a: "Costs vary based on the solution needed: Interior waterproofing ($3,000-$8,000), Exterior waterproofing ($10,000-$25,000), Sump pump installation ($2,800-$4,500), Foundation crack repair ($500-$2,000). We provide detailed quotes after inspection."
        },
        {
          q: "Do you offer financing?",
          a: "Yes! We offer multiple financing options including 0% interest for 12 months (OAC), extended payment plans up to 60 months, and we can help coordinate home equity line applications. We also assist with insurance claims."
        },
        {
          q: "Are there any rebates available?",
          a: "The City of Toronto offers the Basement Flooding Protection Subsidy Program providing up to $3,400 for eligible waterproofing work. We help with all application paperwork and ensure your project qualifies."
        },
        {
          q: "Does insurance cover waterproofing?",
          a: "Insurance typically covers sudden water damage but not gradual seepage or maintenance issues. However, we document all work for insurance purposes and can help with claim documentation when coverage applies."
        }
      ]
    },
    {
      category: "Services & Process",
      questions: [
        {
          q: "What's the difference between interior and exterior waterproofing?",
          a: "Interior waterproofing manages water that enters your basement using drainage systems and sump pumps - less invasive and works year-round. Exterior waterproofing prevents water from reaching your foundation through excavation and membrane application - most comprehensive but requires good weather."
        },
        {
          q: "How long does waterproofing take?",
          a: "Timeline depends on the project scope: Interior systems (2-3 days), Exterior waterproofing (5-10 days), Sump pump installation (1-2 days), Crack repairs (same day). We provide accurate timelines during your estimate."
        },
        {
          q: "Will waterproofing disrupt my home?",
          a: "We minimize disruption by using drop cloths and plastic barriers, creating designated work paths, containing dust with HEPA filtration, working in sections to maintain access, and cleaning thoroughly each day."
        },
        {
          q: "Can you waterproof finished basements?",
          a: "Yes! We specialize in minimally invasive techniques for finished basements. We can often install systems with minimal damage to finishes, work around existing features, and restore affected areas after waterproofing."
        }
      ]
    },
    {
      category: "Emergency & Repairs",
      questions: [
        {
          q: "Do you offer emergency services?",
          a: "Yes! We provide 24/7 emergency response for flooding and water damage. Our team can arrive within 2-4 hours with pumping equipment, perform immediate water extraction, and implement temporary solutions until permanent repairs can be made."
        },
        {
          q: "My basement is flooding right now - what should I do?",
          a: "First, ensure safety by turning off electricity to the area and avoiding deep water. Then call our emergency line at (437) 545-0067. Move valuables to higher ground if safe, document damage with photos, and avoid using water fixtures if possible."
        },
        {
          q: "How quickly can you fix a leaking foundation crack?",
          a: "We offer same-day service for foundation crack repairs. Simple cracks can be fixed in 2-4 hours using injection methods. Our repairs come with a 10-year warranty and we can handle both interior and exterior crack sealing."
        },
        {
          q: "What if my sump pump fails during a storm?",
          a: "Call our 24/7 emergency line immediately. We stock all major pump brands for immediate replacement. While waiting, minimize water use, move items away from water, and use buckets to manually remove water if possible."
        }
      ]
    },
    {
      category: "Warranty & Maintenance",
      questions: [
        {
          q: "What warranty do you provide?",
          a: "We offer industry-leading warranties: Lifetime warranty on waterproofing materials, 25-year warranty on labor, 10-year warranty on sump pumps, 5-year warranty on battery backup systems. All warranties are transferable to new homeowners."
        },
        {
          q: "Do I need to maintain my waterproofing system?",
          a: "Yes, regular maintenance ensures optimal performance. We recommend annual inspections of sump pumps and drainage systems. We offer maintenance packages that include scheduled inspections, testing, cleaning, and priority emergency service."
        },
        {
          q: "What voids the warranty?",
          a: "Warranties remain valid with normal use. Common exclusions include modifications by others, lack of maintenance (for mechanical components), acts of God (earthquakes, etc.), and deliberate damage. We clearly explain all warranty terms."
        },
        {
          q: "How often should sump pumps be replaced?",
          a: "Quality sump pumps typically last 7-10 years with proper maintenance. Warning signs include frequent cycling, unusual noises, visible rust, or reduced pumping capacity. We recommend preventive replacement after 7 years to avoid failures."
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Frequently Asked Questions - DrySpace Waterproofing", "description": "Get answers to common waterproofing questions. Learn about costs, services, warranties, and more from Toronto's trusted waterproofing experts." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="container mx-auto px-4"> <!-- Hero Section --> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
Frequently Asked Questions
</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Find answers to common questions about basement waterproofing, costs, and our services
</p> </div> ` })} <!-- Quick Contact --> <div class="bg-primary text-white rounded-xl p-6 mb-12"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="text-center"> <p class="text-lg mb-2">Can't find your answer? We're here to help!</p> <div class="flex flex-col sm:flex-row gap-4 justify-center mt-4"> <a href="tel:4375450067" class="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
Call: (437) 545-0067
</a> <a href="/contact" class="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all">
Send a Message
</a> </div> </div> ` })} </div> <!-- FAQ Categories --> <div class="mb-8"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-wrap justify-center gap-4"> ${faqCategories.map((cat, index) => renderTemplate`<a${addAttribute(`#${cat.category.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 transition-colors"> ${cat.category} </a>`)} </div> ` })} </div> <!-- FAQ Sections --> ${faqCategories.map((category, catIndex) => renderTemplate`<div${addAttribute(category.category.toLowerCase().replace(/\s+/g, "-"), "id")} class="mb-12"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b"> ${category.category} </h2> ` })} <div class="space-y-4"> ${category.questions.map((faq, index) => renderTemplate`${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <details class="group bg-white rounded-lg shadow hover:shadow-lg transition-shadow"> <summary class="flex items-center justify-between p-6 cursor-pointer list-none"> <h3 class="font-semibold text-gray-900 pr-8">${faq.q}</h3> <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </summary> <div class="px-6 pb-6"> <p class="text-gray-700 leading-relaxed">${faq.a}</p> </div> </details> ` })}`)} </div> </div>`)} <!-- Additional Resources --> <div class="bg-gray-50 rounded-xl p-8 mb-12"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Helpful Resources</h2> <div class="grid md:grid-cols-3 gap-6"> <a href="/resources/maintenance-guide" class="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow group"> <div class="text-3xl mb-3">📖</div> <h3 class="font-bold text-gray-900 group-hover:text-primary transition-colors">Maintenance Guide</h3> <p class="text-sm text-gray-600 mt-2">Learn how to maintain your waterproofing system</p> </a> <a href="/tools/waterproofing-cost-calculator" class="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow group"> <div class="text-3xl mb-3">💰</div> <h3 class="font-bold text-gray-900 group-hover:text-primary transition-colors">Cost Calculator</h3> <p class="text-sm text-gray-600 mt-2">Estimate your waterproofing project cost</p> </a> <a href="/tools/basement-problem-diagnostic" class="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow group"> <div class="text-3xl mb-3">🔍</div> <h3 class="font-bold text-gray-900 group-hover:text-primary transition-colors">Problem Diagnostic</h3> <p class="text-sm text-gray-600 mt-2">Identify your basement water issues</p> </a> </div> ` })} </div> <!-- CTA Section --> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="text-center bg-primary text-white rounded-xl p-8"> <h2 class="text-3xl font-bold mb-4">
Still Have Questions?
</h2> <p class="text-xl mb-6 opacity-90">
Our experts are ready to help with your specific situation
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="tel:4375450067" class="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
Call Now: (437) 545-0067
</a> <a href="/contact" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all">
Schedule Free Inspection
</a> </div> </div> ` })} </div> </section> ` })}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/faq.astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
