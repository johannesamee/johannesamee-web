import { c as create_ssr_component, v as validate_component, b as subscribe, e as escape, d as each, f as add_attribute } from "../../chunks/ssr.js";
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
function formatDate(date, dateStyle = "medium", locales = "en") {
  const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
  return formatter.format(new Date(date));
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMainPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  isMainPage = $page.url.pathname === "/";
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-fbczdu_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-fbczdu_END -->`, ""} <section class="grid grid-cols-1 md:grid-cols-[1fr_256px] gap-16"><div class="prose lg:prose-xl prose-headings:mb-1 prose-p:mt-1 col-span-full" data-svelte-h="svelte-18ltxwj"><h1>Notebook</h1> <p>Ideas, notes and whatever else Johannes publish.</p></div> <section class="col-span-1">${each(data.posts, (post) => {
    return `<article class="my-2"><a class="flex flex-col md:flex-row text-accent-content hover:text-accent-content-hover font-bold"${add_attribute("href", "posts/" + post.slug, 0)}><header>${escape(post.title)}</header> <div class="flex gap-1 md:ml-auto text-secondary-content pl-1 min-w-fit"><time${add_attribute("datetime", post.date, 0)}>${escape(formatDate(post.date))}</time> ${validate_component(CalendarDays, "CalendarDays").$$render($$result, { class: "hidden md:block" }, {}, {})} </div></a> </article>`;
  })}</section> ${isMainPage ? `<aside class="prose prose-headings:my-2 prose-a:underline col-span-1" data-svelte-h="svelte-129htde"><div class="glass rounded-box p-3 flex flex-col"><h2>Collected Webs</h2> <span><a href="https://www.wakingup.com/" target="_blank">Waking Up</a>, by Sam Harris</span> <span><a href="https://fortelabs.com/" target="_blank">Forte Labs</a>, by Tiago Forte</span></div></aside>` : ``}</section>`;
});
export {
  Page as default
};
