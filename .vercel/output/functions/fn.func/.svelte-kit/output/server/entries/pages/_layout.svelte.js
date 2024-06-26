import { c as create_ssr_component, e as escape, v as validate_component, a as subscribe, n as null_to_empty } from "../../chunks/ssr.js";
import { t as title } from "../../chunks/config.js";
import { B as BROWSER, w as writable } from "../../chunks/index.js";
import { I as Icon } from "../../chunks/Icon.js";
import { p as page } from "../../chunks/stores.js";
const browser = BROWSER;
const css$4 = {
  code: "footer.svelte-k2ae0s{padding-block:var(--size-7);border-top:1px solid var(--border)}p.svelte-k2ae0s{color:var(--text-2)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<footer class="svelte-k2ae0s"><p class="svelte-k2ae0s">${escape(title)} © ${escape((/* @__PURE__ */ new Date()).getFullYear())}</p> </footer>`;
});
const Circle_user = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }],
    [
      "path",
      {
        "d": "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "circle-user" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CircleUser = Circle_user;
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 16v-4" }],
    ["path", { "d": "M12 8h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "info" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Info$1 = Info;
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "moon" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Moon$1 = Moon;
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
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "sun" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sun$1 = Sun;
const userTheme = browser;
const theme = writable(userTheme);
const css$3 = {
  code: "button.svelte-114mtci.svelte-114mtci{padding:0;font-weight:inherit;background:none;border:none;box-shadow:none;overflow:hidden}button.svelte-114mtci>.svelte-114mtci{display:flex;gap:var(--size-2)}",
  map: null
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$3);
  $$unsubscribe_theme();
  return `<button aria-label="Toggle theme" class="svelte-114mtci">${$theme === "dark" ? `<div class="svelte-114mtci">${validate_component(Sun$1, "Sun").$$render($$result, {}, {}, {})} <span data-svelte-h="svelte-30gjga">Light</span></div>` : `<div class="svelte-114mtci">${validate_component(Moon$1, "Moon").$$render($$result, {}, {}, {})} <span data-svelte-h="svelte-397x2m">Dark</span></div>`} </button>`;
});
const css$2 = {
  code: "nav.svelte-1ihufdv.svelte-1ihufdv{padding-block:var(--size-7)}.links.svelte-1ihufdv.svelte-1ihufdv{margin-block:var(--size-7)}a.svelte-1ihufdv.svelte-1ihufdv{color:inherit;text-decoration:none}.links.svelte-1ihufdv li a.svelte-1ihufdv{display:flex;align-content:center;gap:var(--size-2)}@media(min-width: 768px){nav.svelte-1ihufdv.svelte-1ihufdv{display:flex;justify-content:space-between}.links.svelte-1ihufdv.svelte-1ihufdv{display:flex;gap:var(--size-7);margin-block:0}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav class="svelte-1ihufdv"><a href="/" class="title svelte-1ihufdv"><b>${escape(title)}</b></a> <ul class="links svelte-1ihufdv"><li><a href="/about" class="svelte-1ihufdv">${validate_component(Info$1, "Info").$$render($$result, {}, {}, {})} <span data-svelte-h="svelte-1poeibp">About</span></a></li> <li><a href="/contact" class="svelte-1ihufdv">${validate_component(CircleUser, "CircleUser").$$render($$result, {}, {}, {})} <span data-svelte-h="svelte-1mqhoa6">Contact</span></a></li> <li><a href="/rss.xml" target="_blank" class="svelte-1ihufdv">${validate_component(Rss$1, "Rss").$$render($$result, {}, {}, {})} <span data-svelte-h="svelte-1u97bkq">RSS</span></a></li></ul> ${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {})} </nav>`;
});
const css$1 = {
  code: ".transition.svelte-vcdv4c{height:100%}",
  map: null
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$1);
  return `<div class="transition svelte-vcdv4c">${slots.default ? slots.default({}) : ``}</div>`;
});
const css = {
  code: ".layout.svelte-7nw179.svelte-7nw179{height:100%;max-inline-size:1024px;display:grid;grid-template-rows:auto 1fr auto;margin-inline:auto;padding-inline:var(--size-7)}.layout.svelte-7nw179 main.svelte-7nw179{padding-block-end:var(--size-9);padding-block-start:var(--size-2);display:grid}.main-grid.svelte-7nw179.svelte-7nw179{grid-template-columns:1fr 256px;gap:64px}.page-grid.svelte-7nw179.svelte-7nw179{grid-template-columns:680px;margin-left:auto;margin-right:auto}.card.svelte-7nw179.svelte-7nw179{flex-basis:var(--size-content-1);display:flex;align-self:start;flex-direction:column;gap:var(--size-2);background:var(--surface-3);border:1px solid var(--surface-1);padding:var(--size-4);border-radius:var(--radius-3)}.card.svelte-7nw179>h5.svelte-7nw179{line-height:var(--font-lineheight-1)}@media(min-width: 1024px){.layout.svelte-7nw179.svelte-7nw179{padding-inline:0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMainPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  isMainPage = $page.url.pathname === "/";
  $$unsubscribe_page();
  return `<div class="layout svelte-7nw179">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="${escape(null_to_empty(isMainPage ? "main-grid" : "page-grid"), true) + " svelte-7nw179"}">${validate_component(Transition, "PageTransition").$$render($$result, { url: data.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} ${isMainPage ? `<div class="card svelte-7nw179" data-svelte-h="svelte-18q4g7b"><h5 class="svelte-7nw179">Collected webs</h5> <section><a href="https://www.wakingup.com/" target="_blank">Waking Up</a><br> <small>A New Operating System for Your Mind</small></section> <section><a href="https://fortelabs.com/" target="_blank">Forte Labs</a><br> <small>What&#39;s Your Productivity Potential?</small></section></div>` : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
