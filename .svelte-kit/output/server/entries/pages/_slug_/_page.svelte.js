import { c as create_ssr_component, e as escape, k as add_attribute, g as each, v as validate_component, m as missing_component } from "../../../chunks/ssr.js";
import { f as formatDate } from "../../../chunks/utils.js";
const css = {
  code: "article.svelte-1alxhi7.svelte-1alxhi7{max-inline-size:var(--size-content-3);margin-inline:auto}h1.svelte-1alxhi7.svelte-1alxhi7{text-transform:capitalize}h1.svelte-1alxhi7+p.svelte-1alxhi7{margin-top:var(--size-2);color:var(--text-2)}.tags.svelte-1alxhi7.svelte-1alxhi7{display:flex;gap:var(--size-3);margin-top:var(--size-7)}.tags.svelte-1alxhi7>.svelte-1alxhi7{padding:var(--size-2) var(--size-3);border-radius:var(--radius-round)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ylbs26_START -->${$$result.title = `<title>${escape(data.meta.title)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.meta.title, 0)}><!-- HEAD_svelte-ylbs26_END -->`, ""} <article class="svelte-1alxhi7"><hgroup><h1 class="svelte-1alxhi7">${escape(data.meta.title)}</h1> <p class="svelte-1alxhi7">Published at ${escape(formatDate(data.meta.date))}</p></hgroup> <div class="tags svelte-1alxhi7">${each(data.meta.categories, (category) => {
    return `<span class="surface-4 svelte-1alxhi7">#${escape(category)}</span>`;
  })}</div> <div class="prose">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div> </article>`;
});
export {
  Page as default
};
