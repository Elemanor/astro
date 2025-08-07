import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { S as ScrollAnimation } from './ScrollAnimation_DokyVXDc.mjs';
/* empty css                                          */

const $$Astro = createAstro("http://localhost:4321");
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  const {
    heading = "Common",
    headingAccent = "Questions",
    subheading = "Get answers to your frequently asked questions",
    faqs,
    variant = "default",
    showImages = false,
    showCategories = false,
    expandedByDefault = false,
    ctaText = "Have more questions?",
    ctaLink = "/contact",
    background = "gray"
  } = Astro2.props;
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50"
  };
  const groupedFAQs = showCategories && variant === "grouped" ? faqs.reduce((acc, faq) => {
    const category = faq.category || "General";
    if (!acc[category]) acc[category] = [];
    acc[category].push(faq);
    return acc;
  }, {}) : null;
  const faqsWithIds = faqs.map((faq, index) => ({
    ...faq,
    id: `faq-${index}`
  }));
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-12 sm:py-16 lg:py-24 ${backgroundClasses[background]}`, "class")} data-astro-cid-al2ca2vr> <div${addAttribute(`${variant === "two-column" ? "max-w-7xl" : "max-w-4xl"} mx-auto px-4 sm:px-6 lg:px-8`, "class")} data-astro-cid-al2ca2vr> ${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-al2ca2vr": true }, { "default": ($$result2) => renderTemplate` <div class="text-center mb-8 sm:mb-12" data-astro-cid-al2ca2vr> <h2 class="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-light mb-4" data-astro-cid-al2ca2vr> ${heading} <span class="font-semibold" data-astro-cid-al2ca2vr>${headingAccent}</span> </h2> ${subheading && renderTemplate`<p class="text-gray-600 max-w-2xl mx-auto" data-astro-cid-al2ca2vr> ${subheading} </p>`} </div> ` })} ${variant === "grouped" && groupedFAQs ? (
    /* Grouped variant - FAQs organized by category */
    renderTemplate`<div class="space-y-12" data-astro-cid-al2ca2vr> ${Object.entries(groupedFAQs).map(([category, categoryFaqs], categoryIndex) => renderTemplate`<div${addAttribute(category, "key")} data-astro-cid-al2ca2vr> ${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": categoryIndex * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-al2ca2vr": true }, { "default": ($$result2) => renderTemplate` <h3 class="text-xl font-semibold mb-6 text-gray-900" data-astro-cid-al2ca2vr>${category}</h3> ` })} <div class="space-y-4" data-astro-cid-al2ca2vr> ${categoryFaqs.map((faq, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": categoryIndex * 0.1 + index * 0.05, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-al2ca2vr": true }, { "default": ($$result2) => renderTemplate` <details class="group bg-white rounded-lg shadow-sm" data-astro-cid-al2ca2vr> <summary class="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors" data-astro-cid-al2ca2vr> <span class="text-base sm:text-lg font-medium pr-4" data-astro-cid-al2ca2vr>${faq.question}</span> <svg class="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-al2ca2vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-al2ca2vr></path> </svg> </summary> <div class="px-6 pb-4" data-astro-cid-al2ca2vr> <p class="text-gray-600 leading-relaxed" data-astro-cid-al2ca2vr>${faq.answer}</p> </div> </details> ` })}`)} </div> </div>`)} </div>`
  ) : variant === "cards" ? (
    /* Cards variant - each FAQ as a card */
    renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 gap-6" data-astro-cid-al2ca2vr> ${faqsWithIds.map((faq, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-al2ca2vr": true }, { "default": ($$result2) => renderTemplate` <div class="bg-white rounded-lg shadow-lg p-6 h-full" data-astro-cid-al2ca2vr> <h3 class="text-lg font-semibold mb-3 text-gray-900" data-astro-cid-al2ca2vr>${faq.question}</h3> <p class="text-gray-600" data-astro-cid-al2ca2vr>${faq.answer}</p> ${showCategories && faq.category && renderTemplate`<span class="inline-block mt-4 text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full" data-astro-cid-al2ca2vr> ${faq.category} </span>`} </div> ` })}`)} </div>`
  ) : variant === "minimal" ? (
    /* Minimal variant - simple Q&A format */
    renderTemplate`<div class="space-y-8" data-astro-cid-al2ca2vr> ${faqsWithIds.map((faq, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.05, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-al2ca2vr": true }, { "default": ($$result2) => renderTemplate` <div data-astro-cid-al2ca2vr> <h3 class="text-lg font-semibold mb-2 text-gray-900" data-astro-cid-al2ca2vr>${faq.question}</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-al2ca2vr>${faq.answer}</p> </div> ` })}`)} </div>`
  ) : variant === "two-column" ? (
    /* Two column variant - FAQ with optional images */
    renderTemplate`<div class="space-y-6" data-astro-cid-al2ca2vr> ${faqsWithIds.map((faq, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-al2ca2vr": true }, { "default": ($$result2) => renderTemplate` <details class="group bg-white rounded-lg shadow-sm overflow-hidden" data-astro-cid-al2ca2vr> <summary class="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors" data-astro-cid-al2ca2vr> <span class="text-base sm:text-lg font-medium pr-4" data-astro-cid-al2ca2vr>${faq.question}</span> <svg class="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-al2ca2vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-al2ca2vr></path> </svg> </summary> <div class="px-6 pb-4" data-astro-cid-al2ca2vr> <div${addAttribute(`${showImages && faq.image ? "grid gap-4 sm:grid-cols-2" : ""}`, "class")} data-astro-cid-al2ca2vr> <div class="prose prose-sm max-w-none" data-astro-cid-al2ca2vr> <p class="text-gray-600 leading-relaxed" data-astro-cid-al2ca2vr>${faq.answer}</p> </div> ${showImages && faq.image && renderTemplate`<div class="relative h-48 sm:h-full min-h-[12rem] rounded-lg overflow-hidden bg-gray-100" data-astro-cid-al2ca2vr> <img${addAttribute(faq.image, "src")} alt="" class="w-full h-full object-cover" loading="lazy" data-astro-cid-al2ca2vr> </div>`} </div> </div> </details> ` })}`)} </div>`
  ) : (
    /* Default variant - accordion style using details/summary */
    renderTemplate`<div class="space-y-4" data-astro-cid-al2ca2vr> ${faqsWithIds.map((faq, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.05, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-al2ca2vr": true }, { "default": ($$result2) => renderTemplate` <details class="group bg-white rounded-lg shadow-sm"${addAttribute(expandedByDefault, "open")} data-astro-cid-al2ca2vr> <summary class="flex items-center justify-between px-4 sm:px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors" data-astro-cid-al2ca2vr> <span class="text-base sm:text-lg font-medium pr-4" data-astro-cid-al2ca2vr>${faq.question}</span> <svg class="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-al2ca2vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-al2ca2vr></path> </svg> </summary> <div class="px-4 sm:px-6 pb-4" data-astro-cid-al2ca2vr> <p class="text-gray-600 leading-relaxed" data-astro-cid-al2ca2vr>${faq.answer}</p> </div> </details> ` })}`)} </div>`
  )}  ${ctaText && ctaLink && renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": 0.5, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-al2ca2vr": true }, { "default": ($$result2) => renderTemplate` <div class="mt-8 text-center" data-astro-cid-al2ca2vr> <p class="text-gray-600 mb-4" data-astro-cid-al2ca2vr>${ctaText}</p> <a${addAttribute(ctaLink, "href")} class="inline-flex items-center text-primary hover:text-primary/80 font-medium" data-astro-cid-al2ca2vr>
Contact our experts
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-al2ca2vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-al2ca2vr></path> </svg> </a> </div> ` })}`} </div> </section> `;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/FAQ.astro", void 0);

export { $$FAQ as $ };
