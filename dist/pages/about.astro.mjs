import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dgea6w5L.mjs';
import { S as ScrollAnimation } from '../chunks/ScrollAnimation_DokyVXDc.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Us - DrySpace Waterproofing Toronto", "description": "Toronto's trusted basement waterproofing experts since 2008. Learn about our team, values, and commitment to protecting GTA homes." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="container mx-auto px-4"> <!-- Hero Section --> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
Toronto's Trusted Waterproofing Experts
</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Since 2008, we've been protecting Toronto homes with innovative waterproofing solutions and unmatched customer service
</p> </div> ` })} <!-- Company Stats --> <div class="grid md:grid-cols-4 gap-6 mb-16"> ${[
    { number: "15+", label: "Years in Business", icon: "\u{1F4C5}" },
    { number: "5,000+", label: "Homes Protected", icon: "\u{1F3E0}" },
    { number: "98%", label: "Customer Satisfaction", icon: "\u2B50" },
    { number: "24/7", label: "Emergency Service", icon: "\u{1F6A8}" }
  ].map((stat, index) => renderTemplate`${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"> <div class="text-3xl mb-2">${stat.icon}</div> <div class="text-4xl font-bold text-primary mb-2">${stat.number}</div> <div class="text-gray-600">${stat.label}</div> </div> ` })}`)} </div> <!-- Our Story --> <div class="grid md:grid-cols-2 gap-12 items-center mb-16"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeLeft", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div> <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2> <div class="space-y-4 text-gray-700"> <p>
DrySpace Waterproofing was founded in 2008 with a simple mission: to provide Toronto homeowners with honest, reliable, and effective waterproofing solutions.
</p> <p>
What started as a small team of dedicated professionals has grown into Toronto's most trusted waterproofing company, serving thousands of satisfied customers across the GTA.
</p> <p>
Our success is built on three core principles: exceptional craftsmanship, transparent pricing, and unwavering commitment to customer satisfaction. We treat every home as if it were our own.
</p> </div> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeRight", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="bg-gray-100 rounded-xl p-8"> <img src="/images/team-photo.jpg" alt="DrySpace team" class="rounded-lg mb-4"> <p class="text-center text-gray-600 italic">
"We're not just waterproofing contractors – we're your neighbors, committed to protecting Toronto homes for generations."
</p> <p class="text-center mt-2 font-semibold">- Michael Chen, Founder & CEO</p> </div> ` })} </div> <!-- Why Choose Us --> <div class="bg-primary text-white rounded-xl p-8 md:p-12 mb-16"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-bold mb-8 text-center">Why Toronto Chooses DrySpace</h2> <div class="grid md:grid-cols-3 gap-8"> ${[
    {
      title: "Local Expertise",
      description: "Deep understanding of Toronto's unique soil conditions, weather patterns, and building codes",
      icon: "\u{1F3D9}\uFE0F"
    },
    {
      title: "Proven Solutions",
      description: "Time-tested techniques refined over 15 years and thousands of successful projects",
      icon: "\u{1F6E1}\uFE0F"
    },
    {
      title: "Customer First",
      description: "Transparent pricing, clear communication, and support that continues long after the job is done",
      icon: "\u{1F91D}"
    }
  ].map((reason, index) => renderTemplate`${renderComponent($$result3, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result4) => renderTemplate` <div class="text-center"> <div class="text-5xl mb-4">${reason.icon}</div> <h3 class="text-xl font-bold mb-3">${reason.title}</h3> <p class="opacity-90">${reason.description}</p> </div> ` })}`)} </div> ` })} </div> <!-- Our Values --> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="mb-16"> <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2> <div class="grid md:grid-cols-2 gap-8"> ${[
    {
      value: "Integrity",
      description: "We provide honest assessments and fair pricing. No upselling, no hidden fees, just straightforward solutions.",
      icon: "\u{1F932}"
    },
    {
      value: "Excellence",
      description: "We use only the best materials and employ highly trained technicians to ensure lasting results.",
      icon: "\u2B50"
    },
    {
      value: "Innovation",
      description: "We stay current with the latest waterproofing technologies and techniques to offer the best solutions.",
      icon: "\u{1F4A1}"
    },
    {
      value: "Community",
      description: "As Toronto locals, we're invested in our community and take pride in protecting our neighbors' homes.",
      icon: "\u{1F3D8}\uFE0F"
    }
  ].map((value, index) => renderTemplate`${renderComponent($$result3, "ScrollAnimation", ScrollAnimation, { "animation": index % 2 === 0 ? "fadeLeft" : "fadeRight", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result4) => renderTemplate` <div class="flex gap-4"> <div class="text-4xl flex-shrink-0">${value.icon}</div> <div> <h3 class="text-xl font-bold text-gray-900 mb-2">${value.value}</h3> <p class="text-gray-700">${value.description}</p> </div> </div> ` })}`)} </div> </div> ` })} <!-- Certifications --> <div class="bg-gray-50 rounded-xl p-8 mb-16"> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications & Memberships</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-6"> ${[
    "Licensed & Insured in Ontario",
    "WSIB Coverage",
    "BBB Accredited Business",
    "HomeStars Verified",
    "Ontario Building Code Certified",
    "Waterproofing Contractors Association",
    "Green Building Certified",
    "City of Toronto Licensed"
  ].map((cert, index) => renderTemplate`${renderComponent($$result3, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "delay": index * 0.05, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result4) => renderTemplate` <div class="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-shadow"> <p class="text-sm font-medium text-gray-700">${cert}</p> </div> ` })}`)} </div> ` })} </div> <!-- CTA Section --> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result3) => renderTemplate` <div class="text-center bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl p-8"> <h2 class="text-3xl font-bold mb-4">
Experience the DrySpace Difference
</h2> <p class="text-xl mb-6 opacity-90">
Join thousands of satisfied Toronto homeowners
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="tel:4375450067" class="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
Call Now: (437) 545-0067
</a> <a href="/contact" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
Get Free Estimate
</a> </div> </div> ` })} </div> </section> ` })}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/about.astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
