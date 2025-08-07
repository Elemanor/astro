import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, F as Fragment } from './astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { S as ScrollAnimation } from './ScrollAnimation_DokyVXDc.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$ServiceAreas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceAreas;
  const {
    heading = "Serving",
    headingAccent = "Greater Toronto Area",
    subheading = "Fast, reliable waterproofing services across the GTA",
    areas,
    columns = 4,
    variant = "default",
    background = "gray",
    showServiceTime = true,
    mapImage,
    ctaText = "Check Service in Your Area",
    ctaLink = "/service-areas"
  } = Astro2.props;
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-100"
  };
  const gridClasses = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
  };
  const featuredAreas = areas.filter((area) => area.featured);
  const regularAreas = areas.filter((area) => !area.featured);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-12 sm:py-16 lg:py-24 ${backgroundClasses[background]}`, "class")}> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <div class="text-center mb-12"> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-light mb-4"> ${heading} <span class="font-bold">${headingAccent}</span> </h2> ${subheading && renderTemplate`<p class="text-lg text-gray-600"> ${subheading} </p>`} </div> ` })} ${variant === "map" && mapImage ? (
    /* Map variant with areas overlay */
    renderTemplate`<div class="relative max-w-5xl mx-auto"> ${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": 0.2, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <img${addAttribute(mapImage, "src")} alt="Service area map" class="w-full rounded-lg shadow-lg"> ` })}  ${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": 0.3, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2"> ${areas.map((area) => renderTemplate`<div class="flex items-center gap-2 text-sm"> <svg class="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path> </svg> <span class="text-gray-700">${area.name}</span> </div>`)} </div> ` })} </div>`
  ) : variant === "badges" ? (
    /* Badges variant - compact pills */
    renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${featuredAreas.length > 0 && renderTemplate`<div class="mb-8"> <p class="text-center text-gray-600 mb-4 font-medium">Primary Service Areas</p> <div class="flex flex-wrap justify-center gap-3"> ${featuredAreas.map((area, index) => renderTemplate`${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "delay": index * 0.05, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate`${area.link ? renderTemplate`<a${addAttribute(area.link, "href")} class="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"> ${area.name} <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a>` : renderTemplate`<span class="bg-primary text-white px-6 py-3 rounded-full font-medium"> ${area.name} </span>`}` })}`)} </div> </div>`}<div class="flex flex-wrap justify-center gap-2"> ${regularAreas.map((area, index) => renderTemplate`${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.02, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate`${area.link ? renderTemplate`<a${addAttribute(area.link, "href")} class="bg-white text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-50 hover:shadow-md transition-all"> ${area.name} </a>` : renderTemplate`<span class="bg-white text-gray-700 px-4 py-2 rounded-full text-sm"> ${area.name} </span>`}` })}`)} </div> ` })}`
  ) : variant === "minimal" ? (
    /* Minimal variant - simple text list */
    renderTemplate`<div class="max-w-4xl mx-auto"> <div${addAttribute(`grid ${gridClasses[columns]} gap-2 text-center`, "class")}> ${areas.map((area, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.03, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate`${area.link ? renderTemplate`<a${addAttribute(area.link, "href")} class="text-gray-700 hover:text-primary transition-colors"> ${area.name} </a>` : renderTemplate`<span class="text-gray-700">${area.name}</span>`}` })}`)} </div> </div>`
  ) : variant === "cards" ? (
    /* Cards variant with more details */
    renderTemplate`<div${addAttribute(`grid ${gridClasses[columns]} gap-6`, "class")}> ${areas.map((area, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.05, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate`${area.link ? renderTemplate`<a${addAttribute(area.link, "href")}${addAttribute(`bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 ${area.featured ? "ring-2 ring-primary" : ""}`, "class")}> <h3 class="font-semibold text-lg mb-1">${area.name}</h3> ${area.postalCode && renderTemplate`<p class="text-sm text-gray-600 mb-2">${area.postalCode}</p>`} ${showServiceTime && area.serviceTime && renderTemplate`<p class="text-sm text-primary font-medium">${area.serviceTime}</p>`} ${area.featured && renderTemplate`<span class="inline-block mt-2 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
Priority Service
</span>`} </a>` : renderTemplate`<div${addAttribute(`bg-white rounded-lg shadow-lg p-6 text-center ${area.featured ? "ring-2 ring-primary" : ""}`, "class")}> <h3 class="font-semibold text-lg mb-1">${area.name}</h3> ${area.postalCode && renderTemplate`<p class="text-sm text-gray-600 mb-2">${area.postalCode}</p>`} ${showServiceTime && area.serviceTime && renderTemplate`<p class="text-sm text-primary font-medium">${area.serviceTime}</p>`} ${area.featured && renderTemplate`<span class="inline-block mt-2 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
Priority Service
</span>`} </div>`}` })}`)} </div>`
  ) : (
    /* Default variant */
    renderTemplate`<div${addAttribute(`grid ${gridClasses[columns]} gap-4`, "class")}> ${areas.map((area, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.05, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate`${area.link ? renderTemplate`<a${addAttribute(area.link, "href")}${addAttribute(`bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow ${area.featured ? "ring-2 ring-primary shadow-md" : ""}`, "class")}> <h3 class="font-semibold">${area.name}</h3> ${showServiceTime && area.serviceTime && renderTemplate`<p class="text-sm text-gray-600 mt-1">${area.serviceTime}</p>`} </a>` : renderTemplate`<div${addAttribute(`bg-white rounded-lg p-4 text-center ${area.featured ? "ring-2 ring-primary shadow-md" : ""}`, "class")}> <h3 class="font-semibold">${area.name}</h3> ${showServiceTime && area.serviceTime && renderTemplate`<p class="text-sm text-gray-600 mt-1">${area.serviceTime}</p>`} </div>`}` })}`)} </div>`
  )}  ${ctaText && ctaLink && renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": 0.5, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <div class="text-center mt-12"> <p class="text-gray-600 mb-4">Don't see your area listed?</p> <a${addAttribute(ctaLink, "href")} class="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"> ${ctaText} <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> ` })}`} </div> </section>`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ServiceAreas.astro", void 0);

export { $$ServiceAreas as $ };
