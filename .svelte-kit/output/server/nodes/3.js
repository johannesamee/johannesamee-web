import * as universal from '../entries/pages/_slug_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/3.B4Rll1V9.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.B0edO3JY.js","_app/immutable/chunks/index.BIs59Lo2.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/utils.3InfNRpA.js"];
export const stylesheets = ["_app/immutable/assets/3.gOD4MmU6.css"];
export const fonts = [];
