

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.C110p0Wa.js","_app/immutable/chunks/scheduler.B0edO3JY.js","_app/immutable/chunks/index.BIs59Lo2.js"];
export const stylesheets = [];
export const fonts = [];
