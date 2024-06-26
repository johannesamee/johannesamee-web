import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { M as Mdsvex } from "./mdsvex.js";
const css = {
  code: ".gradient.svelte-19u65kp{margin-block-start:var(--size-2);background-image:var(--gradient-3), var(--noise-3);filter:var(--noise-filter-3);background-size:cover;filter:var(--noise-filter-1);border-radius:var(--radius-2);aspect-ratio:var(--ratio-landscape)}",
  map: null
};
const Gradient = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="gradient svelte-19u65kp"></div>`;
});
const metadata = {
  "title": "Color Gradients and Noise Experiments",
  "description": "Tesing the color gradient and noise settings from open-props.",
  "date": "2024-6-26",
  "categories": ["sveltekit", "svelte"],
  "published": true
};
const _5_color_gradients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h3 id="gradient-images-from-open-props" data-svelte-h="svelte-i69ou9">Gradient Images from open-props</h3> <p data-svelte-h="svelte-1ds7gpg">CSS used</p> <!-- HTML_TAG_START -->${`<pre class="shiki poimandres" style="background-color:#1b1e28;color:#a6accd" tabindex="0"><code><span class="line"><span style="color:#E4F0FBD0;font-style:italic">.</span><span style="color:#5FB3A1;font-style:italic">gradient</span><span style="color:#A6ACCD"> &#123;</span></span>
<span class="line"><span style="color:#ADD7FF">		background-image</span><span style="color:#A6ACCD">: var(--gradient-3), var(--noise-3);</span></span>
<span class="line"><span style="color:#ADD7FF">		filter</span><span style="color:#A6ACCD">: var(--noise-filter-3);</span></span>
<span class="line"><span style="color:#ADD7FF">		background-size</span><span style="color:#A6ACCD">: </span><span style="color:#ADD7FF">cover</span><span style="color:#A6ACCD">;</span></span>
<span class="line"><span style="color:#ADD7FF">		filter</span><span style="color:#A6ACCD">: var(--noise-filter-1);</span></span>
<span class="line"><span style="color:#ADD7FF">		border-radius</span><span style="color:#A6ACCD">: var(--radius-2);</span></span>
<span class="line"><span style="color:#A6ACCD">		aspect-ratio: var(--ratio-landscape);</span></span>
<span class="line"><span style="color:#A6ACCD">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-aygi1l">Created the following beautiful image. Now I just have to figure out how to get this as an image somehow.</p> ${validate_component(Gradient, "Gradient").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _5_color_gradients,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_4 as _
};
