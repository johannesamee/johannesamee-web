import { c as create_ssr_component, e as escape, g as each, k as add_attribute } from "../../chunks/ssr.js";
import { f as formatDate } from "../../chunks/utils.js";
import { t as title } from "../../chunks/config.js";
const css = {
  code: ".posts.svelte-1tkp6cl{display:grid;gap:var(--size-7)}.post.svelte-1tkp6cl{max-inline-size:var(--size-content-3)}.post.svelte-1tkp6cl:not(:last-child){border-bottom:1px solid var(--border);padding-bottom:var(--size-7)}.title.svelte-1tkp6cl{font-size:var(--font-size-fluid-3);text-transform:capitalize}.date.svelte-1tkp6cl{color:var(--text-2)}.description.svelte-1tkp6cl{margin-top:var(--size-3)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-fbczdu_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-fbczdu_END -->`, ""} <section><ul class="posts svelte-1tkp6cl">${each(data.posts, (post) => {
    return `<li class="post svelte-1tkp6cl"><a${add_attribute("href", post.slug, 0)} class="title svelte-1tkp6cl">${escape(post.title)}</a> <p class="date svelte-1tkp6cl">${escape(formatDate(post.date))}</p> <p class="description svelte-1tkp6cl">${escape(post.description)}</p> </li>`;
  })}</ul> </section>`;
});
export {
  Page as default
};
