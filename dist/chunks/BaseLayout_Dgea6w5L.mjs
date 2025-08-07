import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, i as renderScript, b as createAstro, r as renderComponent, e as renderSlot, j as renderHead } from './astro/server_DRM_B0B9.mjs';
import 'kleur/colors';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { c as cn, B as Button } from './button_DLabDoza.mjs';
import { Phone, Search, Menu, ChevronDown } from 'lucide-react';
import 'clsx';
/* empty css                         */

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-white py-2 sm:py-3 text-center px-4", children: /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm font-medium", children: [
      "Experiencing basement flooding? Call 24/7: ",
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "(437) 545-0067" })
    ] }) }),
    /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:hidden", children: [
      /* @__PURE__ */ jsx("div", { className: cn(
        "bg-white border-b shadow-sm transition-all duration-300",
        isScrolled ? "transform -translate-y-full opacity-0" : ""
      ), children: /* @__PURE__ */ jsxs("div", { className: "px-3 py-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsxs("span", { className: "text-xl font-montserrat", children: [
            "Dry",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Space" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs("a", { href: "tel:4375450067", className: "text-sm text-red-600 font-bold flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: "Emergency" })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex gap-2 overflow-x-auto scrollbar-none", children: [
          /* @__PURE__ */ jsx("a", { href: "/services/sump-pump-installation-toronto", children: /* @__PURE__ */ jsx(Button, { size: "sm", className: "rounded-full whitespace-nowrap bg-primary text-white", children: "Sump Pumps" }) }),
          /* @__PURE__ */ jsx("a", { href: "/services", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "rounded-full whitespace-nowrap", children: "Services" }) }),
          /* @__PURE__ */ jsx("a", { href: "/process", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "rounded-full whitespace-nowrap", children: "Our Process" }) }),
          /* @__PURE__ */ jsx("a", { href: "/reviews", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "rounded-full whitespace-nowrap", children: "Reviews" }) }),
          /* @__PURE__ */ jsx("a", { href: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "sm", className: "rounded-full whitespace-nowrap", children: "Get Quote" }) }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "rounded-full whitespace-nowrap ml-auto",
              onClick: () => setIsMobileMenuOpen(true),
              children: [
                /* @__PURE__ */ jsx(Menu, { className: "w-4 h-4 mr-1" }),
                "More"
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: cn(
        "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b shadow-md transition-all duration-300",
        isScrolled ? "transform translate-y-0 opacity-100" : "transform -translate-y-full opacity-0"
      ), children: /* @__PURE__ */ jsxs("div", { className: "px-3 py-2 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("a", { href: "/", className: "text-lg font-montserrat", children: [
          "D",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: "S" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("a", { href: "/contact", children: /* @__PURE__ */ jsx(Button, { size: "sm", className: "rounded-full", children: "Quote" }) }),
          /* @__PURE__ */ jsx("a", { href: "tel:4375450067", children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "destructive", className: "rounded-full", children: /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }) }) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "ghost",
              size: "icon",
              onClick: () => setIsMobileMenuOpen(true),
              children: /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "hidden lg:block bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "px-4 sm:px-6 lg:px-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-20", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsxs("span", { className: "text-2xl font-montserrat", children: [
        "Dry",
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Space" })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "ghost",
                className: "font-medium flex items-center gap-1",
                onMouseEnter: () => setIsServicesOpen(true),
                onMouseLeave: () => setIsServicesOpen(false),
                children: [
                  "Services",
                  /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
                ]
              }
            ),
            isServicesOpen && /* @__PURE__ */ jsxs(
              "div",
              {
                className: "absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-2",
                onMouseEnter: () => setIsServicesOpen(true),
                onMouseLeave: () => setIsServicesOpen(false),
                children: [
                  /* @__PURE__ */ jsx("a", { href: "/services/sump-pump-installation-toronto", className: "block px-4 py-3 hover:bg-gray-50 transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-semibold text-primary", children: "Sump Pump Installation" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Protect from flooding" })
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded", children: "Featured" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "border-t my-2" }),
                  /* @__PURE__ */ jsx("a", { href: "/services/basement-waterproofing", className: "block px-4 py-2 hover:bg-gray-50 transition-colors", children: "Basement Waterproofing" }),
                  /* @__PURE__ */ jsx("a", { href: "/services/foundation-crack-repair", className: "block px-4 py-2 hover:bg-gray-50 transition-colors", children: "Foundation Crack Repair" }),
                  /* @__PURE__ */ jsx("a", { href: "/services/interior-drainage", className: "block px-4 py-2 hover:bg-gray-50 transition-colors", children: "Interior Drainage" }),
                  /* @__PURE__ */ jsx("a", { href: "/services/exterior-waterproofing", className: "block px-4 py-2 hover:bg-gray-50 transition-colors", children: "Exterior Waterproofing" })
                ]
              }
            )
          ] }),
          [
            { label: "Process", href: "/process" },
            { label: "Warranty", href: "/warranty" },
            { label: "About", href: "/about" },
            { label: "Reviews", href: "/reviews" }
          ].map((item) => /* @__PURE__ */ jsx("a", { href: item.href, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "font-medium", asChild: true, children: /* @__PURE__ */ jsx("span", { children: item.label }) }) }, item.label))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("a", { href: "/contact", children: /* @__PURE__ */ jsx(Button, { className: "font-semibold", children: "Book Free Inspection" }) }),
          /* @__PURE__ */ jsx("a", { href: "tel:4375450067", className: "text-red-600 font-bold text-sm hover:text-red-700", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "hidden xl:inline", children: "(437) 545-0067" }),
            /* @__PURE__ */ jsx("span", { className: "xl:hidden", children: "Emergency" })
          ] }) })
        ] })
      ] })
    ] }) }) }) }),
    isMobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/50", onClick: () => setIsMobileMenuOpen(false) }),
      /* @__PURE__ */ jsx("div", { className: "fixed right-0 top-0 h-full w-64 bg-white shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "ml-auto",
            onClick: () => setIsMobileMenuOpen(false),
            children: "×"
          }
        ),
        /* @__PURE__ */ jsx("nav", { className: "mt-8 space-y-4", children: ["Services", "Process", "Warranty", "About", "Reviews", "Contact"].map((item) => /* @__PURE__ */ jsx(
          "a",
          {
            href: `/${item.toLowerCase()}`,
            className: "block py-2 text-lg hover:text-primary",
            children: item
          },
          item
        )) })
      ] }) })
    ] })
  ] });
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const services = [
    { name: "Sump Pump Installation", link: "/services/sump-pump-installation-toronto", featured: true },
    { name: "Foundation Crack Repair", link: "/services/foundation-crack-repair" },
    { name: "Interior Waterproofing", link: "/services/interior-waterproofing" },
    { name: "Exterior Waterproofing", link: "/services/exterior-waterproofing" },
    { name: "French Drain Systems", link: "/services/french-drain-systems" },
    { name: "Basement Leak Repair", link: "/services/basement-leak-repair" },
    { name: "Weeping Tile Installation", link: "/services/weeping-tile-installation" },
    { name: "Window Well Installation", link: "/services/window-well-installation" },
    { name: "Basement Lowering", link: "/services/basement-lowering" }
  ];
  const areas = [
    { name: "Toronto", link: "/locations/toronto-basement-waterproofing" },
    { name: "North York", link: "/locations/north-york-basement-waterproofing" },
    { name: "Scarborough", link: "/locations/scarborough-basement-waterproofing" },
    { name: "Etobicoke", link: "/locations/etobicoke-basement-waterproofing" },
    { name: "Mississauga", link: "/locations/mississauga-basement-waterproofing" },
    { name: "Brampton", link: "/locations/brampton-basement-waterproofing" },
    { name: "Vaughan", link: "/locations/vaughan-basement-waterproofing" },
    { name: "Richmond Hill", link: "/locations/richmond-hill-basement-waterproofing" },
    { name: "Markham", link: "/locations/markham-basement-waterproofing" },
    { name: "Oakville", link: "/locations/oakville-basement-waterproofing" },
    { name: "Burlington", link: "/locations/burlington-basement-waterproofing" },
    { name: "Ajax", link: "/locations/ajax-basement-waterproofing" }
  ];
  const resources = [
    { name: "Expert Guides", link: "/guides", featured: true },
    { name: "DIY Sump Pump Guide", link: "/blog/diy-sump-pump-replacement-guide-toronto" },
    { name: "Waterproofing Guide", link: "/blog/complete-basement-waterproofing-guide-toronto" },
    { name: "Cost Calculator", link: "/tools/waterproofing-cost-calculator" },
    { name: "Problem Diagnostic", link: "/tools/basement-problem-diagnostic" },
    { name: "Maintenance Tips", link: "/resources/maintenance-guide" },
    { name: "Insurance Claims Help", link: "/resources/insurance-claims" },
    { name: "Warranty Information", link: "/warranty" },
    { name: "FAQ", link: "/faq" }
  ];
  const company = [
    { name: "About Us", link: "/about" },
    { name: "Our Process", link: "/process" },
    { name: "Reviews & Testimonials", link: "/reviews" },
    { name: "Before & After Gallery", link: "/gallery" },
    { name: "Financing Options", link: "/financing" },
    { name: "Emergency Services", link: "/emergency" },
    { name: "Commercial Services", link: "/commercial" },
    { name: "Contact Us", link: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white"> <!-- Newsletter Section --> <div class="bg-primary"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="flex flex-col md:flex-row items-center justify-between gap-4"> <div> <h3 class="text-xl font-semibold mb-1">Stay Protected with Expert Tips</h3> <p class="text-sm opacity-90">Get monthly waterproofing tips and exclusive offers</p> </div> <form class="flex flex-col sm:flex-row gap-3 w-full md:w-auto"> <input type="email" placeholder="Enter your email" class="px-4 py-2 rounded-lg text-gray-900 w-full sm:w-64" required> <button type="submit" class="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
Subscribe
</button> </form> </div> </div> </div> <!-- Main Footer --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"> <!-- Company Info - Spans 2 columns --> <div class="lg:col-span-2 space-y-4"> <div class="flex items-center"> <span class="text-2xl font-montserrat">
Dry<span class="font-bold">Space</span> </span> </div> <p class="text-gray-400 text-sm">
Toronto's most trusted basement waterproofing experts. Protecting homes since 1998 with lifetime warranties and 24/7 emergency service.
</p> <!-- Certifications --> <div class="flex flex-wrap gap-3 pt-2"> <div class="bg-gray-800 px-3 py-2 rounded-lg"> <span class="text-xs font-semibold">BBB A+ Rated</span> </div> <div class="bg-gray-800 px-3 py-2 rounded-lg"> <span class="text-xs font-semibold">Licensed & Insured</span> </div> <div class="bg-gray-800 px-3 py-2 rounded-lg"> <span class="text-xs font-semibold">WSIB Coverage</span> </div> <div class="bg-gray-800 px-3 py-2 rounded-lg"> <span class="text-xs font-semibold">25+ Years</span> </div> </div> <!-- Emergency CTA --> <div class="bg-red-900/20 border border-red-800 rounded-lg p-4 mt-4"> <p class="text-sm font-semibold text-red-400 mb-2">24/7 Emergency Service</p> <a href="tel:4375450067" class="text-xl font-bold text-white hover:text-red-400 transition-colors">
(437) 545-0067
</a> </div> </div> <!-- Services --> <div> <h3 class="text-lg font-semibold mb-4">Services</h3> <ul class="space-y-2"> ${services.map((service) => renderTemplate`<li> <a${addAttribute(service.link, "href")}${addAttribute(`text-sm transition-colors block py-0.5 ${service.featured ? "text-yellow-400 hover:text-yellow-300 font-semibold" : "text-gray-400 hover:text-white"}`, "class")}> ${service.featured && renderTemplate`<span>⭐ </span>`}${service.name} </a> </li>`)} </ul> </div> <!-- Service Areas --> <div> <h3 class="text-lg font-semibold mb-4">Service Areas</h3> <ul class="space-y-2"> ${areas.map((area) => renderTemplate`<li> <a${addAttribute(area.link, "href")} class="text-gray-400 hover:text-white text-sm transition-colors block py-0.5"> ${area.name} </a> </li>`)} </ul> </div> <!-- Resources --> <div> <h3 class="text-lg font-semibold mb-4">Resources</h3> <ul class="space-y-2"> ${resources.map((resource) => renderTemplate`<li> <a${addAttribute(resource.link, "href")}${addAttribute(`text-sm transition-colors block py-0.5 ${resource.featured ? "text-yellow-400 hover:text-yellow-300 font-semibold" : "text-gray-400 hover:text-white"}`, "class")}> ${resource.featured && renderTemplate`<span>📚 </span>`}${resource.name} </a> </li>`)} </ul> </div> <!-- Company --> <div> <h3 class="text-lg font-semibold mb-4">Company</h3> <ul class="space-y-2"> ${company.map((item) => renderTemplate`<li> <a${addAttribute(item.link, "href")} class="text-gray-400 hover:text-white text-sm transition-colors block py-0.5"> ${item.name} </a> </li>`)} </ul> </div> </div> <!-- Contact Section --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-800"> <!-- Phone --> <div class="flex items-start gap-3"> <div class="bg-primary/20 p-3 rounded-lg"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <p class="text-sm text-gray-400 mb-1">Call Us 24/7</p> <a href="tel:4375450067" class="text-lg font-semibold hover:text-primary transition-colors">
(437) 545-0067
</a> <p class="text-xs text-gray-500 mt-1">Emergency service available</p> </div> </div> <!-- Email --> <div class="flex items-start gap-3"> <div class="bg-primary/20 p-3 rounded-lg"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div> <p class="text-sm text-gray-400 mb-1">Email Us</p> <a href="mailto:info@dryspacewaterproofing.ca" class="text-lg font-semibold hover:text-primary transition-colors">
info@dryspacewaterproofing.ca
</a> <p class="text-xs text-gray-500 mt-1">We respond within 2 hours</p> </div> </div> <!-- Location --> <div class="flex items-start gap-3"> <div class="bg-primary/20 p-3 rounded-lg"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <p class="text-sm text-gray-400 mb-1">Service Area</p> <p class="text-lg font-semibold">Greater Toronto Area</p> <p class="text-xs text-gray-500 mt-1">On-site estimates available</p> </div> </div> </div> <!-- Social Media --> <div class="flex items-center justify-center gap-4 mt-12 pt-12 border-t border-gray-800"> <p class="text-gray-400 text-sm mr-4">Follow Us:</p> <a href="#" class="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors group" aria-label="Facebook"> <svg class="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a> <a href="#" class="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors group" aria-label="Twitter"> <svg class="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path> </svg> </a> <a href="#" class="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors group" aria-label="Instagram"> <svg class="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"></path> </svg> </a> <a href="#" class="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors group" aria-label="YouTube"> <svg class="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path> </svg> </a> <a href="#" class="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors group" aria-label="Google"> <svg class="w-5 h-5 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"> <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path> </svg> </a> </div> </div> <!-- Bottom Bar --> <div class="border-t border-gray-800 bg-gray-950"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <div class="flex flex-col sm:flex-row justify-between items-center gap-4"> <div class="text-center sm:text-left"> <p class="text-gray-400 text-sm">
© ${currentYear} DrySpace Waterproofing. All rights reserved.
</p> <p class="text-gray-500 text-xs mt-1">
Serving Toronto & GTA for over 25 years
</p> </div> <div class="flex flex-wrap justify-center gap-4 text-sm"> <a href="/privacy" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a> <span class="text-gray-600">|</span> <a href="/terms" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a> <span class="text-gray-600">|</span> <a href="/accessibility" class="text-gray-400 hover:text-white transition-colors">Accessibility</a> <span class="text-gray-600">|</span> <a href="/sitemap.xml" class="text-gray-400 hover:text-white transition-colors">Sitemap</a> </div> </div> </div> </div> </footer>`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/Footer.astro", void 0);

const $$StickyCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="sticky-cta" class="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg transform translate-y-full transition-transform duration-300 z-40 sm:hidden"> <div class="grid grid-cols-2 gap-2 p-3"> <a href="/quote" class="bg-primary text-white text-center py-3 px-4 rounded-lg font-semibold text-sm">
Get Quote
</a> <a href="tel:4375450067" class="bg-green-600 text-white text-center py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
Call Now
</a> </div> <div class="bg-yellow-50 text-center py-2 px-3 text-xs text-yellow-800 font-medium">
🌧️ Emergency? We're available 24/7
</div> </div> ${renderScript($$result, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/StickyCTA.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/StickyCTA.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:4321");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "DrySpace Waterproofing - Toronto's trusted basement waterproofing experts. Lifetime warranty, same-day service, 0% financing available.",
    keywords = "basement waterproofing Toronto, foundation repair, sump pump installation, waterproofing contractors",
    image = "/og-image.jpg",
    noStickyCTA = false
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.url);
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth" data-astro-cid-37fxchfa> <head><!-- Basic Meta Tags --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><!-- SEO Meta Tags --><title>", '</title><meta name="description"', '><meta name="keywords"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name" content="DrySpace Waterproofing"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><!-- Theme Color --><meta name="theme-color" content="#0066CC"><!-- Structured Data --><script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "LocalBusiness",\n      "name": "DrySpace Waterproofing",\n      "description": "Professional basement waterproofing services in Toronto and GTA",\n      "url": "https://dryspacewaterproofing.ca",\n      "telephone": "+14375450067",\n      "email": "info@dryspacewaterproofing.ca",\n      "address": {\n        "@type": "PostalAddress",\n        "addressLocality": "Toronto",\n        "addressRegion": "ON",\n        "addressCountry": "CA",\n        "postalCode": "M5V"\n      },\n      "geo": {\n        "@type": "GeoCoordinates",\n        "latitude": 43.653226,\n        "longitude": -79.3831843\n      },\n      "openingHoursSpecification": {\n        "@type": "OpeningHoursSpecification",\n        "dayOfWeek": [\n          "Monday",\n          "Tuesday", \n          "Wednesday",\n          "Thursday",\n          "Friday",\n          "Saturday",\n          "Sunday"\n        ],\n        "opens": "00:00",\n        "closes": "23:59"\n      },\n      "priceRange": "$$",\n      "image": "https://dryspacewaterproofing.ca/images/dryspace-logo.png",\n      "sameAs": [\n        "https://www.facebook.com/dryspacewaterproofing",\n        "https://twitter.com/dryspaceto",\n        "https://www.instagram.com/dryspacewaterproofing",\n        "https://www.youtube.com/dryspacewaterproofing"\n      ],\n      "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n        "name": "Waterproofing Services",\n        "itemListElement": [\n          {\n            "@type": "Offer",\n            "itemOffered": {\n              "@type": "Service",\n              "name": "Basement Waterproofing",\n              "description": "Complete interior and exterior waterproofing solutions"\n            }\n          },\n          {\n            "@type": "Offer",\n            "itemOffered": {\n              "@type": "Service",\n              "name": "Foundation Crack Repair",\n              "description": "Professional crack injection and sealing"\n            }\n          },\n          {\n            "@type": "Offer",\n            "itemOffered": {\n              "@type": "Service",\n              "name": "Sump Pump Installation",\n              "description": "Professional sump pump installation with battery backup"\n            }\n          }\n        ]\n      }\n    }\n  <\/script>', '</head> <body class="font-open-sans bg-white text-gray-900 min-h-screen flex flex-col" data-astro-cid-37fxchfa> <!-- Skip to main content for accessibility --> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50" data-astro-cid-37fxchfa>\nSkip to main content\n</a> <!-- Navigation Header --> ', ' <!-- Main Content Area --> <main id="main-content" class="flex-grow" data-astro-cid-37fxchfa> ', " </main> <!-- Footer --> ", " <!-- Sticky Mobile CTA (conditional) --> ", " <!-- Global Scripts --> ", ' <!-- Google Analytics Script --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-6YP8E9YLPX"><\/script> <!-- Schema Markup for Breadcrumbs (if applicable) --> <script type="application/ld+json" id="breadcrumb-schema"><\/script> </body> </html> '])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image.startsWith("http") ? image : new URL(image, Astro2.url).href, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image.startsWith("http") ? image : new URL(image, Astro2.url).href, "content"), renderHead(), renderComponent($$result, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/components/Navigation", "client:component-export": "Navigation", "data-astro-cid-37fxchfa": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true }), !noStickyCTA && renderTemplate`${renderComponent($$result, "StickyCTA", $$StickyCTA, { "data-astro-cid-37fxchfa": true })}`, renderScript($$result, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/Pavel/Desktop/New folder/dryspace-astro/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, Navigation as N, $$StickyCTA as a, $$Footer as b };
