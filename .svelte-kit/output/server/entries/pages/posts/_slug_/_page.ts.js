import { e as error } from "../../../../chunks/index.js";
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
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../posts/1-first-post.md": () => import("../../../../chunks/1-first-post.js").then((n) => n._), "../../../posts/10-pickling-cucumbers-guide.md": () => import("../../../../chunks/10-pickling-cucumbers-guide.js").then((n) => n._), "../../../posts/2-second-post.md": () => import("../../../../chunks/2-second-post.js").then((n) => n._), "../../../posts/3-svelte-vercel-project.md": () => import("../../../../chunks/3-svelte-vercel-project.js").then((n) => n._), "../../../posts/4-new-domain.md": () => import("../../../../chunks/4-new-domain.js").then((n) => n._), "../../../posts/5-color-gradients.md": () => import("../../../../chunks/5-color-gradients.js").then((n) => n._), "../../../posts/6-congratulations-aeon.md": () => import("../../../../chunks/6-congratulations-aeon.js").then((n) => n._), "../../../posts/7-journey-before-destination.md": () => import("../../../../chunks/7-journey-before-destination.js").then((n) => n._), "../../../posts/8-ode-to-buttoning.md": () => import("../../../../chunks/8-ode-to-buttoning.js").then((n) => n._), "../../../posts/9-praise-the-rain.md": () => import("../../../../chunks/9-praise-the-rain.js").then((n) => n._) }), `../../../posts/${params.slug}.md`);
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
