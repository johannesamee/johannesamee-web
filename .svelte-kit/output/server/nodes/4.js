

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CUwPme6P.js","_app/immutable/chunks/scheduler.D5mtbMwm.js","_app/immutable/chunks/index.C453Bwz7.js"];
export const stylesheets = [];
export const fonts = [];
