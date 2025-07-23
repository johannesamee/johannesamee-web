import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "Praise the Rain, by Joy Harjo",
  "description": "What does praise mean to you? Joy Harjo gives the perspective that one can and should praise no matter how they feel.",
  "date": "2024-7-27",
  "categories": ["poetry"],
  "published": true
};
const _9_praise_the_rain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1 id="praise-the-rain-by-joy-harjo" data-svelte-h="svelte-w3m0sg">“Praise the Rain” by Joy Harjo</h1> <blockquote data-svelte-h="svelte-1p8uwt2"><p>Praise the rain, the seagull dive <br>
The curl of plant, the raven talk — <br>
Praise the hurt, the house slack <br>
The stand of trees, the dignity — <br>
Praise the dark, the moon cradle <br>
The sky fall, the bear sleep — <br>
Praise the mist, the warrior name <br>
The earth eclipse, the fired leap — <br>
Praise the backwards, upward sky <br>
The baby cry, the spirit food — <br>
Praise canoe, the fish rush <br>
The hole for frog, the upside-down — <br>
Praise the day, the cloud cup <br>
The mind flat, forget it all — <br> <br>
Praise crazy. Praise sad. <br>
Praise the path on which we’re led. <br>
Praise the roads on earth and water. <br>
Praise the eater and the eaten. <br>
Praise beginnings; praise the end. <br>
Praise the song and praise the singer. <br> <br>
Praise the rain; it brings more rain. <br>
Praise the rain; it brings more rain.</p></blockquote> <p data-svelte-h="svelte-8787ak">What does “Praise” mean to you?</p> <p data-svelte-h="svelte-1ixd2n7">I think Joy wants to show a different praise than I had in mind. A praise that has nothing to do with whether I’m happy or sad, an appreciation, experiencing rain, or the “crazy” and “sad” in a real and truthful way.</p> <p data-svelte-h="svelte-b3ldhd">“Praise the backwards, upward sky”, I don’t know what this means but I should praise it all the same. It might mean something to someone else, and by praising it, I also praise that individual.</p> <p data-svelte-h="svelte-u1mtky">Be present, and seek a more truthful experience by praising all aspects of life.</p>`;
    }
  })}`;
});
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _9_praise_the_rain,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_9 as _
};
