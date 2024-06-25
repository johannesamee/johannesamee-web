import * as universal from '../entries/pages/_slug_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/3.BK_Z4DUG.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.CVTL0etF.js","_app/immutable/chunks/index.cpxQQXN5.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/utils.3InfNRpA.js"];
export const stylesheets = ["_app/immutable/assets/3.gOD4MmU6.css"];
export const fonts = [];
