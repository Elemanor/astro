import { b as createAstro, c as createComponent, d as addAttribute, j as renderHead, e as renderSlot, a as renderTemplate } from './astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                          */

const $$Astro = createAstro("http://localhost:4321");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "DrySpace Waterproofing - Excellence in Foundation Protection. Toronto's trusted basement waterproofing experts." } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">${renderHead()}</head> <body class="font-open-sans bg-white text-gray-900 overflow-x-hidden"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
