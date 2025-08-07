import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_DypdcfYy.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dgea6w5L.mjs';
import { $ as $$GuideLayout } from '../../chunks/GuideLayout_FgY1vWib.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
async function getStaticPaths() {
  const guides = await getCollection("guides");
  return guides.map((guide) => ({
    params: { slug: guide.slug },
    props: { guide }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { guide } = Astro2.props;
  const { Content } = await guide.render();
  const data = guide.data;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": data.title, "description": data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> ${renderComponent($$result2, "GuideLayout", $$GuideLayout, { "title": data.title, "description": data.description, "category": data.category, "readTime": data.readTime, "lastUpdated": data.lastUpdated, "author": data.author }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} </div> ` })}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/guides/[...slug].astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/guides/[...slug].astro";
const $$url = "/guides/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
