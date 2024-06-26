import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "Svelte Web with Markdown Processor",
  "description": "Export from a Bear Note to markdown. Example of a personal note kept during the making of this web.",
  "date": "2024-6-25",
  "categories": ["sveltekit", "svelte"],
  "published": true
};
const _3_svelte_vercel_project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h2 id="libraries-etc" data-svelte-h="svelte-1dirgfv">Libraries etc</h2> <table data-svelte-h="svelte-yts8i4"><thead><tr><th>Name</th> <th>Description</th> <th>URL</th></tr></thead> <tbody><tr><td>Lucide Icons</td> <td>Icons</td> <td><a href="https://lucide.dev/" rel="nofollow">Lucide Icons</a></td></tr> <tr><td><del>Melt UI</del></td> <td>UI Library</td> <td><a href="https://melt-ui.com/" rel="nofollow">Melt UI</a></td></tr> <tr><td><del>Bits UI</del></td> <td>High level UI library for components<br>Based on Melt UI</td> <td><a href="https://www.bits-ui.com/docs/introduction" rel="nofollow">Bits UI</a></td></tr> <tr><td>mdsvex</td> <td>Svelte in markdown</td> <td><a href="https://mdsvex.pngwn.io/" rel="nofollow">mdsvex</a></td></tr> <tr><td>Open Props</td> <td>Supercharged CSS variables.</td> <td><a href="https://open-props.style/" rel="nofollow">open-props</a></td></tr> <tr><td>remark</td> <td>Markdown processor powered by plugins</td> <td><a href="https://github.com/remarkjs/remark/tree/main?tab=readme-ov-file" rel="nofollow">remarkjs/remark</a><br><a href="https://github.com/remarkjs/remark/blob/main/doc/plugins.md" rel="nofollow">remark plugins</a></td></tr> <tr><td>rehype</td> <td>HTML processor powered by plugins</td> <td><a href="https://github.com/rehypejs/rehype/tree/main" rel="nofollow">rehypejs/rehype</a><br><a href="https://github.com/rehypejs/rehype/blob/main/doc/plugins.md" rel="nofollow">rehype plugins</a></td></tr></tbody></table> <p data-svelte-h="svelte-172lwxg">Melt UI and Bits UI, was too much work to deal with when I just wanted to set up something basic and start experimenting with it.</p> <h2 id="notes" data-svelte-h="svelte-1xkn3ho">Notes</h2> <ol data-svelte-h="svelte-lotvip"><li>Footnotes( <code>[^1]</code> ) did not work baseline when exporting as markdown, might need to check the plugins from remark.</li> <li>Vercel doesn’t seem to build correctly, when I added a new <code>.md</code> file in the posts folder and deployed it did not show up until I ran <code>sudo pnpm build</code> before committing and pushing everything.</li></ol> <h2 id="to-do" data-svelte-h="svelte-1kwhcpr">To Do</h2> <ul class="contains-task-list" data-svelte-h="svelte-1wtuxbc"><li class="task-list-item"><input type="checkbox" disabled> Table created in markdown file have a bad hover effect when in light mode in app</li> <li class="task-list-item"><input type="checkbox" disabled> <code>&lt;p&gt;</code>-tags always have a margin top making it look weird when exporting markdown text inside block quotes <code>&gt;</code> in app</li></ul> <h3 id="further-reading" data-svelte-h="svelte-1j5mafv">Further Reading</h3> <h4 id="markdown--html-processing" data-svelte-h="svelte-1s6jd34">Markdown / HTML processing</h4> <blockquote data-svelte-h="svelte-155jawr"><p><code>mdsvex</code> first parses the Markdown into a Markdown AST (MDAST) where <strong><code>remark</code></strong> plugins run and then it converts it into a HTML AST (HAST) where <strong><code>rehype</code></strong> plugins run.
You don’t have to understand ASTs but I recommend reading <strong>~<a href="https://css-tricks.com/how-to-modify-nodes-in-an-abstract-syntax-tree/" rel="nofollow">How to Modify Nodes in an Abstract Syntax Tree</a>~</strong> if you want to learn the fundamentals and write your own plugin which is just a JavaScript function.</p></blockquote> <h4 id="sveltekit-transitions" data-svelte-h="svelte-1fyjhsn">SvelteKit Transitions</h4> <blockquote data-svelte-h="svelte-162vu04"><p>Adding some simple page transitions is going to give your site an air of whimsy and sophistication.
I have an entire post on <strong>~<a href="https://joyofcode.xyz/sveltekit-page-transitions" rel="nofollow">SvelteKit Page Transitions</a>~</strong> but the gist is that we need to know when the url changed to destroy and recreate the page which is going to play the transition.</p></blockquote>`;
    }
  })}`;
});
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _3_svelte_vercel_project,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_2 as _
};
