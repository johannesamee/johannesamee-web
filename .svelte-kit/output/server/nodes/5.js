

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.D9XO3OGN.js","_app/immutable/chunks/scheduler.CVTL0etF.js","_app/immutable/chunks/index.cpxQQXN5.js"];
export const stylesheets = [];
export const fonts = [];
