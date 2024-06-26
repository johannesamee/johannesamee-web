<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import PageTransition from './transition.svelte'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'
	import '../app.css'

	export let data
</script>

<div class="layout">
	<Header />

	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
		<div class="card">
			<h5>Collected webs</h5>
			<section>
				<a href="https://www.wakingup.com/" target="_blank">Waking Up</a><br />
				<small>A New Operating System for Your Mind</small>
			</section>
			<section>
				<a href="https://fortelabs.com/" target="_blank">Forte Labs</a><br />
				<small>What's Your Productivity Potential?</small>
			</section>
		</div>
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1024px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
		display: grid;
		grid-template-columns: 1fr 256px;
		gap: 64px;
	}
	.card {
		flex-basis: var(--size-content-1);
		display: flex;
		align-self: start;
		flex-direction: column;
		gap: var(--size-2);
		background: var(--surface-3);
		border: 1px solid var(--surface-1);
		padding: var(--size-4);
		border-radius: var(--radius-3);
	}

	.card > h5 {
		line-height: var(--font-lineheight-1);
	}

	@media (min-width: 1024px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
