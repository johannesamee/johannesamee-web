import { e as error } from "../../../chunks/index2.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../posts/first-post.md": () => import("../../../chunks/first-post.js").then((n) => n._), "../../posts/second-post.md": () => import("../../../chunks/second-post.js").then((n) => n._), "../../posts/svelte-vercel-project.md": () => import("../../../chunks/svelte-vercel-project.js").then((n) => n._) }), `../../posts/${params.slug}.md`);
    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    error(404, `Could not find ${params.slug}`);
  }
}
export {
  load
};
