import{j as e,c as o}from"./utils.BYJ6mHyy.js";import"./index.DpdnEki1.js";import{C as t,d as l}from"./card.CEWUYD58.js";import{c}from"./index.BqxvkkeP.js";import{S as n}from"./star.ORLdvepd.js";import{c as d}from"./createLucideIcon.CSfXXXOs.js";/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],x=d("quote",m),f=c("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function u({className:s,variant:a,...r}){return e.jsx("div",{className:o(f({variant:a}),s),...r})}function b({reviews:s}){return e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"overflow-hidden",children:e.jsx("div",{className:"flex gap-6 animate-scroll",children:[...s,...s].map((a,r)=>e.jsx(t,{className:"flex-none w-full md:w-1/2 lg:w-1/3",children:e.jsxs(l,{className:"p-6",children:[e.jsx("div",{className:"flex mb-4",children:[...Array(5)].map((p,i)=>e.jsx(n,{className:`w-5 h-5 ${i<a.rating?"text-yellow-400 fill-yellow-400":"text-gray-300"}`},i))}),e.jsxs("blockquote",{className:"relative",children:[e.jsx(x,{className:"absolute -top-2 -left-2 w-8 h-8 text-blue-100"}),e.jsxs("p",{className:"text-gray-700 italic relative z-10 pl-6",children:['"',a.review,'"']})]}),e.jsxs("div",{className:"mt-4 pt-4 border-t",children:[e.jsx("div",{className:"font-semibold text-gray-900",children:a.name}),e.jsx("div",{className:"text-sm text-gray-600",children:a.location})]})]})},r))})}),e.jsx("style",{jsx:!0,children:`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 15s;
          }
        }
      `})]})}function w(){return e.jsxs("div",{className:"flex justify-center gap-6 mt-12",children:[e.jsx(t,{children:e.jsxs(l,{className:"flex items-center gap-2 p-4",children:[e.jsx(n,{className:"w-5 h-5 text-yellow-400 fill-yellow-400"}),e.jsx("span",{className:"font-semibold",children:"4.9/5 Average Rating"})]})}),e.jsx(t,{children:e.jsx(l,{className:"flex items-center gap-2 p-4",children:e.jsxs(u,{variant:"secondary",className:"gap-1",children:[e.jsx(n,{className:"w-4 h-4"}),"100+ Verified Reviews"]})})})]})}export{w as ReviewStats,b as default};
