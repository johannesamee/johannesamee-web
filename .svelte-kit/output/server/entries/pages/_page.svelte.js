import { c as create_ssr_component, v as validate_component, e as escape, f as each, h as add_attribute } from "../../chunks/ssr.js";
import { f as formatDate } from "../../chunks/utils.js";
import { t as title } from "../../chunks/config.js";
import { I as Icon } from "../../chunks/Icon.js";
const Calendar_days = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M8 2v4" }],
    ["path", { "d": "M16 2v4" }],
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "4",
        "rx": "2"
      }
    ],
    ["path", { "d": "M3 10h18" }],
    ["path", { "d": "M8 14h.01" }],
    ["path", { "d": "M12 14h.01" }],
    ["path", { "d": "M16 14h.01" }],
    ["path", { "d": "M8 18h.01" }],
    ["path", { "d": "M12 18h.01" }],
    ["path", { "d": "M16 18h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "calendar-days" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CalendarDays = Calendar_days;
const css = {
  code: ".posts.svelte-1dlxp6h.svelte-1dlxp6h{display:grid;gap:var(--size-3)}.post.svelte-1dlxp6h.svelte-1dlxp6h{max-inline-size:var(--size-content-3)}.post.svelte-1dlxp6h p.svelte-1dlxp6h{margin-block-start:var(--size-1)}.post.svelte-1dlxp6h.svelte-1dlxp6h:not(:last-child){border-bottom:1px solid var(--border);padding-bottom:var(--size-2)}.title.svelte-1dlxp6h.svelte-1dlxp6h{font-size:var(--font-size-fluid-1)}.date.svelte-1dlxp6h.svelte-1dlxp6h{color:var(--text-2)}.description.svelte-1dlxp6h.svelte-1dlxp6h{margin-top:var(--size-3)}li.svelte-1dlxp6h p.svelte-1dlxp6h{display:flex;align-content:center;gap:var(--size-2)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-fbczdu_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-fbczdu_END -->`, ""} <section><ul class="posts svelte-1dlxp6h">${each(data.posts, (post) => {
    return `<li class="post svelte-1dlxp6h"><a${add_attribute("href", post.slug, 0)} class="title svelte-1dlxp6h">${escape(post.title)}</a> <p class="date svelte-1dlxp6h">${validate_component(CalendarDays, "CalendarDays").$$render($$result, {}, {}, {})}${escape(formatDate(post.date))}</p> <p class="description svelte-1dlxp6h">${escape(post.description)}</p> </li>`;
  })}</ul> </section>`;
});
export {
  Page as default
};
