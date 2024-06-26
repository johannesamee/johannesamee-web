import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BlDchiah.js","_app/immutable/chunks/scheduler.HexUyfy1.js","_app/immutable/chunks/index.CAYvhHec.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/utils.3InfNRpA.js","_app/immutable/chunks/Icon.COf1E0w8.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = ["_app/immutable/assets/2.Ps3lyohq.css"];
export const fonts = [];
