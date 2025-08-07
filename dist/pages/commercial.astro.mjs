import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dgea6w5L.mjs';
import { S as ScrollAnimation } from '../chunks/ScrollAnimation_DokyVXDc.mjs';
export { renderers } from '../renderers.mjs';

const $$Commercial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Commercial Waterproofing Toronto - DrySpace", "description": "Professional commercial waterproofing services in Toronto. Protect your business property with industrial-grade solutions. Licensed & insured. Call (437) 545-0067" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="container mx-auto px-4"> <!-- Hero Section --> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-12"> <div class="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"> <span>🏢</span> Commercial & Industrial Solutions
</div> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
Commercial Waterproofing Services
</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Protect your commercial property with industrial-grade waterproofing solutions designed for Toronto businesses
</p> </div> ` })} <!-- Trust Badges --> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"> ${[
    { icon: "\u{1F3D7}\uFE0F", text: "500+ Commercial Projects" },
    { icon: "\u{1F4CB}", text: "Licensed & Insured" },
    { icon: "\u26A1", text: "Minimal Disruption" },
    { icon: "\u{1F6E1}\uFE0F", text: "25-Year Warranty" }
  ].map((badge, index) => renderTemplate`${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="bg-gray-50 rounded-lg p-4 text-center"> <div class="text-2xl mb-2">${badge.icon}</div> <p class="text-sm font-semibold text-gray-700">${badge.text}</p> </div> ` })}`)} </div> <!-- Commercial Services --> <div class="mb-16"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Our Commercial Services</h2> ` })} <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${[
    {
      icon: "\u{1F3E2}",
      title: "Office Buildings",
      features: [
        "Parking garage waterproofing",
        "Foundation protection",
        "Elevator pit waterproofing",
        "Plaza deck systems"
      ]
    },
    {
      icon: "\u{1F3EC}",
      title: "Retail Spaces",
      features: [
        "Below-grade waterproofing",
        "Loading dock protection",
        "Storage area solutions",
        "Customer area protection"
      ]
    },
    {
      icon: "\u{1F3ED}",
      title: "Industrial Facilities",
      features: [
        "Warehouse floor systems",
        "Chemical-resistant coatings",
        "Equipment pit protection",
        "Process area waterproofing"
      ]
    },
    {
      icon: "\u{1F3E5}",
      title: "Healthcare Facilities",
      features: [
        "Critical area protection",
        "Sterile environment solutions",
        "Equipment room waterproofing",
        "24/7 emergency response"
      ]
    },
    {
      icon: "\u{1F3EB}",
      title: "Educational Institutions",
      features: [
        "Classroom protection",
        "Gymnasium waterproofing",
        "Library preservation",
        "Summer break scheduling"
      ]
    },
    {
      icon: "\u{1F3E8}",
      title: "Multi-Unit Residential",
      features: [
        "Parking garage systems",
        "Balcony waterproofing",
        "Common area protection",
        "Unit-by-unit solutions"
      ]
    }
  ].map((service, index) => renderTemplate`${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"> <div class="text-4xl mb-4">${service.icon}</div> <h3 class="text-xl font-bold text-gray-900 mb-4">${service.title}</h3> <ul class="space-y-2"> ${service.features.map((feature) => renderTemplate`<li class="flex items-start gap-2 text-sm text-gray-700"> <svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${feature} </li>`)} </ul> </div> ` })}`)} </div> </div> <!-- Commercial Process --> <div class="bg-gray-50 rounded-xl p-8 md:p-12 mb-16"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Our Commercial Process</h2> ` })} <div class="grid md:grid-cols-4 gap-6"> ${[
    { step: "1", title: "Consultation", desc: "Free property assessment and custom proposal" },
    { step: "2", title: "Planning", desc: "Minimize disruption with detailed scheduling" },
    { step: "3", title: "Implementation", desc: "Professional installation by certified teams" },
    { step: "4", title: "Warranty", desc: "25-year protection with maintenance programs" }
  ].map((item, index) => renderTemplate`${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="text-center"> <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"> ${item.step} </div> <h3 class="font-bold mb-2">${item.title}</h3> <p class="text-sm text-gray-600">${item.desc}</p> </div> ` })}`)} </div> </div> <!-- Why Choose Us --> <div class="mb-16"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Why Toronto Businesses Choose DrySpace</h2> ` })} <div class="grid md:grid-cols-2 gap-8"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeLeft", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div> <h3 class="text-xl font-bold text-gray-900 mb-4">Minimize Business Disruption</h3> <ul class="space-y-3"> <li class="flex items-start gap-3"> <span class="text-primary text-xl">✓</span> <div> <strong>Flexible Scheduling</strong> - Nights, weekends, and holidays available
</div> </li> <li class="flex items-start gap-3"> <span class="text-primary text-xl">✓</span> <div> <strong>Phased Approach</strong> - Keep your business operational during work
</div> </li> <li class="flex items-start gap-3"> <span class="text-primary text-xl">✓</span> <div> <strong>Fast Completion</strong> - Efficient crews minimize project timeline
</div> </li> </ul> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeRight", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div> <h3 class="text-xl font-bold text-gray-900 mb-4">Commercial-Grade Solutions</h3> <ul class="space-y-3"> <li class="flex items-start gap-3"> <span class="text-primary text-xl">✓</span> <div> <strong>Industrial Materials</strong> - Heavy-duty systems for commercial use
</div> </li> <li class="flex items-start gap-3"> <span class="text-primary text-xl">✓</span> <div> <strong>Code Compliance</strong> - Meet all commercial building requirements
</div> </li> <li class="flex items-start gap-3"> <span class="text-primary text-xl">✓</span> <div> <strong>Long-Term Protection</strong> - 25-year warranty on all work
</div> </li> </ul> </div> ` })} </div> </div> <!-- Commercial Clients --> <div class="bg-primary text-white rounded-xl p-8 mb-16"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-bold mb-6 text-center">Trusted by Toronto Businesses</h2> <p class="text-center mb-8 opacity-90">
We've protected over 500 commercial properties across the GTA
</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"> <div class="bg-white/10 rounded-lg p-4"> <div class="text-3xl font-bold">50+</div> <div class="text-sm">Office Buildings</div> </div> <div class="bg-white/10 rounded-lg p-4"> <div class="text-3xl font-bold">120+</div> <div class="text-sm">Retail Spaces</div> </div> <div class="bg-white/10 rounded-lg p-4"> <div class="text-3xl font-bold">80+</div> <div class="text-sm">Industrial Sites</div> </div> <div class="bg-white/10 rounded-lg p-4"> <div class="text-3xl font-bold">250+</div> <div class="text-sm">Multi-Unit Buildings</div> </div> </div> ` })} </div> <!-- CTA Section --> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="text-center bg-gray-100 rounded-xl p-8"> <h2 class="text-3xl font-bold text-gray-900 mb-4">
Protect Your Commercial Property
</h2> <p class="text-xl text-gray-600 mb-6">
Get a free assessment and custom proposal for your business
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="tel:4375450067" class="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
Call Now: (437) 545-0067
</a> <a href="/contact" class="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
Request Commercial Quote
</a> </div> </div> ` })} </div> </section> ` })}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/commercial.astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/commercial.astro";
const $$url = "/commercial";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Commercial,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
