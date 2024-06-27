import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape, b as spread, d as escape_object, n as null_to_empty } from "../../chunks/ssr.js";
import { t as title } from "../../chunks/config.js";
import { c as createLinkPreview } from "../../chunks/create.js";
import { I as Icon } from "../../chunks/Icon.js";
import { w as writable } from "../../chunks/index2.js";
import { B as BROWSER } from "../../chunks/prod-ssr.js";
import { p as page } from "../../chunks/stores.js";
const browser = BROWSER;
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
const css$4 = {
  code: ".trigger.svelte-1basenp.svelte-1basenp{display:flex;height:2rem;width:2rem;align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0px;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgb(121 58 21 / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.trigger.svelte-1basenp.svelte-1basenp:hover{background-color:rgb(255 255 255 / 0.9)}.trigger.svelte-1basenp.svelte-1basenp:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(247 177 85 / var(--tw-ring-opacity));--tw-ring-offset-width:2px}footer.svelte-1basenp.svelte-1basenp{padding-block:var(--size-7);border-top:1px solid var(--border)}footer.svelte-1basenp a.svelte-1basenp{align-content:center}p.svelte-1basenp.svelte-1basenp{color:var(--text-2)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $trigger, $$unsubscribe_trigger;
  let $open, $$unsubscribe_open;
  let $content, $$unsubscribe_content;
  let $arrow, $$unsubscribe_arrow;
  const { elements: { trigger, content, arrow }, states: { open } } = createLinkPreview({ forceVisible: true });
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_arrow = subscribe(arrow, (value) => $arrow = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  $$result.css.add(css$4);
  $$unsubscribe_trigger();
  $$unsubscribe_open();
  $$unsubscribe_content();
  $$unsubscribe_arrow();
  return `<footer class="flex justify-between svelte-1basenp"><p class="svelte-1basenp">${escape(title)} © ${escape((/* @__PURE__ */ new Date()).getFullYear())}</p> <div class="flex gap-3"><div${spread([{ class: "trigger me-2" }, escape_object($trigger)], { classes: "svelte-1basenp" })}><img src="https://media.licdn.com/dms/image/D4D03AQEXI0MHYf3fQA/profile-displayphoto-shrink_200_200/0/1710513333483?e=1724889600&v=beta&t=sH3WNF2xdILIzdPQwj5rjrw7PgKgoPJuzL8dbUWQnxk" alt="Linkedin Profile Picture" class="h-full w-full rounded-full bg-neutral-900 object-contain p-1"> <span class="sr-only" data-svelte-h="svelte-ts639p">Open Melt UI Details</span></div> ${$open ? `<div${spread(
    [
      escape_object($content),
      {
        class: "z-10 rounded-md bg-white shadow-sm"
      }
    ],
    { classes: "svelte-1basenp" }
  )}><div class="w-[300px] rounded-md bg-white p-5 shadow-sm" data-svelte-h="svelte-dm9c4k"><div class="flex flex-col gap-2"><img src="https://media.licdn.com/dms/image/D4D03AQEXI0MHYf3fQA/profile-displayphoto-shrink_200_200/0/1710513333483?e=1724889600&v=beta&t=sH3WNF2xdILIzdPQwj5rjrw7PgKgoPJuzL8dbUWQnxk" alt="Linkedin Profile Picture" class="object-fit block h-14 w-14 rounded-full bg-neutral-900 p-1"> <div class="flex flex-col gap-4"><div><div class="font-bold text-neutral-900">Johannes Amée Björkdahl</div> <div class="text-neutral-400">Delivery Lead</div></div></div> <div class="m-0 text-neutral-700">TBA</div> <div class="flex gap-4"><div class="flex gap-1"><a class="text-neutral-400 underline svelte-1basenp" href="https://www.linkedin.com/company/decerno-ab/">Decerno AB</a></div> <div class="flex gap-1"><div class="text-neutral-400">Gothenburg</div></div></div></div></div> <div${spread([escape_object($arrow)], { classes: "svelte-1basenp" })}></div></div>` : ``} <a href="https://www.linkedin.com/in/johannes-am%C3%A9e-bj%C3%B6rkdahl-ab7495a9" target="_blank" class="svelte-1basenp">${validate_component(Linkedin$1, "Linkedin").$$render($$result, {}, {}, {})}</a> <a href="/rss.xml" target="_blank" class="svelte-1basenp">${validate_component(Rss$1, "Rss").$$render($$result, {}, {}, {})}</a> <a href="https://github.com/johannesamee" target="_blank" class="svelte-1basenp">${validate_component(Github$1, "Github").$$render($$result, {}, {}, {})}</a></div> </footer>`;
});
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
