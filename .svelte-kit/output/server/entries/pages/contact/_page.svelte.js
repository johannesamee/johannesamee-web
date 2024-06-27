import { c as create_ssr_component, a as subscribe, b as spread, d as escape_object } from "../../../chunks/ssr.js";
import { c as createLinkPreview } from "../../../chunks/create.js";
const css = {
  code: ".trigger.svelte-1lpdtxm{display:flex;height:3rem;width:3rem;align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0px;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgb(121 58 21 / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.trigger.svelte-1lpdtxm:hover{background-color:rgb(255 255 255 / 0.9)\n}.trigger.svelte-1lpdtxm:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgb(247 177 85 / var(--tw-ring-opacity));--tw-ring-offset-width:2px\n}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $trigger, $$unsubscribe_trigger;
  let $open, $$unsubscribe_open;
  let $content, $$unsubscribe_content;
  let $arrow, $$unsubscribe_arrow;
  const { elements: { trigger, content, arrow }, states: { open } } = createLinkPreview({ forceVisible: true });
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_arrow = subscribe(arrow, (value) => $arrow = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  $$result.css.add(css);
  $$unsubscribe_trigger();
  $$unsubscribe_open();
  $$unsubscribe_content();
  $$unsubscribe_arrow();
  return `<article class="prose lg:prose-xl"><h1 data-svelte-h="svelte-tbczl2">Contact</h1> <a${spread(
    [
      { class: "trigger" },
      {
        href: "https://www.linkedin.com/in/johannes-amée-björkdahl-ab7495a9"
      },
      { target: "_blank" },
      { rel: "noopener noreferrer" },
      escape_object($trigger)
    ],
    { classes: "svelte-1lpdtxm" }
  )}><img src="https://media.licdn.com/dms/image/D4D03AQEXI0MHYf3fQA/profile-displayphoto-shrink_200_200/0/1710513333483?e=1724889600&v=beta&t=sH3WNF2xdILIzdPQwj5rjrw7PgKgoPJuzL8dbUWQnxk" alt="Melt UI Logo" class="h-full w-full rounded-full bg-neutral-900 object-contain p-1"> <span class="sr-only" data-svelte-h="svelte-ts639p">Open Melt UI Details</span></a> ${$open ? `<div${spread(
    [
      escape_object($content),
      {
        class: "z-10 rounded-md bg-white shadow-sm"
      }
    ],
    { classes: "svelte-1lpdtxm" }
  )}><div class="w-[300px] rounded-md bg-white p-5 shadow-sm" data-svelte-h="svelte-12ow3pn"><div class="flex flex-col gap-2"><img src="https://media.licdn.com/dms/image/D4D03AQEXI0MHYf3fQA/profile-displayphoto-shrink_200_200/0/1710513333483?e=1724889600&v=beta&t=sH3WNF2xdILIzdPQwj5rjrw7PgKgoPJuzL8dbUWQnxk" alt="Linkedin Profile Picture" class="object-fit block h-14 w-14 rounded-full bg-neutral-900 p-1"> <div class="flex flex-col gap-4"><div><div class="font-bold text-neutral-900">Johannes Amée Björkdahl</div> <div class="text-neutral-400">Decerno AB | LinkedIn</div></div></div> <div class="m-0 text-neutral-700">Johannes focuses on clear communication between all parties involved to guarantee that
						the best product is delivered.</div> <div class="flex gap-4"><div class="flex gap-1"><a class="text-neutral-400 underline" href="https://www.linkedin.com/company/decerno-ab/">Decerno AB</a></div> <div class="flex gap-1"><div class="text-neutral-400">Gothenburg</div></div></div></div></div> <div${spread([escape_object($arrow)], { classes: "svelte-1lpdtxm" })}></div></div>` : ``} </article>`;
});
export {
  Page as default
};
