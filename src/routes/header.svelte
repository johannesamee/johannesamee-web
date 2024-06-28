<script lang="ts">
	import Toggle from './toggle.svelte'
	import * as config from '$lib/config'

	import { Rss, Info, CircleUser } from 'lucide-svelte'

	export let url
	$: isMainPage = url === '/'
</script>

<nav>
	<div class="navbar px-0 bg-base-100 mb-8 z-10 gap-1">
		<div
			class="{isMainPage ? 'flex-col md:flex-row md:items-center' : 'flex-col'} gap-1 items-start"
		>
			<a
				href="/"
				class="btn btn-ghost text-xl pl-0
				    {isMainPage ? 'h-12' : 'h-fit'}
					{isMainPage ? 'min-h-12' : 'min-h-fit'}"
				><div class="avatar">
					<div class="w-12 max-w-12 rounded-full">
						<img src="../avatar.jpeg" />
					</div>
				</div>
				{config.title}
			</a>
			<div class="badge badge-info">Under Construction</div>
		</div>
		<div class="flex-none ml-auto">
			<ul class="hidden md:inline-flex menu menu-horizontal">
				<li><a href="/contact">Contact</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/rss.xml" target="_blank">RSS</a></li>
			</ul>
			<ul class="inline-flex md:hidden menu menu-horizontal px-1">
				<li>
					<details>
						<summary>Menu</summary>
						<ul class="bg-base-100 rounded-t-none p-2">
							<li><a href="/contact">Contact</a></li>
							<li><a href="/about">About</a></li>
							<li><a href="/rss.xml" target="_blank">RSS</a></li>
						</ul>
					</details>
				</li>
			</ul>
		</div>
	</div>
</nav>
