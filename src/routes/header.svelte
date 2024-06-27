<script lang="ts">
	import Toggle from './toggle.svelte'
	import * as config from '$lib/config'

	import { Rss, Info, CircleUser } from 'lucide-svelte'
</script>

<nav>
	<div class="navbar px-0 bg-base-100 mb-8 z-10 gap-1">
		<div class="avatar">
			<div class="w-12 rounded-full">
				<img
					src="https://media.licdn.com/dms/image/D4D03AQEXI0MHYf3fQA/profile-displayphoto-shrink_800_800/0/1710513333483?e=1724889600&v=beta&t=Da52QVeoZ8fdB5Ch-5WrqVHyAyMmG5S2VfdOVFNIxds"
					alt="Linkedin Profile Picture"
				/>
			</div>
		</div>
		<div class="flex-1 gap-1">
			<a href="/" class="btn btn-ghost text-xl">{config.title}</a>
			<div class="badge badge-info">Under Construction</div>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/contact">Contact</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/rss.xml" target="_blank">RSS</a></li>
			</ul>
		</div>
	</div>

	<!-- <a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links">
		<li>
			<a href="/about">
				<Info />
				<span>About</span>
			</a>
		</li>
		<li>
			<a href="/contact">
				<CircleUser />
				<span>Contact</span>
			</a>
		</li>
		<li>
			<a href="/rss.xml" target="_blank">
				<Rss />
				<span>RSS</span>
			</a>
		</li>
	</ul>

	<Toggle /> -->
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.links li a {
		display: flex;
		align-content: center;
		gap: var(--size-2);
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
