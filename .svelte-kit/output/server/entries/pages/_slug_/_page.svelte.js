import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component, m as missing_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-ylbs26_START -->${$$result.title = `<title>${escape(data.meta.title)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.meta.title, 0)}><!-- HEAD_svelte-ylbs26_END -->`, ""} <article class="col-span-full"> <div class="prose lg:prose-lg">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></article>`;
});
export {
  Page as default
};
