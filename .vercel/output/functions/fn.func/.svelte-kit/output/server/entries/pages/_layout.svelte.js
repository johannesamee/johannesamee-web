import { c as create_ssr_component, v as validate_component, e as escape, b as subscribe } from "../../chunks/ssr.js";
import { t as title } from "../../chunks/config.js";
import { I as Icon } from "../../chunks/Icon.js";
import { p as page } from "../../chunks/stores.js";
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "github" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Github$1 = Github;
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    ],
    [
      "rect",
      {
        "width": "4",
        "height": "12",
        "x": "2",
        "y": "9"
      }
    ],
    ["circle", { "cx": "4", "cy": "4", "r": "2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "linkedin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Linkedin$1 = Linkedin;
const Rss = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M4 11a9 9 0 0 1 9 9" }],
    ["path", { "d": "M4 4a16 16 0 0 1 16 16" }],
    ["circle", { "cx": "5", "cy": "19", "r": "1" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "rss" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Rss$1 = Rss;
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="footer text-base-content items-center py-8 relative"><aside class="grid-flow-col items-center"><svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> <p>${escape(title)} © ${escape((/* @__PURE__ */ new Date()).getFullYear())}</p></aside> <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"><a href="https://www.linkedin.com/in/johannes-am%C3%A9e-bj%C3%B6rkdahl-ab7495a9" target="_blank">${validate_component(Linkedin$1, "Linkedin").$$render($$result, {}, {}, {})}</a> <a href="https://github.com/johannesamee" target="_blank">${validate_component(Github$1, "Github").$$render($$result, {}, {}, {})}</a> <a href="/rss.xml" target="_blank">${validate_component(Rss$1, "Rss").$$render($$result, {}, {}, {})}</a></nav></footer> `;
});
const css = {
  code: "nav.svelte-1ihufdv.svelte-1ihufdv{padding-block:var(--size-7)}a.svelte-1ihufdv.svelte-1ihufdv{color:inherit;text-decoration:none}.links li.svelte-1ihufdv a.svelte-1ihufdv{display:flex;align-content:center;gap:var(--size-2)}@media(min-width: 768px){nav.svelte-1ihufdv.svelte-1ihufdv{display:flex;justify-content:space-between}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="svelte-1ihufdv"><div class="navbar px-0 bg-base-100 mb-8 z-10 gap-1"><div class="avatar" data-svelte-h="svelte-wc7zah"><div class="w-12 rounded-full"><img src="https://media.licdn.com/dms/image/D4D03AQEXI0MHYf3fQA/profile-displayphoto-shrink_800_800/0/1710513333483?e=1724889600&v=beta&t=Da52QVeoZ8fdB5Ch-5WrqVHyAyMmG5S2VfdOVFNIxds" alt="Linkedin Profile Picture"></div></div> <div class="flex-1 gap-1"><a href="/" class="btn btn-ghost text-xl svelte-1ihufdv">${escape(title)}</a> <div class="badge badge-info" data-svelte-h="svelte-1iv5sb3">Under Construction</div></div> <div class="flex-none" data-svelte-h="svelte-sj9oct"><ul class="menu menu-horizontal px-1"><li class="svelte-1ihufdv"><a href="/contact" class="svelte-1ihufdv">Contact</a></li> <li class="svelte-1ihufdv"><a href="/about" class="svelte-1ihufdv">About</a></li> <li class="svelte-1ihufdv"><a href="/rss.xml" target="_blank" class="svelte-1ihufdv">RSS</a></li></ul></div></div>  </nav>`;
});
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<div class="transition">${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMainPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  isMainPage = $page.url.pathname === "/";
  $$unsubscribe_page();
  return `<div class="${"max-w-screen-" + escape(isMainPage ? "lg" : "sm", true) + " layout mx-auto"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${validate_component(Transition, "PageTransition").$$render($$result, { url: data.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
