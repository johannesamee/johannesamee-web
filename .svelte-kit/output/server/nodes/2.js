import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.Bb3yAJXP.js","_app/immutable/chunks/scheduler.uuNsLXlX.js","_app/immutable/chunks/index.BKg8bbRF.js","_app/immutable/chunks/Icon.DTWVIL2k.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/stores.CY7Md0l4.js","_app/immutable/chunks/entry.B7iEcUJs.js","_app/immutable/chunks/control.CYgJF_JY.js"];
export const stylesheets = [];
export const fonts = [];
