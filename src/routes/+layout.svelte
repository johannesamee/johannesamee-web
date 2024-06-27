<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import PageTransition from './transition.svelte'

	import '../app.css'

	export let data
</script>

<div class="layout max-w-screen-lg mx-auto">
	<Header />

	<main class="">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>

<style>
</style>
