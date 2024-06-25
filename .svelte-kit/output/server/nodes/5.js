

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.qK9YHbZ1.js","_app/immutable/chunks/scheduler.B0edO3JY.js","_app/immutable/chunks/index.BIs59Lo2.js"];
export const stylesheets = [];
export const fonts = [];
