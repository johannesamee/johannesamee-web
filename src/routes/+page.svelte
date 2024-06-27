<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	import { CalendarDays } from 'lucide-svelte'

	import { page } from '$app/stores'

	export let data

	$: isMainPage = $page.url.pathname === '/'
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="grid grid-cols-4">
	<ul class="posts col-span-3 mr-16">
		{#each data.posts as post}
			<article class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date"><CalendarDays />{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</article>
		{/each}
	</ul>
	{#if isMainPage}
		<div class="card bg-base-100 w-fit h-fit glass prose prose-a:underline">
			<div class="card-body">
				<h2 class="card-title">Collected Webs</h2>
				<span><a href="https://www.wakingup.com/" target="_blank">Waking Up</a>, by Sam Harris</span
				>
				<span><a href="https://fortelabs.com/" target="_blank">Forte Labs</a>, by Tiago Forte</span>
			</div>
		</div>
	{/if}
</section>

<style>
</style>
