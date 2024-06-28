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
<section class="grid grid-cols-1 md:grid-cols-[1fr_256px] gap-16">
	<div class="prose lg:prose-xl prose-headings:mb-1 prose-p:mt-1 col-span-full">
		<h1>Notebook</h1>
		<p>Ideas, notes and whatever else Johannes publish.</p>
	</div>
	<section class="col-span-1">
		{#each data.posts as post}
			<article class="my-2">
				<a
					class="flex flex-col md:flex-row text-accent-content hover:text-accent-content-hover font-bold"
					href={'posts/' + post.slug}
				>
					<header>{post.title}</header>

					<div class="flex gap-1 md:ml-auto text-secondary-content">
						<time datetime={post.date}> {formatDate(post.date)}</time>
						<CalendarDays class="hidden md:block" />
					</div>
				</a>
			</article>
		{/each}
	</section>
	{#if isMainPage}
		<aside class="prose prose-headings:my-2 prose-a:underline col-span-1">
			<div class="glass rounded-box p-3 flex flex-col">
				<h2>Collected Webs</h2>
				<span><a href="https://www.wakingup.com/" target="_blank">Waking Up</a>, by Sam Harris</span
				>
				<span><a href="https://fortelabs.com/" target="_blank">Forte Labs</a>, by Tiago Forte</span>
			</div>
		</aside>
	{/if}
</section>
