

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BRx_eA36.js","_app/immutable/chunks/scheduler.HexUyfy1.js","_app/immutable/chunks/index.CAYvhHec.js"];
export const stylesheets = [];
export const fonts = [];
