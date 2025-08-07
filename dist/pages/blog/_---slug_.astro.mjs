import { b as createAstro, c as createComponent, m as maybeRenderHead, e as renderSlot, a as renderTemplate, d as addAttribute, r as renderComponent } from '../../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_DypdcfYy.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dgea6w5L.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("http://localhost:4321");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const {
    title,
    description,
    date,
    author = "DrySpace Team",
    category = "Waterproofing Tips",
    readTime = "5 min read"
  } = Astro2.props;
  const formattedDate = date ? new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : "";
  return renderTemplate`${maybeRenderHead()}<article class="blog-post max-w-4xl mx-auto" data-astro-cid-5kafvvly> <!-- Article Header --> <header class="mb-8 pb-8 border-b" data-astro-cid-5kafvvly> <div class="flex items-center gap-4 text-sm text-gray-600 mb-4" data-astro-cid-5kafvvly> <span class="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold" data-astro-cid-5kafvvly> ${category} </span> <span data-astro-cid-5kafvvly>${readTime}</span> ${formattedDate && renderTemplate`<span data-astro-cid-5kafvvly>• ${formattedDate}</span>`} </div> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-astro-cid-5kafvvly>${title}</h1> <p class="text-xl text-gray-600 leading-relaxed" data-astro-cid-5kafvvly>${description}</p> <div class="mt-6 flex items-center gap-4" data-astro-cid-5kafvvly> <div class="flex items-center gap-3" data-astro-cid-5kafvvly> <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold" data-astro-cid-5kafvvly> ${author.charAt(0)} </div> <div data-astro-cid-5kafvvly> <p class="font-semibold text-gray-900" data-astro-cid-5kafvvly>${author}</p> <p class="text-sm text-gray-600" data-astro-cid-5kafvvly>Waterproofing Expert</p> </div> </div> </div> </header> <!-- Share Buttons --> <div class="flex items-center gap-4 mb-8" data-astro-cid-5kafvvly> <span class="text-sm font-semibold text-gray-700" data-astro-cid-5kafvvly>Share:</span> <a href="#" class="text-gray-600 hover:text-primary transition-colors" aria-label="Share on Twitter" data-astro-cid-5kafvvly> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-5kafvvly> <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" data-astro-cid-5kafvvly></path> </svg> </a> <a href="#" class="text-gray-600 hover:text-primary transition-colors" aria-label="Share on Facebook" data-astro-cid-5kafvvly> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-5kafvvly> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-5kafvvly></path> </svg> </a> <a href="#" class="text-gray-600 hover:text-primary transition-colors" aria-label="Share on LinkedIn" data-astro-cid-5kafvvly> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-5kafvvly> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-5kafvvly></path> </svg> </a> </div> <!-- Blog Content --> <div class="blog-content" data-astro-cid-5kafvvly> ${renderSlot($$result, $$slots["default"])} </div> <!-- Author Bio --> <div class="mt-12 p-6 bg-gray-50 rounded-lg" data-astro-cid-5kafvvly> <h3 class="font-bold text-lg mb-3" data-astro-cid-5kafvvly>About the Author</h3> <div class="flex items-start gap-4" data-astro-cid-5kafvvly> <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0" data-astro-cid-5kafvvly> ${author.charAt(0)} </div> <div data-astro-cid-5kafvvly> <p class="font-semibold text-gray-900" data-astro-cid-5kafvvly>${author}</p> <p class="text-gray-700 mt-1" data-astro-cid-5kafvvly>
With over 15 years of experience in basement waterproofing, our team of experts shares valuable insights to help Toronto homeowners protect their properties from water damage.
</p> </div> </div> </div> <!-- Related Articles --> <div class="mt-12 border-t pt-12" data-astro-cid-5kafvvly> <h2 class="text-2xl font-bold text-gray-900 mb-6" data-astro-cid-5kafvvly>Related Articles</h2> <div class="grid md:grid-cols-3 gap-6" data-astro-cid-5kafvvly> ${[
    {
      title: "Signs Your Basement Needs Waterproofing",
      link: "/blog/signs-basement-needs-waterproofing",
      category: "Prevention"
    },
    {
      title: "DIY vs Professional Waterproofing",
      link: "/blog/diy-vs-professional-waterproofing",
      category: "Comparison"
    },
    {
      title: "Understanding Waterproofing Warranties",
      link: "/blog/understanding-waterproofing-warranties",
      category: "Guide"
    }
  ].map((article) => renderTemplate`<a${addAttribute(article.link, "href")} class="group" data-astro-cid-5kafvvly> <div class="bg-white rounded-lg shadow hover:shadow-lg transition-all p-4" data-astro-cid-5kafvvly> <span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded" data-astro-cid-5kafvvly> ${article.category} </span> <h3 class="mt-3 font-semibold text-gray-900 group-hover:text-primary transition-colors" data-astro-cid-5kafvvly> ${article.title} </h3> <p class="mt-2 text-sm text-primary font-semibold" data-astro-cid-5kafvvly>Read More →</p> </div> </a>`)} </div> </div> <!-- CTA Section --> <div class="mt-12 bg-primary text-white rounded-xl p-8 text-center" data-astro-cid-5kafvvly> <h2 class="text-2xl font-bold mb-4" data-astro-cid-5kafvvly>Need Professional Waterproofing?</h2> <p class="text-lg mb-6 opacity-90" data-astro-cid-5kafvvly>
Get a free inspection and estimate from Toronto's trusted experts
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-5kafvvly> <a href="tel:4375450067" class="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-astro-cid-5kafvvly>
📞 Call (437) 545-0067
</a> <a href="/contact" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all" data-astro-cid-5kafvvly>
Schedule Inspection
</a> </div> </div> </article>`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/BlogLayout.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
async function getStaticPaths() {
  const blogPosts = await getCollection("blog");
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  const data = post.data;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": data.title, "description": data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> ${renderComponent($$result2, "BlogLayout", $$BlogLayout, { "title": data.title, "description": data.description, "date": data.date, "author": data.author, "category": data.category, "readTime": data.readTime }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} </div> ` })}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
