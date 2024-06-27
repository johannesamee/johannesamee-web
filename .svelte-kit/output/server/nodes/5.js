

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.2aE87Wbi.js","_app/immutable/chunks/scheduler.D4_qaxln.js","_app/immutable/chunks/index.BLeMwuBr.js"];
export const stylesheets = [];
export const fonts = [];
