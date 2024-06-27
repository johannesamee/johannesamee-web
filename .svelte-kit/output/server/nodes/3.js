import * as universal from '../entries/pages/_slug_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/3.DqxnzFbK.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.D4_qaxln.js","_app/immutable/chunks/index.BLeMwuBr.js"];
export const stylesheets = ["_app/immutable/assets/5-color-gradients.6tL7uSJv.css"];
export const fonts = [];
