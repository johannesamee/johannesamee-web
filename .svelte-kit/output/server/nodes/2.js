import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.Cy9uxMo-.js","_app/immutable/chunks/scheduler.B0edO3JY.js","_app/immutable/chunks/index.BIs59Lo2.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/utils.3InfNRpA.js","_app/immutable/chunks/config.DYj2o_NS.js"];
export const stylesheets = ["_app/immutable/assets/2.BGaztm0e.css"];
export const fonts = [];
