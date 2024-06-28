import { _ as __vite_glob_0_0 } from "../../../../chunks/1-first-post.js";
import { _ as __vite_glob_0_1 } from "../../../../chunks/2-second-post.js";
import { _ as __vite_glob_0_2 } from "../../../../chunks/3-svelte-vercel-project.js";
import { _ as __vite_glob_0_3 } from "../../../../chunks/4-new-domain.js";
import { _ as __vite_glob_0_4 } from "../../../../chunks/5-color-gradients.js";
import { _ as __vite_glob_0_5 } from "../../../../chunks/6-congratulations-aeon.js";
import { _ as __vite_glob_0_6 } from "../../../../chunks/7-journey-before-destination.js";
import { j as json } from "../../../../chunks/index.js";
async function getPosts() {
  let posts = [];
  const paths = /* @__PURE__ */ Object.assign({ "/src/posts/1-first-post.md": __vite_glob_0_0, "/src/posts/2-second-post.md": __vite_glob_0_1, "/src/posts/3-svelte-vercel-project.md": __vite_glob_0_2, "/src/posts/4-new-domain.md": __vite_glob_0_3, "/src/posts/5-color-gradients.md": __vite_glob_0_4, "/src/posts/6-congratulations-aeon.md": __vite_glob_0_5, "/src/posts/7-journey-before-destination.md": __vite_glob_0_6 });
  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");
    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata;
      const post = { ...metadata, slug };
      post.published && posts.push(post);
    }
  }
  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );
  return posts;
}
async function GET() {
  const posts = await getPosts();
  return json(posts);
}
export {
  GET
};
