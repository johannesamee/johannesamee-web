import * as universal from '../entries/pages/posts/_slug_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/5.IQDYJOS7.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.uuNsLXlX.js","_app/immutable/chunks/index.BKg8bbRF.js"];
export const stylesheets = ["_app/immutable/assets/6-congratulations-aeon.C_RTBF2R.css"];
export const fonts = [];
