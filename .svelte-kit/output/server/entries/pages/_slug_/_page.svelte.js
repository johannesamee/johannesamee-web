import { c as create_ssr_component, e as escape, h as add_attribute, f as each, v as validate_component, m as missing_component } from "../../../chunks/ssr.js";
import { f as formatDate } from "../../../chunks/utils.js";
const css = {
  code: "article.svelte-1a0dk57.svelte-1a0dk57{max-inline-size:var(--size-content-3)}h1.svelte-1a0dk57.svelte-1a0dk57{text-transform:capitalize;font-size:var(--font-size-fluid-2)}h1.svelte-1a0dk57+p.svelte-1a0dk57{margin-top:var(--size-2);color:var(--text-2)}.tags.svelte-1a0dk57.svelte-1a0dk57{display:flex;gap:var(--size-1);margin-top:var(--size-1)}.tags.svelte-1a0dk57>.svelte-1a0dk57{padding:var(--size-1) var(--size-2);border-radius:var(--radius-round)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ylbs26_START -->${$$result.title = `<title>${escape(data.meta.title)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.meta.title, 0)}><!-- HEAD_svelte-ylbs26_END -->`, ""} <article class="svelte-1a0dk57"><hgroup><h1 class="svelte-1a0dk57">${escape(data.meta.title)}</h1> <p class="svelte-1a0dk57">Published at ${escape(formatDate(data.meta.date))}</p></hgroup> <div class="tags svelte-1a0dk57">${each(data.meta.categories, (category) => {
    return `<small class="surface-4 svelte-1a0dk57">#${escape(category)}</small>`;
  })}</div> <div class="prose">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div> </article>`;
});
export {
  Page as default
};
