

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CEiu0m0K.js","_app/immutable/chunks/scheduler.DWE2ryb4.js","_app/immutable/chunks/index.DiUfanPG.js"];
export const stylesheets = [];
export const fonts = [];
