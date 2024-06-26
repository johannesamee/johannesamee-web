import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const css = {
  code: ".error.svelte-2l8l59{height:100%;display:grid;place-content:center}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="error svelte-2l8l59"><h1>${escape($page.status)}: ${escape($page.error?.message)}</h1> </div>`;
});
export {
  Error as default
};
