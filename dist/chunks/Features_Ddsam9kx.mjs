import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, u as unescapeHTML, F as Fragment } from './astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { S as ScrollAnimation } from './ScrollAnimation_DokyVXDc.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Features;
  const {
    heading,
    headingAccent,
    subheading,
    features,
    columns = 3,
    variant = "default",
    background = "white",
    iconColor = "text-primary"
  } = Astro2.props;
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    primary: "bg-primary text-white"
  };
  const gridClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };
  const variantClasses = {
    cards: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"};
  const defaultIcons = [
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c-1.8 4-2 8 3 9 .5.06 1.026.01 1.588-.05L12 21l4.412-3.05c.562.06 1.088.11 1.588.05 5-1 4.8-5 3-9a12.02 12.02 0 00-.382-2.016z",
    "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    "M13 10V3L4 14h7v7l9-11h-7z",
    "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-8 sm:py-12 lg:py-24 ${backgroundClasses[background]}`, "class")} data-astro-cid-vnivfuh2> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-vnivfuh2> ${(heading || subheading) && renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-vnivfuh2": true }, { "default": ($$result2) => renderTemplate` <div class="text-center mb-8 sm:mb-12 lg:mb-16" data-astro-cid-vnivfuh2> ${subheading && renderTemplate`<p${addAttribute(`text-sm font-medium tracking-wider uppercase mb-4 ${background === "primary" ? "text-white/80" : "text-primary"}`, "class")} data-astro-cid-vnivfuh2> ${subheading} </p>`} ${heading && renderTemplate`<h2${addAttribute(`font-montserrat text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light ${background === "primary" ? "text-white" : ""}`, "class")} data-astro-cid-vnivfuh2> <span data-astro-cid-vnivfuh2>${unescapeHTML(heading)}</span> ${headingAccent && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-vnivfuh2": true }, { "default": ($$result3) => renderTemplate`${" "}<span class="font-semibold" data-astro-cid-vnivfuh2>${headingAccent}</span> ` })}`} </h2>`} </div> ` })}`} <div${addAttribute(`grid grid-cols-1 ${gridClasses[columns]} gap-6 lg:gap-8`, "class")} data-astro-cid-vnivfuh2> ${features.map((feature, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": variant === "centered" ? "zoomIn" : "fadeUp", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-vnivfuh2": true }, { "default": ($$result2) => renderTemplate` <div${addAttribute(`
            ${variant === "cards" ? variantClasses.cards : ""}
            ${variant === "minimal" || variant === "centered" ? "text-center" : ""}
            ${feature.highlight && variant === "cards" ? "ring-2 ring-primary transform scale-105" : ""}
            ${variant !== "cards" && background === "gray" ? "bg-white rounded-lg p-6" : ""}
            h-full flex flex-col
          `, "class")} data-astro-cid-vnivfuh2> <!-- Icon --> <div${addAttribute(`
              ${variant === "centered" || variant === "minimal" ? "mx-auto" : ""}
              ${variant === "cards" ? "bg-primary/10" : ""}
              ${variant === "centered" ? "bg-primary/10" : ""}
              ${variant === "cards" || variant === "centered" ? "w-16 h-16 rounded-full flex items-center justify-center" : ""}
              mb-4
            `, "class")} data-astro-cid-vnivfuh2> ${feature.icon ? feature.iconType === "custom" ? renderTemplate`<div${addAttribute(`${iconColor} ${variant === "cards" || variant === "centered" ? "w-8 h-8" : "w-10 h-10"}`, "class")} data-astro-cid-vnivfuh2>${unescapeHTML(feature.icon)}</div>` : renderTemplate`<svg${addAttribute(`${iconColor} ${variant === "cards" || variant === "centered" ? "w-8 h-8" : "w-10 h-10"}`, "class")} fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-vnivfuh2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(feature.icon, "d")} data-astro-cid-vnivfuh2></path> </svg>` : renderTemplate`<svg${addAttribute(`${iconColor} ${variant === "cards" || variant === "centered" ? "w-8 h-8" : "w-10 h-10"}`, "class")} fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-vnivfuh2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(defaultIcons[index % defaultIcons.length], "d")} data-astro-cid-vnivfuh2></path> </svg>`} </div> <!-- Content --> <div class="flex-grow" data-astro-cid-vnivfuh2> <h3${addAttribute(`text-xl font-bold mb-2 ${background === "primary" && variant !== "cards" ? "text-white" : "text-gray-900"}`, "class")} data-astro-cid-vnivfuh2> ${feature.title} </h3> <p${addAttribute(`${background === "primary" && variant !== "cards" ? "text-white/90" : "text-gray-600"} ${variant === "minimal" ? "text-sm" : ""}`, "class")} data-astro-cid-vnivfuh2> ${feature.description} </p> </div> ${feature.highlight && variant === "cards" && renderTemplate`<div class="mt-4 pt-4 border-t border-gray-200" data-astro-cid-vnivfuh2> <span class="text-primary font-semibold text-sm flex items-center gap-1" data-astro-cid-vnivfuh2> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-vnivfuh2> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-vnivfuh2></path> </svg>
Recommended
</span> </div>`} </div> ` })}`)} </div> </div> </section> `;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/Features.astro", void 0);

export { $$Features as $ };
