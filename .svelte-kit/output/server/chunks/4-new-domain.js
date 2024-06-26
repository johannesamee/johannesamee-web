import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "New Domain johannesamee.com",
  "description": "Testing deployments to new domain via vercel",
  "date": "2023-6-26",
  "categories": ["sveltekit", "svelte"],
  "published": true
};
const _4_new_domain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h3 id="say-hello-to-wwwjohannesameecom" data-svelte-h="svelte-cma8a8">Say hello to <a href="http://www.johannesamee.com" rel="nofollow">www.johannesamee.com</a></h3> <p data-svelte-h="svelte-1rscr85">This page should trigger a deploy to the new domain johannesamee.com</p>`;
    }
  })}`;
});
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _4_new_domain,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_3 as _
};
