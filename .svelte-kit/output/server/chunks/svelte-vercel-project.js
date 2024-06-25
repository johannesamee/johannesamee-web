import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "Svelte+Vercel Project",
  "description": "Export from a Bear Note.",
  "date": "2023-6-26",
  "categories": ["sveltekit", "svelte"],
  "published": true
};
const Svelte_vercel_project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1 id="svelte--vercel-project" data-svelte-h="svelte-16k2g9w">Svelte + Vercel Project</h1> <p data-svelte-h="svelte-lztqxa">#svelte</p> <h2 id="libraries-etc" data-svelte-h="svelte-1dirgfv">Libraries etc</h2> <table data-svelte-h="svelte-177duqy"><thead><tr><th>Name</th> <th>Description</th> <th>URL</th></tr></thead> <tbody><tr><td>Lucide Icons</td> <td>Icons</td> <td><a href="https://lucide.dev/" rel="nofollow">Lucide Icons</a></td></tr> <tr><td>mdsvex</td> <td>Svelte in markdown</td> <td><a href="https://mdsvex.pngwn.io/" rel="nofollow">mdsvex</a></td></tr> <tr><td>Open Props</td> <td>Supercharged CSS variables.</td> <td><a href="https://open-props.style/" rel="nofollow">open-props</a></td></tr> <tr><td>remark</td> <td>Markdown processor powered by plugins</td> <td><a href="https://github.com/remarkjs/remark/tree/main?tab=readme-ov-file" rel="nofollow">remarkjs/remark</a><br><a href="https://github.com/remarkjs/remark/blob/main/doc/plugins.md" rel="nofollow">remark plugins</a></td></tr> <tr><td>rehype</td> <td>HTML processor powered by plugins</td> <td><a href="https://github.com/rehypejs/rehype/tree/main" rel="nofollow">rehypejs/rehype</a><br><a href="https://github.com/rehypejs/rehype/blob/main/doc/plugins.md" rel="nofollow">rehype plugins</a></td></tr></tbody></table> <p data-svelte-h="svelte-1r7v5hj">Melt UI[^1] and Bits UI[^2], was too much work to deal with when I just wanted to set up something basic and start experimenting with it.</p> <h2 id="further-reading" data-svelte-h="svelte-1ozzvox">Further Reading</h2> <h3 id="markdown--html-processing" data-svelte-h="svelte-iv7cbo">Markdown / HTML processing</h3> <blockquote data-svelte-h="svelte-155jawr"><p><code>mdsvex</code> first parses the Markdown into a Markdown AST (MDAST) where <strong><code>remark</code></strong> plugins run and then it converts it into a HTML AST (HAST) where <strong><code>rehype</code></strong> plugins run.
You don’t have to understand ASTs but I recommend reading <strong>~<a href="https://css-tricks.com/how-to-modify-nodes-in-an-abstract-syntax-tree/" rel="nofollow">How to Modify Nodes in an Abstract Syntax Tree</a>~</strong> if you want to learn the fundamentals and write your own plugin which is just a JavaScript function.</p></blockquote> <h3 id="sveltekit-transitions" data-svelte-h="svelte-jwdmfp">SvelteKit Transitions</h3> <blockquote data-svelte-h="svelte-162vu04"><p>Adding some simple page transitions is going to give your site an air of whimsy and sophistication.
I have an entire post on <strong>~<a href="https://joyofcode.xyz/sveltekit-page-transitions" rel="nofollow">SvelteKit Page Transitions</a>~</strong> but the gist is that we need to know when the url changed to destroy and recreate the page which is going to play the transition.</p></blockquote> <hr> <p data-svelte-h="svelte-g10i58">[^1]: <a href="https://melt-ui.com/" rel="nofollow">Melt UI</a> UI Library
[^2]: <a href="https://www.bits-ui.com/docs/introduction" rel="nofollow">Bits UI</a> UI Library, based on Melt UI</p>`;
    }
  })}`;
});
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Svelte_vercel_project,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_2 as _
};
