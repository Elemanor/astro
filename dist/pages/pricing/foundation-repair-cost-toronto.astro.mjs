import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dgea6w5L.mjs';
import { $ as $$HeroSection, a as $$FAQSection } from '../../chunks/FAQSection_kT1TEjBS.mjs';
import { $ as $$CTASection } from '../../chunks/CTASection_C6tRvETi.mjs';
export { renderers } from '../../renderers.mjs';

const $$FoundationRepairCostToronto = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Foundation Repair Cost Toronto | 2024 Pricing Guide & Estimates";
  const pageDescription = "Detailed foundation repair cost guide for Toronto homeowners. Get accurate pricing for cracks, waterproofing, underpinning, and more. Free estimates: 416-893-5000.";
  const repairTypes = [
    {
      title: "Foundation Crack Repair",
      items: [
        { name: 'Hairline Cracks (< 1/8" wide)', details: [
          "Interior injection: $300 - $600 per crack",
          "Exterior sealing: $500 - $1,000 per crack",
          "Multiple crack discount: 10-15%",
          "Warranty included: 5-10 years"
        ] },
        { name: 'Structural Cracks (> 1/4" wide)', details: [
          "Epoxy injection: $800 - $1,500 per crack",
          "Carbon fiber reinforcement: $400 - $800 per strip",
          "Complete repair: $1,200 - $2,500 per crack",
          "Lifetime warranty available"
        ] }
      ]
    },
    {
      title: "Basement Waterproofing",
      items: [
        { name: "Interior Waterproofing", details: [
          "French drain system: $125 - $175 per linear foot",
          "Full perimeter (130 ft): $16,250 - $22,750",
          "Sump pump included: $2,000 - $3,000",
          "Vapor barriers: $3 - $5 per sq ft",
          "Complete system: $8,000 - $15,000"
        ] },
        { name: "Exterior Waterproofing", details: [
          "Excavation and membrane: $150 - $300 per linear foot",
          "Full perimeter (130 ft): $19,500 - $39,000",
          "Drainage tile: $50 - $75 per linear foot",
          "Window wells: $1,000 - $2,000 each",
          "Total project: $25,000 - $50,000"
        ] }
      ]
    },
    {
      title: "Foundation Wall Repair",
      items: [
        { name: "Bowing Wall Solutions", details: [
          "Carbon fiber straps: $500 - $800 each",
          "Wall anchors: $600 - $800 each",
          "Steel I-beams: $500 - $700 per beam",
          "Complete wall (8 beams): $4,000 - $5,600",
          "Severe cases: $8,000 - $15,000"
        ] },
        { name: "Block Foundation Repair", details: [
          "Repointing mortar: $8 - $15 per sq ft",
          "Crack stitching: $500 - $800 per crack",
          "Wall rebuilding: $100 - $150 per sq ft",
          "Reinforcement: $3,000 - $8,000",
          "Complete repair: $5,000 - $20,000"
        ] }
      ]
    },
    {
      title: "Foundation Underpinning",
      items: [
        { name: "Push Pier Systems", details: [
          "Per pier installed: $1,500 - $2,500",
          "Average home (15-20 piers): $22,500 - $50,000",
          "Includes lifting: Additional $2,000 - $5,000",
          "Engineering included: $2,000 - $4,000",
          "Permits and inspections: $1,000 - $2,500"
        ] },
        { name: "Traditional Underpinning", details: [
          "Per linear foot: $500 - $1,000",
          "Partial underpinning: $15,000 - $30,000",
          "Full perimeter: $40,000 - $80,000",
          "Basement lowering add-on: $15,000 - $30,000",
          "Total with extras: $50,000 - $100,000"
        ] }
      ]
    }
  ];
  const faqs = [
    {
      question: "How accurate are these cost estimates?",
      answer: "These ranges reflect 90% of Toronto foundation repairs. Your specific cost depends on inspection findings and chosen solutions."
    },
    {
      question: "Can I get multiple quotes?",
      answer: "Yes, we encourage comparing quotes. Ensure you're comparing identical scopes of work and warranty terms."
    },
    {
      question: "Are foundation repairs tax deductible?",
      answer: "Some repairs may qualify for home accessibility tax credits. Consult your accountant for specific situations."
    },
    {
      question: "How quickly do prices change?",
      answer: "Construction costs typically increase 5-10% annually. Current quotes are usually honored for 30-60 days."
    },
    {
      question: "Is the cheapest quote always best?",
      answer: "Not necessarily. Consider experience, warranties, insurance, and reviews alongside price for best value."
    }
  ];
  const torontoCostFactors = [
    {
      category: "Downtown Toronto Premium",
      factors: [
        "Limited access: +15-25%",
        "Parking/permits: +$500-$1,000",
        "Hand digging required: +30-40%",
        "Noise restrictions: Extended timeline",
        "Heritage requirements: +20-30%"
      ]
    },
    {
      category: "Suburban Areas",
      factors: [
        "Standard access: Base pricing",
        "Ample workspace: No premium",
        "Equipment access: Normal rates",
        "Fewer restrictions: Faster completion"
      ]
    },
    {
      category: "Clay Soil Areas",
      factors: [
        "Additional excavation: +$2,000-$5,000",
        "Special backfill: +$50-$75/cubic yard",
        "Enhanced drainage: +$3,000-$5,000",
        "Longer warranties: Included"
      ]
    },
    {
      category: "Century Homes",
      factors: [
        "Stone foundation: +25-40%",
        "Limited access: +15-20%",
        "Preservation requirements: +$5,000-$10,000",
        "Specialized techniques: Premium rates"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "Foundation Repair Cost in Toronto: Complete 2024 Pricing Guide", "subtitle": "Understanding Foundation Repair Costs - Get accurate pricing for all types of foundation repairs in Toronto", "ctaText": "Get Free Estimate", "ctaLink": "tel:4168935000", "image": "/pics/work/foundation-repair-project.jpg" })} ${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Average Foundation Repair Costs in Toronto</h2> <div class="bg-blue-50 p-6 rounded-lg mb-8"> <h3 class="text-2xl font-semibold mb-4">Quick Cost Overview:</h3> <ul class="space-y-2"> <li><strong>Minor Crack Repair</strong>: $500 - $1,500</li> <li><strong>Major Crack Repair</strong>: $1,500 - $3,500</li> <li><strong>Wall Stabilization</strong>: $5,000 - $15,000</li> <li><strong>Partial Underpinning</strong>: $20,000 - $40,000</li> <li><strong>Full Foundation Replacement</strong>: $50,000 - $150,000</li> </ul> </div> <p class="text-lg mb-6">
Foundation repair costs in Toronto vary significantly based on the type of damage, repair method, and property specifics. 
        This comprehensive guide provides realistic pricing for all types of foundation repairs, helping you budget accurately and avoid surprises.
</p> </div> </section> <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Detailed Cost Breakdown by Repair Type</h2> ${repairTypes.map((type) => renderTemplate`<div class="mb-12"> <h3 class="text-2xl font-semibold mb-6">${type.title}</h3> <div class="grid md:grid-cols-2 gap-6"> ${type.items.map((item) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow"> <h4 class="text-xl font-semibold mb-3">${item.name}</h4> <ul class="space-y-1"> ${item.details.map((detail) => renderTemplate`<li class="text-sm">" ${detail}</li>`)} </ul> </div>`)} </div> </div>`)} </div> </section> <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Emergency Repair Costs</h2> <div class="bg-red-50 p-6 rounded-lg"> <h3 class="text-2xl font-semibold mb-4">24/7 Emergency Service</h3> <ul class="space-y-2"> <li>" Call-out fee: $200 - $400</li> <li>" After-hours rate: 1.5x normal</li> <li>" Temporary repairs: $500 - $2,000</li> <li>" Water extraction: $500 - $1,500</li> <li>" Complete emergency response: $1,500 - $5,000</li> </ul> </div> </div> </section> <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Cost Factors Specific to Toronto</h2> <div class="grid md:grid-cols-2 gap-6"> ${torontoCostFactors.map((factor) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow"> <h3 class="text-xl font-semibold mb-3">${factor.category}</h3> <ul class="space-y-1"> ${factor.factors.map((item) => renderTemplate`<li class="text-sm">" ${item}</li>`)} </ul> </div>`)} </div> </div> </section> <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Hidden Costs to Consider</h2> <div class="grid md:grid-cols-2 gap-8"> <div> <h3 class="text-xl font-semibold mb-4">Additional Services</h3> <ul class="space-y-2"> <li>" Structural engineer: $1,500 - $3,500</li> <li>" Permits and inspections: $500 - $2,500</li> <li>" Landscaping restoration: $1,000 - $5,000</li> <li>" Interior finishing: $2,000 - $10,000</li> <li>" Temporary accommodation: $100 - $200/day</li> </ul> </div> <div> <h3 class="text-xl font-semibold mb-4">Unexpected Issues</h3> <ul class="space-y-2"> <li>" Asbestos removal: $2,000 - $5,000</li> <li>" Utility relocation: $1,000 - $3,000</li> <li>" Additional damage: 20-30% contingency</li> <li>" Soil problems: $3,000 - $10,000</li> <li>" Code upgrades: $2,000 - $5,000</li> </ul> </div> </div> </div> </section> <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Payment Options and Financing</h2> <div class="grid md:grid-cols-2 gap-8"> <div> <h3 class="text-xl font-semibold mb-4">Payment Methods</h3> <ul class="space-y-2"> <li>" Cash/check: Sometimes 3-5% discount</li> <li>" Credit card: Usually accepted</li> <li>" Bank financing: 6-12% APR</li> <li>" Company financing: 0% for 12-18 months</li> <li>" Insurance claims: Direct billing available</li> </ul> </div> <div> <h3 class="text-xl font-semibold mb-4">DrySpace Financing Options</h3> <ul class="space-y-2"> <li>" No interest for 12 months</li> <li>" Low monthly payments</li> <li>" Quick approval process</li> <li>" No prepayment penalties</li> <li>" Flexible terms available</li> </ul> </div> </div> </div> </section> <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Insurance Coverage Considerations</h2> <div class="grid md:grid-cols-3 gap-6"> <div class="bg-green-50 p-6 rounded"> <h3 class="text-xl font-semibold mb-3">Typically Covered</h3> <ul class="space-y-1"> <li>" Sudden water damage</li> <li>" Storm-related damage</li> <li>" Plumbing failures</li> <li>" Some settlement issues</li> </ul> </div> <div class="bg-red-50 p-6 rounded"> <h3 class="text-xl font-semibold mb-3">Usually Not Covered</h3> <ul class="space-y-1"> <li>" Gradual deterioration</li> <li>" Poor maintenance</li> <li>" Normal settling</li> <li>" Seepage/leakage</li> </ul> </div> <div class="bg-blue-50 p-6 rounded"> <h3 class="text-xl font-semibold mb-3">Maximizing Coverage</h3> <ul class="space-y-1"> <li>" Document everything</li> <li>" Get professional assessment</li> <li>" File claims promptly</li> <li>" Work with approved contractors</li> </ul> </div> </div> </div> </section> <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Cost-Saving Strategies</h2> <div class="grid md:grid-cols-3 gap-6"> <div> <h3 class="text-xl font-semibold mb-3">Preventive Measures</h3> <ul class="space-y-1 text-sm"> <li>" Annual inspections: $300-$500</li> <li>" Early crack repair: Save 70-80%</li> <li>" Proper drainage: Prevent major damage</li> <li>" Regular maintenance: Extend foundation life</li> </ul> </div> <div> <h3 class="text-xl font-semibold mb-3">Smart Timing</h3> <ul class="space-y-1 text-sm"> <li>" Off-season discounts: 10-15% (winter)</li> <li>" Multiple repair bundling: Save 15-20%</li> <li>" Neighborhood group rates: 5-10% off</li> <li>" Early booking: Lock in current prices</li> </ul> </div> <div> <h3 class="text-xl font-semibold mb-3">Value Engineering</h3> <ul class="space-y-1 text-sm"> <li>" Phased repairs: Spread costs</li> <li>" Alternative methods: May save 20-30%</li> <li>" Partial solutions: Address critical issues</li> <li>" DIY prep work: Save on labor</li> </ul> </div> </div> </div> </section> <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">ROI and Property Value</h2> <div class="grid md:grid-cols-2 gap-8"> <div> <h3 class="text-xl font-semibold mb-4">Return on Investment</h3> <ul class="space-y-2"> <li>" Minor repairs: 150-200% ROI</li> <li>" Major repairs: 75-100% ROI</li> <li>" Preventive work: 200-300% ROI</li> <li>" Full replacement: 50-75% ROI</li> </ul> </div> <div> <h3 class="text-xl font-semibold mb-4">Property Value Impact</h3> <ul class="space-y-2"> <li>" Unrepaired damage: -10 to -25% value</li> <li>" Documented repairs: +5 to +10% value</li> <li>" Warranties transfer: Buyer confidence</li> <li>" Professional work: Faster sales</li> </ul> </div> </div> </div> </section> <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Getting Accurate Estimates</h2> <div class="grid md:grid-cols-2 gap-8"> <div> <h3 class="text-xl font-semibold mb-4">What to Expect</h3> <ol class="list-decimal list-inside space-y-2"> <li>Free on-site inspection</li> <li>Detailed written quote</li> <li>Multiple repair options</li> <li>Clear scope of work</li> <li>Warranty information</li> </ol> </div> <div> <h3 class="text-xl font-semibold mb-4">Red Flags to Avoid</h3> <ul class="list-disc list-inside space-y-2"> <li>Extremely low prices</li> <li>High-pressure sales</li> <li>Cash-only deals</li> <li>No written contracts</li> <li>Unclear warranties</li> </ul> </div> </div> </div> </section> <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">2024 Price Trends</h2> <div class="bg-yellow-50 p-6 rounded-lg"> <h3 class="text-xl font-semibold mb-4">Current Market Factors</h3> <ul class="space-y-2"> <li>" Material costs: +8-12% from 2023</li> <li>" Labor shortage: +15-20% rates</li> <li>" Increased demand: Longer wait times</li> <li>" Technology improvements: Some savings</li> <li>" Overall increase: 10-15% annually</li> </ul> </div> </div> </section> ${renderComponent($$result2, "FAQSection", $$FAQSection, { "faqs": faqs })} ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "Get Your Free Estimate", "description": "Don't guess about foundation repair costs. DrySpace Waterproofing provides free detailed inspections, written quotes with options, competitive Toronto pricing, flexible payment plans, and price match guarantee.", "primaryButton": { text: "Call Now: 416-893-5000", link: "tel:4168935000" }, "secondaryButton": { text: "Get Online Quote", link: "/contact" } })} <section class="py-8 bg-gray-100 text-center"> <div class="container mx-auto px-4"> <p class="text-sm italic">
DrySpace Waterproofing - Transparent foundation repair pricing for Toronto homeowners. Quality work at fair prices since 1998.
</p> </div> </section> ` })}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/pricing/foundation-repair-cost-toronto.astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/pricing/foundation-repair-cost-toronto.astro";
const $$url = "/pricing/foundation-repair-cost-toronto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FoundationRepairCostToronto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
