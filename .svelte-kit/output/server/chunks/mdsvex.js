import { c as create_ssr_component } from "./ssr.js";
const Mdsvex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Mdsvex as M
};
