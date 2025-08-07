import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute, b as createAstro } from '../chunks/astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, b as $$Footer, a as $$StickyCTA } from '../chunks/BaseLayout_Dgea6w5L.mjs';
import { $ as $$HeroSection, a as $$FAQSection } from '../chunks/FAQSection_kT1TEjBS.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { C as Card, a as CardContent } from '../chunks/card_DWFE0Hif.mjs';
import { Shield, AlertCircle, Droplets, Home } from 'lucide-react';
import { S as ScrollAnimation } from '../chunks/ScrollAnimation_DokyVXDc.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_C6tRvETi.mjs';
/* empty css                                 */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const problems = [
  {
    title: "Sump Pump Installation",
    severity: "Essential",
    description: "Protect your basement from flooding. Professional installation with battery backup.",
    price: "From $2,800",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    color: "border-primary border-2 hover:border-primary/80",
    link: "/services/sump-pump-installation-toronto"
  },
  {
    title: "Foundation Cracks",
    severity: "Critical",
    description: "Structural integrity at risk. Professional injection provides permanent sealing.",
    price: "From $500",
    icon: AlertCircle,
    image: "https://images.unsplash.com/photo-1635321593217-40050ad13c74?w=600&h=400&fit=crop",
    color: "border-red-200 hover:border-red-300",
    link: "/services/foundation-cracks"
  },
  {
    title: "Water Seepage",
    severity: "Urgent",
    description: "Moisture destroys property value. Interior drainage eliminates water permanently.",
    price: "From $2,000",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop",
    color: "border-blue-200 hover:border-blue-300",
    link: "/services/water-seepage"
  },
  {
    title: "Exterior Drainage",
    severity: "Preventive",
    description: "Stop water before it enters. Professional grading redirects water permanently.",
    price: "From $3,000",
    icon: Home,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=600&h=400&fit=crop",
    color: "border-green-200 hover:border-green-300",
    link: "/services/exterior-drainage"
  }
];
function ProblemCards() {
  return /* @__PURE__ */ jsx("section", { className: "py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("h2", { className: "font-montserrat text-2xl sm:text-3xl lg:text-4xl font-light text-center mb-8 sm:mb-12 lg:mb-16", children: [
      "Common Issues We ",
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Resolve" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6", children: problems.map((problem) => {
      const Icon = problem.icon;
      return /* @__PURE__ */ jsx(Card, { className: `group overflow-hidden transition-all duration-300 hover:shadow-lg ${problem.color}`, children: /* @__PURE__ */ jsxs("a", { href: problem.link, className: "block", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-48 sm:h-56 lg:h-64 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: problem.image,
              alt: problem.title,
              className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-2 left-2 sm:top-4 sm:left-4", children: /* @__PURE__ */ jsx("span", { className: `inline-flex items-center px-2 py-1 sm:px-3 rounded-sm text-xs font-bold text-white ${problem.severity === "Essential" ? "bg-primary" : problem.severity === "Critical" ? "bg-red-600" : problem.severity === "Urgent" ? "bg-orange-600" : problem.severity === "Emergency" ? "bg-yellow-600" : "bg-green-600"}`, children: problem.severity }) }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [
            /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8 text-white mb-2" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: problem.title })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "p-4 sm:p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4 min-h-[3rem]", children: problem.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-900", children: problem.price }),
            /* @__PURE__ */ jsxs("span", { className: "text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all", children: [
              "Learn more",
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
            ] })
          ] })
        ] })
      ] }) }, problem.title);
    }) })
  ] }) });
}

const $$ProcessSection = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      number: "01",
      title: "Free Inspection",
      description: "Our certified experts assess your foundation issues with advanced diagnostic tools.",
      icon: "\u{1F50D}",
      duration: "30-60 min"
    },
    {
      number: "02",
      title: "Custom Solution",
      description: "We design a tailored waterproofing plan specific to your home's needs and budget.",
      icon: "\u{1F4CB}",
      duration: "Same day"
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Our trained crews implement your solution with minimal disruption to your home.",
      icon: "\u{1F527}",
      duration: "1-3 days"
    },
    {
      number: "04",
      title: "Lifetime Protection",
      description: "Enjoy peace of mind with our transferable lifetime warranty and ongoing support.",
      icon: "\u{1F6E1}\uFE0F",
      duration: "Forever"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <div class="text-center mb-12 lg:mb-16"> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-light mb-4">
Our <span class="font-bold">Process</span> </h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
From inspection to installation, we make waterproofing simple and stress-free
</p> </div> ` })} <!-- Desktop Timeline --> <div class="hidden lg:block relative"> <!-- Connection Line --> <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2"></div> <div class="grid grid-cols-4 gap-8 relative"> ${steps.map((step, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "delay": index * 0.15, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <div class="relative"> <!-- Step Circle --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border-4 border-primary z-10"> <span class="text-xl">${step.icon}</span> </div> <!-- Content Card --> <div class="bg-white rounded-lg shadow-lg p-6 pt-16 hover:shadow-xl transition-shadow"> <div class="text-5xl font-bold text-gray-100 mb-2">${step.number}</div> <h3 class="text-xl font-semibold mb-2">${step.title}</h3> <p class="text-gray-600 text-sm mb-3">${step.description}</p> <div class="flex items-center text-sm text-primary font-medium"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${step.duration} </div> </div> </div> ` })}`)} </div> </div> <!-- Mobile Timeline --> <div class="lg:hidden space-y-6"> ${steps.map((step, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeLeft", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <div class="flex gap-4"> <!-- Step Number --> <div class="flex-shrink-0"> <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold"> ${step.number} </div> ${index < steps.length - 1 && renderTemplate`<div class="w-0.5 h-full bg-gray-300 mx-auto mt-2"></div>`} </div> <!-- Content --> <div class="flex-1 bg-white rounded-lg shadow p-4 sm:p-6"> <div class="flex items-center gap-2 mb-2"> <span class="text-2xl">${step.icon}</span> <h3 class="text-lg font-semibold">${step.title}</h3> </div> <p class="text-gray-600 text-sm mb-2">${step.description}</p> <div class="flex items-center text-sm text-primary font-medium"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${step.duration} </div> </div> </div> ` })}`)} </div> </div> </section>`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ProcessSection.astro", void 0);

const $$TestimonialsSection = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Toronto, ON",
      rating: 5,
      text: "DrySpace saved our home! Water was seeping through our foundation for months. They fixed it in one day, and we haven't had a drop since. Worth every penny!",
      service: "Foundation Crack Repair",
      date: "2 months ago"
    },
    {
      name: "Robert Chen",
      location: "Mississauga, ON",
      rating: 5,
      text: "Professional from start to finish. The crew was respectful, clean, and efficient. Our basement is finally dry after years of problems. Highly recommend!",
      service: "Interior Waterproofing",
      date: "3 weeks ago"
    },
    {
      name: "Maria Gonzalez",
      location: "Scarborough, ON",
      rating: 5,
      text: "The lifetime warranty gave us peace of mind. When we had a minor issue a year later, they came back immediately at no charge. True to their word!",
      service: "Sump Pump Installation",
      serviceLink: "/services/sump-pump-installation-toronto",
      date: "1 month ago"
    },
    {
      name: "James Thompson",
      location: "Etobicoke, ON",
      rating: 5,
      text: "Emergency service at 2 AM during flooding. They arrived within an hour and saved thousands in damage. Can't thank them enough!",
      service: "Emergency Waterproofing",
      date: "1 week ago"
    },
    {
      name: "Linda Park",
      location: "North York, ON",
      rating: 5,
      text: "Fair pricing and honest assessment. They could have sold me more, but recommended only what I needed. Integrity is rare these days.",
      service: "Exterior Drainage",
      date: "2 months ago"
    },
    {
      name: "David Williams",
      location: "Richmond Hill, ON",
      rating: 5,
      text: "Our real estate agent recommended them. Best decision ever! Increased our home value and solved chronic water issues.",
      service: "Full Basement Waterproofing",
      date: "1 month ago"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-12 sm:py-16 lg:py-24 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <div class="text-center mb-12"> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-light mb-4">
What <span class="font-bold">Customers Say</span> </h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
Join thousands of satisfied homeowners who trust DrySpace
</p> <!-- Overall Rating --> <div class="flex items-center justify-center gap-2 mt-6"> <div class="flex"> ${[...Array(5)].map(() => renderTemplate`<svg class="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <span class="text-lg font-semibold">4.9/5</span> <span class="text-gray-600">(847 reviews)</span> </div> </div> ` })} <!-- Testimonials Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${testimonials.map((testimonial, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": index % 2 === 0 ? "fadeUp" : "fadeDown", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", Card, { "className": "h-full hover:shadow-lg transition-shadow" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", CardContent, { "className": "p-6" }, { "default": ($$result4) => renderTemplate`  <div class="flex mb-3"> ${[...Array(testimonial.rating)].map(() => renderTemplate`<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div>  <p class="text-gray-700 mb-4 italic">"${testimonial.text}"</p>  <div class="border-t pt-4"> <div class="flex items-center justify-between"> <div> <p class="font-semibold text-gray-900">${testimonial.name}</p> <p class="text-sm text-gray-600">${testimonial.location}</p> </div> <div class="text-right"> ${testimonial.serviceLink ? renderTemplate`<a${addAttribute(testimonial.serviceLink, "href")} class="text-xs text-primary hover:underline"> ${testimonial.service} </a>` : renderTemplate`<p class="text-xs text-gray-500">${testimonial.service}</p>`} <p class="text-xs text-gray-400">${testimonial.date}</p> </div> </div> </div> ` })} ` })} ` })}`)} </div> <!-- CTA --> ${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": 0.5, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <div class="text-center mt-12"> <p class="text-gray-600 mb-4">Ready to join our satisfied customers?</p> <a href="/quote" class="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
Get Your Free Quote
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> ` })} </div> </section>`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/TestimonialsSection.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Resources = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resources;
  const {
    heading = "Helpful",
    headingAccent = "Resources",
    subheading = "Expert guides and tools to protect your home",
    resources,
    columns = 3,
    variant = "default",
    showFilters = false,
    filterTags = [],
    ctaText = "View Resource",
    background = "gray"
  } = Astro2.props;
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50"
  };
  const gridClasses = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4"
  };
  const typeIcons = {
    guide: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    video: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    pdf: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    tool: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    article: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    checklist: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
  };
  const typeColors = {
    guide: "bg-blue-100 text-blue-700",
    video: "bg-red-100 text-red-700",
    pdf: "bg-orange-100 text-orange-700",
    tool: "bg-purple-100 text-purple-700",
    article: "bg-green-100 text-green-700",
    checklist: "bg-indigo-100 text-indigo-700"
  };
  const featuredResources = variant === "featured" ? resources.filter((r) => r.featured) : [];
  const regularResources = variant === "featured" ? resources.filter((r) => !r.featured) : resources;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-12 sm:py-16 lg:py-24 ${backgroundClasses[background]}`, "class")}> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <div class="text-center mb-8 sm:mb-12 lg:mb-16"> <h2 class="font-montserrat text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light"> ${heading} <span class="font-semibold">${headingAccent}</span> </h2> ${subheading && renderTemplate`<p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"> ${subheading} </p>`} </div> ` })}  ${showFilters && filterTags.length > 0 && renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <div class="flex flex-wrap justify-center gap-2 mb-8"> <button class="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium">
All Resources
</button> ${filterTags.map((tag) => renderTemplate`<button class="px-4 py-2 rounded-full bg-white text-gray-700 text-sm hover:bg-gray-100 transition-colors"> ${tag} </button>`)} </div> ` })}`}  ${variant === "featured" && featuredResources.length > 0 && renderTemplate`<div class="mb-12"> <h3 class="text-xl font-semibold mb-6 text-center">Featured Resources</h3> <div class="grid sm:grid-cols-2 gap-6 mb-12"> ${featuredResources.map((resource, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", Card, { "className": "overflow-hidden hover:shadow-lg transition-shadow" }, { "default": ($$result3) => renderTemplate` <div class="grid md:grid-cols-2 h-full"> ${resource.image && renderTemplate`<div class="relative h-48 md:h-full"> <img${addAttribute(resource.image, "src")}${addAttribute(resource.title, "alt")} class="w-full h-full object-cover"> <div class="absolute top-4 left-4"> <span${addAttribute(`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${typeColors[resource.type]}`, "class")}> ${resource.type} </span> </div> </div>`} ${renderComponent($$result3, "CardContent", CardContent, { "className": "p-6" }, { "default": ($$result4) => renderTemplate` <h3 class="text-xl font-bold mb-2">${resource.title}</h3> <p class="text-gray-600 mb-4">${resource.description}</p> <div class="flex items-center justify-between"> <div class="text-sm text-gray-500"> ${resource.duration && renderTemplate`<span>${resource.duration}</span>`} ${resource.pages && renderTemplate`<span>${resource.pages} pages</span>`} ${resource.date && renderTemplate`<span>${resource.date}</span>`} </div> ${(resource.link || resource.downloadLink) && renderTemplate`<a${addAttribute(resource.link || resource.downloadLink, "href")} class="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"${addAttribute(resource.downloadLink ? true : void 0, "download")}> ${resource.downloadLink ? "Download" : ctaText} <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(resource.downloadLink ? "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" : "M9 5l7 7-7 7", "d")}></path> </svg> </a>`} </div> ` })} </div> ` })} ` })}`)} </div> </div>`}  ${variant === "cards" ? renderTemplate`<div${addAttribute(`grid grid-cols-1 ${gridClasses[columns]} gap-6`, "class")}> ${regularResources.map((resource, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", Card, { "className": "h-full hover:shadow-lg transition-shadow overflow-hidden" }, { "default": ($$result3) => renderTemplate`${resource.image && renderTemplate`<div class="relative h-48"> <img${addAttribute(resource.image, "src")}${addAttribute(resource.title, "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> <div class="absolute bottom-4 left-4 right-4"> <span${addAttribute(`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${typeColors[resource.type]}`, "class")}> ${resource.type} </span> </div> </div>`}${renderComponent($$result3, "CardContent", CardContent, { "className": "p-6" }, { "default": ($$result4) => renderTemplate` <h3 class="text-lg font-bold mb-2">${resource.title}</h3> <p class="text-sm text-gray-600 mb-4">${resource.description}</p> ${resource.tags && resource.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-4"> ${resource.tags.map((tag) => renderTemplate`<span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"> ${tag} </span>`)} </div>`}<div class="flex items-center justify-between"> <div class="text-sm text-gray-500"> ${resource.duration && renderTemplate`<span>${resource.duration}</span>`} ${resource.pages && renderTemplate`<span>${resource.pages} pages</span>`} </div> ${(resource.link || resource.downloadLink) && renderTemplate`<a${addAttribute(resource.link || resource.downloadLink, "href")} class="text-primary font-medium hover:text-primary/80 transition-colors"${addAttribute(resource.downloadLink ? true : void 0, "download")}> ${resource.downloadLink ? renderTemplate`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>` : renderTemplate`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path> </svg>`} </a>`} </div> ` })} ` })} ` })}`)} </div>` : variant === "list" ? renderTemplate`<div class="space-y-4 max-w-4xl mx-auto"> ${regularResources.map((resource, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.05, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <div class="bg-white rounded-lg p-6 hover:shadow-md transition-shadow"> <div class="flex items-start gap-4"> <div${addAttribute(`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${typeColors[resource.type].split(" ")[0]}`, "class")}> <svg${addAttribute(`w-6 h-6 ${typeColors[resource.type].split(" ")[1]}`, "class")} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(typeIcons[resource.type], "d")}></path> </svg> </div> <div class="flex-grow"> <div class="flex items-start justify-between mb-2"> <h3 class="text-lg font-semibold">${resource.title}</h3> ${(resource.link || resource.downloadLink) && renderTemplate`<a${addAttribute(resource.link || resource.downloadLink, "href")} class="text-primary hover:text-primary/80 transition-colors ml-4"${addAttribute(resource.downloadLink ? true : void 0, "download")}> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(resource.downloadLink ? "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" : "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14", "d")}></path> </svg> </a>`} </div> <p class="text-gray-600 mb-3">${resource.description}</p> <div class="flex items-center gap-4 text-sm text-gray-500"> <span${addAttribute(`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${typeColors[resource.type]}`, "class")}> ${resource.type} </span> ${resource.duration && renderTemplate`<span>${resource.duration}</span>`} ${resource.pages && renderTemplate`<span>${resource.pages} pages</span>`} ${resource.author && renderTemplate`<span>By ${resource.author}</span>`} ${resource.date && renderTemplate`<span>${resource.date}</span>`} </div> </div> </div> </div> ` })}`)} </div>` : variant === "minimal" ? renderTemplate`<div${addAttribute(`grid grid-cols-1 ${gridClasses[columns]} gap-6`, "class")}> ${regularResources.map((resource, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.05, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <div class="text-center"> <div${addAttribute(`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${typeColors[resource.type].split(" ")[0]}`, "class")}> <svg${addAttribute(`w-8 h-8 ${typeColors[resource.type].split(" ")[1]}`, "class")} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(typeIcons[resource.type], "d")}></path> </svg> </div> <h3 class="text-lg font-semibold mb-2">${resource.title}</h3> <p class="text-sm text-gray-600 mb-3">${resource.description}</p> ${(resource.link || resource.downloadLink) && renderTemplate`<a${addAttribute(resource.link || resource.downloadLink, "href")} class="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"${addAttribute(resource.downloadLink ? true : void 0, "download")}> ${resource.downloadLink ? "Download" : ctaText} <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a>`} </div> ` })}`)} </div>` : (
    /* Default variant */
    renderTemplate`<div${addAttribute(`grid grid-cols-1 ${gridClasses[columns]} gap-6`, "class")}> ${regularResources.map((resource, index) => renderTemplate`${renderComponent($$result, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation" }, { "default": ($$result2) => renderTemplate` <div class="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"> <div${addAttribute(`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${typeColors[resource.type].split(" ")[0]}`, "class")}> <svg${addAttribute(`w-6 h-6 ${typeColors[resource.type].split(" ")[1]}`, "class")} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(typeIcons[resource.type], "d")}></path> </svg> </div> <h3 class="text-lg font-bold mb-2">${resource.title}</h3> <p class="text-sm text-gray-600 mb-4">${resource.description}</p> <div class="flex items-center justify-between"> <div class="text-sm text-gray-500"> ${resource.duration && renderTemplate`<span>${resource.duration}</span>`} ${resource.pages && renderTemplate`<span>${resource.pages} pages</span>`} </div> ${(resource.link || resource.downloadLink) && renderTemplate`<a${addAttribute(resource.link || resource.downloadLink, "href")} class="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"${addAttribute(resource.downloadLink ? true : void 0, "download")}> ${resource.downloadLink ? "Download" : ctaText} <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(resource.downloadLink ? "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" : "M9 5l7 7-7 7", "d")}></path> </svg> </a>`} </div> </div> ` })}`)} </div>`
  )} </div> </section>`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/Resources.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const featuredResources = [
    {
      title: "Emergency Water Leak Guide",
      description: "Step-by-step instructions when water enters your basement",
      type: "guide",
      link: "/guides/water-leaking-into-basement-after-heavy-rain",
      featured: true
    },
    {
      title: "DIY vs Professional",
      description: "Complete cost-benefit analysis to help you decide",
      type: "guide",
      link: "/guides/diy-vs-professional-waterproofing"
    },
    {
      title: "Warning Signs Checklist",
      description: "Identify foundation problems before they become expensive",
      type: "checklist",
      link: "/guides/warning-signs-basement-needs-waterproofing"
    },
    {
      title: "Cost Calculator",
      description: "Estimate your waterproofing project costs",
      type: "tool",
      link: "/tools/waterproofing-cost-calculator"
    },
    {
      title: "Toronto Building Codes",
      description: "Requirements and permits for basement waterproofing",
      type: "article",
      link: "/guides/toronto-building-code-basement-waterproofing"
    },
    {
      title: "Insurance Coverage Guide",
      description: "What water damage is covered by insurance",
      type: "guide",
      link: "/guides/waterproofing-insurance-claims"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "DrySpace Waterproofing - Toronto's Trusted Basement Waterproofing Experts", "description": "Professional basement waterproofing services in Toronto & GTA. Lifetime warranty, 24/7 emergency service, 0% financing. Fix foundation cracks, leaks & water damage permanently.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <!-- Hero Section with Video Background --> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "data-astro-cid-j7pv25f6": true })} <!-- Sump Pump Featured Section --> <section class="bg-primary text-white py-6 sm:py-8" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col sm:flex-row items-center justify-between gap-4" data-astro-cid-j7pv25f6> <div class="text-center sm:text-left" data-astro-cid-j7pv25f6> <h2 class="text-xl sm:text-2xl font-bold mb-1" data-astro-cid-j7pv25f6> <span class="text-yellow-300" data-astro-cid-j7pv25f6>⚡ FEATURED:</span> Professional Sump Pump Installation
</h2> <p class="text-sm sm:text-base opacity-90" data-astro-cid-j7pv25f6>
Protect your basement from flooding with our triple-protection system
</p> </div> <div class="flex flex-col sm:flex-row items-center gap-3" data-astro-cid-j7pv25f6> <div class="text-center sm:text-right" data-astro-cid-j7pv25f6> <div class="text-2xl sm:text-3xl font-bold text-yellow-300" data-astro-cid-j7pv25f6>From $2,800</div> <div class="text-xs sm:text-sm opacity-90" data-astro-cid-j7pv25f6>Lifetime Warranty Available</div> </div> <a href="/services/sump-pump-installation-toronto" class="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2" data-astro-cid-j7pv25f6>
Learn More
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> ` })} </div> </section> <!-- Services/Problem Cards Section --> <section class="py-8 sm:py-12 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-8 sm:mb-12 lg:mb-16" data-astro-cid-j7pv25f6> <h2 class="font-montserrat text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light" data-astro-cid-j7pv25f6>
Common Issues We <span class="font-semibold" data-astro-cid-j7pv25f6>Resolve</span> </h2> <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-j7pv25f6>
From minor cracks to major flooding, we have the expertise and technology to solve any waterproofing challenge
</p> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": 0.2, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ProblemCards", ProblemCards, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ProblemCards", "client:component-export": "ProblemCards", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> <!-- Process Section --> ${renderComponent($$result2, "ProcessSection", $$ProcessSection, { "data-astro-cid-j7pv25f6": true })} <!-- Stats Section --> <section class="py-12 sm:py-16 bg-primary text-white" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div data-astro-cid-j7pv25f6> <div class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" data-astro-cid-j7pv25f6>25+</div> <div class="text-sm sm:text-base opacity-90" data-astro-cid-j7pv25f6>Years Experience</div> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "delay": 0.1, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div data-astro-cid-j7pv25f6> <div class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" data-astro-cid-j7pv25f6>12,847</div> <div class="text-sm sm:text-base opacity-90" data-astro-cid-j7pv25f6>Homes Protected</div> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "delay": 0.2, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div data-astro-cid-j7pv25f6> <div class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" data-astro-cid-j7pv25f6>100%</div> <div class="text-sm sm:text-base opacity-90" data-astro-cid-j7pv25f6>Satisfaction Rate</div> </div> ` })} ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "zoomIn", "delay": 0.3, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div data-astro-cid-j7pv25f6> <div class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" data-astro-cid-j7pv25f6>4.9★</div> <div class="text-sm sm:text-base opacity-90" data-astro-cid-j7pv25f6>Google Rating</div> </div> ` })} </div> </div> </section> <!-- Testimonials Section --> ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "data-astro-cid-j7pv25f6": true })} <!-- Resources Section --> ${renderComponent($$result2, "Resources", $$Resources, { "heading": "Expert", "headingAccent": "Resources & Guides", "subheading": "Free guides to help protect your Toronto home from water damage", "resources": featuredResources, "columns": 3, "variant": "default", "background": "white", "ctaText": "Read Guide", "data-astro-cid-j7pv25f6": true })} <!-- Service Areas --> <section class="py-12 sm:py-16 lg:py-24 bg-gray-100" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-12" data-astro-cid-j7pv25f6> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-light mb-4" data-astro-cid-j7pv25f6>
Serving <span class="font-bold" data-astro-cid-j7pv25f6>Greater Toronto Area</span> </h2> <p class="text-lg text-gray-600" data-astro-cid-j7pv25f6>
Fast, reliable waterproofing services across the GTA
</p> </div> ` })} <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" data-astro-cid-j7pv25f6> ${["Toronto", "North York", "Scarborough", "Etobicoke", "Mississauga", "Brampton", "Vaughan", "Richmond Hill", "Markham", "Pickering", "Ajax", "Whitby"].map((area, index) => renderTemplate`${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "delay": index * 0.05, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow" data-astro-cid-j7pv25f6> <h3 class="font-semibold" data-astro-cid-j7pv25f6>${area}</h3> <p class="text-sm text-gray-600 mt-1" data-astro-cid-j7pv25f6>Same day service</p> </div> ` })}`)} </div> </div> </section> <!-- FAQ Section --> ${renderComponent($$result2, "ScrollAnimation", ScrollAnimation, { "animation": "fadeUp", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/ScrollAnimation", "client:component-export": "ScrollAnimation", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FAQSection", $$FAQSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/FAQSection.astro", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ` })} <!-- Final CTA Section --> ${renderComponent($$result2, "CTASection", $$CTASection, { "data-astro-cid-j7pv25f6": true })} </main>  ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })}  ${renderComponent($$result2, "StickyCTA", $$StickyCTA, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
