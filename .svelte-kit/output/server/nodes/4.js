

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BjBQjQkp.js","_app/immutable/chunks/scheduler.CVTL0etF.js","_app/immutable/chunks/index.cpxQQXN5.js"];
export const stylesheets = [];
export const fonts = [];
