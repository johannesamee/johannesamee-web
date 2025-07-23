import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "Color Gradients and Noise Experiments (Dummy Post)",
  "description": "Tesing the color gradient and noise settings from open-props.",
  "date": "2024-6-26",
  "categories": ["sveltekit", "svelte"],
  "published": true
};
const _5_color_gradients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h3 id="gradient-images-from-open-props" data-svelte-h="svelte-q3iws"><del>Gradient Images from open-props</del></h3> <h3 id="open-props-is-no-longer-used" data-svelte-h="svelte-162pa3v"><code>open-props</code> is no longer used</h3> <p data-svelte-h="svelte-fwbkyy">Line 1 <br>
Line 2</p> <p data-svelte-h="svelte-1q2heft">Line 3
Line 4</p> <p data-svelte-h="svelte-1ds7gpg">CSS used</p> <!-- HTML_TAG_START -->${`<pre class="shiki rose-pine" style="background-color:#191724;color:#e0def4" tabindex="0"><code><span class="line"><span style="color:#908CAA;font-style:italic">.</span><span style="color:#C4A7E7;font-style:italic">gradient</span><span style="color:#908CAA"> &#123;</span></span>
<span class="line"><span style="color:#9CCFD8">		background-image</span><span style="color:#908CAA">:</span><span style="color:#EB6F92;font-style:italic"> var</span><span style="color:#908CAA">(</span><span style="color:#E0DEF4;font-style:italic">--gradient-3</span><span style="color:#908CAA">),</span><span style="color:#EB6F92;font-style:italic"> var</span><span style="color:#908CAA">(</span><span style="color:#E0DEF4;font-style:italic">--noise-3</span><span style="color:#908CAA">);</span></span>
<span class="line"><span style="color:#9CCFD8">		filter</span><span style="color:#908CAA">:</span><span style="color:#EB6F92;font-style:italic"> var</span><span style="color:#908CAA">(</span><span style="color:#E0DEF4;font-style:italic">--noise-filter-3</span><span style="color:#908CAA">);</span></span>
<span class="line"><span style="color:#9CCFD8">		background-size</span><span style="color:#908CAA">:</span><span style="color:#F6C177"> cover</span><span style="color:#908CAA">;</span></span>
<span class="line"><span style="color:#9CCFD8">		filter</span><span style="color:#908CAA">:</span><span style="color:#EB6F92;font-style:italic"> var</span><span style="color:#908CAA">(</span><span style="color:#E0DEF4;font-style:italic">--noise-filter-1</span><span style="color:#908CAA">);</span></span>
<span class="line"><span style="color:#9CCFD8">		border-radius</span><span style="color:#908CAA">:</span><span style="color:#EB6F92;font-style:italic"> var</span><span style="color:#908CAA">(</span><span style="color:#E0DEF4;font-style:italic">--radius-2</span><span style="color:#908CAA">);</span></span>
<span class="line"><span style="color:#9CCFD8">		aspect-ratio</span><span style="color:#908CAA">:</span><span style="color:#EB6F92;font-style:italic"> var</span><span style="color:#908CAA">(</span><span style="color:#E0DEF4;font-style:italic">--ratio-landscape</span><span style="color:#908CAA">);</span></span>
<span class="line"><span style="color:#908CAA">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-v3v6f"><del>These styles created this beautiful image. Now I just have to figure out how to get this as an image somehow so it can be used as preview images for links with <code>og:image</code> for example.</del></p>`;
    }
  })}`;
});
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _5_color_gradients,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_5 as _
};
