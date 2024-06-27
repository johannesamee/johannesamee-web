

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CiJs-0Vi.js","_app/immutable/chunks/scheduler.DWE2ryb4.js","_app/immutable/chunks/index.DiUfanPG.js"];
export const stylesheets = [];
export const fonts = [];
