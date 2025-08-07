import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, N as Navigation, a as $$StickyCTA } from '../chunks/BaseLayout_Dgea6w5L.mjs';
import { S as ScrollAnimation } from '../chunks/ScrollAnimation_DokyVXDc.mjs';
import { B as Button } from '../chunks/button_DLabDoza.mjs';
import { g as getCollection } from '../chunks/_astro_content_DypdcfYy.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  await getCollection("services");
  const servicesList = [
    {
      title: "Sump Pump Installation",
      description: "Protect your basement from flooding with professional sump pump installation and battery backup systems.",
      price: "From $2,800",
      link: "/services/sump-pump-installation-toronto",
      featured: true,
      icon: "shield"
    },
    {
      title: "Foundation Crack Repair",
      description: "Permanent injection solutions for foundation cracks with lifetime warranty protection.",
      price: "From $500",
      link: "/services/foundation-crack-repair",
      icon: "alert"
    },
    {
      title: "Interior Waterproofing",
      description: "Complete interior drainage systems to keep your basement dry year-round.",
      price: "From $4,000",
      link: "/services/interior-waterproofing",
      icon: "droplet"
    },
    {
      title: "Exterior Waterproofing",
      description: "Comprehensive exterior membrane and drainage solutions for maximum protection.",
      price: "From $8,000",
      link: "/services/exterior-waterproofing",
      icon: "home"
    },
    {
      title: "French Drain Systems",
      description: "Professional French drain installation for effective water management.",
      price: "From $3,000",
      link: "/services/french-drain-systems",
      icon: "drain"
    },
    {
      title: "Basement Leak Repair",
      description: "Fast, reliable solutions for active basement leaks and water seepage.",
      price: "From $800",
      link: "/services/basement-leak-repair",
      icon: "leak"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Waterproofing Services Toronto | DrySpace Professional Solutions", "description": "Complete basement waterproofing services in Toronto & GTA. Foundation crack repair, sump pumps, interior & exterior waterproofing. Lifetime warranty, 24/7 service." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/Navigation", "client:component-export": "Navigation" })}  ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-12 lg:pt-32 lg:pb-20"> <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, black 1px, transparent 1px); background-size: 40px 40px;"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": async ($$result3) => renderTemplate` <div class="text-center max-w-3xl mx-auto"> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
Professional Waterproofing Services in Toronto
</h1> <p class="text-xl text-gray-600 mb-8">
Comprehensive solutions to protect your home from water damage. Lifetime warranties, 24/7 emergency service, and 0% financing available.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result3, "Button", Button, { "size": "lg", "class": "text-lg px-8" }, { "default": async ($$result4) => renderTemplate`
Get Free Assessment
` })} ${renderComponent($$result3, "Button", Button, { "size": "lg", "variant": "outline", "class": "text-lg px-8" }, { "default": async ($$result4) => renderTemplate` <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
(437) 545-0067
` })} </div> </div> ` })} </div> </section>  <section class="py-16 lg:py-24"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${servicesList.map((service, index) => renderTemplate`${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": async ($$result3) => renderTemplate` <a${addAttribute(service.link, "href")}${addAttribute(`block h-full ${service.featured ? "ring-2 ring-primary" : ""}`, "class")}> <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all h-full p-6 relative overflow-hidden"> ${service.featured && renderTemplate`<div class="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-semibold">
Featured
</div>`} <div class="mb-4"> <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-2"> ${service.title} </h3> <p class="text-gray-600 mb-4"> ${service.description} </p> <div class="flex items-center justify-between"> <span class="text-lg font-semibold text-primary"> ${service.price} </span> <span class="text-primary font-medium flex items-center gap-1">
Learn more
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </div> </div> </div> </a> ` })}`)} </div> <!-- Additional Services --> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": async ($$result3) => renderTemplate` <div class="mt-12 bg-gray-50 rounded-lg p-8 text-center"> <h3 class="text-2xl font-bold text-gray-900 mb-4">
Need Something Else?
</h3> <p class="text-gray-600 mb-6">
We offer comprehensive waterproofing solutions including window well installation, basement lowering, and commercial waterproofing services.
</p> ${renderComponent($$result3, "Button", Button, {}, { "default": async ($$result4) => renderTemplate`
Contact Us for Custom Solutions
` })} </div> ` })} </div> </section>  <section class="bg-primary text-white py-16 lg:py-24"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": async ($$result3) => renderTemplate` <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
Why Toronto Chooses DrySpace
</h2> ` })} <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": async ($$result3) => renderTemplate` <div class="text-center"> <div class="text-5xl font-bold mb-2">25+</div> <div class="text-lg">Years of Experience</div> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": 0.2, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": async ($$result3) => renderTemplate` <div class="text-center"> <div class="text-5xl font-bold mb-2">12,847</div> <div class="text-lg">Homes Protected</div> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": 0.3, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": async ($$result3) => renderTemplate` <div class="text-center"> <div class="text-5xl font-bold mb-2">100%</div> <div class="text-lg">Satisfaction Rate</div> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": 0.4, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": async ($$result3) => renderTemplate` <div class="text-center"> <div class="text-5xl font-bold mb-2">24/7</div> <div class="text-lg">Emergency Service</div> </div> ` })} </div> </div> </section> ${renderComponent($$result2, "StickyCTA", $$StickyCTA, {})} ` })}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/services/index.astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
