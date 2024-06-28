<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import PageTransition from './transition.svelte'
	import { page } from '$app/stores'
	import '../app.css'

	export let data
	$: isMainPage = data.url === '/'
</script>

<div class="max-w-screen-{isMainPage ? 'lg' : 'sm'} layout mx-auto p-4">
	<Header url={data.url} />

	<main class="max-w-screen-l">
		<PageTransition url={'posts/' + data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>

<style>
	/* Manually forcing these since tailwind seems to have problems generating them in time */
	.max-w-screen-sm {
		max-width: 640px;
	}

	.max-w-screen-lg {
		max-width: 1024px;
	}
</style>
