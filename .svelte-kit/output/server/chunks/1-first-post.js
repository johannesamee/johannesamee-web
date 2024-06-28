import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "First Markdown Page (Dummy Post)",
  "description": "First md file upload, testing markdown processor and code syntax.",
  "date": "2024-6-23",
  "categories": ["svelte", "markdown"],
  "published": true
};
const _1_first_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h2 id="markdown" data-svelte-h="svelte-1d849be">Markdown</h2> <p data-svelte-h="svelte-j40mwi"><code>PLACEHOLDER</code>
Reserved for later use.</p> <hr> <p data-svelte-h="svelte-1gdvj4f">Some <code>TypeScript</code> code:</p> <!-- HTML_TAG_START -->${`<pre class="shiki rose-pine" style="background-color:#191724;color:#e0def4" tabindex="0"><code><span class="line"><span style="color:#31748F">function</span><span style="color:#EBBCBA"> greet</span><span style="color:#908CAA">(</span><span style="color:#C4A7E7;font-style:italic">name</span><span style="color:#31748F">:</span><span style="color:#9CCFD8"> string</span><span style="color:#908CAA">)</span><span style="color:#908CAA"> &#123;</span></span>
<span class="line"><span style="color:#E0DEF4;font-style:italic">	console</span><span style="color:#31748F">.</span><span style="color:#EBBCBA">log</span><span style="color:#E0DEF4">(</span><span style="color:#F6C177">&#96;Hey </span><span style="color:#908CAA">$&#123;</span><span style="color:#E0DEF4;font-style:italic">name</span><span style="color:#908CAA">&#125;</span><span style="color:#F6C177">!&#96;</span><span style="color:#E0DEF4">)</span></span>
<span class="line"><span style="color:#908CAA">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END -->`;
    }
  })}`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _1_first_post,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
