import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "New Domain, www.johannesamee.com",
  "description": "Deploying to the new domain via vercel.",
  "date": "2024-6-26",
  "categories": ["sveltekit", "svelte"],
  "published": true
};
const _4_new_domain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1 id="say-hello-to-wwwjohannesameecom" data-svelte-h="svelte-1872woo">Say hello to <a href="http://www.johannesamee.com" rel="nofollow">www.johannesamee.com</a></h1> <p data-svelte-h="svelte-1rojw1y">This page should trigger a deploy to the new domain <a href="http://www.johannesamee.com" rel="nofollow">www.johannesamee.com</a> via Vercel.</p> <p data-svelte-h="svelte-11u7ywa">I’m still having some problems with Vercel and getting it to build correctly so that the new markdown files in <code>/posts/</code> that are handled as posts are updated. It seems like it’s neither being build when I change files or add new ones.</p>`;
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
