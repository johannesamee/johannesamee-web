---
title: Color Gradients and Noise Experiments
description: Tesing the color gradient and noise settings from open-props.
date: '2024-6-26'
categories:
  - sveltekit
  - svelte
published: true
---

<script>
import Gradient from './gradient.svelte'
</script>

### Gradient Images from open-props
CSS used
```css
.gradient {
		background-image: var(--gradient-3), var(--noise-3);
		filter: var(--noise-filter-3);
		background-size: cover;
		filter: var(--noise-filter-1);
		border-radius: var(--radius-2);
		aspect-ratio: var(--ratio-landscape);
}
```

Created the following beautiful image. Now I just have to figure out how to get this as an image somehow.

<Gradient />
