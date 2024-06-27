import { c as create_ssr_component, v as validate_component, b as subscribe, e as escape, d as each, f as add_attribute } from "../../chunks/ssr.js";
import { f as formatDate } from "../../chunks/utils.js";
import { t as title } from "../../chunks/config.js";
import { p as page } from "../../chunks/stores.js";
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMainPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  isMainPage = $page.url.pathname === "/";
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-fbczdu_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-fbczdu_END -->`, ""} <section class="grid grid-cols-4"><ul class="posts col-span-3 mr-16">${each(data.posts, (post) => {
    return `<article class="post"><a${add_attribute("href", post.slug, 0)} class="title">${escape(post.title)}</a> <p class="date">${validate_component(CalendarDays, "CalendarDays").$$render($$result, {}, {}, {})}${escape(formatDate(post.date))}</p> <p class="description">${escape(post.description)}</p> </article>`;
  })}</ul> ${isMainPage ? `<div class="card bg-base-100 w-fit h-fit glass prose prose-a:underline" data-svelte-h="svelte-5l2cq"><div class="card-body"><h2 class="card-title">Collected Webs</h2> <span><a href="https://www.wakingup.com/" target="_blank">Waking Up</a>, by Sam Harris</span> <span><a href="https://fortelabs.com/" target="_blank">Forte Labs</a>, by Tiago Forte</span></div></div>` : ``} </section>`;
});
export {
  Page as default
};
