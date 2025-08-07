import { b as createAstro, c as createComponent, m as maybeRenderHead, e as renderSlot, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_DypdcfYy.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dgea6w5L.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("http://localhost:4321");
const $$LocationPageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LocationPageLayout;
  const { title, description, city, serviceAreas = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="location-page" data-astro-cid-lzcght2o> <!-- Hero Section --> <div class="bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 mb-8" data-astro-cid-lzcght2o> <div class="max-w-4xl mx-auto text-center" data-astro-cid-lzcght2o> <h1 class="text-4xl md:text-5xl font-bold mb-4" data-astro-cid-lzcght2o>${title}</h1> <p class="text-xl opacity-90 mb-6" data-astro-cid-lzcght2o>${description}</p> <!-- Service Areas --> ${serviceAreas.length > 0 && renderTemplate`<div class="mb-6" data-astro-cid-lzcght2o> <p class="text-sm uppercase tracking-wide mb-3 opacity-80" data-astro-cid-lzcght2o>Serving All ${city} Neighborhoods</p> <div class="flex flex-wrap justify-center gap-2" data-astro-cid-lzcght2o> ${serviceAreas.map((area) => renderTemplate`<span class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm" data-astro-cid-lzcght2o> ${area} </span>`)} </div> </div>`} <!-- CTAs --> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-lzcght2o> <a href="tel:4375450067" class="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2" data-astro-cid-lzcght2o> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-lzcght2o> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-lzcght2o></path> </svg>
Call (437) 545-0067
</a> <a href="/contact" class="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-all" data-astro-cid-lzcght2o>
Get Free ${city} Estimate
</a> </div> </div> </div> <!-- Trust Signals --> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" data-astro-cid-lzcght2o> ${[
    { icon: "\u{1F3E0}", text: "5,000+ Homes Protected" },
    { icon: "\u26A1", text: "2-Hour Response" },
    { icon: "\u{1F6E1}\uFE0F", text: "Lifetime Warranty" },
    { icon: "\u2B50", text: "4.9\u2605 Google Rating" }
  ].map((signal) => renderTemplate`<div class="bg-gray-50 rounded-lg p-4 text-center" data-astro-cid-lzcght2o> <div class="text-2xl mb-2" data-astro-cid-lzcght2o>${signal.icon}</div> <p class="text-sm font-semibold text-gray-700" data-astro-cid-lzcght2o>${signal.text}</p> </div>`)} </div> <!-- Main Content --> <div class="location-content max-w-none" data-astro-cid-lzcght2o> ${renderSlot($$result, $$slots["default"])} </div> <!-- Why Choose Local Section --> <section class="my-12 bg-primary/5 rounded-xl p-8" data-astro-cid-lzcght2o> <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center" data-astro-cid-lzcght2o>
Why Choose Local ${city} Waterproofing Experts
</h2> <div class="grid md:grid-cols-3 gap-6" data-astro-cid-lzcght2o> ${[
    {
      icon: "\u{1F697}",
      title: "Faster Response",
      description: `Local presence means we reach ${city} homes within 2 hours for emergencies`
    },
    {
      icon: "\u{1F3D8}\uFE0F",
      title: "Area Knowledge",
      description: `We understand ${city}'s unique soil conditions, weather patterns, and building codes`
    },
    {
      icon: "\u{1F4B0}",
      title: "No Travel Fees",
      description: `Being local means lower costs - we pass the savings to ${city} homeowners`
    }
  ].map((benefit) => renderTemplate`<div class="text-center" data-astro-cid-lzcght2o> <div class="text-4xl mb-3" data-astro-cid-lzcght2o>${benefit.icon}</div> <h3 class="font-bold text-lg mb-2" data-astro-cid-lzcght2o>${benefit.title}</h3> <p class="text-gray-700" data-astro-cid-lzcght2o>${benefit.description}</p> </div>`)} </div> </section> <!-- Service Cards Section --> <section class="my-12" data-astro-cid-lzcght2o> <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center" data-astro-cid-lzcght2o>
Our ${city} Waterproofing Services
</h2> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-lzcght2o> ${[
    {
      title: "Interior Waterproofing",
      description: "Perfect for finished basements. No excavation required.",
      features: ["Minimal disruption", "Year-round installation", "Lifetime warranty"],
      price: "$3,000-$8,000"
    },
    {
      title: "Exterior Waterproofing",
      description: "Maximum protection with full excavation and membrane.",
      features: ["Addresses root cause", "25-year warranty", "Increases home value"],
      price: "$10,000-$25,000"
    },
    {
      title: "Sump Pump Installation",
      description: "Triple protection with battery backup systems.",
      features: ["24/7 protection", "Power outage backup", "Annual maintenance"],
      price: "$2,800-$4,500"
    },
    {
      title: "Foundation Crack Repair",
      description: "Permanent solutions for leaking foundation cracks.",
      features: ["Same-day service", "10-year warranty", "Injection technology"],
      price: "$500-$2,000"
    }
  ].map((service) => renderTemplate`<div class="service-card" data-astro-cid-lzcght2o> <h3 data-astro-cid-lzcght2o>${service.title}</h3> <p class="text-gray-700 mb-4" data-astro-cid-lzcght2o>${service.description}</p> <ul class="space-y-2 mb-4" data-astro-cid-lzcght2o> ${service.features.map((feature) => renderTemplate`<li class="flex items-center gap-2 text-sm" data-astro-cid-lzcght2o> <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-lzcght2o> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-lzcght2o></path> </svg> <span data-astro-cid-lzcght2o>${feature}</span> </li>`)} </ul> <div class="flex items-center justify-between" data-astro-cid-lzcght2o> <span class="cost-highlight" data-astro-cid-lzcght2o>${service.price}</span> <a href="/contact" class="text-primary font-semibold hover:underline" data-astro-cid-lzcght2o>
Get Quote →
</a> </div> </div>`)} </div> </section> <!-- Local Reviews Section --> <section class="my-12 bg-gray-50 rounded-xl p-8" data-astro-cid-lzcght2o> <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center" data-astro-cid-lzcght2o>
What ${city} Homeowners Say
</h2> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-lzcght2o> ${[
    {
      name: "Sarah M.",
      area: `${city} Resident`,
      rating: 5,
      text: "Fast response, professional service, and our basement has been dry ever since. Highly recommend!"
    },
    {
      name: "Mike T.",
      area: `${city} Homeowner`,
      rating: 5,
      text: "They understood our local water table issues and provided the perfect solution. Worth every penny."
    }
  ].map((review) => renderTemplate`<div class="bg-white rounded-lg p-6 shadow" data-astro-cid-lzcght2o> <div class="flex items-center justify-between mb-3" data-astro-cid-lzcght2o> <div data-astro-cid-lzcght2o> <p class="font-semibold" data-astro-cid-lzcght2o>${review.name}</p> <p class="text-sm text-gray-600" data-astro-cid-lzcght2o>${review.area}</p> </div> <div class="flex text-yellow-400" data-astro-cid-lzcght2o> ${Array(review.rating).fill("\u2605").map((_) => renderTemplate`<span data-astro-cid-lzcght2o>★</span>`)} </div> </div> <p class="text-gray-700 italic" data-astro-cid-lzcght2o>"${review.text}"</p> </div>`)} </div> </section> <!-- Final CTA --> <section class="my-12 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8 text-center" data-astro-cid-lzcght2o> <h2 class="text-3xl font-bold mb-4" data-astro-cid-lzcght2o>
Protect Your ${city} Home Today
</h2> <p class="text-xl mb-6 opacity-90" data-astro-cid-lzcght2o>
Join thousands of satisfied ${city} homeowners who trust DrySpace
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-lzcght2o> <a href="tel:4375450067" class="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors" data-astro-cid-lzcght2o>
📞 Call Now: (437) 545-0067
</a> <a href="/contact" class="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-all" data-astro-cid-lzcght2o>
Get Free ${city} Estimate
</a> </div> <p class="mt-6 text-sm opacity-80" data-astro-cid-lzcght2o>
Serving all ${city} neighborhoods with same-day response
</p> </section> </article>`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/LocationPageLayout.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
async function getStaticPaths() {
  const locations = await getCollection("locations");
  return locations.map((location) => ({
    params: { slug: location.slug },
    props: { location }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { location } = Astro2.props;
  const { Content } = await location.render();
  const data = location.data;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": data.title, "description": data.description, "keywords": data.keywords ? data.keywords.join(", ") : "" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> ${renderComponent($$result2, "LocationPageLayout", $$LocationPageLayout, { "title": data.title, "description": data.description, "city": data.city, "serviceAreas": data.service_areas || data.serviceArea }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} </div> ` })}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/locations/[...slug].astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/locations/[...slug].astro";
const $$url = "/locations/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
