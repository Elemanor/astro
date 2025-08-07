import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CpUiY3mq.mjs';
import { $ as $$Hero } from '../chunks/Hero_C4_3RV_b.mjs';
import { $ as $$Features } from '../chunks/Features_Ddsam9kx.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_C6tRvETi.mjs';
import { $ as $$FAQ } from '../chunks/FAQ_EWOLvXs_.mjs';
import { $ as $$Process } from '../chunks/Process_Byod7r58.mjs';
import { $ as $$ServiceAreas } from '../chunks/ServiceAreas_B7Y-uvfs.mjs';
import { S as ScrollAnimation } from '../chunks/ScrollAnimation_DokyVXDc.mjs';
import { C as Card, a as CardContent } from '../chunks/card_DWFE0Hif.mjs';
/* empty css                                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const {
    heading = "What",
    headingAccent = "Customers Say",
    subheading = "Join thousands of satisfied customers",
    testimonials,
    columns = 3,
    variant = "default",
    showOverallRating = true,
    overallRating = 4.9,
    totalReviews = 847,
    ctaText = "Get Your Free Quote",
    ctaLink = "/quote",
    background = "gray"
  } = Astro2.props;
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50"
  };
  const gridClasses = {
    1: "",
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3"
  };
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    for (let i = 0; i < fullStars; i++) {
      stars.push("full");
    }
    if (hasHalfStar && stars.length < 5) {
      stars.push("half");
    }
    while (stars.length < 5) {
      stars.push("empty");
    }
    return stars;
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-12 sm:py-16 lg:py-24 ${backgroundClasses[background]}`, "class")} data-astro-cid-aadlzisc> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-aadlzisc> ${(heading || subheading || showOverallRating) && renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-aadlzisc": true }, { "default": ($$result2) => renderTemplate` <div class="text-center mb-12" data-astro-cid-aadlzisc> ${(heading || headingAccent) && renderTemplate`<h2 class="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-light mb-4" data-astro-cid-aadlzisc> ${heading && renderTemplate`<span data-astro-cid-aadlzisc>${unescapeHTML(heading)}</span>`} ${headingAccent && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-aadlzisc": true }, { "default": ($$result3) => renderTemplate`${heading && " "}<span class="font-bold" data-astro-cid-aadlzisc>${headingAccent}</span> ` })}`} </h2>`} ${subheading && renderTemplate`<p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-aadlzisc> ${subheading} </p>`} ${showOverallRating && renderTemplate`<div class="flex items-center justify-center gap-2 mt-6" data-astro-cid-aadlzisc> <div class="flex" data-astro-cid-aadlzisc> ${renderStars(overallRating).map((star) => renderTemplate`<svg class="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20" data-astro-cid-aadlzisc> ${star === "full" ? renderTemplate`<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-aadlzisc></path>` : star === "half" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-aadlzisc": true }, { "default": ($$result3) => renderTemplate` <defs data-astro-cid-aadlzisc> <linearGradient id="half-star" data-astro-cid-aadlzisc> <stop offset="50%" stop-color="currentColor" data-astro-cid-aadlzisc></stop> <stop offset="50%" stop-color="transparent" data-astro-cid-aadlzisc></stop> </linearGradient> </defs> <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-aadlzisc></path> <path fill="none" stroke="currentColor" stroke-width="1" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-aadlzisc></path> ` })}` : renderTemplate`<path fill="none" stroke="currentColor" stroke-width="1" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-aadlzisc></path>`} </svg>`)} </div> <span class="text-lg font-semibold" data-astro-cid-aadlzisc>${overallRating}/5</span> ${totalReviews && renderTemplate`<span class="text-gray-600" data-astro-cid-aadlzisc>(${totalReviews} reviews)</span>`} </div>`} </div> ` })}`}  ${variant === "featured" && testimonials.length > 0 && /* Featured variant - single large testimonial */
  renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-aadlzisc": true }, { "default": ($$result2) => renderTemplate` <div class="max-w-3xl mx-auto" data-astro-cid-aadlzisc> ${renderComponent($$result2, "Card", Card, { "className": "shadow-xl", "data-astro-cid-aadlzisc": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", CardContent, { "className": "p-8 sm:p-12", "data-astro-cid-aadlzisc": true }, { "default": ($$result4) => renderTemplate` <div class="flex mb-4" data-astro-cid-aadlzisc> ${renderStars(testimonials[0].rating).map((star) => renderTemplate`<svg class="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20" data-astro-cid-aadlzisc> ${star === "full" && renderTemplate`<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-aadlzisc></path>`} </svg>`)} </div> <blockquote class="text-xl text-gray-700 mb-6 italic" data-astro-cid-aadlzisc>
"${testimonials[0].text}"
</blockquote> <div class="flex items-center gap-4" data-astro-cid-aadlzisc> ${testimonials[0].image && renderTemplate`<img${addAttribute(testimonials[0].image, "src")}${addAttribute(testimonials[0].name, "alt")} class="w-16 h-16 rounded-full object-cover" data-astro-cid-aadlzisc>`} <div data-astro-cid-aadlzisc> <p class="font-semibold text-gray-900" data-astro-cid-aadlzisc>${testimonials[0].name}</p> ${testimonials[0].location && renderTemplate`<p class="text-gray-600" data-astro-cid-aadlzisc>${testimonials[0].location}</p>`} ${testimonials[0].service && renderTemplate`<p class="text-sm text-gray-500" data-astro-cid-aadlzisc>${testimonials[0].service}</p>`} </div> ${testimonials[0].verified && renderTemplate`<div class="ml-auto" data-astro-cid-aadlzisc> <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center gap-1" data-astro-cid-aadlzisc> <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-aadlzisc> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-aadlzisc></path> </svg>
Verified
</span> </div>`} </div> ` })} ` })} </div> ` })}`} ${variant !== "featured" && renderTemplate`<div${addAttribute(`grid grid-cols-1 ${gridClasses[columns]} gap-6`, "class")} data-astro-cid-aadlzisc> ${testimonials.map((testimonial, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": index % 2 === 0 ? "fadeUp" : "fadeDown", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-aadlzisc": true }, { "default": ($$result2) => renderTemplate`${variant === "minimal" ? (
    /* Minimal variant */
    renderTemplate`<div class="text-center p-6" data-astro-cid-aadlzisc> <div class="flex justify-center mb-3" data-astro-cid-aadlzisc> ${renderStars(testimonial.rating).map((star) => renderTemplate`<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20" data-astro-cid-aadlzisc> ${star === "full" && renderTemplate`<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-aadlzisc></path>`} </svg>`)} </div> <p class="text-gray-700 mb-4 italic" data-astro-cid-aadlzisc>"${testimonial.text}"</p> <p class="font-semibold text-gray-900" data-astro-cid-aadlzisc>${testimonial.name}</p> ${testimonial.location && renderTemplate`<p class="text-sm text-gray-600" data-astro-cid-aadlzisc>${testimonial.location}</p>`} </div>`
  ) : variant === "compact" ? (
    /* Compact variant */
    renderTemplate`<div class="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow" data-astro-cid-aadlzisc> <div class="flex items-start gap-3" data-astro-cid-aadlzisc> ${testimonial.image && renderTemplate`<img${addAttribute(testimonial.image, "src")}${addAttribute(testimonial.name, "alt")} class="w-10 h-10 rounded-full object-cover flex-shrink-0" data-astro-cid-aadlzisc>`} <div class="flex-grow" data-astro-cid-aadlzisc> <div class="flex items-center justify-between mb-2" data-astro-cid-aadlzisc> <p class="font-semibold text-gray-900" data-astro-cid-aadlzisc>${testimonial.name}</p> <div class="flex" data-astro-cid-aadlzisc> ${renderStars(testimonial.rating).slice(0, 5).map((star) => renderTemplate`<svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20" data-astro-cid-aadlzisc> ${star === "full" && renderTemplate`<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-aadlzisc></path>`} </svg>`)} </div> </div> <p class="text-sm text-gray-700 line-clamp-3" data-astro-cid-aadlzisc>"${testimonial.text}"</p> ${testimonial.date && renderTemplate`<p class="text-xs text-gray-500 mt-2" data-astro-cid-aadlzisc>${testimonial.date}</p>`} </div> </div> </div>`
  ) : (
    /* Default variant */
    renderTemplate`${renderComponent($$result2, "Card", Card, { "className": "h-full hover:shadow-lg transition-shadow", "data-astro-cid-aadlzisc": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", CardContent, { "className": "p-6", "data-astro-cid-aadlzisc": true }, { "default": ($$result4) => renderTemplate` <div class="flex mb-3" data-astro-cid-aadlzisc> ${renderStars(testimonial.rating).map((star) => renderTemplate`<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20" data-astro-cid-aadlzisc> ${star === "full" && renderTemplate`<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-aadlzisc></path>`} </svg>`)} </div> <p class="text-gray-700 mb-4 italic" data-astro-cid-aadlzisc>"${testimonial.text}"</p> <div class="border-t pt-4" data-astro-cid-aadlzisc> <div class="flex items-center justify-between" data-astro-cid-aadlzisc> <div data-astro-cid-aadlzisc> <p class="font-semibold text-gray-900" data-astro-cid-aadlzisc>${testimonial.name}</p> ${testimonial.location && renderTemplate`<p class="text-sm text-gray-600" data-astro-cid-aadlzisc>${testimonial.location}</p>`} </div> ${testimonial.service && renderTemplate`<div class="text-right" data-astro-cid-aadlzisc> ${testimonial.serviceLink ? renderTemplate`<a${addAttribute(testimonial.serviceLink, "href")} class="text-xs text-primary hover:underline" data-astro-cid-aadlzisc> ${testimonial.service} </a>` : renderTemplate`<p class="text-xs text-gray-500" data-astro-cid-aadlzisc>${testimonial.service}</p>`} ${testimonial.date && renderTemplate`<p class="text-xs text-gray-400" data-astro-cid-aadlzisc>${testimonial.date}</p>`} </div>`} </div> </div> ` })} ` })}`
  )}` })}`)} </div>`}  ${ctaText && ctaLink && renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": 0.5, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-aadlzisc": true }, { "default": ($$result2) => renderTemplate` <div class="text-center mt-12" data-astro-cid-aadlzisc> <a${addAttribute(ctaLink, "href")} class="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors" data-astro-cid-aadlzisc> ${ctaText} <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-aadlzisc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-aadlzisc></path> </svg> </a> </div> ` })}`} </div> </section> `;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/Testimonials.astro", void 0);

const $$BasementWaterproofing = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Professional Basement Waterproofing | DrySpace GTA Contractors";
  const pageDescription = "BASEMENT FLOODING emergency? Toronto's most trusted waterproofing experts - 12,000+ homes saved! Interior $8K-15K, Exterior $20K-35K. FREE emergency quotes, lifetime warranty. Call (437) 545-0067!";
  const faqData = [
    {
      question: "What causes basement water problems?",
      answer: `Common causes in the GTA include:
- Hydrostatic pressure from high water tables
- Poor grading directing water toward foundation
- Clogged or missing weeping tiles
- Foundation cracks from settling or freeze-thaw cycles
- Window well drainage issues
- Sump pump failure

Our inspection identifies your specific causes and the best solutions.`
    },
    {
      question: "Interior waterproofing vs exterior waterproofing - which is better?",
      answer: `Both interior and exterior waterproofing have advantages:

**Interior Waterproofing** ($3,000-$8,000):
- Less invasive waterproofing method
- Manages water through interior drainage
- Year-round installation by certified contractors
- Best for finished basements and crawl space areas

**Exterior Waterproofing** ($15,000-$25,000):
- Complete exterior protection
- Protects foundation with waterproofing membrane
- Includes new drainage system installation
- Best long-term waterproofing solution

Our experienced contractors often recommend interior waterproofing for most homes unless foundation underpinning or structural work is needed.`
    },
    {
      question: "What is the typical basement waterproofing cost?",
      answer: `Basement waterproofing costs vary by method:
- **Foundation Crack Repair**: $500-$1,500 per crack
- **Interior Waterproofing**: $125-$175 per linear foot
- **Sump Pump Installation**: $1,500-$2,500 installed
- **Exterior Waterproofing**: $300-$500 per linear foot
- **Window Wells**: $1,000-$2,000 each

As experienced waterproofing contractors, we provide detailed quotes with multiple options. The cost includes materials, labor, and warranty. Financing available with 0% interest for 12 months.`
    },
    {
      question: "Will waterproofing increase my home value?",
      answer: `Absolutely! Benefits include:
- Adds 5-10% to home value
- Prevents costly water damage
- Makes basements usable living space
- Reduces insurance claims
- Attracts more buyers when selling

Our transferable warranty is a major selling point - buyers know the basement is protected.`
    },
    {
      question: "Who does basement waterproofing near me in Toronto?",
      answer: `DrySpace Waterproofing is Toronto's trusted basement waterproofing contractor with over 12,000 homes protected since 2014. We serve all of Toronto and the GTA including:
- <a href="/locations/toronto-basement-waterproofing/" title="Toronto Basement Waterproofing">Downtown Toronto</a>
- <a href="/locations/north-york-basement-waterproofing/" title="North York Waterproofing Services">North York</a>
- <a href="/locations/scarborough-basement-waterproofing/" title="Scarborough Basement Waterproofing">Scarborough</a>
- <a href="/locations/etobicoke-basement-waterproofing/" title="Etobicoke Waterproofing Experts">Etobicoke</a>
- <a href="/locations/mississauga-basement-waterproofing/" title="Mississauga Basement Waterproofing">Mississauga</a>
- <a href="/locations/brampton-basement-waterproofing/" title="Brampton Waterproofing Services">Brampton</a>
- <a href="/locations/vaughan-basement-waterproofing/" title="Vaughan Basement Waterproofing">Vaughan</a>
- <a href="/locations/richmond-hill-basement-waterproofing/" title="Richmond Hill Waterproofing">Richmond Hill</a>

Call (437) 545-0067 for immediate assistance. We offer 24/7 emergency service and free inspections.`
    },
    {
      question: "How much does it cost to waterproof a basement in Toronto?",
      answer: `Basement waterproofing costs in Toronto typically range from:
- Basic crack repair: $500-$1,500
- Interior waterproofing system: $3,000-$8,000
- Exterior waterproofing: $15,000-$25,000
- Complete system with sump pump: $5,000-$12,000

Exact costs depend on your basement size, water issues, and chosen solution. We provide free detailed quotes and offer financing with 0% interest for 12 months.`
    },
    {
      question: "What causes basement leaks in Toronto homes?",
      answer: `Toronto basements commonly leak due to:
- Clay soil that expands when wet
- Spring thaw and heavy rainfall
- High water table in many areas
- Aging weeping tile systems
- Foundation cracks from freeze-thaw cycles
- Poor grading around homes
- Clogged gutters and downspouts

Our free inspection identifies your specific causes and provides permanent solutions.`
    },
    {
      question: "Emergency basement flooding help Toronto - who to call?",
      answer: `For emergency basement flooding in Toronto, call DrySpace at (437) 545-0067 - available 24/7. We provide:
- 2-hour emergency response
- Water extraction and pumping
- Temporary repairs to stop flooding
- Insurance claim assistance
- Permanent waterproofing solutions

Don't wait - water damage worsens quickly. Our emergency team is standing by.`
    }
  ];
  const processSteps = [
    {
      step: 1,
      title: "Thorough Inspection",
      description: "We examine your entire foundation, not just visible problems. Our moisture meters and thermal cameras find hidden issues."
    },
    {
      step: 2,
      title: "Custom Solution Design",
      description: "Every home is unique. We design systems that work with your foundation type, soil conditions, and water table level."
    },
    {
      step: 3,
      title: "Professional Installation",
      description: "Our certified crews work cleanly and efficiently, minimizing disruption to your home."
    },
    {
      step: 4,
      title: "Lifetime Protection",
      description: "We back our work with transferable warranties that protect your investment for life."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Professional Basement Waterproofing Services", "subtitle": "Complete Water Protection for Your GTA Home", "description": "Protect your home's foundation and basement with professional waterproofing systems. We provide comprehensive water protection solutions - not temporary fixes.", "ctaText": "Get Free Inspection", "ctaPhone": "(437) 545-0067" })} ${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-8"> <p class="text-red-700 font-semibold">
🚨 Emergency: Water Leaking Into Your Basement After Heavy Rain?
</p> <p class="text-red-600 mt-2"> <a href="/guides/water-leaking-into-basement-after-heavy-rain/" class="underline hover:text-red-800">
Get Our Complete Emergency Solution Guide →
</a> Immediate steps, permanent fixes, and 24/7 professional help.
</p> </div> <h2 class="text-3xl font-bold mb-8">Why Toronto Homes Need Professional Waterproofing</h2> <div class="prose max-w-none"> <p>Toronto's unique climate and geographical conditions create the perfect storm for basement water problems. Understanding these challenges helps homeowners appreciate why professional waterproofing isn't just an option - it's essential protection for your investment.</p> <h3>Toronto's Freeze-Thaw Cycles and Foundation Impact</h3> <p>The Greater Toronto Area experiences some of Canada's most dramatic temperature fluctuations. Winter temperatures can plummet to -20°C, while summer peaks reach 35°C. This constant expansion and contraction creates tremendous stress on foundation materials.</p> <p>Concrete foundations expand and contract with temperature changes. Over years, this movement creates hairline cracks that worsen during freeze-thaw cycles. Water enters these cracks, freezes, and expands with tremendous force - literally splitting your foundation further apart. What starts as a minor crack becomes a major waterproofing emergency.</p> <h3>Clay Soil Challenges Specific to the GTA</h3> <p>Much of the Greater Toronto Area sits on clay-rich soil deposited by ancient Lake Iroquois. This soil type creates unique waterproofing challenges that many contractors don't fully understand.</p> <p>Clay soil absorbs water slowly but retains it for extended periods. During Toronto's wet springs, clay becomes saturated and expands significantly. This expansion puts enormous pressure against foundation walls - pressure that can crack concrete and force water through the smallest gaps.</p> <h3>Aging Infrastructure in Older Toronto Neighborhoods</h3> <p>Toronto's housing stock includes thousands of homes built before modern waterproofing standards existed. Century homes, post-war bungalows, and homes built through the 1970s often lack adequate foundation protection.</p> <p>Older homes typically have:</p> <ul> <li>Stone or block foundations with mortar joints that deteriorate over time</li> <li>Weeping tile systems made from clay or concrete that crack and clog</li> <li>Inadequate exterior waterproofing or none at all</li> <li>Foundation designs that don't account for modern drainage standards</li> </ul> <h3>High Water Table Areas Throughout the GTA</h3> <p>The Greater Toronto Area's proximity to Lake Ontario and extensive watershed creates high water table conditions in many neighborhoods. These areas require specialized waterproofing approaches that many contractors don't understand.</p> <p>High water table neighborhoods include:</p> <ul> <li><strong>The Beaches and East Toronto</strong> - Close to Lake Ontario with seasonal water table fluctuations</li> <li><strong>Etobicoke waterfront areas</strong> - Mimico Creek and Humber River influence groundwater levels</li> <li><strong>Don Valley communities</strong> - Don River watershed creates year-round high water conditions</li> <li><strong>Rouge Valley areas</strong> - Rouge River system affects eastern Scarborough and Pickering</li> <li><strong>Mississauga Credit River areas</strong> - Credit River watershed influences groundwater</li> <li><strong>Vaughan and Richmond Hill</strong> - Holland River watershed creates seasonal high water tables</li> </ul> </div> </div> </div> </section> ${renderComponent($$result2, "Features", $$Features, { "title": "Comprehensive Water Protection Solutions", "description": "Your basement water problems require professional diagnosis and permanent solutions. Our certified waterproofing contractors identify the root cause and implement the right protection system for your specific situation.", "features": [
    {
      title: "Interior Drainage Systems",
      description: "Managing groundwater infiltration with proven interior solutions",
      icon: "\u{1F4A7}"
    },
    {
      title: "Foundation Crack Repair",
      description: "Sealing water entry points permanently with professional injection",
      icon: "\u{1F527}"
    },
    {
      title: "Sump Pump Installation",
      description: "Professional installation with backup systems for complete protection",
      icon: "\u26A1"
    },
    {
      title: "Exterior Waterproofing",
      description: "Complete foundation protection with membranes and drainage",
      icon: "\u{1F3D7}\uFE0F"
    }
  ] })} ${renderComponent($$result2, "Process", $$Process, { "title": "Our Proven Waterproofing Process", "steps": processSteps })} <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold mb-8 text-center">Foundation Types We Waterproof</h2> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-white p-6 rounded-lg shadow-md"> <h3 class="text-xl font-semibold mb-4">Modern Concrete Foundations</h3> <p class="text-gray-600 mb-4">Poured Concrete (1970s-Present)</p> <ul class="list-disc list-inside text-gray-600 space-y-2"> <li>Most common in newer Toronto homes</li> <li>Develops hairline cracks from settling and temperature changes</li> <li><strong>Best Solution:</strong> Polyurethane injection for cracks, interior drainage for groundwater</li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-md"> <h3 class="text-xl font-semibold mb-4">Masonry Foundations</h3> <p class="text-gray-600 mb-4">Concrete Block/CMU Foundations</p> <ul class="list-disc list-inside text-gray-600 space-y-2"> <li>Common in 1950s-1980s homes across the GTA</li> <li>Hollow cores can fill with water causing major issues</li> <li><strong>Best Solution:</strong> Interior drainage with vapor barriers, exterior membrane when possible</li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-md"> <h3 class="text-xl font-semibold mb-4">Heritage Foundations</h3> <p class="text-gray-600 mb-4">Stone/Rubble Foundations</p> <ul class="list-disc list-inside text-gray-600 space-y-2"> <li>Common in pre-1920s homes in established neighborhoods</li> <li>Irregular surfaces require specialized techniques</li> <li><strong>Best Solution:</strong> Interior drainage with shotcrete reinforcement</li> </ul> </div> <div class="bg-white p-6 rounded-lg shadow-md"> <h3 class="text-xl font-semibold mb-4">Specialty Foundation Types</h3> <p class="text-gray-600 mb-4">ICF (Insulated Concrete Forms)</p> <ul class="list-disc list-inside text-gray-600 space-y-2"> <li>Modern energy-efficient foundations</li> <li>Require protection without damaging insulation</li> <li><strong>Best Solution:</strong> Exterior dimpled membranes, strategic drainage</li> </ul> </div> </div> </div> </div> </section> <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold mb-8 text-center">Complete Waterproofing Cost Guide</h2> <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8"> <h3 class="text-xl font-semibold mb-4">Interior Waterproofing Systems</h3> <p class="text-gray-700 mb-4">$125-$175 per linear foot</p> <ul class="list-disc list-inside text-gray-600 space-y-2"> <li><strong>Basic Interior System:</strong> $125-$140 per linear foot</li> <li><strong>Premium Interior System:</strong> $150-$175 per linear foot</li> <li><strong>Typical Toronto Home Cost:</strong> $8,000-$15,000</li> </ul> </div> <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8"> <h3 class="text-xl font-semibold mb-4">Exterior Waterproofing Systems</h3> <p class="text-gray-700 mb-4">$300-$500 per linear foot</p> <ul class="list-disc list-inside text-gray-600 space-y-2"> <li><strong>Standard Exterior Waterproofing:</strong> $300-$380 per linear foot</li> <li><strong>Premium Exterior Waterproofing:</strong> $400-$500 per linear foot</li> <li><strong>Typical Toronto Home Cost:</strong> $25,000-$45,000</li> </ul> </div> <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6"> <h3 class="text-xl font-semibold mb-4">Additional Services</h3> <ul class="list-disc list-inside text-gray-600 space-y-2"> <li><strong>Foundation Crack Repair:</strong> $500-$1,500 per crack</li> <li><strong>Sump Pump Installation:</strong> $1,500-$3,500 installed</li> <li><strong>Window Wells:</strong> $1,000-$2,000 each</li> </ul> </div> <div class="mt-8 text-center"> <p class="text-lg font-semibold mb-4">Financing Available</p> <p class="text-gray-600">0% interest for 12 months on approved credit</p> </div> </div> </div> </section> <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold mb-8 text-center">The DrySpace Difference - 25 Years Protecting Toronto</h2> <div class="grid md:grid-cols-2 gap-8 mb-12"> <div class="text-center"> <div class="text-4xl font-bold text-blue-600 mb-2">12,000+</div> <p class="text-gray-600">Homes Protected Since 1999</p> </div> <div class="text-center"> <div class="text-4xl font-bold text-blue-600 mb-2">25 Years</div> <p class="text-gray-600">Local GTA Experience</p> </div> <div class="text-center"> <div class="text-4xl font-bold text-blue-600 mb-2">24/7</div> <p class="text-gray-600">Emergency Response</p> </div> <div class="text-center"> <div class="text-4xl font-bold text-blue-600 mb-2">Lifetime</div> <p class="text-gray-600">Transferable Warranty</p> </div> </div> <div class="prose max-w-none"> <h3>Company History and Local Expertise</h3> <p>DrySpace Waterproofing began in 1999 when founder Mike Richardson recognized that Toronto homeowners deserved better waterproofing solutions. After working for several large contractors and seeing too many failed systems, Mike established DrySpace with a simple mission: provide permanent waterproofing solutions that actually work in Toronto's challenging conditions.</p> <p>Over 25 years, we've learned what works and what doesn't in the GTA. We've worked through Toronto's wettest springs, helped homeowners recover from major flooding events, and developed waterproofing techniques specifically for local soil conditions.</p> <h3>Proprietary Waterproofing Techniques</h3> <p>Twenty-five years of Toronto waterproofing experience has allowed DrySpace to develop proprietary techniques that outperform standard industry methods:</p> <ul> <li><strong>DrySpace Clay Soil Adaptation:</strong> Modified installation technique with oversized drainage components for Toronto's clay-rich soil</li> <li><strong>Freeze-Thaw Crack Prevention:</strong> Proprietary polymer blend designed for Toronto's temperature extremes</li> <li><strong>High Water Table Management:</strong> Dual-pump systems with smart controls for extreme weather events</li> <li><strong>Heritage Home Integration:</strong> Minimally invasive techniques for century homes</li> </ul> <h3>Lifetime Warranty Details</h3> <p>DrySpace stands behind our waterproofing systems with comprehensive lifetime warranties that protect your investment permanently:</p> <ul> <li>Complete waterproofing system performance for the life of your home</li> <li>All materials and components including pumps, pipes, drainage materials</li> <li>Labor costs for any warranty repairs</li> <li>Annual system inspections at no charge</li> <li>24/7 emergency response for warranty issues</li> <li>Transferable protection that adds value when selling</li> </ul> </div> </div> </div> </section> ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Customer Success Stories", "testimonials": [
    {
      name: "Sarah & Mark",
      location: "Riverdale",
      rating: 5,
      text: "Our 1920s home with stone foundation had been leaking for years. DrySpace designed a custom interior system that's kept our basement completely dry for three years now. We finally have confidence in our basement."
    },
    {
      name: "The Johnson Family",
      location: "Mississauga",
      rating: 5,
      text: "High water table flooding was destroying our finished basement. DrySpace installed a dual pump system that handled record rainfall without any issues. Best home improvement investment we've made."
    },
    {
      name: "Rita",
      location: "North York",
      rating: 5,
      text: "Clay soil was causing seasonal leaks in my 1955 bungalow. DrySpace's specialized approach for clay conditions worked perfectly. Four years later, still dry. The financing made it possible."
    }
  ] })} ${renderComponent($$result2, "ServiceAreas", $$ServiceAreas, { "title": "Professional Waterproofing Throughout the GTA", "description": "Our certified contractors provide comprehensive waterproofing services across the Greater Toronto Area. With decades of experience in each region's unique soil conditions and drainage challenges, we deliver tailored solutions that work.", "areas": [
    "Toronto",
    "Mississauga",
    "Brampton",
    "Vaughan",
    "Richmond Hill",
    "Markham",
    "Oakville",
    "Burlington",
    "Hamilton",
    "Pickering",
    "Ajax",
    "Whitby",
    "Oshawa",
    "Milton",
    "Georgetown",
    "Newmarket"
  ] })} ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "Frequently Asked Questions", "faqs": faqData })} ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "Ready to Fix Your Basement?", "description": "Stop worrying every time it rains. Professional waterproofing solves basement water problems permanently.", "ctaText": "Get Your Free Inspection", "ctaPhone": "(437) 545-0067" })} ` })}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/basement-waterproofing.astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/basement-waterproofing.astro";
const $$url = "/basement-waterproofing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BasementWaterproofing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
