import "../../chunks/client.js";
import { inject } from "@vercel/analytics";
inject({ mode: "production" });
const prerender = true;
async function load({ url }) {
  return {
    url: url.pathname
  };
}
export {
  load,
  prerender
};
