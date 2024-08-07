import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C-84TYBx.js","_app/immutable/chunks/scheduler.uuNsLXlX.js","_app/immutable/chunks/stores.5ZLs0aGY.js","_app/immutable/chunks/entry.LW09VBSM.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/index.BKg8bbRF.js","_app/immutable/chunks/Icon.DTWVIL2k.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = ["_app/immutable/assets/0.OCSAYiwF.css"];
export const fonts = ["_app/immutable/assets/manrope-cyrillic-wght-normal.C1zWlyYG.woff2","_app/immutable/assets/manrope-greek-wght-normal.-KUh6X2k.woff2","_app/immutable/assets/manrope-vietnamese-wght-normal.CvPE_C53.woff2","_app/immutable/assets/manrope-latin-ext-wght-normal.D62tbE3i.woff2","_app/immutable/assets/manrope-latin-wght-normal.DWlqe-xm.woff2","_app/immutable/assets/fira-code-cyrillic-ext-wght-normal.CN0639WT.woff2","_app/immutable/assets/fira-code-cyrillic-wght-normal.CWUSIOo3.woff2","_app/immutable/assets/fira-code-greek-ext-wght-normal.B8D921GV.woff2","_app/immutable/assets/fira-code-greek-wght-normal.ga5vWNon.woff2","_app/immutable/assets/fira-code-latin-ext-wght-normal.BBU9H7uk.woff2","_app/immutable/assets/fira-code-latin-wght-normal.D5jBWLYW.woff2"];
