import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, N as Navigation, a as $$StickyCTA } from '../chunks/BaseLayout_Dgea6w5L.mjs';
import { S as ScrollAnimation } from '../chunks/ScrollAnimation_DokyVXDc.mjs';
import { B as Button } from '../chunks/button_DLabDoza.mjs';
import { g as getCollection } from '../chunks/_astro_content_DypdcfYy.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = await getCollection("blog");
  const sortedPosts = blogPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  const categories = [
    "All",
    "DIY Guides",
    "Waterproofing Guides",
    "Maintenance Tips",
    "Industry News"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Waterproofing Blog & Resources | DrySpace Toronto", "description": "Expert waterproofing guides, DIY tips, and maintenance advice for Toronto homeowners. Learn how to protect your basement from water damage." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/Navigation", "client:component-export": "Navigation" })}  ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-12 lg:pt-32 lg:pb-20"> <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, black 1px, transparent 1px); background-size: 40px 40px;"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": async ($$result3) => renderTemplate` <div class="text-center max-w-3xl mx-auto"> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
Waterproofing Resources & Guides
</h1> <p class="text-xl text-gray-600 mb-8">
Expert tips, DIY guides, and industry insights to help protect your Toronto home from water damage.
</p> <!-- Category Filter --> <div class="flex flex-wrap justify-center gap-2 mb-8"> ${categories.map((category) => renderTemplate`<button${addAttribute(`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === "All" ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`, "class")}> ${category} </button>`)} </div> </div> ` })} </div> </section>  ${sortedPosts.length > 0 && sortedPosts[0].data.featured && renderTemplate`<section class="py-8"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": async ($$result3) => renderTemplate` <a${addAttribute(`/blog/${sortedPosts[0].slug}`, "href")} class="block"> <div class="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"> <div class="grid lg:grid-cols-2"> <div class="h-64 lg:h-full bg-gray-300"> ${sortedPosts[0].data.image && renderTemplate`<img${addAttribute(sortedPosts[0].data.image, "src")}${addAttribute(sortedPosts[0].data.imageAlt || sortedPosts[0].data.title, "alt")} class="w-full h-full object-cover">`} </div> <div class="p-8 lg:p-12"> <span class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
Featured Article
</span> <h2 class="text-3xl font-bold text-gray-900 mb-4"> ${sortedPosts[0].data.title} </h2> <p class="text-gray-600 mb-6"> ${sortedPosts[0].data.description} </p> <div class="flex items-center gap-4 text-sm text-gray-500"> <span>${sortedPosts[0].data.author}</span> <span>•</span> <span>${new Date(sortedPosts[0].data.date).toLocaleDateString()}</span> </div> </div> </div> </div> </a> ` })} </div> </section>`} <section class="py-16 lg:py-24"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${sortedPosts.slice(sortedPosts[0]?.data.featured ? 1 : 0).map((post, index) => renderTemplate`${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": async ($$result3) => renderTemplate` <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="block flex-1 flex flex-col"> <div class="h-48 bg-gray-300"> ${post.data.image && renderTemplate`<img${addAttribute(post.data.image, "src")}${addAttribute(post.data.imageAlt || post.data.title, "alt")} class="w-full h-full object-cover">`} </div> <div class="p-6 flex-1 flex flex-col"> ${post.data.category && renderTemplate`<span class="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mb-3 self-start"> ${post.data.category} </span>`} <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors"> ${post.data.title} </h3> <p class="text-gray-600 mb-4 flex-1"> ${post.data.description} </p> <div class="flex items-center justify-between text-sm text-gray-500"> <span>${new Date(post.data.date).toLocaleDateString()}</span> <span class="flex items-center gap-1 text-primary font-medium">
Read more
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </div> </div> </a> </article> ` })}`)} </div> ${sortedPosts.length === 0 && renderTemplate`<div class="text-center py-12"> <p class="text-gray-600">No blog posts available yet. Check back soon!</p> </div>`} </div> </section>  <section class="bg-primary text-white py-16 lg:py-24"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": async ($$result3) => renderTemplate` <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
Stay Informed & Protected
</h2> <p class="text-xl mb-8 opacity-90">
Get monthly waterproofing tips, seasonal reminders, and exclusive offers delivered to your inbox.
</p> <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"> <input type="email" placeholder="Enter your email" class="flex-1 px-6 py-3 rounded-lg text-gray-900" required> ${renderComponent($$result3, "Button", Button, { "type": "submit", "variant": "secondary", "size": "lg" }, { "default": async ($$result4) => renderTemplate`
Subscribe
` })} </form> <p class="mt-4 text-sm opacity-75">
Unsubscribe anytime. We respect your privacy.
</p> ` })} </div> </section> ${renderComponent($$result2, "StickyCTA", $$StickyCTA, {})} ` })}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
