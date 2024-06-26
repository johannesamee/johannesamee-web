<script lang="ts">
	import Toggle from './toggle.svelte'
	import * as config from '$lib/config'

	import { Rss, Info, CircleUser } from 'lucide-svelte'
</script>

<nav>
	<a href="/" class="title">
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

	<Toggle />
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
