import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dgea6w5L.mjs';
import { S as ScrollAnimation } from '../chunks/ScrollAnimation_DokyVXDc.mjs';
export { renderers } from '../renderers.mjs';

const $$Process = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Our Process - DrySpace Waterproofing Toronto", "description": "Learn about our proven 6-step waterproofing process. From inspection to lifetime warranty, see how we protect Toronto homes." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 bg-gradient-to-b from-white to-gray-50"> <div class="container mx-auto px-4"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
Our Proven Waterproofing Process
</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
With over 15 years of experience and 5,000+ homes protected, we've perfected our process to deliver lasting results
</p> </div> ` })} <!-- Process Steps --> <div class="max-w-5xl mx-auto"> ${[
    {
      step: "1",
      title: "Free Inspection & Assessment",
      description: "Our certified inspectors thoroughly examine your basement, foundation, and drainage systems.",
      features: ["Moisture reading analysis", "Foundation crack mapping", "Drainage evaluation", "Digital photo documentation"],
      icon: "\u{1F50D}",
      time: "45-60 minutes"
    },
    {
      step: "2",
      title: "Custom Solution Design",
      description: "We create a tailored waterproofing plan specific to your home's needs and budget.",
      features: ["Detailed written quote", "Multiple solution options", "3D drainage diagrams", "Warranty details"],
      icon: "\u{1F4CB}",
      time: "Same day"
    },
    {
      step: "3",
      title: "Preparation & Protection",
      description: "We protect your property and prepare the work area for minimal disruption.",
      features: ["Floor & wall protection", "Furniture moving assistance", "Dust control measures", "Clear access paths"],
      icon: "\u{1F6E1}\uFE0F",
      time: "Day 1"
    },
    {
      step: "4",
      title: "Professional Installation",
      description: "Our certified technicians install your waterproofing system with precision.",
      features: ["Licensed technicians", "Quality materials only", "Daily progress updates", "Clean work environment"],
      icon: "\u{1F528}",
      time: "2-5 days"
    },
    {
      step: "5",
      title: "Quality Testing & Inspection",
      description: "We thoroughly test all systems and ensure everything meets our high standards.",
      features: ["Water flow testing", "Pump operation verification", "Seal integrity checks", "Final moisture readings"],
      icon: "\u2705",
      time: "Final day"
    },
    {
      step: "6",
      title: "Lifetime Warranty & Support",
      description: "Your protection continues with our comprehensive warranty and ongoing support.",
      features: ["Lifetime material warranty", "25-year labor warranty", "Annual inspections", "24/7 emergency support"],
      icon: "\u{1F3C6}",
      time: "Forever"
    }
  ].map((step, index) => renderTemplate`${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow"> <div class="flex items-start gap-6"> <div class="flex-shrink-0"> <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold"> ${step.step} </div> </div> <div class="flex-grow"> <div class="flex items-center justify-between mb-3"> <h3 class="text-2xl font-bold text-gray-900 flex items-center gap-3"> <span class="text-3xl">${step.icon}</span> ${step.title} </h3> <span class="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600"> ${step.time} </span> </div> <p class="text-gray-600 mb-4">${step.description}</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-2"> ${step.features.map((feature) => renderTemplate`<div class="flex items-center gap-2"> <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-sm text-gray-700">${feature}</span> </div>`)} </div> </div> </div> </div> ` })}`)} </div> <!-- CTA Section --> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="text-center mt-16 bg-primary text-white rounded-xl p-8"> <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2> <p class="text-xl mb-6 opacity-90">
Join over 5,000 Toronto homeowners who trust DrySpace
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="tel:4375450067" class="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
Call Now: (437) 545-0067
</a> <a href="/contact" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
Schedule Free Inspection
</a> </div> </div> ` })} </div> </section> ` })}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/process.astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/process.astro";
const $$url = "/process";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Process,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
