

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.D1xM2ToI.js","_app/immutable/chunks/scheduler.HexUyfy1.js","_app/immutable/chunks/index.CAYvhHec.js"];
export const stylesheets = [];
export const fonts = [];
