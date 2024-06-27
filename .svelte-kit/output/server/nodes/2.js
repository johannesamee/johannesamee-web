import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CDehlQSK.js","_app/immutable/chunks/scheduler.DWE2ryb4.js","_app/immutable/chunks/index.DiUfanPG.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/utils.3InfNRpA.js","_app/immutable/chunks/Icon._WXXitNL.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/stores.BYp0Bmeb.js","_app/immutable/chunks/entry.DrF0u_6x.js","_app/immutable/chunks/control.CYgJF_JY.js"];
export const stylesheets = [];
export const fonts = [];
