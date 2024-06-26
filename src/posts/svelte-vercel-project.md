---
title: Svelte+Vercel Project
description: Export from a Bear Note to markdown. Example of a personal note kept during the making of this web.
date: '2023-6-26'
categories:
  - sveltekit
  - svelte
published: true
---

## Libraries etc
| Name         | Description                                              | URL                                                          |
|--------------|----------------------------------------------------------|--------------------------------------------------------------|
| Lucide Icons | Icons                                                    | [Lucide Icons](https://lucide.dev/)                          |
| ~~Melt UI~~  | UI Library                                               | [Melt UI](https://melt-ui.com/)                              |
| ~~Bits UI~~  | High level UI library for components<br>Based on Melt UI | [Bits UI](https://www.bits-ui.com/docs/introduction)         |
| mdsvex       | Svelte in markdown                                       | [mdsvex](https://mdsvex.pngwn.io/)                           |
| Open Props   | Supercharged CSS variables.                              | [open-props](https://open-props.style/)                      |
| remark       | Markdown processor powered by plugins                    | [remarkjs/remark](https://github.com/remarkjs/remark/tree/main?tab=readme-ov-file)<br>[remark plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md) |
| rehype       | HTML processor powered by plugins                        | [rehypejs/rehype](https://github.com/rehypejs/rehype/tree/main)<br>[rehype plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md) |
Melt UI and Bits UI, was too much work to deal with when I just wanted to set up something basic and start experimenting with it.
## Notes
1. Footnotes( `[^1]` ) did not work baseline when exporting as markdown, might need to check the plugins from remark.
2. Vercel doesn’t seem to build correctly, when I added a new `.md` file in the posts folder and deployed it did not show up until I ran `sudo pnpm build` before committing and pushing everything.
## To Do
- [ ] Table created in markdown file have a bad hover effect when in light mode in app
- [ ] `<p>`-tags always have a margin top making it look weird when exporting markdown text inside block quotes `> ` in app
## Further Reading
### Markdown / HTML processing
> `mdsvex` first parses the Markdown into a Markdown AST (MDAST) where **`remark`** plugins run and then it converts it into a HTML AST (HAST) where **`rehype`** plugins run.
> You don’t have to understand ASTs but I recommend reading **~[How to Modify Nodes in an Abstract Syntax Tree](https://css-tricks.com/how-to-modify-nodes-in-an-abstract-syntax-tree/)~** if you want to learn the fundamentals and write your own plugin which is just a JavaScript function.

### SvelteKit Transitions
> Adding some simple page transitions is going to give your site an air of whimsy and sophistication.
> I have an entire post on **~[SvelteKit Page Transitions](https://joyofcode.xyz/sveltekit-page-transitions)~** but the gist is that we need to know when the url changed to destroy and recreate the page which is going to play the transition.
