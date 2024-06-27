<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="col-span-full">
	<!-- <hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<small class="surface-4">&num;{category}</small>
		{/each}
	</div> -->

	<div class="prose lg:prose-lg">
		<svelte:component this={data.content} />
	</div>
</article>
