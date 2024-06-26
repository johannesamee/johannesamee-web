<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	import { CalendarDays } from 'lucide-svelte'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date"><CalendarDays />{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: var(--size-3);
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post p {
		margin-block-start: var(--size-1);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-2);
	}

	.title {
		font-size: var(--font-size-fluid-1);
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}

	li p {
		display: flex;
		align-content: center;
		gap: var(--size-2);
	}
</style>
