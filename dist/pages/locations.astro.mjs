import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DypdcfYy.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dgea6w5L.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const locations = await getCollection("locations");
  const locationsByCity = locations.reduce((acc, location) => {
    const city = location.data.city || "Other";
    if (!acc[city]) acc[city] = [];
    acc[city].push(location);
    return acc;
  }, {});
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Service Areas | Basement Waterproofing Locations in GTA", "description": "We provide basement waterproofing, foundation repair, and drainage solutions across the Greater Toronto Area. Find our services in your city." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-12"> <h1 class="text-4xl font-bold text-center mb-8">Our Service Areas</h1> <p class="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
Professional basement waterproofing and foundation repair services throughout the Greater Toronto Area
</p> <div class="grid gap-8"> ${Object.entries(locationsByCity).map(([city, cityLocations]) => renderTemplate`<div class="bg-white rounded-lg shadow-md p-6"> <h2 class="text-2xl font-bold mb-4">${city}</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4"> ${cityLocations.map((location) => renderTemplate`<a${addAttribute(`/locations/${location.slug}/`, "href")} class="block p-4 bg-gray-50 rounded hover:bg-primary hover:text-white transition-colors"> <h3 class="font-semibold">${location.data.title}</h3> </a>`)} </div> </div>`)} </div> </div> ` })}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/locations/index.astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/locations/index.astro";
const $$url = "/locations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
