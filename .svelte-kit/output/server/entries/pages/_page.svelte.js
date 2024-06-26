import { c as create_ssr_component, e as escape, g as each, k as add_attribute } from "../../chunks/ssr.js";
import { f as formatDate } from "../../chunks/utils.js";
import { t as title } from "../../chunks/config.js";
const css = {
  code: ".posts.svelte-ajmvwb{display:grid;gap:var(--size-7)}.post.svelte-ajmvwb{max-inline-size:var(--size-content-3)}.post.svelte-ajmvwb:not(:last-child){border-bottom:1px solid var(--border);padding-bottom:var(--size-7)}.title.svelte-ajmvwb{font-size:var(--font-size-fluid-2)}.date.svelte-ajmvwb{color:var(--text-2)}.description.svelte-ajmvwb{margin-top:var(--size-3)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-fbczdu_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-fbczdu_END -->`, ""} <section><ul class="posts svelte-ajmvwb">${each(data.posts, (post) => {
    return `<li class="post svelte-ajmvwb"><a${add_attribute("href", post.slug, 0)} class="title svelte-ajmvwb">${escape(post.title)}</a> <p class="date svelte-ajmvwb">${escape(formatDate(post.date))}</p> <p class="description svelte-ajmvwb">${escape(post.description)}</p> </li>`;
  })}</ul> </section>`;
});
export {
  Page as default
};
