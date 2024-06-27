import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CTujsPsh.js","_app/immutable/chunks/scheduler.D4_qaxln.js","_app/immutable/chunks/index.BLeMwuBr.js","_app/immutable/chunks/Icon.CVfreB3I.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/stores.BpGv2zzG.js","_app/immutable/chunks/entry.BZuvU1mE.js","_app/immutable/chunks/control.CYgJF_JY.js"];
export const stylesheets = [];
export const fonts = [];
