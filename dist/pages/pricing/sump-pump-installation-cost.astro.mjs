import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dgea6w5L.mjs';
import { $ as $$HeroSection, a as $$FAQSection } from '../../chunks/FAQSection_kT1TEjBS.mjs';
import { $ as $$CTASection } from '../../chunks/CTASection_C6tRvETi.mjs';
export { renderers } from '../../renderers.mjs';

const $$SumpPumpInstallationCost = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Sump Pump Installation Cost Guide | 2024 Toronto GTA Pricing";
  const pageDescription = "Complete sump pump installation cost guide for Toronto & GTA. Detailed pricing for pumps, backup systems, installation, and maintenance. Free quotes: 416-893-5000.";
  const quickSummary = [
    {
      level: "Basic Installation",
      price: "$1,500 - $2,500",
      features: [
        "Standard 1/3 HP pump",
        "Basic pit and lid",
        "Standard discharge",
        "Professional installation"
      ]
    },
    {
      level: "Standard System",
      price: "$2,500 - $3,500",
      features: [
        "Quality 1/2 HP pump",
        "Battery backup system",
        "Improved discharge",
        "Code compliance"
      ]
    },
    {
      level: "Premium Installation",
      price: "$3,500 - $6,000",
      features: [
        "High-capacity pump",
        "Dual pump system",
        "Smart monitoring",
        "Complete waterproofing"
      ]
    }
  ];
  const pumpTypes = [
    {
      category: "Primary Pumps",
      pumps: [
        {
          type: "1/3 HP Submersible",
          price: "$200 - $400",
          specs: [
            "Flow rate: 2,200 - 3,000 GPH",
            "Suitable for: Average homes",
            "Lifespan: 7-10 years"
          ]
        },
        {
          type: "1/2 HP Submersible",
          price: "$300 - $600",
          specs: [
            "Flow rate: 3,200 - 4,200 GPH",
            "Suitable for: Larger homes",
            "Lifespan: 10-15 years"
          ]
        },
        {
          type: "3/4 HP Submersible",
          price: "$400 - $800",
          specs: [
            "Flow rate: 4,500 - 5,500 GPH",
            "Suitable for: High water tables",
            "Lifespan: 10-15 years"
          ]
        },
        {
          type: "1 HP Commercial Grade",
          price: "$600 - $1,200",
          specs: [
            "Flow rate: 5,500 - 6,500 GPH",
            "Suitable for: Severe conditions",
            "Lifespan: 15-20 years"
          ]
        }
      ]
    },
    {
      category: "Pedestal Pumps",
      pumps: [
        {
          type: "1/3 HP Pedestal",
          price: "$150 - $300",
          specs: []
        },
        {
          type: "1/2 HP Pedestal",
          price: "$200 - $400",
          specs: []
        }
      ],
      notes: [
        "Advantages: Longer lifespan, easier maintenance",
        "Disadvantages: Noisier operation"
      ]
    }
  ];
  const backupSystems = [
    {
      type: "Basic Battery Backup",
      price: "$400 - $700",
      features: [
        "Maintenance battery",
        "3-5 hour runtime",
        "Manual monitoring"
      ]
    },
    {
      type: "Premium Battery Backup",
      price: "$700 - $1,200",
      features: [
        "AGM sealed battery",
        "8-12 hour runtime",
        "Automatic testing"
      ]
    },
    {
      type: "Dual Battery System",
      price: "$1,200 - $2,000",
      features: [
        "Extended runtime (24+ hours)",
        "Redundant protection",
        "Smart monitoring"
      ]
    },
    {
      type: "Water-Powered Backup",
      price: "$300 - $600",
      features: [
        "Requires city water",
        "No battery maintenance",
        "Unlimited runtime",
        "Higher water bills during use"
      ]
    }
  ];
  const completePackages = [
    {
      name: "Basic Protection Package",
      price: "$1,500 - $2,000",
      includes: [
        "1/3 HP submersible pump",
        'Standard 18" pit',
        "Basic discharge system",
        "Professional installation",
        "2-year warranty"
      ]
    },
    {
      name: "Standard Protection Package",
      price: "$2,500 - $3,500",
      includes: [
        "1/2 HP submersible pump",
        "Battery backup system",
        "Sealed pit system",
        "Freeze-resistant discharge",
        "5-year warranty"
      ]
    },
    {
      name: "Premium Protection Package",
      price: "$3,500 - $5,000",
      includes: [
        "High-capacity pump",
        "Premium battery backup",
        "Smart monitoring",
        "Annual maintenance",
        "Lifetime warranty"
      ]
    },
    {
      name: "Ultimate Flood Protection",
      price: "$5,000 - $8,000",
      includes: [
        "Dual pump system",
        "Triple redundancy",
        "Interior drainage",
        "Complete waterproofing",
        "Comprehensive warranty"
      ]
    }
  ];
  const faqs = [
    {
      question: "What's the average sump pump installation cost?",
      answer: "Most Toronto homeowners spend $2,500-$3,500 for a quality system with battery backup and professional installation."
    },
    {
      question: "Can I install a sump pump myself?",
      answer: "While possible, professional installation ensures proper sizing, placement, and code compliance, plus warranty protection."
    },
    {
      question: "How long does installation take?",
      answer: "Standard installations complete in 4-8 hours. Complex situations may require 1-2 days."
    },
    {
      question: "Do I need a backup system?",
      answer: "Yes - power outages often occur during storms when pumps are needed most. Battery backup is essential protection."
    },
    {
      question: "Are sump pumps tax deductible?",
      answer: "Some installations may qualify for home improvement credits. Consult your tax advisor for specific situations."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "Sump Pump Installation Cost: 2024 Complete Pricing Guide", "subtitle": "Understanding Sump Pump Installation Costs - A critical investment in protecting your home from basement flooding", "ctaText": "Get Free Quote", "ctaLink": "tel:4168935000", "image": "/pics/work/sump-pump-installation.jpg" })} ${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Quick Cost Summary</h2> <div class="grid md:grid-cols-3 gap-6"> ${quickSummary.map((item) => renderTemplate`<div class="bg-gray-50 p-6 rounded-lg"> <h3 class="text-xl font-semibold mb-2">${item.level}</h3> <p class="text-2xl font-bold text-blue-600 mb-4">${item.price}</p> <ul class="space-y-1"> ${item.features.map((feature) => renderTemplate`<li class="text-sm">" ${feature}</li>`)} </ul> </div>`)} </div> <p class="mt-8 text-lg">
Installing a sump pump system is a critical investment in protecting your home from basement flooding. 
        This comprehensive guide breaks down all costs associated with sump pump installation in Toronto and the GTA, 
        helping you budget accurately for this essential home protection.
</p> </div> </section> <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Detailed Cost Breakdown</h2> <div class="mb-12"> <h3 class="text-2xl font-semibold mb-6">1. Sump Pump Unit Costs</h3> ${pumpTypes.map((category) => renderTemplate`<div class="mb-8"> <h4 class="text-xl font-semibold mb-4">${category.category}:</h4> <div class="grid md:grid-cols-2 gap-4"> ${category.pumps.map((pump) => renderTemplate`<div class="bg-white p-4 rounded shadow"> <div class="flex justify-between items-start mb-2"> <h5 class="font-semibold">${pump.type}</h5> <span class="text-blue-600 font-bold">${pump.price}</span> </div> ${pump.specs && pump.specs.length > 0 && renderTemplate`<ul class="text-sm space-y-1"> ${pump.specs.map((spec) => renderTemplate`<li>" ${spec}</li>`)} </ul>`} </div>`)} </div> ${category.notes && renderTemplate`<div class="mt-2 text-sm text-gray-600"> ${category.notes.map((note) => renderTemplate`<p>" ${note}</p>`)} </div>`} </div>`)} </div> <div class="mb-12"> <h3 class="text-2xl font-semibold mb-6">2. Backup System Costs</h3> <div class="grid md:grid-cols-2 gap-6"> ${backupSystems.map((system) => renderTemplate`<div class="bg-white p-6 rounded shadow"> <h4 class="font-semibold mb-2">${system.type}</h4> <p class="text-xl font-bold text-blue-600 mb-3">${system.price}</p> <ul class="text-sm space-y-1"> ${system.features.map((feature) => renderTemplate`<li>" ${feature}</li>`)} </ul> </div>`)} </div> </div> <div class="mb-12"> <h3 class="text-2xl font-semibold mb-6">3. Installation Components</h3> <div class="grid md:grid-cols-3 gap-6"> <div class="bg-white p-6 rounded shadow"> <h4 class="font-semibold mb-3">Sump Pit/Basin</h4> <ul class="text-sm space-y-1"> <li>" Standard 18" pit: $100 - $200</li> <li>" Heavy-duty 24" pit: $150 - $300</li> <li>" Sealed lid system: $75 - $150</li> <li>" Radon mitigation lid: $150 - $250</li> </ul> </div> <div class="bg-white p-6 rounded shadow"> <h4 class="font-semibold mb-3">Discharge System</h4> <ul class="text-sm space-y-1"> <li>" Check valve: $25 - $50</li> <li>" PVC piping: $10 - $15 per foot</li> <li>" Freeze protection: $50 - $100</li> <li>" Discharge hose: $30 - $60</li> </ul> </div> <div class="bg-white p-6 rounded shadow"> <h4 class="font-semibold mb-3">Electrical Work</h4> <ul class="text-sm space-y-1"> <li>" Dedicated circuit: $300 - $600</li> <li>" GFCI outlet: $150 - $250</li> <li>" Electrical permit: $100 - $200</li> <li>" Panel upgrade (if needed): $1,000 - $2,000</li> </ul> </div> </div> </div> <div class="mb-12"> <h3 class="text-2xl font-semibold mb-6">4. Labor Costs</h3> <div class="grid md:grid-cols-2 gap-6"> <div class="bg-white p-6 rounded shadow"> <h4 class="font-semibold mb-3">Basic Installation Labor</h4> <ul class="text-sm space-y-1 mb-3"> <li>" Pit excavation: $300 - $500</li> <li>" Pump installation: $200 - $400</li> <li>" Discharge routing: $200 - $400</li> <li>" Testing/commissioning: $100 - $200</li> </ul> <p class="font-semibold">Total Basic Labor: $800 - $1,500</p> </div> <div class="bg-white p-6 rounded shadow"> <h4 class="font-semibold mb-3">Complex Installation Labor</h4> <ul class="text-sm space-y-1 mb-3"> <li>" Concrete breaking: $400 - $800</li> <li>" Deep excavation: $500 - $1,000</li> <li>" Extended discharge: $300 - $600</li> <li>" Multiple pumps: $400 - $800</li> </ul> <p class="font-semibold">Total Complex Labor: $1,600 - $3,200</p> </div> </div> </div> </div> </section> <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Factors Affecting Installation Cost</h2> <div class="grid md:grid-cols-3 gap-8"> <div> <h3 class="text-xl font-semibold mb-4">Property Conditions</h3> <div class="space-y-4"> <div> <h4 class="font-semibold">Basement Type:</h4> <ul class="text-sm space-y-1"> <li>" Finished basement: +$500 - $1,000</li> <li>" Concrete thickness >6": +$300 - $500</li> <li>" Limited access: +$200 - $400</li> <li>" Restoration needed: +$500 - $2,000</li> </ul> </div> <div> <h4 class="font-semibold">Soil Conditions:</h4> <ul class="text-sm space-y-1"> <li>" Rocky soil: +$400 - $800</li> <li>" High water table: +$300 - $600</li> <li>" Clay soil: Standard pricing</li> <li>" Sandy soil: -$100 - $200</li> </ul> </div> </div> </div> <div> <h3 class="text-xl font-semibold mb-4">System Complexity</h3> <div class="space-y-4"> <div> <h4 class="font-semibold">Additional Features:</h4> <ul class="text-sm space-y-1"> <li>" Smart monitoring: +$200 - $500</li> <li>" Wi-Fi connectivity: +$150 - $300</li> <li>" High water alarms: +$100 - $200</li> <li>" Maintenance contracts: +$200 - $400/year</li> </ul> </div> <div> <h4 class="font-semibold">Multiple Pump Systems:</h4> <ul class="text-sm space-y-1"> <li>" Dual primary pumps: +$800 - $1,500</li> <li>" Separate backup pit: +$1,000 - $2,000</li> <li>" Commercial controls: +$500 - $1,000</li> </ul> </div> </div> </div> <div> <h3 class="text-xl font-semibold mb-4">Geographic Pricing</h3> <h4 class="font-semibold">GTA Regional Variations:</h4> <ul class="text-sm space-y-1"> <li>" Downtown Toronto: +15-20%</li> <li>" Mississauga/Brampton: Standard</li> <li>" Oakville/Burlington: +10-15%</li> <li>" Vaughan/Richmond Hill: +5-10%</li> <li>" Scarborough/Etobicoke: Standard</li> </ul> </div> </div> </div> </section> <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Complete System Packages</h2> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${completePackages.map((pkg) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow"> <h3 class="text-lg font-semibold mb-2">${pkg.name}</h3> <p class="text-2xl font-bold text-blue-600 mb-4">${pkg.price}</p> <h4 class="font-semibold mb-2">Includes:</h4> <ul class="text-sm space-y-1"> ${pkg.includes.map((item) => renderTemplate`<li>" ${item}</li>`)} </ul> </div>`)} </div> </div> </section> <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Long-Term Cost Considerations</h2> <div class="grid md:grid-cols-3 gap-8"> <div class="bg-gray-50 p-6 rounded"> <h3 class="text-xl font-semibold mb-4">Maintenance Costs</h3> <ul class="space-y-2"> <li>" Annual inspection: $150 - $250</li> <li>" Battery replacement: $150 - $300 (every 3-5 years)</li> <li>" Pump replacement: $300 - $800 (every 7-10 years)</li> <li>" Emergency service: $200 - $500 per call</li> </ul> </div> <div class="bg-gray-50 p-6 rounded"> <h3 class="text-xl font-semibold mb-4">Operating Costs</h3> <ul class="space-y-2"> <li>" Electricity: $30 - $60 per year</li> <li>" Water (if water-powered): $50 - $200 per year</li> <li>" Monitoring service: $10 - $20 per month</li> </ul> </div> <div class="bg-gray-50 p-6 rounded"> <h3 class="text-xl font-semibold mb-4">Cost Savings</h3> <ul class="space-y-2"> <li>" Insurance premium reduction: $200 - $500/year</li> <li>" Prevented flood damage: $10,000 - $50,000</li> <li>" Property value increase: 2-5%</li> <li>" Peace of mind: Priceless</li> </ul> </div> </div> </div> </section> <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">DIY vs Professional Installation</h2> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-white p-6 rounded shadow"> <h3 class="text-xl font-semibold mb-4">DIY Costs</h3> <ul class="space-y-2"> <li>" Pump and materials: $500 - $1,000</li> <li>" Tool rental: $100 - $200</li> <li>" Permits: $100 - $200</li> <li>" Your time: 10-20 hours</li> <li>" Risk: No warranty, potential errors</li> </ul> </div> <div class="bg-white p-6 rounded shadow"> <h3 class="text-xl font-semibold mb-4">Professional Benefits</h3> <ul class="space-y-2"> <li>" Proper sizing and placement</li> <li>" Code compliance guaranteed</li> <li>" Full warranty protection</li> <li>" Insurance accepted</li> <li>" Emergency support</li> </ul> </div> </div> </div> </section> <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Financing Options</h2> <div class="grid md:grid-cols-2 gap-8"> <div> <h3 class="text-xl font-semibold mb-4">Payment Methods</h3> <ul class="space-y-2"> <li>" Cash/check discount: 3-5%</li> <li>" Credit cards accepted</li> <li>" 12-month no interest</li> <li>" Extended financing available</li> <li>" Insurance direct billing</li> </ul> </div> <div> <h3 class="text-xl font-semibold mb-4">Financial Assistance</h3> <ul class="space-y-2"> <li>" Municipal rebate programs</li> <li>" Flood prevention grants</li> <li>" Insurance incentives</li> <li>" Group discounts available</li> </ul> </div> </div> </div> </section> <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">2024 Market Trends</h2> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-white p-6 rounded shadow"> <h3 class="text-xl font-semibold mb-4">Price Increases</h3> <ul class="space-y-2"> <li>" Equipment costs: +10-15%</li> <li>" Labor rates: +8-12%</li> <li>" Material costs: +5-10%</li> <li>" Overall increase: 10-12% from 2023</li> </ul> </div> <div class="bg-white p-6 rounded shadow"> <h3 class="text-xl font-semibold mb-4">New Technologies</h3> <ul class="space-y-2"> <li>" Smart pump systems</li> <li>" IoT monitoring</li> <li>" Predictive maintenance</li> <li>" Energy efficiency</li> <li>" Longer warranties</li> </ul> </div> </div> </div> </section> ${renderComponent($$result2, "FAQSection", $$FAQSection, { "faqs": faqs })} ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "Schedule Your Free Quote", "description": "Get an accurate sump pump installation quote for your specific needs. DrySpace Waterproofing provides free in-home assessments, multiple system options, competitive pricing, flexible financing, and professional installation.", "primaryButton": { text: "Call Now: 416-893-5000", link: "tel:4168935000" }, "secondaryButton": { text: "Get Online Quote", link: "/contact" } })} <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-8">Related Resources</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <a href="/blog/sump-pump-maintenance-guide-toronto/" class="block p-4 border rounded hover:bg-gray-50"> <h3 class="font-semibold mb-2">Sump Pump Maintenance Guide Toronto</h3> <p class="text-sm text-gray-600">Complete maintenance checklist to protect your investment</p> </a> <a href="/cost/weeping-tile-installation-cost/" class="block p-4 border rounded hover:bg-gray-50"> <h3 class="font-semibold mb-2">Weeping Tile Installation Cost</h3> <p class="text-sm text-gray-600">Essential drainage component pricing</p> </a> <a href="/cost/french-drain-cost-toronto/" class="block p-4 border rounded hover:bg-gray-50"> <h3 class="font-semibold mb-2">French Drain Cost Toronto</h3> <p class="text-sm text-gray-600">Comprehensive drainage solutions</p> </a> <a href="/services/sump-pump-installation/" class="block p-4 border rounded hover:bg-gray-50"> <h3 class="font-semibold mb-2">Professional Sump Pump Installation</h3> <p class="text-sm text-gray-600">Expert installation services</p> </a> <a href="/services/emergency-waterproofing/" class="block p-4 border rounded hover:bg-gray-50"> <h3 class="font-semibold mb-2">Emergency Waterproofing Services</h3> <p class="text-sm text-gray-600">24/7 response when pumps fail</p> </a> <a href="/basement-waterproofing/" class="block p-4 border rounded hover:bg-gray-50"> <h3 class="font-semibold mb-2">Complete Guide to Toronto Basement Waterproofing</h3> <p class="text-sm text-gray-600">Comprehensive foundation protection</p> </a> </div> </div> </section> <section class="py-8 bg-gray-100 text-center"> <div class="container mx-auto px-4"> <p class="text-sm italic">
DrySpace Waterproofing - Transparent sump pump installation pricing for Toronto and GTA homeowners. Protecting basements since 1998.
</p> </div> </section> ` })}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/pricing/sump-pump-installation-cost.astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/pricing/sump-pump-installation-cost.astro";
const $$url = "/pricing/sump-pump-installation-cost";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SumpPumpInstallationCost,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
